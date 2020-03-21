export function checktoken() {
  let token = localStorage.getItem('token')
  if (token === null) window.location.href = 'http://' + host() + '/index.html'
}

export function host() {
  return 'makramcc.github.io'
}

export function service() {
  return 'jns2010.com'
}
