let  products = [
    { name: "Laptop", price: 1000, image: "https://m.media-amazon.com/images/I/71vvXGmdKWL._AC_SL1500_.jpg" },
    { name: "Smartphone", price: 800, image: "https://m.media-amazon.com/images/I/71d5fMDvq9L._AC_SL1500_.jpg" },
    { name: "Headphones", price: 200, image: "https://m.media-amazon.com/images/I/61kWB+uzR2L._AC_SL1500_.jpg" },
    { name: "Smartwatch", price: 250, image: "https://m.media-amazon.com/images/I/61vGQNUEsGL._AC_SL1500_.jpg" }
  ];



  let productList = document.getElementById("productList")

let updatedDiscount = products.map(function (product) {
    return {
        name: product.name,
        price:product.price,
        img : product.image,
        updatedprice:discount(product.price)
    }
    
})
 function discount(price){
    return (price *0.8).toFixed(2)
    
}

let discounted = updatedDiscount.forEach(function(product){
    let productDiv = document.createElement("div")
productDiv.className = "col"
productDiv.innerHTML = `
<div class="card text-center" style="width: 18rem;">
  <img src=${product.img} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title text-danger"><del>${product.price}</del></h5>
    <h5 class="card-title">${product.updatedprice}</h5>

    <a href="#" class="btn btn-primary">Buy now</a>
  </div>
</div>


`   
productList.appendChild(productDiv) 

})