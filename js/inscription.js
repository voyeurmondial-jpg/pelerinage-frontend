document.getElementById("inscriptionForm").addEventListener("submit", async e => {
  e.preventDefault();

  const data = {
    statut_vocationnel: statut_vocationnel.value,
    nom: nom.value,
    prenom: prenom.value,
    date_naissance: date_naissance.value,
    numero: numero.value,
    email: email.value,
    diocese: diocese.value,
    paroisse: paroisse.value
  };

  const res = await fetch(`${API_URL}/inscription`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  const result = await res.json();

  if (result.success) {
    alert("Inscription enregistrée ✅");
  } else {
    alert("Erreur serveur ❌");
  }
});
