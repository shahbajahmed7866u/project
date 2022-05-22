// console.log("hahah")

var productPageArr = JSON.parse(localStorage.getItem("Products")) || [];

// console.log(productPageArr)

display(productPageArr);

function display(productPageArr) {
  // document.querySelector("body").innerHTML=""
  productPageArr.forEach(function (elem, index) {
    var products = document.createElement("div");
    products.setAttribute("id","products")
    var name = document.createElement("p");
    name.innerText = `Name : ${elem.name}`;
    var category = document.createElement("p");
    category.innerText = `Cateogry : ${elem.category}`;
    var image = document.createElement("img");
    image.setAttribute("src", elem.image);
    var price = document.createElement("p");
    price.innerText = `Price : ${elem.price}`;
    var gender = document.createElement("p");
    gender.innerText = `gender : ${elem.gender}`;
    var sold = document.createElement("button");
    sold.setAttribute("id", "sold");
    sold.innerText = "sold";
    sold.value=elem.sold
    if(sold.value=="true"){
      sold.style.backgroundColor="green"
    }
    else if(sold.value=="false"){
      sold.style.backgroundColor="red"
    }
    sold.addEventListener("click", function (){
        changeColor(elem,index)
    });
    var remove = document.createElement("button");
    remove.innerText = "Remove";
    remove.setAttribute("id", "remove");
    remove.addEventListener("click", function () {
      deleteFunc(elem, index);
    });
    products.append(image, name, category, price, gender, sold, remove);
    document.querySelector("#body").append(products);
  });

  var length = productPageArr.length;

  document.querySelector("#counter").innerText = `Total Intem In Cart : ${length}`;
}

function deleteFunc(elem, index) {
  productPageArr.splice(index, 1);
  console.log(productPageArr);
  localStorage.setItem("Products", JSON.stringify(productPageArr));
  var newProductPageArr = JSON.parse(localStorage.getItem("products"));
  document.querySelector("#body").innerHTML = "";
  window.location.reload();
  display(newProductPageArr);
}

function changeColor(elem,index) {
console.log("hahaha")
if(elem.sold=="true"){
  elem.sold="false"

}
else if(elem.sold=="false"){
  elem.sold="true"
}

localStorage.setItem("Products",JSON.stringify(productPageArr))

window.location.reload()
}
