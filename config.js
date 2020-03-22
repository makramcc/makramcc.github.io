export function checktoken() {
  let token = localStorage.getItem('token')
  if (token === null) {
    window.location.href = 'https://' + host() + '/index.html'
  }
}
export function checklogin() {
  let token = localStorage.getItem('token')
  if (token !== null) {
    window.location.href = 'https://' + host() + '/products.html'
  }
}

export function host() {
  return 'makramcc.github.io'
}

export function service() {
  return 'www.jns2010.com'
}
