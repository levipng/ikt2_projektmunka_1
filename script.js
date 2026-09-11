let userIP = "0.0.0.0";

fetch('https://api.ipify.org?format=json')
  .then(res => res.json())
  .then(data => userIP = data.ip)
  .catch(() => {});
console.log(userIP);
