// Get a plus or minus distance from the requested altitude callout to use when doing callouts dependent on altitude
// A is vertical speed and B is minimum altitude

function math(alt) {
  let A=-800
  let B
  B=alt-Math.abs((A*0.01)/60)
  console.log(B)
}
math(100)
