// ================================================================
//  author:wyx
//  createDate: 2017/08/12
//  description: 基础组件——时间
//  ===============================================================
define(function (require) {
    "use strict";
    var tpl = require('text!tpl/basePlugins/baseTabSwitching.html'),
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
            //tab切换事件
        }
    });
});
