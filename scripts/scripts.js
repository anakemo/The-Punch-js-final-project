
// index.html-js



// create navigation

let nav=document.getElementById("menubar");
function cerateNav(){
    
    let navNames=["home", "drinks","sign up","about us ",];
    let navLinks=['index.html', 'drinks.html','signup.html','aboutus.html'];
    console.log(navNames);

    let ul=document.createElement("ul");
    ul.classList.add('navUl');
    

    for (let i = 0; i < navNames.length; i++) {
        let li = document.createElement("li");
        li.classList.add("navLi")
        let a = document.createElement("a");
        a.setAttribute("href", navLinks[i]);
        a.innerText = navNames[i];
        li.appendChild(a);
        ul.appendChild(li);

        
    }
    nav.appendChild(ul);
   



}
cerateNav();

// ......







  
// navigation aside for responsive page  

  function cerateNav2(){
    
    let navNames=["home", "drinks","sign up","about us ",];
    let navLinks=['index.html', 'drinks.html','signup.html','aboutus.html'];
    console.log(navNames);

    let ulNew=document.getElementById("ul2");
   
    for (let i = 0; i < navNames.length; i++) {
        let li = document.createElement("li");
        li.classList.add("navLi")
        let a = document.createElement("a");
        a.setAttribute("href", navLinks[i]);
        a.innerText = navNames[i];
        li.appendChild(a);
        ulNew.appendChild(li);

        
    }
    
 

}
cerateNav2();


// ....

// .... scroll to up logic

let mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
} 

// ....


// .... opening/closing aside navigation
  
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("overlayMenu").style.color="black";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
// .....

// ... opening / closing userpage area

function openareaNav() {
  document.getElementById("logARea").style.width = "250px";
}

function closeareaNav() {
  document.getElementById("logARea").style.width = "0";
}

// 



// saving username in cookies


document.getElementById("loggin").addEventListener("submit",function(event){
  event.preventDefault();

  let saveUser=document.getElementById("rememberuser");

  if (saveUser.checked) {
    let usernameValue = document.getElementById("userusername").value;
    Cookies.set("saveusername_cookies", usernameValue);
  } else {
    Cookies.remove("saveusername_cookies");
  }
  event.target.submit();
});

let savedUsername = Cookies.get("saveusername_cookies");

if (savedUsername) {
  document.getElementById("userusername").value = savedUsername;
 document.getElementById("rememberuser").checked = true;
}