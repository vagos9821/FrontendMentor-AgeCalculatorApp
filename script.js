function onClick() {
    var year = document.getElementById("year").value
    var month = document.getElementById("month").value
    var day = document.getElementById("day").value
    var date1 = new Date(year, month, day);
    var date2 = new Date();
    var diff = new Date(date2.getTime() - date1.getTime());

    document.getElementById("yearsN").innerHTML = diff.getUTCFullYear() - 1970;
    document.getElementById("monthsN").innerHTML = diff.getUTCMonth();
    document.getElementById("daysN").innerHTML = diff.getUTCDate() - 1
}