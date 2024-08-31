(function ($) {
    "use strict";

    /*=============================================
	= Preloader
    ===============================================*/
    function preloader() {
        $("#preloader").delay(0).fadeOut();
    }

    /*=============================================
	= Swiper Slider
    ===============================================*/
    function thmSwiperInit() {
        const swiperElm = document.querySelectorAll(".thm-swiper__slider");
        swiperElm.forEach(function (swiperelm) {
            const swiperOptions = JSON.parse(swiperelm.dataset.swiperOptions);
            let thmSwiperSlider = new Swiper(swiperelm, swiperOptions);
        });
    }

    /*=============================================
	= Banner Slider
    ===============================================*/
    function BannerSliderInit() {
        if ($(".banner-slider-one")) {
          $(".banner-slider-one").each(function () {
            var $this = $(this);
            var $pagination = $this.find('.swiper-pagination')[0];
            var $next = $this.find('.swiper-button-next')[0];
            var $prev = $this.find('.swiper-button-prev')[0];
            new Swiper( $this[0], {
              slidesPerView: 1,
              loop: true,
              effect: "fade",
              spaceBetween: 24,
              slideToClickedSlide: true,
              autoplay: {
                delay: 5000,
                disableOnInteraction: false,
              },
              speed: 800,
              pagination: {
                el: $pagination,
                clickable: true,
                type: 'bullets',
              },
              navigation: {
                nextEl: $next,
                prevEl: $prev,
              },
            });
          });
        }
    }

    /*=============================================
	= Testimonial Slider
    ===============================================*/
    function TestimonialSwiperInit() {
        if ($(".testimonial-carousel-one")) {
          $(".testimonial-carousel-one").each(function() {
            var $this = $(this);
            new Swiper( $this[0], {
              slidesPerView: 2,
              loop: true,
              spaceBetween: 30,
              autoplay: {
                delay: 5000,
                disableOnInteraction: false,
              },
              speed: 2000,
              pagination: {
                el: ".swiper-pagination-dots-line",
                clickable: true,
                type: 'bullets',
              },
              navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              },
              breakpoints: {
                0: {
                  spaceBetween: 30,
                  slidesPerView: 1
                },
                375: {
                  spaceBetween: 30,
                  slidesPerView: 1
                },
                575: {
                  spaceBetween: 30,
                  slidesPerView: 1
                },
                768: {
                  spaceBetween: 30,
                  slidesPerView: 1
                },
                992: {
                  spaceBetween: 30,
                  slidesPerView: 2
                },
                1200: {
                  spaceBetween: 30,
                  slidesPerView: 2
                }
              },
            });
          });
        }
    }

    /*=============================================
	= Testimonial Slider Two
    ===============================================*/
    function TestimonialSwiperInit2() {
        if ($(".testimonial-carousel-two")) {
          $(".testimonial-carousel-two").each(function() {
            var $this = $(this);
            new Swiper( $this[0], {
              slidesPerView: 2,
              loop: true,
              spaceBetween: 30,
              autoplay: {
                delay: 5000,
                disableOnInteraction: false,
              },
              speed: 2000,
              pagination: {
                el: ".swiper-pagination-dots-line",
                clickable: true,
                type: 'bullets',
              },
              navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              },
              breakpoints: {
                0: {
                  spaceBetween: 30,
                  slidesPerView: 1
                },
                375: {
                  spaceBetween: 30,
                  slidesPerView: 1
                },
                575: {
                  spaceBetween: 30,
                  slidesPerView: 1
                },
                768: {
                  spaceBetween: 30,
                  slidesPerView: 2
                },
                992: {
                  spaceBetween: 30,
                  slidesPerView: 2
                },
                1200: {
                  spaceBetween: 30,
                  slidesPerView: 3
                }
              },
            });
          });
        }
    }

    /*=============================================
	= Team Slider
    ===============================================*/
    function TeamCarouselSwiperInit() {
        if ($(".team-carousel-slider")) {
          $(".team-carousel-slider").each(function() {
            var $this = $(this);
            new Swiper( $this[0], {
              slidesPerView: 2,
              loop: false,
              spaceBetween: 30,
              autoplay: {
                delay: 5000,
                disableOnInteraction: false,
              },
              speed: 2000,
              pagination: {
                el: ".swiper-pagination",
                clickable: true,
                type: 'bullets',
              },
              navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              },
              breakpoints: {
                0: {
                  spaceBetween: 0,
                  slidesPerView: 1
                },
                375: {
                  spaceBetween: 0,
                  slidesPerView: 1
                },
                575: {
                  spaceBetween: 0,
                  slidesPerView: 1
                },
                768: {
                  spaceBetween: 30,
                  slidesPerView: 2
                },
                992: {
                  spaceBetween: 30,
                  slidesPerView: 3
                },
                1200: {
                  spaceBetween: 30,
                  slidesPerView: 3
                }
              },
            });
          });
        }
    }

    $(window).on("load", function () {
        preloader();
        wowAnimation();
        BannerSliderInit();
        TestimonialSwiperInit();
        TestimonialSwiperInit2();
        TeamCarouselSwiperInit();
        projectMasonaryLayout();
        tg_title_animation();
        thmSwiperInit();
    });

    /*=============================================
	= Mobile Menu
    =============================================*/
    //SubMenu Dropdown Toggle
    if ($(".menu-area li.menu-item-has-children ul").length) {
        $(".menu-area .navigation li.menu-item-has-children").append(
            '<div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>'
        );
    }

    //Mobile Nav Hide Show
    if ($(".mobile-menu").length) {
        var mobileMenuContent = $(".menu-area .main-menu").html();
        $(".mobile-menu .menu-box .menu-outer").append(mobileMenuContent);

        //Dropdown Button
        $(".mobile-menu li.menu-item-has-children .dropdown-btn").on("click", function () {
            $(this).toggleClass("open");
            $(this).prev("ul").slideToggle(300);
        });
        //Menu Toggle Btn
        $(".mobile-nav-toggler").on("click", function () {
            $("body").addClass("mobile-menu-visible");
        });

        //Menu Toggle Btn
        $(".menu-backdrop, .mobile-menu .close-btn").on("click", function () {
            $("body").removeClass("mobile-menu-visible");
        });
    }

    /*=============================================
	= Menu sticky & Scroll to top
    =============================================*/
    $(window).on("scroll", function () {
        var scroll = $(window).scrollTop();
        if (scroll < 245) {
            $("#sticky-header").removeClass("sticky-menu");
            $(".scroll-to-target").removeClass("open");
        } else {
            $("#sticky-header").addClass("sticky-menu");
            $(".scroll-to-target").addClass("open");
        }
    });

    /*=============================================
	= Scroll Up
    =============================================*/
    if ($(".scroll-to-target").length) {
        $(".scroll-to-target").on("click", function () {
            var target = $(this).attr("data-target");
            // animate
            $("html, body").animate(
                {
                    scrollTop: $(target).offset().top,
                },
                1000
            );
        });
    }

    /*=============================================
	= Odometer Active
    =============================================*/
    $(".odometer").appear(function (e) {
        var odo = $(".odometer");
        odo.each(function () {
            var countNumber = $(this).attr("data-count");
            $(this).html(countNumber);
        });
    });

    /*=============================================
	= Magnific Popup
    =============================================*/
    $(".popup-image").magnificPopup({
        type: "image",
        gallery: {
            enabled: true,
        },
    });

    /* magnificPopup video view */
    $(".popup-video").magnificPopup({
        type: "iframe",
    });

    /*=============================================
	= Search Toggler
    =============================================*/
    if ($(".search-toggler").length) {
        $(".search-toggler").on("click", function (e) {
            e.preventDefault();
            $(".search-popup").toggleClass("active");
            $(".mobile-nav__wrapper").removeClass("expanded");
            $("body").toggleClass("locked");
        });
    }

    /*=============================================
	= Team Social Active
    =============================================*/
    $(".social-toggle-icon").on("click", function () {
        $(this).parent().find("ul").slideToggle(400);
        $(this).find("i").toggleClass("icon-close");
    });

    /*=============================================
	= Project Two
    =============================================*/
    function projectMasonaryLayout() {
        if ($(".masonary-layout").length) {
            $(".masonary-layout").isotope({
                layoutMode: "masonry",
            });
        }
        if ($(".post-filter").length) {
            $(".post-filter li")
                .children(".filter-text")
                .on("click", function () {
                    var Self = $(this);
                    var selector = Self.parent().attr("data-filter");
                    $(".post-filter li").removeClass("active");
                    Self.parent().addClass("active");
                    $(".filter-layout").isotope({
                        filter: selector,
                        animationOptions: {
                            duration: 500,
                            easing: "linear",
                            queue: false,
                        },
                    });
                    return false;
                });
        }

        if ($(".post-filter.has-dynamic-filters-counter").length) {
            var activeFilterItem = $(".post-filter.has-dynamic-filters-counter").find("li");
            activeFilterItem.each(function () {
                var filterElement = $(this).data("filter");
                var count = $(".filter-layout").find(filterElement).length;
                $(this)
                    .children(".filter-text")
                    .append('<span class="count">' + count + "</span>");
            });
        }
    }

    /*=============================================
	= Team Two Hover Img
    =============================================*/
    const link = document.querySelectorAll(".team-two__single-title");
    const linkHoverReveal = document.querySelectorAll(".team-two__single-img");
    const linkImages = document.querySelectorAll(".team-two__single-img-hover");
    for (let i = 0; i < link.length; i++) {
        link[i].addEventListener("mousemove", (e) => {
            linkHoverReveal[i].style.opacity = 1;
            linkHoverReveal[i].style.transform = `translate(150%, -50% ) rotate(5deg)`;
            linkImages[i].style.transform = "scale(1, 1)";
            linkHoverReveal[i].style.left = e.clientX + "px";
        });
        link[i].addEventListener("mouseleave", (e) => {
            linkHoverReveal[i].style.opacity = 0;
            linkHoverReveal[i].style.transform = `translate(-50%, -50%) rotate(-5deg)`;
            linkImages[i].style.transform = "scale(0.8, 0.8)";
        });
    }

    /*=============================================
	= Accrodion
    =============================================*/
    if ($(".accrodion-grp").length) {
        var accrodionGrp = $(".accrodion-grp");
        accrodionGrp.each(function () {
            var accrodionName = $(this).data("grp-name");
            var Self = $(this);
            var accordion = Self.find(".accrodion");
            Self.addClass(accrodionName);
            Self.find(".accrodion .accrodion-content").hide();
            Self.find(".accrodion.active").find(".accrodion-content").show();
            accordion.each(function () {
                $(this)
                    .find(".accrodion-title")
                    .on("click", function () {
                        if ($(this).parent().hasClass("active") === false) {
                            $(".accrodion-grp." + accrodionName)
                                .find(".accrodion")
                                .removeClass("active");
                            $(".accrodion-grp." + accrodionName)
                                .find(".accrodion")
                                .find(".accrodion-content")
                                .slideUp();
                            $(this).parent().addClass("active");
                            $(this).parent().find(".accrodion-content").slideDown();
                        }
                    });
            });
        });
    }

    /*=============================================
	= Isotope Active
    =============================================*/
    $(".grid").imagesLoaded(function () {
        // init Isotope
        var $grid = $(".grid").isotope({
            itemSelector: ".grid-item",
            percentPosition: true,
            masonry: {
                columnWidth: ".grid-item",
            },
        });
        // filter items on button click
        $(".portfolio-menu").on("click", "button", function () {
            var filterValue = $(this).attr("data-filter");
            $grid.isotope({ filter: filterValue });
        });
    });

    //for menu active class
    $(".product-license li").on("click", function (event) {
        $(this).siblings(".active").removeClass("active");
        $(this).addClass("active");
        event.preventDefault();
    });

    /*=============================================
	= Img Popup
    =============================================*/
    if ($(".img-popup").length) {
        var groups = {};
        $(".img-popup").each(function () {
            var id = parseInt($(this).attr("data-group"), 10);

            if (!groups[id]) {
                groups[id] = [];
            }

            groups[id].push(this);
        });

        $.each(groups, function () {
            $(this).magnificPopup({
                type: "image",
                closeOnContentClick: true,
                closeBtnInside: false,
                gallery: {
                    enabled: true,
                },
            });
        });
    }

    /*=============================================
	= Tg Title Animation
    =============================================*/

    gsap.registerPlugin(ScrollTrigger, SplitText);
    gsap.config({
        nullTargetWarn: false,
        trialWarn: false,
    });

    function tg_title_animation() {
        var tg_var = jQuery(".tg-heading-subheading");
        if (!tg_var.length) {
            return;
        }
        const quotes = document.querySelectorAll(".tg-heading-subheading .tg-element-title");

        quotes.forEach((quote) => {
            //Reset if needed
            if (quote.animation) {
                quote.animation.progress(1).kill();
                quote.split.revert();
            }

            var getclass = quote.closest(".tg-heading-subheading").className;
            var animation = getclass.split("animation-");
            if (animation[1] == "style4") return;

            quote.split = new SplitText(quote, {
                type: "lines,words,chars",
                linesClass: "split-line",
            });
            gsap.set(quote, { perspective: 400 });

            if (animation[1] == "style1") {
                gsap.set(quote.split.chars, {
                    opacity: 0,
                    y: "90%",
                    rotateX: "-40deg",
                });
            }
            if (animation[1] == "style2") {
                gsap.set(quote.split.chars, {
                    opacity: 0,
                    x: "50",
                });
            }
            if (animation[1] == "style3") {
                gsap.set(quote.split.chars, {
                    opacity: 0,
                });
            }
            quote.animation = gsap.to(quote.split.chars, {
                scrollTrigger: {
                    trigger: quote,
                    start: "top 90%",
                },
                x: "0",
                y: "0",
                rotateX: "0",
                opacity: 1,
                duration: 1,
                ease: Back.easeOut,
                stagger: 0.02,
            });
        });
    }
    ScrollTrigger.addEventListener("refresh", tg_title_animation);

    /*=============================================
	= Wow Active
    =============================================*/
    function wowAnimation() {
        var wow = new WOW({
            boxClass: "wow",
            animateClass: "animated",
            offset: 0,
            mobile: false,
            live: true,
        });
        wow.init();
    }
})(jQuery);
