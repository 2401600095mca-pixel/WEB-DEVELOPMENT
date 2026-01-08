// Show register
function showRegister() {
  document.getElementById("registerBox").style.display = "block";
}

// Register
function register() {
  let u = document.getElementById("newUser").value;
  let p = document.getElementById("newPass").value;

  if (!u || !p) return alert("Fill details!");

  localStorage.setItem("user", u);
  localStorage.setItem("pass", p);

  alert("Account Created! Login Now");
}

// Login
function login() {
  let u = document.getElementById("username").value;
  let p = document.getElementById("password").value;

  if (u === localStorage.getItem("user") && p === localStorage.getItem("pass")) {
    localStorage.setItem("loggedIn", true);
    window.location.href = "home.html";
  } else alert("Incorrect Details");
}

// Check login
function checkUser() {
  if (!localStorage.getItem("loggedIn")) window.location.href = "index.html";
  document.getElementById("userName").innerHTML = localStorage.getItem("user");
}

// Logout
function logout() {
  localStorage.removeItem("loggedIn");
  window.location.href = "index.html";
}

// Quiz submit
function submitQuiz() {
  let score = 0;
  if (document.querySelector('input[name="q1"]:checked')?.value === "correct") score++;
  if (document.querySelector('input[name="q2"]:checked')?.value === "correct") score++;

  document.getElementById("result").innerHTML = "Your Score: " + score + "/2";

  localStorage.setItem("progress", score);
}

// Go quiz
function gotoQuiz() {
  window.location.href = "quiz.html";
}