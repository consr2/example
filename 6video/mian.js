// //배열
// let arr = ['일길동','이말자','삼식이','사가지']

//  //배열 안에 들어간 값을 '요소'라고 함

// //  arr.forEach(function(요소를 가져올 변수설정){}), forEach 리스트의 변수 전부 가져온다
//  arr.forEach(function(item){
//     console.log(item + ' 안녕!')
//  })


var allVideos = document.querySelectorAll('.video')
var allplay = document.getElementById('play_all')
var videos = document.querySelectorAll('video')
console.log(videos)

allVideos.forEach(function(e){
    e.addEventListener('mouseover',function(){
        var video = e.querySelector('video')
        video.play();
    })


    e.addEventListener('mouseleave',function(){
        var video = e.querySelector('video')
        video.pause();
    })
})



allplay.addEventListener('click', function(){
    if(allplay.classList.contains('on')){
        allplay.classList.remove("on")
        
        videos.forEach(e =>{
            e.play()
        })

        // allVideos.forEach(function(v){
        //     var video = v.querySelector('video')
        //     console.log(video)
        //     video.play();
        // })
    }
    else{
        allplay.classList.add('on')
        allVideos.forEach(function(v){
            var video = v.querySelector('video')
            video.pause();
        })
    }
})

