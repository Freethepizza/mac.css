let principal = ".dotted";





$(function () {
    $('[id^="drag-"]').draggable({
        containment: principal,
    }).resizable({
        containment: principal,
        minWidth: 150,
        minHeight: 150,
    });
});





