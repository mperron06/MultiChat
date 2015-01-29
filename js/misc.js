function getFormatedToday(){
    return getFormatedDate(new Date());
}

function getFormatedDate(d){
    var day = formatInt(d.getDate());
    var month = formatInt(d.getMonth()+1);
    var year = d.getFullYear();
    var hours = formatInt(d.getHours());
    var minuts = formatInt(d.getMinutes());
    
    return "" + day + "/" + month + "/" + year + " " + hours + ":" + minuts
}

function formatInt(i){
    return (i<10 ? '0'+i : ''+i);
}

function getHTMLDate(d){
    return "<div class='date'>"+getFormatedDate(d)+"</div>"
}

function getHTMLToday(){
    return "<div class='date'>"+getFormatedToday()+"</div>"
}