<script>
  import classNames from "classnames";

  import { game, move } from "./stores/game.js";
  import { CROSS_SIGN, NOUGHT_SIGN } from "./utils/constants.js";

  const isCellFree = cell => !cell;

  const getCellClassName = cell => {
    if (cell === CROSS_SIGN) {
      return "cross";
    }

    if (cell === NOUGHT_SIGN) {
      return "nought";
    }

    return "";
  };
</script>

<style>
  .deck {
    background: #450920;
    display: inline-block;
  }

  .row {
    display: flex;
  }

  .cell {
    height: 5vw;
    width: 5vw;
    text-align: center;
    font-size: 5vw;
    border: 5px solid #da627d;
    cursor: pointer;
  }

  .cell:after {
    content: " ";
    display: block;
    line-height: 4vw;
  }

  .cell.cross::after {
    content: "x";
  }

  .cell.nought::after {
    content: "o";
  }

  @media (max-width: 768px) {
    .cell {
      height: 15vw;
      width: 15vw;
      font-size: 15vw;
    }

    .cell:after {
      line-height: 13vw;
    }
  }
</style>

<div class="deck">
  {#each $game.deck as row, rowI}
    <div class="row">
      {#each row as cell, cellI}
        <div
          class={classNames('cell', getCellClassName(cell))}
          on:click={() => !$game.winner && isCellFree(cell) && move(rowI, cellI)} />
      {/each}
    </div>
  {/each}
</div>
