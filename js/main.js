// function statement requires a name
// Uncaught SyntaxError: Unexpected token (
//function (){ }();

// syntax error
// Uncaught SyntaxError: Unexpected token )
//function foo(){ }();

//var nashJs = {};
//
var getModal = function() {

    $.get('templates/modal.html', function(markup) {
        $('body').append(markup);
    });

}();

var foo;
var bar = null;

console.log(foo, typeof foo, bar, typeof bar);

//( function (alertMsg) {;
//    $.get('templates/modal.html', function(markup) {
//        $('body').append(markup);
//    });
//}() );

//$(window).scroll(function() {
//    if ($('#modal').length < 1) {
//        nashJs.getModal();
//    }
//});

$('#clickYes').click(function() {
    console.log('i have been clicked');
});

$('body').on('click', '#clickYes', function() {
    console.log('guess what joker');
});
