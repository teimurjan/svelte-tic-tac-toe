<script>
  import Game from "./Game.svelte";
</script>

<style>
  .app {
	height: 100vh;
	background: #A53860;
	color: #FCCD92;
  }

  .container {
	display: flex;
	justify-content: center;
	align-items: center;
    max-width: 1024px;
	height: 100%;
	margin: 0 auto;
  }
</style>

<div class="app">
  <div class="container">
    <Game />
  </div>
</div>
