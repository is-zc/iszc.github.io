const divnr = document.querySelector('.nav .box-nr');
const PF = document.querySelector('.nav .PiFt img');
const btn = document.querySelector('.nav .box-nr button');
// 查询本地存储数据没有就返回空数组
let ad = JSON.parse(localStorage.getItem('data')) || [];
//判断是否登录
if (ad.uname === undefined) {
    btn.innerHTML = '立即登录'
    btn.addEventListener('click', function () {
        window.open('index.html', '_self');
    })
} else {
    //删除账户
    btn.addEventListener('click', function () {
        let cn = confirm('您确定要注销账户吗？')
        cn === true ? localStorage.removeItem('data') : '';
        window.open('/ViewSpot.html', '_self');
    })
}

//欢迎提示
document.querySelector('.tt h3').innerHTML = ad.uname === undefined ? '欢迎您' : '欢迎您：' + ad.uname;

//获取显示账户
document.querySelector('#myname').innerHTML = ad.uname === undefined ? '游客访问' : '账户名：' + ad.uname;

// //获取显示电话
document.querySelector('#Phone').innerHTML = ad.Phone === undefined ? '' : '电话：' + ad.Phone;

//头像
PF.addEventListener('click', function () {
    divnr.style.left = 0;
    PF.style.display = 'none';
    document.querySelector('.nav .PiFt .box-s').style.display = 'none';
    // window.body.style.filter = `brightness(8%)`;
});

//个人信息
divnr.addEventListener('mouseleave', function () {
    PF.style.display = 'block';
    divnr.style.left = '-300px';
    document.querySelector('.nav .PiFt .box-s').style.display = 'block'
})

const clr = document.querySelector('.nav .div-s ul');
// 通过事件委托给父级
const ThemeColors = document.querySelector('.nav .div-s ul');
clr.addEventListener('click', function (e) {
    //只有点击div才会改变颜色
    if (e.target.tagName === 'DIV') {
        document.querySelector('.nav').style.backgroundColor = e.target.dataset.color;
        document.querySelector('.nav ul .aa1').style.color = '#FFF';    //导航栏字体颜色
        document.querySelector('.nav ul #aa1').style.color = '#FFF';
    }
})