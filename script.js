// Q1
var studentName = [];

// Q 2
var stdName = new Array();

// q3
var strarr = ['name', 'name1', 'name2', 'name3']

// Q 4
var numarr = [1, 2, 3, 4, 5]

// Q5
var boolarr = [true, false]

//Q6
var mixarr = ['string array', 2, true];

// Q 7
var mobileNetworks = ['ufone', 'jazz', 'telenor', 'zong', 'warid']

//Q 8
var qualificationPakistan = ['SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'M.PHIL', 'PHD']
qualificationPakistan.forEach(function (element) {
    document.write(element + '<br>')
})

// Q9
var topMovies = []
topMovies.push('avengers')
topMovies.push('inside out')
topMovies.push('jurassic world')
topMovies.push('spectre')
document.write(`<h1> top movies </h1> 1- ${topMovies[0]} </br> 2- ${topMovies[1]} </br> 3- ${topMovies[2]} </br> 4- ${topMovies[3]} </br> <h1>Length of the array : ${topMovies.length} </br>`);

// Q10
var cars = ['Audi', 'BMW', 'Lexus', 'Honda'];
document.write(`<h2>${cars}</h2> <h2>first index of the array : ${cars.indexOf('Audi')} </h2> <h2>car at first index : ${cars[0]}</h2> <h2>last index of array : ${cars.lastIndexOf('Honda')}</h2> <h2>car at last index : ${cars[3]}</h2>`)