$(function () {
    // 1. 首页轮播图
    let imgIndex = 0;
    const imgArr = $(".banner img");
    const imgLen = imgArr.length;

    function autoSlide() {
        imgArr.hide();
        imgIndex++;
        if (imgIndex >= imgLen) {
            imgIndex = 0;
        }
        imgArr.eq(imgIndex).fadeIn(600);
    }
    setInterval(autoSlide, 3000);

    // 2. 注册表单校验
    $("#regForm").submit(function () {
        let username = $("#username").val().trim();
        let phone = $("#phone").val().trim();
        let pwd = $("#pwd").val();
        let repwd = $("#repwd").val();
        let tip = $(".tip-text");

        if (username === "") {
            tip.text("用户名不能为空！");
            return false;
        }
        // 手机号正则校验
        if (!/^1[3-9]\d{9}$/.test(phone)) {
            tip.text("请输入正确的11位手机号！");
            return false;
        }
        if (pwd.length < 6) {
            tip.text("密码长度不能少于6位！");
            return false;
        }
        if (pwd !== repwd) {
            tip.text("两次输入的密码不一致！");
            return false;
        }
        tip.text("注册成功！");
        return false; // 纯前端，阻止表单提交
    });

    // 3. 展馆选项卡切换
    $(".tab-title li").click(function () {
        let idx = $(this).index();
        $(this).addClass("active").siblings().removeClass("active");
        $(".tab-content > div").eq(idx).show().siblings().hide();
    });

    // 4. 留言表单简单提示
    $("#msgForm").submit(function () {
        let content = $("#msgContent").val().trim();
        let msgTip = $(".msg-tip");
        if (content === "") {
            msgTip.text("留言内容不能为空！");
            return false;
        }
        msgTip.text("留言提交成功！");
        return false;
    });
});