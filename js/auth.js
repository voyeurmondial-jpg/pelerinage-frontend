// js/auth.js

function renderAuth() {
  document.getElementById("app").innerHTML = `
    <div class="max-w-md mx-auto p-6">
      <h1 class="text-2xl font-bold mb-4">Connexion</h1>

      <input
        id="email"
        type="email"
        placeholder="Email"
        class="border p-2 mb-3 w-full rounded"
      />

      <input
        id="password"
        type="password"
        placeholder="Mot de passe"
        class="border p-2 mb-4 w-full rounded"
      />

      <button
        id="loginBtn"
        class="bg-blue-600 text-white px-4 py-2 rounded w-full"
      >
        Se connecter
      </button>

      <p class="mt-4 text-sm text-center">
        Pas de compte ?
        <a href="#" id="goRegister" class="text-blue-600 underline">
          S’inscrire
        </a>
      </p>

      <pre id="authResult" class="mt-4 text-xs text-red-600"></pre>
    </div>
  `;

  document.getElementById("loginBtn").onclick = login;
  do
