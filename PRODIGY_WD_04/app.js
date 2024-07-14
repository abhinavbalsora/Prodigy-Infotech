const home = document.querySelector("#home");
const nav = document.querySelector('.navigation');
const project = document.querySelector("#Projects");
const projectSection = document.querySelector(".project-page");
const connect = document.querySelector("#connect");
const social = document.querySelector(".footer-ele");
const project1 = document.querySelector(".project-1");
const project2 = document.querySelector(".project-2");
const internProject = document.querySelectorAll(".internship-project");

///scroll to contact-info
connect.addEventListener('click' , function(){
    window.scrollTo({
        top: social.offsetTop,
        behavior: 'smooth'
    });

    setTimeout(() => {
    
    }, 1000);

    setInterval(() => {
       
    }, 2000);

});



//scroll to project-section
project.addEventListener('click' , function(){
 
    window.scrollTo({
        top: projectSection.offsetTop,
        behavior: 'smooth'
    });

     
});


//scrollto home 
home.addEventListener('click', function(){
    window.scrollTo({
        top: nav.offsetTop,
        behavior: "smooth"
    });
});

