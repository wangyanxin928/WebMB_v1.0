// ================================================================
//  author:王燕欣
//  createDate: 2016/09/05
//  description: 基础组件--模版使用介绍必读
//  ===============================================================
define(function (require) {
    "use strict";
    var tpl = require('text!tpl/basePlugins/baseDome.html'),
        template = _.template(tpl), _this;

    // 复制代码功能变量引入此插件不用请删除 start
    var Clipboard=require('Clipboard');
    // 复制代码功能变量引入此插件不用请删除 end


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