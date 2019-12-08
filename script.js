fetch("https://randomuser.me/api/").then((value) =>{
    return value.json();
}).then((value) => {
    return value.results[0]
}).then((value) => {
    let nombre = document.getElementById("nombre");
    let img = document.getElementById("profile-img");
    let age = document.getElementById("age-data");
    let residence = document.getElementById("residence-data");
    let residence2 = document.getElementById("residence-data2");
    let email = document.getElementById("email-data");
    let cell = document.getElementById("cell-data");
    let cell2 = document.getElementById("cell-data2");

    nombre.innerHTML = value.name.title + " " + value.name.first + " " + value.name.last;
    img.src = value.picture.large;
    age.innerHTML = value.dob.age;
    residence.innerHTML = value.location.city + ", " + value.location.country;
    residence2.innerHTML = value.location.city + ", " + value.location.country;
    email.innerHTML = value.email;
    cell.innerHTML = value.cell;
    cell2.innerHTML = value.cell;
})

let about = document.getElementById("about");
let getAbout = document.getElementById("getAbout");
let resume = document.getElementById("resume");
let getResume = document.getElementById("getResume");
let works = document.getElementById("works");
let getWorks = document.getElementById("getWorks");
let blog = document.getElementById("blog");
let getBlog = document.getElementById("getBlog");
let contact = document.getElementById("contact");
let getContact = document.getElementById("getContact");
let email = document.getElementById("email");
let form = document.getElementById("form");

function remove() {
    about.classList.remove('view');
    getAbout.classList.remove('selected');
    resume.classList.remove('view');
    getResume.classList.remove('selected');
    works.classList.remove('view');
    getWorks.classList.remove('selected');
    blog.classList.remove('view');
    getBlog.classList.remove('selected');
    contact.classList.remove('view');
    getContact.classList.remove('selected');
}

getAbout.addEventListener('click', function (e) {
    if (window.innerWidth > 1040) {
        e.preventDefault();
        remove();
        about.classList.add('view');
        getAbout.classList.add('selected');
    }
});
getResume.addEventListener('click', function (e) {
    if (window.innerWidth > 1040) {
        e.preventDefault();
        remove();
        resume.classList.add('view');
        getResume.classList.add('selected');
    }
})
getWorks.addEventListener('click', function (e) {
    if (window.innerWidth > 1040) {
        e.preventDefault();
        remove();
        works.classList.add('view');
        getWorks.classList.add('selected');
    }
})
getBlog.addEventListener('click', function (e) {
    if (window.innerWidth > 1040) {
        e.preventDefault();
        remove();
        blog.classList.add('view');
        getBlog.classList.add('selected');
    }
})
getContact.addEventListener('click', function (e) {
    if (window.innerWidth > 1040) {
        e.preventDefault();
        remove();
        contact.classList.add('view');
        getContact.classList.add('selected');
    }
})

email.addEventListener("input", function (event) {
  if (email.validity.typeMismatch) {
    alert("Wrong email");
  }
});

form.addEventListener("submit", function (event) {
    event.preventDefault();
});