
apiKey = "5935fac966a68baa2dd07215f5036743",
search = document.getElementById("btnP"),
inputNow = document.getElementById("searchA"),
 decisionH = document.getElementById("sunnyT").innerHTML;
 date = document.getElementById("dateK").innerHTML;
 temp = document.getElementById("degreeT").innerHTML;
 place = document.getElementById("newY").innerHTML;


search.addEventListener('click', () => {
    console.log(inputNow.value);
   fetch(`http://api.openweathermap.org/data/2.5/weather?q=${inputNow.value}&appid=${apiKey}&unitGroup=metric`)
        .then(res => res.json())
        .then(data => {
            result = data;
            console.log(result)
            document.getElementById("place").innerHTML = result.name
            document.getElementById("date").innerHTML = new Date(result.dt*1000).toDateString();
            document.getElementById("decisionH").innerHTML = result.weather[0].description;
            console.log(result.name, result.dt*1000, result.main.temp, result.weather[0].main, result.main.pressure, result.main.humidity,  result.weather[0].description)
            console.log(place, decisionH, date)
            })
        .catch(err => console.log(err));
});

