export const makeGuest = (name, isGoing, favouriteFood) => ({
  id: Math.floor(Math.random() * 1000000),
  name,
  isGoing,
  favouriteFood,
});
