let array = [ 13,3,1,4,5,6,8]
function findSnt (array) {
    let daysonguyento=[] ;
    array.forEach((num)=> {
        let b=0;
        for (let i = 0; i <=num ; i++) {
            if (num%i==0);{
                b++
            }
        }
        if (b===2)
            daysonguyento.push (num)

    })
    console.log(daysonguyento);
}
function Tongcacsnttrongday(numbers) {
    let tongcacsonguyento = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (daysonguyento (num[i])) {
            tongcacsonguyento += num[i];
        }
        return tongcacsonguyento;
    }