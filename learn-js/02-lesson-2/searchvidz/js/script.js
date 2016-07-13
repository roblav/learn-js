// Searchbar Handler
$(function(){
	var searchField = $('#query');
	var icon = $('#search-btn');
	
	// Focus Event Handler
	$(searchField).on('focus', function(){
		$(this).animate({
			width:'100%'
		},400);
		$(icon).animate({
			right: '10px'
		}, 400);
	});
	
	// Blur Event Handler
	$(searchField).on('blur', function(){
		if(searchField.val() == ''){
			$(searchField).animate({
				width:'45%'
			},400, function(){});
			$(icon).animate({
				right:'360px'
			},400, function(){});
		}
	});
	
	$('#search-form').submit(function(e){
		e.preventDefault();
	});

});

/**
 * This function searches for videos related to the keyword 'dogs'. The video IDs and titles
 * of the search results are logged to Apps Script's log.
 *
 * Note that this sample limits the results to 25. To return more results, pass
 * additional parameters as documented here:
 *   https://developers.google.com/youtube/v3/docs/search/list
 */

function search() {
    //Clear results
    $('#results').html('');
    $('#buttons').html('');

    var q = $('#query').val();
    var APIKEY = "AIzaSyC2U3dqp1ju5mla4OifxWQa3kgsBzmjku4";

    $.get(
        "https://www.googleapis.com/youtube/v3/search", {
            part: "snippet",
            q: q,
            type: "video",
            key: APIKEY
        },
        function(data){
            console.log(data['items']);

            //Display items as <li>

            //for(var i=0; i < data['items'].length; i++){
//
            //    $('#results').append(function(){
//
            //        var content ;
            //            content = "<li>";
            //            content += "<img src='" + data['items'][i]['snippet']['thumbnails']['default'].url + "'>";
            //            content += "<h3>" + data['items'][i]['snippet']['channelTitle'] + "</h3>";
            //            content += "</li>"
            //        return content;
            //    });
//
            //}

            $.each(data['items'], function(i, item){
                //Get Output
                $('#results').append(function(){

                    var content ;
                    content = "<li>";
                    content += "<img src='" + item['snippet']['thumbnails']['default'].url + "'>";
                    content += "<h3>" + item['snippet']['title'] + "</h3>";
                    content += "<p>" + item['snippet']['description'] + "</p>";
                    content += "</li>"
                    return content;
                });
            });
        }
    );

}