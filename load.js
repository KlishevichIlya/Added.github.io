let url = 'https://klishevichilya.github.io/Added.github.io/make_and_model2.json';
fetch(url).then(response => response.json())
	.then(json => {
	let selectEl = document.getElementById('make-select');
	let selectElMod = document.getElementById('model-select');

	if(response.ok){
		//let json = await response.json();	
		for(let id of Object.getOwnPropertyNames(json))
		{
			let maker = json[id];
			for(let key in maker){
				if(key == 'make_name'){
					let opt = document.createElement('option');
					opt.appendChild(document.createTextNode(maker[key]));
					opt.value = key;
		            selectEl.appendChild(opt);
	        	}
			}
		}
		selectEl.addEventListener('change', function() {
	  		let ind =  this.selectedIndex;  		
	  		selectElMod.disabled = false;  
	  		selectElMod.options.length = 0;		
	  		//console.log(ind);
	  		for(let id of Object.getOwnPropertyNames(json))
			{
				let maker = json[id];			
				if(maker.id == ind){
					for(let key of maker.models){
						//console.log(key.model_name);
						let opt = document.createElement('option');
						opt.appendChild(document.createTextNode(key.model_name));
						opt.value = key;
						selectElMod.appendChild(opt);
					}
				}
			}

		})
		
	}
	else{
		alert("Error HTTP!");
	}	
})
