// JavaScript Document
 var myChart3 = echarts.init(document.getElementById('last2'));
function fetchData3(cb3) {
    // 通过 setTimeout 模拟异步加载
    setTimeout(function () {
        cb3({
            categories: ["MON","TUE","WED","THU","FRI","SAT","SUN"],
            data: [9, 11, 13, 10, 8, 11,5]
        });
    }, 2000);
}
// 初始 option
option3 = {
    color: ['#3398DB'],
	title:{
		text:'柱状图数据显示',
		left:'center',
		top:'30px'
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
        bottom: '3%',
		height:'65%',
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
		axisTick:{
			show:false
			
			},
		 name:'商品数',
            type: 'value'
        }
    ],
    series: [
        {
            name: '商品数',
            type: 'bar',
            barWidth: '35%',
            data: []
        }
    ]
};

fetchData3(function (data3) {
    myChart3.setOption({
        xAxis: {
            data: data3.categories
        },
        series: [{
            // 根据名字对应到相应的系列
            name: '商品数',
            data: data3.data
        }]
    });
});
myChart3.setOption(option3);
