function GetInfo(){
    var newName = document.getElementById("cityInput");
    // var cityName = document.getElementById("cityName");

// aquire the api token from openweathermap.org and insert the name value for input
fetch('https://api.openweathermap.org/data/2.5/forecast?q='+newName.value+'&appid=bfdec9e3cd29b2d7305b646ac706d289')
.then(response => response.json())
.then(data => {
    for (i=0; i<5; i++){
// Unit Default: Kelvin, so use this formula to transfer to celsius, and toFixed helps to keep two digit after decimle (too complicated to transfer to farhenheit)
        document.getElementById("day"+ (i+1)+"Min").innerHTML= "Min " + Number(data.list[i].main.temp_min -273.15 ).toFixed(2)+" Celsius"
    }
    for (i=0; i<5; i++){
    document.getElementById("day"+ (i+1)+"Max").innerHTML= "Max " + Number(data.list[i].main.temp_max -273.15 ).toFixed(2)+" Celsius"
    }
    // use this for loop to aquire the image from open weather map to insert the corresponded icon, by aquiring the icon weather value
    for(i = 0; i<5; i++){
        document.getElementById("img" + (i+1)).src = "http://openweathermap.org/img/wn/"+
        data.list[i].weather[0].icon
        +".png";
    }
        console.log(data)
})

.catch (err => alert("Error Message!"))
}

// Use this function to aquire the corespnding date by use getDay function
//  Once aquire the day from the week, then use the for loop to get the next four day value and insert it to the html
var d = new Date();
var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

function CheckDay (day){
    if(day + d.getDay() > 6){
        return day +d.getDay() -7;
    }
    else {
        return day +d.getDay();        
    }
}
    for (i=0; i<5; i++)
    {
        document.getElementById("day"+(i+1)).innerHTML = weekday[CheckDay(i)];

    }
