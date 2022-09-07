class ItemQuantity {
  constructor(qttOne, qttTwo, qttThree, qttFour) {
    this.quantityOne = qttOne;
    this.quantityTwo = qttTwo;
    this.quantityThree = qttThree;
    this.quantityFour = qttFour;
  }
  totalQuantity() {
    let total =
      this.quantityOne +
      this.quantityTwo +
      this.quantityThree +
      this.quantityFour;
      return total; 
  }
}
