var wall=document.querySelector(".first"),heading=document.querySelector("h1");window.onscroll=function(){this.pageYOffset<350?(wall.classList.add("mdnghtblue"),wall.classList.remove("purple"),wall.classList.remove("skyblue"),heading.innerHTML="midnightblue",heading.style.color="#ffffff"):this.pageYOffset>350&&this.pageYOffset<700?(wall.classList.add("skyblue"),wall.classList.remove("mdnghtblue"),wall.classList.remove("purple"),heading.innerHTML="skyblue",heading.style.color="#000000"):(wall.classList.add("purple"),wall.classList.remove("skyblue"),wall.classList.remove("mdnghtblue"),heading.innerHTML="purple",heading.style.color="#ffffff")};