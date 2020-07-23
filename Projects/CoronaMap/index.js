function updateMap() {

    //bringing our data from data.json
    fetch(__dirname + "/resData.json")
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });

}

updateMap();