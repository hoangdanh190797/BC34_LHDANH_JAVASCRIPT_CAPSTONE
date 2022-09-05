// ----------------------------------------------------------------------------------------------------
const fetchData = async () => {
  try {
    const getProduct = await axios({
      url: "https://6255692652d8738c69217244.mockapi.io/api/productsBC34",
      method: "GET",
    });
    return getProduct.data;
  } catch (error) {
    console.log(error);
  }
};
const ProductList = fetchData().then((res) => {
  let content = "";
  for (var i = 0; i < res.length; i++) {
    let product = res[i];
    content += `
          <div class="card bg-light">
            <div class="card-body" style="width:300px, high:300px">
              <h6>Name: ${product.name}</h6>
              <h6>Price: ${product.price}</h6>
              <h6>Screen: ${product.screen}</h6>
              <h6>BackCamera: ${product.backCamera}</h6>
              <h6>FrontCamera: ${product.frontCamera}</h6>
              <img src="${product.img}" width="100px" />
              <h6>Desc: ${product.desc}</h6>
              <h6>Type: ${product.type}</h6>
              <button type="button" class="btn btn-secondary">Add product to cart</button>
            </div>
        </div>
      `;
  }
  document.getElementById("showInfo").innerHTML = content;
  //
});
// ----------------------------------------------------------------------------------------------------
function changeUI() {
  const changeMyUI = fetchData().then((res) => {
    let valueUI = document.getElementById("phone").value;
    const arrIphone = res.filter((value) => {
      return value.type === valueUI;
    });
    content = ``;
    //
    for (var i = 0; i < arrIphone.length; i++) {
      let product = arrIphone[i];
      content += `
            <div class="card bg-light">
              <div class="card-body" style="width:300px, high:300px">
                <h6>Name: ${product.name}</h6>
                <h6>Price: ${product.price}</h6>
                <h6>Screen: ${product.screen}</h6>
                <h6>BackCamera: ${product.backCamera}</h6>
                <h6>FrontCamera: ${product.frontCamera}</h6>
                <img src="${product.img}" width="100px" />
                <h6>Desc: ${product.desc}</h6>
                <h6>Type: ${product.type}</h6>
              </div>
          </div>
        `;
    }
    document.getElementById("showInfo").innerHTML = content;
    //
  });
}
// ----------------------------------------------------------------------------------------------------
var cart = [];
