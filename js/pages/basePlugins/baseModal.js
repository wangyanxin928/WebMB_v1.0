// ================================================================
//  author:w王燕欣
//  createDate: 2017/07/14
//  description: 基础组件——弹框提示
//  ===============================================================
define(function (require) {
    "use strict";
    var tpl = require('text!tpl/basePlugins/baseModal.html'),
        template = _.template(tpl), _this;
    return Backbone.View.extend({
        className: "page-content",//如果不添加会document中多一级div
        initialize: function () {
            _this = this;
            this.render();
        },
        render: function () {
            this.$el.html(template(this.model));
            return this;
        },
        afterRender: function () {

        },
        events: {
            "click #showModal": "showModal",
            "click #info,#success,#error,#warning":"showToastr"
        }
        , showModal: function () {
            /* 点击弹出层事件显示页面已有的弹出层。*/
            $('#confirm').modal("show");
            //点击删除后，弹出层删除按钮事件
            $("#yesCheck").unbind("click").bind("click", function (e) {
                BasePluginsUTIL.toastrAlert('success', '提示', "点击了‘确定’");
            });
            //点击删除后，弹出层取消按钮事件
            $("#noCheck").unbind("click").bind("click", function () {
                BasePluginsUTIL.toastrAlert('success', '提示', "点击了‘取消’");
            });
        }
        ,showToastr:function(event){
            BasePluginsUTIL.toastrAlert($(event.target).attr("id"),"标题","提示内容");
        }
    });
});
/*
* 属性说明：
* data-backdrop：布尔或字符串 'static'；   //点击背景是否关闭模态框
* data-keyboard: 布尔          //按下退出键时是否关闭模态框
*
* 方法：
* .modal(options)  根据options实例化为模态框
* .modal('toggle')  切换模态框的显示状态
* .modal('show')  显示模态框
* .modal('hide')  隐藏模态框
*
* 事件：
* show.bs.modal  当 show 实例方法被调用之后，此事件被立即触发。
* shown.bs.modal  当模态框显示出来之后（同时 CSS 过渡效果也已执行完毕），此事件被触发。
* hide.bs.modal  当 hide 实例方法被调用之后，此事件被立即触发。
* hidden.bs.modal 当模态框向用户隐藏之后（同时 CSS 过渡效果也已执行完毕），此事件被触发。
*
* 事件绑定实例：
* $('#myModal').on('hidden.bs.modal', function (e) {
* // do something...
* })
*
* 官网API：http://v4-alpha.getbootstrap.com/components/modal/
* 简易API：http://www.runoob.com/bootstrap/bootstrap-v2-modal-plugin.html
* */
