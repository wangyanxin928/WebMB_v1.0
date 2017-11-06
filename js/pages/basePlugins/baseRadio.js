// ================================================================
//  author:文霞
//  createDate: 2016/09/05
//  description: 基础组件——单选
//  ===============================================================
define(function (require) {
    "use strict";
    var tpl = require('text!tpl/basePlugins/baseRadio.html'),
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
        	var me=this;
        	//如要初始化当前View中的全部单选按钮，使用下面的代码
//          BasePluginsUTIL.initCheck();
            
            //如果要初始化某个范围内的单选按钮
            BasePluginsUTIL.initCheck(me.$("#form1"));
            
            //初始化单选按钮事件，先绑定事件再初始化插件
            this.initCheckEvent();
            
            //先初始化icheck
        	BasePluginsUTIL.initCheck(me.$("#form3"));
            //初始化某个范围内的input 单选不可点击
        	$('#haveEventGroup3 input').iCheck('disable');
        	
        	//初始化自定义className的icheck
        	BasePluginsUTIL.initCheck(me.$("#form4"),"myIcheck");
        },
        events: {
            "click #changeRadioCheck":"changeRadioCheck",
            "click .shootLayer": "shootLayer"
        },
        initCheckEvent:function(){
        	var me=this;
        	me.$('#form2 .icheck').off('ifChecked').on('ifChecked', function(event){ //ifCreated 事件应该在插件初始化之前绑定
				var selectText=$(event.target).val();//attr("dataKey");
				BasePluginsUTIL.toastrAlert('success', '提示', selectText);
			}); 
        	BasePluginsUTIL.initCheck(me.$("#form2"));//初始化单选/复选控件
        },

        changeRadioCheck:function(){
        	
        	//初始化icheck之后，修改选中状态
        	$('#haveEventGroup3 input[value="小学"]').iCheck('check');
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
    /***下面是icheck的常用方法使用说明
     * 其他详情可参考http://blog.sina.com.cn/s/blog_7c76d6390102vua5.html
     * 
     * $('input').iCheck('check');   //将输入框的状态设置为checked 
     * $('input').iCheck('uncheck'); //移除 checked 状态 
     * $('input').iCheck('toggle');  //toggle checked state 
     * $('input').iCheck('disable'); //将输入框的状态设置为 disabled 
     * $('input').iCheck('enable');  //移除 disabled 状态 
     * $('input').iCheck('update');  //apply input changes, which were done outside the plugin 
     * $('input').iCheck('destroy'); //移除iCheck样式 
     * 
     *  【事件名称	使用时机】
     * ifClicked	 用户点击了自定义的输入框或与其相关联的label
     * ifChanged	 输入框的 checked 或 disabled 状态改变了
     * ifChecked	 输入框的状态变为 checked
     * ifUnchecked	 checked 状态被移除
     * ifDisabled	 输入框状态变为 disabled
     * ifEnabled	 disabled 状态被移除
     * ifCreated	 输入框被应用了iCheck样式
     * ifDestroyed	 iCheck样式被移除
     * 
     * 
     * 
	*/
});