const usernamessWord = document.querySelector('#pwd');
const eyes = document.querySelector('.yanjing-dl img');
const dl = document.querySelector('.ints-dl');
let ts = false;
//显示眼睛
usernamessWord.addEventListener('input', function () {
    eyes.style.display = 'block';
})
//眼睛控件
eyes.addEventListener('click', function () {
    if (ts === false) {
        usernamessWord.type = 'text';
        eyes.src = 'image/眼睛.png';
        eyes.style.width = '25px';
        eyes.style.right = '74px';
        ts = true;
    } else {
        usernamessWord.type = 'password';
        eyes.src = 'image/眼睛_闭.png';
        eyes.style.width = '60px';
        eyes.style.right = '55px';
        ts = false;
    }
})
//提示信息收回
function PromptTimer() {
    setTimeout(function () {
        div.style.opacity = 0;
        div.style.top = '';
        document.querySelector('.box-dl .ints-dl').disabled = false;
    }, 1500);
}
//查询本地存储数据
let abc = JSON.parse(localStorage.getItem('data')) || [];
//注册了就隐藏游客访问
if (abc.youke === 'false') {
    document.querySelector('.box-dl .youke').style.display = 'none';
}
//自定义提示
let div = document.querySelector('.box-dl .tt');
dl.addEventListener('click', function () {
    //判断账号密码是否正确
    if (unm.value === '' && pwd.value === '') {
        document.querySelector('.box-dl .ints-dl').disabled = true;
        document.querySelector('.box-dl .tt2').innerHTML = '请输入账号密码';
        div.style.opacity = 1;
        div.style.width = '150px';
        div.style.top = '-400px';
        document.querySelector('.box-dl .ints-dl').disabled = false;
        PromptTimer();
    } else if (unm.value === abc.uname && pwd.value === abc.pwd) {
        div.style.backgroundColor = 'greenyellow';
        //自定义弹窗
        document.querySelector('.box-dl .ints-dl').disabled = true;
        div.style.opacity = 1;
        document.querySelector('.box-dl .tt2').innerHTML = '登录成功';
        div.style.top = '-400px';
        PromptTimer();
        //登录成功跳转主页
        setTimeout(function () {
            window.open('ViewSpot.html', '_self');   //页面跳转 (刷新页面)
        }, 1000);
    } else {
        //自定义提示
        document.querySelector('.box-dl .ints-dl').disabled = true;
        div.style.opacity = 1;
        document.querySelector('.box-dl .tt2').innerHTML = '账号或密码有误';
        div.style.width = '150px';
        div.style.top = '-400px';
        PromptTimer();
    }
})
//立即注册跳转
document.querySelector('.box-dl .box-dl2 h5>a').addEventListener('click', function () {
    document.querySelector('.box-s').style.height = '600px'
    document.querySelector('.box-s').style.opacity = 1;
    document.querySelector('.box-dl').style.height = '600px';
    document.querySelector('.box-dl').style.opacity = 0;
    document.querySelector('.box-dl').style.zIndex = 0;
})