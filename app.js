encodeRule_json = {
  e: "enter",
  i: "imes",
  a: "ai",
  o: "ober",
  u: "ufat",
};

decodeRule_json = {
  enter: "e",
  imes: "i",
  ai: "a",
  ober: "o",
  ufat: "u",
};

// iniciando a pagina verifica se ta vazia o campo do texto
checkContent();

function botaoCriptografar() {
  const msg = getHtmlDocumentElement("text");

  if (msg == null) {
    alert("elemento não existente no html");
  } else {
    let msgCriptografada = allReplace(msg, encodeRule_json);

    let translatedText = document.getElementById("texto_traduzido");
    if (!isTextEmpty(msgCriptografada)) {
      translatedText.value = msgCriptografada;
    }
  }
}

function botaoDescriptografar() {
  const msg = getHtmlDocumentElement("text");

  if (msg == null) {
    alert("msg nao foi lida apropriadamente");
  } else {
    let msgDescriptografada = allReplace(msg, decodeRule_json);
    let translatedText = document.getElementById("texto_traduzido");
    if (!isTextEmpty(msgDescriptografada)) {
      translatedText.value = msgDescriptografada;
    }
  }
}

function getHtmlDocumentElement(tag) {
  const message = document.getElementById(tag);
  return message.value;
}

function allReplace(str, obj) {
  for (const x in obj) {
    str = str.replace(new RegExp(x, "g"), obj[x]);
  }
  return str;
}

function botaoCopiar() {
  // vai copiar o conteudo que esta presente na area de texto da mensagem codificada/decodificada

  const msg = getHtmlDocumentElement("texto_traduzido");

  if (msg == null) {
    alert("elemento não existente no html");
  } else {
    msgCriptografada = allReplace(msg);
    // Copy the text inside the text field
    navigator.clipboard.writeText(msgCriptografada);
  }
}

function checkContent() {
  const msg = getHtmlDocumentElement("text");

  if (msg == null) {
    alert("elemento não existente no html");
  } else {
    isTextEmpty(msg);
  }
}

function isTextEmpty(msg) {
  let translatedText = document.getElementById("traduzido");
  let emptyMsg = document.getElementById("overlap");
  if (msg != "") {
    translatedText.style.display = "block";
    emptyMsg.style.display = "none";
    return false;
  } else {
    translatedText.style.display = "none";
    emptyMsg.style.display = "block";
    return true;
  }
}
