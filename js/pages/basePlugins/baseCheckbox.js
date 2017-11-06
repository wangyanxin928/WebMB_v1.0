// ================================================================
//  author:文霞
//  createDate: 2016/09/05
//  description: 基础组件——复选
//  ===============================================================
define(function (require) {
    "use strict";
    var tpl = require('text!tpl/basePlugins/baseCheckbox.html'),
        template = _.template(tpl), _this;

    // 复制代码功能变量引入此插件不用请删除 start
    var Clipboard=require('Clipboard');
    // 复制代码功能变量引入此插件不用请删除 end

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
            var me = this;
            //如要初始化当前View中的全部复选按钮，使用下面的代码
//          BasePluginsUTIL.initCheck();

            //如果要初始化某个范围内的复选按钮
            BasePluginsUTIL.initCheck(me.$("#form1"));

            //初始化复选按钮事件，先绑定事件再初始化插件
            this.initCheckEvent();

            //先初始化icheck
            BasePluginsUTIL.initCheck(me.$("#form3"));
            //初始化某个范围内的input 多选不可点击
            $('#haveEventGroup3 input').iCheck('disable');

            //初始化自定义className的icheck
            BasePluginsUTIL.initCheck(me.$("#form4"), "myIcheck");
        },
        events: {
            "click #changeChecked": "changeChecked",
            "click .shootLayer": "shootLayer"
        }
        , shootLayer: function (e) {
            /* 点击弹出层事件显示页面已有的弹出层。*/
            var thisParsent = $(e.target).parents('.sampleHtml');
            thisParsent.children('.confirm').modal("show");
            //点击复制后，复制textarea内的内容
            $(".copyHtml").unbind("click").bind("click", function (e) {
                //复制代码功能
                var clipboard = new Clipboard('.copyHtml');
            });

            //点击删除后，弹出层取消按钮事件
            $("#noCheck").unbind("click").bind("click", function () {
            });
        },
        initCheckEvent: function () {
            var me = this;
            //绑定选中事件
            me.$('#form2 .icheck').off('ifChecked').on('ifChecked', function (event) { //ifCreated 事件应该在插件初始化之前绑定
                var selectText = $(event.target).val();//attr("dataKey");
                BasePluginsUTIL.toastrAlert('success', '提示', "已选中'" + selectText + "'");
            });
            //绑定取消选中事件
            me.$('#form2 .icheck').off('ifUnchecked').on('ifUnchecked', function (event) { //ifCreated 事件应该在插件初始化之前绑定
                var selectText = $(event.target).val();//attr("dataKey");
                BasePluginsUTIL.toastrAlert('success', '提示', "已取消选中'" + selectText + "'");
            });

            BasePluginsUTIL.initCheck(me.$("#form2"));//初始化单选/复选控件
        },
        changeChecked: function () {

            //初始化icheck之后，修改选中状态
            $('#haveEventGroup3 input[value="学前教育"]').iCheck('check');
        }
    });
});