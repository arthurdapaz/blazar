function blink() {
    $("#slogan").fadeTo(100, 0).fadeTo(200, 1.0);
    setTimeout(arguments.callee, 1000);
}
var kidding = 0;
var donated = false;
$.fn.draggable = function () {
    var offset = null;
    var start = function (e) {
        var orig = e.originalEvent;
        var pos = $(this).position();
        offset = {
            x: orig.changedTouches[0].pageX - pos.left,
            y: orig.changedTouches[0].pageY - pos.top
        };
    };
    var moveMe = function (e) {
        e.preventDefault();
        var orig = e.originalEvent;
        $(this).css({
            top: orig.changedTouches[0].pageY - offset.y,
            left: orig.changedTouches[0].pageX - offset.x
        });
    };
    var ask = function (e) {
        kidding++;
        if (donated == false && kidding >= 3) {
            if (confirm("I gave you this little fun, so, now, can you donate? Pleaseee?"))
                window.location = "http://is.gd/blazar";
            else {
                $("#donate").remove();
                $("#slogan").html("You can still touch on the Donate button!!");
                blink();
            }
        }
    }
    this.bind("touchstart", start);
    this.bind("touchmove", moveMe);
    this.bind("touchend", ask);
};
(function ($) {
    $.fn.drags = function (opt) {

        opt = $.extend({
            handle: "",
            cursor: "move"
        }, opt);

        if (opt.handle === "") {
            var $el = this;
        } else {
            var $el = this.find(opt.handle);
        }

        return $el.css('cursor', opt.cursor).on("mousedown", function (e) {
            if (opt.handle === "") {
                var $drag = $(this).addClass('draggable');
            } else {
                var $drag = $(this).addClass('active-handle').parent().addClass('draggable');
            }
            var z_idx = $drag.css('z-index'),
                drg_h = $drag.outerHeight(),
                drg_w = $drag.outerWidth(),
                pos_y = $drag.offset().top + drg_h - e.pageY,
                pos_x = $drag.offset().left + drg_w - e.pageX;
            $drag.css('z-index', 1000).parents().on("mousemove", function (e) {
                $('.draggable').offset({
                    top: e.pageY + pos_y - drg_h,
                    left: e.pageX + pos_x - drg_w
                }).on("mouseup", function () {
                    $(this).removeClass('draggable').css('z-index', z_idx);
                });
            });
            e.preventDefault();
        }).on("mouseup", function (e) {
            if (opt.handle === "") {
                $(this).removeClass('draggable');
            } else {
                $(this).removeClass('active-handle').parent().removeClass('draggable');
            }
        });

    }
})(jQuery);

$(".draggable").draggable();
$(".draggable").drags();