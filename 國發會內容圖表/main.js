//回到頂端
function Back_top() {

    var offset = 100,
        offset_opacity = 1200,
        scroll_top_duration = 700,
        $back_to_top = $('.cd-top');
    $(window).scroll(function () {
        ($(this).scrollTop() > offset) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
        if ($(this).scrollTop() > offset_opacity) {
            $back_to_top.addClass('cd-fade-out');
        }
    });
    $back_to_top.on('click',
        function (event) {
            event.preventDefault();
            $('body,html').animate({
                scrollTop: 0,
            },
                scroll_top_duration);
        });
}

//手機選單
function mobile_menu() {
    var winWidth = $(window).width();

    //漢堡線
    $("#mobile_menu_labIcon").click(function () {
        $(".nav-bar").toggleClass("on");
        $(".portfolio-filter.isotope-filter.pull-center").toggleClass("on");
        $("#greybg").toggle();
        $('.hamburger').toggleClass('is-active');

    })

    $("#greybg").click(function () {

        $(this).toggle();
        $(".portfolio-filter.isotope-filter.pull-center").removeClass("on");
        $('.hamburger').removeClass('is-active');
    })

}


//tab 切换
function navtab() {

    $(".J-nav-tab").each(function () {
        var tthis = $(this)
        $(this).find("a").click(function () {
            var $this = $(this);
            var $obj = $this.attr("href");
            tthis.find("a").removeClass("on")
            $this.addClass("on");
            $($obj).show().siblings().hide()
            return false;
        })
        $(this).find("a").focus(function () {
            var $this = $(this);
            var $obj = $this.attr("href");
            tthis.find("a").removeClass("on")
            $this.addClass("on");
            $($obj).show().siblings().hide()
            return false;
        })
    })
}


//header置頂
function headerTop() {
    $(window).scroll(function () {
        var winWidth = $(window).width(),
            topWindow = $(window).scrollTop();
        if (topWindow > 0 && winWidth > 1340) {
            $('header').addClass("small animated fadeInDown");
        } else {
            $('header').removeClass("small animated fadeInDown ");
        }
    });

}

var winWidth = $(window).width();
if (winWidth < 1340) {
    $(".submenu li.nsdnmenu ").click(function () {
        $(this).toggleClass("on");
        $(this).children(".hasChild").stop().slideToggle();

        $(this).siblings(".submenu li.nsdnmenu").removeClass("on").children(".hasChild").stop().slideUp();
    });
}
//手機次選單
function MobileSubmenu() {
    var winWidth = $(window).width();
    if (winWidth < 1340) {

        $("#greybg").css("display", "none");
        $(".portfolio-filter.isotope-filter.pull-center,.hamburger").removeClass("on");
        $('.hamburger').removeClass('is-active');

    } else {

        $("#greybg").css("display", "none");

    }
}

//最新消息切換
function tabSet() {
    var _window = $(window),
        ww = _window.width(),
        wh = _window.height(),
        _body = $('body'),
        _header = $('.header'),
        _menu = _header.find('.menu'),
        hh = _header.outerHeight(true),

        wwNormal = 1000,
        wwMedium = 800,
        wwSmall = 600,
        wwxs = 420;
    $('.tabs').each(function () {

        var _tab = $(this),
            _tabItem = _tab.find('.tabItem'),
            _tabItemA = _tabItem.children('a'),
            _tabContent = _tab.find('.tabContent'),
            tabwidth = _tab.width(),
            tabItemHeight = _tabItem.outerHeight(),
            tabContentHeight = _tab.find('.active').next().innerHeight();
        tabItemLength = _tabItem.length,
            tabItemWidth = tabwidth / tabItemLength;

        _tab.find('.active').next('.tabContent').show();



        _tabItemA.focus(tabs);
        _tabItemA.click(tabs);

        function tabs(e) {
            var _tabItemNow = $(this).parent();

            _tabItem.removeClass('active');
            _tabItemNow.addClass('active');

            if (ww <= wwSmall) {
                if (!$(this).parents('.tabs').hasClass('albumType4')) { // .albumType4.tab 嚙踢���唐丰�嚙賡鑘嚙�
                    _tabItem.not('.active').next().slideUp();
                    _tabItemNow.next().slideDown();

                }
            } else {
                _tabItem.not('.active').next().hide();
                _tabItemNow.next().show();
                tabContentHeight = _tabItemNow.next().innerHeight();
                _tab.height(tabContentHeight + tabItemHeight);
            }
            e.preventDefault();
        }
    });
}


//相關消息
function RelatedLinks() {


    var swiper = new Swiper('.swiper-container2', {
        slidesPerView: 5,
        loop: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        // init: false,


        breakpoints: {

            1340: {
                slidesPerView: 5,
            },
            1240: {
                slidesPerView: 4,
            },
            968: {
                slidesPerView: 3,
            },
            760: {
                slidesPerView: 2,
            },
            500: {
                slidesPerView: 1,
            }
        }
    });

}
//圖片展開
function imgscript() {
    $(".disB").click(function () {

        $(".noteZone").slideToggle();
    })

}


//tab切換
//大於0(第二個之後的.tab_content li)都隱藏
$(".goal-edit:gt(0),.year-edit:gt(0),.immediate-edit:gt(0)").hide();
$(".img_tab").on('  focusin',  function (e) {
    //把所有的.tab_content li隱藏
    $(".goal-edit").hide();
    $(this).addClass("section");
    $(this).siblings(".img_tab").removeClass("section")
    //指定跟.tabs li索引值相同的.tab_content li淡入
    $(".goal-edit").eq($(this).index()).stop().fadeIn();
});
$(".year_tab").on('  focusin',  function (e) {
    //把所有的.tab_content li隱藏
    $(".year-edit").hide();
    $(this).addClass("section");
    $(this).siblings(".year_tab").removeClass("section")
    //指定跟.tabs li索引值相同的.tab_content li淡入
    $(".year-edit").eq($(this).index()).stop().fadeIn();
});
$(".immediate_tab").on('  focusin',  function (e) {
    //把所有的.tab_content li隱藏
    $(".immediate-edit").hide();
    $(this).addClass("section");
    $(this).siblings(".immediate_tab").removeClass("section")
    //指定跟.tabs li索引值相同的.tab_content li淡入
    $(".immediate-edit").eq($(this).index()).stop().fadeIn();
});
$(function () {
    Back_top(); //回到頂端
    navtab(); //tab 切换
    mobile_menu(); //手機選單
    headerTop(); //header置頂
    MobileSubmenu(); //手機次選單
    tabSet(); //最新消息切換
    RelatedLinks(); //相關連結  
    imgscript(); //圖片展開

});


// $(window).on("resize", function() {
//     $(window).on("load", function() {
//         $('#bacc').fadeOut(200); //loading
//     });
// });