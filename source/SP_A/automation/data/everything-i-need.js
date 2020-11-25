// Gear
function gear(val) {
  controls.setters.setGear['set'](val);
}
// val is 0 for down, 1 for up

// Flaps
function flapsUp(val) {
  controls.setters.setFlapsUp['set'](val);
}
function flapsDown() {
  controls.setters.setFlapsDown['set'](val);
}
// val can be found at geofs.aircraft.instance.definition.flapsPositions
