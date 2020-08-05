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


var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}