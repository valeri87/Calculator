let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map(button => {
  button.addEventListener('click', (e) => {
    switch(e.target.innerText){    
      case 'C': 
        display.innerText = '0';
          break;
      case '←': 
        if(display.innerText){
            display.innerText = display.innerText.slice(0, -1);
        }  
        break;
      case '=':
        try{
            display.innerText = eval(display.innerText);
        } catch {
            display.innerText = 'Error!';
        }
        break;
      case '.':
          if(display.innerText === '') break;
          if(display.innerText.endsWith('.')) break;
          display.innerText += e.target.innerText;     
        break;
      default:
          if(display.innerText === '0'){
            display.innerText = '';
          }
          display.innerText += e.target.innerText;
    }
  });
});