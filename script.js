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
  document.getElementById("userIP_text").textContent=userIP
}