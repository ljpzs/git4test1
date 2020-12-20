// JavaScript Document
 var myChart1 = echarts.init(document.getElementById('middler'));
function fetchData1(cb1) {
    // 通过 setTimeout 模拟异步加载
    setTimeout(function () {
        cb1({
            categories: ["11/08", "11/09", "11/10", "11/11", "11/12", "11/13", "11/14", "11/15", "11/16", "11/17", "11/18", "11/19", "11/20", "11/21", "11/22", "11/23", "11/24", "11/25", "11/26", "11/27", "11/28", "11/29", "11/30", "12/01", "12/02", "12/03", "12/04", "12/05", "12/06", "12/07"],
            data: [4880, 4043, 7220, 8477, 339, 3216, 5825, 8568, 3009, 2355, 9423, 4152, 5163, 3338, 1834, 4641, 3086, 2391, 7412, 2626, 1698, 3395, 7507, 152, 3676, 9389, 5353, 3967, 4355, 8231]
        });
    }, 1000);
}
// 初始 option
option1 = {
    color: ['#3398DB'],
	title:{
		text:'曲线图数据显示',
		left:'center',
		top:'20px'
		},
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
		height:'70%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {   
		axisLine:{
			show:false,
		},
            type: 'category',
            data: [],
            axisTick: {
				show:false,
                alignWithLabel: true
            }
        }
    ],
    yAxis: [
	
        {  axisLine:{
			show:false,
		},
		 name:'',
            type: 'value',
			axisLabel:{
				formatter:'{value}人'
				},
				axisTick:{
					show:false,
					
					},
					splitLine:{
						lineStyle:{
							type:'dashed'
							}
						
						}
        }
    ],
    series: [
        {
            name: '',
            type: 'line',
			areaStyle:{normal:{color:'#D9ECFF'}},
			smooth:true,
			itemStyle:{normal:{label:{show:true}}},
            data: []
        }
    ]
};

fetchData1(function (data1) {
    myChart1.setOption({
        xAxis: {
            data: data1.categories
        },
        series: [{
            // 根据名字对应到相应的系列
			
            name: '人数',
            data: data1.data
        }]
    });
});
myChart1.setOption(option1);

