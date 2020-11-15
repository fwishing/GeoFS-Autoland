function sleep(ms) {
  // set up the sleep function
  return new Promise(resolve => setTimeout(resolve, ms));
}
sleep(time).then(() => {
  // code
});
