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
    var n = parseInt(readLine());
    var unsorted = [];
    for(var unsorted_i = 0; unsorted_i < n; unsorted_i++){
       unsorted[unsorted_i] = readLine();
    }

    // var sorted = unsorted.sort(function(a,b){return parseFloat(a) - parseFloat(b);});

    var sorted = unsorted.sort(function(a,b){
      if (a.length<b.length) return -1;
      else if (a.length>b.length) return 1;
      else {
        for(var i = 0; i < a.length; i++){
          if(a[i]<b[i]) return -1;
          else if (a[i]>b[i]) return 1;
        }
        return 0;
      }
    });

    for (var i = 0; i < sorted.length ; i++){
        console.log(sorted[i]);
    }
}
