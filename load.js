let url = './make_and_model2.json';
let response = await fetch(url,{
	headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
});
let selectEl = document.getElementById('make-select');

if(response.ok){
	let json = await response.json();	
	for(const id of Object.getOwnPropertyNames(json))
	{
		let maker = json[id];
		console.log(maker);
	}
	
}
else{
	alert("Error HTTP!");
}