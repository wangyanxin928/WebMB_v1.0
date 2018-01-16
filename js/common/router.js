// ================================================================
//  author:文霞
//  createDate: 2016/09/05
//  description: 统计图表组件 路由定义
//  ===============================================================
define(function (require) {
    "use strict";
    return Backbone.Router.extend({
        routes: {
            "": "baseDome",
            "baseInput": "baseInput",
            "baseRadio":"baseRadio",
            "baseCheckbox":"baseCheckbox",
            "baseSelect":"baseSelect",
            "baseDatepicker":"baseDatepicker",
            "baseDataTable":"baseDataTable",
            "baseFormValidate":"baseFormValidate",
            "baseUploadImg":"baseUploadImg",
            "baseUploadFile":"baseUploadFile",

            /*wyx-添加模块dome*/
            "baseAddModule":"baseAddModule",
            /*wyx-超级文本编辑器dome*/
            "baseEditors":"baseEditors",
            /*wyx-添加模块dome*/
            "baseModal":"baseModal",
            /*wyx-添加tab切换模块dome*/
            "baseTabSwitching":"baseTabSwitching",
            /*wyx-添加tab切换模块Canvas*/
            "baseSwitchingCanvas":"baseSwitchingCanvas",
            /*wyx-添加Icon图标模块dome*/
            "baseIcon":"baseIcon",
            //基础组件--模版使用介绍必读
            "baseDome":"baseDome",


            /*wyx-添加模块dome*/
            "baseBlock":"baseBlock",
            /*wyx-概览模块dome*/
            "overviewOne":"overviewOne",
            "overviewTwo":"overviewTwo",
            "overviewThree":"overviewThree",

            /*wyx-添加 登陆baseLoginPage   start*/
            "baseLoginPageIndex":"baseLoginPageIndex",
            /*wyx-添加 登陆baseLoginPage   end*/

            "baseDataTableNew":"baseDataTableNew",
            /*wyx star*/
            /*wyx-文件上传dome*/
            //"baseUploadFile":"baseUploadFile",
            /*wyx end*/
            "putong_content":"putong_content"
        },
        goIndex: function (requirePath, operationType, currentId, jsonObject) {
            require([requirePath], function (view) {
                BasePluginsUTIL.initMenu();//根据当前路由修改菜单选中样式
                var viewObj = {model: {_opType: operationType, _currentId: currentId, _jsonObject: jsonObject}};
                var _view = new view(viewObj);
                $('.page-content-wrapper').html(_view.$el);
                Layout.initContent();//用于内容区域的适配，对‘page-content’层定义最小高度

                //设置中间内容区域屏幕的高度,中间内容区域层的class必须是page-content
                _view.afterRender();
            });
        },
        //基础组件--模版使用介绍必读
        baseDome: function () {
            this.goIndex("pages/basePlugins/baseDome");
        },
        //基础组件--文本框
        baseInput: function () {
            this.goIndex("pages/basePlugins/baseInput");
        },
        //基础组件--超级文本编辑器
        baseEditors: function () {
            this.goIndex("pages/basePlugins/baseEditors");
        },
        //基础组件--单选按钮
        baseRadio:function(){
            this.goIndex("pages/basePlugins/baseRadio");
        },
        //基础组件--多选按钮
        baseCheckbox:function(){
            this.goIndex("pages/basePlugins/baseCheckbox");
        },
        //基础组件--下拉列表
        baseSelect:function(){
            this.goIndex("pages/basePlugins/baseSelect");
        },
        //基础组件--日期选择器
        baseDatepicker:function(){
            this.goIndex("pages/basePlugins/baseDatepicker");
        },
        //基础组件--数据表
        baseDataTable:function(){
            this.goIndex("pages/basePlugins/baseDataTable");
        },
        //基础组件--表单验证
        baseFormValidate:function(){
            this.goIndex("pages/basePlugins/baseFormValidate");
        },
        //基础组件--图片上传
        baseUploadImg:function(){
            this.goIndex("pages/basePlugins/baseUploadImg");
        },
        //基础组件--文件上传
        baseUploadFile:function(){
            this.goIndex("pages/basePlugins/baseUploadFile");
        },


        //基础组件--添加内容块
        baseAddModule:function(){
            this.goIndex("pages/basePlugins/baseAddModule");
        },
        //基础组件--模态框弹层
        baseModal:function(){
            this.goIndex("pages/basePlugins/baseModal");
        },
        //基础组件--tab页签切换
        baseTabSwitching:function(){
            this.goIndex("pages/basePlugins/baseTabSwitching");
        },
        //基础组件--tab页签切换Canvas
        baseSwitchingCanvas:function(){
            this.goIndex("pages/basePlugins/baseSwitchingCanvas");
        },
        //基础组件--icon自定义及fa图标
        baseIcon:function(){
            this.goIndex("pages/basePlugins/baseIcon");
        },
        //概览页布局--概览页基本内容块
        baseBlock:function(){
            this.goIndex("pages/overview/baseBlock");
        },
        overviewOne:function(){
            this.goIndex("pages/overview/overviewOne");
        },
        overviewTwo:function(){
            this.goIndex("pages/overview/overviewTwo");
        },
        overviewThree:function(){
            this.goIndex("pages/overview/overviewThree");
        },

        //基础组件--综合登陆页
        baseLoginPageIndex: function () {
            this.goIndex("pages/basePlugins/baseLoginPageIndex");
        },

        /* 最早的组件页实例 */
        putong_content:function(){
            this.goIndex("pages/putong_content");
        }
    })
});