// ----------------------------------------------------------------------------------------------------
var cartLocal = JSON.parse(localStorage.getItem("productListBC34"));

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
              <button type="button" class="btn btn-warning" onclick="addProductCart(${product.id})">Add product to cart</button>
            </div>
        </div>
      `;
  }
  document.getElementById("showInfo").innerHTML = content;
});
// ----------------------------------------------------------------------------------------------------
function changeUI() {
  const changeMyUI = fetchData().then((res) => {
    let valueUI = document.getElementById("phone").value;
    const arrIphone = res.filter((value) => {
      return value.type === valueUI;
    });
    content = ``;
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
  });
}
// ----------------------------------------------------------------------------------------------------
function getProductInJSON() {
  let cartLocalS = JSON.parse(localStorage.getItem("productListBC34"));
  let contentR = "";
  for (var i = 0; i < cartLocalS.length; i++) {
    let product = cartLocalS[i];
    contentR += `
              <tr>
                <td>${i + 1}</td>
                <td>
                <img src="${product.img}" width="75px" />
                </td>
                <td>${product.name}</td>
                <td>
                <button type="button" class="btn btn-warning" onclick="decreaseP(${
                  product.id
                })">-</button>
                ${product.quantity}
                <button type="button" class="btn btn-warning" onclick="increaseP(${
                  product.id
                })">+</button>
                </td>
                <td>${product.price}</td>
                <td>
                <button type="button" class="btn btn-warning" onclick="remove(${
                  product.id
                })">Remove</button>
                </td>
              </tr>                    
          `;
  }
  document.getElementById("showCart").innerHTML = contentR;
}
// ----------------------------------------------------------------------------------------------------
function addProductCart(id) {
  const getItemwithID = async (id) => {
    try {
      const getProductID = await axios({
        url: `https://6255692652d8738c69217244.mockapi.io/api/productsBC34/${id}`,
        method: "GET",
      });
      return getProductID.data;
    } catch (error) {
      console.log(error);
    }
  };
  const itemByID = getItemwithID(id).then((res) => {
    let itemNew = new itemCart(res.id, res.name, res.price, 1, res.img);
    let index = cartLocal.findIndex((item) => item.id === itemNew.id);
    if (index === -1) {
      cartLocal = [...cartLocal, itemNew];
    } else {
      cartLocal[index].quantity++;
    }
    saveData(cartLocal);
    function renderCart(cartLocal) {
      let contentR = "";
      for (var i = 0; i < cartLocal.length; i++) {
        let product = cartLocal[i];
        contentR += `
              <tr>
                <td>${i + 1}</td>
                <td>
                <img src="${product.img}" width="75px" />
                </td>
                <td>${product.name}</td>
                <td>
                <button type="button" class="btn btn-warning" onclick="decreaseP(${
                  product.id
                })">-</button>
                ${product.quantity}
                <button type="button" class="btn btn-warning" onclick="increaseP(${
                  product.id
                })">+</button>
                </td>
                <td>${product.price}</td>
                <td>
                <button type="button" class="btn btn-warning" onclick="remove(${
                  product.id
                })">Remove</button>
                </td>
              </tr>                    
          `;
      }
      document.getElementById("showCart").innerHTML = contentR;
    }
    renderCart(cartLocal);
    console.log(cartLocal);
  });
}
// ----------------------------------------------------------------------------------------------------
function remove(id) {
  let idProduct = id;
  cartLocal = cartLocal.filter((item) => item.id != idProduct)
  saveData(cartLocal);
  function Re_renderCart(cartLocal) {
    let contentR = "";
    for (var i = 0; i < cartLocal.length; i++) {
      let product = cartLocal[i];
      let total = product.price * product.quantity;
      contentR += `
            <tr>
              <td>${i + 1}</td>
              <td>
              <img src="${product.img}" width="75px" />
              </td>
              <td>${product.name}</td>
              <td>
              <button type="button" class="btn btn-warning" onclick="decreaseP(${
                product.id
              })">-</button>
              ${product.quantity}
              <button type="button" class="btn btn-warning" onclick="increaseP(${
                product.id
              })">+</button>
              </td>
              <td>${total}</td>
              <td>
              <button type="button" class="btn btn-warning" onclick="remove(${
                product.id
              })">Remove</button>
              </td>
            </tr>                    
        `;
    }
    document.getElementById("showCart").innerHTML = contentR;
  }
  Re_renderCart(cartLocal);
}
// ----------------------------------------------------------------------------------------------------
function increaseP(id) {
  let idProduct = id;
  for (var i = 0; i <= cartLocal.length; i++) {
    let idProductInArr = cartLocal[i]?.id;
    let idParse = Number(idProductInArr);
    if (idProduct === idParse) {
      cartLocal[i].quantity++;
    }
    console.log(cartLocal)
  }
  saveData(cartLocal);
  function Re_renderCart(cartLocal) {
    let contentR = "";
    for (var i = 0; i < cartLocal.length; i++) {
      let product = cartLocal[i];
      let total = product.price * product.quantity;
      contentR += `
            <tr>
              <td>${i + 1}</td>
              <td>
              <img src="${product.img}" width="75px" />
              </td>
              <td>${product.name}</td>
              <td>
              <button type="button" class="btn btn-warning" onclick="decreaseP(${
                product.id
              })">-</button>
              ${product.quantity}
              <button type="button" class="btn btn-warning" onclick="increaseP(${
                product.id
              })">+</button>
              </td>
              <td>${total}</td>
              <td>
              <button type="button" class="btn btn-warning" onclick="remove(${
                product.id
              })">Remove</button>
              </td>
            </tr>                    
        `;
    }
    document.getElementById("showCart").innerHTML = contentR;
  }
  Re_renderCart(cartLocal);
  // saveData(cartLocal);
}
// ----------------------------------------------------------------------------------------------------
function decreaseP(id) {
  let idProduct = id;
  for (var i = 0; i <= cartLocal.length; i++) {
    let idProductInArr = cartLocal[i]?.id;
    let idParse = Number(idProductInArr);
    if (idProduct === idParse) {
      cartLocal[i].quantity--;
    }
  }
  saveData(cartLocal);
  function Re_renderCart(cartLocal) {
    let contentR = "";
    for (var i = 0; i < cartLocal.length; i++) {
      let product = cartLocal[i];
      let total = product.price * product.quantity;
      contentR += `
            <tr>
              <td>${i + 1}</td>
              <td>
              <img src="${product.img}" width="75px" />
              </td>
              <td>${product.name}</td>
              <td>
              <button type="button" class="btn btn-warning" onclick="decreaseP(${
                product.id
              })">-</button>
              ${product.quantity}
              <button type="button" class="btn btn-warning" onclick="increaseP(${
                product.id
              })">+</button>
              </td>
              <td>${total}</td>
              <td>
              <button type="button" class="btn btn-warning" onclick="remove(${
                product.id
              })">Remove</button>
              </td>
            </tr>                    
        `;
    }
    document.getElementById("showCart").innerHTML = contentR;
  }
  Re_renderCart(cartLocal);
}
// ----------------------------------------------------------------------------------------------------
function btnMua() {
  cartLocal = [];
  saveData(cartLocal);
  let contentR = "";
  for (var i = 0; i < cartLocal.length; i++) {
    let product = cartLocal[i];
    let total = product.price * product.quantity;
    contentR += `
            <tr>
              <td>${i + 1}</td>
              <td>
              <img src="${product.img}" width="75px" />
              </td>
              <td>${product.name}</td>
              <td>
              <button type="button" class="btn btn-warning" onclick="decreaseP(${
                product.id
              })">-</button>
              ${product.quantity}
              <button type="button" class="btn btn-warning" onclick="increaseP(${
                product.id
              })">+</button>
              </td>
              <td>${total}</td>
              <td>
              <button type="button" class="btn btn-warning" onclick="remove(${
                product.id
              })">Remove</button>
              </td>
            </tr>                    
        `;
  }
  document.getElementById("showCart").innerHTML = contentR;
}
// ----------------------------------------------------------------------------------------------------
function btnXoa() {
  cartLocal = [];
  saveData(cartLocal);
  let contentR = "";
  for (var i = 0; i < cartLocal.length; i++) {
    let product = cartLocal[i];
    let total = product.price * product.quantity;
    contentR += `
            <tr>
              <td>${i + 1}</td>
              <td>
              <img src="${product.img}" width="75px" />
              </td>
              <td>${product.name}</td>
              <td>
              <button type="button" class="btn btn-warning" onclick="decreaseP(${
                product.id
              })">-</button>
              ${product.quantity}
              <button type="button" class="btn btn-warning" onclick="increaseP(${
                product.id
              })">+</button>
              </td>
              <td>${total}</td>
              <td>
              <button type="button" class="btn btn-warning" onclick="remove(${
                product.id
              })">Remove</button>
              </td>
            </tr>                    
        `;
  }
  document.getElementById("showCart").innerHTML = contentR;
}
// ----------------------------------------------------------------------------------------------------
let saveData = (data) => {
  localStorage.setItem("productListBC34", JSON.stringify(data));
};

