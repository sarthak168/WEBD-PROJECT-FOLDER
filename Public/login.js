function toggleForm() {
    document.getElementById("loginForm").classList.toggle("hidden");
    document.getElementById("signupForm").classList.toggle("hidden");
    document.getElementById("toggleText").innerHTML = document.getElementById("toggleText").innerHTML.includes("Sign Up") ? "Already have an account? <span onclick='toggleForm()'>Login</span>" : "Don't have an account? <span onclick='toggleForm()'>Sign Up</span>";
  }
  
  function login(event) {
    event.preventDefault();
    // Your login logic here
    alert("Login functionality will be implemented in the future version.");
  }
  
  function signup(event) {
    event.preventDefault();
    // Your sign up logic here
    alert("Sign Up functionality will be implemented in the future version.");
  }