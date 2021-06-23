// var i = 1; var n = 0:
function ExA(x) {
    var i;
    var n = 0;
    var A = 0;
   
    for (i = 1; i < 8; i++, n++) {
        A += Math.pow (x,i)*Math.pow(-1,n)/i;
    }
    return A;
};
console.log(ExA(0.7)); //x < 1/0!

module.exports.TaylorA = Ex;
