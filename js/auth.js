function renderAuth() {
  const app = document.getElementById("app");

  app.innerHTML = `
    <h2 class="text-2xl font-bold mb-4">Connexion</h2>

    <input id="email" type="email" placeholder="Email"
      class="border p-2 mb-2 w-full" />

    <input id="password" type="password" placeholder="Mot de passe"
      class="border p-2 mb-4 w-full" />

    <button onclick="login()"
      class="bg-blue-600 text-white px-4 py-2 rounded">
      Se connecter
    </button>
  `;
}

function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  fetch(`${API_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  })
    .then(res => res.json())
    .then(data => {
      if (!data.success) {
        alert("Login incorrect");
        return;
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      navigate("dashboard");
    })
    .catch(() => alert("Erreur serveur"));
}
