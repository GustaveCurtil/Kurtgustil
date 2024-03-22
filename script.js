let tabs = document.querySelectorAll(".tab");
let pages = document.querySelectorAll("main");



for (let i = 0; i < tabs.length; i++) {
    const tab = tabs[i];
    tab.addEventListener('click', ()=> {
        tabs.forEach(tab => {
            tab.classList.remove('current');
        });
        pages.forEach(page => {
            page.classList.remove('currentpage')
        })
        tab.classList.add('current');
        pages[i].classList.add('currentpage')
    })
}