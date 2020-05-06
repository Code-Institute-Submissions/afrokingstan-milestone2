//function activated on click event to load new data for cape town southafrica location
$(document).ready(function() {

    //function for changing button class on click event to show active selection
    $("#myFeaturedHol1").click(function() {
        $("#myFeaturedHol1").toggleClass("btn-secondary", false);
        $("#myFeaturedHol1").toggleClass("btn-primary", true);
        $("#myFeaturedHol2").toggleClass("btn-secondary", true);
        $("#myFeaturedHol2").toggleClass("btn-primary", false);
        $("#myFeaturedHol3").toggleClass("btn-secondary", true);
        $("#myFeaturedHol3").toggleClass("btn-primary", false);


    });
    $("#myFeaturedHol2").click(function() {
        $("#myFeaturedHol1").toggleClass("btn-secondary", true);
        $("#myFeaturedHol1").toggleClass("btn-primary", false);
        $("#myFeaturedHol2").toggleClass("btn-secondary", false);
        $("#myFeaturedHol2").toggleClass("btn-primary", true);
        $("#myFeaturedHol3").toggleClass("btn-secondary", true);
        $("#myFeaturedHol3").toggleClass("btn-primary", false);

    });
    $("#myFeaturedHol3").click(function() {
        $("#myFeaturedHol1").toggleClass("btn-secondary", true);
        $("#myFeaturedHol1").toggleClass("btn-primary", false);
        $("#myFeaturedHol2").toggleClass("btn-secondary", true);
        $("#myFeaturedHol2").toggleClass("btn-primary", false);
        $("#myFeaturedHol3").toggleClass("btn-secondary", false);
        $("#myFeaturedHol3").toggleClass("btn-primary", true);
    });
    //end of function for changing button class on click event to show active selection


});