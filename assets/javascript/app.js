function createButton(name) {
    let newButton = $(`<button class="btn btn-character" data-name="${name.toLowerCase()}">${name}</button>`);
    $('#button-corral').append(newButton);
    log(newButton);
};

let startButtonArray = ["New York", "Chicago", "Los Angeles", "Paris", "London", "Dubai", "Hong Kong", "Sydney", "Shanghai"];

$(document).on("click", '.btn-character', function () {

    $('#gif-corral').empty();
    $('#gif-corral').append(`<div id="input" class="footer text-center"></div>`);
    createInput();
    let queryName = $(this).attr("data-name");
    let queryUrl = "https://api.giphy.com/v1/gifs/search?q=" + queryName + "+skylines&limit=10&api_key=SXhYMP6NZ2CRShj0Qb3Qs5p6x0fj984Q";
