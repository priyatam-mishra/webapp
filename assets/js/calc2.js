var r = '';
var n_r = '';

function calc(i) {

   if (i == 'B') {
      for (let i = 0; i < (r.length - 1); i++) {
         n_r += r[i]
      }
      r = n_r;
      n_r = ''
      document.querySelector('.current').innerHTML = r
   } else if (i == 'AC') {
      r = ''
      document.querySelector('.current').innerHTML = r
      document.querySelector('.total').innerHTML = r
   } else if (i === '=') {
      document.querySelector('.total').innerHTML = eval(r)
   } else {
      r += i
      document.querySelector('.current').innerHTML = r
   }

}