

function changeClass(e) {
    event.preventDefault();
    
    document.getElementById(e).classList.add("active");
    if (e === "nav_list1") {
        document.getElementById(e).classList.add("active");
        document.getElementById("nav_list2").classList.remove("active");
        document.getElementById("nav_list3").classList.remove("active");
    } else if ( e === "nav_list2") {
        document.getElementById(e).classList.add("active");
        document.getElementById("nav_list1").classList.remove("active");
        document.getElementById("nav_list3").classList.remove("active");
    } else {
        document.getElementById(e).classList.add("active");
        document.getElementById("nav_list2").classList.remove("active");
        document.getElementById("nav_list1").classList.remove("active");
    }
}

