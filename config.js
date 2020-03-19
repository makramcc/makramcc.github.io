export function port() {
  return 8888;
}


export function checktoken() {
  let token = localStorage.getItem("token");
  if (token === null) window.location.href = "http://localhost:" + port() + "/front/index.html";
}

export function host() {
  return 'localhost';
}

