const btns = document.querySelectorAll(".message")

btns.forEach((btn) => {
    btn.addEventListener("mouseover", () => {
        btn.innerText = "Salut";
    })

    btn.addEventListener("mouseout" ,() => {
        btn.innerText = "FIN";
    })
});

