function sleep(ms) {
  // set up the sleep function
  return new Promise(resolve => setTimeout(resolve, ms));
}
function initialize() {
  window.parsed=undefined
  const promise = fetch('https://raw.githubusercontent.com/nicolas377/hosting/master/temp.json')
    sleep(100).then(() => {
      promise.then(res => res.json())
      promise.then(res => parsed = res)
    });
}
initialize()
sleep(105).then(() => {
  console.log(parsed)
});
