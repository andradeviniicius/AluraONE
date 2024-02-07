let validOptions = ["ai", "enter", "imes", "ober", "ufat"];
let message = [{}];

let encryptButton = document.querySelector(".btn-encrypt");
let decryptButton = document.querySelector(".btn-decrypt");

let empty_message_warning = document.querySelector(".empty-messages-warning");
let encrypted_message = document.querySelector(".encrypted-message");
let encrypt_message_container = document.querySelector(".results-container");
let result_text = document.querySelector(".encrypted-message-result");
let user_input = document.querySelector("#inputDecodificador");

encryptButton.addEventListener("click", () => {
  if (isUserInputValid()) {
    empty_message_warning.style.display = "none";
    encrypted_message.style.display = "flex";
    result_text.innerHTML = encryptMessage(user_input.value);
  }
});

decryptButton.addEventListener("click", () => {
  if (!isEncrypted()) {
    alert("Não há o que descriptografar");
    return;
  }
  if (isUserInputValid()) {
    empty_message_warning.style.display = "none";
    encrypted_message.style.display = "flex";
    result_text.innerHTML = decryptMessage(user_input.value);
  }
});

function copyToClipboard() {
  navigator.clipboard.writeText(result_text.innerText);
}

function isUserInputValid() {
  if (user_input.value == "") {
    alert("Você precisa inseri um valor para funcionar :)");
    return false;
  }

  return true;
}

function encryptMessage(string) {
  let newString = string.split("").map((el) => {
    if (el == "a") {
      return "ai";
    } else if (el == "e") {
      return "enter";
    } else if (el == "i") {
      return "imes";
    } else if (el == "o") {
      return "ober";
    } else if (el == "u") {
      return "ufat";
    } else {
      return el;
    }
  });

  let formattedString = newString.join("");

  return formattedString;
}

function decryptMessage(string) {
  console.log(isEncrypted());
  if (!isEncrypted()) {
    alert("Não há o que descriptografar");
    return;
  }

  return string
    .replace(/ai/g, "a")
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
}

function isEncrypted() {
  let isEncrypted = null;

  validOptions.every((el) => {
    if (user_input.value.includes(el)) {
      isEncrypted = true;
      return false;
    }
    isEncrypted = false;
    return true;
  });

  console.log(isEncrypted);
  return isEncrypted;
}
