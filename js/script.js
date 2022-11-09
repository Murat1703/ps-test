let TabsBtn = document.querySelectorAll('.tab');
let TabContent = document.querySelectorAll('.tabcontent');
let menuBurger = document.querySelector('.menu-burger');
let mobileMenu = document.querySelector('.mobile-menu');

TabsBtn.forEach(function(item){
    item.addEventListener('click', () => {
        let currentTabBtn = item;
        let TabID = currentTabBtn.getAttribute('data-tab');
        let currentTab = document.querySelector(TabID);
        TabsBtn.forEach(function(item){
            item.classList.remove('__active');
        })       
        TabContent.forEach(function(item){
            item.classList.remove('__active');
        })
        currentTabBtn.classList.add('__active');
        currentTab.classList.add('__active')
    })
})

menuBurger.addEventListener('click', () => {
    menuBurger.classList.toggle('__show_mobile');
    mobileMenu.classList.toggle('__show_mobile');
})