$(document).ready(fucntion(){

//ici, $(this) est le document
var document= $(this);

$(".content").mouseout(function(event){

//ici, $(this) est la div de classe content
var p = $(this).children("p");

p.each(function (index) {

//ici, $(this) sera à chaque fois un des paragraphes p.
$(this).prepend("Partie "+index);

  });

 });

});

//blablabla