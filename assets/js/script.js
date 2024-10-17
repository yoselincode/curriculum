
 const lines = ['101010', '110011', '010101', '101101', '111000', '011010', '100100','101010', '110011', '010101', '101101', '111000', '011010', '100100','101010', '110011', '010101', '101101', '111000', '011010', '100100'];
 const container = document.querySelector('.background-animation');

 function createCodeLine() {
   const codeLine = document.createElement('div');
   codeLine.className = 'code-line';
   codeLine.textContent = lines[Math.floor(Math.random() * lines.length)];
   
   codeLine.style.position = 'absolute';
   codeLine.style.top = Math.random() * 200 + 'vh';
   codeLine.style.left = Math.random() * 100 + 'vw';

   codeLine.style.animationDelay = Math.random() * 0.4 + 's';

   container.appendChild(codeLine);

   setTimeout(() => {
     codeLine.remove();
   }, 4000);
 }

 setInterval(createCodeLine, 100);