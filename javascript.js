function Item(title,price) {
    this.title = title;
    this.price = price;
    this.showPrice = function() {
        console.log(`가격은 ${price}원 입니다.`)
    }
};

let item1 = new Item('인형', 3000);
let item2 = new Item('가방', 4000);
let item3 = new Item('지갑', 9000);
console.log(item1, item2, item3);

item3.showPrice();
