// =============================== Functioality collection-slider section start =======================================


// document.addEventListener("DOMContentLoaded", function() {
//     var collectionLinks = document.querySelectorAll('.collection-link');
//     var collectionTitleDiv = document.getElementById('collection-title'); // Get the div to display collection title
//     var currentCollectionHandle = null; // Variable to store the current collection handle

//     collectionLinks.forEach(function(link) {
//       link.addEventListener('click', function(event) {
//         event.preventDefault();
//         var collectionHandle = this.getAttribute('data-collection');
//         if (collectionHandle !== currentCollectionHandle) { // Check if the clicked collection is different from the current one
//           fetch('/collections/' + collectionHandle + '/products.json')
//             .then(response => response.json())
//             .then(data => {
//               var products = data.products;
//               var collectionTitle = this.querySelector('.col-title').textContent;
//               collectionTitleDiv.innerHTML = '<h2>' + collectionTitle + '</h2>'; // Update the collection title
//             })
//             .catch(error => {
//               console.error('Error fetching products', error);
//             });
//           currentCollectionHandle = collectionHandle; // Update the current collection handle
//         }
//       });
//     });
//   });


// add and remove class functionality to the active tag
  $(document).ready(function(){
    $('.in').on('click', function(){
      // Remove "active" class from all elements with class "coll-info"
      $('.in').removeClass('active');
      
      // Add "active" class to the clicked element
      $(this).addClass('active');
    });
  });




// owl slider code
 $('.collection_slider').owlCarousel({
    loop:true,
    margin:10,
    dots:false,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

// =============================== Functioality collection-slider section end =======================================

// =============================== Functionality product-slider section start ========================================


// add to cart functionality

$(document).ready(function(){
    $('.add-cart').click(function(){
        var output = $(this).attr('pro-id');
        $.ajax({
            url: 'cart/add.js', // Make sure this URL is correct
            type: 'POST',
            dataType: 'json', // Changed 'JSON' to 'json' for consistency
            data: {id: output, qty: 1},
            success: function() {
                console.log('Product added in Cart Successfully');
                 // Redirect to the cart page
                window.location.href = '/cart'; // Adjust the URL as per your application's routes
            },
            error: function(xhr, status, error) {
                console.error('Error adding product to cart:', error);
            }
        });
    });
});


// owl slider

 $('.product_slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})
// =============================== Functionality product-slider section end  ========================================

// ============================== Add to cart functioality for card-product.liquid section start ================================
$(document).ready(function() {
  $('.my-cart').click(function() {
    var productId = $(this).attr('my-id');
    
    $.ajax({
      url: '/cart/add',
      type: 'POST',
      dataType: 'json',
      data: { id: productId, qty: 1 },
      success: function(response) {
        if (response.success) {
          console.log('Product added to cart successfully');
          // Redirect to the cart page
          window.location.href = '/cart';
        } else {
          console.error('Failed to add product to cart:', response.error);
          // Handle the error here, such as displaying an error message to the user
        }
      },
      error: function(xhr, status, error) {
        console.error('Error adding product to cart:', error);
        // Handle the error here, such as displaying an error message to the user
      }
    });
  });
});
// ============================== Add to cart functioality for card-product.liquid section start ================================