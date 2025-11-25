// src/lib/barcode.ts
export async function generateBarcodeSvg(
    number: string,
    options: { includeText?: boolean; textSize?: number; height?: number } = {}
): Promise<string> {
    const bwipjs = await import('bwip-js');

    const isUPCA = number.length === 13 && number.startsWith('0');
    const cleanNumber = number.replace(/^0+/, '') || '0';

    const opts: any = {
        bcid: isUPCA ? 'upca' : 'ean13',
        text: cleanNumber,
        scale: 3,
        height: options.height ?? 15,
        includetext: true,
        textxalign: 'center',
        textsize: options.textSize ?? 13,
        backgroundcolor: 'FFFFFF',
        paddingwidth: 16,
        paddingheight: 12
    };

    // Generate SVG exactly as bwip-js outputs it
    let svg = bwipjs.default.toSVG(opts);

    // ---- FIX: Extract or set proper viewBox instead of forcing 400x200 ----
    if (!svg.includes("viewBox")) {
        const widthMatch = svg.match(/width="([\d.]+)"/);
        const heightMatch = svg.match(/height="([\d.]+)"/);

        const w = widthMatch ? Number(widthMatch[1]) : 300;
        const h = heightMatch ? Number(heightMatch[1]) : 150;

        svg = svg.replace(
            /<svg/,
            `<svg viewBox="0 0 ${w} ${h}" preserveAspectRatio="xMidYMid meet"`
        );
    }

    // Fix UPC-A number text override
    if (isUPCA) {
        svg = svg.replace(
            /<text[^>]*>.*?<\/text>/,
            `<text x="50%" y="92%" font-family="OCR-B,monospace" font-size="13" text-anchor="middle" fill="black">${number}</text>`
        );
    }

    return `<?xml version="1.0" encoding="UTF-8"?>\n${svg}`;
}
