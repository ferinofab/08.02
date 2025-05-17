let spans = document.getElementsByTagName('span');
// spans[1].textContent = "asd";


let btn = document.getElementById('signIn');


btn.addEventListener('click', () => {
    validation();
})


function validation() {
    let pass = document.getElementById('pass').value;
    let email = document.getElementById('email').value;

    let arr = [
      email, pass
    ];
    
    for (let i = 0; i <= arr.length; i++) {
      console.log(arr[i]);
        if(!arr[i]) {
            spans[i].textContent = "Заполните поле";
            spans[i].style.color = 'red';
            spans[i].style.fontSize = '20px'
        }
        
    }
}