function generateclockDataPoints(size,max,min,onephase_inc) {
    var i,
        arr = [];
    for (i = 0; i < size+onephase_inc; i++) {
        arr.push({
            y:max
        });
        arr.push({
            y:min
        });
    }
    return arr;
}


function generatereqDataPoints(index,m1,m2,m3,size,onephase_inc) {
    var i,flag=1,master1,master2,master3,
        arr = [];
master1=m1;
master2=m2;
master3=m3;
  if(index==1)
    for (i = 0; i < 2*size+2+onephase_inc; i++) {
      if(flag==1)
        arr.push({
            y:25-index
        });
        if(master1==1)
        {arr.push({
            y:24-index
        });
          flag=0;}
          if(i==3)
        { flag=1;
master1=0;
        }
    }
else if(index==2)
      for (i = 0; i < 2*size+2+onephase_inc; i++) {
        if(flag==1)
          arr.push({
              y:25-index-1
          });
          if(master2==1)
        {  arr.push({
              y:24-index-1
          });
            flag=0;}
            if(i==3)
          { flag=1;
  master2=0;
          }
      }
else if(index==3)
        for (i = 0; i < 2*size+2+onephase_inc; i++) {
          if(flag==1)
            arr.push({
                y:25-index-2
            });
            if(master3==1)
          {  arr.push({
                y:24-index-2
            });
              flag=0;}
              if(i==3)
            { flag=1;
    master3=0;
            }
        }






    return arr;


}











function generategntDataPoints(index,m1,m2,m3,size,onephase_inc) {
    var i,flag=1,master1,master2,master3,
        arr = [];
master1=m1;
master2=m2;
master3=m3;
  if(index==1)
    for (i = 0; i < 2*size+2+onephase_inc; i++) {
      if(flag==1)
        arr.push({
            y:19-index
        });
        if((master1==1)&&(i>=2))
        {arr.push({
            y:18-index
        });
          flag=0;}
          if(i==5)
        { flag=1;
master1=0;
        }
    }
else if(index==2)
      for (i = 0; i < 2*size+2+onephase_inc; i++) {
        if(flag==1)
          arr.push({
              y:19-index-1
          });
          if((master2==1)&&(i>=1))
        {  arr.push({
              y:18-index-1
          });
            flag=0;}
            if(i==3)
          { flag=1;
  master2=0;
          }
      }
else if(index==3)
        for (i = 0; i < 2*size+2+onephase_inc; i++) {
          if(flag==1)
            arr.push({
                y:19-index-2
            });
            if((master3==1)&&(i>=1))
          {  arr.push({
                y:18-index-2
            });
              flag=0;}
              if(i==3)
            { flag=1;
    master3=0;
            }
        }






    return arr;


}






function generateframeDataPoints(size,read,write,onephase_inc) {
    var i,onephase=0,
        arr = [];
        if(size==3)
        onephase=2;
        if(write==1)
    for (i = 0; i < 2*size+3+onephase_inc; i++) {
      if((i<=4)||(i>(size+1+onephase)))
        arr.push({
            y:12
        });
        else if((i>=5)&&(i<=(size+1+onephase)))
        {arr.push({
            y:11
        });
          }

    }
    else if(read==1)
    for (i = 0; i < 2*size+3+onephase_inc; i++) {
      if((i<=4)||(i>(size+3+onephase)))
        arr.push({
            y:12
        });
        else if((i>=5)&&(i<=(size+3+onephase)))
        {arr.push({
            y:11
        });
          }

    }

    return arr;
}





function generatetrdyDataPoints(size,read,write,onephase_inc) {
    var i,onephase=0,
        arr = [];
if(size==3)
onephase=2;
  if(write==1)
    for (i = 0; i < 2*size+3+onephase_inc; i++) {
      if((i<=6)||(i>(size+3+onephase)))
        arr.push({
            y:4
        });
        else if((i>=7)&&(i<=(size+3+onephase)))
        {arr.push({
            y:3
        });
          }
    }
else if (read==1) {
  for (i = 0; i < 2*size+3+onephase_inc; i++) {
    if((i<=8)||(i>(size+5+onephase)))
      arr.push({
          y:4
      });
      else if((i>=9)&&(i<=(size+5+onephase)))
      {arr.push({
          y:3
      });
        }
  }
}




    return arr;
}







function generateirdyDataPoints(size,read,write,onephase_inc) {
    var i,onephase=0,
        arr = [];
if(size==3)
onephase=2;
      if(write==1)
    for (i = 0; i < 2*size+3+onephase_inc; i++) {
      if((i<=6)||(i>(size+3+onephase)))
        arr.push({
            y:6
        });
        else if((i>=7)&&(i<=(size+3+onephase)))
        {arr.push({
            y:5
        });
          }

    }
    else if(read==1)
    for (i = 0; i < 2*size+3+onephase_inc; i++) {
      if((i<=6)||(i>(size+5+onephase)))
        arr.push({
            y:6
        });
        else if((i>=7)&&(i<=(size+5+onephase)))
        {arr.push({
            y:5
        });
          }

    }
    return arr;
}


function generatedevselDataPoints(size,read,write,onephase_inc) {
    var i,onephase=0,
        arr = [];
if(size==3)
onephase=2;
  if(write==1)
    for (i = 0; i < 2*size+3+onephase_inc; i++) {
      if((i<=6)||(i>(size+3+onephase)))
        arr.push({
            y:2
        });
        else if((i>=7)&&(i<=(size+3+onephase)))
        {arr.push({
            y:1
        });
          }
    }
else if (read==1) {
  for (i = 0; i < 2*size+3+onephase_inc; i++) {
    if((i<=8)||(i>(size+5+onephase)))
      arr.push({
          y:2
      });
      else if((i>=9)&&(i<=(size+5+onephase)))
      {arr.push({
          y:1
      });
        }
  }
}




    return arr;
}








$(document).ready(function(){
//  function generateDataPoints(size);


    $("#dev1Target").click(function(){
      if(    ($('#dev2Target').is(':checked'))  ||  ($('#dev3Target').is(':checked'))   )
    {
      alert("Only One Target");
     document.getElementById("dev1Target").checked = false;
     document.getElementById("dev2Target").checked = false;
     document.getElementById("dev3Target").checked = false;
   }

     });
   $("#dev2Target").click(function(){
     if(    ($('#dev1Target').is(':checked'))  ||  ($('#dev3Target').is(':checked'))   )
   {
     alert("Only One Target");
    document.getElementById("dev1Target").checked = false;
    document.getElementById("dev2Target").checked = false;
    document.getElementById("dev3Target").checked = false;
  }

    });

  $("#dev3Target").click(function(){
    if(    ($('#dev1Target').is(':checked'))  ||  ($('#dev2Target').is(':checked'))   )
  {
    alert("Only One Target");
   document.getElementById("dev1Target").checked = false;
   document.getElementById("dev2Target").checked = false;
   document.getElementById("dev3Target").checked = false;
 }


});

 $("#dev1Initiator").click(function(){
   if(    ($('#dev2Initiator').is(':checked'))  &&  ($('#dev3Initiator').is(':checked'))   )
 {
   alert("Max two Initiators");
  document.getElementById("dev1Initiator").checked = false;
  document.getElementById("dev2Initiator").checked = false;
  document.getElementById("dev3Initiator").checked = false;
}

  });
  $("#dev2Initiator").click(function(){
    if(    ($('#dev1Initiator').is(':checked'))  &&  ($('#dev3Initiator').is(':checked'))   )
  {
    alert("Max two Initiators");
   document.getElementById("dev1Initiator").checked = false;
   document.getElementById("dev2Initiator").checked = false;
   document.getElementById("dev3Initiator").checked = false;
 }

   });
   $("#dev3Initiator").click(function(){
     if(    ($('#dev1Initiator').is(':checked'))  &&  ($('#dev2Initiator').is(':checked'))   )
   {
     alert("Max two Initiators");
    document.getElementById("dev1Initiator").checked = false;
    document.getElementById("dev2Initiator").checked = false;
    document.getElementById("dev3Initiator").checked = false;
  }

    });







/*

     var count=0;
     function generateDataPoints(size) {
         var i,
             arr = [],
         for (i = 0; i < 10; i++) {
             arr.push({
                 y:0;
                 y:1;
             });
         }
         return arr;
     }
     var clockDataPoints = generateDataPoints(20);



*/






var clockDataPoints=[];
var REQADataPoints=[];
var REQBDataPoints=[];
var REQCDataPoints=[];
var GNTADataPoints=[];
var GNTBDataPoints=[];
var GNTCDataPoints=[];
var FRAMEDataPoints=[];
var IRDYDataPoints=[];
var TRDYDataPoints=[];
var DEVSELDataPoints=[];
var size=0;
var lastplace=[0,0,0];
var i;
var j;
var onephase_inc=0;




$("#start").click(function () {
var target1,target2,target3,master1,master2,master3,master1_gnt,master2_gnt,master3_gnt,read,write;
var numberoftransaction=$("#numberoftransaction").val();
if(    ($('#dev1Target').is(':checked')) )
target1=1;
else
target1=0;
if(    ($('#dev2Target').is(':checked')) )
target2=1;
else
target2=0;
if(    ($('#dev3Target').is(':checked')) )
target3=1;
else
target3=0;
if(    ($('#dev1Initiator').is(':checked')) )
master1=1;
else
master1=0;
if(    ($('#dev2Initiator').is(':checked')) )
master2=1;
else
master2=0;
if(    ($('#dev3Initiator').is(':checked')) )
master3=1;
else
master3=0;
if(    ($('#transactiontypeWrite').is(':checked')) )
write=1;
else
write=0;
if(    ($('#transactiontypeRead').is(':checked')) )
read=1;
else
read=0;
/////Parity
master1_gnt=master1;
master2_gnt=master2;
master3_gnt=master3;
if(master1_gnt==1)
{
  master2_gnt=0;
  master3_gnt=0;
}
else if(master2_gnt==1)
  master3_gnt=0;

//////////////////////////////////
var c=0,e=0;
var t,m;
var word_read,word_write;
if(master1==1)
{
  word_write="AAAAAAAA";
  m=1;
}
else if(master2==1)
{
word_write="BBBBBBBB";
 m=2;
}
else if(master3==1)
{
word_write="CCCCCCCC";
m=3;
}
if(target1==1)
{
t=1;
word_read="AAAAAAAA";
}
else if(target2==1)
{
t=2;
word_read="BBBBBBBB";
}
else if(target3==1)
{
t=3;
word_read="CCCCCCCC";
}
if(write==1)
{
for(c=1;c<=numberoftransaction;c++)
{
  i=lastplace[t-1]+c;
document.getElementById("d"+t+"-w"+i).innerHTML = word_write;
document.getElementById("d"+t+"-w"+i).style.fontSize = "large";
//if(c==numberoftransaction)

}
for(c=1;c<=numberoftransaction;c++)
lastplace[t-1]++;
}
if(lastplace[t-1]==10)
lastplace[t-1]=0;


if(read==1)
{
for(e=1;e<=numberoftransaction;e++)
{
  j=lastplace[m-1]+e;
document.getElementById("d"+m+"-w"+j).innerHTML = word_read;
document.getElementById("d"+m+"-w"+j).style.fontSize = "large";
}
for(e=1;e<=numberoftransaction;e++)
lastplace[m-1]++;
}

if(lastplace[m-1]==10)
lastplace[m-1]=0;
/*document.getElementById("d1-w2").innerHTML = "AAAAAAAA";
document.getElementById("d1-w2").style.fontSize = "large";
document.getElementById("d1-w3").innerHTML = "AAAAAAAA";
document.getElementById("d1-w3").style.fontSize = "large";
document.getElementById("d1-w4").innerHTML = "AAAAAAAA";
document.getElementById("d1-w4").style.fontSize = "large";
document.getElementById("d1-w5").innerHTML = "AAAAAAAA";
document.getElementById("d1-w5").style.fontSize = "large";
document.getElementById("d1-w6").innerHTML = "AAAAAAAA";
document.getElementById("d1-w6").style.fontSize = "large";
document.getElementById("d1-w7").innerHTML = "AAAAAAAA";
document.getElementById("d1-w7").style.fontSize = "large";
document.getElementById("d1-w8").innerHTML = "AAAAAAAA";
document.getElementById("d1-w8").style.fontSize = "large";
document.getElementById("d1-w9").innerHTML = "AAAAAAAA";
document.getElementById("d1-w9").style.fontSize = "large";
document.getElementById("d1-w10").innerHTML = "AAAAAAAA";
document.getElementById("d1-w10").style.fontSize = "large";*/

  alert("Value: " + numberoftransaction + "target1: " + target1 + "target2: " + target2 + "target3: " + target3 + "master1: " + master1 + "master2: " + master2 + "master3: " + master3 + "read: " + read + "write: " + write);
  var count=0;
/*   clockDataPoints=[];
  for (i = 0; i < 10; i++) {
      clockDataPoints.push({
          y:1
});
clockDataPoints.push({
    y:2
});
};*/
if(numberoftransaction==1)
onephase_inc=4;
else {
  onephase_inc=0;
}
size=numberoftransaction*3;
 //size+=numberoftransaction*3;
//var sizewidth=numberoftransaction*1080;
var arr1= generateclockDataPoints(size,26,25,onephase_inc);
var arr2= generatereqDataPoints(1,master1,master2,master3,size,onephase_inc);
var arr3= generatereqDataPoints(2,master1,master2,master3,size,onephase_inc);
var arr4= generatereqDataPoints(3,master1,master2,master3,size,onephase_inc);
var arr5= generategntDataPoints(1,master1_gnt,master2_gnt,master3_gnt,size,onephase_inc);
var arr6= generategntDataPoints(2,master1_gnt,master2_gnt,master3_gnt,size,onephase_inc);
var arr7= generategntDataPoints(3,master1_gnt,master2_gnt,master3_gnt,size,onephase_inc);
var arr8= generateframeDataPoints(size,read,write,onephase_inc);
var arr9= generateirdyDataPoints(size,read,write,onephase_inc);
var arr10= generatetrdyDataPoints(size,read,write,onephase_inc);
var arr11= generatedevselDataPoints(size,read,write,onephase_inc);
//arrayA=arrayA.concat(arrayB);
  clockDataPoints =clockDataPoints.concat(arr1);
  REQADataPoints =REQADataPoints.concat(arr2);
  REQBDataPoints =REQBDataPoints.concat(arr3);
  REQCDataPoints =REQCDataPoints.concat(arr4);
  GNTADataPoints =GNTADataPoints.concat(arr5);
  GNTBDataPoints =GNTBDataPoints.concat(arr6);
  GNTCDataPoints =GNTCDataPoints.concat(arr7);
  FRAMEDataPoints =FRAMEDataPoints.concat(arr8);
  IRDYDataPoints =IRDYDataPoints.concat(arr9);
  TRDYDataPoints =TRDYDataPoints.concat(arr10);
  DEVSELDataPoints =DEVSELDataPoints.concat(arr11);
var chart = new CanvasJS.Chart("chartContainer", {
 animationEnabled: true,
 theme: "light2",
 title:{
   text: "Timing Diagram"
 },
 axisY:{
  title: "DEVSEL    TRDY    IRDY    C_BE    A_D    FRAME    GNTC    GNTB    GNTA    REQC    REQB    REQA    CLOCK",
  titleFontSize:20,
   valueFormatString:" ",
   includeZero: true,




 },

 data: [{
//clock;
   type: "stepLine",
   dataPoints:clockDataPoints
},



{
  //REQA
 type: "stepLine",
 dataPoints:REQADataPoints
},

{
//REQB
type: "stepLine",
dataPoints:REQBDataPoints
},

{
//REQC
type: "stepLine",
dataPoints:REQCDataPoints
},

{
//GNTA
type: "stepLine",
dataPoints:GNTADataPoints
},


{


  //GNTB
  type: "stepLine",
  dataPoints:GNTBDataPoints
  },


  {


    //GNTC
    type: "stepLine",
    dataPoints:GNTCDataPoints
    },



    {


      //FRAME
      type: "stepLine",
      dataPoints:FRAMEDataPoints
      },


{
      //AD
      type: "hfunnel",
      dataPoints:[
       { y: 10 },
       { y: 9},

      ]
      },

{
      //C_BE
      type: "hfunnel",
      dataPoints:[
       { y: 8 },
       { y: 7},

      ]
      },


      {
            //IRDY
      type: "stepLine",
        dataPoints:IRDYDataPoints
      },


        {
                  //TRDY
        type: "stepLine",
          dataPoints:TRDYDataPoints
        },


{
//DEVSEL
  type: "stepLine",
  dataPoints:DEVSELDataPoints
}





 ]
});

chart.render();
});
    });
