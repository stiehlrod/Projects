console.log($)

console.log("I'm ready");

$.get('https://quiet-bayou-99554.herokuapp.com/api/v1/contacts', function(butts) {
console.log(butts.data[1].name)
$('.name').text(butts.data[1].name)
$('phone').text(butts.data[1].phone)
$('.image-holder').attr('src',)
)}
