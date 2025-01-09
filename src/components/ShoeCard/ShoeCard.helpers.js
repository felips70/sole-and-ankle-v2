import differenceInDays from 'date-fns/differenceInDays';

export function isNewShoe(releaseDate) {
  return differenceInDays(new Date(), releaseDate) < 30;
}