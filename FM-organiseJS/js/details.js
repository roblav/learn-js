var Details = (function(){

	var $content;

	function loadPerson(ID){
		$content.load( 'details/'+ ID +'.html' );
	};

	function init(){
		$content = $("[rel=js-details]");

		EVT.on("person-selected", loadPerson)
	}

	return {
		init: init,
		loadPerson: loadPerson
	};


})();

