function generateclockDataPoints(size,max,min) {
    var i,
        arr = [];
    for (i = 0; i < size+6; i++) {
        arr.push({
            y:max
        });
        arr.push({
            y:min
        });
    }
    return arr;
}


function generatereqDataPoints(index,m1,m2,m3,size) {
    var i,flag=1,master1,master2,master3,
        arr = [];
master1=m1;
master2=m2;
master3=m3;
  if(index==1)
    for (i = 0; i < 2*size; i++) {
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
      for (i = 0; i < 2*size; i++) {
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
        for (i = 0; i < 2*size; i++) {
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











function generategntDataPoints(index,m1,m2,m3,size) {
    var i,flag=1,master1,master2,master3,
        arr = [];
master1=m1;
master2=m2;
master3=m3;
  if(index==1)
    for (i = 0; i < 2*size; i++) {
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
      for (i = 0; i < 2*size; i++) {
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
        for (i = 0; i < 2*size; i++) {
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






function generateframeDataPoints(size) {
    var i,
        arr = [];
    for (i = 0; i < 2*size; i++) {
      if((i<=4)||(i>(size+1)))
        arr.push({
            y:12
        });
        else if((i>=5)&&(i<=(size+1)))
        {arr.push({
            y:11
        });
          }

    }

    return arr;
}





function generatetrdyDataPoints(size,read,write) {
    var i,
        arr = [];

  if(write==1)
    for (i = 0; i < 2*size; i++) {
      if((i<=6)||(i>(size+3)))
        arr.push({
            y:4
        });
        else if((i>=7)&&(i<=(size+3)))
        {arr.push({
            y:3
        });
          }
    }
else if (read==1) {
  for (i = 0; i < 2*size; i++) {
    if((i<=8)||(i>(size+5)))
      arr.push({
          y:4
      });
      else if((i>=9)&&(i<=(size+5)))
      {arr.push({
          y:3
      });
        }
  }
}




    return arr;
}







function generateirdyDataPoints(size) {
    var i,
        arr = [];
    for (i = 0; i < 2*size; i++) {
      if((i<=6)||(i>(size+3)))
        arr.push({
            y:6
        });
        else if((i>=7)&&(i<=(size+3)))
        {arr.push({
            y:5
        });
          }

    }

    return arr;
}


function generatedevselDataPoints(size,read,write) {
    var i,
        arr = [];

  if(write==1)
    for (i = 0; i < 2*size; i++) {
      if((i<=6)||(i>(size+3)))
        arr.push({
            y:2
        });
        else if((i>=7)&&(i<=(size+3)))
        {arr.push({
            y:1
        });
          }
    }
else if (read==1) {
  for (i = 0; i < 2*size; i++) {
    if((i<=8)||(i>(size+5)))
      arr.push({
          y:2
      });
      else if((i>=9)&&(i<=(size+5)))
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

    $("#dev1Initiator").click(function(){
      if(    ($('#dev2Initiator').is(':checked'))  ||  ($('#dev3Initiator').is(':checked'))   )
    {
      alert("Only One Initiator");
     document.getElementById("dev1Initiator").checked = false;
     document.getElementById("dev2Initiator").checked = false;
     document.getElementById("dev3Initiator").checked = false;
   }

     });
   $("#dev2Initiator").click(function(){
     if(    ($('#dev1Initiator').is(':checked'))  ||  ($('#dev3Initiator').is(':checked'))   )
   {
     alert("Only One Initiator");
    document.getElementById("dev1Initiator").checked = false;
    document.getElementById("dev2Initiator").checked = false;
    document.getElementById("dev3Initiator").checked = false;
  }


    });
  $("#dev3Initiator").click(function(){
    if(    ($('#dev1Initiator').is(':checked'))  ||  ($('#dev2Initiator').is(':checked'))   )
  {
    alert("Only One Initiator");
   document.getElementById("dev1Initiator").checked = false;
   document.getElementById("dev2Initiator").checked = false;
   document.getElementById("dev3Initiator").checked = false;
 }

    });


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














$("#start").click(function () {
var target1,target2,target3,master1,master2,master3,read,write;
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

//////////////////////////////////
var c=0;
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
for(c=1;c<=numberoftransaction;c++)
{
document.getElementById("d"+t+"-w"+c).innerHTML = word_write;
document.getElementById("d"+t+"-w"+c).style.fontSize = "large";
}
if(read==1)
for(c=1;c<=numberoftransaction;c++)
{
document.getElementById("d"+m+"-w"+c).innerHTML = word_read;
document.getElementById("d"+m+"-w"+c).style.fontSize = "large";
}
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
var size=numberoftransaction*3;
//var sizewidth=numberoftransaction*1080;
 var clockDataPoints = generateclockDataPoints(size,26,25);
//document.getElementById("chartContainer").style.width = sizewidth ;
 var REQADataPoints =generatereqDataPoints(1,master1,master2,master3,size);
 var REQBDataPoints =generatereqDataPoints(2,master1,master2,master3,size);
 var REQCDataPoints =generatereqDataPoints(3,master1,master2,master3,size);
 var GNTADataPoints =generategntDataPoints(1,master1,master2,master3,size);
 var GNTBDataPoints =generategntDataPoints(2,master1,master2,master3,size);
 var GNTCDataPoints =generategntDataPoints(3,master1,master2,master3,size);
 var FRAMEDataPoints =generateframeDataPoints(size);
 var IRDYDataPoints =generateirdyDataPoints(size);
 var TRDYDataPoints =generatetrdyDataPoints(size,read,write);
 var DEVSELDataPoints =generatedevselDataPoints(size,read,write);
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
