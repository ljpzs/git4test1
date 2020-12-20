// JavaScript Document
 var myChart2 = echarts.init(document.getElementById('last'));

function fetchData2(cb2) {
    // 通过 setTimeout 模拟异步加载
    setTimeout(function () {
        cb2({
             data:[          // 数据数组，name 为数据项名称，value 为数据项值
                        {value:2762, name:'Mon'},
                        {value:581, name:'Tue'},
                        {value:9895, name:'Wed'},
                        {value:6046, name:'Thu'},
                        {value:2907, name:'Fri'},
						{value:2626, name:'Sat'},
						{value:7027, name:'Sun'},
						
                    ]
        });
    }, 2000);
}
option2={
	title:{
		text:'饼状图数据显示',
		left:'center',
		top:'30px'
		},
	 series : [
                 {
                    name: '访问来源',
                    type: 'pie',    // 设置图表类型为饼图
                    radius: '55%',  // 饼图的半径，外半径为可视区尺寸（容器高宽中较小一项）的 55% 长度。
                    data:[]      // 数据数组，name 为数据项名称，value 为数据项值
              
                    
                }
            ]
	
	};
fetchData2(function (data2) {
    myChart2.setOption({
       series : [
                 {
                    name: '访问来源',
                    type: 'pie',    // 设置图表类型为饼图
                    radius: '55%',
                    data:data2.data      // 数据数组，name 为数据项名称，value 为数据项值
              
                    
                }
            ]
        });
});
myChart2.setOption(option2);