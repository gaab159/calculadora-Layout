alert("Calculadora")
window.onload=()=>{
    const themeToggle = 
    document.getElementById('theme-toggle');
    const body = document.body;
    const expressionDisplay = 
    document.getElementById('Expressão');
    const resultDisplay = 
    document.getElementById('Resultado')
    const buttons = 
    document.querySelectorAll('.buttons button');

    let expressao = '';
    let resultado = '';
    let lastInput = '';

    themeToggle.addEventListerner('change', () =>{
        body.classList.toggle('dark');
        const themeText = 
        document.querySelector('.theme-text');
        
    

