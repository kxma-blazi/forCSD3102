function signUp() {
    let username = document.getElementById("username").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    if (!username || !email || !password) {
        alert("Please fill in all fields");
        return;
    }

    if (!validateEmail(email)) {
        alert("Please enter a valid email address");
        return;
    }

    alert("Sign up successful!");
}

function goToLogin() {
    window.location.href = "bmr.html"; // ไปยังหน้าคำนวณ BMR
}

function goBack() {
    window.location.href = "index.html"; // กลับไปหน้าสมัครสมาชิก
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// BMR Calculation
function calculateBMR() {
    let gender = document.getElementById("gender").value;
    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value);
    let age = parseInt(document.getElementById("age").value);

    if (isNaN(weight) || isNaN(height) || isNaN(age)) {
        alert("Please enter valid values for weight, height, and age");
        return;
    }

    let bmr;
    if (gender === "male") {
        bmr = (10 * weight) + (6.25 * height) - (5 * age) + 5;
    } else {
        bmr = (10 * weight) + (6.25 * height) - (5 * age) - 161;
    }

    document.getElementById("bmrResult").innerText = `Your BMR is: ${bmr.toFixed(2)} kcal/day`;
}
