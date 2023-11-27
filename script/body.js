// 查询本地存储数据没有就返回空数组
let data = JSON.parse(localStorage.getItem('data')) || [];
const divs = document.querySelector('.main-box');
divs.addEventListener('click', function (e) {
    // console.log(e.target.dataset.i);
    //没有登录账号且自定义属性为0的不能游玩
    if (data.pwd === undefined && e.target.dataset.i === '0') {
        e.preventDefault(); //阻止跳转
        let dl = confirm('登录才能进入哦，点击确认进行登录！')
        if (dl === true) {
            window.open('index.html', '_self');
        }
    }
})