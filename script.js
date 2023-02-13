function onClick() {
  let intArray = Array.from(document.getElementById("array_input").value.split(",").map(Number));
  console.log(intArray);

  function clearResults() {
    let resultBlock = document.getElementById("result_block");
    resultBlock.innerHTML = "";
    let iterations = document.getElementsByClassName("iteration");
    while (iterations.length > 0) {
      iterations[0].parentNode.removeChild(iterations[0]);
    }
  }

  function SelectionSort(intArray) {
    let n = intArray.length;
    for (let i = 0; i < n; i++) {
      let min = i;
      for (let j = i + 1; j < n; j++) {
        if (intArray[j] < intArray[min]) {
          min = j;
        }
      }

      let div = document.createElement("div");
      div.classList.add("iteration");
      div.style.backgroundColor = "#186E8B";
      div.style.padding = "10px";
      div.style.margin = "10px";
      div.style.fontFamily = "'Khula', sans-serif";
      div.style.color = "white"
      let html = "Iteration " + (i + 1) + ": ";
      for (let k = 0; k < intArray.length; k++) {
        if (k === i || k === min) {
          html += `<span style="background-color: yellow; padding: 3px; color: black">${intArray[k]}</span> `;
        } else {
          html += `${intArray[k]} `;
        }
      }
      div.innerHTML = html;
      document.body.appendChild(div);

      if (min != i) {
        let tmp = intArray[i];
        intArray[i] = intArray[min];
        intArray[min] = tmp;
      }
    }
  }

  clearResults();
  SelectionSort(intArray);
  let output = document.getElementById("result_block");
  output.innerHTML = "Result: " + intArray;
}
  