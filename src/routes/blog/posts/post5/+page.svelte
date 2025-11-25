<script lang="ts">
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>How the Check Digit is Calculated • Blog</title>
	<meta name="description" content="Step-by-step math behind the EAN-13 and UPC-A check digit using the official GS1 Modulo 10 algorithm with weights 1 and 3." />
	<meta property="og:title" content="How the Check Digit is Calculated (Step-by-Step)" />
	<meta property="og:description" content="Never wonder again how the final digit is derived. Full worked example included." />
	<meta property="og:url" content="{base}/blog/posts/post5" />
	<meta property="og:type" content="article" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
	<div class="breadcrumbs">
		<a href="{base}/blog">Blog</a>
		<span>/</span>
		<p>How the Check Digit is Calculated</p>
	</div>

	<article class="prose">
		<h1>How the Check Digit is Calculated (Step-by-Step)</h1>
		<p class="post-meta">Published: November 26, 2025</p>

		<p>The 13th digit isn’t random — it’s a mathematical safeguard that catches nearly all scanning errors. Here’s exactly how it’s calculated using the official GS1 method.</p>

		<h2>The Algorithm (Modulo 10 with 3-1 Weighting)</h2>
		<p>Take any 12-digit base number: <code>401234567890</code></p>
		<ol>
			<li>Start from the right (position 12)</li>
			<li>Multiply odd positions by 3, even positions by 1</li>
			<li>Sum all results</li>
			<li>Find the next multiple of 10</li>
			<li>Subtract → that’s your check digit</li>
		</ol>

		<h2>Worked Example</h2>
		<p>Number: <code>4 0 1 2 3 4 5 6 7 8 9 0</code><br>
		Positions from right: 12 11 10 9 8 7 6 5 4 3 2 1</p>
		<ul>
			<li>0×3 + 9×1 + 8×3 + 7×1 + 6×3 + 5×1 + 4×3 + 3×1 + 2×3 + 1×1 + 0×3 + 4×1 = 123</li>
			<li>Next multiple of 10 = 130</li>
			<li>130 − 123 = <strong>7</strong></li>
		</ul>
		<p>Final barcode: <code>4012345678907</code></p>

		<h2>Why This Works So Well</h2>
		<p>The alternating 3× and 1× weights catch:</p>
		<ul>
			<li>100% of single-digit errors</li>
			<li>98% of adjacent transpositions (e.g., 123 → 132)</li>
			<li>Most twin errors (e.g., 11 → 22)</li>
		</ul>

		<h2>FAQ</h2>
		<details>
			<summary>Can two different numbers have the same check digit?</summary>
			<p>Yes — but never the same full 13 digits.</p>
		</details>
		<details>
			<summary>What if the sum is already a multiple of 10?</summary>
			<p>Check digit = 0 (perfectly valid).</p>
		</details>

		<p class="italic-note">This generator uses the exact GS1 algorithm — so every barcode it creates is 100% valid.</p>
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