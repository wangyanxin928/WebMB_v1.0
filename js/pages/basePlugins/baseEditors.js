// ================================================================
//  author:王燕欣
//  createDate: 2017/10/30
//  description: 基础组件——超级文本编辑器
//  ===============================================================
define(function (require) {
    "use strict";
    var tpl = require('text!tpl/basePlugins/baseEditors.html'),
        template = _.template(tpl), _this;

    // 超级文本编辑器功能变量引入此插件不用请删除 start
    var Editors=require('bootstrapEditable');
    // 超级文本编辑器功能变量引入此插件不用请删除 end


    return Backbone.View.extend({
      	className:"page-content",//如果不添加会document中多一级div
        initialize: function () {
            _this = this;
            this.render();
        },
        render: function () {
            this.$el.html(template(this.model));
            return this;
        },
        afterRender:function(){
      	    var me = this;
            //如果要初始化某个范围内的select
            BasePluginsUTIL.initInput(me.$("#form1"));

        },
        events: {
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
        }
    });
});