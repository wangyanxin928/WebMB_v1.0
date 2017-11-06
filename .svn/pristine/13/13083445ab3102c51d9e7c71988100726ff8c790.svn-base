/**
 * the main entry point
 */
require.config({
    baseUrl: "js",
    paths: {
        common: 'common',
        pages: 'pages',
        tpl: '../tpl',

        //第三方js
        // jQuery
        jquery: 'lib/jquery.min',
        jquerymigrate: 'lib/jquery-migrate.min',



        //text
        text: 'lib/text',
        // underscore
        underscore: 'lib/underscore-1.6.0.min',
        understr: 'lib/underscore.string',

        // Backbone
        backbone: 'lib/backbone-1.1.2.min',

        //其实是metronic中的部分代码，项目中暂时没有引用
        app: "lib/app",

        // BootStrap
        bootstrap: 'plugins/bootstrap/js/bootstrap.min',

        layout: "plugins/layout/scripts/layout",
        metronic: "plugins/layout/scripts/metronic",
        quicksidebar: "plugins/layout/scripts/quick-sidebar",
        jqslimscroll: 'plugins/jquery-slimscroll/jquery.slimscroll.min',
        bHoverDropdown:'plugins/bootstrap-hover-dropdown/bootstrap-hover-dropdown.min',


        //---------------------------组件---------------------------------------
        //日期选择器
        bootstrapdatepicker: 'plugins/bootstrap-datepicker/js/bootstrap-datepicker.min',
        'daterangepicker_cn': 'plugins/bootstrap-datepicker/locales/bootstrap-datepicker.zh-CN.min',

        //单选多选
        icheck: 'plugins/icheck/icheck.min',
        //下拉选择
        bootstrapselect: 'plugins/bootstrap-select/bootstrap-select.min',
        //超级文本编辑器
        bootstrapEditable: 'plugins/bootstrap-editable/bootstrap-editable/js/bootstrap-editable.min',
        //提示信息
        toastr: 'plugins/bootstrap-toastr/toastr.min',
        //模态框弹层
        modalmanager: 'plugins/bootstrap-modal/js/bootstrap-modalmanager',
        modal: 'plugins/bootstrap-modal/js/bootstrap-modal',
        //进度条
        pace: 'plugins/pace/pace.min',
        //表单验证
        validate: 'plugins/jquery-validation/js/jquery.validate.min',
        //开关选择器
        'bootstrap-switch': 'plugins/bootstrap-switch/js/bootstrap-switch.min',
        //数据表dataTable
        dataTable:'plugins/DataTableView/DataTable',
        //数据表dataTableNew
        dataTableNew:'plugins/DataTableView_new/DataTable',
        //图片截取
        cropper:"plugins/cropper/js/cropper",
        //文件上传插件 by wenxia
        plupload:'plugins/ossupload/plupload-2.1.2/js/plupload.full.min',
        base64:'plugins/ossupload/base64',
        myossupload:'plugins/ossupload/myossupload',


        //图表相关插件  20170713 add by 文霞
        echarts:'plugins/echarts/echarts-3.6.2',
        bmap:'plugins/echarts/bmap.min',
        macarons:'plugins/echarts/macarons',
        myDrawChart:'plugins/MyDrawChart',
        fairmindChart:'plugins/MyDrawChart1',

        //echarts--map
        'echarts-map-China':'plugins/echarts/map/china',
        //复制textarea代码
        'Clipboard':'plugins/clipboard/clipboard.min'
    },
    shim: {
        backbone: {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        underscore: {
            exports: '_'
        },
        jquerymigrate: {
            deps: ['jquery']
        },
        jqslimscroll: {
            deps: ['jquery']
        },
        bootstrap: {
            deps: ['jquery']
        },
        //app: {
        //    deps: ['jqslimscroll']
        //},
        layout: {
            deps: ['metronic']
        },
        daterangepicker_cn: {
            deps: ['bootstrapdatepicker']
        },
        toastr: {
            deps: ['jquery']
        },
        myDrawChart1:{
            deps: ['echarts','macarons']
        }
    }
});
require(['backbone', 'jquery', 'underscore', 'jquerymigrate', 'bootstrap', 'jqslimscroll', 'layout', 'quicksidebar'],
    function (Backbone, $, _) {
        //初始化所有组件依赖
        require([ 'toastr', 'icheck', 'bootstrapselect','bootstrapEditable', 'modalmanager', 'modal', 'pace', 'validate',
            'bootstrap-switch','bHoverDropdown'], function (Toastr) {
            require(['common/router','common/basePublicUtil'], function (Router) {
                BasePluginsUTIL.initValidate();//初始化所有验证规则
                //初始化弹出提示
                BasePluginsUTIL.toastr = Toastr;
                //初始化进度条
                /*
                 Pace.start：开始显示进度条，如果你不是使用AMD或者Browserify来加载模块的话，这个会默认执行。
                 Pace.restart：进度条重新加载以及显示。
                 Pace.stop：隐藏进度条以及停止加载。
                 Pace.track：监测一个或者多个请求任务。
                 Pace.ignore：忽略一个或者多个请求任务。*/
                Pace.start();
                Metronic.init(); // init metronic core components
                Layout.init(); // init current layout
                QuickSidebar.init(); // init quick sidebar

                BasePluginsUTIL.router = new Router();
                Backbone.history.start();

            })
        })
    });