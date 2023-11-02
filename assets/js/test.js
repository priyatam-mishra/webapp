const menubtn = ['home', 'about us','services', 'blog', 'portfolio', 'contact us']

menubtn.forEach(i => {
    let x = document.querySelector('.menubtn')
    if (i == 'home') {
        x.innerHTML += `<button class="active"><div class="span">${i}</div></button>`
    } else {
        x.innerHTML += `<button>${i}</button>`   
    }       
});

const s6menu = [
    [`office1.jfif`, 'Mike William', ' director'],
    [`office2.jfif`, 'John Doe', 'director'],
    [`office3.jfif`, 'Pette Jordan', 'director'],
    [`office3.jfif`, 'Smith Armstrong', 'director']
]

function sec6menu(i='',j='',k='') {
    return `<div class="cc2">
    <img src="./assets/images/${i}" alt="">
    <h5 class="h5">${j}</h5>
    <p class="p">${k}</p>
    <div class="cc1">
    <i class="fab fa-google-plus c1"></i>
    <i class="fab fa-twitter c1"></i>
    <i class="fa fa-football c1"></i>
    <i class="fab fa-facebook c1"></i>
    </div>
  </div>` 
}
var sec6 = document.querySelector('.sec6menu')
s6menu.forEach(i => {
    sec6.innerHTML += sec6menu(i[0], i[1], i[2])
});

const cc = [
    [`bed1.jfif`],
    [`bed2.jfif`],
    [`bi1.jfif`],
    [`bi3.jfif`]
]
function room(i='') {
    return `<div class="cc2">
    <div class="img" style="background:url(./assets/images/${i})"></div>
    <div class="cc1">
    <div class="cc3">
    <i class="fa fa-clock">
    </i> 19 oct 
    <i class="fa fab fa-facebook-messenger"></i>
    16
    </div>
    <h5>Mobile Friendly Comments
    Dashboardnow launched !</h5>
    <hr>
    <p>Sed non mauri s Vitae e rat
    consequat auctor eu in .
    Class tacit i socioszu</p>
    </div>
  </div>` 
}
var v = document.querySelector('.room')
cc.forEach(i => {
    v.innerHTML += room(i[0], i[1], i[2])
});


