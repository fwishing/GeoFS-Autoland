function soundpackage() {
  if (((geofs.relativeAltitude*3.280841667)-9.695689210173782)<1500 && geofs.aircraft.instance.animationValue.gearTarget!=0 && geofs.animation.values.climbrate<0) {console.log("too low gear");}
  if (geofs.aircraft.instance.animationValue.enginesOn==true && 701.666666666666667>=geofs.aircraft.instance.animationValue.rpm>=700) {console.log("tcas test");}
  if (ui.hud.stallAlarmOn==true && geofs.aircraft.instance.groundContact==false) {console.log("stall");}
  if (geofs.animation.values.climbrate<0) {
    if (550>=((geofs.relativeAltitude*3.280841667)-9.695689210173782)>=549.8) {console.log("minimums");}
    if (1050>=((geofs.relativeAltitude*3.280841667)-9.695689210173782)>=1049.8) {console.log("approcahing minimums");}
    if (2500>=((geofs.relativeAltitude*3.280841667)-9.695689210173782)>=2499.7) {console.log("2500");}
    if (1000>=((geofs.relativeAltitude*3.280841667)-9.695689210173782)>=999.8) {console.log("1000");}
    if (500>=((geofs.relativeAltitude*3.280841667)-9.695689210173782)>=499.8) {console.log("500");}
    if (400>=((geofs.relativeAltitude*3.280841667)-9.695689210173782)>=399.8) {console.log("400");}
    if (300>=((geofs.relativeAltitude*3.280841667)-9.695689210173782)>=299.8) {console.log("300");}
    if (200>=((geofs.relativeAltitude*3.280841667)-9.695689210173782)>=199.8) {console.log("200");}
    if (100>=((geofs.relativeAltitude*3.280841667)-9.695689210173782)>=99.8) {console.log("100");}
    if (50>=((geofs.relativeAltitude*3.280841667)-9.695689210173782)>=49.8) {console.log("50");}
    if (40>=((geofs.relativeAltitude*3.280841667)-9.695689210173782)>=39.8) {console.log("40");}
    if (30>=((geofs.relativeAltitude*3.280841667)-9.695689210173782)>=29.8) {console.log("30");}
    if (20>=((geofs.relativeAltitude*3.280841667)-9.695689210173782)>=19.8) {console.log("20");}
    if (10>=((geofs.relativeAltitude*3.280841667)-9.695689210173782)>=9.8) {console.log("10");}
  }
  setTimeout(soundpackage,10)
}
