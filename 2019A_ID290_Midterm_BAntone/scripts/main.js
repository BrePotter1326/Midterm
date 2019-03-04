var url = 'https://fengshui-api.com/api/v1/findChineseSignOfYear?token=R0IF9Mj2bbE7C02186d647618Ml8065e322e7T52&year=1998&month=9&day=26&gender=0'
var params = "";

$('#searchBtn').click(function(){
    params = "";
    params += '&year=' + $('#year').val();
    params += '&month=' + $('#month').val();
    params += '&day=' + $('#day').val();
    params += '&gender=' + $('#gender').val();
    $.getJSON(url + params, function(data){
        $('#resultsArea').html('<h1>' + data.result + '</h1>')
    });
});

var aUrl = 'https://random.dog/a6df4a43-0b67-4d9c-a8a7-f55c5c2ec130.mp4'
$('#btn').click(function(){
    $.getJSON(aUrl, function(d){
        $('#dogArea').html('<h1>' + d.result + '</h1>')
    });
});
var event = 'http://api.eventful.com/nashville_tn/events?api_key=dDQFsGCTPxzHLFzB&q=music&l=Nashville'
$('#nBtn').click(function(){
    $.getJSON(event + params, function(da) {  
        params = "";
        params += '&location'.$('#location').val();
        $('#numberArea').html('<h1>'+ da.result+'</h1>');
    });
})