const jelszo = "XY7#kL9!pQ2$";
const eredmeny = zxcvbn(jelszo);
const bitEroseg = Math.round(Math.log2(eredmeny.guesses) * 10) / 10;
console.log(jelszo, eredmeny, bitEroseg);

userIP = '';
getIP();
async function getIP() {
  const response = await fetch('https://api.ipify.org?format=json');
  const data = await response.json();
  userIP = data.ip;
  console.log(userIP);
  doneIP(userIP);
}
function doneIP(x){
  document.getElementById("userIP_text").textContent=userIP;
}

function passwdBitChange(bit){
  document.getElementById("passwdBitText").textContent=(`A jelszó bit erőssége: ${bit}`);
}

document.getElementById('passwdText').addEventListener('input', function(e) {
    passwdBitChange(passwdBitValue(e.target.value));
});

function passwdBitValue(passwd){
  const passwdEredmeny = zxcvbn(passwd);
  const bitErosseg = Math.round(Math.log2(passwdEredmeny.guesses) * 10) / 10;
  return bitErosseg;
}