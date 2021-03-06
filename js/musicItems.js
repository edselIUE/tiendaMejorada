
    var storeTag = document.getElementById("catalog");
    fetch("dataStore.json")
    .then(res => res.json())
    .then(data =>{
        for(let i = 0; i <data.recordings.length;i++){
            html =  `<div  class=\"row item-container justify-content-between border-bottom border-dark mb-3\">`+
                        `<div id=\"${"Item"+i}\" class=\"col-8 col-sm-8\">`+
                            `<div class=\"row\">`+
                                    "<img class= \"col-2 col-sm-2\" id=\"item-img\" src=\"data:image/jpeg;base64,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\" alt=\"\"></img>"+
                                    "<div class=\"col-6 col-sm-6\" id = \"item-data\">"+
                                    "<div id=\"item-title\">"+
                                        "<h4>"+data.recordings[i].title+"</h4>"+
                                    "</div>"+
                                    "<div id=\"item-desc\">"+
                                        "<p>"+
                                            "Duraci??n (min): "+((data.recordings[i].length)/60000).toFixed(2)+"<br>"+
                                            "Artista: "+data.name+"<br>"+
                                            "Pa??s: "+data.area.name+
                                        "</p>"+
                                    "</div>"+
                                "</div>"+
                            "</div>"+
                        "</div>"+
                        "<div class=\"col-4 col-sm-4 justify-content-center\" id=\"item-check\">"+
                                    "<label for=\"\">Precio: "+data.recordings[i].length+"COP</label>"+
                                    `<input class=\"${"Item"+i}\" type=\"checkbox\">`+
                        "</div>"+
                    "</div>"
                storeTag.innerHTML += html;
        }
    });

function addItem(){
    items = document.getElementsByTagName('input');
    itemShopList =  document.getElementById('shopList')
    
    for(let i = 0; i < items.length; i++){
        if(items[i].checked === true){
            item = document.getElementById(`${"Item"+i}`);
            console.log(item);
            itemShopList.innerHTML += item.innerHTML;
        }
    }

}
