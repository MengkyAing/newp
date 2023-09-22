        // header 
const navOpen=document.querySelector('.mobile-open-btn')
const navClose=document.querySelector('.mobile-close-btn')
const primaryNavigation=document.getElementById('primary-navigation')

navOpen.addEventListener('click',()=>{
    const visibility = primaryNavigation.getAttribute('data-visible');
    if(visibility === 'false'){
        primaryNavigation.setAttribute('data-visible',true);
        navClose.setAttribute('data-visible',true);
    }
    else{
        primaryNavigation.setAttribute('data-visible',false);
        navClose.setAttribute('data-visible',false);
    }
})

navClose.addEventListener('click',()=>{
    const visibility = primaryNavigation.getAttribute('data-visible');
    if(visibility == 'true'){
        primaryNavigation.setAttribute('data-visible',false);
        navClose.setAttribute('data-visible',false);
    }

})

        // cart menu 
const shoppingBag=document.getElementById('cart-box');
const CartItem=document.getElementById('cart-icon');
const crossBtn=document.getElementById('cross-btn');

shoppingBag.addEventListener('click',()=>{
    const showCart=CartItem.getAttribute('data-visible')
    if(showCart == 'false'){
        CartItem.setAttribute('data-visible',true)
    }
    else{
        CartItem.setAttribute('data-visible',false)
    }
})

crossBtn.addEventListener('click',()=>{
    const showCart=CartItem.getAttribute('data-visible')
    if(showCart == 'true'){
        CartItem.setAttribute('data-visible',false)
    }
})

// let searchForm = document.querySelector('.search-form');

// document.querySelector('#search-btn').onclick =()=>{
//     searchForm.classList.toggle('active')
// }

const Search=document.getElementById('search-btn');
const ShowS=document.getElementById('Search-form');


Search.addEventListener('click',()=>{
    const ShowSearch=ShowS.getAttribute('data-visible')
    if(ShowSearch == 'false'){
        ShowS.setAttribute('data-visible',true)
    }
    else{
        ShowS.setAttribute('data-visible',false)
    }
})

