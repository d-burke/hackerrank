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
    var y = parseInt(readLine());

     if (1918 < y){
        if (y % 4 === 0) {
            console.log('12.09.'+ y);
        } else {
            console.log('13.09.'+ y);
        }
    } else if (y < 1918){

        if (y % 400 === 0 || (y % 4 === 0 && y % 100 != 0)){
            console.log('12.09.'+ y);
        } else {
            console.log('13.09.'+ y);
        }
    } else if (y === 1918){
        console.log('25.09.1918');
    }
    return;
}
