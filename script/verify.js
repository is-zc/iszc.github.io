//注册事件
let dt;
let tijiao = document.querySelector('.ints');
tijiao.addEventListener('click', fnf);
function fnf(e) {
    e.preventDefault(); //阻止表单默认事件
    let pan1 = pa.value;  //用户账号
    let pan2 = yx.value;  //用户邮箱
    let pan3 = sj.value;  //手机号码
    let pan4 = pp.value;  //用户密码
    let pan5 = pp2.value; //确认密码
    let san = '';
    let ssjj = /^1\d{10}$/;
    let mmaa = /^(?=.*\d)(?=.*[a-z])[\da-z]{6,16}$/;
    let ootd = 0;
    //邮箱隐藏
    youxiao.style.display = 'none';
    if (pan1 === san && pan2 === san && pan3 === san && pan4 === san && pan5 === san) {
        xian.style.color = 'azure';
        setTimeout(function () {
            xian.style.color = 'red';
        }, 100);
    }
    if (pan1 === san || pan2 === san || pan3 === san || pan4 === san || pan5 === san) {
        xian.innerHTML = '信息填写有误！！！';
    } else {
        xian.innerHTML = '';
        ootd++;
    }
    //用户名（文字闪烁）
    if (pa.value.length < 3) {
        wens.style.color = 'azure';
        setTimeout(function () {
            wens.style.color = 'red';
        }, 100);
    }
    //邮箱（文字闪烁）
    if (ootd2 === false) {
        yhzs.style.color = 'azure';
        setTimeout(function () {
            yhzs.style.color = 'red';
        }, 100);
    }
    if (pan1 * 1 === 123) {
        wens.style.color = 'azure';
        setTimeout(function () {
            wens.style.color = 'red';
        }, 100);
        xian.innerHTML = '信息填写有误！！！';
    } else ootd++;
    if (ssjj.test(pan3) === false) {
        sjz.style.color = 'azure';
        setTimeout(function () {
            sjz.style.color = 'red';
        }, 100);
        xian.innerHTML = '信息填写有误！！！';
    } else ootd++;
    if (mmaa.test(pan4) === false) {
        document.querySelector('#wen2').style.color = 'azure'
        setTimeout(function () {
            wens2.style.color = 'red';
        }, 100);
    } else ootd++;
    if (mmaa.test(pan5) === false || pan4 !== pan5) {
        wens3.style.color = 'azure';
        setTimeout(function () {
            wens3.style.color = 'red';
        }, 100);
        xian.innerHTML = '信息填写有误！！！';
    } else ootd++;

    //注册信息完全符合要求时执行下面代码
    if (ootd === 5 && ootd2 === true && ootd3 === true) {
        setTimeout(function () {
            let Unw = [
                {
                    uname: pa.value,
                    pwd: pp.value,
                    Phone: sj.value,
                    youke: 'false'
                }
            ]
            //创建一个本地存储
            localStorage.setItem('data', JSON.stringify(Unw[0]));
        }, 500);

        // document.querySelector('#fm').return = true;   //开启提交
        // window.open('index.html', '_self');   //页面跳转
        //自定义弹窗
        let box = document.querySelector('.box-s .box-ts');
        // tijiao.addEventListener('click', function () {
        box.style.opacity = 1;
        document.querySelector('.box-s .ints').disabled = true;
        setTimeout(function () {
            box.style.opacity = 0;
            document.querySelector('.box-s .ints').disabled = false;
        }, 1000);
        //提示信息层级
        document.querySelector('.box-s .box-ts').style.zIndex = 1;
        //查询本地存储数据没有就返回空数组
        dt = JSON.parse(localStorage.getItem('data')) || [];
        //获取用户输入的数据和本地存储的数据做判断
        if (dt.uname === pa.value) {
            document.querySelector('.box-s .box-ts').style.height = '70px';
            document.querySelector('.box-s .box-p').innerHTML = '账户已存在<br>请勿重复提交 !';
        } else {
            document.querySelector('.box-s .box-ts').style.height = '50px';
            document.querySelector('.box-s .box-p').innerHTML = '注册成功';
            //1.3秒后进入登录
            setTimeout(function () {
                window.open('index.html', '_self');
            }, 1300);
        }

    }
}

