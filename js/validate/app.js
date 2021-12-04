const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

function validate() {
    let inputs = $$('input[name]');
    for (let input of inputs) {
        console.log(input.getAttribute('name'));
    }
}
