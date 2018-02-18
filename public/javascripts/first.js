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
  
  for(var i = 0; i < finall.length-3; i++){

    var arr = finall[i].par1.split(',');
    var arr2 = finall[i].par2.split(',');

    var gm1 = Math.cbrt(arr[0]*arr2[0]);
    var gm2 = Math.cbrt(arr[1]*arr2[1]);
    var gm3 = Math.cbrt(arr[2]*arr2[2]);
    
    sum1 += gm1;
    // console.log(sum1);
    sum2 += gm2;
    sum3 += gm3;

    var id = i+1;
    var str = id.toString();


    // console.log(gm1);
    var fin = '#GM1' + str;
    $(fin).val(gm1);
    fin = "";
    fin = '#GM2' + str;
    $(fin).val(gm2);
    fin = "";
    fin = '#GM3' + str;
    $(fin).val(gm3);
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
  

});
});


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
