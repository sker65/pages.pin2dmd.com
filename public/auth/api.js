
 function login(redirect) {
  if (redirect) {
    localStorage.setItem("auth:redirect", redirect);
  } else {
    localStorage.setItem("auth:redirect", window.location.href);
  }
  window.location.href = "/auth/";
}

 function logout(redirect) {
  if (redirect) {
    localStorage.setItem("auth:redirect", redirect);
  } else {
    localStorage.setItem("auth:redirect", window.location.href);
  }
  window.location.href = "/auth/?logout";
}

 function isAuthenticated() {
  const login = localStorage.getItem("auth:login");
  if (login) {
    return true;
  } else {
    return false;
  }
}

 function currentUser() {
  const login = localStorage.getItem("auth:login");
  if (!login) {
    return null;
  }
  return JSON.parse(login)["user"];
}

 function accessToken() {
  const login = localStorage.getItem("auth:login");
  if (!login) {
    return null;
  }
  return JSON.parse(login)["access_token"];
}