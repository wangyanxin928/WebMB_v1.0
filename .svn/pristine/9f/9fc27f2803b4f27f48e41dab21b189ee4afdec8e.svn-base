/**
 * Created by wyx on 2017/11/23.
 */
// 必填项
var required = /[\S]+/;
//验证用户名手机号或者邮箱
var userPhoneMail = /(^[0-9A-Za-z_]{6,30}$)|(^1[0-9]{10}$)|^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
//验证密码
var password = /^[0-9A-Za-z_]{6,15}$/;
// 手机正则
var phone = /^1\d{10}$/;
//email正则
var email = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
// 验证手号或者邮箱
var phoneMail = /(^1[0-9]{10}$)|^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
// url正则
var url = /(^#)|(^http(s*):\/\/[^\s]+\.[^\s]+)/;
//数字
var number = /^\d+$/;
// 日期
var date = /^(\d{4})[-\/](\d{1}|0\d{1}|1[0-2])([-\/](\d{1}|0\d{1}|[1-2][0-9]|3[0-1]))*$/;
//身份证号15或18位
var identity = /(^\d{15}$)|(^\d{17}(x|X|\d)$)/;
// 获取页面当前input 自定义属性的值；
var attrVal = $(this).attr("myVerify");


var VerificationCode = "";
/*获取手机验证码倒计时  star*/
var wait = 60;

function time(o) {
    if (wait == 0) {
        o.removeAttribute("disabled");
        o.value = "重新发送";
        wait = 60;
        $(".setVerificationCodeBtn").css({"background-color": "#e8e8e8", "color": "#666", "cursor": "pointer"});
    } else {
        o.setAttribute("disabled", true);
        o.value = "重新发送" + wait + "s";
        wait--;
        setTimeout(function () {
            time(o)
        }, 1000);
        $(".setVerificationCodeBtn").css({"background-color": "#f1f1f1", "color": "#666", "cursor": "not-allowed"});
    }
}

/*获取手机验证码倒计时  end*/

var phoneNumber, companyName;

//验证手机号是否正确并且发送验证码
$("#sendCheckCode").click(function () {
    phoneNumber = $("#phoneNumber").val();

    console.log(phoneNumber);
    if (phoneNumber == "" || phoneNumber == null) {
        layer.msg("请输入手机号");
    } else if (phone.test(phoneNumber)) {
        // 发送验证码成功
        time(this);//调用定时器

    } else {
        layer.msg("请输入正确手机号");
    }

});
/*获取手机验证码倒计时  end*/

// 登陆 start
//用户点击了登陆
$('#loginFormBox input').keypress(function (e) {
    if (e.which == 13) {
        userLogin();
    }
});
// 调用方法
$("#loginFormBtn").click(function () {
    console.log(phoneNumber);
    userLogin()
});

// 用户登陆方法 start
function userLogin() {
    var _this=this;
    var selectUserRole = $("#selectUserRole").val();
    var companyName = $("#companyName").val();
    var userName = $("#userName").val();
    var phoneNumber = $("#phoneNumber").val();
    var verificationCodeInput = $("#verificationCodeInput").val();
    console.log("selectUserRole=" + selectUserRole + " /companyName=" + companyName + " /userName=" + userName + " /verificationCodeInput=" + verificationCodeInput);
    if (selectUserRole==""||selectUserRole==null){
        layer.msg('请选择角色');
    }
    else if  (companyName==""||companyName==null){
        layer.msg('请填写单位全称');
        $("#companyName").focus();
    }
    else if  (userName==""||userName==null){
        layer.msg('请输入用户名');
        $("#userName").focus();
        if(userPhoneMail.test(userName)){
            layer.msg('请输入正确的用户名');
            $("#userName").focus();
        }
    }
    else if  (phoneNumber==""||phoneNumber==null){
        layer.msg('请输入手机号');
        $("#phoneNumber").focus();
        if(phone.test(phoneNumber)){
            layer.msg('请输入正确的手机号');
            $("#phoneNumber").focus();
        }
    }










}

// 用户登陆方法 end

// 登陆 end
