<script lang="ts">
	import { base } from '$app/paths';

	const posts = [
		{ href: '/blog/posts/post1', title: 'How EAN-13 and UPC-A Barcodes Actually Work', description: 'A clear breakdown of the encoding rules, guard patterns, and why the check digit matters.' },
		{ href: '/blog/posts/post2', title: 'The Hidden Meaning Behind the First Digits', description: 'What country codes, GS1 prefixes, and number system digits really tell you.' },
		{ href: '/blog/posts/post3', title: 'Why Your Scanner Sometimes Beeps (and Sometimes Doesn’t)', description: 'Common mistakes that make barcodes unreadable — even when they look perfect.' },
		{ href: '/blog/posts/post4', title: 'UPC-A vs EAN-13: When to Use Which (and Why It Matters)', description: 'The technical and legal differences — and how to convert safely.' },
		{ href: '/blog/posts/post5', title: 'Printing Barcodes That Actually Scan at Retail', description: 'DPI, quiet zones, color contrast, and real-world print tips that work.' },
		{ href: '/blog/posts/post6', title: 'How the Check Digit is Calculated (Step-by-Step)', description: 'The exact math behind the final digit — with examples you can verify.' },
		{ href: '/blog/posts/post7', title: 'Building This Generator: Why It’s More Accurate Than Most Online Tools', description: 'Behind-the-scenes of creating a fully offline, GS1-compliant barcode tool.' }
	];
</script>

<svelte:head>
	<title>Blog • EAN-13 & UPC-A Barcode Generator</title>
	<meta name="description" content="Learn everything about EAN-13 and UPC-A barcodes: how they work, how to print them correctly, and insider tips from the developer." />
</svelte:head>

<div class="container fade-in blog-index">
	<header class="blog-header">
		<h1>Blog: Barcode Deep Dives</h1>
		<p class="subtitle">
			Expert insights, technical explanations, and practical tips for generating, printing, and understanding EAN-13 & UPC-A barcodes. Built by the creator of this tool.
		</p>
	</header>

	<div class="posts-grid">
		{#each posts as post}
			<a href="{base}{post.href}" class="card post-card">
				<div class="card-body">
					<h2 class="post-title">{post.title}</h2>
					<p class="post-description">{post.description}</p>
					<span class="read-more">Read Article →</span>
				</div>
			</a>
		{/each}
	</div>
</div>

<style>
	.blog-index { padding: 3rem 0; }
	.blog-header { text-align: center; margin-bottom: 4rem; }
	.blog-header h1 { font-size: 3rem; margin-bottom: 1rem; color: var(--accent-primary); }
	.subtitle { font-size: 1.2rem; color: var(--text-secondary); max-width: 800px; margin: 0 auto; line-height: 1.7; }

	.posts-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
		gap: 2rem;
	}

	.post-card {
		background: var(--card-bg);
		border: 1px solid var(--border-color);
		border-radius: 12px;
		overflow: hidden;
		transition: transform 0.3s ease, box-shadow 0.3s ease;
		text-decoration: none;
		height: 100%;
		display: flex;
		flex-direction: column;
	}

	.post-card:hover {
		transform: translateY(-8px);
		box-shadow: 0 12px 30px rgba(0,0,0,0.15);
	}

	.post-card .card-body {
		padding: 1.8rem;
		display: flex;
		flex-direction: column;
		flex-grow: 1;
	}

	.post-title {
		font-size: 1.35rem;
		font-weight: 700;
		color: var(--text-primary);
		margin-bottom: 0.8rem;
		line-height: 1.3;
	}

	.post-description {
		color: var(--text-secondary);
		flex-grow: 1;
		margin-bottom: 1.2rem;
		line-height: 1.6;
	}

	.read-more {
		color: var(--accent-primary);
		font-weight: 600;
		font-size: 1.05rem;
		align-self: flex-start;
		transition: all 0.2s ease;
	}

	.post-card:hover .read-more {
		transform: translateX(8px);
	}
</style>