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
	main > :global(* + *) {
		margin-block-start: 0.75em;
	}

	main > :global(p) {
		line-height: 1.5;
	}
</style>
