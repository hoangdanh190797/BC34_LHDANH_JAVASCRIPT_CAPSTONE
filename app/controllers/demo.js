let index = arr.findIndex((item) => item.id === x);
if (index !== -1) {
  //Nếu TRUE, nghĩa là khác -1, nghĩa là tìm thấy id=x như mong muốn, thì trả
  // về index
  arr.splice(index, 1);
  //log => arr => check xem đã xoá chưa?
} //Ngược lại FALSE, nghĩa là bằng -1, nghĩa là không tìm thấy id=x như mong muốn, và
//trả về -1
else {
  console.log(index);
}

//Lợi dụng điều === -1 hoặc !== -1 để mở rộng thêm.

if (index === -1) {
  //Điều kiện này, cho phép tư duy ngược, rằng: Không tìm thấy id=x như
  //mong muốn thì
  //thực hiện yêu cầu trong hàm
  //ví dụ: Cho phép push dữ liệu (item có id) chưa tồn tại vào mảng
} else {
  //Ngược lại, nếu đã tồn tại item rồi, thì thực hiện công việc khác.
  //ví dụ: trả về index, dựa vào index truy xuất tới item và thực hiện yêu cầu mong muốn
}
// ----------------------------------------------------------------------------------------------------

// cartDone = cartLocal.map((item, index) => {
//   if(item.id == 1)
// })

//Phải cho cái điều kiện ở đây
//Dùng push bình thường coi
// cartLocal = [...cartLocal, itemNew];

// cartLocal.map(item => {
//   if(item.id === cartLocal[0])
// })

// for(let i = 0; i < cartLocal.length; i++)
// {
//   if(itemNew.id !== cartLocal[i].id)
//   {
//     cartLocal.push(itemNew);
//   }
//   else{
//     itemNew.quantity++;
//   }
// }
// console.log(cartLocal);

// cartLocal.map((item, index) => {
//   if (itemNew.id != item.id) {
//     item.quantity++;
//   } else {
//     console.log(index);
//   }
// });

// for(var i = 0; i <= cartLocal.length; i++)
// {
//   if(cartLocal[i].id == [i+1])
//   {
//     cartLocal[i].quantity++;
//     return cartLocal[i].quantity;
//   }
//   console.log(cartLocal[i].quantity);
// }
//Có GIỎ HÀNG RỒI

// console.log(cartLocal);

// for( value of cartLocal){
//   console.log(value);
// }
// let itemWithQuantity = new ItemQuantity(0, 0, 0, 0);
// khúc này có vẻ hơi sai, khi duyệt item là nó trả obj
// còn này mình truy cập được đến nó luôn nên
// cartLocal.map((item) => {
//   if (item.id == 1) {
//     itemWithQuantity.quantityOne++;
//   }
//   if (item.id == 2) {
//     itemWithQuantity.quantityTwo++;
//   }
//   if (item.id == 3) {
//     itemWithQuantity.quantityThree++;
//   }
//   if (item.id == 4) {
//     itemWithQuantity.quantityFour++;
//   }
//   // console.log(
//   //   quantityIDone,
//   //   quantityIDtwo,
//   //   quantityIDthree,
//   //   quantityIDfour
//   // );

//   console.log(itemWithQuantity.totalQuantity());
// });

// item.getQuantity();

// BÓC TÁCH ID RA, NẾU ID=1 THÌ QUANTITY_ID_ONE++

// TEST BÓC TÁCH KEY CỦA OBJ

// //ES6
// const { name } = cartLocal[0];
// const { id : idNew } = cartLocal[0]
// //ES5
// const nameOnenew = cartLocal[0].name;

// console.log(idNew);
// console.log(nameOnenew);
// console.log(name);
// ----------------------------------------------------------------------------------------------------

// Đặt log ngoài vòng pháp luật rồi đó => Undefined
// console.log(cartLocal[0]);

// ----------------------------------------------------------------------------------------------------
//
// function addProductCart(){
//   console.log("1");
// }

// ----------------------------------------------------------------------------------------------------
// console.log("1");
// console.log(id); - Không log ra "id" được lý do đang bất đồng bộ
// const fnAddItemInCart = fetchData().then((res) => {
//   console.log(id);
// }) -> Vẫn sai, lý do: Nhận về 1 id, dùng method GET with id để gọi nó ra.
// ----------------------------------------------------------------------------------------------------
// console.log(res); => log ra được dữ liệu
// cartLocal = [...cartLocal, res];
// Lấy được obj mong muốn => Truyền vào => Arr
// ----------------------------------------------------------------------------------------------------

// cartLocal = [...cartLocal, itemNew];

// console.log(cartLocal); // Mảng đã được nạp - chưa qua xử lý;
// ----------------------------------------------------------------------------------------------------
// cartDone = [...cartDone, cartLocal.map((item) => item)];
// Nghĩa là xác định được arr Local đang rỗng đó
// ----------------------------------------------------------------------------------------------------
// console.log(cartLocal);

// ----------------------------------------------------------------------------------------------------
// cartDone = [...cartDone, cartLocal];
// ---------------------------------------------------------------------------------
//Tại đây có được mảng, chạy duyệt mảng so sánh mảng với id nhận từ khi event clik

// function increaseP(id){
//   let index = cartLocal.findIndex((item) => item.id === id);
//   console.log(index);
// }
//--------------------------
// ----------------------------------------------------------------------------------------------------
// console.log(id);

// var idInttoString = `${id}`;

// console.log(idInttoString);
// console.log(cartLocal[0].id);

// let idStringtoInt = Number(cartLocal[0].id);

// console.log(idStringtoInt);
// let arrP= []
// arrP = [...arrP, cartLocal];
// console.log(cartLocal);
// console.log(arrP);
// let index = cartLocal.findIndex((item) => item.id === id)
// if(index !== -1)
// {
//   console.log(cartLocal[index]);
// }
// else{
//   console.log("error");
// }
//DUYỆT MẢNG KIỂU NÀY KHÔNG ĐƯỢC!!!
// ----------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------
// function increaseP(id) {
//   let index = cartDone.findIndex((item) => item.id === id);

//   //Tại sao dữ liệu không được truyền vào trực tiếp trong đây
//   console.log(cartDone);
//   console.log(index);//Nó log ra -1 luôn mới ghê
//   console.log(id);

//   if (index !== -1) {

//     let qtt = cartDone[index].quantity + 1;
//     console.log(qtt);

//   } else {

//     console.log(cartDone);
//   }
// }

// ----------------------------------------------------------------------------------------------------
// } else {
//   console.log("-1");
//   //Nó trả về "1" do chưa cùng dữ liệu thôi, nhưng mà nó không hiểu chỗ id kìa
// }
// ----------------------------------------------------------------------------------------------------

// console.log(idNhanve); // Number

// console.log(cartLocal[0].id); //String => Cần parse Number
// ----------------------------------------------------------------------------------------------------
// console.log(idNhantuDaChuyen);
// ----------------------------------------------------------------------------------------------------
// let idArrStringtoInt = Number(cartLocal[i].id);
// ----------------------------------------------------------------------------------------------------
// let idX = cartLocal[0].id;
// let idNhantuDaChuyen = Number(idX);
// ----------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------
