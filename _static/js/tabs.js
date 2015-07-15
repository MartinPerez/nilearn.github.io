var OSName=2;
if (navigator.appVersion.indexOf("Win")!=-1) OSName=1;
if (navigator.appVersion.indexOf("Mac")!=-1) OSName=2;
if (navigator.appVersion.indexOf("X11")!=-1) OSName=3;
if (navigator.appVersion.indexOf("Linux")!=-1) OSName=3;

$(document).ready(function(){
    $("ul#tabs li.active").removeClass("active");
    $("ul#tab li.active").removeClass("active");
    $("ul#tabs li:nth-child("+OSName+")").addClass("active");
    $("ul#tab li:nth-child("+OSName+")").addClass("active");
});

$(document).ready(function(){
    $("ul#tabs li").click(function(e){
        if (!$(this).hasClass("active")) {
            var tabNum = $(this).index();
            var nthChild = tabNum+1;
            $("ul#tabs li.active").removeClass("active");
            $(this).addClass("active");
            $("ul#tab li.active").removeClass("active");
            $("ul#tab li:nth-child("+nthChild+")").addClass("active");
        }
    });
});
