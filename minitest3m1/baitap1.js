
    function tinhgiaithua (x) {
        if (x===0 ){
            return 1;
        }

        if (x===1){
            return 1;
        }
        else {
            return x*tinhgiaithua(x-1)
            }
                    }
