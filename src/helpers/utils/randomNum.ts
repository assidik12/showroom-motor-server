export const randomNum = () => {
  let num = Math.floor(Math.random() * 100000000);
  return `trx-${num}`;
};
