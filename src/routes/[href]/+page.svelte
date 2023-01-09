<script>
	export let data;
</script>

<svelte:head>
	<title>{data.title}</title>
	<meta name="description" content={data.description} />
</svelte:head>

<main>
	{@html data.html}
</main>

<style>
	main {
		margin-inline: auto;
		max-width: 60ch;
	}

	main > :global(* + *) {
		margin-top: 0.75em;
	}

	main > :global(p) {
		line-height: 1.5;
	}
</style>
