function processData(input) {
    var lines = input.split('\n');
    var shift = lines[0].split(' ')[1];
    var ar = lines[1].split(' ');
    ar=ar.splice(shift % ar.length).concat(ar);
    console.log(ar.join(' '));
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});