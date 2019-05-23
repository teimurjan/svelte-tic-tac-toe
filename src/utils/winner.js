import zip from "lodash/zip";

import { CROSS_SIGN, NOUGHT_SIGN } from "./constants";

export const getWinner = deck => {
  const winnerByRow = getWinnerByRow(deck);
  if (winnerByRow) {
    return winnerByRow;
  }

  const winnerByCol = getWinnerByCol(deck);
  if (winnerByCol) {
    return winnerByCol;
  }

  const winnerByDiagonal = getWinnerByDiagonal(deck);
  if (winnerByDiagonal) {
    return winnerByDiagonal;
  }

  return null;
};

const getWinnerByRow = deck => {
  for (const row of deck) {
    const winnerFromRow = getWinnerFromRow(row);
    if (winnerFromRow) {
      return winnerFromRow;
    }
  }

  return null;
};

const getWinnerByCol = deck => {
  const transposedDeck = zip(...deck);

  return getWinnerByRow(transposedDeck);
};

const getWinnerByDiagonal = deck => {
  const mainDiagonal = deck.map((row, i) => row[i]);
  const mainDiagonalWinner = getWinnerFromRow(mainDiagonal);
  if (mainDiagonalWinner) {
    return mainDiagonalWinner;
  }

  const reverseDiagonal = deck.map((row, i) => row[row.length - 1 - i]);
  const reverseDiagonalWinner = getWinnerFromRow(reverseDiagonal);
  if (reverseDiagonalWinner) {
    return reverseDiagonalWinner;
  }

  return null;
};

const getWinnerFromRow = row => {
  const isCrossWinner = row.every(v => v === CROSS_SIGN);
  if (isCrossWinner) {
    return CROSS_SIGN;
  }

  const isNoughtWinner = row.every(v => v === NOUGHT_SIGN);
  if (isNoughtWinner) {
    return NOUGHT_SIGN;
  }
};
