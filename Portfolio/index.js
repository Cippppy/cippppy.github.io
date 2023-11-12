/** link functions */
function resumelnk() {
    window.open("ChristianCipollettaResume.pdf", "_blank");
}
function linkedinlnk() {
    window.open("https://www.linkedin.com/in/christian-cipolletta/", "_blank");
}

/** experience tabs */
function openTab(evt, tabName) {
    var i, tabcontent, tabbtn;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tabbtn = document.getElementsByClassName("tabbtn");
    for (i = 0; i < tabbtn.length; i++) {
        tabbtn[i].className = tabbtn[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }

/** project info */
'use strict';
const projects = [
    {
        id: 1,
        projname: "Smart Home Lockbox",
        skills: "Embedded C, Altium Designer, Github",
        link: "https://github.com/Cippppy/SmartHomeLockbox",
        img: "img/lockBox.png",
        description: "A tool that will allow people to lock their important items.",
        prompt: "OPEN ON GITHUB"
    },
    {
        id: 2,
        projname: "Move To Change",
        skills: "Java, HTML, CSS",
        link: "https://github.com/Cippppy/MoveToChange",
        img: "img/move_to_change.png",
        description: "Java application with GUI that allows activist organizations to connect members easier.",
        prompt: "OPEN ON GITHUB"
    },
    {
        id: 3,
        projname: "AM Radio Transmitter",
        skills: "Embedded C, Altium Designer, Github",
        link: "https://github.com/Cippppy/amRadioTransmitter",
        img: "img/amRadio2.png",
        description: "Radio transmitter designed by Christian Cipolletta & Thomas Rasa to broadcast in the openly available AM band.",
        prompt: "OPEN ON GITHUB"
    },
    {
        id: 4,
        projname: "HeartMoji",
        skills: "Arduino C++, Altium Designer, Github, HTML, Javascript",
        link: "https://github.com/Cippppy/HeartMoji",
        img: "img/heartmoji.png",
        description: "HeartMoji is a personal project I did for my 2nd anniversary of dating my girlfriend. It consists of a website, esp8266, and soldered PCB.",
        prompt: "OPEN ON GITHUB"
    }
]
const id = document.querySelector("#id");
const total = document.querySelector("#total");
const img = document.querySelector("#proj-img");
const projname = document.querySelector("#name");
const skills = document.querySelector("#skills");
const description = document.querySelector("#description");
const link = document.querySelector("#project-link");
const prompt = document.querySelector("#prompt");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let curItem = 0;    //starting item
window.addEventListener("click", showProject(curItem))
function showProject(project) {
    const item = projects[curItem];
    img.src = item.img;
    link.href = item.link;
    id.textContent = item.id;
    total.textContent = projects.length;
    projname.textContent = item.projname;
    skills.textContent = item.skills;
    description.textContent = item.description;
    prompt.textContent = item.prompt;
}

nextBtn.addEventListener("click", function() {
    curItem++;
    if(curItem > projects.length - 1) {
        curItem = 0;
    }
    showProject(curItem);
})
prevBtn.addEventListener("click", function() {
    curItem--;
    if(curItem < 0) {
        curItem = projects.length - 1;
    }
    showProject(curItem);
})

// "disable" buttons
function disableBtnStyle() {
    const disableStyles = `
    color: #fff;
    transition: none;
    cursor: default;`;
    prevBtn.style.cssText = disableStyles;
    nextBtn.style.cssText = disableStyles;
}
if(projects.length - 1 < 1) {
    disableBtnStyle();
}

/** socials */
function copy(elementId) {
    var el = document.getElementById(elementId);
    el.select();
    el.setSelectionRange(0, el.length);
    navigator.clipboard.writeText(el.value);
    alert("Copied to clipboard!");
}