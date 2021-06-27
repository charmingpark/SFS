
$(function(){
  /*  $('#movie .videoCtrl button').on('keyup', function (e) {
  console.log(e.keyCode); // 엔터 = 13
  if (e.keyCode === 13) $(this).focus();
  }); */
  /* focus 엔터 눌러도 다음으로 바로 넘어가지 않고 제자리에 있도록 제어 */
  // 엔터로 버튼 클릭시 포커스 이탈함 : 제어가 불필요한가? 

  $('#site_search_txt').on({
    focus: function () {
      $(this).prev().css('left', 990);
    },
    blur: function () {
      if ($(this).val() === '') $(this).prev().css('left',0);
    }
  });

  

  /* 메뉴 모달 안에 있는 네비게이션*/
  // dep2의 ul로 가면 dep1의 애니메이션이 남아있게 제어하기
	const $header = $('#headerWrap');
	const $gnb = $('.menu.on #menu_modal .main_menu > ul');
	
	//1) depth2 ul 숨기기
	$gnb.find('ul').hide();
	
	//2) 현재페이지 활성화를 위해 li.on 넣기위해 변수 선언
	const dep1 = $('body').data('dep-one') - 1;       
	const dep2 = $('body').data('dep-two') - 1;       
	console.log("depth1? "+dep1+" , depth2? "+dep2);
	
	//3) depth1 a - mouseenter focus
	$gnb.find('> li > a').on('mouseenter focus', function () {
		//초기화
		$gnb.find('> li.on').removeClass('on').children('ul').hide();
		$header.removeClass('active');

		//활성화
		$(this).parent().has('ul').closest($header).addClass('active');	//100% 너비의 파랑바 생성을 위한 클래스명 추가
		$(this).next().show().parent().addClass('on');
	});
	
	//4) $gnb에서 마우스가 벗어나면 mouseleave => 활성화 상태를 초기화면으로 되돌림
	$gnb.on('mouseleave', function () {
		//마우스가 떠나기전 마지막 활성화상태를 초기화
		$header.removeClass('active');
		$gnb.find('> li.on').removeClass('on').children('ul').hide();
		//body id="nav_3_1"을 통해 선언한 dep1과 dep2 변수에 맞는 li.on 추가
		if (dep1 >= 0) $gnb.children().eq(dep1).addClass('on').find('ul li').eq(dep2).addClass('on');
	});

	//5) $gnb에서 가장 첫번째와 마지막 a에서 blur 된 경우 - 초기화면으로 되돌리기(조건을 만족하는 경우만)
	$gnb.find('a:first, a:last').on('blur', function () {
		setTimeout(function () {
			//#gnb안에 있는 a태그가 포커스를 가지지 않는 경우만
			if ( !$gnb.find('a').is(':focus') ) $gnb.trigger('mouseleave');
		}, 10);
	});
		
	//6) 페이지 로딩후 보여질 화면 => li.on 넣어서 스타일이 적용된 화면
	if (dep1 >= 0) $gnb.trigger('mouseleave');


});

