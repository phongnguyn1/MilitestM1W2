class customer {
    constructor (name,age,point)
    name = this.name
    age = this.age
    point = this.point
}
tinhKhuyenMai() {
    if (this.point > 100) {
        console.log(`${this.name} được giảm giá 5% vì có ${this.point} điểm.`);
    } else {
        console.log(`${this.name} không được giảm giá vì có ${this.point} điểm.`);
    }
}

const customer1 = new Customer('Khách hàng 1', 25, 120);
const customer2 = new Customer('Khách hàng 2', 30, 90);

customer1.tinhKhuyenMai();
customer2.tinhKhuyenMai();