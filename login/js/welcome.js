document.addEventListener("DOMContentLoaded", function () {
    function goLogin() {
        window.location.href = "login/index.html";
    }
    function logout() {
        localStorage.removeItem("username");
        location.reload();
    }
    const user = localStorage.getItem("username");
    if (user) {
        // Desktop
        document.getElementById("userInfo").innerText = "Halo, " + user;
        document.getElementById("authArea").innerHTML = `
            <button onclick="logout()" class="nav-cta">Logout</button>
        `;
        // Mobile
        document.getElementById("mobileUserInfo").innerText = "Halo, " + user;
        document.getElementById("mobileAuthArea").innerHTML = `
            <button onclick="logout()" class="nav-cta">Logout</button>
        `;
    }
    window.goLogin = goLogin;
    window.logout = logout;
});
