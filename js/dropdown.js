function mostraMenu() {
    $('.dropdown-mobile').toggleClass("invisivel");
    $('.header').toggleClass("invisivel");
    
}

$('.humburger').click(function() {
    mostraMenu();
});
