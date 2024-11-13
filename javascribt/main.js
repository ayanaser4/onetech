// var swiper = new Swiper(".slide-content", {
//     slidesPerView: 3,
//     spaceBetween: 25,
//     // slidesPerGroup: 3,
//     centerSlide: "true",
//     fade: "true",
//     loop: true,
//     gragCursor: "true",
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//   });
  
  
  let Products = [];
  let eightPros = [];
  async function getAllProducts() {
    let res = await fetch("https://ecommerce.routemisr.com/api/v1/products");
    let resFinal = await res.json();
    Products = resFinal.data;
    // 
    console.log(resFinal);
    
    eightPros = Products.slice(0, 8);
    // 
    console.log(eightPros);
    
    disProEight();
  }
  getAllProducts();

//    
  function disProEight() {
    let pro = ``;
    for (let i = 0; i < eightPros.length; i++) {
      pro += `
            <div class="item new col-6 col-md-4 col-lg-3 p-0">
              <div class="item-img-con"><img src="${eightPros[i].imageCover}" alt="" class="w-100"></div>
              <div class="item-text-con d-flex flex-column gap-1 px-2 align-items-center">
                <span>${eightPros[i].price}</span>
                <span class="small text-secondary">${eightPros[i].category.name}</span> 
                <h6><a href=""> ${eightPros[i].title}</a></h6>
              </div>
                <button class="btn-add" onclick="addToCart('${eightPros[i].id}');">Add Cart</button>
            </div>
        `;
    }
    document.querySelector(".items-list.row.g-3.py-4.px-2.d-flex").innerHTML = pro;
  }
  
  async function addToCart(proId) {
    console.log(proId);
    let res = await fetch("https://ecommerce.routemisr.com/api/v1/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // specify the content type
        token: localStorage.getItem("userToken").slice(1, -1),
      },
      body: JSON.stringify({
        productId: proId,
      }),
    });
    let resFinal = await res.json();
    console.log(resFinal);
  }