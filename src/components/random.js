const randomIDGenerator = (user) => {
  const randomNumber = Math.floor(Math.random() * (999 - 100 + 1)) + 100;
  return `${user}${randomNumber}`;
}
export default randomIDGenerator;
