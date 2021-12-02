var length = 20;

function get_lengh() {
  var temp = Math.floor(document.getElementById("length_password"));
  console.log(temp);
}

function generator_password() {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  const show = document.getElementById("show-password");

  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return (show.innerHTML = result);
}
