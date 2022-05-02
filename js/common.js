// 스크롤시 헤더 변경
$(window).on('scroll', function(){
    if($(document).scrollTop() > 100) {
        $('#header').addClass('header_top')
        $('#header .gnb ul').css('color', '#f8f8f8')
    } else {
        $('#header').removeClass('header_top')
        $('#header .gnb ul').css('color', '#131419')
    }
})


// 메뉴 클릭시 해당 위치로 이동
$('.gnb a').on('click', function(event){
    event.preventDefault()
    var target = $(this).attr('href')
    $('html, body').animate( {
        scrollTop:  $( $(this).attr('href') ).offset().top 
    }, 300)
})


// 메뉴 슬라이드
$('#btnMenu').on('click', function(){
    $('.gnb_slide').addClass('opened')
    $('.star').addClass('hide')
})
$('#btnClose').on('click', function(){
    $('.gnb_slide').removeClass('opened')
    $('.star').removeClass('hide')
})


// skill 스크롤 애니메이션
var boxTop = $('.skills').offset().top - 400
var isPlay = false

$(window).on('scroll', function(){
    if($(document).scrollTop() > boxTop && isPlay == false) {
        isPlay = true
        $('.skillbar1 circle').addClass('play')
        $('.skillbar2 circle').addClass('play')
        $('.skillbar3 circle').addClass('play')
        $('.skillbar4 circle').addClass('play')

        let number1 = document.getElementById("number1");
        let counter1 = 0;

        setInterval( () => {
            if(counter1 == 95) {
                clearInterval();
            } else {
                counter1 += 1;
                number1.innerHTML = counter1 + "%"
            }
        }, 25)

        let number2 = document.getElementById("number2");
        let counter2 = 0;

        setInterval( () => {
            if(counter2 == 70) {
                clearInterval();
            } else {
                counter2 += 1;
                number2.innerHTML = counter2 + "%"
            }
        }, 25)

        let number3 = document.getElementById("number3");
        let counter3 = 0;

        setInterval( () => {
            if(counter3 == 90) {
                clearInterval();
            } else {
                counter3 += 1;
                number3.innerHTML = counter3 + "%"
            }
        }, 25)

        let number4 = document.getElementById("number4");
        let counter4 = 0;

        setInterval( () => {
            if(counter4 == 95) {
                clearInterval();
            } else {
                counter4 += 1;
                number4.innerHTML = counter4 + "%"
            }
        }, 25)
    }
})


// 메일전송
$('.send_mail button[type=submit]').on('click', function(e){
    e.preventDefault()

    emailjs.init("iXk1UCB1WapemmNDY");

    emailjs.sendForm('service_qoq925s', 'template_4pipo6j', '#myForm')
    .then(function(response) {
    //    console.log('SUCCESS!', response.status, response.text);
       alert('메일 전송이 완료되었습니다.')
    }, function(error) {
        // console.log('FAILED...', error);
        alert('메일 전송이 실패했습니다.')
    });
})


// 스크롤 시 탑 버튼 생성
$(window).on('scroll', function(){
    if( $(document).scrollTop() < 500 ) {
        $('#scrollTop').addClass('none')
    }else {
        $('#scrollTop').removeClass('none')
    }
})


// 탑 버튼
$('#scrollTop').on('click', function(event){
    event.preventDefault()
    $('html, body').animate({
        scrollTop: 0
    }, 300)
})


// pop up
$('.dim').hide()
        
$('.portfolio .list a').on('click', function(event){
    event.preventDefault()
    
    var index = $(this).parent().index()

    $('.pop' + (index+1)).fadeToggle(100)
    // $('body').css('overflow', 'hidden')
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('scrollLock');
})
$('.closePop').on('click', function(){
    $('.dim').fadeOut(100)
    $('body').removeClass('scrollLock');
})



// var popData = {
//     pop1 : {
//         title : '포트폴리오',
//         desc: '설명...1.ㅟ리ㅏ어리얼;ㅣㅁㅇㄹ',
//         img : './images/portfolio.jps'
//     },
// }

// var pop = '<div class="dim">'
//             + '<strong>'  +  popData.pop1.title  + '</strong>'
//            + '</div>'