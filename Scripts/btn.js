const btn = document.querySelectorAll('.neon-button2');
const div = document.querySelector('.main-display');
const btnGrp = document.querySelector('.hide');
const addColor = (colorName)=>{
    document.documentElement.style.setProperty('--themeColor', colorName);
    btnGrp.classList.toggle('removed');
    div.classList.toggle('active');
    // console.log(event)
}

// btn[0].addEventListener('click', ()=>{
    //     document.documentElement.style.setProperty('--themeColor', '#ccc');
    //     btnGrp.classList.toggle('removed');
    //     div.classList.toggle('active');
    // })


btn[0].addEventListener('click', addColor.bind(this,'#00FFFF'));
btn[1].addEventListener('click', addColor.bind(this,'hsl(317 100% 54%)'))
btn[2].addEventListener('click', addColor.bind(this,'#FEF900'))
btn[3].addEventListener('click', addColor.bind(this,'red'))
btn[4].addEventListener('click', addColor.bind(this,'#0f5eff'))
btn[5].addEventListener('click', addColor.bind(this,'#34fc22'))