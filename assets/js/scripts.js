$(document).ready(function() {
	/**
	 * Waypoints.
	 */
	$('.wp1').waypoint(function() {
		$('.wp1').addClass('animated fadeInLeft');
	}, {
		offset: '75%'
	});

	$('.wp2').waypoint(function() {
		$('.wp2').addClass('animated fadeInRight');
	}, {
		offset: '75%'
	});

	$('.wp3').waypoint(function() {
		$('.wp3').addClass('animated fadeInDown');
	}, {
		offset: '75%'
	});

	$('.wp4').waypoint(function() {
		$('.wp4').addClass('animated fadeInDown');
	}, {
		offset: '75%'
	});

	$('.wp5').waypoint(function() {
		$('.wp5').addClass('animated fadeInUp');
	}, {
		offset: '75%'
	});

	/**
	 * Navigation Overlay.
	 */
	$('.navbar-toggle').click(function() {
		$(this).toggleClass('active');
		$('.navigation').toggleClass('open');
		event.preventDefault();
	});

	$('.overlay ul li a').click(function() {
		$('.navbar-toggle').toggleClass('active');
		$('.navigation').toggleClass('open');
	});

	$('.overlay').click(function() {
		$('.navbar-toggle').toggleClass('active');
		$('.navigation').toggleClass('open');
	});

	/**
	 * Smooth Scrolling.
	 */
	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 1400);
				return false;
			}
		}
	});

	$('.top').click(function(e) {
		e.preventDefault();
		$('html,body').animate({
			scrollTop: 0
		}, 700);
		return false;
	});

	/**
	 * Fixed Header BG Toggle.
	 */
	$(function() {
		$(window).scroll(function() {
			var scroll = $(window).scrollTop();

			if (scroll >= 20) {
				$('.fixed-navbar').addClass('navbar-with-bg');
			} else {
				$('.fixed-navbar').removeClass('navbar-with-bg');
			}
		});
	});
});
