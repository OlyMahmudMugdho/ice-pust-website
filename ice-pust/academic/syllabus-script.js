$(document).ready(function () {
    $(".not-hidden").click(function () {
        $(".u li:not(.dropdown-content)").toggleClass("links");
    });
});
