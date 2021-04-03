<template>
	<div id="header">
		<img id="logo" src="../assets/rpc-logo.png">
		<span>PROGRAMAÇÃO</span>
	</div>
</template>

<script>
export default {
	name: 'Header',
};
</script>

<style scoped>
	#header {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100px;
		border-bottom: 1px solid #e4e4e4;
	}
  #header>span{
    font-size: 1.5em
  }
	#logo {
		left: 40px;
		position: absolute;
		width: 10vw
	}

  @media (max-width: 992px){
  #header>span{
    font-size: 1.2em
  }
}
</style>
