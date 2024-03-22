function linesInit() {
    const chartDom = document.getElementById('lines');
    const myChart = echarts.init(chartDom);

    const posList = [
        'left',
        'right',
        'top',
        'bottom',
        'inside',
        'insideTop',
        'insideLeft',
        'insideRight',
        'insideBottom',
        'insideTopLeft',
        'insideTopRight',
        'insideBottomLeft',
        'insideBottomRight'
    ];
    const app = {};

    app.configParameters = {
        rotate: {
            min: -90,
            max: 90
        },
        align: {
            options: {
                left: 'left',
                center: 'center',
                right: 'right'
            }
        },
        verticalAlign: {
            options: {
                top: 'top',
                middle: 'middle',
                bottom: 'bottom'
            }
        },
        position: {
            options: posList.reduce(function (map, pos) {
                map[pos] = pos;
                return map;
            }, {})
        },
        distance: {
            min: 0,
            max: 100
        }
    };
    app.config = {
        rotate: 90,
        align: 'left',
        verticalAlign: 'middle',
        position: 'insideBottom',
        distance: 15,
        onChange: function () {
            const labelOption = {
                rotate: app.config.rotate,
                align: app.config.align,
                verticalAlign: app.config.verticalAlign,
                position: app.config.position,
                distance: app.config.distance
            };
            myChart.setOption({
                series: [
                    {
                        label: labelOption
                    },
                    {
                        label: labelOption
                    },
                    {
                        label: labelOption
                    },
                    {
                        label: labelOption
                    }
                ]
            });
        }
    };
    const labelOption = {
        show: true,
        position: app.config.position,
        distance: app.config.distance,
        align: app.config.align,
        verticalAlign: app.config.verticalAlign,
        rotate: app.config.rotate,
        formatter: '{c}  {name|{a}}',
        fontSize: 16,
        rich: {
            name: {}
        }
    };
    const option = {
        title: {
            text: '3天2夜团购票价（部分城市）',
            textStyle: {
                fontWeight: 'normal',
                fontSize: 18,
                color: 'rgba(255,255,255,0.8)',
            },
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            data: ['北京', '拉萨', '三亚', '武汉'],
            textStyle: {//图例文字的样式
                color: '#ffffff',
            }
        },
        toolbox: {},
        xAxis: [
            {
                type: 'category',
                axisTick: {show: false},
                data: ['2019', '2020', '2021', '2022', '2023'],
                axisLabel: {
                    color: '#f3f6f6'
                }
            }
        ],
        yAxis: [
            {
                name: '元',
                nameTextStyle: {
                    color: "rgba(247, 240, 240, 1)"
                },
                type: 'value',
                axisLabel: {
                    color: '#f3f6f6'
                }
            }
        ],
        series: [
            {
                name: '北京',
                type: 'bar',
                barGap: 0,
                label: labelOption,
                emphasis: {
                    focus: 'series'
                },
                data: [935, 823, 755, 729, 812]
            },
            {
                name: '拉萨',
                type: 'bar',
                label: labelOption,
                emphasis: {
                    focus: 'series'
                },
                data: [4223, 3535, 4288, 3433, 4621]
            },
            {
                name: '三亚',
                type: 'bar',
                label: labelOption,
                emphasis: {
                    focus: 'series'
                },
                data: [1067, 2054, 583, 613, 1067]
            },
            {
                name: '武汉',
                type: 'bar',
                label: labelOption,
                emphasis: {
                    focus: 'series'
                },
                data: [3115, 2815, 1274, 2864, 2337]
            }
        ]
    };

    option && myChart.setOption(option);

}

function gradientLineInit() {
    const chartDom = document.getElementById('gradientLine');
    const myChart = echarts.init(chartDom);

// prettier-ignore
    let dataAxis = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
// prettier-ignore
    let data = [88, 99, 199, 200, 198, 98, 248, 465, 442, 310, 368, 154];
    let yMax = 500;
    let dataShadow = [];
    for (let i = 0; i < data.length; i++) {
        dataShadow.push(yMax);
    }
    const option = {
        title: {
            text: '往年各个月份平均团购票价（1天）',
            textStyle: {
                fontWeight: 'normal',
                fontSize: 18,
                color: 'rgba(255,255,255,0.8)',
            },
        },
        xAxis: {
            data: dataAxis,
            axisLabel: {
                inside: true,
                color: '#fff'
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            z: 10
        },
        yAxis: {
            name: '元',
            nameTextStyle: {
                color: "rgba(247, 240, 240, 1)"
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                color: '#fcf6f6'
            }
        },
        dataZoom: [
            {
                type: 'inside'
            }
        ],
        series: [
            {
                type: 'bar',
                showBackground: true,
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {offset: 0, color: '#83bff6'},
                        {offset: 0.5, color: '#188df0'},
                        {offset: 1, color: '#188df0'}
                    ])
                },
                emphasis: {
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            {offset: 0, color: '#2378f7'},
                            {offset: 0.7, color: '#2378f7'},
                            {offset: 1, color: '#83bff6'}
                        ])
                    }
                },
                data: data
            }
        ]
    };
// Enable data zoom when user click bar.
    const zoomSize = 6;
    myChart.on('click', function (params) {
        console.log(dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)]);
        myChart.dispatchAction({
            type: 'dataZoom',
            startValue: dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
            endValue:
                dataAxis[Math.min(params.dataIndex + zoomSize / 2, data.length - 1)]
        });
    });

    option && myChart.setOption(option);

}

// 词云初始化
function pieChartInit() {
    const chartDom = document.getElementById('pie');
    const myChart = echarts.init(chartDom);
    const data = [
        {
            name: '山水风光',
            value: 35.24
        }, {
            name: '历史古城',
            value: 25.71
        }, {
            name: '抖音热门',
            value: 15
        }, {
            name: '异域人文',
            value: 24.64
        }, {
            name: '海边度假',
            value: 42.1
        }]

    const titleArr = [], seriesArr = [];
    colors = [['#389af4', '#dfeaff'], ['#ff8c37', '#ffdcc3'], ['#ffc257', '#ffedcc'], ['#fd6f97', '#fed4e0'], ['#a181fc', '#e3d9fe']]
    data.forEach(function (item, index) {
        titleArr.push(
            {
                text: item.name,
                left: index * 20 + 10 + '%',
                top: '65%',
                textAlign: 'center',
                textStyle: {
                    fontWeight: 'normal',
                    fontSize: '16',
                    color: colors[index][0],
                    textAlign: 'center',
                },
            }
        );
        seriesArr.push(
            {
                name: item.name,
                type: 'pie',
                clockWise: false,
                radius: [60, 70],
                itemStyle: {
                    normal: {
                        color: colors[index][0],
                        shadowColor: colors[index][0],
                        shadowBlur: 0,
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        },
                    }
                },
                hoverAnimation: false,
                center: [index * 20 + 10 + '%', '50%'],
                data: [{
                    value: item.value,
                    label: {
                        normal: {
                            formatter: function (params) {
                                return params.value + '%';
                            },
                            position: 'center',
                            show: true,
                            textStyle: {
                                fontSize: '20',
                                fontWeight: 'bold',
                                color: colors[index][0]
                            }
                        }
                    },
                }, {
                    value: 100 - item.value,
                    name: 'invisible',
                    itemStyle: {
                        normal: {
                            color: colors[index][1]
                        },
                        emphasis: {
                            color: colors[index][1]
                        }
                    }
                }]
            }
        )
    });

    const option = {
        backgroundColor: "#6633994C",
        title:titleArr,
        series: seriesArr
        /*title: {
            text: '各旅游主题平均票价下降比',
            left: "center",
            y:'10%',
            textStyle: {
                fontWeight: 'normal',
                fontSize: 18,
                color: 'rgba(236,233,233,0.8)',
                textBorderWidth: 1.5,
                textBorderType: "solid",
                textBorderColor: "rgb(70,206,211)"
            },
        },*/
    }
    option && myChart.setOption(option);
}

window.onload = function () {
    linesInit();
    gradientLineInit();
    pieChartInit();
}
// 监听窗口变化,重新绘制
window.addEventListener("resize", function () {
    linesInit();
    gradientLineInit();
    pieChartInit();
});
