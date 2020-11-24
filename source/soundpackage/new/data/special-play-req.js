// Get a plus or minus distance from the requested altitude callout to use when doing callouts dependent on altitude
// A is vertical speed and B is minimum altitude

function defminalt(alt) {
  let A=-800 /*geofs.animation.values.climbrate*/
  let minalt=Math.floor(alt-Math.abs((A*0.01)/60))
  return minalt
}
defminalt(100)
