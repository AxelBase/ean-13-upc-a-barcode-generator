<script lang="ts">
    import {base} from '$app/paths';
    import { onMount, tick } from 'svelte';
    import { calculateCheckDigit, validateCheckDigit, withCheckDigit } from '$lib/checkDigit';
    import { generateBarcodeSvg } from '$lib/barcode';
    import { downloadSvg, downloadPngFromSvgElement, copyPngToClipboard } from '$lib/export';

    let input = '';
    let autoCheckDigit = true;
    let barcodeSvg = '';
    let error = '';
    let svgContainer: HTMLElement;
    let processing = false;

    let timeout: any;
    function debounce() {
        clearTimeout(timeout);
        timeout = setTimeout(renderBarcode, 300);
    }

    async function renderBarcode() {
        error = '';
        processing = true;
        barcodeSvg = '';

        const clean = input.replace(/\D/g, '');
        if (!clean) { processing = false; return; }

        let finalNumber = clean;

        try {
            // FIXED AUTO-CHECK-DIGIT LOGIC
            if (autoCheckDigit) {
                if (clean.length === 13) {
                    const base = clean.slice(0, 12);
                    finalNumber = base + calculateCheckDigit(base);
                }
                else if (clean.length === 12) {
                    const base = '0' + clean.slice(0, 11);
                    finalNumber = base + calculateCheckDigit(base);
                }
                else if (clean.length === 11) {
                    finalNumber = withCheckDigit(clean);
                }
            }
            // MANUAL MODE
            else {
                if (clean.length === 12) {
                    finalNumber = '0' + clean;
                }
                if (clean.length !== 12 && clean.length !== 13) {
                    throw new Error('Enter 12 or 13 digits');
                }
                if (!validateCheckDigit(finalNumber)) {
                    throw new Error('Invalid check digit');
                }
            }

            const svg = await generateBarcodeSvg(finalNumber);
            barcodeSvg = svg;

            await tick();

            if (svgContainer) {
                svgContainer.innerHTML = svg;
            }
        } catch (e: any) {
            error = e.message || 'Failed to generate barcode';
        }

        processing = false;
    }

    $: input, debounce();
    $: autoCheckDigit, debounce();

    onMount(() => {
        input = '012345678905';
        renderBarcode();
    });
</script>

<section id="home">
    <div class="row justify-content-center">
        <div class="col-lg-7 col-md-9">
            <div class="text-center mb-5">
                <h1 class="display-5 fw-bold" style="color: var(--primary-color);">Generate Barcodes</h1>
                <p class="text-muted lead">Professional EAN-13 & UPC-A standards</p>
            </div>

            <div class="card p-4 p-md-5">
                <div class="card-body">

                    <div class="mb-4">
                        <label for="number" class="form-label fw-bold text-uppercase small text-muted">Barcode Number</label>
                        <input
                            type="text"
                            id="number"
                            class="form-control text-center"
                            bind:value={input}
                            placeholder="Enter 12 or 13 digits"
                            inputmode="numeric"
                        />
                    </div>

                    <div class="form-check mb-4 d-flex justify-content-center gap-2">
                        <input class="form-check-input" type="checkbox" id="autoCheck" bind:checked={autoCheckDigit} style="cursor: pointer;" />
                        <label class="form-check-label fw-bold" for="autoCheck" style="cursor: pointer;">
                            Auto-calculate check digit (Recommended)
                        </label>
                    </div>

                    {#if error}
                        <div class="alert alert-danger text-center rounded-pill">{error}</div>
                    {/if}

                    <div class="barcode-container" bind:this={svgContainer}>
                        {#if processing}
                            <div class="spinner-border text-primary" role="status"></div>
                        {:else if barcodeSvg}
                            {@html barcodeSvg}
                        {:else}
                            <div class="text-muted">Enter a number above</div>
                        {/if}
                    </div>

                    {#if barcodeSvg}
                        <div class="d-grid gap-3 mt-4">
                            <button class="btn btn-success btn-lg" on:click={() => downloadSvg(barcodeSvg, `barcode-${input}.svg`)}>
                                Download SVG
                            </button>

                            <button class="btn btn-primary btn-lg" on:click={() => downloadPngFromSvgElement(svgContainer)}>
                                Download PNG (Print-ready)
                            </button>

                            <button class="btn btn-outline-primary btn-lg" on:click|preventDefault={async () => {
                                const ok = await copyPngToClipboard(svgContainer);
                                alert(ok ? 'Copied to clipboard!' : 'Copy failed');
                            }}>
                                Copy PNG to Clipboard
                            </button>
                        </div>
                    {/if}

                </div>
            </div>

            <div class="text-center mt-4 small text-muted">
                GS1 Compliant • Works Offline • SVG + PNG + Clipboard
            </div>
        </div>
    </div>
</section>

<div class="container mt-5 pt-5">
    <hr class="opacity-10 my-5" />

<section id="about" class="py-5">
    <h2 class="fw-bold" style="color: var(--primary-color);">About AxelBase</h2>

    <p class="lead">AxelBase is a secure, client-side barcode generator designed for speed and privacy.</p>
    <p class="text-muted">Unlike other generators that send your data to a server, AxelBase runs entirely in your browser.</p>

    <p>
        AxelBase is a modern, privacy-first barcode generation tool built for creators, retailers, developers, 
        and anyone who needs reliable EAN-13 or UPC-A barcodes without friction. Unlike traditional barcode 
        generators—which often rely on remote servers, involve login walls, or hide basic features behind paid 
        tiers—AxelBase is engineered to run entirely inside your browser. No servers, no data collection, no 
        analytics. The moment the page loads, everything you see happens locally on your device, making AxelBase 
        both fast and exceptionally secure.
    </p>

    <p>
        At its core, AxelBase was designed around two principles: accuracy and trustworthiness. Barcodes must 
        comply with GS1 standards to function correctly in retail scanning systems, inventory workflows, and 
        fulfillment pipelines. That means check digits must be computed precisely, the structure must match 
        ISO/IEC 15420 specifications, and the rendering must adhere to strict spacing, quiet zones, and guard bar 
        guidelines. AxelBase follows these requirements to the letter, powered by the widely respected bwip-js 
        engine—an industrial-strength generator used globally across thousands of applications. Every barcode 
        produced is mathematically validated, properly encoded, and rendered at print-quality sharpness.
    </p>

    <p>
        Another central goal of AxelBase is maintainability and transparency. The entire project is open source, 
        written in clean TypeScript and built on SvelteKit with static prerendering. That means the site runs 
        blazing fast and requires no backend infrastructure. It also means you can host it anywhere—including 
        GitHub Pages—without worrying about load balancing, runtime servers, or API quotas. The design works 
        seamlessly whether AxelBase is deployed at a domain root or inside a subfolder, making it suitable for 
        hobby projects, enterprise internal tools, educational environments, and lightweight POS workflows.
    </p>

    <p>
        AxelBase also aims to be approachable for anyone, not just developers. The interface is intentionally 
        clean, with no clutter or unnecessary steps. You type your digits, and the barcode appears instantly—with 
        a built-in 300 ms debounce to give a smooth, responsive feel. If you choose to enable the auto-check-digit 
        option, AxelBase ensures your barcode is always valid, automatically recalculating the final digit when 
        you enter an 11-, 12-, or even incorrect 13-digit code. This prevents one of the most common mistakes in 
        barcode creation: mismatched or invalid check digits that otherwise cause scanning failures.
    </p>

    <p>
        For creators, AxelBase provides multiple export modes: SVG for perfect vector graphics and PNG for 
        printing, packaging, or product documentation. The PNG output is generated entirely client-side using the 
        native Canvas API, allowing you to download crisp images or copy them directly to your clipboard for use 
        in design software or spreadsheets. There are no watermarks, no compression, and no enforced templates—just 
        clean, standards-compliant barcodes ready for real-world use.
    </p>

    <p>
        With AxelBase, the philosophy is simple: give users a professional-grade barcode generator that respects 
        privacy, adheres to global standards, and feels effortless to use. Whether you're preparing labels, 
        prototyping products, teaching GS1 concepts, or integrating the tool into a workflow, AxelBase offers a 
        fast, frictionless, and dependable experience.
    </p>
</section>

<hr class="opacity-10 my-5" />

<section id="how-to" class="py-5">
    <h2 class="fw-bold" style="color: var(--primary-color);">How to Use</h2>

    <ol class="list-group list-group-numbered list-group-flush">
        <li class="list-group-item bg-transparent">Enter your 11, 12, or 13 digit product code.</li>
        <li class="list-group-item bg-transparent">Let the auto-calculate feature ensure your check digit is valid.</li>
        <li class="list-group-item bg-transparent">Click "Download PNG" for images or "Download SVG" for vector graphics.</li>
    </ol>

    <p class="mt-4">
        Using AxelBase is intentionally simple, because generating a valid EAN-13 or UPC-A barcode should never require 
        specialized software or technical expertise. Every feature was designed to guide you smoothly from raw digits to a 
        fully compliant barcode ready for printing, downloading, or embedding into your workflow.
    </p>

    <p>
        Begin by typing your numeric code into the input field. AxelBase accepts 11-, 12-, or 13-digit numbers depending on 
        your scenario. Eleven digits typically represent UPC-A codes without their check digit. Twelve digits are full UPC-A 
        codes. Thirteen digits are EAN-13 codes commonly used internationally. AxelBase filters out all non-numeric 
        characters, allowing you to paste values from spreadsheets, documents, or emails with no cleanup required.
    </p>

    <p>
        The auto-check-digit feature is enabled by default and recommended for general use. When active, AxelBase computes 
        the GS1 check digit automatically. Enter 11, 12, or even 13 digits with a wrong check digit, and AxelBase corrects 
        it instantly, ensuring compliance and preventing scanning issues. For users who prefer manual validation or are 
        learning GS1 rules, auto-check can be disabled, prompting AxelBase to validate the final digit and show errors when 
        needed.
    </p>

    <p>
        As you type, the barcode updates live with a smooth 300 ms debounce. The generator uses strict GS1 and ISO/IEC 
        encoding rules to ensure correct guard bars, digit placement, and quiet zones. This live preview matches the exact 
        barcode you will download or print.
    </p>

    <p>
        Once satisfied, you can export your barcode in multiple formats. SVG is ideal for design and printing workflows, 
        offering perfect scalability for product packaging, documentation, and professional layouts. PNG exports provide 
        crisp raster images suitable for everyday printing, spreadsheets, or software that requires bitmap graphics. The 
        clipboard feature enables you to paste PNG output directly into applications without downloading a file.
    </p>

    <p>
        Because AxelBase runs entirely in your browser and adheres strictly to GS1 specifications, the barcodes you generate 
        are suitable for retail use, logistics operations, digital catalogs, and product labeling across global markets.
    </p>
</section>

<hr class="opacity-10 my-5" />

<section id="faq" class="py-5 mb-5">
    <h2 class="fw-bold" style="color: var(--primary-color);">Frequently Asked Questions</h2>

    <div class="accordion accordion-flush" id="accordionFaq">
        <div class="accordion-item bg-transparent">
            <h2 class="accordion-header">
                <button class="accordion-button collapsed bg-transparent fw-bold" type="button"
                    data-bs-toggle="collapse" data-bs-target="#flush-collapseOne">
                    Is this free for commercial use?
                </button>
            </h2>
            <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFaq">
                <div class="accordion-body">
                    AxelBase is open source and free for personal, educational, and commercial use. You may
                    generate unlimited barcodes without fees, registration, or restrictions. Every computation
                    happens locally, and the permissive nature of the project makes it ideal for businesses,
                    creators, and production environments.
                </div>
            </div>
        </div>

        <div class="accordion-item bg-transparent">
            <h2 class="accordion-header">
                <button class="accordion-button collapsed bg-transparent fw-bold" type="button"
                    data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo">
                    Does it work offline?
                </button>
            </h2>
            <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFaq">
                <div class="accordion-body">
                    Yes. AxelBase only requires an internet connection for the initial load. After that, all
                    barcode generation—including check digit computation, SVG rendering, PNG export, and clipboard
                    functionality—occurs 100% on your device using static JavaScript files. You can safely use
                    AxelBase in offline warehouses, secure facilities, schools, and remote locations.
                </div>
            </div>
        </div>

        <!-- Additional expanded FAQ content (≈450 words) -->
        <div class="accordion-item bg-transparent">
            <h2 class="accordion-header">
                <button class="accordion-button collapsed bg-transparent fw-bold" type="button"
                    data-bs-toggle="collapse" data-bs-target="#flush-collapseThree">
                    Are the barcodes GS1 compliant?
                </button>
            </h2>
            <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFaq">
                <div class="accordion-body">
                    Yes. AxelBase follows GS1 General Specifications and ISO/IEC 15420 standards. Check digits are
                    computed using the official weighting algorithm, and bar structures match required encoding
                    patterns, guard bars, and quiet zones. Barcodes generated here work with retail scanners,
                    warehouse systems, POS terminals, and automated fulfillment equipment.
                </div>
            </div>
        </div>

        <div class="accordion-item bg-transparent">
            <h2 class="accordion-header">
                <button class="accordion-button collapsed bg-transparent fw-bold" type="button"
                    data-bs-toggle="collapse" data-bs-target="#flush-collapseFour">
                    Is my data ever sent or stored anywhere?
                </button>
            </h2>
            <div id="flush-collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionFaq">
                <div class="accordion-body">
                    No. AxelBase is fully client-side. Your input, generated barcodes, and exported graphics never
                    leave your browser. There is no server, no analytics, no data capture, and no external API
                    calls. Everything stays entirely on your device for maximum privacy and security.
                </div>
            </div>
        </div>

        <div class="accordion-item bg-transparent">
            <h2 class="accordion-header">
                <button class="accordion-button collapsed bg-transparent fw-bold" type="button"
                    data-bs-toggle="collapse" data-bs-target="#flush-collapseFive">
                    Why does AxelBase correct my check digit?
                </button>
            </h2>
            <div id="flush-collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionFaq">
                <div class="accordion-body">
                    Correct check digits are essential for retail and logistics scanning. Auto-correction ensures
                    your barcode is always valid—even if you mistype the last digit. AxelBase recalculates check
                    digits for 11-, 12-, and even 13-digit inputs to prevent invalid codes that would otherwise
                    fail to scan or cause issues downstream.
                </div>
            </div>
        </div>

        <div class="accordion-item bg-transparent">
            <h2 class="accordion-header">
                <button class="accordion-button collapsed bg-transparent fw-bold" type="button"
                    data-bs-toggle="collapse" data-bs-target="#flush-collapseSix">
                    Will the barcodes scan on real retail equipment?
                </button>
            </h2>
            <div id="flush-collapseSix" class="accordion-collapse collapse" data-bs-parent="#accordionFaq">
                <div class="accordion-body">
                    Yes. The barcodes generated by AxelBase are fully GS1 compliant. As long as the printed image 
                    maintains proper size, contrast, and quiet zones, they will scan reliably on laser scanners, 
                    imaging scanners, smartphone readers, and checkout terminals used throughout the retail and 
                    logistics industries.
                </div>
            </div>
        </div>

    </div>
</section>
</div>