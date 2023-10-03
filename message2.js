
        
		function aboutMeColor(){
              var button = document.querySelector('.aboutMeButton');
              button.style.backgroundColor = 'white';
              button.style.color = 'black';
		}
		function aboutMeOldColor(){
			 var button = document.querySelector('.aboutMeButton');
             button.style.backgroundColor = ''; 
             button.style.color = ''; 
		}
		function mouseDown(linkId){
			document.getElementById(linkId).style.color="green";
		}
		function mouseOver(linkId){
			document.getElementById(linkId).style.color="orange";
		}
		function mouseOut(linkId){
			document.getElementById(linkId).style.color="";
		}
		

	