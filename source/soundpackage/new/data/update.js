function update() {
  aid=1/*geofs.aircraft.instance.id*/
  current_sounds = parsed[aid]
  warning_keys = Object.keys(parsed[aid].warnings)
  gpws_keys = Object.keys(parsed[aid].approach)
  base64 = Object.values(parsed[aid].warnings).concat(Object.values(parsed[aid].approach))
}
