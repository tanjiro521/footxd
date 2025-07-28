const turfs = [
  { name: "Turf Arena", location: "Salt Lake", slots: ["4 PM", "6 PM"] },
  { name: "KickOff Grounds", location: "Newtown", slots: ["2 PM", "5 PM"] },
  { name: "GoalPoint", location: "Behala", slots: ["6 AM", "9 AM"] }
];

function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Simple validation
  if (username && password) {
    document.getElementById("login-section").style.display = "none";
    document.getElementById("app-section").style.display = "block";
    showTurfs(turfs);
  } else {
    alert("Please enter username and password");
  }
}

function showTurfs(list) {
  const turfList = document.getElementById("turf-list");
  turfList.innerHTML = "";
  list.forEach(turf => {
    const card = document.createElement("div");
    card.className = "turf-card";
    card.innerHTML = `<h3>${turf.name}</h3><p>${turf.location}</p><p>Slots: ${turf.slots.join(", ")}</p>`;
    turfList.appendChild(card);
  });
}

function searchTurfs() {
  const query = document.getElementById("search").value.toLowerCase();
  const filtered = turfs.filter(t => t.location.toLowerCase().includes(query));
  showTurfs(filtered);
}
