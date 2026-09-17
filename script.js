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

function lightmode(){
  document.body.classList.toggle("body_light");
  toggleAll(".hatter", "hatter_light");
  toggleAll(".leiras_hatter", "leiras_hatter_light");
}

// 1. LÉPÉS: Létrehozok egy függvényt, ami két dolgot vár:
//    - sel = egy CSS szelektor szövegként, pl. ".hatter"
//    - cls = egy osztálynév szövegként, pl. "hatter_light"
function toggleAll(be, ki) {
  const elemek = document.querySelectorAll(be);
  for (let i = 0; i < elemek.length; i++) {
    elemek[i].classList.toggle(ki);
  }
}