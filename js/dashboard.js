// js/dashboard.js

function renderDashboard() {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    navigate("login");
    return;
  }

  document.getElementById("app").innerHTML = `
    <div class="max-w-xl mx-auto p-6">
      <h1 class="text-2xl font-bold mb-4">
        Bienvenue ${user.name || "Utilisateur"}
      </h1>

      <p class="mb-4 text-gray-700">
        Dashboard utilisateur opérationnel.
      </p>

      <button id="logoutBtn"
        class="bg-red-600 text-white px-4 py-2 rounded">
        Se déconnecter
      </button>
    </div>
  `;

  document.getElementById("logoutBtn").onclick = logout;
}

function logout() {
  localStorage.removeItem("user");
  navigate("login");
}
