//IP ################

userIP = '';
getIP();

async function getIP() {
  const response = await fetch('https://api.ipify.org?format=json');
  const data = await response.json();
  userIP = data.ip;
  console.log(userIP);
  if (document.getElementById("userIP_text")) {
    document.getElementById("userIP_text").textContent = userIP;
  }
}

//PASSWORD ################

const passwdInput = document.getElementById('passwdText');
if (passwdInput) {
  function handlePasswdInput() {
    passwdBitChange(passwdBitValue(passwdInput.value));
  }
  passwdInput.addEventListener('input', handlePasswdInput);
}

function passwdBitValue(passwd) {
  const passwdEredmeny = zxcvbn(passwd);
  const bitErosseg = Math.round(Math.log2(passwdEredmeny.guesses) * 10) / 10;
  return bitErosseg;
}

function passwdBitChange(bit) {
  document.getElementById("passwdBitText").textContent = (`A jelszó bit erőssége: ${bit}`);
}

//LIGHT MODE ################

function lightmode() {
  const body = document.body;
  const nav = document.getElementsByClassName("navbar")[0];
  const light_img = document.getElementById("light_img");
  body.classList.toggle("light");

  if (body.classList.contains("light")) {
    nav.classList.remove("bg-dark");
    nav.classList.add("bg-light");
    nav.setAttribute("data-bs-theme", "light");
    light_img.src = light_img.src.replace(/moon\.svg$/, 'sun.svg');
  } else {
    nav.classList.remove("bg-light");
    nav.classList.add("bg-dark");
    nav.setAttribute("data-bs-theme", "dark");
    light_img.src = light_img.src.replace(/sun\.svg$/, 'moon.svg');
  }
}