var screenn=document.getElementById("screenn");
					var screen=document.getElementById("screen");
					var buttons=Array.from(document.getElementsByClassName("btn"));

					buttons.map(btnn=>{
							btnn.addEventListener('click',(e)=>{
									// console.log('clicked');
									// console.log(e);
									// console.log(e.target);
									// console.log(e.target.innerText);


									switch(e.target.innerText){

											case 'AC':
											screen.innerText='';
											screenn.innerText='';
											break;

											case'DEL':
											if(screen.innerText){
											screen.innerText=screen.innerText.slice(0,-1);
											}
											break;

											case'=':
											try{
												screenn.innerText=eval(screen.innerText);
											}catch{
												screen.innerText="ERROR!";
											}
											break;

											default:
											screen.innerText += e.target.innerText;

									}

									

							});

					});
					
