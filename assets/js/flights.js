//API call onclickenvent for Search Flights button
function getPackage() {
    //variables from user selections 
    let placeofOrigin = document.getElementById("placeofOrigin");
    let placeofDestination = document.getElementById("placeofDestination");
    let urlUpdate = '';
    //variable for divs that will be toggle hidden
    var displayDiv = document.getElementById("displayDiv");

    var holidaycarousel = document.getElementById("holiday-carousel");
    //getting date values from html elemet
    let outDate = document.getElementById("dp1");
    outDate = outDate.value;
    let inDate = document.getElementById("dp2");
    inDate = inDate.value;

    //try and catch for user error
    try {
        if (outDate == "") throw "Outbound Date";
        if (inDate == "") throw "Inbound Date";

    } catch (err) {
        alertInfo = "Please select " + err;
        alert(alertInfo);
        if (outDate == "") {
            document.getElementById("dp1").focus();
        } else if (inDate == "") {
            document.getElementById("dp2").focus();
        }
    }

    //toggle script 
    displayDiv.className = "d-sm-block align-content-center";
    holidaycarousel.className = "d-none";
    //outbounddate converter to ISO String date Date formate
    var outDateSel = new Date(outDate);
    var outDateSelect = outDateSel.toISOString();
    let outDateSelection = outDateSelect.substr(0, 10);

    //inbound date coversion to ISO String Date formate
    var inDateSel = new Date(inDate);
    var inDateSelect = inDateSel.toISOString();
    let inDateSelection = inDateSelect.substr(0, 10);
    //end of date formarting

    //If else statement for UK origin place
    if (placeofOrigin.value === "UK") {

        //switch case for all destination selections

        switch (placeofDestination.value) {
            case "South Africa":
                document.getElementById("destinationImage").src = "assets/img/south_africa/img3.jpg";
                urlUpdate = 'UK/GBP/en-GB/LOND-sky/ZA-sky/' + outDateSelection + '?inboundpartialdate=' + inDateSelection;
                break;
            case "Jamaica":
                document.getElementById("destinationImage").src = "assets/img/jamaica/img3.jpg";
                document.getElementById("destinationImage").alt = "Jamaica";
                urlUpdate = 'UK/GBP/en-GB/LOND-sky/JM-sky/' + outDateSelection + '?inboundpartialdate=' + inDateSelection;
                break;
            case "Australia":
                document.getElementById("destinationImage").src = "assets/img/australia/img3.jpg";
                document.getElementById("destinationImage").alt = "australia";
                urlUpdate = 'UK/GBP/en-GB/LOND-sky/AU-sky/' + outDateSelection + '?inboundpartialdate=' + inDateSelection;
                break;
            default:
                urlUpdate = 'UK/GBP/en-GB/LOND-sky/ZA-sky/' + outDateSelection + '?inboundpartialdate=' + inDateSelection;
        }
    } else if (placeofOrigin.value === "US") {

        switch (placeofDestination.value) {
            case "South Africa":
                document.getElementById("destinationImage").src = "assets/img/south_africa/img3.jpg";
                urlUpdate = 'US/GBP/en-GB/SFO-sky/ZA-sky/' + outDateSelection + '?inboundpartialdate=' + inDateSelection;
                break;
            case "Jamaica":
                document.getElementById("destinationImage").src = "assets/img/jamaica/img3.jpg";
                document.getElementById("destinationImage").alt = "Jmaica";
                urlUpdate = 'US/GBP/en-GB/SFO-sky/JM-sky/' + outDateSelection + '?inboundpartialdate=' + inDateSelection;
                break;
            case "Australia":
                document.getElementById("destinationImage").src = "assets/img/australia/img3.jpg";
                document.getElementById("destinationImage").alt = "australia";
                urlUpdate = 'US/GBP/en-GB/SFO-sky/AU-sky/' + outDateSelection + '?inboundpartialdate=' + inDateSelection;
                break;
            default:
                urlUpdate = 'US/GBP/en-GB/SFO-sky/ZA-sky/' + outDateSelection + '?inboundpartialdate=' + inDateSelection;
        }
    }
    //constant api url
    const baseURL = 'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/' + urlUpdate;

    function getData(type, cb) {
        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function() {
            if (this.readyState === this.DONE) {
                if (this.readyState == 4 && this.status == 200) {
                    cb(JSON.parse(this.responseText));
                }
            }
        })

        xhr.open("GET", baseURL);
        xhr.setRequestHeader("x-rapidapi-host", "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com");
        xhr.setRequestHeader("x-rapidapi-key", "896d18a8dbmsh2e10ef61871b745p17c70ajsn77222fa56caa");

        xhr.send(price, carrier);

    }
    //variable assigned HTML element 
    var elPrice = document.getElementById("price");
    var elCarrier = document.getElementById("carrier");
    var DestName = document.getElementById("DestinationName");
    var OriginName = document.getElementById("placeofOrigin");
    elPrice.innerHTML = '<h4><i class="fas fa-pound-sign"></i> Flight Cost</h4><hr class="bg-light">';
    elCarrier.innerHTML = '<h4><i class="fas fa-plane-departure"></i> Flight Carriers</h4><hr class="bg-secondary">';

    //function to get estimated price cost from API
    getData('MinPrice', function(data) {
        console.dir(data);
        unpacked = data.Quotes;

        //try and catch for empty data error from api
        try {
            if (unpacked == "") throw "Sorry We Could not Find any Prices or Flights at this time. Please select another search combination.";


        } catch (err) {
            holidaycarousel.className = "d-block";
            displayDiv.className = "d-none align-content-center";
            alert(err);
            DestName.innerHTML = '<i class="fas fa-umbrella-beach"></i> ' + "Please try another Search";
            OriginName.focus();


        }


        unpacked.forEach(function(item) {
            elPrice.innerHTML += '<i class="fas fa-pound-sign"></i> ' + item.MinPrice + "</br>";
            DestName.innerHTML = '<i class="fas fa-umbrella-beach"></i> ' + OriginName.value + " To " + placeofDestination.value;

        });

    });

    //function to get flight carrier cost from API
    getData('Name', function(data) {

        unpacked = data.Carriers;
        unpacked.forEach(function(item) {

            elCarrier.innerHTML += '<i class="fas fa-plane-departure"></i> ' + item.Name + "</br>";


        });

    });
}