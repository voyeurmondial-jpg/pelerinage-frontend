function renderAuth() {
  document.getElementById("app").innerHTML = `
    <h1 class="text-xl font-bold mb-4">Connexion</h1>
    <input id="email" placeholder="Email" class="border p-2 mb-2 w-full"/>
    <input id="password" type="password" placeholder="Mot de passe" class="border p-2 mb-2 w-full"/>
    <button onclick="login()" class="bg-blue-600 text-white px-4 py-2 rounded">
      Se connecter
    </button>
  `;
}

function login() {
  fetch(`${API_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: email.value,
      password: password.value
    })
  })
  .then(r => r.json())
  .then(data => {
    if (data.success) renderDashboard();
    else alert("Login échoué");
  });
}
