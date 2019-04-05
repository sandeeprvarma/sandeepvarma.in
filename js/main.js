$(function () {
	$(document).scroll(function () {
	    if ($(window).scrollTop() >= $('header').offset().top) {
	        $('nav').addClass('fixed-nav');
	    } else {
	        $('nav').removeClass('fixed-nav');
	    }
	});

	$('body').scrollspy({
        target: '.navbar',
        offset: 80
    });

    // ---------------------------------------------- //
    // Preventing URL update on navigation link click
    // ---------------------------------------------- //

    $('.navbar-nav a, #scroll-down').bind('click', function (e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 1000);
        e.preventDefault();
    });
});

var ctx = document.getElementById('myChart');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['PHP', 'MySQL', 'GIT', 'jQuery', 'HTML5 & CSS3', 'Codeigniter'],
        datasets: [{
            label: 'Skills',
            data: [8, 7, 8, 7, 8, 6,10],
            backgroundColor: [
                'rgb(76, 78, 81)',
                'rgb(76, 78, 81)',
                'rgb(76, 78, 81)',
                'rgb(76, 78, 81)',
                'rgb(76, 78, 81)',
                'rgb(76, 78, 81))'
            ],
            borderColor: [
                'rgb(76, 78, 81)',
                'rgb(76, 78, 81)',
                'rgb(76, 78, 81)',
                'rgb(76, 78, 81)',
                'rgb(76, 78, 81)',
                'rgb(76, 78, 81))'
            ],
            responsive: true
        }]
    },
    options: {
        scales: {
            xAxes: [{
                barPercentage: 1,
                maxBarThickness: 20,
            }],
            yAxes: [{
                barPercentage:1,
                maxBarThickness: 15,
                ticks: {
                    min: 0
                }
            }]
        }
    }
});