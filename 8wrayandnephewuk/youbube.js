var player1
var player2

function onYouTubeIframeAPIReady() {
    player1 = new YT.Player('player1', {
        width: '1800',
        height: '1650',
        videoId: 'CfPqVxIlE2Y',
        rel: 0,
      playerVars:{
        autoplay:true,
        loop:true,//loop:true일떄는 반복할 목록을 다시한번 적어야한다
        playlist:'CfPqVxIlE2Y',//반복재생할 유튜브영상 id를 다시 적음
    },
         
      events: {
        //영상이 준비되면 함수가 실행됨
        'onReady': function(event){
            event.target.mute();//음소거, target은 영상자체를 의미
        },
      }
    });//YT.Player
    player2 = new YT.Player('player2', {//html의 id와 동일해야함
        videoId: '2RfUJvM7tIA',
        playerVars:{
          autoplay:true,
          loop:true,//loop:true일떄는 반복할 목록을 다시한번 적어야한다
          playlist:'2RfUJvM7tIA',//반복재생할 유튜브영상 id를 다시 적음
      },
           
        events: {
          //영상이 준비되면 함수가 실행됨
          'onReady': function(event){
              event.target.mute();//음소거, target은 영상자체를 의미
          },
        }
      });//YT.Player

}