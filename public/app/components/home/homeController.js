//Create the controller for home page
angular
    .module('app')
    .controller('homeController', homeController);

// homeController function for home page functionality
function homeController($timeout,$location){
    var home = this;
    console.log("NIce");
    home.records = [
        {"Name" : "ABCD", "Rank" : 20, "color": "orange"},
        {"Name" : "Review Ratings", "Rank" : 34, "color": "darkblue" },
        {"Name" : "Recommended %", "Rank" : 4.6, "color": "blue"}, 
        {"Name" : "TripAdvisor Rank","Rank" : 99, "color": "green-dark"}
    ];
    home.guests = [
        {"Name":"A Altarrah", "Description":"Deluxe Double", "Hotel":"Safat, KW"},
        {"Name":"A Altarrah", "Description":"Deluxe Double", "Hotel":"Safat, KW"},
        {"Name":"A Altarrah", "Description":"Deluxe Double", "Hotel":"Safat, KW"},
        {"Name":"A Altarrah", "Description":"Deluxe Double", "Hotel":"Safat, KW"},
        {"Name":"A Altarrah", "Description":"Deluxe Double", "Hotel":"Safat, KW"}
    ];
    home.revenue = [
        {"Day": "30 Days", "Rank":"€,6784"},
        {"Day": "30 Days", "Rank":"€,6784"},
        {"Day": "30 Days", "Rank":"€,6784"},
        {"Day": "30 Days", "Rank":"€,6784"}
    ];
};