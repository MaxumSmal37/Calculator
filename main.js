
function insert(num) {
   document.form.textview.value = document.form.textview.value + num;
}
function clean() {
   document.form.textview.value = "";
}
function back() {
   var exp = document.form.textview.value;
   document.form.textview.value = exp.substring(0, exp.length - 1);
}
function equal() {
   var exp = document.form.textview.value;
   if (exp) {
      document.form.textview.value = eval(exp);
   }
}
function percent() {
   var exp = document.form.textview.value;
   document.form.textview.value = exp / 100;
}
function sqrt() {
   var exp = document.form.textview.value;
   document.form.textview.value = Math.sqrt(exp)
}
function cbrt() {
   var exp = document.form.textview.value;
   document.form.textview.value = Math.cbrt(exp)
}
function sin() {
   var exp = document.form.textview.value;
   exp = exp * Math.PI / 180;
   document.form.textview.value = Math.sin(exp)
}
function cos() {
   var exp = document.form.textview.value;
   exp = exp * Math.PI / 180;
   document.form.textview.value = Math.cos(exp)
}

function tan() {
   var exp = document.form.textview.value;
   exp = exp * Math.PI / 180;
   document.form.textview.value = Math.tan(exp)
}
function asin() {
   var exp = document.form.textview.value;
   exp = exp * Math.PI / 180;
   document.form.textview.value = Math.asin(exp)
}
function acos() {
   var exp = document.form.textview.value;
   exp = exp * Math.PI / 180;
   document.form.textview.value = Math.acos(exp)
}

function atan() {
   var exp = document.form.textview.value;
   exp = exp * Math.PI / 180;
   document.form.textview.value = Math.atan(exp)
}
function rand() {
   var exp = document.form.textview.value;

   document.form.textview.value = exp +Math.random(exp)
}
function PI() {
   var exp = document.form.textview.value;
   document.form.textview.value = exp + Math.PI
}
function c() {

   var exp = document.form.textview.value;
   document.form.textview.value = 1/exp
}


document.addEventListener('keydown',(event) =>
{
   if (event.code === 'Escape')
   {
       clean();
   };
} );
document.addEventListener('keydown',(event) =>
{
   if (event.code === 'Enter')
   {
       equal();
   };
} );
document.addEventListener('keydown',(event) =>
{
   if (event.code === 'Backspace')
   {
       back();
   };
} );













