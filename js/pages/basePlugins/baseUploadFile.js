// ================================================================
//  author:文霞
//  createDate: 2017/07/14
//  description: 基础组件——文件上传
//  ===============================================================
define(function (require) {
    "use strict";
    var tpl = require('text!tpl/basePlugins/baseUploadFile.html'),
        template = _.template(tpl), _this;
    var myossupload = require('myossupload');
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
        events: {
            "change #fileUpload":"fileSelect"
        },
        afterRender:function(){

            //文件上传需要的对象--多个对象
            var uploadoption2={
                "choosebtn":"selectfiles2",// 选择文件按钮id
                "uploadbtn":"postfiles2",//确定上传按钮id
                "container":"container12",//选择和确实上传按钮的父节点id
                "ossfile":"ossfile2",//图片存放位置区域id
                "g_dirname":"ceshi/",//如果不填，默认是上传到根目录, 注意目录要带/结尾
                "g_object_name_type":"local_name",//local_name:上传文件名字保持本地文件名字,random_name:上传文件名字是随机文件名
                "type":"file",//head头像模式显示为头像,img图片格式可以是多个图片是个图片列表,file文件格式一个个文件列表带进度条显示
                "multiple":true,//是否多个文件上传,“是”则不会自动上传，需要点击确认按钮一起上传，“否”则选择完一个文件会自动上传
                "filters":{//文件类型的限制
                    "types":"doc,docx,xlsx"
                }
            };
            var uploader2=myossupload.createUploader(uploadoption2);
            uploader2.init();

            //单个对象
            var uploadoptionS={
                "choosebtn":"selectfilesS",// 选择文件按钮id
//                "uploadbtn":"",//确定上传按钮id
                "container":"containerS",//选择和确实上传按钮的父节点id
                "ossfile":"ossfileS",//图片存放位置区域id
                "g_dirname":"ceshi/",//如果不填，默认是上传到根目录, 注意目录要带/结尾
                "g_object_name_type":"local_name",//local_name:上传文件名字保持本地文件名字,random_name:上传文件名字是随机文件名
                "type":"file",//head头像模式显示为头像,img图片格式可以是多个图片是个图片列表,file文件格式一个个文件列表带进度条显示
                "multiple":false,//是否多个文件上传,“是”则不会自动上传，需要点击确认按钮一起上传，“否”则选择完一个文件会自动上传
                "filters":{
                    "types":"doc,docx,xlsx"//"png,pg,tmp,jif,bmp,jpeg"
                }
            };
            var uploaderS=myossupload.createUploader(uploadoptionS);
            uploaderS.init();

            //图片
            var uploadoptionPic={
                "choosebtn":"selectfilesPic",// 选择文件按钮id
//                "uploadbtn":"",//确定上传按钮id
                "container":"containerPic",//选择和确实上传按钮的父节点id
                "ossfile":"ossfilePic",//图片存放位置区域id
                "g_dirname":"ceshi/",//如果不填，默认是上传到根目录, 注意目录要带/结尾
                "g_object_name_type":"local_name",//local_name:上传文件名字保持本地文件名字,random_name:上传文件名字是随机文件名
                "type":"img",//head头像模式显示为头像,img图片格式可以是多个图片是个图片列表,file文件格式一个个文件列表带进度条显示
                "multiple":false//是否多个文件上传
            };
            var uploaderPic=myossupload.createUploader(uploadoptionPic);
            uploaderPic.init();

            //文件上传（非阿里云），删除
            $("#fileListWrapper ul").delegate("a>i","click",function(e){
                e.stopPropagation();
                if($("#fileListWrapper ul>li").length==1){
                    $("#fileListWrapper").hide();
                }
                $(e.target).closest("li").remove();
            });
        },
        fileSelect:function(e){
            BasePluginsUTIL.UploadFile(e,function(result,file){
                var currLi=$('<li>');
                var currA=$('<a>');
                currA.attr("src",result);
                currA.html(file.name+'<i class="fa fa-times"></i>');
                currLi.html(currA);
                $("#fileListWrapper ul").append(currLi);
                if($("#fileListWrapper ul>li").length==1){
                    $("#fileListWrapper").show();
                }
            });
        }
    });
});
