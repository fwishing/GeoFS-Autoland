function setup() {
  // A is vertical speed, B is requested altitude
  let A;
  let B;
  let C;
  function sleep(ms) {
    // set up the sleep function
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  function pause(ms) {
    restart = true
    if (restart) {
      setTimeout(soundpackage,ms)
      restart = false
      return
    }
  }
  function universalAudio(base64,ms) {
    var audio="data:audio/mpeg;base64,"+base64
    audio.loop=false
    audio.play()
    pause(ms)
    return
  }
}
