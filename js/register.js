let spans = document.getElementsByTagName('span');
// spans[1].textContent = "asd";


let btn = document.getElementById('register');


btn.addEventListener('click', () => {
    validation();
})


function validation() {
    let lastname = document.getElementById('lastname').value;
    let name = document.getElementById('name').value;
    let middlename = document.getElementById('middlename').value;
    let phone = document.getElementById('phone').value;
    let pass = document.getElementById('pass').value;
    let email = document.getElementById('email').value;

    let arr = [
        lastname, name, middlename, phone, pass, email
    ];

    for (let i = 0; i <= arr.length; i++) {
        if(!arr[i]) {
            spans[i].textContent = "Заполните поле";
            spans[i].style.color = 'red';
            spans[i].style.fontSize = '20px'
        }
        validateTel(phone, spans[3]);
        validatePAss(pass, spans[4])
        
    }
}

maskNumber();

  function validateTel (phone, span) {
    let a = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
    if(!phone.match(a)) {
        span.textContent = "Введите коректный номер";
        
    }
  }

  function validatePAss(pass, span) {
    if(pass.length < 8) {
        span.textContent = "Не надежныйы пароль";
  }
}




  function maskNumber() {
    const maskOptions = {
        mask: '+{7}(000)000-00-00'
      };
      let phone_mask = document.getElementById('phone')
      const mask = IMask(phone_mask, maskOptions);
  }