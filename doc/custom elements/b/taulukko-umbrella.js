
function loadDynJS(file) {

		var script = document.createElement("script");
		script.type = "text/javascript";
		script.src = file;
		script.async=false;
		//script.defer=false; 
		document.getElementsByTagName("head")[0].appendChild(script);
}

var umbrella = function(umbrella,options){
	 "use strict";
	if(umbrella)
	{
		return;
	}
	
	if(options == undefined || options.framework == undefined)
	{
		options={"framework":"bosonic"};
	}
	 
	
	document['umbrella'] = new Umbrella(options);
	 
	
	return document.umbrella;
	
	function Umbrella(args)
	{
		if(args.framework=="bosonic")
		{
			loadDynJS("webcomponents.js");
			loadDynJS("bosonic-runtime.js");
			this.register = function(options){ Bosonic.register(options);};
		}
		else
		{
			alert("Taulukko Umbrella haven't support to another web component framework yet!");
			return;
		}
		
		this.teste = function()
		{
			var  a = 'feito!';
			alert(a);			
		};
		
		
	}
}((document.umbrella)?document.umbrella:undefined);
 
    