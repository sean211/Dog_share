<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import { redirect } from '@sveltejs/kit';

	let { children } = $props();

	export function load() {
		throw redirect(302, '/Login');
	}
	
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}