process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// given code above this line ////////////////////

function main() {
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]); // array size
    var k = parseInt(n_temp[1]); // rotate right number of positions
    var q = parseInt(n_temp[2]); // number of queries
    a = readLine().split(' ');
    a = a.map(Number);

    for(var i=0;i<k;i++){
        a.unshift(a.pop());
        // this can be faster to write a new array once, than to pop and unshift each time
    }

    for(var a0 = 0; a0 < q; a0++){
        var m = parseInt(readLine());
        console.log(a[m]);
    }
}