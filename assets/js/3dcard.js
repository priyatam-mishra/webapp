document.querySelector('.lin').addEventListener('click', () => {
    document.querySelector('.c3').style.animation = " c2 1s 1 linear";
    document.querySelector('.c2').style.background = "linear-gradient(230deg,#ff8c00 50%,#ff2d58)";
    document.querySelector('.cr').style.transform = "translate(-20px, 50px)scale(0.1)";
    document.querySelector('.cr').style.background = "#e3e3e3";
    document.querySelector('.dark').style.background = "transparent";
    document.querySelector('.cc').style.background = "#e3e3e3";
    lin = document.querySelector('.lin').style
    lin.color = "black";
    lin.background = "#fff";
    document.querySelector('.dark').style.color = " #686868";
    document.querySelector('.c1').style.color = "black";
    document.querySelector('.body').style.background = "#e3e3e3";
    document.querySelector('.cc').style.boxShadow = " 0 0 5px 3.5px  #201a1a";


})
document.querySelector('.dark').addEventListener('click', () => {
    document.querySelector('.c3').style.animation = " cc 1s 1 linear";
    dark = document.querySelector('.dark').style
    document.querySelector('.cc').style.background = "#26242e";
    document.querySelector('.c1').style.color = "whitesmoke";
    document.querySelector('.lin').style.background = " transparent";
    document.querySelector('.c2').style.background = "linear-gradient(230deg,#a1d4fb,#8f99f8 )";
    document.querySelector('.cr').style.transform = "translate(-80px, 70px)scale(1.5)";
    document.querySelector('.cr').style.background = " #26242e";
    document.querySelector('.lin').style.color = " #686868";
    dark.background = " #ffffff ";
    dark.color = " black ";
    document.querySelector('.body').style.background = " #26242e";
    document.querySelector('.cc').style.boxShadow = " 0 0 5px 3.5px #ffff";

})