// var scrollBody = $('.fix_motion')
// var scrollHeight //스크롤의 높이
// var sectionOffsetTop
// var sectionScrollTop
// var scrollRealHeight // 스크롤의 실제움직이는 높이
// var scrollPercent //스크롤 백분률 값
// var percent


// function scrollFunc(){
//     scrollHeight=scrollBody.height()
//     sectionOffsetTop=scrollBody.offset().top
//     console.log(sectionOffsetTop)
//     console.log('탑' + $(window).scrollTop()) //현재 스크롤 탑값 추출
//     scrollRealHeight = scrollHeight - $(window).height()
//     sectionScrollTop = $(window).scrollTop() - sectionOffsetTop
//     scrollPercent = sectionScrollTop / scrollRealHeight
//     percent = scrollPercent * 100

//     contentIn()
// }

// function contentIn(){
//     var deviceImg = $('.fix_motion .slide .child')
//     var imgWidth = deviceImg.width()
//     console.log(percent)
//     if(percent>=0 && percent <25){
//         $('.fix_motion .slide .child1').addClass('active')
//         slideChage(imgWidth * 0)
//     }
//     else if(percent>=25 && percent <50){
//         $('.fix_motion .slide .child2').addClass('active')
//         slideChage(imgWidth * 1)
//     }
//     else if(percent>=50 && percent <75){
//         $('.fix_motion .slide .child3').addClass('active')
//         slideChage(imgWidth * 2)
//     }
//     else if(percent>=75 && percent <100){
//         $('.fix_motion .slide .child4').addClass('active')
//         slideChage(imgWidth * 3)
//     }
//     else{
//         $('.fix_motion .slide .child').removeClass('active')
//     }
// }

// function slideChage(moveX){
//     var slide = $('.fix_motion .slide')
//     slide.css({transform:'translateX(' + -moveX + 'px)'})
// }


// $(window).scroll(function(){
//     scrollFunc()
// })

var top1 = $('.fix_motion').offset().top
var bottom1 = $('.wrap').height() - top1 * 2
var area = (bottom1 - top1) / 4
var scr_vw = $('.child').width()
console.log(scr_vw)



function move(){
    var nowscroll = $(window).scrollTop()
    console.log(nowscroll)
    if(nowscroll > area * 1 && nowscroll < (area * 2)){
        $('.fix_motion .slide .child1').addClass('active')
        $('.slide_wrap').css({transform:'translateX(' + 0 + 'px)'})
    }
    else if(nowscroll > area * 2 && nowscroll < (area * 3)){
        $('.fix_motion .slide .child2').addClass('active')
        $('.slide_wrap').css({transform:'translateX(' + -scr_vw + 'px)'})
    }
    else if(nowscroll > area * 3 && nowscroll < (area * 4)){
        $('.fix_motion .slide .child3').addClass('active')
        $('.slide_wrap').css({transform:'translateX(' + (-scr_vw * 2) + 'px)'})
    }
    else if(nowscroll > area * 4 && nowscroll < (area * 5)){
        $('.fix_motion .slide .child').addClass('active')
        $('.slide_wrap').css({transform:'translateX(' + (-scr_vw * 3) + 'px)'})
    }
    
}


$(window).scroll(function(){
    move()
})
