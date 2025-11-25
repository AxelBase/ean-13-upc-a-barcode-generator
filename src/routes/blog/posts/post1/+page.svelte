<script lang="ts">
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>How EAN-13 and UPC-A Barcodes Actually Work • Blog</title>
	<meta name="description" content="A complete technical breakdown of EAN-13 and UPC-A barcodes: guard patterns, encoding tables, quiet zones, and why the check digit is calculated the way it is." />
	<meta property="og:title" content="How EAN-13 and UPC-A Barcodes Actually Work" />
	<meta property="og:description" content="Understand the inner workings of the world’s most common retail barcodes — from left/right guard patterns to L/G/R encoding sets." />
	<meta property="og:url" content="{base}/blog/posts/post1" />
	<meta property="og:type" content="article" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
	<div class="breadcrumbs">
		<a href="{base}/blog">Blog</a>
		<span>/</span>
		<p>How EAN-13 and UPC-A Barcodes Work</p>
	</div>

	<article class="prose">
		<h1>How EAN-13 and UPC-A Barcodes Actually Work</h1>
		<p class="post-meta">Published: November 26, 2025</p>

		<p>At first glance, a barcode looks like random black and white stripes. In reality, EAN-13 and UPC-A are highly structured systems governed by strict international standards from GS1. Every line width, spacing, and digit has meaning.</p>

		<h2>The Anatomy of an EAN-13 Barcode</h2>
		<p>An EAN-13 barcode consists of exactly <strong>95 modules</strong> (vertical columns). These are divided into:</p>
		<ul>
			<li><strong>Left quiet zone</strong> — minimum 11 modules blank</li>
			<li><strong>Start guard pattern</strong> — 101 (3 modules)</li>
			<li><strong>6 left-hand digits</strong> — each 7 modules, using L, G, or R encoding depending on the first digit</li>
			<li><strong>Center guard pattern</strong> — 01010 (5 modules)</li>
			<li><strong>6 right-hand digits</strong> — always R-encoding</li>
			<li><strong>End guard pattern</strong> — 101</li>
			<li><strong>Right quiet zone</strong> — minimum 7 modules</li>
		</ul>

		<h2>Why There Are Three Encoding Sets (L, G, R)</h2>
		<p>The first digit (the “number system” or country prefix) determines how the left six digits are encoded:</p>
		<ul>
			<li><strong>L-encoding</strong> — even parity (used when first digit is even)</li>
			<li><strong>G-encoding</strong> — odd parity (mirrored L-pattern)</li>
			<li><strong>R-encoding</strong> — always used on the right side</li>
		</ul>
		<p>This clever system allows scanners to read the barcode in any direction — the center guard tells the scanner which half is which.</p>

		<h2>UPC-A Is Just a Subset of EAN-13</h2>
		<p>A UPC-A barcode is technically an EAN-13 that starts with 0. The leading zero is implied and usually not printed in human-readable text (except in tools like this one that show the full 13-digit form for clarity). GS1 officially recommends migrating to EAN-13 globally.</p>

		<h2>The Check Digit: More Than Just Error Detection</h2>
		<p>The 13th digit is calculated using the Modulo 10 algorithm with alternating weights of 1 and 3 from right to left. This catches 100% of single-digit errors and ~89% of transpositions — the most common scanning mistakes.</p>

		<h2>FAQ</h2>
		<details>
			<summary>Can a scanner read a barcode upside down?</summary>
			<p>Yes! The symmetrical guard patterns and dual encoding sets allow omnidirectional scanning.</p>
		</details>
		<details>
			<summary>Why do some barcodes have extra digits on the side?</summary>
			<p>Those are add-on barcodes (2 or 5 digits) used for magazines (issue number) or books (price). Not part of standard EAN-13/UPC-A.</p>
		</details>
		<details>
			<summary>Is a barcode with wrong check digit still scannable?</summary>
			<p>Most modern scanners reject it immediately. Some older ones might beep but show garbage data.</p>
		</details>

		<p class="italic-note">Understanding these rules is the foundation of generating reliable, scannable barcodes — exactly what this tool guarantees.</p>
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