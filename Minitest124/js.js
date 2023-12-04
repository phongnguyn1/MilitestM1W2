let array = [1,2,3,4,5,7,7]
let a= 7
function sla(array,a) {

    for (let i = 0; i <= array.length ; i++) {
        if ( array[i]===a ) {
            array.splice(i,1)
            i--;
        }
    } return array
}
 let newarray = sla(array,a);
console.log(newarray)