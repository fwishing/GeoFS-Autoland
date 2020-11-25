function sleep(ms) {
  // set up the sleep function
  return new Promise(resolve => setTimeout(resolve, ms));
}
function universalAudio(base64) {
  var audio=new Audio("data:audio/mpeg;base64,"+base64)
  audio.volume=volume/100
  audio.play()
}
volume = 40
let run = true
let parsed;
fetch('https://raw.githubusercontent.com/nicolas377/hosting/master/sound-package/source.json')
  .then(function(resp) {
    return resp.json()
  })
  .then(function(data) {
    parsed = data
  })

sleep(1000).then(() => {
  aid=1/*geofs.aircraft.instance.id*/
  warning_keys = Object.keys(parsed[aid].warnings)
  gpws_keys = Object.keys(parsed[aid].approach)
  warning_sounds = Object.values(parsed[aid].warnings)
  gpws_sounds = Object.values(parsed[aid].approach)
  sound()
});
function sound() {
  if (run) {
    universalAudio(parsed[aid].approach[2500])
    run = false
  }
}
