var replacepatern = function(pattern,text,array){
    var nstring = '';
    for (var i=0;i<array.length;i++){
       var index =  text.indexOf(pattern);
       if (index > -1){
           nstring += text.substr(0,index) + array[i];
           text = text.substr(index+3,text.length-1);
       }
    }
    return nstring + text;
}