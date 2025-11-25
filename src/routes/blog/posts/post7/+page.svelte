<script lang="ts">
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>Building This Generator: Why It’s More Accurate Than Most • Blog</title>
	<meta name="description" content="Behind-the-scenes of creating the most accurate free EAN-13/UPC-A barcode generator on the internet — no rounding errors, no fake check digits." />
	<meta property="og:title" content="Building This Generator: Why It’s More Accurate Than Most Online Tools" />
	<meta property="og:description" content="The technical journey: choosing bwip-js v4+, fixing SVG export bugs, and ensuring 100% GS1 compliance." />
	<meta property="og:url" content="{base}/blog/posts/post7" />
	<meta property="og:type" content="article" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
	<div class="breadcrumbs">
		<a href="{base}/blog">Blog</a>
		<span>/</span>
		<p>Building This Generator</p>
	</div>

	<article class="prose">
		<h1>Building This Generator: Why It’s More Accurate Than Most Online Tools</h1>
		<p class="post-meta">Published: November 26, 2025</p>

		<p>Most free barcode generators cut corners. They use outdated libraries, round module widths, or fake the check digit. This one doesn’t — and here’s why.</p>

		<h2>The Tech Stack That Actually Works</h2>
		<ul>
			<li><strong>bwip-js v4+</strong> — the only browser library with true GS1 compliance</li>
			<li><strong>No server round-trip</strong> — everything runs in your browser</li>
			<li><strong>Correct check digit math</strong> — fixed multiple known bugs in other tools</li>
			<li><strong>Proper SVG + PNG export</strong> — no more “XML parsing error”</li>
			<li><strong>UPC-A → EAN-13 conversion</strong> — with correct human-readable text</li>
		</ul>

		<h2>Common Problems in Other Generators</h2>
		<ul>
			<li>Wrong quiet zone size</li>
			<li>Incorrect encoding for digits 0–9 when leading zero is present</li>
			<li>Check digit off-by-one errors</li>
			<li>SVG files that won’t open in Inkscape</li>
			<li>PNG export fails on Safari</li>
		</ul>

		<h2>The Result</h2>
		<p>Every barcode from this tool:</p>
		<ul>
			<li>Scans on first try at real retail</li>
			<li>Passes GS1 validation tools</li>
			<li>Works when printed at any size 80–200%</li>
			<li>Exports perfectly to SVG and high-DPI PNG</li>
		</ul>

		<h2>FAQ</h2>
		<details>
			<summary>Is this generator really free forever?</summary>
			<p>Yes. No tracking, no limits, no account needed.</p>
		</details>
		<details>
			<summary>Why not use an online API?</summary>
			<p>Privacy and reliability. Your data never leaves your device.</p>
		</details>

		<p class="italic-note">This tool exists because no free generator got it 100% right — until now.</p>
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