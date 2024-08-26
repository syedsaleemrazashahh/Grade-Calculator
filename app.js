document
  .getElementById("gradeForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let marks = document.getElementById("marks").value;
    let result = document.getElementById("result");

    if (marks >= 90) {
      result.innerHTML = "A Grade";
    } else if (marks >= 80) {
      result.innerHTML = "B Grade";
    } else if (marks >= 70) {
      result.innerHTML = "C Grade";
    } else if (marks >= 60) {
      result.innerHTML = "D Grade";
    } else if (marks >= 50) {
      result.innerHTML = "E Grade";
    } else if (marks >= 40) {
      result.innerHTML = "F Grade";
    } else {
      result.innerHTML = "Fail";
    }
  });
