function onClick() {
    var year = document.getElementById("year").value
    var month = document.getElementById("month").value
    var day = document.getElementById("day").value
    var date1 = new Date(year, month, day);
    var date2 = new Date();
    var diff = new Date(date2.getTime() - date1.getTime());

    // IF WRONG DATE
    if (year > date2.getUTCFullYear()) {
        document.getElementById("labelY").style.color = "red"
        document.getElementById("year").style.border = "1px solid red"
        document.getElementById("errorY").innerHTML = "Must be in the past"
        document.getElementById("errorY").style = "opacity:1"
    } else {
        document.getElementById("yearsN").innerHTML = diff.getUTCFullYear() - 1970;
        document.getElementById("labelY").style.color = "#888888"
        document.getElementById("year").style.border = "1px solid #88888850"
        document.getElementById("errorY").innerHTML = "Must be in the past"
        document.getElementById("errorY").style = "opacity:0"
    }

    if (month > 12) {
        document.getElementById("labelM").style.color = "red"
        document.getElementById("month").style.border = "1px solid red"
        document.getElementById("errorM").innerHTML = "Must be a valid month"
        document.getElementById("errorM").style = "opacity:1"
    } else {
        document.getElementById("monthsN").innerHTML = diff.getUTCMonth();
        document.getElementById("labelM").style.color = "#888888"
        document.getElementById("month").style.border = "1px solid #88888850"
        document.getElementById("errorM").innerHTML = "Must be a valid month"
        document.getElementById("errorM").style = "opacity:0"
    }

    if (day > 31) {
        document.getElementById("labelD").style.color = "red"
        document.getElementById("day").style.border = "1px solid red"
        document.getElementById("errorD").innerHTML = "Must be a valid day"
        document.getElementById("errorD").style = "opacity:1"
    } else {
        document.getElementById("daysN").innerHTML = diff.getUTCDate() - 1
        document.getElementById("labelD").style.color = "#888888"
        document.getElementById("day").style.border = "1px solid #88888850"
        document.getElementById("errorD").innerHTML = "Must be a valid day"
        document.getElementById("errorD").style = "opacity:0"
    }


    // IF NO DATE
    if (year == "") {
        document.getElementById("labelY").style.color = "red"
        document.getElementById("year").style.border = "1px solid red"
        document.getElementById("errorY").innerHTML = "This field is required"
        document.getElementById("errorY").style = "opacity:1"
    } else {
        document.getElementById("yearsN").innerHTML = diff.getUTCFullYear() - 1970;
        document.getElementById("labelY").style.color = "#888888"
        document.getElementById("year").style.border = "1px solid #88888850"
        document.getElementById("errorY").innerHTML = "This field is required"
        document.getElementById("errorY").style = "opacity:0"
    }

    if (month == "") {
        document.getElementById("labelM").style.color = "red"
        document.getElementById("month").style.border = "1px solid red"
        document.getElementById("errorM").innerHTML = "This field is required"
        document.getElementById("errorM").style = "opacity:1"
    } else {
        document.getElementById("monthsN").innerHTML = diff.getUTCMonth();
        document.getElementById("labelM").style.color = "#888888"
        document.getElementById("month").style.border = "1px solid #88888850"
        document.getElementById("errorM").innerHTML = "This field is required"
        document.getElementById("errorM").style = "opacity:0"
    }

    if (day == "") {
        document.getElementById("labelD").style.color = "red"
        document.getElementById("day").style.border = "1px solid red"
        document.getElementById("errorD").innerHTML = "This field is required"
        document.getElementById("errorD").style = "opacity:1"
    } else {
        document.getElementById("daysN").innerHTML = diff.getUTCDate() - 1
        document.getElementById("labelD").style.color = "#888888"
        document.getElementById("day").style.border = "1px solid #88888850"
        document.getElementById("errorD").innerHTML = "This field is required"
        document.getElementById("errorD").style = "opacity:0"
    }
}