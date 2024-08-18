const zero = document.querySelector("#zero"),
one = document.querySelector("#one"),
two = document.querySelector("#two"),
three = document.querySelector("#three"),
four = document.querySelector("#four"),
five = document.querySelector("#five"),
six = document.querySelector("#six"),
seven = document.querySelector("#seven"),
eight = document.querySelector("#eight"),
nine = document.querySelector("#nine"),
add=  document.querySelector("#add"),
sub = document.querySelector('#subtract'),
mult = document.querySelector('#multiply'),
divide = document.querySelector("#divide"),
equalTo = document.querySelector('#equal-to'),
      value = document.getElementById('last-val'),
      formSubmit = document.getElementById('form-submit');

      formSubmit.addEventListener('submit', e =>{
        e.preventDefault();
      })

zero.addEventListener('click', e => {
    value.value += zero.innerText;
})
one.addEventListener('click', e => {
    value.value += one.innerText;
})
two.addEventListener('click', e => {
    value.value += two.innerText;
})
three.addEventListener('click', e => {
    value.value += three.innerText;
})
four.addEventListener('click', e => {
    value.value += four.innerText;
})
five.addEventListener('click', e => {
    value.value += five.innerText;
})
six.addEventListener('click', e => {
    value.value += six.innerText;
})
seven.addEventListener('click', e => {
    value.value += seven.innerText;
})
eight.addEventListener('click', e => {
    value.value += eight.innerText;
})
nine.addEventListener('click', e => {
    value.value += nine.innerText;
});
add.addEventListener('click', e => {
    value.value += add.innerText;
});
sub.addEventListener('click', e => {
    value.value += sub.innerText;
})
mult.addEventListener('click', e => {
    value.value += mult.innerText;
})
divide.addEventListener('click', e => {
    value.value += divide.innerText;
});
equalTo.addEventListener('click', e => {
    const total = eval(value.value);
    value.value = total;
});

document.querySelector('#c').addEventListener('click', e => {
    value.value = ""
})