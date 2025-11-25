// src/lib/export.ts
export function downloadSvg(svgString: string, filename = 'barcode.svg') {
    const blob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// ---- PNG conversion ----
export async function svgToPngBlob(svgEl: SVGSVGElement): Promise<Blob> {
    return new Promise((resolve, reject) => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        if (!ctx) return reject();

        const width = svgEl.viewBox.baseVal.width || svgEl.width.baseVal.value;
        const height = svgEl.viewBox.baseVal.height || svgEl.height.baseVal.value;

        canvas.width = width * 3;
        canvas.height = height * 3;

        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        const img = new Image();
        img.crossOrigin = 'anonymous'; // SAFARI FIX

        const svgData = new XMLSerializer().serializeToString(svgEl);
        const blob = new Blob([svgData], { type: 'image/svg+xml' });
        const url = URL.createObjectURL(blob);

        img.onload = () => {
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            URL.revokeObjectURL(url);
            canvas.toBlob(
                b => (b ? resolve(b) : reject()),
                'image/png',
                1.0
            );
        };

        img.onerror = () => {
            URL.revokeObjectURL(url);
            reject();
        };

        img.src = url;
    });
}

export async function downloadPngFromSvgElement(container: HTMLElement) {
    const svg = container.querySelector('svg');
    if (!svg) return alert("SVG not rendered");

    try {
        const blob = await svgToPngBlob(svg);
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'barcode.png';
        a.click();
        URL.revokeObjectURL(url);
    } catch {
        alert('PNG export failed — use Chrome/Firefox');
    }
}

export async function copyPngToClipboard(container: HTMLElement): Promise<boolean> {
    const svg = container.querySelector('svg');
    if (!svg) return false;

    try {
        const blob = await svgToPngBlob(svg);
        await navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })]);
        return true;
    } catch {
        return false;
    }
}
