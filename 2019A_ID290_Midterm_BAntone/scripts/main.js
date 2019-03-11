$('#searchBtn').click(function(){
    var url = 'https://fengshui-api.com/api/v1/findChineseSignOfYear?token=R0IF9Mj2bbE7C02186d647618Ml8065e322e7T52&year=1998&month=9&day=26&gender=0'
    var params = "";
    params = "";
    params += '&year=' + $('#year').val();
    params += '&month=' + $('#month').val();
    params += '&day=' + $('#day').val();
    params += '&gender=' + $('#gender').val();
    $.getJSON(url + params, function(data){
        $('#resultsArea').html('<h1>' + data.result + '</h1>')
    });
});

$('#btn').click(function(){
    var url =  'https://random.dog/woof.json';
    $.getJSON(url , function(d){
        $('#dogArea').html('<img src="' + d.result + '"/>')
    });
});

$('#nBtn').click(function(){
    var url = 'http://www.omdbapi.com/?apikey=cc45ded&s='+ $('#location').val();
    $.getJSON(url , function(movies){
        movies.Search.forEach(function(m){
            $('#movieArea').append('<div class="movie"><h1 class="title">'+ m.Title+'</h1><img src="'+m.Poster+'" alt="" class="poster"><br><br><small class="details">'+m.Year+'</small></div>')
            });
        $('#modalArea').click(function(){
            $('body').append('<div id="modalBg"><div id="modalContent">'+ $(this).html() +'</div></div>');
        });
        $('#closeBtn').click(function(){
            $('#modalArea').html('');
        });
    });
    $('#movieArea').html('');
});