function sleep(ms) {
  // set up the sleep function
  return new Promise(resolve => setTimeout(resolve, ms));
}
sleep(4000).then(() => {
  console.log("no, this doesn't work");
});
