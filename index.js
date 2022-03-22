fetch('index.json')
.then(function (response) {
    return response.json();
})
.then(function (data) {
    appendData(data);
})
.catch(function (err) {
    console.log('error: ' + err);
});
function appendData(data) {
var mainContainer = document.getElementsByClassName("item");
for (var i = 0; i < 10; i++) {
    var img = document.createElement("img");
    img.src= data[i].image;
    var div=document.createElement("div");
    div.innerHTML='Title:'+data[i].title+" "+'Year:'+data[i].year;
    mainContainer[i].appendChild(img);
    mainContainer[i].appendChild(div);
}
}
