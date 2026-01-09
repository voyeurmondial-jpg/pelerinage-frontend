function renderAuth() {
  document.getElementById("app").innerHTML = `
    <h2 class="text-xl font-bold">Connexion</h2>
    <button onclick="app.login('admin@test.com','admin')">Admin</button>
    <button onclick="app.login('user@test.com','user')">Pèlerin</button>
  `;
}
