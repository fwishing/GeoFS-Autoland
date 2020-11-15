// ==UserScript==
// @name Sound Package for GeoFS
// @description Take the GeoFS experience to the next level with new features like GPWS callouts and alarms!
// @author Nicolas Rodriguez
// @match http://www.geo-fs.com/geofs.php
// @match https://www.geo-fs.com/geofs.php
// @run-at document-end
// @version 0.2-2
// @grant none
// ==/UserScript==

function setup() {
  function varsetup() {
    // A is vertical speed, B is requested altitude
    let A;
    let B;
    let check_time=.01
    let C;
  }
  varsetup()
  function sleep(ms) {
    // set up the sleep function
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  function universalAudio(base64,ms,B) {
    var audio=new Audio(base64)
    audio.loop=false
    audio.play()
    sleep(Math.ceil(ms/10)*10).then(() => {
      soundpackage()
    });
  };
}
setup()
function addSound() {}
/*sleep(4000).then(() => {
  soundpackage();
});*/
