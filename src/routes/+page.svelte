<script>
	export let data;
</script>

<svelte:head>
	<title>static-markdown-blog</title>
	<meta name="description" content="A static markdown blog with SvelteKit and GitHub Pages." />
</svelte:head>

<h1>static-markdown-blog</h1>
<p>Hello world</p>

{#if data.blog}
	<h2>Blog</h2>
	<p>There are currently {data.blog.length} articles in the blog:</p>
	<ul>
		{#each data.blog as { title, date }}
			<li>
				<h3>{title}</h3>
				<p>Dated <time datetime={date}>{date.toDateString()}</time></p>
			</li>
		{/each}
	</ul>
{/if}
