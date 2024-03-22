// 第一行第一个

function curveLineInit() {
    const chartDom = document.getElementById('curveLine');
    const myChart = echarts.init(chartDom);
    const option = {
        title: {
            text: '往年游客量前5-省份',
            textStyle: {
                fontWeight: 'normal',
                fontSize: 18,
                color: 'rgba(255,255,255,0.8)',
            },
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['2019', '2020', '2021', '2022', '2023'],
            top: '5%',
            // left: 'center',
            right: '5%',
            textStyle: {//图例文字的样式
                color: '#ffffff',
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['云南', '江苏', '新疆', '海南', '北京'],
            // 设置坐标轴颜色
            axisLine: {
                lineStyle: {
                    color: '#ffffff',
                    width: 1,//这里是为了突出显示加上的
                }
            }
        },
        yAxis: {
            name: '单位：万',
            type: 'value',
            axisLine: {
                lineStyle: {
                    color: '#fdfeff',
                    width: 1,//这里是为了突出显示加上的
                }
            }
        },
        series: [
            {
                name: '2019',
                type: 'line',
                stack: 'Total',
                data: [831, 769, 854, 964, 958, 1100, 1220],
                // 开启平滑曲线
                smooth: true,
                symbol: 'none',
            },
            {
                name: '2020',
                type: 'line',
                stack: 'Total',
                data: [750, 853, 872, 762, 875, 965, 1220],
                // 开启平滑曲线
                smooth: true,
                symbol: 'none'
            },
            {
                name: '2021',
                type: 'line',
                stack: 'Total',
                data: [736, 715, 761, 793, 810, 842, 964],
                // 开启平滑曲线
                smooth: true,
                symbol: 'none'
            },
            {
                name: '2022',
                type: 'line',
                stack: 'Total',
                data: [715, 735, 701, 726, 706, 758, 872],
                // 开启平滑曲线
                smooth: true,
                symbol: 'none'
            },
            {
                name: '2023',
                type: 'line',
                stack: 'Total',
                data: [820, 932, 901, 934, 1290, 1116, 1320],
                // 开启平滑曲线
                smooth: true,
                symbol: 'none'
            }
        ]
    };
    option && myChart.setOption(option);
}

// 第一行第二个
function chinaMapInit() {
    const chartDom = document.getElementById('chinaMap');
    const myChart = echarts.init(chartDom);

    //中国地图
    function randomData() {
        return Math.round(Math.random() * 500);
    }

    const optionChinaMap = {
        title: {
            text: '全国旅游热区',
            textStyle: {
                fontWeight: 'normal',
                fontSize: 18,
                color: 'rgba(255,255,255,0.8)'
            },
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            // orient: 'horizontal',//图例的排列方向
            // textStyle: {color: '#fff'},
            x: 'left',//图例的位置
            y: '20',
            // data: ['全国数据']
        },
        visualMap: {//颜色的设置  dataRange
            // textStyle: {color: '#fff'},
            x: 'left',
            y: 'bottom',
            splitList: [
                {start: 1500}, {start: 900, end: 1500},
                {start: 310, end: 1000}, {start: 200, end: 300},
                {start: 50, end: 200}, {start: 0, end: 50},
            ],
            textStyle: {
                fontWeight: 'normal',
                color: 'rgba(255,255,255,0.8)'
            },
            // text:['高','低'],// 文本，默认为数值文本
            // color: ['#65A2D9', '#E09107', '#A3E00B']
            color: ['#483D8B', '#4169E1', '#9370DB', '#4169E1', '#00BFFF', '#87CEFA']
        },
        roamController: {//控制地图的上下左右放大缩小
            show: true,
            x: 'center',
            mapTypeControl: {
                'china': true
            }
        },
        series: [
            {
                //name: '全国数据',
                type: 'map',
                mapType: 'china',
                zoom: 1.1,
                roam: true,//是否开启鼠标缩放和平移漫游
                itemStyle: {//地图区域的多边形 图形样式
                    normal: {//是图形在默认状态下的样式
                        label: {
                            show: true,
                            textStyle: {color: "rgb(249, 249, 249)"}
                        }
                    },
                    emphasis: {//是图形在高亮状态下的样式,比如在鼠标悬浮或者图例联动高亮时
                        label: {show: true},
                    }
                },
                top: "25",//组件距离容器的距离
                data: [
                    {name: '北京', value: '100'}, {name: '天津', value: randomData()},
                    {name: '上海', value: randomData()}, {name: '重庆', value: randomData()},
                    {name: '河北', value: randomData()}, {name: '河南', value: randomData()},
                    {name: '云南', value: randomData()}, {name: '辽宁', value: randomData()},
                    {name: '黑龙江', value: randomData()}, {name: '湖南', value: randomData()},
                    {name: '安徽', value: randomData()}, {name: '山东', value: randomData()},
                    {name: '新疆', value: randomData()}, {name: '江苏', value: randomData()},
                    {name: '浙江', value: randomData()}, {name: '江西', value: randomData()},
                    {name: '湖北', value: randomData()}, {name: '广西', value: randomData()},
                    {name: '甘肃', value: randomData()}, {name: '山西', value: randomData()},
                    {name: '内蒙古', value: randomData()}, {name: '陕西', value: randomData()},
                    {name: '吉林', value: randomData()}, {name: '福建', value: randomData()},
                    {name: '贵州', value: randomData()}, {name: '广东', value: randomData()},
                    {name: '青海', value: randomData()}, {name: '西藏', value: randomData()},
                    {name: '四川', value: randomData()}, {name: '宁夏', value: randomData()},
                    {name: '海南', value: randomData()}, {name: '台湾', value: randomData()},
                    {name: '香港', value: randomData()}, {name: '澳门', value: randomData()}
                ]
            }
        ]
    };
    myChart.setOption(optionChinaMap, true);
}

// 第一行第三个
function stack() {
    const chartDom = document.getElementById('stack');
    const myChart = echarts.init(chartDom);
    const option = {
        color: ['#6A5ACD', '#4169E1', '#1E90FF', '#87CEFA', '#0000CD'],
        title: {
            text: '部分城市一周客流量',
            textStyle: {
                fontWeight: 'normal',
                fontSize: 18,
                color: 'rgba(255,255,255,0.8)'
            },
        },
        tooltip: {
            /*trigger: 'axis',
            axisPointer: {
                // Use axis to trigger tooltip
                type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
            }*/
        },
        legend: {
            data: ['陕西', '新疆', '江苏', '海南', '北京'],
            top: '5%',
            // left: 'center',
            right: '5%',
            textStyle: {
                color: 'rgba(255,255,255,0.8)'
            },
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            // 设置坐标轴颜色
            axisLine: {
                lineStyle: {
                    color: '#ffffff',
                    width: 1,//这里是为了突出显示加上的
                }
            }
        },
        yAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            // 设置坐标轴颜色
            axisLine: {
                lineStyle: {
                    color: '#ffffff',
                    width: 1,//这里是为了突出显示加上的
                }
            }
        },
        series: [
            {
                name: '陕西',
                type: 'bar',
                stack: 'total',
                label: {
                    show: true
                },
                emphasis: {
                    focus: 'series'
                },
                data: [320, 300, 300, 330, 390, 330, 320]
            },
            {
                name: '新疆',
                type: 'bar',
                stack: 'total',
                label: {
                    show: true
                },
                focus: {
                    focus: 'series'
                },
                data: [120, 130, 100, 130, 90, 230, 240]
            },
            {
                name: '江苏',
                type: 'bar',
                stack: 'total',
                label: {
                    show: true
                },
                emphasis: {
                    focus: 'series'
                },
                data: [220, 180, 190, 230, 290, 330, 310]
            },
            {
                name: '海南',
                type: 'bar',
                stack: 'total',
                label: {
                    show: true
                },
                emphasis: {
                    focus: 'series'
                },
                data: [150, 210, 200, 150, 190, 530, 510]
            },
            {
                name: '北京',
                type: 'bar',
                stack: 'total',
                label: {
                    show: true
                },
                emphasis: {
                    focus: 'series'
                },
                data: [320, 430, 500, 330, 690, 700, 820]
            }
        ]
    };
    option && myChart.setOption(option);
}

// 第二行第一个
function thermal() {
    const chartDom = document.getElementById('Thermal');
    const myChart = echarts.init(chartDom);
    // prettier-ignore
    const hours = [
        '开封', '乐山', '柳州', '中卫', '重庆', '长沙',
        '泰安', '武汉', '威海', '自贡', '丽江', '珠江',
        '延吉', '天津', '北京', '淄博', '杭州', '重庆',
        '南京', '三亚', '拉萨', '大理', '衡阳', '芒市'
    ];
    // prettier-ignore
    const days = [
        'Sunday', 'Saturday', 'Friday', 'Thursday',
        'Wednesday', 'Tuesday', 'Monday'
    ];
    // prettier-ignore
    const data = [[0, 0, 5], [0, 1, 1], [0, 2, 10], [0, 3, 10], [0, 4, 7], [0, 5, 8], [0, 6, 5], [0, 7, 10], [0, 8, 2], [0, 9, 4], [0, 10, 8], [0, 11, 2], [0, 12, 4], [0, 13, 10], [0, 14, 7], [0, 15, 3], [0, 16, 4], [0, 17, 6], [0, 18, 4], [0, 19, 4], [0, 20, 3], [0, 21, 3], [0, 22, 10], [0, 23, 5], [1, 0, 7], [1, 1, 5], [1, 2, 5], [1, 3, 3], [1, 4, 1], [1, 5, 5], [1, 6, 1], [1, 7, 1], [1, 8, 1], [1, 9, 1], [1, 10, 5], [1, 11, 2], [1, 12, 2], [1, 13, 6], [1, 14, 9], [1, 15, 10], [1, 16, 6], [1, 17, 7], [1, 18, 8], [1, 19, 2], [1, 20, 5], [1, 21, 5], [1, 22, 7], [1, 23, 2], [2, 0, 1], [2, 1, 1], [2, 2, 1], [2, 3, 3], [2, 4, 2], [2, 5, 2], [2, 6, 2], [2, 7, 1], [2, 8, 5], [2, 9, 4], [2, 10, 3], [2, 11, 2], [2, 12, 1], [2, 13, 9], [2, 14, 8], [2, 15, 10], [2, 16, 6], [2, 17, 5], [2, 18, 5], [2, 19, 5], [2, 20, 7], [2, 21, 4], [2, 22, 2], [2, 23, 4], [3, 0, 7], [3, 1, 3], [3, 2, 1], [3, 3, 1], [3, 4, 1], [3, 5, 1], [3, 6, 1], [3, 7, 1], [3, 8, 1], [3, 9, 5], [3, 10, 5], [3, 11, 4], [3, 12, 7], [3, 13, 1], [3, 14, 1], [3, 15, 10], [3, 16, 9], [3, 17, 5], [3, 18, 5], [3, 19, 10], [3, 20, 6], [3, 21, 4], [3, 22, 4], [3, 23, 1], [4, 0, 1], [4, 1, 3], [4, 2, 3], [4, 3, 3], [4, 4, 4], [4, 5, 1], [4, 6, 6], [4, 7, 8], [4, 8, 8], [4, 9, 2], [4, 10, 4], [4, 11, 4], [4, 12, 2], [4, 13, 4], [4, 14, 4], [4, 15, 1], [4, 16, 1], [4, 17, 1], [4, 18, 8], [4, 19, 5], [4, 20, 3], [4, 21, 7], [4, 22, 3], [4, 23, 10], [5, 0, 2], [5, 1, 1], [5, 2, 10], [5, 3, 3], [5, 4, 1], [5, 5, 5], [5, 6, 6], [5, 7, 3], [5, 8, 2], [5, 9, 1], [5, 10, 4], [5, 11, 1], [5, 12, 5], [5, 13, 2], [5, 14, 5], [5, 15, 7], [5, 16, 1], [5, 17, 6], [5, 18, 10], [5, 19, 5], [5, 20, 3], [5, 21, 4], [5, 22, 2], [5, 23, 1], [6, 0, 1], [6, 1, 1], [6, 2, 2], [6, 3, 3], [6, 4, 4], [6, 5, 5], [6, 6, 6], [6, 7, 7], [6, 8, 8], [6, 9, 9], [6, 10, 1], [6, 11, 1], [6, 12, 2], [6, 13, 1], [6, 14, 3], [6, 15, 4], [6, 16, 3], [6, 17, 5], [6, 18, 1], [6, 19, 1], [6, 20, 1], [6, 21, 2], [6, 22, 2], [6, 23, 6]]
        .map(function (item) {
            return [item[1], item[0], item[2] || '-'];
        });
    const option = {
        title: {
            text: '近一周人流量热力图',
            subtext: '热度：万',

            textStyle: {
                fontWeight: 'normal',
                fontSize: 18,
                color: 'rgba(255,255,255,0.8)'
            },
            subtextStyle: {
                color: "rgba(241, 234, 234, 1)"
            }
        },
        tooltip: {
            position: 'top'
        },
        grid: {
            height: '65%',
            top: '10%'
        },
        xAxis: {
            type: 'category',
            data: hours,
            splitArea: {
                show: true
            },
            // 设置坐标轴颜色
            axisLine: {
                lineStyle: {
                    color: '#ffffff',
                    width: 1,//这里是为了突出显示加上的
                }
            }
        },
        yAxis: {
            type: 'category',
            data: days,
            splitArea: {
                show: true
            },
            // 设置坐标轴颜色
            axisLine: {
                lineStyle: {
                    color: '#ffffff',
                    width: 1,//这里是为了突出显示加上的
                }
            }
        },
        visualMap: {
            min: 0,
            max: 10,
            calculable: true,
            orient: 'horizontal',
            left: 'center',
            bottom: '5%',
            textStyle: {//图例文字的样式
                color: '#ffffff',
            }
        },
        series: [
            {
                name: '热度',
                type: 'heatmap',
                data: data,
                label: {
                    show: true
                },
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };

    option && myChart.setOption(option);
}

// 第二行第三个
function flower() {
    const chartDom = document.getElementById('flower');
    const myChart = echarts.init(chartDom);
    const option = {
        title: {
            text: '旅游主题',
            textStyle: {
                fontWeight: 'normal',
                fontSize: 18,
                color: 'rgba(255,255,255,0.8)'
            },
        },
        legend: {
            top: 'bottom',
            textStyle: {//图例文字的样式
                color: '#ffffff',
            }
        },
        toolbox: {
            /*show: true,
            feature: {
                mark: {show: true},
                dataView: {show: true, readOnly: false},
                restore: {show: true},
                saveAsImage: {show: true}
            }*/
        },
        series: [
            {
                name: 'Nightingale Chart',
                type: 'pie',
                radius: [50, 150],
                center: ['50%', '50%'],
                roseType: 'area',
                itemStyle: {
                    borderRadius: 8
                },
                data: [
                    {value: 40, name: '亲子旅游'},
                    {value: 38, name: '夫妻蜜月'},
                    {value: 32, name: '公司团建'},
                    {value: 30, name: '师生春游'},
                    {value: 28, name: '网红打卡'},
                    {value: 26, name: '个人旅游'},
                    {value: 22, name: '闺蜜同游'},
                    {value: 18, name: '抖音团购'}
                ]
            }
        ]
    };

    option && myChart.setOption(option);

}

// 获取天气
function getWeather() {
    console.log('getWeather')
    axios.get('https://restapi.amap.com/v3/weather/weatherInfo?key=d43bc53fc6f86805485e783c3c7c9b56&city=420100')
        .then(res => {
            const data = res.data.lives[0];
            console.log(data)
            $('.city').html(data.city)
            $('.weathers').html(data.weather)
            $('.winddirection').html(data.winddirection + '风')
            $('.temperature').html('温度:' + data.temperature)

        })
}

window.onload = function () {
    curveLineInit();
    chinaMapInit();
    stack();
    thermal();
    flower();
    getWeather();
}
// 监听窗口变化,重新绘制
window.addEventListener("resize", function () {
    curveLineInit();
    chinaMapInit();
    stack();
    thermal();
    flower();
});
