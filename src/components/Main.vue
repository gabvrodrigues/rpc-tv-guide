<template>
	<div id="main">
		<Header/>
		<Body/>
	</div>
</template>

<script>
import Header from './Header.vue';
import Body from './Body.vue';

export default {
	name: 'Main',
	components: {
		Header,
		Body,
	},
};
</script>

<style scoped>
</style>
