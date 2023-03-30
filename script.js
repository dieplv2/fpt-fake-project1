const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$('.main__item');
const panes = $$('.tab__pane');

tabs.forEach(function(tab, index) {

    const pane = panes[index];

    // console.log(pane);

    tab.onclick = function(){
        $('.main__item.active').classList.remove('active');
        $('.tab__pane.active').classList.remove('active');
        // console.log($);
       
        this.classList.add('active');
        pane.classList.add('active');
    }
});