// ================================================================
//  author:w王燕欣
//  createDate: 2017/07/14
//  description: 基础组件——增加模块
//  ===============================================================
define(function (require) {
    "use strict";
    var tpl = require('text!tpl/basePlugins/baseAddModule.html'),
        template = _.template(tpl), _this;
    require('bootstrapdatepicker');
    require('daterangepicker_cn');
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
            me._needDelModule = undefined;//定义待删除的内容块变量
        	me.initEvent();//初始化页面事件
        },
        events: {
			"click #addModule": "addModule"
        },
        addModule: function () {
            var me=this;

            /*
            //方法一：从html获取块内容，也可以直接写在js代码中；【！！！勿删！！！】
            var moduleContent=require('text!tpl/basePlugins/baseFormValidate.html');
            moduleContent = $(moduleContent).find(".portlet").removeClass("full-height-content").removeClass("full-height-content-scrollable").addClass("bordered");
            //内容块工具栏添加删除、复制按钮
            //moduleContent.find(".portlet-title>.tools").append('<a href="javascript:;" class="remove"> </a>');
            moduleContent.find(".portlet-title>.tools").after('<div class="actions"><a href="javascript:;" class="btn btn-success btn-sm"> <i class="fa fa-plus"></i> 复制 </a>'
            +'<a href="javascript:;" class="btn default btn-sm"> <i class="fa fa-remove"></i> 删除 </a></div>');
            */
            //方法二：从页面元素获取块内容
            var moduleContent=$("#moduleContent").clone();
            me.handleAddModule(moduleContent);
        },
        initEvent:function(){
            var me=this;

            //【复制内容块】当内容块有icheck时，需要先将原内容块的icheck销毁，复制内容之后，在重新初始化icheck
            $("#moduleListWrapper").delegate(".portlet>.portlet-title>.actions>.addModule","click",function(){

                //从页面元素获取块内容
                var  moduleContent=$(this).closest(".portlet");
                moduleContent.find('input.icheck').iCheck('destroy');//销毁内容块中的icheck

                var moduleContentClone=moduleContent.clone();
                me.handleAddModule(moduleContentClone);

                BasePluginsUTIL.initCheck(moduleContent);//原内容块的icheck再次初始化
            });
            //【删除内容块】
            $("#moduleListWrapper").delegate(".portlet>.portlet-title>.actions>.removeModule","click",function(){
                var  moduleContent=$(this).closest(".portlet");
                me._needDelModule=moduleContent;
                $('#confirm').modal("show");//删除数据的业务逻辑在弹层的点击事件中实现
            });
            //【数据提交】根据是否存在id,做添加或修改操作
            $("#moduleListWrapper").delegate(".btnSaveData","click",function(){
                var  moduleContent=$(this).closest(".portlet");
                //是否存在data-id作为这条数据是否在数据库中存在的依据；data-id的值就是这条数据的id
                if(moduleContent.attr("data-id")){
                    //若存在id，则调添加接口，ajax添加数据（下面的提示信息写在回调里）
                    BasePluginsUTIL.toastrAlert("success",'提示',"数据添加成功");
                }else{
                    //没有id，说明这条数据还没有存储到数据库，则调修改接口，ajax修改数据（下面的提示信息写在回调里）
                    BasePluginsUTIL.toastrAlert("success",'提示',"数据修改成功");
                }
            });
            //弹出层的确定事件：定义内容块删除方法
            $("#yesCheck").unbind("click").bind("click", me.handleDelModule);
        },
        //添加内容块
        handleAddModule:function(moduleContent){
            var me=this;
            moduleContent.removeAttr("id");
            var moduleFormId = "from_" + BasePluginsUTIL.loadRandom();
            moduleContent.find("form").attr("id",moduleFormId);

            //【展开当前内容块，折叠其他】1.展开当前内容块
            var moduleCopyExpand =moduleContent.find(".portlet-title>.tools>.expand");
            if(moduleCopyExpand.length!=0){
                moduleCopyExpand.removeClass("expand").addClass("collapse");
                moduleContent.children(".portlet-body").show();
            }
            //【展开当前内容块，折叠其他】2.将其他内容块折叠起来
            var collapses=$("#moduleListWrapper>.portlet>.portlet-title>.tools>.collapse");
            var el=collapses.closest(".portlet").children(".portlet-body");
            collapses.removeClass("collapse").addClass("expand");
            el.slideUp(200);

            //将内容块添加到内容块的容器中，实例中的容器id为moduleListWrapper
            $("#moduleListWrapper").append(moduleContent);//将内容块添加到容器结尾处
            //$("moduleListWrapper").prepend(moduleContent);//将内容块添加到容器开头处

            //初始化内容块中的控件
            BasePluginsUTIL.initCheck(me.$("#"+moduleFormId));
            BasePluginsUTIL.initDatePicker(me.$("#"+moduleFormId));
        },
        //删除内容块
        handleDelModule:function(){
            Pace.restart();
            var moduleContent=_this._needDelModule;
            if(!moduleContent){
                return;
            }
            //是否存在data-id作为这条数据是否在数据库中存在的依据；data-id的值就是这条数据的id
            if(moduleContent.attr("data-id")){
                //若存在id，则ajax删除数据，回调时删除当前内容块
                moduleContent.remove();
                BasePluginsUTIL.toastrAlert("success",'提示',"数据删除成功");
                _this._needDelModule=undefined;
            }else{
                //没有id，说明这条数据还没有存储到数据库，则直接删除dom节点
                moduleContent.remove();
                BasePluginsUTIL.toastrAlert("success",'提示',"数据删除成功");
                _this._needDelModule=undefined;
            }
        }
    });
});
/*注意：
* 1. 添加的内容块的内容，初始时可以写在业务页中隐藏掉，作为模板每次复制；或者可以卸载单独的html中，通过require引入；还可以在js中直接写html字符串；
* 2. 可以添加内容块、内容块可复制、可删除、可提交，根据实际业务选择这些事件；
* 3. 内容块的事件定义（复制、删除、提交）建议委托到内容块的容器上，实例中是#moduleListWrapper；
* 4. 复制内容块时，需要注意已经初始化的icheck插件的处理方法，见上面实例；
* */
