var data={
		'A':{name:'clap', sound:'drumsticks/wetflngk.wav'},
		'S':{name:'hiHat' ,sound:'drumsticks/brtpunch.wav'},
		'D':{name:'Kick' ,sound:'drumsticks/dblhd rm.wav'},
		'F':{name:'openhat' ,sound:'drumsticks/edge hat.wav'}, 
		'G':{name:'Boom' ,sound:'drumsticks/frngesnr.wav'},
		'H':{name:'Ride' ,sound:'drumsticks/hardride.wav'},
		'J':{name:'snare' ,sound:'drumsticks/lobkwrdz.wav'},
		'K':{name:'tom' ,sound:'drumsticks/softride.wav'},
		'l':{name:'tink' ,sound:'drumsticks/trshcrsh.wav'},
		'Z':{name:'clap', sound:'drumsticks/wetflngk.wav'},
		'X':{name:'hiHat' ,sound:'drumsticks/brtpunch.wav'},
		'C':{name:'Kick' ,sound:'drumsticks/dblhd rm.wav'},
		'V':{name:'openhat' ,sound:'drumsticks/edge hat.wav'}, 
		'B':{name:'Boom' ,sound:'drumsticks/frngesnr.wav'},
		'N':{name:'Ride' ,sound:'drumsticks/hardride.wav'},
		'M':{name:'snare' ,sound:'drumsticks/lobkwrdz.wav'},
		'Q':{name:'tom' ,sound:'drumsticks/softride.wav'},
		'W':{name:'tink' ,sound:'drumsticks/trshcrsh.wav'},
		
	};
	var drumkit=document.getElementById('drumkit');
	function construct(){
		for(var key in data)
		{ 
			 var drumEl=document.createElement('div');
			drumEl.classList.add('drum');

			var h2=document.createElement('h2');
			h2.textContent=key;
			var span=document.createElement('span');
			span.textContent=data[key].name;

			drumEl.appendChild(h2);
			drumEl.appendChild(span);
			drumkit.appendChild(drumEl);

			data[key].el=drumEl;

			drumEl.addEventListener('click',function(event){
				var key=event.currentTarget.querySelector('h2').textContent;
				playDrum(key);
			});
			
		}
	};
	function playDrum(key)
	{
		var audio=new Audio();
		audio.src=data[key].sound;
		audio.play();
		data[key].el.style.animation='drum-animation 0.3s';
		data[key].el.style.webkitAnimation='drum-animation 0.3s';
		data[key].el.addEventListener('animationEnd',removeAnimation);
		data[key].el.addEventListener('webkitAnimationEnd',removeAnimation);


	};
	
	function handleKeyEvents(event){
		playDrum(event.key.toUpperCase());
	}
	construct();
	window.addEventListener('keydown',handleKeyEvents);
