var button
var contentWrap
var imgArr
var title
var pageNum = 0
var totalNum = 0

// window.onload = function(){}
// window.addEventListener('load',function(){})

window.onload = function () {
    contentWrap = document.querySelectorAll('.contentWrap')
    totalNum = contentWrap.length

    button = document.querySelectorAll('button')
    imgArr = document.querySelectorAll('img')
    title = document.querySelectorAll('.textWrap h1')

    button[0].addEventListener('click', prevfunc)
    button[1].addEventListener('click', nextFunc)
    pagaSetFunc()
}

function prevfunc() {
    if (pageNum > 0) {
        pageNum--
        console.log(pageNum)
    } else {
        pageNum = totalNum - 1
        console.log(pageNum)
    }
    pagaSetFunc()

}

function nextFunc() {
    if (pageNum > 1) {
        pageNum = 0
        console.log(pageNum)
    } else {
        pageNum += 1
        console.log(pageNum)
    }
    pagaSetFunc()
}


function pagaSetFunc() {
    for (i = 0; i < contentWrap.length; i++) {
        contentWrap[i].classList.remove('active')
    }

    for (i = 0; i < imgArr.length; i++) {
        imgArr[i].classList.remove("active")
    }

    contentWrap[pageNum].classList.add('active')

    for (i = 0; i < 4; i++) {
        contentWrap[pageNum].getElementsByTagName('img')[i].classList.add('active')
    }
    title[0].innerHTML = "PAGE : " + (pageNum + 1)
    console.log(title)
}
