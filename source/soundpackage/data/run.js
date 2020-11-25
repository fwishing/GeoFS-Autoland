function run() {
  initialize()
  sleep(5000).then(() => {
    setInterval(function() {
      if (aid!=geofs.aircraft.instance.id) {
        update()
      }
    },1000)
    soundpackage()
  });
}
