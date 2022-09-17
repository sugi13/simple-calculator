let NumButton = document.querySelectorAll(".btn");
let showNum = document.querySelector("#header");
let result = document.querySelector("#res");

NumButton.forEach((btn) => {
    btn.addEventListener("click", function(e){
      switch (e.target.value) {
        case 'C':
          showNum.textContent = "";
          result.textContent = "";
          break;
          case '=':
            result.textContent = eval(showNum.textContent);
            break;
            case "remove":
              showNum.textContent = showNum.textContent.slice(0, -1);
              break;
        default:
          showNum.innerHTML += e.target.value;
      }
    })
  })