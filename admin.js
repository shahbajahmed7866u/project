 // console.log('hahaha')
let arr=JSON.parse(localStorage.getItem("Products")) || []

document.querySelector("#form").addEventListener("submit",addProducts)
function addProducts()
{

    event.preventDefault()

    let name = form.name.value
    let category = form.category.value
    let image = form.image.value
    let price = form.price.value
    let gender = form.gender.value
    let sold = form.sold.value

    console.log(name,category,image,price,gender,sold)

    let p = new Product(name,category,image,price,gender,sold)

    arr.push(p)

localStorage.setItem("Products",JSON.stringify(arr))
}


function Product(name,category,image,price,gender,sold){
this.name=name;
this.category=category
this.image=image
this.price=price
this.gender=gender
this.sold=sold
}
