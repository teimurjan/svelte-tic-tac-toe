<script>
  import { fade } from "svelte/transition";

  import Deck from "./Deck.svelte";

  import { game, reset, isDeckComplete, isCrossTurn } from "./stores/game.js";
  import { CROSS_SIGN } from "./utils/constants.js";
</script>

<style>
  .game {
    margin: 0 auto;
    text-align: center;
  }

  .game-title {
    font-size: 3vw;
    margin: 0;
    padding-bottom: 2rem;
  }

  .game-play-again {
    color: white;
    background: #450920;
    border: none;
    margin-top: 2vw;
    padding: 1vw 2vw;
    font-size: 1.5vw;
  }

  @media (max-width: 768px) {
    .game-title {
      font-size: 10vw;
    }

    .game-play-again {
      background: #450920;
      border: none;
      margin-top: 5vw;
      padding: 3vw 5vw;
      font-size: 5vw;
    }
  }
</style>

<div class="game">

  <h1 class="game-title">
    {#if $game.winner}
      {#if $game.winner === CROSS_SIGN}cross{:else}nought{/if}
       {' '}wins
    {:else if $isDeckComplete}
      it's draw
    {:else}
      {#if $isCrossTurn}cross{:else}nought{/if}
       {' '}turns
    {/if}
  </h1>

  <div class="game-deck">
    <Deck />
  </div>

  {#if $game.winner || $isDeckComplete}
    <button class="game-play-again" on:click={reset} transition:fade>
      Play Again
    </button>
  {/if}

</div>
