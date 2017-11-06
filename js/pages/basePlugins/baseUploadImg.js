// ================================================================
//  author:文霞
//  createDate: 2016/09/06
//  description: 基础组件——选择图片上传
//  ===============================================================
define(function (require) {
    "use strict";
    var tpl = require('text!tpl/basePlugins/baseUploadImg.html'),
        template = _.template(tpl), _this;
    var Cropper=   require('cropper');
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
            "click #saveTeachBase":"saveData",
        	"change #uploadImg":"selectImg"
        },
        selectImg:function(){
        	var me=this;
        	var filename=event.target.files[0].name;	
        	var uploadInputId=event.target.id;
        	BasePluginsUTIL.UploadFile(event, function(file,fileinfo) {
        		var _img1=$('<img style="width: 500px;height: 300px;" id="imgDisplay1" class="img-responsive cropper-hidden" src="'+file+'" alt="Picture">');
        		$('#imageWrapper').empty();
        		//选中的图片在弹层中回显
		        $('#imageWrapper').append(_img1);

		        var croppable = false;
		        $("#imgDisplay1").cropper({
			    	minCanvasWidth: 100,
				    minCanvasHeight: 200,
				    minCropBoxWidth: 10,
				    minCropBoxHeight: 10,
				    minContainerWidth: 500,
				    minContainerHeight: 300,
				    autoCropArea: 0.7,  
				    wheelZoomRatio: 0.1,
				    
			        aspectRatio: 1,//aspectRatio：类型：Number，默认值NaN。设置剪裁容器的比例。
			        viewMode: 1,//这个参数没查到
			        built: function () {
			          croppable = true;
			        }
			    });
				    
		        $.fn.modalmanager.defaults.resize = true;
		 		$('#imgCropperModal').modal({show:false});

			    //弹出层弹出之前的事件
	            $('#imgCropperModal').bind('shown.bs.modal', function () {
	            	$("#btnCropper").off('click').on("click", function () {
	                    var croppedCanvas;
				        var roundedCanvas;
				
				        if (!croppable) {
				          return;
				        }
				
				        // Crop
				        croppedCanvas = $("#imgDisplay1").cropper('getCroppedCanvas');
				
				        // Round//圆形，若不是圆形可以不写
				        roundedCanvas = me.getRoundedCanvas(croppedCanvas);
						roundedCanvas=$(roundedCanvas).css("width","100%");
						
						croppedCanvas=$(croppedCanvas).css("width","100%");
						
				        // Show
						$('#imageResultWrapper').html(croppedCanvas);//roundedCanvas);//
	               	});
	                //点击消按钮事件
	                $("#cancelImg").unbind('click').bind("click", function () {
	                    me.$("#uploadImg").val("");
	                });
	                //点击确定按钮事件
	                $("#confirmImg").unbind('click').bind("click", function () {
	                    var currentImg=$('#imageResultWrapper canvas');
	                    currentImg.css("width","100%");
	                    me.$("#imgDisplay").html(currentImg);
	                    
	                    me.$("#uploadImg").val("");
	                });
	            })
		        $('#imgCropperModal').modal("show");
    		});
        },
        getRoundedCanvas:function(sourceCanvas){
        	var canvas = document.createElement('canvas');
	        var context = canvas.getContext('2d');
	        var width = sourceCanvas.width;
	        var height = sourceCanvas.height;
	
	      	canvas.width = width;
	      	canvas.height = height;
	      	context.beginPath();
	      	context.arc(width / 2, height / 2, Math.min(width, height) / 2, 0, 2 * Math.PI);
	      	context.strokeStyle = 'rgba(0,0,0,0)';
	      	context.stroke();
	      	context.clip();
	      	context.drawImage(sourceCanvas, 0, 0, width, height);
	
	      	return canvas;
        },
        saveData:function(){
	        var imgData=$('#imgDisplay canvas')[0].toDataURL();
			 
			 var imgcolect=[];
			 imgcolect.push({
				fileName: "image4.jpg",
				base64: imgData
			});
			BasePluginsUTIL.toastrAlert('success', '提示', "已获取图片的base64数据流"); 
			 /*RequestPakage1 = {
				"HEAD": {
					"VERSION": "",
					"DEVICETYPE": "",
					"USERID": "",
					"DRIVERID": "",
					"CLOUDID": "",
					"SIGN": "",
					"ZIP": ""
				},
				"INFO": {
					"WCTP":imgcolect
				}
			};
			 $.ajax({
				type: "post",
				url: "http://10.0.0.8:8088/EDUPlatformV3.0/page/wcsqController/imgTest",
				data: {
					JSON_PARAM: JSON.stringify(RequestPakage1)
				},
				success: function(res) {
					$("#loadingToast").hide();
					res = JSON.parse(res);
					if (res.HEAD.RESCODE === "0000") {
						console.log(res.INFO[0]);
					} else{
						alert('保存外出申请失败！');
					}
						
				},
				error: function(e) {
					alert('网络连接失败！');
				}
			})*/
        }
    });
});