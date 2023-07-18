const button = document.querySelector('#dropdown-button');
button.addEventListener('click', (event) => {
console.log('test');
if(document.querySelector('#dropdown-button').className === 'close'){
    document.querySelector('#dropdown-button').className = 'open';
    document.getElementById('dropdown-icon').src = './images/more.png';
    document.querySelector('.dropdown-nav').style.display = 'none';
}else{
    document.querySelector('#dropdown-button').className = 'close';
    document.getElementById('dropdown-icon').src = './images/arrow.png';
    document.querySelector('.dropdown-nav').style.display = 'flex';
}
});