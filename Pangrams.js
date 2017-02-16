var res;

function processData(input) {

  var obj = {
    q:false,
    w:false,
    e:false,
    r:false,
    t:false,
    y:false,
    u:false,
    i:false,
    o:false,
    p:false,
    a:false,
    s:false,
    d:false,
    f:false,
    g:false,
    h:false,
    j:false,
    k:false,
    l:false,
    z:false,
    x:false,
    c:false,
    v:false,
    b:false,
    n:false,
    m:false
  };

    input=input.toLowerCase();
    for(i=0;i<input.length; i++){
        obj[input[i]]=true;
    }
    result = true;

    for(var key in obj){
        if(!obj[key]) return 'not pangram';
    }
    return 'pangram';
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   console.log(processData(_input));
});
