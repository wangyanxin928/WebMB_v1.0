// ================================================================
//  author:文霞
//  createDate: 2016/09/06
//  description: 基础组件——下拉
//  ===============================================================
define(function (require) {
    "use strict";
    var tpl = require('text!tpl/basePlugins/baseSelect.html'),
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
            //如要初始化当前View中的全部select，使用下面的代码
//          BasePluginsUTIL.initSelect();

            //如果要初始化某个范围内的select
            BasePluginsUTIL.initSelect(me.$("#form1"));

            //初始化select事件
            this.initSelectEvent();
        },
        events: {
            "click #changeSelect":"changeSelect",
            //此方法是用来弹出示例代码如不需要请删除 start
            "click .shootLayer": "shootLayer"
        }
        //此方法是用来弹出示例代码如不需要请删除 start
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
        initSelectEvent:function(){
        	var me=this;
        	//控件初始化
        	BasePluginsUTIL.initSelect(me.$("#form2"));
        	//事件绑定    与上面的控件初始化没有先后关系
            $('#mySelect1').on('change', function(){
			   	var selected = $('#mySelect1 option:selected').val();
			   	BasePluginsUTIL.toastrAlert('success', '提示', selected);
			});
        	
        	//页面渲染，初始化插件之后为select重新填充数据
        	var optionArr=[
        		'<option value="Option 1">Option 1 </option>',
        		'<option value="Option 2">Option 2 </option>',
        		'<option value="Option 3">Option 3 </option>',
                '<option value="Option 4">Option 4 </option>',
                '<option value="Option 5">Option 5 </option>'];
                
        	$("#mySelect2").empty();
        	$("#mySelect2").append(optionArr.join());
        	//更新内容刷新到相应的位置
            $('#mySelect2').selectpicker('render');
            $('#mySelect2').selectpicker('refresh');
            $('#mySelect2').selectpicker('val', 'Option 5');
            
            //初始化自定义className的select
            BasePluginsUTIL.initSelect(me.$("#form2"),"mySelect");
        },
        changeSelect:function(){       	
        	$('#mySelect3').selectpicker('val', 'Option 3');
        }
    });
    /***下面是bootstrap-select的常用方法
     * 其他详情可参考http://silviomoreto.github.io/bootstrap-select/methods/
     * 
     * .selectpicker('val')
     * .selectpicker('refresh')
     * .selectpicker('render')
     * .selectpicker('hide')
     * .selectpicker('show')
     * .selectpicker('toggle')
     * .selectpicker('destroy')
     * 
     * 
     * 
     * 
	*/
});