var id = document.querySelector('#id')

var pw1 = document.querySelector('#pswd1')
var pwMsg = document.querySelector('#alertTxt')
var pwImg1 = document.querySelector('#pswd1_img1')
var pw2 = document.querySelector('#pswd2')
var pw2Img = document.querySelector('#pswd2_img1')

var username = document.querySelector('#name')
var yy = document.querySelector('#yy')
var mm = document.querySelector('#mm')
var dd = document.querySelector('#dd')

var gender = document.querySelector('#gender')
var email = document.querySelector('#email')
var phoneNo = document.querySelector('#phoneNo')



var error = document.querySelectorAll('.error_next_box')



// id.addEventListener('focusout',function(){
//     checkId()
// })
id.addEventListener('focusout',checkId)
pw1.addEventListener('focusout',checkPw)
pw2.addEventListener('focusout',checkPw2)
username.addEventListener('focusout',checkName)
yy.addEventListener('focusout',isBirthCompleted)
mm.addEventListener('focusout',isBirthCompleted)
dd.addEventListener('focusout',isBirthCompleted)
gender.addEventListener('focusout',function(){
    if(gender.value == '성별'){
        error[5].style.display='block'
    }
    else{
        error[5].style.display='none'
    }
})
email.addEventListener('focusout',checkemail)
phoneNo.addEventListener('focusout',checkphoneNo)



function checkId(){
    var idPattern = /^[a-zA-Z0-9_-]{5,20}$/
    console.log(id.value)
    console.log(idPattern.test(id.value)) //.test() 메서드는 주어진 문자열이 정규 표현식을 만족하는지 판별하고, 그 여부를 true,false로 반환합니다///   기준변수(정규식).test(확인변수.vlaue(값))
    
    if(id.value === ""){
        error[0].innerHTML='필수 정보입니다.'
        error[0].style.display='block'
    }
    else if(!idPattern.test(id.value)){
        error[0].innerHTML='5~20자의 영문 소문자,대문자, 숫자와 특수기호(_),(-)만 사용가능합니다'
        error[0].style.display='block'
    }
    else{
        error[0].innerHTML='멋진 아이디네요'
        error[0].style.color='#08a600'
        error[0].style.display='block'
    }
}

function checkPw(){
    var pwpattern = /^[a-zA-Z0-9~!@#$%^&*()`_+?:;'"{}]{8,16}$/
    console.log(pw1.value)
    console.log(pwpattern.test(pw1.value))
    
    if(pw1.value === ""){
        error[1].innerHTML='필수 정보입니다.'
        error[1].style.display='block'
        pwMsg.style.display='none'
        pwImg1.src='img/m_icon_pass.png'
    }
    else if(!pwpattern.test(pw1.value)){
        error[1].innerHTML='올바른 입력이 아닙니다'
        error[1].style.display='block'
        pwMsg.innerHTML='사용불가'
        pwMsg.style.display='block'
        pwMsg.style.color='#f00'
        pwImg1.src="img/m_icon_not_use.png"
    }
    else{
        error[1].style.display='none'
        pwMsg.style.display='block'
        pwMsg.innerHTML='안전'
        pwMsg.style.color='#03c75a'
        pwImg1.src="img/m_icon_safe.png"
    }
}

function checkPw2(){
    console.log(pw2.value)

    if(pw2.value === '' && pw1.value == ''){
        error[2].style.display = 'block'
        error[2].innerHTML = '필수정보입니다'
    }
    else if(pw2.value === pw1.value && pw2.value != ''){
        pw2Img.src='img/m_icon_check_enable.png'
        error[2].style.display = 'none'
    }
    else if(pw2.value != pw1.value){
        pw2Img.src='img/m_icon_check_disable.png'
        error[2].innerHTML = '비밀번호가 일치하지 않습니다'
        error[2].style.display = 'block'
    }
}

function checkName(){
    var namePattern = /^[a-zA-Z가-힣]*$/

    if(username.value === ''){
        error[3].innerHTML = '필수 정보입니다'
        error[3].style.display = 'block'
        error[3].style.color = 'red'
    }
    else if(!namePattern.test(username.value) || username.value.indexOf(" ") > -1){
        error[3].innerHTML = '한글과 영문 대소문자를 이용하세요(특수기호, 공백 사용 불가)'
        error[3].style.display = 'block'
        error[3].style.color = 'red'
    }
    else{
        error[3].innerHTML = '입력완료'
        error[3].style.display = 'block'
        error[3].style.color = 'green'
    }
}

function isBirthCompleted(){
    var yearpattern = /^[0-9]{4}$/
    console.log(yy.value)

    if(yy.value == ''){
        error[4].innerHTML = '년도가 비었습니다'
        error[4].style.display = 'block'                   
        error[4].style.color = 'red'
    }
    else if(Number(yy.value) < 1920 || Number(yy.value) > 2022){
        error[4].innerHTML = '년도가 잘못되었습니다'
        error[4].style.display = 'block'
        error[4].style.color = 'red'
    }
    else if(yearpattern.test(yy.value) && mm.value == '월'){
        error[4].innerHTML = '월을 선택하세요'
        error[4].style.display = 'block'
        error[4].style.color = 'red'
    }
    else if(yearpattern.test(yy.value) && mm.value != '월' && dd.value == ''){
        error[4].innerHTML = '날짜가 비었습니다'
        error[4].style.display = 'block'
        error[4].style.color = 'red'
    }

    else if(Number(dd.value) > 31){
        error[4].innerHTML = '날짜가 잘못되었습니다'
        error[4].style.display = 'block'
        error[4].style.color = 'red'
    }
    else{
        error[4].innerHTML = '귀하의 생년월일은 ' + yy.value +'년'+ mm.value +'월'+ dd.value + '일 입니다'
        error[4].style.display = 'block'
        error[4].style.color = 'green'
    }
    
}

function checkemail(){
    var emailpattern = /^([\w\.\_\-])*[a-zA-Z0-9]+([\w\.\_\-])*([a-zA-Z0-9])+([\w\.\_\-])+@([a-zA-Z0-9]+\.)+[a-zA-Z0-9]{2,8}$/

    if(email.value == ""){
        error[6].style.display='block'
        error[6].style.color='green'
        error[6].innerHTML='비웠습니다'
    }
    else if(!emailpattern.test(email.value)){
        error[6].style.display='block'
        error[6].style.color='red'
        error[6].innerHTML='이메일 주소를 다시 확인해 주세요'
    }
    else{
        error[6].style.display='block'
        error[6].style.color='green'
        error[6].innerHTML='입력완료'
    }
}

function checkphoneNo(){
    var phonepattern = /([01]{2})([01679]{1})([0-9]{3,4})([0-9]{4})/
    if(phoneNo.value == ""){
        error[7].innerHTML= '비었습니다'
        error[7].style.display = 'block'
        error[7].style.color = 'red'
    }
    else if (!phonepattern.test(phoneNo.value)){
        error[7].innerHTML= '다시입력'
        error[7].style.display = 'block'
        error[7].style.color = 'red'
    }
    else{
        error[7].innerHTML= '입력완료'
        error[7].style.display = 'block'
        error[7].style.color = 'green'
    }
}