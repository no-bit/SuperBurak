// nav background
let header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("shadow", window.scrollY > 0)
})

//Filter
$(document).ready(function () {
    $(".filter-item").click(function () {
        const value = $(this).attr("data-filter");
        if (value == "all"){
            $(".post-box").show("1000")
        } else{
            $(".post-box")
                .not("." + value)
                .hide(1000);
            $(".post-box")
            .filter("." + value)
            .show("1000")
        }
    });
    $(".filter-item").click(function () {
        $(this).addClass("active-filter").siblings().removeClass("active-filter")
    });
});

const switcher = document.querySelector(".btn");
switcher.addEventListener("click",function(){
    document.body.classList.toggle("light-theme");
    document.body.classList.toggle("dark-theme");
    const className = document.body.classList;
    if (className=="light-theme"){
        this.textContent="Darks";
    }else{
        this.textContent="Lights";
    }
    console.log("current class", className);
});
