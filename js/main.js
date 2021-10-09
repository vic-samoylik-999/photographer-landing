$(function () {
	// Moving through anchors
	$('a[href^="#"], *[data-href^="#"]').on('click', function (e) {
		e.preventDefault();
		var time = 1500;
		var data = $(this).attr('data-href') ? $(this).attr('data-href') : $(this).attr('href');
		$('html,body').stop().animate({ scrollTop: $(data).offset().top }, time);
		// Check for active class on burger or list
		if ($(".header__burger").hasClass('active') || $(".header__list").hasClass('active')) {
			$(".header__burger, .header__list").toggleClass("active");
			$("body").toggleClass("lock");
		}
	});
	// Working with Burger
	$(".header__burger").click(function () {
		$(".header__burger, .header__list").toggleClass("active");
		$("body").toggleClass("lock");
	});
})