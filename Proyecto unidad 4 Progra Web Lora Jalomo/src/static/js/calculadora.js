document.getElementById("abrirCalculadora").addEventListener("click", function() {
  document.getElementById("calculadoraContainer").style.display = "block";
  });
  
   // Función para hacer draggable el contenedor de la calculadora
   function makeDraggable(element) {
      let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
      if (document.getElementById(element.id)) {
        // Si existe un elemento con el ID especificado, añade funcionalidad de arrastre
        document.getElementById(element.id).onmousedown = dragMouseDown;
      } else {
        // Si no se encuentra el elemento, muestra un mensaje de error
        console.error("Elemento no encontrado.");
      }
  
      function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // obtén la posición inicial del puntero
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // llamar a una función cada vez que se mueva el puntero
        document.onmousemove = elementDrag;
      }
  
      function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calcular la nueva posición del elemento
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // establecer la nueva posición del elemento
        element.style.top = (element.offsetTop - pos2) + "px";
        element.style.left = (element.offsetLeft - pos1) + "px";
      }
  
      function closeDragElement() {
        // dejar de moverse cuando se suelta el botón del ratón
        document.onmouseup = null;
        document.onmousemove = null;
      }
    }
  
    // Hacer draggable el contenedor de la calculadora al cargar la página
    document.addEventListener("DOMContentLoaded", function() {
      makeDraggable(document.getElementById("calculadoraContainer"));
    });
  
    // Mostrar la calculadora al hacer clic en el enlace del menú
    document.getElementById("abrirCalculadora").addEventListener("click", function() {
      document.getElementById("calculadoraContainer").style.display = "block";
    });
  
  
  //   FUNCIONALIDAD DE LA CALCULADORA
  const display = document.querySelector(".display");
  const buttons = document.querySelectorAll("button");
  
  let currentInput = "";
  let currentOperator = "";
  let shouldClearDisplay = false;
  
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const buttonText = button.textContent;
  
      if (buttonText.match(/[0-9]/)) {
        if (shouldClearDisplay) {
          display.textContent = "";
          shouldClearDisplay = false;
        }
        display.textContent += buttonText;
      } else if (buttonText === "C") {
        display.textContent = "0";
        currentInput = "";
        currentOperator = "";
      } else if (buttonText === "=") {
        if (currentOperator && currentInput) {
          const result = calculate(
            parseFloat(currentInput),
            currentOperator,
            parseFloat(display.textContent)
          );
          display.textContent = result;
          currentInput = result;
          currentOperator = "";
          shouldClearDisplay = true;
        }
      } else {
        currentOperator = buttonText;
        currentInput = display.textContent;
        shouldClearDisplay = true;
      }
    });
  });
  
  function calculate(num1, operator, num2) {
    switch (operator) {
      case "+":
        return num1 + num2;
      case "-":
        return num1 - num2;
      case "*":
        return num1 * num2;
      case "/":
        if (num2 !== 0) {
          return num1 / num2;
        } else {
          return "Error";
        }
      default:
        return num2;
    }
  }
  
  // Función para ocultar la calculadora
  function ocultarCalculadora() {
      document.getElementById("calculadoraContainer").style.display = "none";
    }
  
    // Mostrar la calculadora al hacer clic en el enlace del menú
    document.getElementById("abrirCalculadora").addEventListener("click", function() {
      document.getElementById("calculadoraContainer").style.display = "block";
    });
  
    // Ocultar la calculadora al hacer clic en el botón de cerrar
    document.getElementById("cerrarCalculadora").addEventListener("click", function() {
      ocultarCalculadora();
    });