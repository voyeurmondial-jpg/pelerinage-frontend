function renderRegister() {
  document.getElementById("app").innerHTML = `
    <h1 class="text-xl font-bold mb-4">Inscription</h1>
    <input placeholder="Nom" class="border p-2 mb-2 w-full"/>
    <input placeholder="Email" class="border p-2 mb-2 w-full"/>
    <button class="bg-green-600 text-white px-4 py-2 rounded">
      S'inscrire
    </button>
  `;
}
