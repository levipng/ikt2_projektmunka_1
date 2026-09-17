//IP ################

userIP = '';
getIP();

async function getIP() {
  const response = await fetch('https://api.ipify.org?format=json');
  const data = await response.json();
  userIP = data.ip;
  console.log(userIP);
  if (document.getElementById("userIP_text")){
    document.getElementById("userIP_text").textContent=userIP;
  }
}

//PASSWORD ################

const passwdInput = document.getElementById('passwdText');
if (passwdInput){
  passwdInput.addEventListener('input', function(e) {
      passwdBitChange(passwdBitValue(e.target.value));
  });
}

function passwdBitValue(passwd){
  const passwdEredmeny = zxcvbn(passwd);
  const bitErosseg = Math.round(Math.log2(passwdEredmeny.guesses) * 10) / 10;
  return bitErosseg;
}

function passwdBitChange(bit){
  document.getElementById("passwdBitText").textContent=(`A jelszó bit erőssége: ${bit}`);
}

//LIGHT MODE ################

function lightmode() {
  const body = document.body;
  const nav = document.getElementsByClassName("navbar")[0];
  body.classList.toggle("light");
  if (body.classList.contains("light")){
    nav.classList.remove("bg-dark");
    nav.classList.add("bg-light");
    nav.setAttribute("data-bs-theme", "light");
  }else{
    nav.classList.remove("bg-light");
    nav.classList.add("bg-dark");
    nav.setAttribute("data-bs-theme", "dark");
  }
}