// Check if user is already logged in
document.addEventListener("DOMContentLoaded", function () {
    const user = JSON.parse(localStorage.getItem("user"));
    
    if (user) {
        document.getElementById("authForm").style.display = "none";
        const welcomeMessage = document.getElementById("welcomeMessage");
        welcomeMessage.style.display = "block";
        welcomeMessage.textContent = `Welcome back, ${user.name}!`;
    } else {
        document.getElementById("authForm").style.display = "block";
    }
});

// Handle Login or Sign-Up
document.getElementById("authForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("authName").value.trim();
    const email = document.getElementById("authEmail").value.trim();
    const password = document.getElementById("authPassword").value;

    if (!name || !email || !password) {
        alert("Please fill out all fields.");
        return;
    }

    // Store user details in local storage
    const user = { name, email, password };
    localStorage.setItem("user", JSON.stringify(user));

    alert("Sign-up successful! Welcome, " + name);
    
    // Update the UI
    document.getElementById("authForm").style.display = "none";
    const welcomeMessage = document.getElementById("welcomeMessage");
    welcomeMessage.style.display = "block";
    welcomeMessage.textContent = `Welcome, ${name}!`;
});
