///plik frontendowy

console.log("hello")

document.getElementById("btn").addEventListener("click", () => {
    document.getElementById("result").innerText = document.getElementById("input1").value
})