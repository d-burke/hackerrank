function processData(input) {
    var arr = input.split('\n'); // input
    var arrN = []; // strings
    var arrQ = []; // queries

    for(var i = arr[0]; i>0; i--){
        arrN.push(arr[i]);
    }

    for(var i = parseInt(arr[0])+2; i < arr.length; i++){
        arrQ.push(arr[i]);
    }

    // nested loop can be avoided by refactor arrN to be an object of strings with count totals
    for(var i = 0; i < arrQ.length; i++){
        var count = 0;
        for(var ii = 0; ii < arrN.length; ii++){
            if(arrQ[i]===arrN[ii]) count++;
        }
        console.log(count);
    }
}

/////////////// ignore below this line ////////////////////
process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});
process.stdin.on("end", function () {
   processData(_input);
});