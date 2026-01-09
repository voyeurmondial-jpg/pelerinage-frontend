function renderAuth() {
  document.getElementById("app").innerHTML = `
    <h2 class="text-xl font-bold mb-4">Login</h2>
    <input id="email" class="border p-2 mb-2 w-full" placeholder="Email">
    <input id="password" type="password" class="border p-2 mb-2 w-full" placeholder="Password">
    <button onclick="login()" class="bg-blue-500 text-white px-4 py-2">Login</button>
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
      if (data.success) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        navigate("dashboard");
      } else {
        alert("Login failed");
      }
    });
}
