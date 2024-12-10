let scrollTop = document.querySelector(".scroll-top")
window.onscroll = function (){
    if (window.scrollY >= 200) {
        scrollTop.style.display = "block"
    }else{
        scrollTop.style.display = "none"
    }
}