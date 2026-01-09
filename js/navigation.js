function updateNav() {
  const nav = document.getElementById("navbar");

  if (!db.currentUser) {
    nav.innerHTML = `<button onclick="app.navigate('auth')">Connexion</button>`;
  } else if (db.currentUser.role === "admin") {
    nav.innerHTML = `
      <button onclick="app.navigate('admin-dashboard')">Admin</button>
      <button onclick="app.logout()">Déconnexion</button>
    `;
  } else {
    nav.innerHTML = `
      <button onclick="app.navigate('user-dashboard')">Mon espace</button>
      <button onclick="app.navigate('registration')">S'inscrire</button>
      <button onclick="app.logout()">Déconnexion</button>
    `;
  }
}
