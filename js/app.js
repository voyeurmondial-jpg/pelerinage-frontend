const app = {
  init() {
    app.navigate("auth");
  },

  navigate(page, data = null) {
    const main = document.getElementById("app");
    main.innerHTML = "";
    window.scrollTo(0, 0);

    updateNav();

    const views = {
      auth: renderAuth,
      registration: renderRegistration,
      payment: () => renderPayment(data),
      receipt: () => renderReceipt(data),
      "user-dashboard": renderUserDashboard,
      "admin-dashboard": renderAdminDashboard
    };

    views[page]?.();
  },

  login(email, role) {
    db.currentUser = { email, role };
    app.navigate(role === "admin" ? "admin-dashboard" : "user-dashboard");
  },

  logout() {
    db.currentUser = null;
    app.navigate("auth");
  }
};

window.onload = app.init;
