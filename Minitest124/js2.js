function tinhDiemTrungBinh(diemToan, diemTA, diemVan) {
    let diemTrungBinh = (diemToan + diemTA + diemVan) / 3;

    if (diemTrungBinh < 5) {
        return 'Không đạt';
    } else if (diemTrungBinh < 8) {
        return 'Đạt';
    } else {
        return 'Tốt';
    }
}

var diemToan = 7;
var diemTA = 8;
var diemVan = 9;

var danhGia = tinhDiemTrungBinh(diemToan, diemTA, diemVan);
console.log('Đánh giá:', danhGia);
