function makeid(length) {
  const str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = '';
  const charactersLength = str.length;
  for (let i = 0; i < length; i++) {
    result += str.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
