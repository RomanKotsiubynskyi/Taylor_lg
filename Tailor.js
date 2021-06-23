
function Ex(x) {
    var i;
    var n = 0;
    var A = 0;
   
    for (i = 1; i < 8; i++, n++) {
        A += Math.pow (x,i)*Math.pow(-1,n)/i;
    }
    return A;
};
console.log(Ex(0.5));

