export function checktoken() {
  let token = localStorage.getItem('token')
  if (token === null) window.location.href = 'http://' + host() + '/index.html'
}

export function host() {
  return 'localhost:5500'
}

export function service() {
  return 'fdef09df.ngrok.io'
}
