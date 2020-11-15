function pause(ms) {
  restart = true
  if (restart) {
    setTimeout(soundpackage,ms)
    restart = false
    return
  }
}
