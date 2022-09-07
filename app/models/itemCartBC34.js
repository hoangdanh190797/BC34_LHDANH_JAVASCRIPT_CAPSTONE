// function itemCartBC34(_id, _name, _price, _quantity) {
//   this.id = _id;
//   this.name = _name;
//   this.price = _price;
//   this.quantity = _quantity;
// }

class itemCart {
  constructor(_id, _name, _price, _quantity, _img){
    this.id = _id;
    this.name = _name;
    this.price = _price;
    this.quantity = _quantity;
    this.img= _img;
  }
  getQuantity(){
    console.log(this.quantity);
  }
}