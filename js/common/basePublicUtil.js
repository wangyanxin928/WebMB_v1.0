/**
 * publicControl util Model bind window
 * 2016/4/19
 *
 */
define(['jquery', 'underscore'],
    function ($, _) {
        var BasePluginsUTIL = {
            //定义index的菜单事件
            initMenu: function (_routerTitle) {
                //如果传递路由标志，则默认当前选中路由标志
                if (_routerTitle) {
                    $(".page-sidebar-menu li").removeClass("active");
                    $(".page-sidebar-menu span.selected").remove();
                    var currentLi =  $(".page-sidebar-menu li a[href^='#" + _routerTitle + "']").closest("li");
                    if(currentLi.length==0){
                        return;
                    }
                    currentLi.addClass("active");
                    var currentFirstLi=currentLi;
                    while(!currentFirstLi.parent().hasClass("page-sidebar-menu")){
                        currentFirstLi.parent("ul").show();
                        currentFirstLi=currentFirstLi.closest("li");
                        currentFirstLi.children("a").children("span.arrow").addClass("open");
                    }
                    currentFirstLi.addClass("active");
                }else{
                    var hrefString = window.location.href;
                    if(hrefString.indexOf('#')>0){
                        var routerTitle=hrefString.split('#')[1];
                        if(routerTitle==""){
                            return;
                        }
                        if(routerTitle.indexOf('/')>0){
                            routerTitle=routerTitle.split('/')[0];
                        }
                        $(".page-sidebar-menu li").removeClass("active");
                        $(".page-sidebar-menu span.selected").remove();
                        var currentLi =  $(".page-sidebar-menu li a[href^='#" + routerTitle + "']").closest("li");
                        if(currentLi.length==0){
                            return;
                        }
                        currentLi.addClass("active");
                        var currentFirstLi=currentLi;
                        while(!currentFirstLi.parent().hasClass("page-sidebar-menu")){
                            currentFirstLi.parent("ul").show();
                            currentFirstLi=currentFirstLi.parent().closest("li");
                            currentFirstLi.children("a").children("span.arrow").addClass("open");
                        }
                        currentFirstLi.addClass("active");
                        currentFirstLi.children("a").append('<span class="selected"></span>');
                    }
                }
            },
            //初始化时间控件
            initDatePicker: function (selector) {
				
            	var baseOptions={
                        language: "zh-CN",//定义日期选择器语言
                        rtl: Metronic.isRTL(),//isRTL,//是否从右到左的显示方式
                        orientation: "right",//与时间选择块的位置有关
                        autoclose: true,//自动关闭
//                        format: "yyyy-MM"
                   };
                var selectYearOptions=$.extend({},baseOptions,
                	{startView: 2,
						maxViewMode: 2,
						minViewMode:2});
				var selectMonthOptions=$.extend({},baseOptions,
                	{startView: 2, 
						maxViewMode: 1,
						minViewMode:1});
            	if (jQuery().datepicker) {
            		if(!selector){
            			$('.date-picker').datepicker(baseOptions);
	                    $('.selectYear').datepicker(selectYearOptions);
		                $('.selectMonth').datepicker(selectMonthOptions);
            		}else{
            			selector.find('.date-picker').datepicker(baseOptions);
	                    selector.find('.selectYear').datepicker(selectYearOptions);
		                selector.find('.selectMonth').datepicker(selectMonthOptions);
            		}
                    
              	} 
            },
            //初始化单选和复选
            initCheck: function (selector,className) {
                if (!$().iCheck) {
                    return;
                }
				var icheckArr;
				if(!selector){
					icheckArr=$((!className)?'.icheck':'.'+className);
				}else{
					icheckArr=$((!className)?selector.find('.icheck'):selector.find('.'+className));
				}
                icheckArr.each(function () {
                    var checkboxClass = $(this).attr('data-checkbox') ? $(this).attr('data-checkbox') : 'icheckbox_minimal-grey';
                    var radioClass = $(this).attr('data-radio') ? $(this).attr('data-radio') : 'iradio_minimal-grey';

                    if (checkboxClass.indexOf('_line') > -1 || radioClass.indexOf('_line') > -1) {
                        if($(this).next().hasClass("iCheck-helper")){
                            $(this).iCheck('destroy');
                        }
                        $(this).iCheck({
                            checkboxClass: checkboxClass,
                            radioClass: radioClass,
                            insert: '<div class="icheck_line-icon"></div>' + $(this).attr("data-label")
                        });
                    } else {
                        if($(this).next().hasClass("iCheck-helper")){
                            $(this).iCheck('destroy');
                        }
                        $(this).iCheck({
                            checkboxClass: checkboxClass,
                            radioClass: radioClass
                        });
                    }
                });

            },
            //初始化下拉控件
            initSelect: function (selector,className) {
            	var selectArr;
				if(!selector){
					selectArr=$((!className)?'.bs-select':'.'+className);
				}else{
					selectArr=$((!className)?selector.find('.bs-select'):selector.find('.'+className));
				}
//				$('.bs-select').selectpicker({
                selectArr.selectpicker({
                    iconBase: 'fa',
                    tickIcon: 'fa-check'
                });
            },
            //初始化组合切换控件
            initCubeportfolio: function (_contentId, _portfolioId) {
                $('#js-grid-full-width').cubeportfolio({
                    filters: '#js-filters-full-width',
//                    loadMore: '#js-loadMore-full-width',
//                    loadMoreAction: 'auto',
                    layoutMode: 'mosaic',
                    sortToPreventGaps: true,
                    defaultFilter: '*',
                    animationType: 'fadeOutTop',
                    gapHorizontal: 0,
                    gapVertical: 0,
                    gridAdjustment: 'responsive',
                    mediaQueries: [
                        {
                            width: 1500,
                            cols: 5
                        },
                        {
                            width: 1100,
                            cols: 4
                        },
                        {
                            width: 800,
                            cols: 3
                        },
                        {
                            width: 480,
                            cols: 2
                        },
                        {
                            width: 320,
                            cols: 1
                        }
                    ],
                    caption: 'zoom',
                    displayType: 'lazyLoading',
                    displayTypeSpeed: 100,

                    // lightbox
                    lightboxDelegate: '.cbp-lightbox',
                    lightboxGallery: true,
                    lightboxTitleSrc: 'data-title',
                    lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>'
                });
            },
            //操作提示【success|error|info|warning】
            toastrAlert: function (type, title, content) {//type:success,info,warning,error
                window.BasePluginsUTIL.toastr.options = {
                    "closeButton": true,
                    "debug": false,
                    "positionClass": "toast-top-center",
                    "showDuration": "1000",
                    "hideDuration": "1000",
                    "timeOut": "1000",
                    "extendedTimeOut": "1500",
                    "showEasing": "swing",
                    "hideEasing": "linear",
                    "showMethod": "fadeIn",
                    "hideMethod": "fadeOut"
                }
                window.BasePluginsUTIL.toastr[type](content, title);
            },
            //上传文件
            UploadFile:function(e, callback){
            	var file = e.target.files[0] || e.dataTransfer.files[0];
                if (file) {
                	var reader = new FileReader();
                    //异步方式，不会影响主线程
                    reader.readAsDataURL(file);
                    reader.onload = function (e) {
                    	//清空上传控件的内容
                    	//$("#" + uploadInputId).val("");
                        if (callback)
                            callback(this.result,file);
                    }
                }
            },
            //表单验证-by Wendy
            ValidateForm: function (currentView, formId, opration) {
                var me = currentView;
                var form1 = me.$('#' + formId);
                var error1 = $('.alert-danger', form1);
                var success1 = $('.alert-success', form1);
                var Validate_opration = {
                    errorElement: 'span', //default input error message container//默认输入错误信息容器
                    errorClass: 'help-block help-block-error', // default input error message class//默认输入错误信息的样式
                    focusInvalid: true, // do not focus the last invalid input//是否将焦点集中在最后无效的输入
                    ignore: "",  // validate all fields including form hidden input//验证包括隐藏区域的全部输入
                    messages: {
                        //验证出错时的显示消息：
                        /*select_multi: {
                         maxlength: jQuery.validator.format("Max {0} items allowed for selection"),
                         minlength: jQuery.validator.format("At least {0} items must be selected")
                         }*/
                    },
                    rules: {
                        //验证规则：
                        /*carName: { required: true},
                         carNum: { required: true},
                         carSeats: { required: true},
                         carType: { required: true},
                         buyDate: { required: true}*/
                    },
                    invalidHandler: function (event, validator) { //display error alert on form submit //在表单提交时显示错误提示
                        success1.hide();
                        error1.show();
                    },

                    highlight: function (element) { // hightlight error inputs//高亮显示错误
                        $(element)
                            .closest('.form-group').addClass('has-error'); // set error class to the control group//将错误类添加到控件组
                    },

                    unhighlight: function (element) { // revert the change done by hightlight//高亮显示已经做得修改
                        $(element)
                            .closest('.form-group').removeClass('has-error'); // set error class to the control group
                    },

                    success: function (label) {
                        label
                            .closest('.form-group').removeClass('has-error'); // set success class to the control group
                    },
                    submitHandler: function (form) {
                        success1.show();
                        error1.hide();
                        return true;
                    }
                };
                Validate_opration = $.extend(true, Validate_opration, opration);
                return form1.validate(Validate_opration);
            },
            //身份证号码的验证规则
            isIdCardNo: function (num) {
                //if (isNaN(num)) {alert("输入的不是数字！"); return false;}
                var len = num.length, re;
                if (len == 15)
                    re = new RegExp(/^(\d{6})()?(\d{2})(\d{2})(\d{2})(\d{2})(\w)$/);
                else if (len == 18)
                    re = new RegExp(/^(\d{6})()?(\d{4})(\d{2})(\d{2})(\d{3})(\w)$/);
                else {
                    //alert("输入的数字位数不对。");
                    return false;
                }
                var a = num.match(re);
                if (a != null) {
                    if (len == 15) {
                        var D = new Date("19" + a[3] + "/" + a[4] + "/" + a[5]);
                        var B = D.getYear() == a[3] && (D.getMonth() + 1) == a[4] && D.getDate() == a[5];

                    }
                    else {
                        var D = new Date(a[3] + "/" + a[4] + "/" + a[5]);
                        var B = D.getFullYear() == a[3] && (D.getMonth() + 1) == a[4] && D.getDate() == a[5];

                    }
                    if (!B) {
                        //alert("输入的身份证号 "+ a[0] +" 里出生日期不对。");
                        return false;
                    }
                }
                if (!re.test(num)) {
                    //alert("身份证最后一位只能是数字和字母。");
                    return false;
                }
                return true;
            },
            //初始化所有验证规则
            initValidate: function () {
                // 判断整数value是否等于0
                jQuery.validator.addMethod("isIntEqZero", function (value, element) {
                    value = parseInt(value);
                    return this.optional(element) || value == 0;
                }, "整数必须为0");
                // 判断整数value是否大于0
                jQuery.validator.addMethod("isIntGtZero", function (value, element) {
                    value = parseInt(value);
                    return this.optional(element) || value > 0;
                }, "整数必须大于0");

                // 判断整数value是否大于或等于0
                jQuery.validator.addMethod("isIntGteZero", function (value, element) {
                    value = parseInt(value);
                    return this.optional(element) || value >= 0;
                }, "整数必须大于或等于0");

                // 判断整数value是否不等于0
                jQuery.validator.addMethod("isIntNEqZero", function (value, element) {
                    value = parseInt(value);
                    return this.optional(element) || value != 0;
                }, "整数必须不等于0");

                // 判断整数value是否小于0
                jQuery.validator.addMethod("isIntLtZero", function (value, element) {
                    value = parseInt(value);
                    return this.optional(element) || value < 0;
                }, "整数必须小于0");

                // 判断整数value是否小于或等于0
                jQuery.validator.addMethod("isIntLteZero", function (value, element) {
                    value = parseInt(value);
                    return this.optional(element) || value <= 0;
                }, "整数必须小于或等于0");

                // 判断浮点数value是否等于0
                jQuery.validator.addMethod("isFloatEqZero", function (value, element) {
                    value = parseFloat(value);
                    return this.optional(element) || value == 0;
                }, "浮点数必须为0");

                // 判断浮点数value是否大于0
                jQuery.validator.addMethod("isFloatGtZero", function (value, element) {
                    value = parseFloat(value);
                    return this.optional(element) || value > 0;
                }, "浮点数必须大于0");

                // 判断浮点数value是否大于或等于0
                jQuery.validator.addMethod("isFloatGteZero", function (value, element) {
                    value = parseFloat(value);
                    return this.optional(element) || value >= 0;
                }, "浮点数必须大于或等于0");

                // 判断浮点数value是否不等于0
                jQuery.validator.addMethod("isFloatNEqZero", function (value, element) {
                    value = parseFloat(value);
                    return this.optional(element) || value != 0;
                }, "浮点数必须不等于0");

                // 判断浮点数value是否小于0
                jQuery.validator.addMethod("isFloatLtZero", function (value, element) {
                    value = parseFloat(value);
                    return this.optional(element) || value < 0;
                }, "浮点数必须小于0");

                // 判断浮点数value是否小于或等于0
                jQuery.validator.addMethod("isFloatLteZero", function (value, element) {
                    value = parseFloat(value);
                    return this.optional(element) || value <= 0;
                }, "浮点数必须小于或等于0");

                // 判断浮点型
                jQuery.validator.addMethod("isFloat", function (value, element) {
                    return this.optional(element) || /^[-\+]?\d+(\.\d+)?$/.test(value);
                }, "只能包含数字、小数点等字符");

                // 匹配integer
                jQuery.validator.addMethod("isInteger", function (value, element) {
                    return this.optional(element) || (/^[-\+]?\d+$/.test(value) && parseInt(value) >= 0);
                }, "匹配integer");

                // 判断数值类型，包括整数和浮点数
                jQuery.validator.addMethod("isNumber", function (value, element) {
                    return this.optional(element) || /^[-\+]?\d+$/.test(value) || /^[-\+]?\d+(\.\d+)?$/.test(value);
                }, "匹配数值类型，包括整数和浮点数");

                // 只能输入[0-9]数字
                jQuery.validator.addMethod("isDigits", function (value, element) {
                    return this.optional(element) || /^\d+$/.test(value);
                }, "只能输入0-9数字");

                // 判断中文字符
                jQuery.validator.addMethod("isChinese", function (value, element) {
                    return this.optional(element) || /^[\u0391-\uFFE5]+$/.test(value);
                }, "只能包含中文字符。");

                // 判断英文字符
                jQuery.validator.addMethod("isEnglish", function (value, element) {
                    return this.optional(element) || /^[A-Za-z]+$/.test(value);
                }, "只能包含英文字符。");

                // 手机号码验证
                jQuery.validator.addMethod("isMobile", function (value, element) {
                    var length = value.length;
                    return this.optional(element) || (length == 11 && /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/.test(value));
                }, "请正确填写您的手机号码。");

                // 电话号码验证
                jQuery.validator.addMethod("isPhone", function (value, element) {
                    var tel = /^(\d{3,4}-?)?\d{7,9}$/g;
                    return this.optional(element) || (tel.test(value));
                }, "请正确填写您的电话号码。");

                // 联系电话(手机/电话皆可)验证
                jQuery.validator.addMethod("isTel", function (value, element) {
                    var length = value.length;
                    var mobile = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
                    var tel = /^(\d{3,4}-?)?\d{7,9}$/g;
                    return this.optional(element) || tel.test(value) || (length == 11 && mobile.test(value));
                }, "请正确填写您的联系方式");

                // 匹配qq
                jQuery.validator.addMethod("isQq", function (value, element) {
                    return this.optional(element) || /^[1-9]\d{4,12}$/;
                }, "匹配QQ");

                // 邮政编码验证
                jQuery.validator.addMethod("isZipCode", function (value, element) {
                    var zip = /^[0-9]{6}$/;
                    return this.optional(element) || (zip.test(value));
                }, "请正确填写您的邮政编码。");

                // 匹配密码，以字母开头，长度在6-12之间，只能包含字符、数字和下划线。
                jQuery.validator.addMethod("isPwd", function (value, element) {
                    return this.optional(element) || /^[a-zA-Z]\\w{6,12}$/.test(value);
                }, "以字母开头，长度在6-12之间，只能包含字符、数字和下划线。");

                // 身份证号码验证
                jQuery.validator.addMethod("isIdCardNo", function (value, element) {
                    //var idCard = /^(\d{6})()?(\d{4})(\d{2})(\d{2})(\d{3})(\w)$/;
                    return this.optional(element) || SchoolUTIL.isIdCardNo(value);
                }, "请输入正确的身份证号码。");

                // IP地址验证
                jQuery.validator.addMethod("ip", function (value, element) {
                    return this.optional(element) || /^(([1-9]|([1-9]\d)|(1\d\d)|(2([0-4]\d|5[0-5])))\.)(([1-9]|([1-9]\d)|(1\d\d)|(2([0-4]\d|5[0-5])))\.){2}([1-9]|([1-9]\d)|(1\d\d)|(2([0-4]\d|5[0-5])))$/.test(value);
                }, "请填写正确的IP地址。");

                // 字符验证，只能包含中文、英文、数字、下划线等字符。
                jQuery.validator.addMethod("stringCheck", function (value, element) {
                    return this.optional(element) || /^[a-zA-Z0-9\u4e00-\u9fa5-_]+$/.test(value);
                }, "只能包含中文、英文、数字、下划线等字符");

                // 匹配english
                jQuery.validator.addMethod("isEnglish", function (value, element) {
                    return this.optional(element) || /^[A-Za-z]+$/.test(value);
                }, "匹配english");

                // 匹配汉字
                jQuery.validator.addMethod("isChinese", function (value, element) {
                    return this.optional(element) || /^[\u4e00-\u9fa5]+$/.test(value);
                }, "匹配汉字");

                // 匹配中文(包括汉字和字符)
                jQuery.validator.addMethod("isChineseChar", function (value, element) {
                    return this.optional(element) || /^[\u0391-\uFFE5]+$/.test(value);
                }, "匹配中文(包括汉字和字符) ");

                // 判断是否为合法字符(a-zA-Z0-9-_)
                jQuery.validator.addMethod("isRightfulString", function (value, element) {
                    return this.optional(element) || /^[A-Za-z0-9_-]+$/.test(value);
                }, "判断是否为合法字符(a-zA-Z0-9-_)");

                // 判断是否包含中英文特殊字符，除英文"-_"字符外
                jQuery.validator.addMethod("isContainsSpecialChar", function (value, element) {
                    var reg = RegExp(/[(\ )(\`)(\~)(\!)(\@)(\#)(\$)(\%)(\^)(\&)(\*)(\()(\))(\+)(\=)(\|)(\{)(\})(\')(\:)(\;)(\')(',)(\[)(\])(\.)(\<)(\>)(\/)(\?)(\~)(\！)(\@)(\#)(\￥)(\%)(\…)(\&)(\*)(\（)(\）)(\—)(\+)(\|)(\{)(\})(\【)(\】)(\‘)(\；)(\：)(\”)(\“)(\’)(\。)(\，)(\、)(\？)]+/);
                    return this.optional(element) || !reg.test(value);
                }, "含有中英文特殊字符");

            },
            /*DEBUG: false,
            FC: {
                temfinmodw: function () {
                    $(".page-content").addClass("temfin");
                },
                temfinrevw: function function_name(argument) {
                    $(".page-content").removeClass("temfin");
                },
                initleft: function () {
                    $(".nav.nav-tabs").on("click", function () {
                        var e = event || window.event;
                        var target = e.target || e.srcElement;
                        while (target !== this) {
                            if (target.getAttribute('data-method')) {
                                break;
                            }

                            target = target.parentNode;
                        }
                        // target.setAttribute("class","active");
                        location.href = target.getAttribute('data-method');
                        //$(this).addClass("active").siblings().removeClass("active");
                    })
                },
                initleftmenu: function () {
                    $("#page-sidebar-menu").on("click", function () {
                        var e = event || window.event;
                        var target = e.target || e.srcElement;
                        while (target !== this) {
                            if (target.getAttribute('data-method')) {
                                break;
                            }

                            target = target.parentNode;
                        }
                        // target.setAttribute("class","active");
                        location.href = target.getAttribute('data-method');
                        $(target).addClass("active").siblings().removeClass("active");
                    })
                },
                initscroll: function () {
                    PRIVATEUTIL.POBJECT.presize();

                },
                inittempdefimg: function () {
                    return "./images/tem-pic1.png";
                },
                inittempedit: function () {
                    if (location.hash.split('/').length > 1)
                        return true;
                    else
                        return false;
                },
                initslider: function (slideropt, s) {

                    var _option = $.extend(true, {
                        totalPages: 100,
                        visiblePages: 10,
                        currentPage: 3,
                        prev: '<li class="prev"><a href="javascript:;">Previous</a></li>',
                        next: '<li class="next"><a href="javascript:;">Next</a></li>',
                        page: '<li class="page"><a href="javascript:;">{{page}}</a></li>',
                        onPageChange: function (num, type) {
                            $('#p2').text(type + '：' + num);
                        }
                    }, s)
                    $.jqPaginator(slideropt, _option);

                }
            },
            isRTL: false,
            isIE8: false,
            isIE9: false,
            isIE10: false,
            resizeHandlers: [],
            handleInit: function () {

                if ($('body').css('direction') === 'rtl') {
                    isRTL = true;
                }

                isIE8 = !!navigator.userAgent.match(/MSIE 8.0/);
                isIE9 = !!navigator.userAgent.match(/MSIE 9.0/);
                isIE10 = !!navigator.userAgent.match(/MSIE 10.0/);

                if (isIE10) {
                    $('html').addClass('ie10'); // detect IE10 version
                }

                if (isIE10 || isIE9 || isIE8) {
                    $('html').addClass('ie'); // detect IE10 version
                }

            },
            // runs callback functions set by Metronic.addResponsiveHandler().
            _runResizeHandlers: function () {
                // reinitialize other subscribed elements
                for (var i = 0; i < BasePluginsUTIL.resizeHandlers.length; i++) {
                    var each = BasePluginsUTIL.resizeHandlers[i];
                    each.call();
                }
            },
            // handle the layout reinitialization on window resize
            handleOnResize: function () {
                var resize;
                if (isIE8) {
                    var currheight;
                    $(window).resize(function () {
                        if (currheight == document.documentElement.clientHeight) {
                            return; //quite event since only body resized not window.
                        }
                        if (resize) {
                            clearTimeout(resize);
                        }
                        resize = setTimeout(function () {
                            BasePluginsUTIL._runResizeHandlers();
                        }, 50); // wait 50ms until window resize finishes.
                        currheight = document.documentElement.clientHeight; // store last body client height
                    });
                } else {
                    $(window).resize(function () {
                        if (resize) {
                            clearTimeout(resize);
                        }
                        resize = setTimeout(function () {
                            BasePluginsUTIL._runResizeHandlers();
                        }, 50); // wait 50ms until window resize finishes.
                    });
                }
            },
            getURLParameter: function (paramName) {
                var searchString = window.location.search.substring(1),
                    i, val, params = searchString.split("&");

                for (i = 0; i < params.length; i++) {
                    val = params[i].split("=");
                    if (val[0] == paramName) {
                        return unescape(val[1]);
                    }
                }
                return null;
            },
            initUniform: function (els) {
                if (els) {
                    $(els).each(function () {
                        if ($(this).parents(".checker").size() === 0) {
                            $(this).show();
                            $(this).uniform();
                        }
                    });
                } else {
                    handleUniform();
                }
            },
            handleUniform: function () {
                if (!$().uniform) {
                    return;
                }
                var test = $("input[type=checkbox]:not(.toggle, .md-check, .md-radiobtn, .make-switch, .icheck), input[type=radio]:not(.toggle, .md-check, .md-radiobtn, .star, .make-switch, .icheck)");
                if (test.size() > 0) {
                    test.each(function () {
                        if ($(this).parents(".checker").size() === 0) {
                            $(this).show();
                            $(this).uniform();
                        }
                    });
                }
            },
            scrollTo: function (el, offeset) {
                var pos = (el && el.size() > 0) ? el.offset().top : 0;

                if (el) {
                    if ($('body').hasClass('page-header-fixed')) {
                        pos = pos - $('.page-header').height();
                    } else if ($('body').hasClass('page-header-top-fixed')) {
                        pos = pos - $('.page-header-top').height();
                    } else if ($('body').hasClass('page-header-menu-fixed')) {
                        pos = pos - $('.page-header-menu').height();
                    }
                    pos = pos + (offeset ? offeset : -1 * el.height());
                }

                $('html,body').animate({
                    scrollTop: pos
                }, 'slow');
            },
            scrollTop: function () {
                scrollTo();
            },*/
            formreadonly:function(){
                //详情页面内容全部为只读
                $("#content").find("input,textarea").each(function(){
                    $(this).attr("readonly",true);
                });
                //下拉框单独处理
                $("#content").find("select").each(function(){
                    $(this).attr("disabled","disabled");
                });
            },
            formedit:function(){
                //页面内容全部更改为可编辑
                $("#content").find("input,textarea").each(function(){
                    $(this).attr("readonly",false);
                });
                //下拉框单独处理
                $("#content").find("select").each(function(){
                    $(this).removeAttr("disabled");
                });
            },
            //生成随机数 4位
            loadRandom: function () {
                return   parseInt(10000 * Math.random());
            }
        }

        window.BasePluginsUTIL = BasePluginsUTIL;
    });