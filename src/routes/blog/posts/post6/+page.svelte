<script lang="ts">
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>Why Your Scanner Sometimes Beeps (and Sometimes Doesn’t) • Blog</title>
	<meta name="description" content="The surprising reasons perfectly-printed barcodes fail to scan: light reflection, damaged labels, scanner type, and more." />
	<meta property="og:title" content="Why Your Scanner Sometimes Beeps (and Sometimes Doesn’t)" />
	<meta property="og:description" content="Even GS1-compliant barcodes can fail. Here are the top 10 real-world reasons — and how to fix them." />
	<meta property="og:url" content="{base}/blog/posts/post6" />
	<meta property="og:type" content="article" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
	<div class="breadcrumbs">
		<a href="{base}/blog">Blog</a>
		<span>/</span>
		<p>Why Your Scanner Sometimes Beeps</p>
	</div>

	<article class="prose">
		<h1>Why Your Scanner Sometimes Beeps (and Sometimes Doesn’t)</h1>
		<p class="post-meta">Published: November 26, 2025</p>

		<p>You printed a perfect barcode. You tested it with your phone — it scans. Then at the store, nothing. Here are the most common real-world failures.</p>

		<h2>Top 10 Reasons Barcodes Fail in Practice</h2>
		<ol>
			<li><strong>Reflective or glossy surface</strong> — laser scanners bounce light</li>
			<li><strong>Curved surface</strong> — distorts bar spacing</li>
			<li><strong>Low contrast</strong> — dark blue on black looks great, scans never</li>
			<li><strong>Truncated height</strong> — scanner beam misses top/bottom</li>
			<li><strong>Wrong scanner type</strong> — some only read EAN-13, not UPC-A</li>
			<li><strong>Ink spread</strong> — bars grow on absorbent paper</li>
			<li><strong>Damaged label</strong> — scratches, folds, water</li>
			<li><strong>Too small</strong> — below 80% magnification</li>
			<li><strong>No quiet zone</strong> — text or graphics too close</li>
			<li><strong>Color blindness</strong> — red bars invisible to many scanners</li>
		</ol>

		<h2>How to Test Like a Pro</h2>
		<p>Don’t just use your phone. Test with:</p>
		<ul>
			<li>A real retail laser scanner</li>
			<li>Under different lighting</li>
			<li>At different angles and distances</li>
			<li>After crumpling and smoothing the label</li>
		</ul>

		<h2>FAQ</h2>
		<details>
			<summary>Will a barcode scan if it’s wrinkled?</summary>
			<p>Sometimes. Depends on the scanner and wrinkle location.</p>
		</details>
		<details>
			<summary>Do phone apps use the same technology?</summary>
			<p>No — they use image recognition, much more forgiving than laser scanners.</p>
		</details>

		<p class="italic-note">A barcode that scans on your phone but fails at checkout is not a valid barcode in the real world.</p>
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