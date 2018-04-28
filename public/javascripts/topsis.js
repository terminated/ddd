var cr = 1.0, at = 1.0, exp = 1.0;
var ite = ["E1", "E2", "E3", "E4", "E5", "E6", "E7"];
var ite1 = ["A1", "A2", "A3", "A4", "A5", "A6", "A7"];
var map = new Object();
map["VH"] = 0.8833;map["H"] = 0.7000;map["M"] = 0.5000;map["L"] = 0.3000;map["VL"] = 0.1167;
map["VG"] = 9.5;map["G"] = 7.1667;map["F"] = 5.0000;map["P"] = 2.8333;map["VP"] = 0.5000;
var mult = [];
var finn = [];
var res = [];
$(document).ready(function() {
  $("#test-form").on("submit",function(e){
  
      //stop form form submitting
      e.preventDefault();
      
      //the table object 
      var table = $("#json-table")[0];
      // console.log($('form').serializeArray());
      //display the results
      var some = formToJSON(table);
      var finall = JSON.parse(some);
        
        // console.log(finall);
      for(var i = 0; i < finall.length; i++){
        // var gm1 = 1.0, gm2 = 1.0, gm3 = 1.0;
        var arr = 0;
        for(var r = 0; r < exp; r++){
           arr += map[finall[i][ite[r]]];
        }
        arr = arr/exp;
        mult.push(arr);
        // console.log(arr);
        var fin = "#C" + (i+1).toString();
        $(fin).val(arr);
        // console.log(finall[i]);
      }

    });

  
  $("#test-form1").on("submit",function(e){
  
      //stop form form submitting
      e.preventDefault();
      
      //the table object 
      var table = $("#json-table1")[0];
      // console.log($('form').serializeArray());
      //display the results
      var some = formToJSON(table);
      var finall = JSON.parse(some);
      // console.log(finall.length);
      var c = 0, ccc = 0;
      for(var i = 0; i < finall.length; i++){
        // var gm1 = 1.0, gm2 = 1.0, gm3 = 1.0;
        var arr = 0;
        for(var r = 0; r < exp; r++){
           arr += map[finall[i][ite[r]]];
        }
        // console.log(mult);
        // console.log(arr);
        arr = arr/exp;
        // console.log(arr);
        if(ccc < at){
          arr = arr*mult[c];
          ccc++;
          // console.log(mult[c]);
          // console.log(ccc);
          finn.push(arr);
        }
        // console.log(at);
        if(ccc == at){ccc=0;c++;}
        
    }
    

    var summ = 0.0;
    for(var i = 0; i < finn.length; i++){
      summ += finn[i]*finn[i];//console.log(finn[i]);

      if(i%(at) === 0 && i != 0){
        summ -= finn[i]*finn[i];
        // console.log(summ);
        for(var j = i-at; j < i; j++){
          var fin = "#A" + (j+1).toString();
          // console.log(finn[j],1.0/Math.sqrt(summ));
          // var ttt = finn[j]*(1.0/Math.sqrt(summ));
          // console.log(ttt);
          $(fin).val((finn[j]*eval(1.0/Math.sqrt(summ))));
          res.push(finn[j]/Math.sqrt(summ));
        }
        // i = i - 1;
        summ = finn[i]*finn[i];
      }
    }
    for(var j = finn.length-at; j < finn.length; j++){
          var fin = "#A" + (j+1).toString();
          $(fin).val(finn[j]/Math.sqrt(summ));
          res.push(finn[j]/Math.sqrt(summ));
    }
    
});
  $("#test-form2").on("submit",function(e){
  
      //stop form form submitting
      e.preventDefault();
      
      //the table object 
      var table = $("#json-table2")[0];
      // console.log($('form').serializeArray());
      //display the results
      var some = formToJSON(table);
      var finall = JSON.parse(some);
        
      var minn = [];
      var maxx = [];
      var cc = 0;
      for(var i = at; i < res.length; i+=at){
        var var_min = 1000000;var var_max = 0;
        for(var j = 0; j < i; j++){
          var_max = Math.max(var_max, res[j]);
          var_min = Math.min(var_min, res[j]);
          
        }
        minn.push(var_min);
          maxx.push(var_max);
        cc = i;
      }
      var var_min = 1000000;var var_max = 0;
      for(var i = res.length-at; i < res.length; i++){
        var_max = Math.max(var_max, res[i]);
        var_min = Math.min(var_min, res[i]);
      }
      minn.push(var_min);
      maxx.push(var_max);
      for(var i = 0; i < minn.length; i++)console.log(minn[i]);
    });
}); 
function blit(exp, cr){
    var str = "E";
    for(var r=1;r<=parseInt(exp,10);r++)
    {
        var final = str + r.toString();
        var headd = "<th id=" + final + ">" + final + "</th>";
        $( ".myHead" ).append(headd);
    }
    str = "C";
    for(var r=1;r<=parseInt(cr,10);r++)
    {
        var strr = str + r.toString();
        var finall = strr ;
        var temp = "<input type=text"  + " value=VH" + ">";
        var td = "";
        for(var r1 = 1; r1 <= parseInt(exp, 10); r1++)
        {
            if(r1 === 1)
            {
                td += "<td>" + finall + ":" + temp + "</td>";
            }
            else
            {
                td += "<td>" + temp + "</td>";
            }
        }
        td += "<td><input type=" + "text" + " id=" + "C" + r.toString() + ">";
        td = "<tr>" + td + "</tr>";
        $(".tchalla").append(td);
    }
}

function blit1(exp, cr, at){
    str = "E";
    for(var r=1;r<=parseInt(exp,10);r++)
    {
        var final = str + r.toString();
        var headd = "<th id=" + final + ">" + final + "</th>";
        $( ".myHead1" ).append(headd);
    }
    var c = 0;
    for(var r2=1;r2<=parseInt(cr,10);r2++)
    {
        str = "A";
        for(var r=1;r<=parseInt(at,10);r++)
        {
          c++;
            var strr = str + r.toString();
            var finall = strr ;
            var temp = "<input type=text"  + " value=VG" + ">";
            var td = "";
            for(var r1 = 1; r1 <= parseInt(exp, 10); r1++)
            {
                if(r1 === 1)
                {
                    td += "<td>" + finall + ":" + temp + "</td>";
                }
                else
                {
                    td += "<td>" + temp + "</td>";
                }
            }
            td += "<td><input type=" + "text" + " id=" + "A" + c.toString() + ">";
            td = "<tr>" + td + "</tr>";
            $(".tchalla1").append(td);
        }
    }
}

function blit2(exp, cr){

    // var str = "E";
    // for(var r=1;r<=parseInt(exp,10);r++)
    // {
    //     var final = str + r.toString();
    //     var headd = "<th id=" + final + ">" + final + "</th>";
    //     $( ".myHead" ).append(headd);
    // }
    str = "";
    for(var r=1;r<=parseInt(2,10);r++)
    {
        var strr = str + r.toString();
        var finall = strr ;
        var temp = "<input type=text"  + " value=1" + ">";
        var td = "";
        for(var r1 = 1; r1 <= parseInt(cr, 10); r1++)
        {
            if(r1 === 1)
            {
                td += "<td>" + finall + ":" + temp + "</td>";
            }
            else
            {
                td += "<td>" + temp + "</td>";
            }
        }
        // td += "<td><input type=" + "text" + " id=" + "F" + r.toString() + ">";
        td = "<tr>" + td + "</tr>";
        $(".tchalla2").append(td);
    }
}

function createTable()
{
    cr = window.prompt("Input number of criteria", 1);
    at = window.prompt("Input number of alternatives", 1);
    exp = window.prompt("Input number experts", 1);

    blit(exp, cr);
}


function formToJSON(table){//begin function


//array to hold the key name
var keyName;
  
//array to store the keyNames for the objects
var keyNames = [];

//array to store the objects
var objectArray = [];
  

//get the number of cols
var numOfCols = table.rows[0].cells.length;

//get the number of rows
var numOfRows = table.rows.length;
  
//add the opening [ array bracket
objectArray.push("[");
  
  
  
//loop through and get the propertyNames or keyNames
for(var i = 0; i < numOfCols; i++){//begin for loop  
     
  //store the html of the table heading in the keyName variable
keyName = table.rows[0].cells[i].innerHTML;
  
  //add the keyName to the keyNames array
  keyNames.push(keyName);
    
}//end for loop
  
    
  
  //loop through rows
  for(var i = 1; i < numOfRows; i++){//begin outer for loop    
    
    //add the opening { object bracket
    objectArray.push("{\n");
            
  for(var j=0; j < numOfCols; j++){//begin inner for loop   
    
 //extract the text from the input value in the table cell
 var inputValue = table.rows[i].cells[j].children[0].value;
    
  //store the object keyNames and its values
 objectArray.push("\"" + keyNames[j] + "\":" + "\"" + inputValue + "\"");

//if j less than the number of columns - 1(<-- accounting for 0 based arrays)
if(j < (numOfCols - 1)){//begin if then
  
  //add the , seperator
  objectArray.push(",\n");
  
}//end if then    
    
  }//end inner for loop
    
    //if i less than the number of rows - 1(<-- accounting for 0 based arrays)
    if(i < (numOfRows - 1)){//begin if then
    
      //add the closing } object bracket followed by a , separator
      objectArray.push("\n},\n");
    
  }
    else{
      
      //add the closing } object bracket
      objectArray.push("\n}");
      
    }
    //end if then else
  
  }//end outer for loop

   //add the closing ] array bracket
   objectArray.push("]");
  
  return objectArray.join("");
  
  
}//end function

function createTable1()
{
    blit1(exp, cr, at);
}

function createTable2()
{
    blit2(exp, cr, at);
}