// js/app.js

function navigate(page) {
  const user = localStorage.getItem("user");

  if (page === "dashboard" && !user) {
    renderAuth();
    return;
  }

  if (page === "login") renderAuth();
  else if (page === "register") renderRegister();
  else if (page === "dashboard") renderDashboard();
  else renderAuth();
}

document.addEventListener("DOMContentLoaded", () => {
  const user = localStorage.getItem("user");
  navigate(user ? "dashboard" : "login");
});
function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  navigate("login");
}

