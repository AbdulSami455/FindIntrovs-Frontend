document.addEventListener("DOMContentLoaded", () => {
    const formTitle = document.getElementById("form-title");
    const authForm = document.getElementById("auth-form");
    const toggleLink = document.getElementById("toggle-link");
    const submitBtn = document.getElementById("submit-btn");
  
    let isLogin = true; // State for toggling between login and signup
  
    // Toggle between login and signup
    toggleLink.addEventListener("click", () => {
      isLogin = !isLogin;
      formTitle.textContent = isLogin ? "Login" : "Sign Up";
      submitBtn.textContent = isLogin ? "Login" : "Sign Up";
      toggleLink.textContent = isLogin
        ? "Don't have an account? Sign up"
        : "Already have an account? Login";
    });
  
    // Handle form submission
    authForm.addEventListener("submit", async (event) => {
      event.preventDefault();
  
      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value.trim();
  
      if (!username || !password) {
        alert("Please fill in all fields.");
        return;
      }
  
      try {
        const endpoint = isLogin ? "/login" : "/register";
        const response = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username, password }),
        });
  
        const data = await response.json();
  
        if (response.ok) {
          alert(isLogin ? "Login successful!" : "Signup successful!");
          if (isLogin) {
            window.location.href = "home.html"; // Redirect to home page
          }
        } else {
          alert(data.error || "An error occurred. Please try again.");
        }
      } catch (error) {
        alert("Failed to connect to the server. Please try again.");
      }
    });
  });
  