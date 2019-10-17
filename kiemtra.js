function kt(h){
    regexp = /^[A-Z]/;
    if (regexp.test(h)) {
        document.write("Kí tự hoa" + "</br>");
    } else {
        document.write("Not phải kí tự hoa" + "</br>");
    }
}

var isFirstLetterUpperCase1 =   kt('bbcd' );
var jj = kt('Bccb');
var kk = kt('BBB');