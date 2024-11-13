let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

function addToWishlist(productId) {
    if (!wishlist.includes(productId)) {
        wishlist.push(productId); 
        localStorage.setItem('wishlist', JSON.stringify(wishlist)); 
        updateWishlistCount();
        alert('Product added to wishlist!');
    } else {
        alert('Product is already in your wishlist.');
    }
}


function removeFromWishlist(productId) {
    wishlist = wishlist.filter(id => id !== productId); 
    localStorage.setItem('wishlist', JSON.stringify(wishlist)); 
    updateWishlistCount(); 
    alert('Product removed from wishlist.');
}

function updateWishlistCount() {
    const wishlistCountElement = document.getElementById('wishlist-count');
    wishlistCountElement.textContent = wishlist.length; 
}

updateWishlistCount();