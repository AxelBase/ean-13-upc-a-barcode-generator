<script lang="ts">
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>Privacy Policy • EAN-13 & UPC-A Barcode Generator</title>
	<meta name="description" content="We collect zero personal data. Everything runs 100% in your browser. Your barcode numbers never leave your device." />
	<meta property="og:title" content="Privacy Policy • EAN-13 & UPC-A Barcode Generator" />
	<meta property="og:description" content="No tracking. No logs. No data collection. Your privacy is absolute." />
	<meta property="og:url" content="{base}/privacy" />
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
	<div class="breadcrumbs">
		<a href="{base}/">Home</a>
		<span>/</span>
		<p>Privacy Policy</p>
	</div>

	<article class="prose">
		<h1>Privacy Policy</h1>
		<p class="post-meta">Effective Date: November 26, 2025</p>

		<h2>1. We Collect Nothing</h2>
		<p><strong>This tool runs 100% in your browser</strong>. When you generate a barcode, <em>nothing</em> is sent to any server — not even your IP address. Your input numbers, generated SVGs, PNGs, and clipboard actions stay entirely on your device.</p>

		<h2>2. Information We Do Not Collect</h2>
		<p>We explicitly do <strong>not</strong> collect, store, or process:</p>
		<ul>
			<li>Barcode numbers you enter</li>
			<li>Generated images or files</li>
			<li>IP addresses, browser type, or location</li>
			<li>Usage analytics or tracking pixels</li>
			<li>Cookies, localStorage persistence, or session data</li>
		</ul>

		<h2>3. How the Tool Works Offline</h2>
		<p>All barcode generation uses <code>bwip-js</code> running locally. Even if you're offline, the tool works perfectly. No internet connection = no possibility of data transmission.</p>

		<h2>4. No Third-Party Services</h2>
		<p>We do not use:</p>
		<ul>
			<li>Google Analytics</li>
			<li>Facebook Pixel</li>
			<li>Advertising networks</li>
			<li>External fonts or tracking scripts</li>
		</ul>
		<p>Only essential, self-hosted assets are loaded.</p>

		<h2>5. Your Data, Your Control</h2>
		<p>You own everything you create. Downloads go straight to your device. Clipboard copies stay in your browser. We have zero access.</p>

		<h2>6. Security</h2>
		<p>Since no data leaves your device, there is no server to hack, no database to breach, and no logs to leak. Your usage is completely private by design.</p>

		<h2>7. Children's Privacy</h2>
		<p>This tool is safe for all ages. No personal information is ever requested or collected.</p>

		<h2>8. Changes to This Policy</h2>
		<p>We may update this policy. Changes will be posted here with the new effective date.</p>

		<h2>9. Contact</h2>
		<p>This tool is independently developed and privacy-first by design. Questions? Open an issue on GitHub.</p>

		<p class="italic-note"><strong>Your privacy is not a feature — it’s the foundation.</strong> We built this tool the way the web should be: powerful, free, and completely private.</p>
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
	.italic-note { font-style: italic; color: var(--text-secondary); text-align: center; margin-top: 3rem; font-size: 1.1rem; }
</style>