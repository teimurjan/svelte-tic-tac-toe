import { writable, derived } from "svelte/store";
import range from "lodash/range";
import set from "lodash/set";

import { CROSS_SIGN, NOUGHT_SIGN, DECK_SIZE } from "../utils/constants";
import { getWinner } from "../utils/winner";

const getInitialDeck = () => range(DECK_SIZE).map(() => getInitialRow());
const getInitialRow = () => range(DECK_SIZE).map(() => null);

export const game = writable({
  deck: getInitialDeck(),
  moves: 0,
  winner: null
});

export const move = (rowI, colI) => {
  game.update(state => {
    const newMoves = state.moves + 1;
    const newDeck = set(
      state.deck,
      [rowI, colI],
      state.moves % 2 === 0 ? CROSS_SIGN : NOUGHT_SIGN
    );

    const winner = newMoves > DECK_SIZE ? getWinner(newDeck) : state.winner;

    return {
      ...state,
      deck: newDeck,
      moves: newMoves,
      winner
    };
  });
};

export const isDeckComplete = derived(
  game,
  $state => $state.moves === DECK_SIZE ** 2
);

export const isCrossTurn = derived(game, $state => $state.moves % 2 === 0);
