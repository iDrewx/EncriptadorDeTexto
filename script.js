const campoTxt = document.querySelector("#textoEncript");
const resultado = document.querySelector("#campoMnsj");

//funcion para asignar los valores para encriptar/desencriptar
const matrixCode = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
];

const matrixCodeFix = [
    ["ufat", "u"],
    ["ober", "o"],
    ["ai", "a"],
    ["imes", "i"],
    ["enter", "e"],
]

//funcion para presionar el boton de encriptar
function pressEncrypt() {
    const txt = encrypt(campoTxt.value);
    resultado.value = txt;
}
//procesa la informacion de MatrixCode
function encrypt(processEncrypt) {
    for (let i = 0; i < matrixCode.length; i++) {
        if(processEncrypt.includes(matrixCode[i][0])) {
            processEncrypt = processEncrypt.replaceAll(
                matrixCode[i][0],
                matrixCode[i][1]
            )
        }
    }
    return processEncrypt;
}
//funcion al presionar el boton desencriptar
function pressDecrypt() {
    const txt = decrypt(campoTxt.value);
    resultado.value = txt;
}
//procesa la informacion de MatrixCode a la inversa
function decrypt(processDecrypt) {
    for (let i = 0; i < matrixCodeFix.length; i++) {
        if(processDecrypt.includes(matrixCodeFix[i][0])) {
            processDecrypt = processDecrypt.replaceAll(
                matrixCodeFix[i][0],
                matrixCodeFix[i][1]
            )
        }
    }
    return processDecrypt;
}
//funcion para admitir solo letras minusculas
function soloMinusculas(event) {
    event.target.value = event.target.value.toLowerCase().replace(/[^a-z A-Z]/g, '');
}

//funcion para limpiar el texto de ambos campos
function pressClear() {
    campoTxt.value = ''
    resultado.value = ''
}

//funcion del boton copiar
function pressCopiar(){
    if(resultado.value.trim() === ""){
        alert("No hay texto para copiar!");
        return;
    }
    navigator.clipboard.writeText(resultado.value);
    alert("Texto copiado al portapapeles!");
}