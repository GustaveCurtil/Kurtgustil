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

let copyButtons = document.querySelectorAll(".text button");

copyButtons.forEach(button => {
    button.addEventListener('click', () => {
        console.log(button.id)
        navigator.clipboard.writeText(button.id);
        alert("je hebt '" + button.id + "' gekopieerd")
    })
});

