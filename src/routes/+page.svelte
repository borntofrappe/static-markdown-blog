<script>
	import { base } from '$app/paths';
	export let data;
</script>

<svelte:head>
	<title>Alice in Wonderland</title>
	<meta name="description" content="All in the golden afternoon, full leisurely we glide." />
</svelte:head>

<h1>Alice in Wonderland</h1>

{#if data.blog}
	<ul>
		{#each data.blog as { title, description, href }}
			<li>
				<a href="{base}/{href}"><h3>{title}</h3></a>
				<p>{description}</p>
			</li>
		{/each}
	</ul>
{/if}

<style>
	ul {
		padding: 0;
		list-style: none;
		list-style-position: inside;
	}
</style>
