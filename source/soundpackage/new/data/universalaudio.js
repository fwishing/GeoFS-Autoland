function universalAudio(base64,ms) {
  var audio="data:audio/mpeg;base64,"+base64
  audio.loop=false
  audio.play()
  pause(ms)
}
// universalAudio(base64,ms)
