window.onload = function() {
    function onLoad() {
        getAge()
    }
}

function getAge() {
    var age = Math.floor((Date.now() - new Date("2008-01-19")) / 31536000000);

    document.getElementById("age").innerHTML = age;
}
