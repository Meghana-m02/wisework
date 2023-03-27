$(document).ready(function(){
  let query =window.location.search
    let url =new URLSearchParams(query)
    let val=url.get('user')
    $("#user").append(val)





    const options = {method: 'GET'};
    fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/bangalore?unitGroup=us&key=6EA9HC6XDQSACE7E2ETYCGRTT&contentType=json', options)
    .then(response => response.json())
    .then(function(response){
      $("main").css({
        "display":"block"
      })
      var cond=response.currentConditions.conditions;
      var wspeed=response.currentConditions.windspeed;
      var F=response.currentConditions.temp;
      var c=Math.round((F-32) * 5 / 9);
      
      var i=response.currentConditions.conditions;
      console.log(i)
      switch(i){
        case 'Clear': image='clear.png'
        break;
        case 'rain' ||'Rain, Overcast': image='rain.png'
        break;
        case  'Partially cloudy': image='clouds.png'
        break;
        case 'snow': image='snow.png'
        break;
        case 'Overcast': image='mist.png'
        break;
        default:image='404.png'
    }
      $("main").html(`<div class="left">
      <div class="date">
      ${i} 
      </div>
   
      <div class="city">
      ${response.resolvedAddress} <sub>${response.currentConditions.datetime} </sub>
      </div>
      <div class="tempreture">
        <img src="./images/${image}" alt="icon" class="left-img" />
        ${c}&degC
        <div id="det">
        <p id="humidity">Humidity  :${response.currentConditions.humidity}%</p>
        <p id="humidity">Wind Speed: ${response.currentConditions.windspeed}km/h</p>
        </div>
      </div>
      
    </div>`);
  
      
      
      console.log(response)
    }
    
    )
    .catch(err => console.error(err));
  
    

















    sendNotification({
      title: 'Wheather Notification',
      message: $("#user").html(),
      clickCallback: function () {
        alert('do something when clicked on notification');
      }
    });
    
    
    function sendNotification (data) {
        if (data == undefined || !data) { return false }
        var title = (data.title === undefined) ? 'Notification' : data.title
        var clickCallback = data.clickCallback
        var message = (data.message === undefined) ? 'null' : data.message
        var icon = (data.icon === undefined) ? 'https://th.bing.com/th/id/OIP.tEvvG3WAEt_dx8Z_uS1a8wHaEK?pid=ImgDet&w=1200&h=675&rs=1' : data.icon
        var sendNotification = function (){
            var notification = new Notification(title, {
                icon: icon,
                body: message
            })
            if (clickCallback !== undefined) {
                notification.onclick = function () {
                    clickCallback()
                    notification.close()
                }
            }
        }
    
        if (!window.Notification) {
            return false
        } else {
            if (Notification.permission === 'default') {
                Notification.requestPermission(function (p) {
                    if (p !== 'denied') {
                        sendNotification()
                    }
                })
            } else { sendNotification();
            }}}
















$("main").css({
  "display":"none"
})
    $("#basic-addon2").click(function(){
       var i = $("#inp").val();
  
       const options = {method: 'GET'};

fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/'+i+'?unitGroup=us&key=6EA9HC6XDQSACE7E2ETYCGRTT&contentType=json', options)
  .then(response => response.json())
  .then(function(response){
    $("main").css({
      "display":"block"
    })
    var cond=response.currentConditions.conditions;
    var wspeed=response.currentConditions.windspeed;
    var F=response.currentConditions.temp;
    var c=Math.round((F-32) * 5 / 9);
    
    var i=response.currentConditions.conditions;
    console.log(i)
    switch(i){
      case 'Clear': image='clear.png'
      break;
      case 'rain' ||'Rain, Overcast': image='rain.png'
      break;
      case  'Partially cloudy': image='clouds.png'
      break;
      case 'snow': image='snow.png'
      break;
      case 'Overcast': image='mist.png'
      break;
      default:image='404.png'
  }
    $("main").html(`<div class="left">
    <div class="date">
    ${i} 
    </div>
 
    <div class="city">
    ${response.resolvedAddress} <sub>${response.currentConditions.datetime} </sub>
    </div>
    <div class="tempreture">
      <img src="./images/${image}" alt="icon" class="left-img" />
      ${c}&degC
      <div id="det">
      <p id="humidity">Humidity  :${response.currentConditions.humidity}%</p>
      <p id="humidity">Wind Speed: ${response.currentConditions.windspeed}km/h</p>
      </div>
    </div>
    
  </div>`);

    
    
    console.log(response)
  }
  
  )
  .catch(err => console.error(err));

    })
})

