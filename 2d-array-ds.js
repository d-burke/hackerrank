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

/////////////// ignore above this line ////////////////////

function main() {
    var arr = [];
    for(arr_i = 0; arr_i < 6; arr_i++){
       arr[arr_i] = readLine().split(' ');
       arr[arr_i] = arr[arr_i].map(Number);
    }

    var largestSum = -Infinity;

    var getIsum = function(y,x){
        return (arr[y][x] +
        arr[y][x+1] +
        arr[y][x+2] +
        arr[y+1][x+1] +
        arr[y+2][x] +
        arr[y+2][x+1] +
        arr[y+2][x+2]);
    };

    for(var y = 0; y < arr.length -2; y++){
        for(var x = 0; x < arr[0].length -2; x++){
            largestSum = Math.max(getIsum(y,x), largestSum);
        }
    }
    console.log(largestSum);
}