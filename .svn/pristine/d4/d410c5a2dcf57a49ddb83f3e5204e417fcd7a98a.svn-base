// ================================================================
//  author:wyx
//  createDate: 2017/08/12
//  description: 基础组件——时间
//  ===============================================================
define(function (require) {
    "use strict";
    var tpl = require('text!tpl/basePlugins/baseSwitchingCanvas.html'),
        template = _.template(tpl), _this;

    //引入图形
    var echarts = require('echarts');

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
            this.showSchoolSafe0();
        },
        events: {
            //tab切换事件
            "click #canvas0": "canvas0",
            "click #canvas1": "canvas1",
            "click #canvas2": "canvas2",
            "click #canvas3": "canvas3",
            "click #canvas4": "canvas4"
        },
        canvas0: function () {
            this.showSchoolSafe0();
        },
        canvas1: function () {
            setTimeout(function () {
                _this.showSchoolSafe1();
            }, 200)
        },
        canvas2: function () {
            setTimeout(function () {
                _this.showSchoolSafe2();
            }, 200)
        },
        canvas3: function () {
            setTimeout(function () {
                _this.showSchoolSafe3();
            }, 200)
        },
        canvas4: function () {
            setTimeout(function () {
                _this.showSchoolSafe4();
            }, 200)
        },
        showSchoolSafe0: function () {
            var myChart = echarts.init(document.getElementById('dataTableWrapper'), 'macarons');

            var option = {
                title: {
                    text: '一年级1班语文课堂平均得分分布--2017年第一周',
                    subtext: 'Interactive New Classroom 2017'
                },
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c}人"
                },
                toolbox: {
                    show: true,
                    feature: {
                        mark: {show: true},
                        dataView: {show: true, readOnly: false},
                        restore: {show: true},
                        saveAsImage: {show: true}
                    }
                },
                calculable: true,
                series: [
                    {
                        name: '互动评分',
                        type: 'funnel',
                        x: '10%',
                        y: 60,
                        //x2: 80,
                        y2: 20,
                        width: '80%',
                        // height: {totalHeight} - y - y2,
                        min: 0,
                        max: 100,
                        minSize: '0%',
                        maxSize: '100%',
                        sort: 'descending', // 'ascending', 'descending'
                        gap: 10,
                        itemStyle: {
                            normal: {
                                // color: 各异,
                                borderColor: '#fff',
                                borderWidth: 1,
                                label: {
                                    show: true,
                                    position: 'inside',
                                    formatter: "{b} \n{c}人"
                                    // textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE
                                },
                                labelLine: {
                                    show: false,
                                    length: 10,
                                    lineStyle: {
                                        // color: 各异,
                                        width: 1,
                                        type: 'solid'
                                    }
                                }
                            },
                            emphasis: {
                                // color: 各异,
                                borderColor: 'red',
                                borderWidth: 5,
                                label: {
                                    show: true,
                                    formatter: '{b}:{c}%',
                                    textStyle: {
                                        fontSize: 20
                                    }
                                },
                                labelLine: {
                                    show: true
                                }
                            }
                        },
                        data: [
                            {value: 100, name: '80-100分'},
                            {value: 80, name: '60-80分'},
                            {value: 60, name: '40-60分'},
                            {value: 40, name: '20-40分'},
                            {value: 20, name: '0-20分'}
                        ]
                    }
                ]
            };


            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);
        },
        showSchoolSafe1: function () {
            var myChart1 = echarts.init(document.getElementById('dataTableWrapper1'), 'macarons');

            var option = {
                title: {
                    text: '本周上课提问次数',
                    subtext: "次数",
                    x: 'left'
                },
                tooltip: {
                    trigger: 'item',
                    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    },
                    formatter: function (params) {
                        return params.name + "（" + params.data[2] + "）" + params.seriesName + "：" + params.data[1] + "次";
                    }
                },
                legend: {
                    data: ['语文', '数学', '英语', '品德与社会', '科学', '体育', '音乐', '美术', '其他']
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: [
                    {
                        type: 'category',
                        data: ['一年级', '二年级', '三年级', '四年级', '五年级', '六年级']
                    }
                ],
                yAxis: [
                    {
                        type: 'value'
                    }
                ],
                series: [
                    {
                        name: '语文',
                        type: 'bar',
                        stack: '1班',
                        data: [[0, 30, '1班'], [1, 12, '1班'], [2, 21, '1班'], [3, 14, '1班'], [4, 18, '1班'], [5, 24, '1班']]
                    },
                    {
                        name: '语文',
                        type: 'bar',
                        stack: '2班',
                        data: [[0, 30, '2班'], [1, 32, '2班'], [2, 31, '2班'], [3, 34, '2班'], [4, 30, '2班'], [5, 30, '2班']]
                    },
                    {
                        name: '语文',
                        type: 'bar',
                        stack: '3班',
                        data: [[0, 30, '3班'], [1, 32, '3班'], [2, 31, '3班'], [3, 34, '3班'], [4, 30, '3班'], [5, 30, '3班']]
                    },
                    {
                        name: '语文',
                        type: 'bar',
                        stack: '4班',
                        data: [[0, 30, '4班'], [1, 32, '4班'], [2, 31, '4班'], [3, 34, '4班'], [4, 30, '4班'], [5, 30, '4班']]
                    },


                    {
                        name: '数学',
                        type: 'bar',
                        stack: '1班',
                        data: [[0, 20, '1班'], [1, 19, '1班'], [2, 18, '1班'], [3, 14, '1班'], [4, 6, '1班'], [5, 10, '1班']]
                    },
                    {
                        name: '数学',
                        type: 'bar',
                        stack: '2班',
                        data: [[0, 10, '2班'], [1, 32, '2班'], [2, 21, '2班'], [3, 14, '2班'], [4, 30, '2班'], [5, 25, '2班']]
                    },

                    {
                        name: '数学',
                        type: 'bar',
                        stack: '3班',
                        data: [[0, 10, '3班'], [1, 9, '3班'], [2, 28, '3班'], [3, 19, '3班'], [4, 16, '3班'], [5, 19, '3班']]
                    },
                    {
                        name: '数学',
                        type: 'bar',
                        stack: '4班',
                        data: [[0, 14, '4班'], [1, 22, '4班'], [2, 41, '4班'], [3, 54, '4班'], [4, 30, '4班'], [5, 25, '4班']]
                    },


                    {
                        name: '英语',
                        type: 'bar',
                        stack: '1班',
                        data: [[0, 10, '3班'], [1, 22, '3班'], [2, 15, '3班'], [3, 24, '3班'], [4, 36, '3班'], [5, 24, '3班']]

                    },

                    {
                        name: '英语',
                        type: 'bar',
                        stack: '2班',
                        data: [[0, 10, '2班'], [1, 32, '2班'], [2, 21, '2班'], [3, 14, '2班'], [4, 30, '2班'], [5, 25, '2班']]
                    },

                    {
                        name: '英语',
                        type: 'bar',
                        stack: '3班',
                        data: [[0, 10, '3班'], [1, 32, '3班'], [2, 21, '3班'], [3, 14, '3班'], [4, 30, '3班'], [5, 25, '3班']]
                    },
                    {
                        name: '英语',
                        type: 'bar',
                        stack: '4班',
                        data: [[0, 14, '4班'], [1, 22, '4班'], [2, 41, '4班'], [3, 54, '4班'], [4, 30, '4班'], [5, 25, '4班']]
                    },


                    {
                        name: '品德与社会',
                        type: 'bar',
                        stack: '1班',
                        data: [[0, 10, '2班'], [1, 32, '2班'], [2, 21, '2班'], [3, 14, '2班'], [4, 30, '2班'], [5, 25, '2班']]

                    },
                    {
                        name: '品德与社会',
                        type: 'bar',
                        stack: '2班',
                        data: [[0, 10, '2班'], [1, 32, '2班'], [2, 21, '2班'], [3, 14, '2班'], [4, 30, '2班'], [5, 25, '2班']]

                    },
                    {
                        name: '品德与社会',
                        type: 'bar',
                        stack: '3班',
                        data: [[0, 10, '3班'], [1, 32, '3班'], [2, 21, '3班'], [3, 14, '3班'], [4, 30, '3班'], [5, 25, '3班']]

                    },
                    {
                        name: '品德与社会',
                        type: 'bar',
                        stack: '4班',
                        data: [[0, 14, '4班'], [1, 22, '4班'], [2, 41, '4班'], [3, 54, '4班'], [4, 30, '4班'], [5, 25, '4班']]


                    },
                    {
                        name: '体育',
                        type: 'bar',
                        stack: '1班',
                        data: [[0, 20, '1班'], [1, 19, '1班'], [2, 18, '1班'], [3, 14, '1班'], [4, 6, '1班'], [5, 10, '1班']]
                    },
                    {
                        name: '体育',
                        type: 'bar',
                        stack: '2班',
                        data: [[0, 10, '2班'], [1, 32, '2班'], [2, 21, '2班'], [3, 14, '2班'], [4, 30, '2班'], [5, 25, '2班']]
                    },
                    {
                        name: '体育',
                        type: 'bar',
                        stack: '3班',
                        data: [[0, 10, '3班'], [1, 32, '3班'], [2, 21, '3班'], [3, 14, '3班'], [4, 30, '3班'], [5, 25, '3班']]

                    },
                    {
                        name: '体育',
                        type: 'bar',
                        stack: '4班',
                        data: [[0, 30, '4班'], [1, 32, '4班'], [2, 31, '4班'], [3, 34, '4班'], [4, 30, '4班'], [5, 30, '4班']]

                    },
                    {
                        name: '音乐',
                        type: 'bar',
                        stack: '1班',
                        data: [[0, 20, '1班'], [1, 19, '1班'], [2, 18, '1班'], [3, 14, '1班'], [4, 6, '1班'], [5, 10, '1班']]
                    },
                    {
                        name: '音乐',
                        type: 'bar',
                        stack: '2班',
                        data: [[0, 10, '2班'], [1, 32, '2班'], [2, 21, '2班'], [3, 14, '2班'], [4, 30, '2班'], [5, 25, '2班']]
                    },

                    {
                        name: '音乐',
                        type: 'bar',
                        stack: '3班',
                        data: [[0, 10, '3班'], [1, 9, '3班'], [2, 28, '3班'], [3, 19, '3班'], [4, 16, '3班'], [5, 19, '3班']]
                    },
                    {
                        name: '音乐',
                        type: 'bar',
                        stack: '4班',
                        data: [[0, 14, '4班'], [1, 22, '4班'], [2, 41, '4班'], [3, 34, '4班'], [4, 30, '4班'], [5, 25, '4班']]
                    },

                    {
                        name: '美术',
                        type: 'bar',
                        stack: '1班',
                        data: [[0, 10, '2班'], [1, 32, '2班'], [2, 21, '2班'], [3, 14, '2班'], [4, 30, '2班'], [5, 25, '2班']]

                    },
                    {
                        name: '美术',
                        type: 'bar',
                        stack: '2班',
                        data: [[0, 10, '2班'], [1, 32, '2班'], [2, 21, '2班'], [3, 14, '2班'], [4, 30, '2班'], [5, 25, '2班']]

                    },
                    {
                        name: '美术',
                        type: 'bar',
                        stack: '3班',
                        data: [[0, 10, '3班'], [1, 32, '3班'], [2, 21, '3班'], [3, 14, '3班'], [4, 30, '3班'], [5, 25, '3班']]

                    },
                    {
                        name: '美术',
                        type: 'bar',
                        stack: '4班',
                        data: [[0, 14, '4班'], [1, 22, '4班'], [2, 41, '4班'], [3, 14, '4班'], [4, 30, '4班'], [5, 25, '4班']]


                    },


                    {
                        name: '其他',
                        type: 'bar',
                        stack: '1班',
                        data: [[0, 10, '1班'], [1, 22, '1班'], [2, 15, '1班'], [3, 24, '1班'], [4, 36, '1班'], [5, 24, '1班']]

                    },

                    {
                        name: '其他',
                        type: 'bar',
                        stack: '2班',
                        data: [[0, 10, '2班'], [1, 32, '2班'], [2, 21, '2班'], [3, 14, '2班'], [4, 30, '2班'], [5, 25, '2班']]
                    },

                    {
                        name: '其他',
                        type: 'bar',
                        stack: '3班',
                        data: [[0, 10, '3班'], [1, 32, '3班'], [2, 21, '3班'], [3, 14, '3班'], [4, 30, '3班'], [5, 25, '3班']]
                    },
                    {
                        name: '其他',
                        type: 'bar',
                        stack: '4班',
                        data: [[0, 14, '4班'], [1, 22, '4班'], [2, 41, '4班'], [3, 24, '4班'], [4, 30, '4班'], [5, 25, '4班']]
                    }

                ]
            };

            // 使用刚指定的配置项和数据显示图表。
            myChart1.setOption(option);
        },
        showSchoolSafe2: function () {
            var myChart2 = echarts.init(document.getElementById('dataTableWrapper2'), 'macarons');

            var option = {
                title: {
                    x: 'center',
                    text: '七年级各科上课次数统计--2017年上学期',
                    subtext: 'IACLASSROOM 2017'
                },
                tooltip: {
                    trigger: 'item'
                },
                toolbox: {
                    show: true,
                    feature: {
                        dataView: {show: true, readOnly: false},
                        restore: {show: true},
                        saveAsImage: {show: true}
                    }
                },
                calculable: true,
                grid: {
                    borderWidth: 0,
                    y: 80,
                    y2: 60
                },
                xAxis: [
                    {
                        type: 'category',
                        show: false,
                        data: ['语文', '数学', '英语', '历史', '地理', '政治', '物理', '化学', '生物']
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        show: false
                    }
                ],
                series: [
                    {
                        name: 'ECharts例子个数统计',
                        type: 'bar',
                        itemStyle: {
                            normal: {
                                color: function (params) {
                                    // build a color map as your need.
                                    var colorList = [
                                        '#C1232B', '#B5C334', '#FCCE10', '#E87C25', '#27727B',
                                        '#FE8463', '#9BCA63', '#FAD860', '#F3A43B', '#60C0DD',
                                        '#D7504B', '#C6E579', '#F4E001', '#F0805A', '#26C0C0'
                                    ];
                                    return colorList[params.dataIndex]
                                },
                                label: {
                                    show: true,
                                    position: 'top',
                                    formatter: '{b}\n{c}'
                                }
                            }
                        },
                        data: [122, 211, 104, 42, 112, 154, 63, 156, 142],
                        markPoint: {
                            tooltip: {
                                trigger: 'item',
                                backgroundColor: 'rgba(0,0,0,0)',
                                formatter: function (params) {
                                    return '<img src="'
                                        + params.data.symbol.replace('image://', '')
                                        + '"/>';
                                }
                            },
                            data: [
                                {
                                    xAxis: 0,
                                    y: 350,
                                    name: 'Line',
                                    symbolSize: 20,
                                    symbol: 'image://../asset/ico/折线图.png'
                                },
                                {xAxis: 1, y: 350, name: 'Bar', symbolSize: 20, symbol: 'image://../asset/ico/柱状图.png'},
                                {
                                    xAxis: 2,
                                    y: 350,
                                    name: 'Scatter',
                                    symbolSize: 20,
                                    symbol: 'image://../asset/ico/散点图.png'
                                },
                                {xAxis: 3, y: 350, name: 'K', symbolSize: 20, symbol: 'image://../asset/ico/K线图.png'},
                                {xAxis: 4, y: 350, name: 'Pie', symbolSize: 20, symbol: 'image://../asset/ico/饼状图.png'},
                                {
                                    xAxis: 5,
                                    y: 350,
                                    name: 'Radar',
                                    symbolSize: 20,
                                    symbol: 'image://../asset/ico/雷达图.png'
                                },
                                {
                                    xAxis: 6,
                                    y: 350,
                                    name: 'Chord',
                                    symbolSize: 20,
                                    symbol: 'image://../asset/ico/和弦图.png'
                                },
                                {
                                    xAxis: 7,
                                    y: 350,
                                    name: 'Force',
                                    symbolSize: 20,
                                    symbol: 'image://../asset/ico/力导向图.png'
                                },
                                {xAxis: 8, y: 350, name: 'Map', symbolSize: 20, symbol: 'image://../asset/ico/地图.png'},
                                {
                                    xAxis: 9,
                                    y: 350,
                                    name: 'Gauge',
                                    symbolSize: 20,
                                    symbol: 'image://../asset/ico/仪表盘.png'
                                },
                                {
                                    xAxis: 10,
                                    y: 350,
                                    name: 'Funnel',
                                    symbolSize: 20,
                                    symbol: 'image://../asset/ico/漏斗图.png'
                                },
                            ]
                        }
                    }
                ]
            };
            // 使用刚指定的配置项和数据显示图表。
            myChart2.setOption(option);
        },
        showSchoolSafe3: function () {
            var myChart3 = echarts.init(document.getElementById('dataTableWrapper3'), 'macarons');

            var placeHoledStyle = {
                normal: {
                    barBorderColor: 'rgba(0,0,0,0)',
                    color: 'rgba(0,0,0,0)'
                },
                emphasis: {
                    barBorderColor: 'rgba(0,0,0,0)',
                    color: 'rgba(0,0,0,0)'
                }
            };
            var dataStyle = {
                normal: {
                    label: {
                        show: true,
                        position: 'insideLeft',
                        formatter: '{c}次'
                    }
                }
            };
            var option = {
                title: {
                    text: '互动课堂统计图--第一周',
                    subtext: 'From ExcelHome',
                    sublink: 'http://e.weibo.com/1341556070/AiEscco0H'
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    },
                    formatter: '{b}<br/>{a0}:{c0}%<br/>{a2}:{c2}%<br/>{a4}:{c4}%<br/>{a6}:{c6}%'
                },
                legend: {
                    y: 55,

                    data: ['语文', '数学', '英语']
                },
                toolbox: {
                    show: true,
                    feature: {
                        mark: {show: true},
                        dataView: {show: true, readOnly: false},
                        restore: {show: true},
                        saveAsImage: {show: true}
                    }
                },
                grid: {
                    y: 80,
                    y2: 30
                },
                xAxis: [
                    {
                        type: 'value',
                        position: 'top',
                        splitLine: {show: false},
                        axisLabel: {show: false}
                    }
                ],
                yAxis: [
                    {
                        type: 'category',
                        splitLine: {show: false},
                        data: ['一年级', '二年级', '三年级', '四年级', '五年级']
                    }
                ],
                series: [
                    {
                        name: '语文',
                        type: 'bar',
                        stack: '总量',
                        itemStyle: dataStyle,
                        data: [38, 50, 33, 72, 33]
                    },
                    {
                        name: '语文',
                        type: 'bar',
                        stack: '总量',
                        itemStyle: placeHoledStyle,
                        data: [62, 50, 67, 28, 67]
                    },
                    {
                        name: '数学',
                        type: 'bar',
                        stack: '总量',
                        itemStyle: dataStyle,
                        data: [61, 41, 42, 30, 41]
                    },
                    {
                        name: '数学',
                        type: 'bar',
                        stack: '总量',
                        itemStyle: placeHoledStyle,
                        data: [39, 59, 58, 70, 59]
                    },
                    {
                        name: '英语',
                        type: 'bar',
                        stack: '总量',
                        itemStyle: dataStyle,
                        data: [37, 35, 44, 60, 22]
                    },
                    {
                        name: '英语',
                        type: 'bar',
                        stack: '总量',
                        itemStyle: placeHoledStyle,
                        data: [63, 65, 56, 40, 78]
                    }
                ]
            };
            // 使用刚指定的配置项和数据显示图表。
            myChart3.setOption(option);
        },
        showSchoolSafe4: function () {
            var myChart4 = echarts.init(document.getElementById('dataTableWrapper4'), 'macarons');

            var option = {
                title: {
                    text: '年级互动课程频率统计--2017年上学期',
                    subtext: 'IACLASS 2017'
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: ['一年级', '二年级', '三年级']
                },
                toolbox: {
                    show: true,
                    feature: {
                        mark: {show: true},
                        dataView: {show: true, readOnly: false},
                        magicType: {show: true, type: ['line', 'bar', 'stack', 'tiled']},
                        restore: {show: true},
                        saveAsImage: {show: true}
                    }
                },
                calculable: true,
                xAxis: [
                    {
                        type: 'category',
                        boundaryGap: false,
                        data: ['9月', '10月', '11月', '12月', '1月']
                    }
                ],
                yAxis: [
                    {
                        type: 'value'
                    }
                ],
                series: [
                    {
                        name: '一年级',
                        type: 'line',
                        smooth: true,
                        itemStyle: {normal: {areaStyle: {type: 'default'}}},
                        data: [10, 12, 21, 54, 260, 830, 710]
                    },
                    {
                        name: '二年级',
                        type: 'line',
                        smooth: true,
                        itemStyle: {normal: {areaStyle: {type: 'default'}}},
                        data: [30, 182, 434, 791, 390, 30, 10]
                    },
                    {
                        name: '三年级',
                        type: 'line',
                        smooth: true,
                        itemStyle: {normal: {areaStyle: {type: 'default'}}},
                        data: [1320, 1132, 601, 234, 120, 90, 20]
                    }
                ]
            };
            // 使用刚指定的配置项和数据显示图表。
            myChart4.setOption(option);
        },
    });
});
