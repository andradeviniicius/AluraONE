let vowels = ["a", "e", "i", "o", "u"];
let message = [{}];

let encryptButton = document.querySelector(".btn-encrypt");
let decryptButton = document.querySelector(".btn-decrypt");

function encryptMessage(string) {
  let newString = string.split("").map((el) => {
    if (vowels.includes(el.toLowerCase())) {
      return el + "d4n4n4";
    }
    return el;
  });

  let formattedString = newString.join("");

  return formattedString;
}

function decryptMessage(string) {
  return string.replace(/d4n4n4/g, "");
}

let empty_message_warning = document.querySelector(".empty-messages-warning");
let encrypted_message = document.querySelector(".encrypted-message");
let encrypt_message_container = document.querySelector(".results-container");
let result_text = document.querySelector(".encrypted-message-result");
let user_input = document.querySelector("#inputDecodificador");

encryptButton.addEventListener("click", () => {
  if (user_input.value == "") {
    alert("Você precisa inseri um valor para funcionar :)");
    return;
  }
  empty_message_warning.style.display = "none";
  encrypted_message.style.display = "flex";
  result_text.innerHTML = encryptMessage(user_input.value);
});

decryptButton.addEventListener("click", () => {
  alert("descripto");
});

function copyToClipboard() {
  navigator.clipboard.writeText(result_text.innerText);
}
