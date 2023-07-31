const checkButton = document.getElementById('checkButton');
const resultMessage = document.getElementById('resultMessage');

function calculateAge() {
  const day = parseInt(document.getElementById('dayInput').value);
  const month = parseInt(document.getElementById('monthInput').value);
  const year = parseInt(document.getElementById('yearInput').value);

  const today = new Date();
  const birthDate = new Date(year, month - 1, day);

  const ageInMilliseconds = today - birthDate;
  const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);

  if (isNaN(ageInYears)) {
    resultMessage.textContent = 'Por favor, insira uma data válida.';
  } else if (ageInYears >= 18) {
    resultMessage.textContent = 'Você é maior de idade!';
  } else {
    resultMessage.textContent = 'Você é menor de idade.';
  }
  <button id="checkAge">Verificar idade</button>

  const button = document.getElementById("checkAge");
button.addEventListener("click", () => {
 
  const age = prompt("Qual é a sua idade?");

  if (Number(age) >= 18) {
    
    alert("Você tem pelo menos 18 anos.");
  } else {
    
    alert("Você não tem pelo menos 18 anos.");
  }
});
function resetButton() {
    
    document.getElementById("form").reset();
  
    document.getElementById("resetButton").innerHTML = "Permitir outro usuário";
  }
  function getAge(birthdate) {
    
    const date = new Date(birthdate);
    const currentYear = new Date().getFullYear();
    const age = currentYear - date.getFullYear();
    return age;
  }
 
}
