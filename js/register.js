// js/register.js

function renderRegister() {
  document.getElementById("app").innerHTML = `
    <div class="max-w-md mx-auto p-6">
      <h1 class="text-2xl font-bold mb-4">Inscription</h1>

      <input id="name" placeholder="Nom"
        class="border p-2 mb-3 w-full rounded" />

      <input id="email" type="email" placeholder="Email"
        class="border p-2 mb-3 w-full rounded" />

      <input id="password" type="password" placeholder="Mot de passe"
        class="border p-2 mb-4 w-full rounded" />

      <button id="registerBtn"
        class="bg-green-600 text-white px-4 py-2 rounded w-full">
        S’inscrire
      </button>

      <p class="mt-4 text-sm text-center">
        Déjà un compte ?
        <a href="#" id="goLogin" class="text-blue-600 underline">
          Se connecter
        </a>
      </p>

      <pre id="registerResult" class="mt-4 text-xs text-red-600"></pre>
    </div>
  `;

  document.getElementById("registerBtn").onclick = register;
  document.getElementById("goLogin").onclick = () => navigate("login");
}

function register() {
  document.getElementById("registerResult").textContent =
    "Inscription (backend à connecter)";
}
