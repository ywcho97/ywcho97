$(document).ready(function(){
    var currentPosition = parseInt($(".menu").css("top"));
    $(window).scroll(function() {
      var position = $(window).scrollTop(); 
      $(".menu").stop().animate({"top":position+currentPosition+"px"}, 1000);
    });
  });


  document.addEventListener('DOMContentLoaded', function () {
    const menuItems = document.querySelectorAll('.quickmenu_wrap ul li a');
    const sections = document.querySelectorAll('.sub_content');

    // 부드러운 스크롤 이동 설정
    // menuItems.forEach(item => {
    //     item.addEventListener('click', function (e) {
    //         e.preventDefault();
    //         const targetId = this.getAttribute('href').substring(1);
    //         const targetElement = document.getElementById(targetId);
    //         targetElement.scrollIntoView({ behavior: 'smooth' });
    //     });
    // });

    function onScroll() {
        let currentSection = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                currentSection = section.getAttribute('id');
            }
        });

        menuItems.forEach(item => {
            item.classList.remove('quickmenu_active');
            if (item.getAttribute('data-target') === currentSection) {
                item.classList.add('quickmenu_active');
            }
        });
    }

    window.addEventListener('scroll', onScroll);
    onScroll();  // 초기 상태 설정

});





/* swiper 슬라이드 설정 */
var swiper = new Swiper('.main_slide .swiper-container', {
    // Optional parameters
    // direction: 'horizontal',
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    loop: true,
    loopAdditionalSlides : 1,
    speed: 1000,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay:{
        delay: 3000,
        disableOnInteraction: false, // false-스와이프 후 자동 재생
    },
    
});










$(document).ready(function(){


	/* skill circle-chart */
		activate =0;
		function chartPercent(){
			var $content = $('#content-wrap'),
			$charts = $content.find('.chart');
			$charts.find('.num').eq(0).text(90);
			$charts.find('.num').eq(1).text(80);
			$charts.find('.num').eq(2).text(90);
			$charts.find('.num').eq(3).text(90);
			$charts.find('.num').eq(4).text(80);
			$charts.find('.num').eq(5).text(80);
		};
		
		$(window).on('scroll',$.throttle(1000/15,function() {
			var sct = $(this).scrollTop();
	
			if(sct >= 800 && sct < 2000){
				activateScene();
			}else{
				no_activeScene();
			};
		})); 
		
		activateScene();
		
			function activateScene(){
				var $content = $('#content-wrap'),
				$charts = $content.find('.chart');
				$content.stop(true).animate(1200, 'easeInOutQuint');
				if(activate == 0){
					chartPercent();
					
					$charts.each(function(){
						var $chart = $(this),
						$circleLeft = $chart.find('.Rotate_L .Inside')
							.css({transform:'rotate(0)'}),
						$circleRight = $chart.find('.Rotate_R .Inside')
							.css({transform:'rotate(0)'}),
						$percentNumber = $chart.find('.num'),
						percentData = $percentNumber.text();
	
						$percentNumber.text(0);
						$({percent: 0}).delay(100).animate({percent:percentData},{
							duration:1500,
							progress:function(){
								var now = this.percent,
								deg = now * 360 / 100,
								degRight = Math.min(Math.max(deg,0),180);
								degLeft = Math.min(Math.max(deg-180,0),180);
								$circleRight.css({transform:'rotate('+degRight+'deg)'});
								$circleLeft.css({transform:'rotate('+degLeft+'deg)'});
								$percentNumber.text(Math.floor(now));
							}
						});
					});
				};
				activate=1;
			};
			function  no_activeScene(){
				var $content = $('#content-wrap'),
				$charts = $content.find('.chart');
				$content.stop(true).animate({right: '-50%'}, 1200, 'easeInOutQuint');
				activate=0;
				chartPercent();
			}
	
	
});














jQuery(document).ready(function () {
	// 윈도우 로드 후 부드럽게 보여주기
	jQuery(window).load(function () {
		fadeSlider();
		fadeTo();
		return false;
	});


/* 메뉴 */
$(function () {
	 $(window).scroll(function () {
		 if ($(this).scrollTop() > 500) { // 스크롤 내릴 표시
			 $('.head').css('border-bottom','1px solid #000')
		 } else {
			 $('.head').css('border-bottom','none')
		 }
	 });

	 /* $(window).scroll(function () {
		 if ($(this).scrollTop() > 1) { // 스크롤 내릴 표시
			 $('.mob_menu').css('background-color','#40885d')
		 } else {
			 $('.mob_menu').css('background-color','rgba(64,136,93,0.7)')
		 }
	 }); */

	 $('.content2_tab>ul>li').click(function(){
		 $('.content2_tab>ul>li').removeClass('select_on');
		 $(this).addClass('select_on')
	 });
	 $('.content2_tab>ul>li').click(function(){
		 $('.content2_tab>ul>li').removeClass('select_on');
		 $(this).addClass('select_on')
	 });

// 각 select 요소 클릭 시 해당하는 tab을 보여줌
$('.select1, .select2, .select3, .select4').click(function(){
    var index = $(this).index() + 1; // 클릭된 요소의 인덱스를 가져와서 1을 더함
    $('.tab_wrap').hide(); // 모든 tab_wrap 숨김
    $('.tab' + index).show(); // 클릭된 select에 해당하는 tab 보여줌
});

// 각 tab의 li 요소에 마우스 오버 시 tab_title을 보여줌
$('.tab_wrap ul li').hover(function(){
    $(this).find('.tab_title').css('display', 'block');
}, function(){
    $(this).find('.tab_title').css('display', 'none');
});



 });
 // data-aos="fade-up" data-aos-duration="800"
});

$(function(){
	$('.type').typed({
		//strings:["오늘은 월요일","한주의 시작이다","기분좋게 공부하고<br>주말까지 힘내자"],   // 입력될 내용 삽입하기
		
		strings:["WEB PORTFOLIO"],   // 여러줄 삽입하기
		typeSpeed: 200, // type 속도
		backDelay: 5000,
		loop: true //false는 한번만 실행
	});
});