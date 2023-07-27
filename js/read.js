function myFunction() {
    let dots = document.getElementById("dots");
    let moreText = document.getElementById("more");
    let btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Читать далее";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Свернуть";
        moreText.style.display = "inline";
    }
}

function myFunction2() {
    let dots2 = document.getElementById("dots2");
    let moreText2 = document.getElementById("more2");
    let btnText2 = document.getElementById("myBtn2");

    if (dots2.style.display === "none") {
        dots2.style.display = "inline";
        btnText2.innerHTML = "Читать далее";
        moreText2.style.display = "none";
    } else {
        dots2.style.display = "none";
        btnText2.innerHTML = "Свернуть";
        moreText2.style.display = "inline";
    }
}

function myFunction3() {
    let dots3 = document.getElementById("dots3");
    let moreText3 = document.getElementById("more3");
    let btnText3 = document.getElementById("myBtn3");

    if (dots3.style.display === "none") {
        dots3.style.display = "inline";
        btnText3.innerHTML = "Читать далее";
        moreText3.style.display = "none";
    } else {
        dots3.style.display = "none";
        btnText3.innerHTML = "Свернуть";
        moreText3.style.display = "inline";
    }
}