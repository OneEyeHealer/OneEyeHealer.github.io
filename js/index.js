// for loading screen
const loadding = () => {
  window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
    loader.className += " hidden";
  });
};

const logoSection = () => {
  const logo = document.querySelector(".logo h1");
  const logoPath = "assets/img/OneEyeHealer-Logo.png";
  const name = "OneEyeHealer";

  logo.innerHTML = `<img src= "${logoPath}" alt="Logo"
    style="width: 50px; height: auto;" /><span>${name}</span>`;
};

// gradient nav bar on scroll
const navGradient = () => {
  const sections = document.querySelectorAll("section");
  const floater = document.querySelector(".float-box");
  const gradients = [
    "linear-gradient(to right top, #667db6, #0082c8, #0082c8,#667db6)", //home
    "linear-gradient(to right top, #000046, #1cb5e0)", //about
    "linear-gradient(to right top, #36d1dc,#5b86e5)", //career
    "linear-gradient(to right top, #2c3e50,#3498db)", //projects
    "linear-gradient(to right top, #667db6, #0082c8, #0082c8,#667db6)", //skills
  ];

  // section dectector
  const listBlock = {
    threshold: 0.4,
  };

  // Section oberser
  let observer = new IntersectionObserver(navBarDetect, listBlock);

  function navBarDetect(entries) {
    entries.forEach((entry) => {
      const className = entry.target.className;
      const activeAnchor = document.querySelector(`[data-page=${className}]`);
      const indexGradient = entry.target.getAttribute(`data-index`);
      const dimension = activeAnchor.getBoundingClientRect();
      const property = {
        width: dimension.width,
        height: dimension.height,
        top: dimension.top,
        left: dimension.left,
      };
      if (entry.isIntersecting) {
        floater.style.setProperty("left", `${property.left}px`);
        floater.style.setProperty("top", `${property.top}px`);
        floater.style.setProperty("height", `${property.height}px`);
        floater.style.setProperty("width", `${property.width}px`);
        floater.style.background = gradients[indexGradient];
        activeAnchor.style.color = "#fff";
      } else {
        activeAnchor.style.color = "rgb(23, 42, 69)";
      }
    });
  }

  sections.forEach((section) => {
    observer.observe(section);
  });
};

// mail id
const mailId = () => {
  const id = "harsharora3156@gmail.com";
  const mail = document.querySelector(".mail_style-list");
  mail.innerHTML = `<a href="mailto:${id}" class="mailID" >${id}</a>`;
};

// home section txt
const hm = () => {
  const hi = document.querySelector(".hm-intro_hi");
  const userName = document.querySelector(".hm-userName");
  const tagLine = document.querySelector(".hm-tagLine");
  const msg = document.querySelector(".hm-intro_msg");
  const location = document.querySelector(".hm-locationTxt");

  hi.innerHTML = "Hi, my name is";
  userName.innerHTML = "Harsh Arora";
  tagLine.innerHTML = `I don’t Inherit it,<br> I Earn by working in <a href="#">Bits</a> & <a href="#">Pixels</a>.`;
  msg.innerHTML =
    "I'm a Freelencer by choice and CS Engineer by profession, build exceptional websites & application's for ease.";
  location.innerHTML = `<h5><i class="fas fa-map-marker-alt"></i> <span>D</span>elhi, <span>I</span>ndia </h5>`;
};
//about section txt
const ab = () => {
  // img box
  const avatar = document.querySelector(".ab_avtarImgPicture");
  const avatarPath = "assets/img/Harsh-Arora.jpg";
  avatar.innerHTML = `<img src="${avatarPath}" alt="Harsh Arora">`;
};

const pj = () => {
  const pjNames = {
    1: document.querySelector(".pj-project_name-1"),
    2: document.querySelector(".pj-project_name-2"),
  };
  const names = {
    1: "Projexel Technologies",
    2: "GearFluids",
  };

  const paragraphs = {
    1: document.querySelector(".pj_description_p1"),
    2: document.querySelector(".pj_description_p2"),
  };
  const paragraphsTxt = {
    1: "Projexel is founded with the vision to create most compelling and innovative RFST and IOT Technology. There Mission is to make 'Automaiton Simplified' where Chores are done hassle-free.",
    2: "Projexel is founded with the vision to create most compelling and innovative RFST and IOT Technology. There Mission is to make 'Automaiton Simplified' where Chores are done hassle-free.",
  };

  for (let i = 1; i < 3; i++) {
    pjNames[i].innerHTML = `<a href="#">${names[i]}</a>`;
    paragraphs[i].innerHTML = `<p>${paragraphsTxt[i]}</p>`;
  }
};

// toggle the carrer section
const viewMoreCarrer = () => {
  const view = document.querySelector(".cr-view-more div");
  const viewInactive = document.querySelector(".cr-view-inactive");
  const moreBox = document.querySelector(".cr-viewMore-box");
  const text = document.querySelector(".cr-btnTxt");

  const viewCall = () => {
    viewInactive.style.display = "none";
    text.innerHTML = `View More <i class="fas fa-chevron-circle-down"></i>`;
    moreBox.addEventListener("click", () => {
      view.classList.toggle("view-active");
      if (viewInactive.style.display === "none") {
        viewInactive.style.display = "inline";
        text.innerHTML = `View Less <i class="fas fa-chevron-circle-up"></i>`;
      } else {
        viewInactive.style.display = "none";
        text.innerHTML = `View More <i class="fas fa-chevron-circle-down"></i>`;
      }
    });
  };
  viewCall();
};
// const viewMoreProject = () => {
//   const view = document.querySelector(".view-more div");
//   const viewInactive = document.querySelector(".view-inactive");
//   const moreBox = document.querySelector(".viewMore-box");
//   const text = document.querySelector(".btnTxt");

//   const viewCall = () => {
//     viewInactive.style.display = "none";
//     text.innerHTML = `View More <i class="fas fa-chevron-circle-down"></i>`;
//     moreBox.addEventListener("click", () => {
//       view.classList.toggle("view-active");
//       if (viewInactive.style.display === "none") {
//         viewInactive.style.display = "inline";
//         text.innerHTML = `View Less <i class="fas fa-chevron-circle-up"></i>`;
//       } else {
//         viewInactive.style.display = "none";
//         text.innerHTML = `View More <i class="fas fa-chevron-circle-down"></i>`;
//       }
//     });
//   };
//   viewCall();
// };

//mobile nav function
const mobileNav = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-list");
  const navList = document.querySelectorAll(".nav-list li");

  burger.addEventListener("click", () => {
    // Toggle Nav
    nav.classList.toggle("nav-active");

    // Animation List
    navList.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `mobileNavFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });
  });
};

// scroll down with animation
const scrollDown = () => {
  const down = document.querySelector(".scrollToDown");
  const icon = document.querySelector(".downArrow");

  icon.innerHTML = `<i class="fas fa-angle-double-down"></i>`;
  down.addEventListener("click", () => {
    window.scrollTo(0, 1000);
  });
};
const app = () => {
  loadding();
  navGradient();
  logoSection();
  mailId();
  hm();
  ab();
  pj();
  viewMoreCarrer();
  // viewMoreProject();
  mobileNav();
  scrollDown();
};

app();
