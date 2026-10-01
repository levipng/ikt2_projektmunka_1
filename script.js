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
  passwdInput.value=null;
  function passwdEvent(){
    handlePasswdInput();
    passwdStrengthCheck();
  }
  passwdInput.addEventListener('input',  passwdEvent);
}
function handlePasswdInput() {
  passwdBitChange(passwdBitValue(passwdInput.value));
}
function passwdStrengthCheck() {
  if (passwdInput.value.length >= 16) {
    document.getElementById("passwdt0").textContent = "✔ Legalább 16 karakter";
  } else {
    document.getElementById("passwdt0").textContent = "✘ Legalább 16 karakter";
  }

  const passwdSequenceCheck = zxcvbn(passwdInput.value)
  let passwdSequence=false;
  if (passwdSequenceCheck.sequence.length){
    passwdSequence=false;
    for(let k=0;k<passwdSequenceCheck.sequence.length; k++){
      if (passwdSequenceCheck.sequence[k].pattern=="sequence" || passwdSequenceCheck.sequence[k].pattern=="dictionary"){
        passwdSequence=true;
        break;
      }
    }
  }
  if (!passwdSequence && passwdInput.value.length!=0){
    document.getElementById("passwdt2").textContent = "✔ Nincs mintázat (123456, qwertz, jelszo123)";
  }
  else{
    document.getElementById("passwdt2").textContent = "✘ Nincs mintázat (123456, qwerty, jelszo123)";
  }
}


function passwdBitValue(passwd) {
  const passwdEredmeny = zxcvbn(passwd);
  const bitErosseg = Math.round(Math.log2(passwdEredmeny.guesses) * 10) / 10;
  return bitErosseg;
}

function passwdBitChange(bit) {
  document.getElementById("passwdBitText").textContent = (`A jelszó erőssége: ${bit} bit.`);
}

//LIGHT MODE ################

function lightmode() {
  const body = document.body;
  const nav = document.getElementsByClassName("navbar");
  const listg = document.getElementsByClassName("list-group");
  const light_button_img = document.getElementById("light_img");
  const footer = document.getElementsByClassName("footer");

  body.classList.toggle("light");
  body.classList.contains("light") ? dark() : light();

  function light() {
    for (i = 0; i < nav.length; i++) {
      nav[i].classList.remove("bg-light");
      nav[i].classList.add("bg-dark");
      nav[i].setAttribute("data-bs-theme", "dark");
    }
    for (i = 0; i < listg.length; i++) {
      listg[i].setAttribute("data-bs-theme", "dark");
    }
    light_button_img.src = light_button_img.src.replace(/sun\.svg$/, 'moon.svg');
    for (i = 0; i < nav.length; i++) {
      footer[i].classList.remove("bg-light");
      footer[i].classList.add("bg-dark");
      footer[i].setAttribute("data-bs-theme", "dark");
    }
  }

  function dark() {
    for (i = 0; i < nav.length; i++) {
      nav[i].classList.remove("bg-dark");
      nav[i].classList.add("bg-light");
      nav[i].setAttribute("data-bs-theme", "light");
    }
    for (i = 0; i < listg.length; i++) {
      listg[i].setAttribute("data-bs-theme", "light");
    }
    light_button_img.src = light_button_img.src.replace(/moon\.svg$/, 'sun.svg');

    for (i = 0; i < nav.length; i++) {
      footer[i].classList.remove("bg-dark");
      footer[i].classList.add("bg-light");
      footer[i].setAttribute("data-bs-theme", "light");
    }
  }
}