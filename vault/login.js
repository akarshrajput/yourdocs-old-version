///////////////////////////////////////////////////
// Mobile Navigation
const btnEl = document.querySelector(".btn-nav");
const btnToogle = document.querySelector(".navigation");
btnEl.addEventListener("click", function () {
  btnToogle.classList.toggle("nav-open");
});
//////////////////////////////////////////////////
// DATA API
/////////////////////////////////////////////////
// Data
const account1 = {
  owner: "Akarsh Rajput",
  passKey: 12345678,
  id: 1234,
};

const account2 = {
  owner: "Priyanshu Yadav",
  passKey: 28298392,
  id: 2312,
};

const account3 = {
  owner: "Aniket Kumar",
  passKey: 22983829,
  id: 2872,
};
const account4 = {
  owner: "Kunal Lata",
  passKey: 23232323,
  id: 2323,
};
const account5 = {
  owner: "Raj Chauhan",
  passKey: 12121212,
  id: 1212,
};
const accounts = [account1, account2, account3, account4, account5];

const createUsernames = accounts.forEach(function (mov) {
  mov.username =
    mov.owner
      .split(" ")
      .map((acc) => acc[0])
      .join("")
      .toLowerCase() + mov.id;
});
const usernames = accounts.map(function (mov) {
  return mov.username;
});
let currentAccount;
console.log(currentAccount);
const navigationContainer = document.querySelector(".header");
const loginForm = document.querySelector(".login-container");
const profileText = document.querySelector(".profile-text");
const inputUsername = document.querySelector(".username");
const inputPasskey = document.querySelector(".pass-key");
const submitBtn = document.querySelector(".submit-btn");
submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  currentAccount = accounts.find((acc) => acc.username === inputUsername.value);
  // console.log(currentAccount);
  if (currentAccount.passKey === Number(inputPasskey.value)) {
    profileText.style.display = "block";
    profileText.textContent = `Welcome back, ${
      currentAccount.owner.split(" ")[0]
    }`;
    loginForm.style.display = "none";
    navigationContainer.style.display = "block";
  }
});
