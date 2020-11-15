// Get a plus or minus distance from the requested altitude callout to use when doing callouts dependent on altitude
// A is vertical speed, B is requested altitude, C is minimum altitude
let A=-800
let B=2000
let C
C=B-Math.abs((A*0.01)/60)
console.log(C)
