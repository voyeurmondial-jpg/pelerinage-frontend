function navigate(page) {
  if (page === "login") renderAuth();
  else if (page === "register") renderRegister();
  else if (page === "dashboard") renderDashboard();
  else renderAuth();
}

document.addEventListener("DOMContentLoaded", () => {
  navigate("login");
});
