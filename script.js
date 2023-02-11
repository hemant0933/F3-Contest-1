let flexwrap = document.getElementById('flex-wrap');

fetch('https://dummyjson.com/products')
.then((response) => response.json())
.then((data) => {
    console.log('data>>>',data);
    let obj1 = data.products
    // creating and empty string 
    let empty_str = ''

    obj1.map((product) =>{
        // console.log(product.title)
        // just giving the templete for data how it will be displayed in one item(product)
        empty_str += `<div class="item">
        <img src=${product.thumbnail} class="images" alt="">
        <div class="desp">
        <h2>${product.title}</h2>
        <p>Brand - ${product.brand}</p>
        <p>Price - $ ${product.price}</p>
        <p>Discount - ${product.discountPercentage}</p>
        <p>Stock - ${product.stock}</p>
        </div>
    </div>`
    })
    flexwrap.innerHTML = empty_str;
    
}).catch((error) =>
   console.log(error));

