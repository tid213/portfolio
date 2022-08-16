function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('li>a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('li>a.active').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
    }
    $(document).ready(function () {
        $(document).on("scroll", onScroll);
    });
