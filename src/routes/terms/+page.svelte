<script lang="ts">
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>Terms & Conditions • EAN-13 & UPC-A Barcode Generator</title>
	<meta name="description" content="Free, unlimited, no-signup use of the most accurate barcode generator on the web. No warranties. No commercial restrictions." />
	<meta property="og:title" content="Terms & Conditions" />
	<meta property="og:description" content="Use freely. Generate as many barcodes as you want. No attribution required." />
	<meta property="og:url" content="{base}/terms" />
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
	<div class="breadcrumbs">
		<a href="{base}/">Home</a>
		<span>/</span>
		<p>Terms & Conditions</p>
	</div>

	<article class="prose">
		<h1>Terms & Conditions</h1>
		<p class="post-meta">Effective Date: November 26, 2025</p>

		<h2>1. Acceptance of Terms</h2>
		<p>By using the <strong>EAN-13 & UPC-A Barcode Generator</strong>, you agree to these Terms. If you do not agree, please do not use the tool.</p>

		<h2>2. Free and Unlimited Use</h2>
		<p>This tool is <strong>100% free forever</strong> for personal and commercial use. Generate as many barcodes as you need — no limits, no signup, no payment.</p>

		<h2>3. License</h2>
		<p>All barcodes generated are <strong>yours to use freely</strong> in any project: products, packaging, websites, print materials, or resale. No attribution required.</p>

		<h2>4. Accuracy & GS1 Compliance</h2>
		<p>This generator uses the official <code>bwip-js</code> library and verified GS1 algorithms. Barcodes are designed to meet international standards. However, <strong>we make no warranty</strong> that any barcode will be accepted by retailers, printers, or third parties.</p>

		<h2>5. No Warranties</h2>
		<p>The tool is provided <strong>“as is”</strong> without warranty of any kind. We do not guarantee:</p>
		<ul>
			<li>100% scannability in all environments</li>
			<li>Compatibility with every printer or scanner</li>
			<li>Uptime or availability</li>
		</ul>

		<h2>6. Limitation of Liability</h2>
		<p>We are not liable for any damages arising from barcode rejection, printing errors, or misuse. You assume full responsibility for testing barcodes in your intended environment.</p>

		<h2>7. No Official GS1 Affiliation</h2>
		<p>This is an independent, open-source tool. We are not affiliated with GS1. For official barcode numbers, purchase from your local GS1 office.</p>

		<h2>8. Changes to Terms</h2>
		<p>We may update these terms. Continued use constitutes acceptance.</p>

		<h2>9. Governing Law</h2>
		<p>These terms are governed by the laws of open-source goodwill and common sense.</p>

		<p class="italic-note"><strong>Use freely. Build boldly. Print confidently.</strong><br>This tool exists to make accurate barcodes accessible to everyone — no gatekeeping, no paywalls, no nonsense.</p>
	</article>
</div>

<style>
	.post-layout { max-width: 800px; padding: 2rem 0 4rem; }
	.breadcrumbs { display: flex; align-items: center; gap: 0.5rem; margin-bottom: 1.5rem; font-size: 0.9rem; color: var(--text-secondary); }
	.breadcrumbs a { color: var(--accent-secondary); }
	.breadcrumbs a:hover { text-decoration: underline; }
	.prose { line-height: 1.8; }
	.post-meta { color: var(--text-secondary); font-size: 0.9rem; margin-bottom: 2rem; border-bottom: 1px solid var(--border-color); padding-bottom: 1rem; }
	.prose h1, .prose h2 { color: var(--accent-secondary); }
	.prose h1 { font-size: 2.5rem; margin-bottom: 0.5rem; }
	.prose h2 { margin-top: 2.5rem; border-bottom: 1px solid var(--secondary-bg); padding-bottom: 0.5rem; }
	.prose ul { list-style-type: '→ '; padding-left: 1.5rem; }
	.prose ul li::marker { color: var(--accent-primary); }
	.italic-note { font-style: italic; color: var(--text-secondary); text-align: center; margin-top: 3rem; font-size: 1.1rem; line-height: 1.7; }
</style>