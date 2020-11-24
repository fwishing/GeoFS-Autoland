function initialize() {
  var data
  function defineJSON(url) {
    fetch(url)
      .then(res => res.json())
      .then(data => parsed = data)
  }
  window.parsed=defineJSON('https://raw.githubusercontent.com/nicolas377/hosting/master/temp.json')
}
