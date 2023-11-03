document.querySelectorAll('.close')[1].addEventListener('click', () => {
   let x = document.querySelector('.sec_menu').style
   x.transform = 'translateX(0px)'
   x.transition = 'all .8s'
})

document.querySelectorAll('.close')[0].addEventListener('click', () => {
   let x = document.querySelector('.sec_menu').style
   x.transform = 'translateX(-300px)'
   x.transition = 'all .8s'
})