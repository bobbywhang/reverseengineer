var source = $("#country-challenge").html(); 
var template = Handlebars.compile(source); 

var data = { 
    country: [ { 
        countryCode: "BY",
        countryName: "Belarus",
        population: 9685000,
        english:"no"
    }, {
        countryCode: "BZ",
        countryName: "Belize",
        population: 314522,
        english:"yes"
   }, {
       
        countryCode: "CA",
        countryName: "Canada",
        population: 33679000,
        english:"no"        
    }, {
        
        countryCode: "CC",
        countryName: "Cocos [Keeling] Islands",
        population: 628,
        english:"no"
    } ]
}; 



$('body').append(template(data));