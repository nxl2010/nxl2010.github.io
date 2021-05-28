const CHART=document.getElementById("myChart");
var a=120,b=1.6,c=52,d=165,e;
a=a/990*100;
b=b/4.0*100;
d=d/2;
e=40;

let barChart = new Chart(CHART,{
  type:'line',
  data:{
    labels: ['6/21','8/21','10/21','12/21','2/22','4/22'],
    datasets:[
      {
        label:'TOEIC',
        backgroundColor : 'rgba(00,255,00,0.1)',
        borderColor : 'red',
        data:[120,140]
      },
      {
        label:'GPA',
        backgroundColor : 'rgba(00,255,00,0.1)',
        borderColor : '#00FF00',
        data:[1.7,2.0,3.5,3.2,3.2]
      },
      {
        label:'KM',
        backgroundColor : 'rgba(00,255,00,0.1)',
        borderColor : 'yellow',
        data:[10,22,23,35,26,28]
      }    
    ]
  },
   options:{
        legend:{
          display:true,
          position:'bottom',
          labels:{
            fontColor:'#fff',
            textAlign:'center'
          }
        },
        tooltips:{
          enabled:true,
          
        }
  }
});