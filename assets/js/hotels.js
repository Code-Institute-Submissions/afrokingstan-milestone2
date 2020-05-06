//the below variables are made up of html buttom elements
var myFeaturedHol1 = document.getElementById("myFeaturedHol1");
var myFeaturedHol2 = document.getElementById("myFeaturedHol2");
var myFeaturedHol3 = document.getElementById("myFeaturedHol3");
//variable for the api url value.
let baseURL = '';

//eventlisterns for when user makes a new selection
myFeaturedHol1.addEventListener("click", capetown);
myFeaturedHol2.addEventListener("click", montegobay);
myFeaturedHol3.addEventListener("click", melbourne);


//this function below calls the tripadvisor api for the default page
function getData(type, cb) {
    var data = null;
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = false;

    xhr.addEventListener("readystatechange", function() {
            if (this.readyState === this.DONE) {
                if (this.readyState == 4 && this.status == 200) {
                    cb(JSON.parse(this.responseText));
                }
            }
        })
        //the api url value is set to capetown using location ID
    baseURL = "https://tripadvisor1.p.rapidapi.com/hotels/list?offset=0¤cy=gbp&limit=10&order=asc&lang=en_GB&sort=recommended&nights=2&location_id=312659&adults=1&rooms=1";

    xhr.open("GET", baseURL);
    xhr.setRequestHeader("x-rapidapi-host", "tripadvisor1.p.rapidapi.com");
    xhr.setRequestHeader("x-rapidapi-key", "5f797cf3f4msh2839c1b22553f25p1bf0b4jsn595eced613a6");
    xhr.send(data);


}


//html element where api data will be displayed 
var elDescription = document.getElementById("holder");
elDescription.innerHTML = "";

//function to get api data 
getData('ranking', function(data) {
    console.dir(data);
    unpacked = data.data;


    //function to unpack api data 
    unpacked.forEach(function(item) {
        //constants assigned dat from api
        const reviews = item.num_reviews;
        const hotelName = item.name;
        const hotelrating = item.rating;
        const hotelranking = item.ranking;
        const priceVar = item.price;
        const imgKey = (item.photo);
        //variables for number of stars required
        let starCount = '';
        let halfstar = '';
        let stars = parseInt(hotelrating);
        let starFloat = parseFloat(hotelrating);
        let halfStarCheck = starFloat - stars;
        var ratings = 0;


        //if-else to handle Uncaught TypeError: Cannot Read property 'images' of undefined
        if (imgKey === undefined) {
            //will return images undefined
            return 'property of images undefined ';
        } else {

            //image source taken from api data
            let imgURL = "";
            //images = undefined;
            imgURL += imgKey.images.original.url;


            //do-while method to increment the star image to match the rating data
            do {
                starCount += ' <i class="fas fa-star"></i> ';
                ratings++;
            }
            while (ratings < stars);
            //if statement to check for any rating with 0.5
            if (halfStarCheck === 0.5) {
                halfstar = '<i class="fas fa-star-half-alt"></i> ';

                //htmlcard included with api data

                elDescription.innerHTML += '<div class="col-md-6 mb-1"><div class="card"><div class="card-body px-0 pb-0"><img src=' + imgURL + ' class="card-img-top" alt="review image"><h5 class="card-title px-2">' + hotelName + '</h5><h6 class="card-subtitle mb-2 px-2 text-muted">' + hotelrating + starCount + halfstar + '</h6><p class="card-text px-2 hotelranking" id="description">' + hotelranking + '</p><div class="card-footer"><a type="button" class="btn btn-sm btn-outline-secondary readMore" id="readMore" href="https://www.tripadvisor.co.uk/Hotels"  target="_blank"> Price Range: ' + priceVar + '</a><small class="text-muted ml-4">Reviews: ' + reviews + '</small></div></div></div></div>';


            } else if (hotelrating === undefined || hotelranking === "") {


                //htmlcard included with api data
                elDescription.innerHTML += '<div class="col-md-6 mb-1"><div class="card"><div class="card-body px-0 pb-0"><img src=' + imgURL + ' class="card-img-top" alt="review image"><h5 class="card-title px-2">' + hotelName + '</h5><h6 class="card-subtitle mb-2 px-2 text-muted">No Ratings Yet <i class="far fa-star"></i></h6><p class="card-text px-2 hotelranking" id="description">' + hotelranking + '</p><div class="card-footer"><a type="button" class="btn btn-sm btn-outline-secondary" id="writeReview" href=' + priceVar + '   target="_blank"> Post Review </a><small class="text-muted ml-4">Reviews: ' + reviews + '</small></div></div></div></div>';
            } else {


                //htmlcard included with api data
                elDescription.innerHTML += '<div class="col-md-6 mb-1"><div class="card"><div class="card-body px-0 pb-0"><img src=' + imgURL + ' class="card-img-top" alt="review image"><h5 class="card-title px-2">' + hotelName + '</h5><h6 class="card-subtitle mb-2 px-2 text-muted">' + hotelrating + starCount + '</h6><p class="card-text px-2 hotelranking" id="description">' + hotelranking + '</p><div class="card-footer"><a type="button" class="btn btn-sm btn-outline-secondary readMore" id="readMore" href="https://www.tripadvisor.co.uk/Hotels"  target="_blank"> Price Range: ' + priceVar + '</a><small class="text-muted ml-4">Reviews: ' + reviews + '</small></div></div></div></div>';


            }
        }
    });

});


//function activated on click event to load new data for cape town southafrica location
function capetown() {

    function getData(type, cb) {
        var data = null;
        var xhr = new XMLHttpRequest();
        xhr.withCredentials = false;

        xhr.addEventListener("readystatechange", function() {
                if (this.readyState === this.DONE) {
                    if (this.readyState == 4 && this.status == 200) {
                        cb(JSON.parse(this.responseText));
                    }
                }
            })
            //the api url value is set to capetown using location ID
        baseURL = "https://tripadvisor1.p.rapidapi.com/hotels/list?offset=0¤cy=gbp&limit=10&order=asc&lang=en_GB&sort=recommended&nights=2&location_id=312659&adults=1&rooms=1";
        xhr.open("GET", baseURL);
        xhr.setRequestHeader("x-rapidapi-host", "tripadvisor1.p.rapidapi.com");
        xhr.setRequestHeader("x-rapidapi-key", "5f797cf3f4msh2839c1b22553f25p1bf0b4jsn595eced613a6");
        xhr.send(data);
    }


    //html element where api data will be displayed 
    var elDescription = document.getElementById("holder");
    elDescription.innerHTML = "";

    //function to get api data 
    getData('ranking', function(data) {
        console.dir(data);
        unpacked = data.data;


        //function to unpack api data 
        unpacked.forEach(function(item) {
            //constants assigned dat from api
            const reviews = item.num_reviews;
            const hotelName = item.name;
            const hotelrating = item.rating;
            const hotelranking = item.ranking;
            const priceVar = item.price;
            const imgKey = (item.photo);
            //variables for number of stars required
            let starCount = '';
            let halfstar = '';
            let stars = parseInt(hotelrating);
            let starFloat = parseFloat(hotelrating);
            let halfStarCheck = starFloat - stars;
            var ratings = 0;

            //if-else to handle Uncaught TypeError: Cannot Read property 'images' of undefined
            if (imgKey === undefined) {
                //will return images undefined
                return 'property of images undefined ';

            } else {

                //image source taken from api data
                let imgURL = "";
                imgURL += imgKey.images.original.url;


                //do-while method to increment the star image to match the rating data
                do {
                    starCount += ' <i class="fas fa-star"></i> ';
                    ratings++;
                }
                while (ratings < stars);
                //if statement to check for any rating with 0.5
                if (halfStarCheck === 0.5) {
                    halfstar = '<i class="fas fa-star-half-alt"></i> ';

                    //htmlcard included with api data
                    elDescription.innerHTML += '<div class="col-md-6 mb-1"><div class="card"><div class="card-body px-0 pb-0"><img src=' + imgURL + ' class="card-img-top" alt="review image"><h5 class="card-title px-2">' + hotelName + '</h5><h6 class="card-subtitle mb-2 px-2 text-muted">' + hotelrating + starCount + halfstar + '</h6><p class="card-text px-2 hotelranking" id="description">' + hotelranking + '</p><div class="card-footer"><a type="button" class="btn btn-sm btn-outline-secondary readMore" id="readMore" href="https://www.tripadvisor.co.uk/Hotels"  target="_blank"> Price Range: ' + priceVar + '</a><small class="text-muted ml-4">Reviews: ' + reviews + '</small></div></div></div></div>';

                } else if (hotelrating === undefined || hotelranking === "") {


                    //htmlcard included with api data
                    elDescription.innerHTML += '<div class="col-md-6 mb-1"><div class="card"><div class="card-body px-0 pb-0"><img src=' + imgURL + ' class="card-img-top" alt="review image"><h5 class="card-title px-2">' + hotelName + '</h5><h6 class="card-subtitle mb-2 px-2 text-muted">No Ratings Yet <i class="far fa-star"></i></h6><p class="card-text px-2 hotelranking" id="description">' + hotelranking + '</p><div class="card-footer"><a type="button" class="btn btn-sm btn-outline-secondary" id="writeReview" href=' + priceVar + '   target="_blank"> Post Review </a><small class="text-muted ml-4">Reviews: ' + reviews + '</small></div></div></div></div>';
                } else {


                    //htmlcard included with api data
                    elDescription.innerHTML += '<div class="col-md-6 mb-1"><div class="card"><div class="card-body px-0 pb-0"><img src=' + imgURL + ' class="card-img-top" alt="review image"><h5 class="card-title px-2">' + hotelName + '</h5><h6 class="card-subtitle mb-2 px-2 text-muted">' + hotelrating + starCount + '</h6><p class="card-text px-2 hotelranking" id="description">' + hotelranking + '</p><div class="card-footer"><a type="button" class="btn btn-sm btn-outline-secondary readMore" id="readMore" href="https://www.tripadvisor.co.uk/Hotels"  target="_blank"> Price Range: ' + priceVar + '</a><small class="text-muted ml-4">Reviews: ' + reviews + '</small></div></div></div></div>';


                }
            }
        });

    });
}

//function activated on click event to load new data for melbourne australia location
function melbourne() {
    function getData(type, cb) {
        var data = null;
        var xhr = new XMLHttpRequest();
        xhr.withCredentials = false;

        xhr.addEventListener("readystatechange", function() {
                if (this.readyState === this.DONE) {
                    if (this.readyState == 4 && this.status == 200) {
                        cb(JSON.parse(this.responseText));
                    }
                }
            })
            //the api url value is set to melbourne using location ID
            //baseURL = "https://tripadvisor1.p.rapidapi.com/attractions/list?lang=en-GB¤cy=GBP&sort=recommended&lunit=km&limit=30&bookable_first=false&subcategory=36&location_id=255100";
        baseURL = "https://tripadvisor1.p.rapidapi.com/hotels/list?offset=0¤cy=gbp&limit=10&order=asc&lang=en_GB&sort=recommended&nights=2&location_id=255100&adults=1&rooms=1";
        xhr.open("GET", baseURL);
        xhr.setRequestHeader("x-rapidapi-host", "tripadvisor1.p.rapidapi.com");
        xhr.setRequestHeader("x-rapidapi-key", "5f797cf3f4msh2839c1b22553f25p1bf0b4jsn595eced613a6");
        xhr.send(data);
    }

    //html element where api data will be displayed 
    var elDescription = document.getElementById("holder");
    elDescription.innerHTML = "";

    //function to get api data 
    getData('ranking', function(data) {
        console.dir(data);
        unpacked = data.data;

        //function to unpack api data 
        unpacked.forEach(function(item) {
            //constants assigned dat from api
            const reviews = item.num_reviews;
            const hotelName = item.name;
            const hotelrating = item.rating;
            const hotelranking = item.ranking;
            const priceVar = item.price;
            const imgKey = (item.photo);
            //variables for number of stars required
            let starCount = '';
            let halfstar = '';
            let stars = parseInt(hotelrating);
            let starFloat = parseFloat(hotelrating);
            let halfStarCheck = starFloat - stars;
            var ratings = 0;

            //if-else to handle Uncaught TypeError: Cannot Read property 'images' of undefined
            if (imgKey === undefined) {
                //will return images undefined
                return 'property of images undefined ';

            } else {

                //image source taken from api data
                let imgURL = "";
                imgURL += imgKey.images.original.url;

                //do-while method to increment the star image to match the rating data
                do {
                    starCount += ' <i class="fas fa-star"></i> ';
                    ratings++;
                }
                while (ratings < stars);
                //if statement to check for any rating with 0.5
                if (halfStarCheck === 0.5) {
                    halfstar = '<i class="fas fa-star-half-alt"></i> ';

                    //htmlcard included with api data
                    elDescription.innerHTML += '<div class="col-md-6 mb-1"><div class="card"><div class="card-body px-0 pb-0"><img src=' + imgURL + ' class="card-img-top" alt="review image"><h5 class="card-title px-2">' + hotelName + '</h5><h6 class="card-subtitle mb-2 px-2 text-muted">' + hotelrating + starCount + halfstar + '</h6><p class="card-text px-2 hotelranking" id="description">' + hotelranking + '</p><div class="card-footer"><a type="button" class="btn btn-sm btn-outline-secondary readMore" id="readMore" href="https://www.tripadvisor.co.uk/Hotels"  target="_blank"> Price Range: ' + priceVar + '</a><small class="text-muted ml-4">Reviews: ' + reviews + '</small></div></div></div></div>';

                } else if (hotelrating === undefined || hotelranking === "") {


                    //htmlcard included with api data
                    elDescription.innerHTML += '<div class="col-md-6 mb-1"><div class="card"><div class="card-body px-0 pb-0"><img src=' + imgURL + ' class="card-img-top" alt="review image"><h5 class="card-title px-2">' + hotelName + '</h5><h6 class="card-subtitle mb-2 px-2 text-muted">No Ratings Yet <i class="far fa-star"></i></h6><p class="card-text px-2 hotelranking" id="description">' + hotelranking + '</p><div class="card-footer"><a type="button" class="btn btn-sm btn-outline-secondary" id="writeReview" href=' + priceVar + '   target="_blank"> Post Review </a><small class="text-muted ml-4">Reviews: ' + reviews + '</small></div></div></div></div>';
                } else {


                    //htmlcard included with api data
                    elDescription.innerHTML += '<div class="col-md-6 mb-1"><div class="card"><div class="card-body px-0 pb-0"><img src=' + imgURL + ' class="card-img-top" alt="review image"><h5 class="card-title px-2">' + hotelName + '</h5><h6 class="card-subtitle mb-2 px-2 text-muted">' + hotelrating + starCount + '</h6><p class="card-text px-2 hotelranking" id="description">' + hotelranking + '</p><div class="card-footer"><a type="button" class="btn btn-sm btn-outline-secondary readMore" id="readMore" href="https://www.tripadvisor.co.uk/Hotels"  target="_blank"> Price Range: ' + priceVar + '</a><small class="text-muted ml-4">Reviews: ' + reviews + '</small></div></div></div></div>';


                }
            }
        });

    });
}

//function activated on click event to load new data for montegobay jamaica location
function montegobay() {
    function getData(type, cb) {
        var data = null;
        var xhr = new XMLHttpRequest();
        xhr.withCredentials = false;
        xhr.addEventListener("readystatechange", function() {
                if (this.readyState === this.DONE) {
                    if (this.readyState == 4 && this.status == 200) {
                        cb(JSON.parse(this.responseText));
                    }
                }
            })
            //the api url value is set to montegobay using location ID
            //baseURL = "https://tripadvisor1.p.rapidapi.com/attractions/list?lang=en-GB¤cy=GBP&sort=recommended&lunit=km&limit=30&bookable_first=false&subcategory=36&location_id=147311";
        baseURL = "https://tripadvisor1.p.rapidapi.com/hotels/list?offset=0¤cy=gbp&limit=10&order=asc&lang=en_GB&sort=recommended&nights=2&location_id=147311&adults=1&rooms=1";
        xhr.open("GET", baseURL);
        xhr.setRequestHeader("x-rapidapi-host", "tripadvisor1.p.rapidapi.com");
        xhr.setRequestHeader("x-rapidapi-key", "5f797cf3f4msh2839c1b22553f25p1bf0b4jsn595eced613a6");
        xhr.send(data);
    }


    //html element where api data will be displayed 
    var elDescription = document.getElementById("holder");
    elDescription.innerHTML = "";

    //function to get api data 
    getData('ranking', function(data) {
        console.dir(data);
        unpacked = data.data;


        //function to unpack api data 
        unpacked.forEach(function(item) {
            //constants assigned dat from api
            const reviews = item.num_reviews;
            const hotelName = item.name;
            const hotelrating = item.rating;
            const hotelranking = item.ranking;
            const priceVar = item.price;
            const imgKey = (item.photo);
            //variables for number of stars required
            let starCount = '';
            let halfstar = '';
            let stars = parseInt(hotelrating);
            let starFloat = parseFloat(hotelrating);
            let halfStarCheck = starFloat - stars;
            var ratings = 0;


            //if-else to handle Uncaught TypeError: Cannot Read property 'images' of undefined
            if (imgKey === undefined) {
                //will return images undefined
                return 'property of images undefined ';

            } else {

                //image source taken from api data
                let imgURL = "";
                imgURL += imgKey.images.original.url;

                //do-while method to increment the star image to match the rating data
                do {
                    starCount += ' <i class="fas fa-star"></i> ';
                    ratings++;
                }
                while (ratings < stars);
                //if statement to check for any rating with 0.5
                if (halfStarCheck === 0.5) {
                    halfstar = '<i class="fas fa-star-half-alt"></i> ';

                    //htmlcard included with api data
                    elDescription.innerHTML += '<div class="col-md-6 mb-1"><div class="card"><div class="card-body px-0 pb-0"><img src=' + imgURL + ' class="card-img-top" alt="review image"><h5 class="card-title px-2">' + hotelName + '</h5><h6 class="card-subtitle mb-2 px-2 text-muted">' + hotelrating + starCount + halfstar + '</h6><p class="card-text px-2 hotelranking" id="description">' + hotelranking + '</p><div class="card-footer"><a type="button" class="btn btn-sm btn-outline-secondary readMore" id="readMore" href="https://www.tripadvisor.co.uk/Hotels"  target="_blank"> Price Range: ' + priceVar + '</a><small class="text-muted ml-4">Reviews: ' + reviews + '</small></div></div></div></div>';

                } else if (hotelrating === undefined || hotelranking === "") {


                    //htmlcard included with api data
                    elDescription.innerHTML += '<div class="col-md-6 mb-1"><div class="card"><div class="card-body px-0 pb-0"><img src=' + imgURL + ' class="card-img-top" alt="review image"><h5 class="card-title px-2">' + hotelName + '</h5><h6 class="card-subtitle mb-2 px-2 text-muted">No Ratings Yet <i class="far fa-star"></i></h6><p class="card-text px-2 hotelranking" id="description">' + hotelranking + '</p><div class="card-footer"><a type="button" class="btn btn-sm btn-outline-secondary" id="writeReview" href=' + priceVar + '   target="_blank"> Post Review </a><small class="text-muted ml-4">Reviews: ' + reviews + '</small></div></div></div></div>';
                } else {


                    //htmlcard included with api data
                    elDescription.innerHTML += '<div class="col-md-6 mb-1"><div class="card"><div class="card-body px-0 pb-0"><img src=' + imgURL + ' class="card-img-top" alt="review image"><h5 class="card-title px-2">' + hotelName + '</h5><h6 class="card-subtitle mb-2 px-2 text-muted">' + hotelrating + starCount + '</h6><p class="card-text px-2 hotelranking" id="description">' + hotelranking + '</p><div class="card-footer"><a type="button" class="btn btn-sm btn-outline-secondary readMore" id="readMore" href="https://www.tripadvisor.co.uk/Hotels"  target="_blank"> Price Range: ' + priceVar + '</a><small class="text-muted ml-4">Reviews: ' + reviews + '</small></div></div></div></div>';


                }
            }
        });

    });
}