var ball = document.querySelector('.discoball');
var classes = ['here','goes','our','awesome','disco','ball'];
var i=0;

function goDisco(){
	//do your disco magic here !
	
ball.setAttribute('class','discoball ' + classes[i]);

i++;
	if(i>5){
			i=0;
		
	}
	
}




setInterval(goDisco,300);



