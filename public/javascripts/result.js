var rn = 0, par = 0;
$(document).ready(function() {
    par = GetURLParameter('par');
    // console.log(par);
    var num = parseInt(par);
    // for(var i = 1; i <= rn+1; i++){
    //  myFunction();
    // }
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


    var str = "T";
    var arr = [];
    for(var r = 1; r <= parseInt(rn, 10); r++){
        var strr = str + r.toString();
        var sum = 0;
        for(var i = 0; i < finall.length; i++){
            sum += finall[i]["weight"]*finall[i][strr];
        }
        var strr = "#wt" + r.toString();
        $(strr).val(sum);
        arr.push(sum);
        // console.log(some);
        
    }

    fir_row = [];
    for(var j = 0; j < arr.length; j++){
        fir_row.push("T1");
    }
    var arr1 = arr.slice();
    arr.sort();
    str = "T";
    // for(var r = 1; r <= parseInt(rn, 10); r++){
        // var strr = str + r.toString();
        // var c = 0;
        // console.log(arr);console.log(arr1);
        for(var j = 0; j < arr.length; j++){
            var c = 0;
            for(var k = 0; k < arr.length; k++){
                if(arr1[j] === arr[k]){
                    arr[k] = 1000000;
                    c = k;
                    break;
                }
            }
            fir_row[c] = str+(j+1).toString();
        }
        var headd = "<br> </br>";
        // console.log(fir_row);
        for(var i = 0; i < fir_row.length; i++){
            if(i === 0){
                headd += "final rank  : <th id=" + fir_row[i] + ">" + fir_row[i] + "</th>";
            }else{
                headd += " <th id=" + fir_row[i] + ">" + fir_row[i] + "</th>";
            }
            
        }
        $( ".myHead1" ).append(headd);
});
});

function GetURLParameter(sParam)
{
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    var rr = sURLVariables[0].split('=');
    return rr[1];
}
function myFunction() {
    // var x = document.createElement("INPUT");
    // x.setAttribute("type", "file");
    // document.body.appendChild(x);

}

function createTable()
{
    rn = window.prompt("Input number of tools earlier entered", 1);
    // cn = window.prompt("Input number of columns",1);
    var str = "T";

    // var headd = "<th id=" + "criteria" + ">" + "criteria" + "</th>";
    //    $( ".myHead" ).append(headd);
    var headd = "<th id=" + "weight" + ">" + "weight" + "</th>";
       $( ".myHead" ).append(headd);

    for(var r=1;r<=parseInt(rn,10);r++){
       var final = str + r.toString();
       var headd = "<th id=" + final + ">" + final + "</th>";
       $( ".myHead" ).append(headd);
    }   
    str = "par";    
    for(var r=1;r<=par;r++){
        var strr = str + r.toString();
        var finall = strr ;    
        var temp = "<input type=text"  + " value=1" + ">";
        var td = "";
        for(var r1 = 1; r1 <= parseInt(rn, 10)+1; r1++){
            if(r1 === 1){
                 td +=   "<td>" + finall + ":" + temp + "</td>";
            }else{
                td += "<td>" + temp + "</td>";
            }
        }
        // td += "<td><input type=" + "text" + " id=" + "GM1" + r.toString() + "> </td><td><input type=" + "text" + " id=" + "GM2" + r.toString() + "> </td><td><input type=" + "text" + " id=" + "GM3" + r.toString() + "> </td>";
        td = "<tr>" + td + "</tr>";
        $(".tchalla").append(td);


    }
     var td = "<td><input type=" + "hidden" + " value=Total" + "> Total:</td>";
    // var temp = "<input type=text"  + " value=ddd" + ">";    
    for(var r1 = 1; r1 <= parseInt(rn, 10); r1++){
         str = "wt" + r1.toString();
        // if(r1 === 1){
             td += "<td>" + "<input type=text id=" + str + ">" + "</td>";
        // }else{
            // td += "<td>" + temp + "</td>";
        // }
    }

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
