//提示信息
function TS() {
    let tsxx = document.querySelector('.tt');
    // document.querySelector('.tt h3').innerHTML = '密码修改成功!'
    tsxx.style.opacity = 1;
    tsxx.style.top = '50px';
    //提示信息收回
    setTimeout(function () {
        tsxx.style.opacity = 0;
        tsxx.style.top = '-60px';
    }, 1500);
}
//修改密码
const btnxg = document.querySelector('#btnxg button');
// 查询本地存储数据没有就返回空数组
btnxg.addEventListener('click', function () {
    let data = JSON.parse(localStorage.getItem('data')) || [];
    if (data.pwd !== undefined) {
        let jiu = prompt('请输入旧密码');
        let yz = /^(?=.*\d)(?=.*[a-z])[\da-z]{6,16}$/;   //字母数字组成6到16位
        if (jiu === data.pwd && yz.test(jiu) === true) {
            let xin = prompt('请输入字母数字组成的6到16位密码');
            if (xin === data.pwd) {
                alert('新密码不能与旧密码相同');
            } else if (xin !== '' && xin !== null && yz.test(xin) === true) {
                let Unw = {
                    uname: data.uname,
                    pwd: data.pwd = xin,   //把用户输入的新密码重新赋值
                    Phone: data.Phone,
                    youke: 'false'
                }
                localStorage.setItem('data', JSON.stringify(Unw));    //添加新数据并转换为JSON字符串存储
                document.querySelector('.tt h3').innerHTML = '密码修改成功!'
                TS();   //回调函数
                setTimeout(function () {    //1秒后跳转登录页
                    window.open('/index.html', '_self');
                }, 1000);
            } else if (xin === '' || xin === null) {
                alert('密码不能为空!');
            } else {
                alert('密码或格式错误!');
            }
        } else {
            alert('密码或格式错误!');
        }
    } else {
        document.querySelector('.tt h3').innerHTML = '您还没有登录！'
        TS();   //回调函数
    }
})
