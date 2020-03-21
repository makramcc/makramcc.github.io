export function checktoken() {
  let token = localStorage.getItem('token')
  console.log(token)

  if (token === null) {
    window.location.href = 'https://' + host() + '/index.html'
  } else {
    window.location.href = 'https://' + host() + '/products.html'
  }
}

export function host() {
  return 'makramcc.github.io'
}

export function service() {
  return 'jns2010.com'
}
