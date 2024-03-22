function initData() {
    axios.get('/wordCloudData')
        .then(res => {
            const datalist = res.data.result;
            initEcharts(datalist)

        })
        .catch(e => {
            console.log(e)
        })
}

function initEcharts(datalist) {
    var colorList = [
        '#ff7f50', '#87cefa', '#da70d6', '#32cd32', '#6495ed',
        '#ff69b4', '#ba55d3', '#cd5c5c', '#ffa500', '#40e0d0',
        '#1e90ff', '#ff6347', '#7b68ee', '#00fa9a', '#ffd700',
        '#6b8e23', '#ff00ff', '#3cb371', '#b8860b', '#30e0e0',
        '#ff7f50', '#87cefa', '#da70d6', '#32cd32', '#6495ed',
        '#ff69b4', '#ba55d3', '#cd5c5c', '#ffa500', '#40e0d0',
        '#1e90ff', '#ff6347', '#7b68ee', '#00fa9a', '#ffd700',
        '#6b8e23', '#ff00ff', '#3cb371', '#b8860b', '#30e0e0'
    ];

    // formate datalist:
    datalist.forEach((item, index) => {
        item.symbolSize = item.hot;
        item.draggable = true;
        item.itemStyle = {
            normal: {
                shadowBlur: 10,
                shadowColor: colorList[index],
                color: colorList[index],
            }
        }
    })
    console.log('datalist')
    console.log(datalist)
    chartDom = document.getElementById('wordCloud');
    const myChart = echarts.init(chartDom);
    //跳转代码
    myChart.on('click', function (params) {
        console.log(params.name);
        //window.open(params.data.url);
        window.open('/cityDetail?key=' + params.name);
    });


    const option = {
        // 图表标题
        title: {
            show: true,//显示策略，默认值true,可选为：true（显示） | false（隐藏）
            text: '旅游热省气泡词云图',//主标题文本，'\n'指定换行
            x: 'center',        // 水平安放位置，默认为左对齐，可选为：
            // 'center' ¦ 'left' ¦ 'right'
            // ¦ {number}（x坐标，单位px）
            y: 'top',             // 垂直安放位置，默认为全图顶端，可选为：
            // 'top' ¦ 'bottom' ¦ 'center'
            // ¦ {number}（y坐标，单位px）
            //textAlign: null          // 水平对齐方式，默认根据x设置自动调整
            backgroundColor: 'rgba(0,0,0,0)',
            borderColor: '#ccc',    // 标题边框颜色
            borderWidth: 0,         // 标题边框线宽，单位px，默认为0（无边框）
            padding: 5,             // 标题内边距，单位px，默认各方向内边距为5,
            itemGap: 10,            // 主副标题纵向间隔，单位px，默认为10，
            textStyle: {
                fontSize: 18,
                fontWeight: 'bolder',
                color: '#eee'        // 主标题文字颜色
            },
            subtextStyle: {
                color: '#aaa'        // 副标题文字颜色
            }
        },
        backgroundColor: "",
        animationDurationUpdate: function (idx) {
            // 越往后的数据延迟越大
            return idx * 100;
        },
        animationEasingUpdate: 'bounceIn',
        color: ['#fff', '#fff', '#fff'],
        series: [{
            type: 'graph',
            layout: 'force',
            force: {
                repulsion: 250,
                edgeLength: 10
            },
            roam: true,
            label: {
                normal: {
                    show: true
                }
            },
            data: datalist
        }]
    };
    option && myChart.setOption(option);
}

window.onload = function () {
    initData();
}