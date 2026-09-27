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
passwdInput.value=null;
if (passwdInput) {
  function passwdEvent(){
    handlePasswdInput();
    passwdStrengthCheck();
  }
  function handlePasswdInput() {
    passwdBitChange(passwdBitValue(passwdInput.value));
  }
  function passwdStrengthCheck(){
    if(passwdInput.value.length>=16){
      document.getElementById("passwdt0").textContent="✔ Legalább 16 karakter";
    }else{
      document.getElementById("passwdt0").textContent="✘ Legalább 16 karakter";
    }
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

function passwdStrengthCheck(){
}

//LIGHT MODE ################

function lightmode() {
  const body = document.body;
  const nav = document.getElementsByClassName("navbar");
  const listg = document.getElementsByClassName("list-group");
  const light_button_img = document.getElementById("light_img");

  body.classList.toggle("light");
  body.classList.contains("light") ? dark() : light();

  function light(){
    for (i=0;i<nav.length;i++){
      nav[i].classList.remove("bg-light");
      nav[i].classList.add("bg-dark");
      nav[i].setAttribute("data-bs-theme","dark");
    }
    for (i=0;i<listg.length;i++){
      listg[i].setAttribute("data-bs-theme","dark");
    }
    light_button_img.src = light_button_img.src.replace(/sun\.svg$/, 'moon.svg');
  }
  
  function dark(){
    for (i=0;i<nav.length;i++){
      nav[i].classList.remove("bg-dark");
      nav[i].classList.add("bg-light");
      nav[i].setAttribute("data-bs-theme","light");
    }
    for (i=0;i<listg.length;i++){
      listg[i].setAttribute("data-bs-theme","light");
    }
    light_button_img.src = light_button_img.src.replace(/moon\.svg$/, 'sun.svg');
  }
}