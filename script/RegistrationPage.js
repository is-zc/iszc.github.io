let aa, aa3;
let sj = document.querySelector('#sj');
let sjz = document.querySelector('#sjz');
let te = document.querySelector('#pp');
let aa2 = document.querySelector('#pp2');
let pas = document.querySelector('#pa');
let wens = document.querySelector('#wen');
let wens2 = document.querySelector('#wen2');
let wens3 = document.querySelector('#wen3');
let xian = document.querySelector('#xian');
let yhzs = document.querySelector('#yhz');
let yyxx = document.querySelector('#yx');
let ootd2 = false;
let ootd3 = false;
//显示邮箱选项
let youxiao = document.querySelector('#YouXiao');
yyxx.onfocus = function () {
    youxiao.style.display = 'block';
}

//邮箱规则
yx.onkeyup = function () {
    let ZhengZe = /^([a-zA-Z]|\d)+(([@qq.com]){7}|([@163.com]){8}|([@126.com]){8}|([@139.com]){8}|([@189.com]){8})$/;
    let mailbox = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
    let YX = yx.value;
    if (ZhengZe.test(YX) === false || mailbox.test(YX) === false) {
        yhzs.innerHTML = '邮箱格式错误或缺少必要字符';
        xian.innerHTML = '信息填写有误！！！';
        ootd2 = false;
    } else {
        yhzs.innerHTML = '';
        // xian.innerHTML = '';
        ootd2 = true;
    }
    youxiao.onchange = function () {
        yyxx.value = YX + youxiao.value;
        yhzs.innerHTML = '';
        ootd2 = true;
    }
}

//手机号验证
sj.onkeyup = function () {
    let sjzhi = sj.value;
    let ssj = /^1\d{10}$/;
    if (ssj.test(sjzhi) === false) {
        sjz.innerHTML = '手机号错误';
        sj.style.borderColor = 'red';
        youxiao.style.display = 'none';
    } else {
        sjz.innerHTML = '';
        sj.style.borderColor = '';
        xian.innerHTML = '';
        youxiao.style.display = 'none';
    }
    if (sjzhi === '') {
        sjz.innerHTML = '手机号不能为空';
        youxiao.style.display = 'none';
    }
}

//检测账户名
pas.onblur = function () {
    const zz = 123;
    zhis = pa.value;
    if (zhis * 1 === zz) {
        wens.innerHTML = '用户名被占用!';
        pas.style.borderColor = 'red';
        youxiao.style.display = 'none';
    } else if (zhis.length < 2) {
        wens.innerHTML = '用户名小于2位!';
        wens.style.color = 'azure';
        setTimeout(function () {
            wens.style.color = 'red';
        }, 100);
        youxiao.style.display = 'none';
        ootd3 = false;
    } else {
        wens.innerHTML = '';
        pas.style.borderColor = '';
        xian.innerHTML = '';
        youxiao.style.display = 'none';
        ootd3 = true;
    }
}

//检查两次密码是否匹配
function han2() {
    aa = pp.value;
    aa3 = pp2.value;
    let ze2 = /^(?=.*\d)(?=.*[a-z])[\da-z]{6,16}$/;   //字母数字组成6到16位
    if (aa === aa3 && ze2.test(aa3) === true) {
        wens3.innerHTML = '';
        aa2.style.borderColor = '';
        xian.innerHTML = '';
        youxiao.style.display = 'none';
        document.querySelector('#img').src = 'image/正确.png';
    } else {
        wens3.innerHTML = '错误';
        document.querySelector('#img').style.display = 'block';
        document.querySelector('#img').src = 'image/错误.png';
        aa2.style.borderColor = 'red';
        youxiao.style.display = 'none';
    }
    if (aa3 === '') {
        aa2.style.borderColor = 'red';
        youxiao.style.display = 'none';
    }
}
//检查密码是否与正则匹配
te.onkeyup = function () {
    aa = pp.value;
    let ze = /^(?=.*\d)(?=.*[a-z])[\da-z]{6,16}$/;   //字母数字组成6到16位
    if (ze.test(aa) === false) {
        wens2.innerHTML = '请输入由字母数字组成的6-16位密码';
        pp.style.borderColor = 'red';
        youxiao.style.display = 'none';
    }
    if (aa === '' && ze.test(aa) === false) {
        wens2.innerHTML = '密码不能为空！';
    }
    if (ze.test(aa) === true) {
        wens2.innerHTML = '';
        pp.style.borderColor = '';
        youxiao.style.display = 'none';
    }
    han2();
}

let ot = false;
document.querySelector('.yanjing img').addEventListener('click', function () {
    if (ot === false) {
        document.querySelector('.yanjing img').src = 'image/眼睛.png';
        document.querySelector('.yanjing img').style.width = '25px';
        document.querySelector('.yanjing img').style.right = '74px';
        document.querySelector('#pp').type = 'text';
        ot = true;
    } else {
        document.querySelector('.yanjing img').src = 'image/眼睛_闭.png';
        document.querySelector('.yanjing img').style.width = '35px';
        document.querySelector('.yanjing img').style.width = '60px';
        document.querySelector('.yanjing img').style.right = '55px';
        document.querySelector('#pp').type = 'password';
        ot = false;
    }
})

//眼睛控件
let os = false;
document.querySelector('.yanjing2 img').addEventListener('click', function () {
    if (os === false) {
        document.querySelector('.yanjing2 img').src = 'image/眼睛.png';
        document.querySelector('.yanjing2 img').style.width = '25px';
        document.querySelector('.yanjing2 img').style.right = '74px';
        document.querySelector('#pp2').type = 'text';
        os = true;
    } else {
        document.querySelector('.yanjing2 img').src = 'image/眼睛_闭.png';
        // document.querySelector('.yanjing2 img').style.width = '35px';
        document.querySelector('.yanjing2 img').style.width = '60px';
        document.querySelector('.yanjing2 img').style.right = '55px';
        document.querySelector('#pp2').type = 'password';
        os = false;
    }
})
document.querySelector('#pp').addEventListener('click', function () {
    document.querySelector('.yanjing img').style.display = 'block';
})
document.querySelector('#pp2').addEventListener('click', function () {
    document.querySelector('.yanjing2 img').style.display = 'block';
})
//立即登录跳转
document.querySelector('.box-bar h5>a').addEventListener('click', function () {
    document.querySelector('.box-s').style.opacity = 0;
    document.querySelector('.box-s').style.height = '400px'
    document.querySelector('.box-dl').style.opacity = 1;
    document.querySelector('.box-dl').style.height = '400px'
    document.querySelector('.box-dl').style.zIndex = 1;
    // setTimeout(function () {
    //     window.open('index.html', '_self');
    // }, 500);
})
