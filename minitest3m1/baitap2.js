function cacsochiahetcho3(n){
    let count = 0;
    let sochiahetcho3 = n;

    while (count < 15) {
        if (sochiahetcho3 % 3 === 0) {
         console.log("chiahetcho3" + sochiahetcho3);
            count++;
        }
        sochiahetcho3++;
    }
}
cacsochiahetcho3(3)