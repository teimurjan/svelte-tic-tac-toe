<script>
  import Game from "./Game.svelte";
</script>

<style>
  .app {
    height: 100vh;
    background: #a53860;
    color: #fccd92;
  }

  .container {
    padding-top: 10vh;
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
