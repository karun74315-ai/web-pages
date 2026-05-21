const getColor = () =>{
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomCode = "#" + randomNumber.toString(16);
    document.body.style.backgroundColor = randomCode;

    document.querySelector("#color-code").textContent = randomCode;
    //console.log(randomNumber, randomCode)

    navigator.clipboard.writeText(randomCode)
}

document.querySelector("#btn").addEventListener(
    "click",
    getColor()
)