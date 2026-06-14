// =====================================
// TYPEWRITER EFFECT
// =====================================

const roles = [
  "Data Analyst",
  "Excel Specialist",
  "SQL Enthusiast",
  "Power BI Developer",
  "Python Learner",
  "Dashboard Designer"
];

const typingText =
  document.getElementById("typing-text");

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

  const currentRole =
    roles[roleIndex];

  if (!isDeleting) {

    typingText.textContent =
      currentRole.substring(
        0,
        charIndex + 1
      );

    charIndex++;

    if (
      charIndex ===
      currentRole.length
    ) {
      isDeleting = true;

      setTimeout(
        typeEffect,
        1500
      );

      return;
    }

  } else {

    typingText.textContent =
      currentRole.substring(
        0,
        charIndex - 1
      );

    charIndex--;

    if (charIndex === 0) {

      isDeleting = false;

      roleIndex++;

      if (
        roleIndex >=
        roles.length
      ) {
        roleIndex = 0;
      }
    }
  }

  setTimeout(
    typeEffect,
    isDeleting ? 50 : 100
  );
}

typeEffect();


// =====================================
// NAVBAR SCROLL EFFECT
// =====================================

const navbar =
  document.querySelector(".navbar");

window.addEventListener(
  "scroll",
  () => {

    if (
      window.scrollY > 50
    ) {

      navbar.style.background =
        "rgba(15,23,42,0.95)";

      navbar.style.boxShadow =
        "0 10px 30px rgba(0,0,0,0.3)";

    } else {

      navbar.style.background =
        "rgba(15,23,42,0.65)";

      navbar.style.boxShadow =
        "none";
    }
  }
);


// =====================================
// HERO FADE ANIMATION
// =====================================

window.addEventListener(
  "load",
  () => {

    const heroContent =
      document.querySelector(
        ".hero-content"
      );

    const heroImage =
      document.querySelector(
        ".hero-image"
      );

    heroContent.style.opacity =
      "0";

    heroContent.style.transform =
      "translateX(-50px)";

    heroImage.style.opacity =
      "0";

    heroImage.style.transform =
      "translateX(50px)";

    setTimeout(() => {

      heroContent.style.transition =
        "all 1s ease";

      heroContent.style.opacity =
        "1";

      heroContent.style.transform =
        "translateX(0)";

      heroImage.style.transition =
        "all 1s ease";

      heroImage.style.opacity =
        "1";

      heroImage.style.transform =
        "translateX(0)";

    }, 300);

  }
);


// =====================================
// FLOATING CARD PARALLAX
// =====================================

const cards =
  document.querySelectorAll(
    ".floating-card"
  );

document.addEventListener(
  "mousemove",
  (e) => {

    const x =
      e.clientX /
      window.innerWidth;

    const y =
      e.clientY /
      window.innerHeight;

    cards.forEach(
      (card, index) => {

        const speed =
          (index + 1) * 8;

        card.style.transform =
          `translate(
            ${x * speed}px,
            ${y * speed}px
          )`;
      }
    );

  }
);


// =====================================
// BUTTON HOVER GLOW
// =====================================

const buttons =
  document.querySelectorAll(
    ".btn-primary, .btn-secondary"
  );

buttons.forEach((btn) => {

  btn.addEventListener(
    "mousemove",
    (e) => {

      const rect =
        btn.getBoundingClientRect();

      const x =
        e.clientX -
        rect.left;

      const y =
        e.clientY -
        rect.top;

      btn.style.setProperty(
        "--x",
        `${x}px`
      );

      btn.style.setProperty(
        "--y",
        `${y}px`
      );
    }
  );

});


// =====================================
// PROFILE IMAGE TILT EFFECT
// =====================================

const profile =
  document.querySelector(
    ".profile-ring"
  );

if (profile) {

  profile.addEventListener(
    "mousemove",
    (e) => {

      const rect =
        profile.getBoundingClientRect();

      const x =
        e.clientX -
        rect.left;

      const y =
        e.clientY -
        rect.top;

      const rotateY =
        ((x / rect.width) - 0.5)
        * 15;

      const rotateX =
        ((y / rect.height) - 0.5)
        * -15;

      profile.style.transform =
        `rotateX(${rotateX}deg)
         rotateY(${rotateY}deg)`;
    }
  );

  profile.addEventListener(
    "mouseleave",
    () => {

      profile.style.transform =
        "rotateX(0) rotateY(0)";
    }
  );
}


// =====================================
// SOCIAL ICON POP EFFECT
// =====================================

const socialIcons =
  document.querySelectorAll(
    ".social-icons a"
  );

socialIcons.forEach((icon) => {

  icon.addEventListener(
    "mouseenter",
    () => {

      icon.style.transform =
        "translateY(-8px) scale(1.1)";
    }
  );

  icon.addEventListener(
    "mouseleave",
    () => {

      icon.style.transform =
        "translateY(0) scale(1)";
    }
  );

});


// =====================================
// SCROLL REVEAL ANIMATION
// =====================================

const revealElements =
  document.querySelectorAll(
    ".reveal"
  );

function revealOnScroll() {

  revealElements.forEach(
    (element) => {

      const top =
        element.getBoundingClientRect()
          .top;

      const windowHeight =
        window.innerHeight;

      if (
        top <
        windowHeight - 100
      ) {

        element.classList.add(
          "active"
        );
      }

    }
  );
}

window.addEventListener(
  "scroll",
  revealOnScroll
);

revealOnScroll();

// =====================================
// KPI COUNTER ANIMATION
// =====================================

const counters =
  document.querySelectorAll(
    ".counter"
  );

const speed = 100;

const startCounter = () => {

  counters.forEach((counter) => {

    const updateCount = () => {

      const target =
        +counter.getAttribute(
          "data-target"
        );

      const count =
        +counter.innerText;

      const increment =
        target / speed;

      if (count < target) {

        counter.innerText =
          Math.ceil(
            count + increment
          );

        setTimeout(
          updateCount,
          20
        );

      } else {

        counter.innerText =
          target + "+";
      }
    };

    updateCount();

  });
};

const kpiSection =
  document.querySelector(
    ".kpi-section"
  );

const observer =
  new IntersectionObserver(
    (entries) => {

      entries.forEach(
        (entry) => {

          if (
            entry.isIntersecting
          ) {

            startCounter();

            observer.unobserve(
              entry.target
            );
          }
        }
      );
    },
    {
      threshold: 0.4
    }
  );

observer.observe(kpiSection);

// =====================================
// SKILL BAR ANIMATION
// =====================================

const skillBars =
document.querySelectorAll(
".progress-bar"
);

const skillObserver =
new IntersectionObserver(

(entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

entry.target.style.width =
entry.target.classList.contains("excel")
? "90%"
: entry.target.classList.contains("sql")
? "85%"
: entry.target.classList.contains("powerbi")
? "80%"
: entry.target.classList.contains("python")
? "75%"
: entry.target.classList.contains("statistics")
? "70%"
: "85%";

skillObserver.unobserve(
entry.target
);

}

});

},
{
threshold:0.4
}
);

skillBars.forEach((bar)=>{

skillObserver.observe(bar);

});

// =====================================
// CHALLENGE BAR ANIMATION
// =====================================

const challengeBar =
document.querySelector(
".challenge-bar"
);

const challengeObserver =
new IntersectionObserver(

(entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

challengeBar.style.width =
"16%";

}
});

},
{
threshold:0.4
}
);

if(challengeBar){

challengeObserver.observe(
challengeBar
);

}

// ===========================
// LOADER
// ===========================

window.addEventListener("load", () => {

    const loader =
        document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.transition =
            "0.5s";

        setTimeout(() => {

            loader.style.display =
                "none";

        }, 500);

    }, 1000);

});

// ===========================
// BACK TO TOP
// ===========================

const topBtn =
    document.getElementById(
        "topBtn"
    );

window.addEventListener(
    "scroll",
    () => {

        if (
            window.scrollY > 500
        ) {

            topBtn.style.display =
                "block";

        } else {

            topBtn.style.display =
                "none";
        }
    }
);

topBtn.addEventListener(
    "click",
    () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"
        });

    }
);

// ===========================
// GITHUB API
// ===========================

fetch(
"https://api.github.com/users/YashwanthChowdary19"
)
.then(res => res.json())
.then(data => {

document.getElementById(
"github-name"
).textContent =
data.name;

document.getElementById(
"github-followers"
).textContent =
`Followers: ${data.followers}`;

document.getElementById(
"github-repos"
).textContent =
`Public Repositories: ${data.public_repos}`;

})
.catch(error => {

console.log(error);

});


// ========================
// PROJECT DATA
// ========================



let projects =
JSON.parse(
localStorage.getItem("projects")
) || [

{
skill:"Excel",
title:"IPL Analytics Dashboard",
description:"Interactive IPL Dashboard with slicers and KPIs.",
image:"assets/ipl-dashboard.png",
github:"#",
demo:"#"
},

{
skill:"Excel",
title:"Sales Dashboard",
description:"Business sales dashboard using Excel.",
image:"assets/sales-dashboard.png",
github:"#",
demo:"#"
}

];

// RENDER

function renderProjects(skill="All"){

const grid =
document.getElementById(
"projectsGrid"
);

grid.innerHTML = "";

const filtered =

skill === "All"

?

projects

:

projects.filter(
p => p.skill === skill
);

filtered.forEach(project=>{

grid.innerHTML += `

<div class="project-card">

<img
src="${project.image}"
alt="${project.title}">

<div class="project-content">

<span class="skill-badge">
${project.skill}
</span>

<h3>
${project.title}
</h3>

<p>
${project.description}
</p>

<div class="project-links">

<a
href="${project.github}"
target="_blank">

GitHub

</a>

<a
href="${project.demo}"
target="_blank">

Demo

</a>

</div>

</div>

</div>

`;

});

}

// FILTERS

document
.querySelectorAll(".filter-btn")
.forEach(btn=>{

btn.addEventListener(
"click",

()=>{

document
.querySelectorAll(".filter-btn")
.forEach(b=>
b.classList.remove(
"active"
));

btn.classList.add(
"active"
);

renderProjects(
btn.dataset.skill
);

});

});

// MODAL

document.addEventListener("DOMContentLoaded", () => {

    const modal =
    document.getElementById(
        "projectModal"
    );

    const openBtn =
    document.getElementById(
        "openModalBtn"
    );

    const closeBtn =
    document.getElementById(
        "closeModal"
    );

    console.log(modal);

    if(openBtn && modal){

        openBtn.addEventListener(
            "click",
            () => {

                modal.style.display =
                "block";

            }
        );

    }

    if(closeBtn && modal){

        closeBtn.addEventListener(
            "click",
            () => {

                modal.style.display =
                "none";

            }
        );

    }

});

// SAVE PROJECT

document
.getElementById(
"projectForm"
)
.addEventListener(
"submit",

function(e){

e.preventDefault();

const project = {

skill:
document.getElementById(
"skill"
).value,

title:
document.getElementById(
"title"
).value,

description:
document.getElementById(
"description"
).value,

image:
document.getElementById(
"image"
).value,

github:
document.getElementById(
"github"
).value,

demo:
document.getElementById(
"demo"
).value

};

projects.push(project);

localStorage.setItem(
"projects",
JSON.stringify(projects)
);

renderProjects();

modal.style.display =
"none";

this.reset();

});

renderProjects();