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
  document.getElementsByClassName("hatter").toggle("hatter_light");
  document.getElementsByClassName("leiras_hatter").toggle("leiras_hatter_light");
}
