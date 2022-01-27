let ageEl = document.getElementById("age");

function getAge() {
    var age = Math.floor((Date.now() - new Date("2008-01-19")) / 31536000000);

    ageEl.innerText = age = " " + age.toString();
    console.log(typeof(age), age);
}

getAge();
