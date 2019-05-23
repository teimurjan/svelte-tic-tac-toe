<script>
  import Deck from "./Deck.svelte";

  import { game, isDeckComplete, isCrossTurn } from "./stores/game.js";
  import { CROSS_SIGN } from "./utils/constants.js";

  const getMovesText = () =>
    $isDeckComplete ? "it's draw" : `${$isCrossTurn ? "cross" : "nought"} turn`;

  const getWinnerText = () =>
    `${$game.winner === CROSS_SIGN ? "cross" : "nought"} wins`;
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

  @media (max-width: 768px) {
    .game-title {
      font-size: 10vw;
    }
  }
</style>

<div class="game">
  <h1 class="game-title">
     {$game.winner ? getWinnerText() : getMovesText()}
  </h1>
  <Deck />
</div>
