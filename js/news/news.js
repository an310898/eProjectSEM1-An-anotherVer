$(window).on('load', function () {
    $(".loader").fadeOut();
    $("#preloder").delay(900).fadeOut("slow");
});

function selectBb(elem) {
    var a = document.querySelectorAll("#bigbang-theory .pagination-item button");
    // console.log(a)
    for (i = 0; i < a.length; i++) {
        a[i].classList.remove('selected')      
    }
    elem.classList.add('selected');
}

function selectSl(elem) {
    var a = document.querySelectorAll("#solar-system .pagination-item button");

    
    for (i = 0; i < a.length; i++) {
        a[i].classList.remove('selected')      
    }
    elem.classList.add('selected');
}
function selectBh(elem) {
    var a = document.querySelectorAll("#black-holes .pagination-item button");
    
    for (i = 0; i < a.length; i++) {
        a[i].classList.remove('selected')      
    }
    elem.classList.add('selected');
}
function selectSf(elem) {
    var a = document.querySelectorAll("#space-flight .pagination-item button");
    
    for (i = 0; i < a.length; i++) {
        a[i].classList.remove('selected')      
    }
    elem.classList.add('selected');
}
function selectGl(elem) {
    var a = document.querySelectorAll("#galaxies .pagination-item button");
    
    for (i = 0; i < a.length; i++) {
        a[i].classList.remove('selected')      
    }
    elem.classList.add('selected');
}
function selectExo(elem) {
    var a = document.querySelectorAll("#exoplanets .pagination-item button");
    
    for (i = 0; i < a.length; i++) {
        a[i].classList.remove('selected')      
    }
    elem.classList.add('selected');
}
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
console.log(queryString)
// const titleUrl = urlParams.get("id");
// console.log(titleUrl);