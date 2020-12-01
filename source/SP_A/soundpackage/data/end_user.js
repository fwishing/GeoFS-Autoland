function setup() {
  // A is vertical speed, B is requested altitude
  window.A=undefined
  window.B=undefined
  window.C=undefined
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
function initialize() {
  fetch('https://raw.githubusercontent.com/nicolas377/hosting/master/sound-package/source.json')
    .then(function(resp) {
      return resp.json()
    })
    .then(function(data) {
      parsed = data
    })
}
function update() {
  aid=1/*geofs.aircraft.instance.id*/
  warning_keys = Object.keys(parsed[aid].warnings)
  gpws_keys = Object.keys(parsed[aid].approach)
  base64 = Object.values(parsed[aid].warnings).concat(Object.values(parsed[aid].approach))
}
function sleep(ms) {
  // set up the sleep function
  return new Promise(resolve => setTimeout(resolve, ms));
}
function defminalt(alt) {
  let A=-800 /*geofs.animation.values.climbrate*/
  let minalt=Math.floor(alt-Math.abs((A*0.01)/60))
  return minalt
}
