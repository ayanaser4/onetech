let Products = [];

async function getCartPro() {
  try {
    let res = await fetch("https://ecommerce.routemisr.com/api/v1/cart", {
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem("userToken").slice(1, -1),
      },
    });
    
    let resFinal = await res.json();
    Products = resFinal.data.products;
    
    console.log(Products);
    disCartPro();
  } catch (error) {
    console.error("Error fetching cart products:", error);
  }
}

getCartPro();


function disCartPro() {
  let pro = "";
  for (let i = 0; i < Products.length; i++) {
    const { product, count, price } = Products[i];
    
    pro += `
      <div class="cart1">
        <div class="img-cart">
          <img src="${product.imageCover}" alt="${product.title}">
        </div>
        <div class="cart-name">
          <p class="strong">Name</p>
          <p class="weak">${product.title}</p>
        </div>
        <div class="cart-color">
          <p class="strong color">Color</p>
          <i class="fa-solid fa-circle"></i>
        </div>
        <div class="cart-Quantity">
          <p class="strong">Quantity</p>
          <p class="weak">${count}</p>
        </div>
        <div class="cart-Price">
          <p class="strong price">Price</p>
          <p class="weak">${price}$</p>
        </div> 
        <div class="cart-Total">
          <p class="strong">Total</p>
          <p class="weak">${count * price}$</p>
        </div>
        <i onclick="deleteProduct(${i})" class="fa-solid fa-trash"></i>
      </div>
    `;
  }
  document.querySelector(".car-con").innerHTML = pro;
}

// Function to delete a product from the cart
async function deleteProduct(index) {
  const productId = Products[index].product._id; // Assuming each product has a unique ID

  try {
    let res = await fetch(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem("userToken").slice(1, -1),
      },
    });

    if (res.ok) {
      // Remove the product from the Products array and update the display
      Products.splice(index, 1);
      disCartPro();
    } else {
      console.error("Failed to delete product from cart");
    }
  } catch (error) {
    console.error("Failed to delete product:", error);
  }
}


// let Products = [];
// async function getCartPro() {
//   let res = await fetch("https://ecommerce.routemisr.com/api/v1/cart", {
//     headers: {
//       "Content-Type": "application/json", // specify the content type
//       token: localStorage.getItem("userToken").slice(1, -1),
//     },
//   });
//   let resFinal = await res.json();
//   Products = resFinal.data.products;
//   console.log(Products);
//   disCartPro();
// }
// getCartPro();


// function disCartPro() {
//   let pro = ``;
//   for (let i = 0; i < Products.length; i++) {
//     pro += `
//             <div class="cart1">
//                     <div class="img-cart"><img src=${Products[i].product.imageCover} alt=""></div>
//                     <div class="cart-name">
//                       <p class="strong">Name</p>
//                       <p class="weak">${Products[i].product.title}</p>
//                     </div>
//                     <div class="cart-color">
//                       <p class="strong color">color</p>
//                       <i class="fa-solid fa-circle"></i>
//                     </div>
//                     <div class="cart-Quantity">
//                       <p class="strong">Quantity</p>
//                       <p class="weak">${Products[i].count}</p>
//                     </div>
//                     <div class="cart-Price">
//                       <p class="strong price">Price</p>
//                       <p class="weak">${Products[i].price}</p>
//                     </div> 
//                     <div class="cart-Total">
//                       <p class="strong">Total</p>
//                       <p class="weak">$2000</p>
//                     </div>
//                   </div>
//     `
//   }
//   document.querySelector(".car-con").innerHTML = pro;
// }
// //Delete product function
// async function deleteProduct(index){
//   const productId = Products[index].product._id; // Assuming each product has a unique ID

//   try {
//     // Corrected DELETE request
//     let res = await fetch(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`, {
//       method: "DELETE",
//       headers: {
//         "Content-Type": "application/json",
//         token: localStorage.getItem("userToken").slice(1, -1),
//       },
//     });

//     // Check if the delete was successful
//     if (res.ok) {
//       // Remove the product from the local Products array
//       Products.splice(index, 1);
//       // Update the UI after the product has been deleted
//       disCartPro();
//     } else {
//       console.error("Failed to delete product from cart");
//     }
//   } catch (error) {
//     console.error("Failed to delete product:", error);
//   }
// }

// let Products = [];
// let eightPros = [];
// async function getCartPro() {
//   let res = await fetch("https://ecommerce.routemisr.com/api/v1/cart",{
//     headers:{
//       "Content-Type":"application/json",
//       token:localStorage.getItem("userToken").slice(1,-1),
//     },
//   });

//   let resFinal = await res.json();
//   Products = resFinal.data;
//   console.log(Products);
  
//   disCartPro();
// }
// getCartPro();

// //    
// function disCartPro() {
//   let pro = ``;
//   for (let i = 0; i < Products.length; i++) {
//     pro += `
//             <div class="product d-flex justify-content-center align-items-center">
//                 <div class="col-md-2">
//                     <img class="w-100" src="${Products[i].product.imageCover}" alt="">
//                 </div>
//                 <div class="col-md-2">${Products[i].product.title}</div>
//                 <div class="col-md-2">${Products[i].price}</div>
//                 <div class="col-md-2">${Products[i].count}</div>
//                 <div class="col-md-2">Total</div>
//                 <div class="col-md-2">
//                     <button class="btn btn-danger">Delete</button>
//                 </div>
//             </div>
//        `;
//   }
//   document.querySelector("new_pro").innerHTML = pro;
// }