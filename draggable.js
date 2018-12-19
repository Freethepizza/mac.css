let principal = ".dotted";
$(function () {
    $("#draggable").draggable({
        containment: principal,
    }).resizable({
        containment: principal,
        minWidth: 150,
        minHeight: 150,
    });

});

