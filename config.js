
export function checktoken() {
  let token = localStorage.getItem("token");
  if (token === null) window.location.href = "http://" + host() + "/index.html";
}

export function host() {
  return 'localhost:8888/makramcc.github.io';
}

export function service() {
  return '192.168.2.35:8000';
}

