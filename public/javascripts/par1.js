var rn = 1;
var ite = ["T1", "T2", "T3", "T4", "T5", "T6", "T7"];
$(document).ready(function() {

  $("#btnExport").click(function(e) {
  var file = new Blob([$('#json-table').html()], {type:"application/vnd.ms-excel"});

var url = URL.createObjectURL(file);

var a = $("<a />", {
  href: url,
  download: "filename.xls"
})
.appendTo("body")
.get(0)
.click();
  e.preventDefault();
});


  $("#test-form").on("submit",function(e){
  
  //stop form form submitting
  e.preventDefault();
  
  //the table object 
  var table = $("#json-table")[0];
  // console.log($('form').serializeArray());
  //display the results
  var some = formToJSON(table);
  var finall = JSON.parse(some);

  var sum1 = 0, sum2 = 0, sum3 = 0;
  var fir_row = [];


  for(var i = 0; i < finall.length-3; i++){
    var gm1 = 1, gm2 = 1, gm3 = 1;
    for(var r = 0; r < rn; r++){
       var arr = finall[i][ite[r]].split(',');
       gm1 *= arr[0];gm2 *= arr[1];gm3 *= arr[2];
    }
    gm1 = Math.pow(gm1, 1/rn);
    gm2 = Math.pow(gm2, 1/rn);
    gm3 = Math.pow(gm3, 1/rn);

    fir_row.push(gm1);
    fir_row.push(gm2);
    fir_row.push(gm3);

    sum1 += gm1;
    sum2 += gm2;
    sum3 += gm3;
    
    var str = (i+1).toString();
    var fin = '#GM1' + str;
    $(fin).val(gm1);
    fin = "";
    fin = '#GM2' + str;
    $(fin).val(gm2);
    fin = "";
    fin = '#GM3' + str;
    $(fin).val(gm3);
    fin = "";
  }
  
  $(tot1).val(sum1);
  $(tot2).val(sum2);
  $(tot3).val(sum3);

  $(rec1).val(1.0/sum1);
  $(rec2).val(1.0/sum2);
  $(rec3).val(1.0/sum3);
  
  var arr1  = [1.0/sum1,1.0/sum2,1.0/sum3];
  arr1.sort();
  $(asc1).val(arr1[0]);
  $(asc2).val(arr1[1]);
  $(asc3).val(arr1[2]);

  var c = 0;
  var defuzzy_weight = [];
  var maxx = 0;
  for(var i = 0; i < fir_row.length; i+=3){

    var id = c+1;
    c++;
    var str = id.toString();

    var fin = "#wt1" + str;
    var av = (fir_row[i]*arr1[0] + fir_row[i+1]*arr1[1] + fir_row[i+2]*arr1[2])/3.0;
    // console.log(fin);
    $(fin).val(av);
    defuzzy_weight.push(av);
    maxx = Math.max(maxx, av);
  }

  //   var gm1 = Math.pow(arr[0]*arr2[0], 1/rn);
  //   var gm2 = Math.pow(arr[1]*arr2[1], 1/rn);
  //   var gm3 = Math.pow(arr[3]*arr2[2], 1/rn);
    
  //   fir_row.push(gm1);
  //   fir_row.push(gm2);
  //   fir_row.push(gm3);

  //   sum1 += gm1;
  //   // console.log(sum1);
  //   sum2 += gm2;
  //   sum3 += gm3;

  //   var id = i+1;
  //   var str = id.toString();


  //   // console.log(gm1);
  //   var fin = '#GM1' + str;
  //   console.log(fin);
  //   $(fin).val(gm1);
  //   fin = "";
  //   fin = '#GM2' + str;
  //   $(fin).val(gm2);
  //   fin = "";
  //   fin = '#GM3' + str;
  //   $(fin).val(gm3);
  //   fin = "";
  

  // $(tot1).val(sum1);
  // $(tot2).val(sum2);
  // $(tot3).val(sum3);

  // $(rec1).val(1.0/sum1);
  // $(rec2).val(1.0/sum2);
  // $(rec3).val(1.0/sum3);
  
  // var arr1  = [1.0/sum1,1.0/sum2,1.0/sum3];
  // arr1.sort();
  // $(asc1).val(arr1[0]);
  // $(asc2).val(arr1[1]);
  // $(asc3).val(arr1[2]);
  
  // var c = 0;

  // var defuzzy_weight = [];
  // var maxx = 0;
  // for(var i = 0; i < fir_row.length; i+=3){

  //   var id = c+1;
  //   c++;
  //   var str = id.toString();

  //   var fin = "#wt1" + str;
  //   var av = (fir_row[i]*arr1[0] + fir_row[i+1]*arr1[1] + fir_row[i+2]*arr1[2])/3.0;
  //   // console.log(fin);
  //   $(fin).val(av);
  //   defuzzy_weight.push(av);
  //   maxx = Math.max(maxx, av);
  // }

  // for(var i = 0; i < defuzzy_weight.length; i++){
  //   var id = c+1;
  //   c++;
  //   var str = id.toString();
  //   var fin = "#wt1" + str;
  //   console.log(fin);
  //   $(fin).val(defuzzy_weight[i]/maxx);
  // }

    
});
});

function createTable()
{
    rn = window.prompt("Input number tools", 1);
    // cn = window.prompt("Input number of columns",1);
    
    var str = "T";
    for(var r=1;r<=parseInt(rn,10);r++){
       var final = str + r.toString();
       var headd = "<th id=" + final + ">" + final + "</th>";
       $( ".myHead" ).append(headd);
    }
    var headd = "<th >GM for l</th><th >GM for m</th><th >GM for n</th>";
    $( ".myHead" ).append(headd);  

    for(var r=1;r<=parseInt(rn,10);r++){
        var strr = str + r.toString();
        var finall = strr ;    
        var temp = "<input type=text"  + " value=1,1,1" + ">";
        var td = "";
        for(var r1 = 1; r1 <= parseInt(rn, 10); r1++){
            if(r1 === 1){
                 td +=   "<td>" + finall + ":" + temp + "</td>";
            }else{
                td += "<td>" + temp + "</td>";
            }
        }
        td += "<td><input type=" + "text" + " id=" + "GM1" + r.toString() + "> </td><td><input type=" + "text" + " id=" + "GM2" + r.toString() + "> </td><td><input type=" + "text" + " id=" + "GM3" + r.toString() + "> </td>";
        td = "<tr>" + td + "</tr>";
        $(".tchalla").append(td);
    }

    create_tot_rec("Total", "tot", rn);
    create_tot_rec("Reciprocal", "rec", rn);
    create_tot_rec("Ascending", "asc" , rn);

    
    for(var r1 = 1; r1 <= parseInt(rn, 10); r1++){
      var td = "";
      var strr = str + r1.toString();
      var finall = strr ;
      td += "<td>" + finall + ":<input type=text " + "id=wt1" + r1.toString()+ "> </td>";
      td += "<td>" +  "<input type=text " + "id=wt1" + (r1+2).toString()+ "> </td> ";
      td = "<tr>" + td + "</tr>";
      $(".tchaka").append(td);
    }
    
}
function create_tot_rec(str, tag, rn){
  var td = "";
    for(var r1 = 1; r1 < parseInt(rn, 10); r1++){
      td += "<td><input type=" + "hidden" + " value=1,1,1" + "> </td>";
    }
        
    td += "<td>" + str + ":<input type=" + "hidden" + " value=1,2,3> </td>";
    
    td += "<td><input type=" + "text" + " id=" + tag + "1" + "> </td>";
    td += "<td><input type=" + "text" + " id=" + tag + "2" + "> </td>";
    td += "<td><input type=" + "text" + " id=" + tag + "3" + "> </td>";
    td = "<tr>" + td + "</tr>";
    $(".tchalla").append(td);
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
