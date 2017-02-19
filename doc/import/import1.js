//impede carregar repetidamente
var loadeds={};
 
//simula o seletor do jquery
function $ (a,b,c,d,e,f,g,h)
{ 
	 return document.querySelector(a,b,c,d,e,f,g,h);
} 

function handleLoad(e,context) {
	
 	if(loadeds[e.target.href])
 		{
 			return;
 		}
 	
  loadeds[e.target.href] = true;
 	
  console.log('Loaded import: ' + e.target.href);
  
  var content =e.target.import;
  
  var el = content.querySelector('body');

  insertAfter(document.body,el.cloneNode(true));
  
}
function handleError(e) {
  console.log('Error loading import: ' + e.target.href);
}

function insertAfter( referenceNode, newNode )
{
    referenceNode.parentNode.insertBefore( newNode, referenceNode.nextSibling );
}