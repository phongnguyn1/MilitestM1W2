function Timsoduong(array) {
    let Soduong = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            Soduong.push(array[i]);
        }
    }

    return Soduong;
}