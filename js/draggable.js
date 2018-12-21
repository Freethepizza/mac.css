let principal = ".dotted";





$(function () {
    $('[id^="drag-"]').draggable({
        containment: principal,
        handle: '#handler',
    }).resizable({
        containment: principal,
        minWidth: 150,
        minHeight: 150,
    });
});


$(document).ready(function() {
    $('[id^="drag-"').draggable({stack: "div",distance:0,})
    .resizable({stack: "div"});

});



