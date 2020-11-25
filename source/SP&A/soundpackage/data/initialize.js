function initialize() {
  fetch('https://raw.githubusercontent.com/nicolas377/hosting/master/sound-package/source.json')
    .then(function(resp) {
      return resp.json()
    })
    .then(function(data) {
      parsed = data
    })
}
