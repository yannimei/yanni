function change(){

					var element=document.getElementById('image');
					var b=document.getElementById('btn-c');
					if (b.innerHTML.match('Previous')){
						element.src="04/before.gif";
						b.innerHTML="Check Current Ecosystem";
					} else {
						element.src="04/after.gif";
						b.innerHTML="Check Previous Ecosystem";
					}

     		}
