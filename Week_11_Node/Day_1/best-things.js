var fs = require("fs");

fs.readFile("./best_things_ever.txt", "utf8", function (err, data) {
    if (err) console.error(err);
    var arr = data.split(",");
    // for (var i = 0; i < arr.length; i ++) {
    // console.log(arr[i]);
    arr.forEach(function (elem) {
        console.log(elem);
    })
// };
});

