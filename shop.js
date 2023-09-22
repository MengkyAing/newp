            // sidebar-nav
const sideNav = document.getElementById('side-nav');
const arrows = document.getElementById('arrow');

arrow.addEventListener('click',()=>{
    const categoryShow = sideNav.getAttribute('data-category');

    if(categoryShow === 'false'){
        sideNav.setAttribute('data-category', true)
        arrows.setAttribute('data-category', true)
    }
    else{
        sideNav.setAttribute('data-category', false)
        arrows.setAttribute('data-category', false)
    }
})