<script lang="ts">
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>Printing Barcodes That Actually Scan at Retail • Blog</title>
	<meta name="description" content="Avoid the most common printing mistakes that make barcodes unscannable: wrong size, missing quiet zones, low contrast, and bad DPI." />
	<meta property="og:title" content="Printing Barcodes That Actually Scan at Retail" />
	<meta property="og:description" content="The definitive guide to printing GS1-compliant EAN-13 and UPC-A barcodes that work every time — even at Walmart or Amazon." />
	<meta property="og:url" content="{base}/blog/posts/post3" />
	<meta property="og:type" content="article" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
	<div class="breadcrumbs">
		<a href="{base}/blog">Blog</a>
		<span>/</span>
		<p>Printing Barcodes That Actually Scan</p>
	</div>

	<article class="prose">
		<h1>Printing Barcodes That Actually Scan at Retail</h1>
		<p class="post-meta">Published: November 26, 2025</p>

		<p>Generating a perfect barcode on screen is easy. Getting it to scan reliably at checkout — under fluorescent lights, with wrinkled labels, and fast-moving scanners — is hard. Here are the rules that matter.</p>

		<h2>Minimum Size & Magnification</h2>
		<p>GS1 specifies magnification from 80% to 200% of nominal size:</p>
		<ul>
			<li><strong>100%</strong> → 37.29 mm wide (most common)</li>
			<li><strong>80%</strong> → 29.83 mm (smallest allowed)</li>
			<li><strong>200%</strong> → 74.58 mm (largest)</li>
		</ul>
		<p>Never go below 80% — scanners will fail.</p>

		<h2>Quiet Zones Are Non-Negotiable</h2>
		<p>Blank space on left and right:</p>
		<ul>
			<li>EAN-13: minimum 11 modules left, 7 right</li>
			<li>UPC-A: minimum 9 modules both sides</li>
		</ul>
		<p>Many designers crop this space — instant scan failure.</p>

		<h2>Color & Contrast</h2>
		<p>Best: Black bars on white background. Acceptable: Dark colors (navy, dark green) on light background. Never: red, orange, or light-on-dark unless using special scanners.</p>

		<h2>DPI and Resolution</h2>
		<p>For laser printing: minimum 300 DPI. For thermal label printers: 203 DPI is acceptable. Export PNG at 2× scale (600 DPI effective) when possible.</p>

		<h2>FAQ</h2>
		<details>
			<summary>Will a barcode scan if it’s slightly blurry?</summary>
			<p>Usually yes — if contrast and quiet zones are correct. Scanners are very forgiving of minor blur.</p>
		</details>
		<details>
			<summary>Can I put a barcode on colored packaging?</summary>
			<p>Yes — if bars are dark and background is light. Test with multiple scanners.</p>
		</details>

		<p class="italic-note">A barcode that looks perfect on screen can still fail in the real world. Always test with actual hardware before production.</p>
	</article>
</div>

<style>
	/* Same styles as your example — kept for consistency */
	.post-layout { max-width: 800px; padding: 2rem 0 4rem; }
	.breadcrumbs { display: flex; align-items: center; gap: 0.5rem; margin-bottom: 1.5rem; font-size: 0.9rem; color: var(--text-secondary); }
	.breadcrumbs a { color: var(--accent-secondary); }
	.breadcrumbs a:hover { text-decoration: underline; }
	.prose { line-height: 1.8; }
	.post-meta { color: var(--text-secondary); font-size: 0.9rem; margin-bottom: 2rem; border-bottom: 1px solid var(--border-color); padding-bottom: 1rem; }
	.prose h1 { font-size: 2.5rem; margin-bottom: 0.5rem; color: var(--accent-secondary); }
	.prose h2 { margin-top: 2.5rem; border-bottom: 1px solid var(--secondary-bg); padding-bottom: 0.5rem; color: var(--accent-primary); }
	.prose ul { list-style-type: '→ '; padding-left: 1.5rem; }
	.prose ul li::marker { color: var(--accent-primary); }
	.prose details { background: var(--secondary-bg); border: 1px solid var(--border-color); border-radius: 6px; padding: 1rem; margin-bottom: 1rem; }
	.prose details[open] { background-color: var(--card-bg); }
	.prose summary { cursor: pointer; font-weight: 600; color: var(--accent-secondary); list-style: none; }
	.prose summary::before { content: '+'; margin-right: 0.75rem; color: var(--accent-primary); font-weight: bold; transition: transform 0.2s; }
	.prose details[open] summary::before { transform: rotate(45deg); }
	.prose details p { margin-top: 1rem; padding-left: 1.5rem; border-left: 2px solid var(--accent-primary); color: var(--text-secondary); }
	.italic-note { font-style: italic; color: var(--text-secondary); text-align: center; margin-top: 3rem; }
</style>