function universalAudio(base64,ms,B) {
  var audio=new Audio(base64)
  audio.loop=false
  audio.play()
  sleep(Math.ceil(ms/10)*10).then(() => {
    soundpackage()
  });
};
//universalAudio(/*base64 here*/,/*sound length in ms here*/)
