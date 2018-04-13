var cr = 1, at = 1, exp = 1;

function blit(rn){
    
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
}
function blit1(rn){
    
    var str = "T";
    for(var r=1;r<=parseInt(rn,10);r++){
       var final = str + r.toString();
       var headd = "<th id=" + final + ">" + final + "</th>";
       $( ".myHead1" ).append(headd);
    }
    var headd = "<th >GM for l</th><th >GM for m</th><th >GM for n</th>";
    $( ".myHead1" ).append(headd);  

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
        $(".tchalla1").append(td);
    }
}
function createTable()
{
    cr = window.prompt("Input number of criteria", 1);
    at = window.prompt("Input number of alternatives", 1);
    exp = window.prompt("Input number experts", 1);

    blit(cr);
    blit1(at);
    blit2(exp);
}