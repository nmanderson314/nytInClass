$('#').on("click", function(event){

    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

    var search = $('#search-terms').val();
    var limit = $('#records').val();
    var startYear = $('#start-year').val() + "0101";
    // add 0101
    var endYear = $('#end-year').val() + "1231";
    //add 1231

    $.ajax({
    url: url,
    method: 'GET',
    data:{
        'api-key': "78272015a6144672b70c5d778db36111",
        'q': search, 
        'page': limit,
        'begin_date': startYear,
        'end_date': endYear
    }
    }).done(function(result) {
    console.log(result);
    console.log(url);
    console.log("search:" + q);
    console.log("limit:" + limit);
    console.log("begin:" + startYear);
    console.log("end:" + endYear);

    $("#top-articles").append(results);



    }).fail(function(err) {
    throw err;
    });

    



});

//headline
//link to article
//published date
//snippet