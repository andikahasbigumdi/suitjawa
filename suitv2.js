  // let coba = document.getElementsByClassName('info')[0]; 
  // 	coba.innerHTML = "menang"; 

  	function pilihancomputer(){

  		var comp = Math.random(); 

		if(comp < 0.34 ) return 'gajah';
		if( comp >=0.34 &&  comp <0.67) return 'orang';
			return 'semut';
		
  	}


  	function hasil(comp , player ){

		if(player== comp ) return 'Seri!';
		if( player =='gajah') return (comp == 'orang' ) ? 'Menang' : 'Kalah '; 
		if( player== 'orang') return (comp == 'gajah') ? 'Kalah' : 'Menang'; 
		if ( player =='semut') return (comp== 'orang') ? 'kalah' : 'Menang ';

  	}



  	// let pGajah = document.querySelector('.gajah'); 
  	// 	pGajah.addEventListener('click', function(){

  	// 		const acakpilihan = pilihancomputer(); 
  	// 		const pilihanplayer = pGajah.className; 
  	// 		const final = hasil(acakpilihan, pilihanplayer); 
  	// 		const imgcomputer = document.querySelector('.img-komputer'); 
  	// 			imgcomputer.setAttribute('src', 'img/' + acakpilihan +'.png'); 

  	// 		const tarohasil = document.querySelector('.info'); 
  	// 			tarohasil.innerHTML = final; 

  	// 	}); 


  		//pake foreach biar gak di ulang ngerjainya 


  		function putar(){
  				const imgcomputer= document.querySelector('.img-komputer'); 
  				let i = 0; 
  				const gambar = ['gajah' , 'semut' , 'orang'];
  				const waktuMulai = new Date().getTime();  
  				setInterval(function(){
  					if (new Date().getTime() - waktuMulai > 1000) {
  						clearInterval; 
  						return; 
  					}
  					imgcomputer.setAttribute('src', 'img/' + gambar[i++] + '.png');

  					if(i == gambar.length ) i=0;

  				}, 100 ) 

  		}















  		let pilihan = document.querySelectorAll('li img'); 

  			pilihan.forEach(function(pil){
  				pil.addEventListener('click', function(){


  			const acakpilihan = pilihancomputer(); 
  			const pilihanplayer = pil.className; 
  			const final = hasil(acakpilihan, pilihanplayer); 

  			putar(); 

  			setTimeout(function(){

  				const imgcomputer = document.querySelector('.img-komputer'); 
  				imgcomputer.setAttribute('src', 'img/' + acakpilihan +'.png'); 

  				const tarohasil = document.querySelector('.info'); 
  				tarohasil.innerHTML = final; 

  			},1000);
  			
  				
  				});

  			}); 