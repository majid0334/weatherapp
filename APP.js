// körs när webbsidan lästs in av webbläsaren
window.onload = function(){
  //document.querySelector('sök').value='';
  testLoadApi();
}


// anropar API
function testLoadApi(){
  $.get("https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/13.50357/lat/59.3793/data.json", onApiLoaded);
}

// funktion som körs när API svarat
function onApiLoaded(data, status){

  console.log("Data", data);
  let firstDataTime = data.timeSeries[0].parameters;
  for( let timedata of firstDataTime){
    console.log("data", timedata);
    if(timedata.name == "t"){
      console.log("temp är "+ timedata.values[0]);
      document.getElementById("temp").innerHTML = timedata.values[0] + "&#x2103;";

   }

     if( timedata.name == "msl"){
      console.log("Airpressure"+ timedata.values[0]);
        document.getElementById("Airpressure").innerHTML =  "Air pressure: " + timedata.values[0] + " hPa";


  }

  if( timedata.name == "r"){
   console.log("fukthet"+ timedata.values[0]);
     document.getElementById("fukthet").innerHTML =  "Humidity: " + timedata.values[0] + "%";


}

      if( timedata.name == "pmean"){
       console.log("nederbörd"+ timedata.values[0]);
      document.getElementById("nederbörd").innerHTML ="precipitation: " + timedata.values[0] +" mm/h" ;
     }

      if(timedata.name == "pcat"){
        console.log("symbol "+ timedata.values[0]);
        if(timedata.values[0] == "0"){
          document.getElementById("symbol").innerHTML = "No precipitation" ;
           document.body.background = "https://images.wallpapersden.com/image/download/small-memory_am1pa2aUmZqaraWkpJRmbmdlrWZlbWU.jpg";
        }

      if(timedata.values[0] == "1"){
        document.getElementById("symbol").innerHTML = "Snow";
        document.body.background = "https://wallpaper.dog/large/10997457.jpg";
      }

      if(timedata.values[0] == "2"){
        document.getElementById("symbol").innerHTML = "Snow and rain";
        document.body.background = "http://3.bp.blogspot.com/-qMH8roO2Qms/UTIX2MwaWgI/AAAAAAAAA8A/rSAPTj0s7hA/s1600/rainandsnow.JPG";

      }
      if(timedata.values[0] == "3"){
        document.getElementById("symbol").innerHTML = "Rain";
        document.body.background = "https://www.desktopbackground.org/download/o/2010/09/20/82937_page-3-full-hd-1080p-rain-wallpapers-hd-desktop-backgrounds_1920x1080_h.jpg";
      }
      if(timedata.values[0] == "4"){
        document.getElementById("symbol").innerHTML = "Drizzle";
        document.body.background = "https://wallpapercave.com/wp/wp8260552.jpg";
      }
      if(timedata.values[0] == "5"){
        document.getElementById("symbol").innerHTML = "Freezing rain";
        document.body.background = "https://www.metoffice.gov.uk/binaries/content/gallery/metofficegovuk/hero-images/weather/frost/freezing-rain-on-a-branch.jpg";
      }


        if(timedata.values[0] == "6"){
          document.getElementById("symbol").innerHTML = "Freezing drizzle";
          document.body.background = "https://wallup.net/wp-content/uploads/2019/09/31951-frost-winter-cold-window-glass-abstract-pattern.jpg";

        }
      }

      if( timedata.name == "ws"){
       console.log("vindhastighet "+ timedata.values[0]);
       document.getElementById("vindhastighet").innerHTML =   "Wind speed:   " + timedata.values[0] + " m/s";
     }

     if( timedata.name == "Wsymb2"){
      console.log("kategori "+ timedata.values[0]);
    }
    if(timedata.values[0] == "1"){
      document.getElementById("kategori").innerHTML = "Clear sky";
      }
      if(timedata.values[0] == "2"){
        document.getElementById("kategori").innerHTML = "Nearly clear sky";
      }
      if(timedata.values[0] == "3"){
        document.getElementById("kategori").innerHTML = "Variable cloudiness";
      }
      if(timedata.values[0] == "4"){
        document.getElementById("kategori").innerHTML = "Halfclear sky";
      }
      if(timedata.values[0] == "5"){
        document.getElementById("kategori").innerHTML = "Cloudy sky";
      }
      if(timedata.values[0] == "6"){
        document.getElementById("kategori").innerHTML = "Overcast";
      }
      if(timedata.values[0] == "7"){
        document.getElementById("kategori").innerHTML = "Fog";
      }
      if(timedata.values[0] == "8"){
        document.getElementById("kategori").innerHTML = "	Light rain showers";
      }
      if(timedata.values[0] == "9"){
        document.getElementById("kategori").innerHTML = "Moderate rain showers";
      }
      if(timedata.values[0] == "10"){
        document.getElementById("kategori").innerHTML = "	Heavy rain showers";
      }
      if(timedata.values[0] == "11"){
        document.getElementById("kategori").innerHTML = "	Thunderstorm";
      }
      if(timedata.values[0] == "12"){
        document.getElementById("kategori").innerHTML = "	Light sleet showers";
      }
      if(timedata.values[0] == "13"){
        document.getElementById("kategori").innerHTML = "	Moderate sleet showers";
      }
      if(timedata.values[0] == "14"){
        document.getElementById("kategori").innerHTML = "		Heavy sleet showers";
      }
      if(timedata.values[0] == "15"){
        document.getElementById("kategori").innerHTML = "	Light snow showers";
      }
      if(timedata.values[0] == "16"){
        document.getElementById("kategori").innerHTML = "		Moderate snow showers";
      }
      if(timedata.values[0] == "17"){
        document.getElementById("kategori").innerHTML = "			Heavy snow showers";
      }
      if(timedata.values[0] == "18"){
        document.getElementById("kategori").innerHTML = "		Light rain";
      }
      if(timedata.values[0] == "19"){
        document.getElementById("kategori").innerHTML = "		Moderate rain";
      }
      if(timedata.values[0] == "20"){
        document.getElementById("kategori").innerHTML = "	Heavy rain";
      }
      if(timedata.values[0] == "21"){
        document.getElementById("kategori").innerHTML = "	Thunder";
      }
      if(timedata.values[0] == "22"){
        document.getElementById("kategori").innerHTML = "	Light sleet";
      }
      if(timedata.values[0] == "23"){
        document.getElementById("kategori").innerHTML = "	Moderate sleet";
      }
      if(timedata.values[0] == "24"){
        document.getElementById("kategori").innerHTML = "	Heavy sleet";
      }
      if(timedata.values[0] == "25"){
        document.getElementById("kategori").innerHTML = "	Light snowfall";
      }
      if(timedata.values[0] == "26"){
        document.getElementById("kategori").innerHTML = "	Moderate snowfall";
      }
      if(timedata.values[0] == "27"){
        document.getElementById("kategori").innerHTML = "	Heavy snowfall";
       }
      }
    }
