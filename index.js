

// const hamburger = document.querySelector(".hamburger-btn");
// const hamburgerList = document.querySelector(".hamburger-items")

// hamburger.addEventListener("click", function (e) {
//   console.log(hamburgerList.style.display === "none")
//   if(hamburgerList.style.display === "none"){
//       hamburgerList.style.display = "flex"
//     } else{
//         hamburgerList.style.display = "none"
//     }
//     console.log(hamburgerList.style.display === "none")
// });

// const items = document.querySelector(".header-hidden-items");

// function Select_Header_Item(item){
//     for(let i = 0; i < items.children.length; i++){
//         items.children[i].classList.remove("header-selected-item");
//     }
//     item.classList.add("header-selected-item")
// }

// const dashboard = document.querySelector(".dashboard");
// const content = document.querySelector(".content");
// const users = document.querySelector(".users");
// const reports = document.querySelector(".reports");
// const admin = document.querySelector(".admin");

// dashboard.addEventListener("click", function (e) {
//     Select_Header_Item(dashboard);
// })
// content.addEventListener("click", function (e) {
//     Select_Header_Item(content);
// })
// users.addEventListener("click", function (e) {
//     Select_Header_Item(users);
// })
// reports.addEventListener("click", function (e) {
//     Select_Header_Item(reports);
// })
// admin.addEventListener("click", function (e) {
//     Select_Header_Item(admin);
// })

// const fav_1 = document.querySelector("#fav-1");

// fav_1.addEventListener("click", () => {
//     if(fav_1.classList.contains("favourite-icon-unliked")){
//         fav_1.classList.remove("favourite-icon-unliked");
//         return;
//     }
//     fav_1.classList.add("favourite-icon-unliked")
// })

// const fav_2 = document.querySelector("#fav-2");

// fav_2.addEventListener("click", () => {
//     if(fav_2.classList.contains("favourite-icon-unliked")){
//         fav_2.classList.remove("favourite-icon-unliked");
//         return;
//     }
//     fav_2.classList.add("favourite-icon-unliked")
// })

// const fav_3 = document.querySelector("#fav-3");

// fav_3.addEventListener("click", () => {
//     if(fav_3.classList.contains("favourite-icon-unliked")){
//         fav_3.classList.remove("favourite-icon-unliked");
//         return;
//     }
//     fav_3.classList.add("favourite-icon-unliked")
// })

// const fav_4 = document.querySelector("#fav-4");

// fav_4.addEventListener("click", () => {
//     if(fav_4.classList.contains("favourite-icon-unliked")){
//         fav_4.classList.remove("favourite-icon-unliked");
//         return;
//     }
//     fav_4.classList.add("favourite-icon-unliked")
// })


const hamburgerBtn = document.querySelector(".hamburger-btn");
const hamburgerList = document.querySelector(".hamburger-items")

// hamburgerBtn.addEventListener("mouseover", function (e) {
//     hamburgerList.style.display = 'flex';
// });


// hamburgerBtn.addEventListener("mouseout", function (e) {
//     hamburgerList.style.display = 'none';
// });

// hamburgerList.addEventListener("mouseout", function (e) {
//     hamburgerList.style.display = 'none';
// });

// hamburgerList.addEventListener("mouseover", function (e) {
//     hamburgerList.style.display = 'flex';
// });

const ham_content = document.querySelector(".hamburger-content");

ham_content.addEventListener("click", () => {
    console.log("clicked")
})



// function AddSubject({
    //     img_src,
    //     card_heading,
    //     fav_icon,
//     subject,
//     grade,
//     grade_upto,
//     units,
//     lessons,
//     topics,
//     classes,
//     total_students,
//     date_from,
//     date_to,
//     preview,
//     manage_course,
//     grade_submission,
//     reports,
//     expired,
// }) {
//     const div = document.createElement("div");
//     div.classList.add("card")
//     div.innerHTML = `
//                     <div class="card-container">
//                         ${expired ? `<span class="expired">EXPIRED</span>` : ``}
//                         <div class="card-content">
//                             <div class="card-left-content">
//                                 <img width="125" src="images/${img_src}" alt="">
//                             </div>
//                             <div class="card-right-content">
//                                 <div class="card-heading">${card_heading}</div>
//                                 <span class="favourite-icon" id="fav-1">
//                                     <img src="icons/favourite.svg" ${!fav_icon ? `class="favourite-icon-unliked"` : ``} alt="">
//                                 </span>
//                                 <div class="subject-class">
//                                     <div>
//                                         ${subject}
//                                     </div>
//                                     <div class="seperator">
//                                     </div>
//                                     <div>
//                                         ${grade} <span class="grade-plus">${grade_upto}</span>
//                                     </div>
//                                 </div>
//                                 <div class="units-lessons-topics">
//                                     ${units ? `<div>
//                                         <span>${units}</span> Units
//                                     </div>` : ``}
                                    
//                                     ${lessons ? `<div>
//                                         <span>${lessons}</span> Lessons
//                                     </div>` : ``}
                                    
//                                     ${topics ? `<div>
//                                         <span>${topics}</span> Topics
//                                     </div>` : ``}
//                                 </div>
//                                 <div>
//                                     <select name="" id="" class="card-selected ${classes.length == 0 ? `disable-icons` : ``}">
//                                         ${classes.length == 0 ? `
//                                             <option value="">No Classes</option>`: `
//                                             <option value="">${classes[0]}</option>`}
//                                     </select>
//                                 </div>
//                                 <div class="students-dates">
//                                 ${!total_students ? `` : `<div>
//                                         ${total_students} Students
//                                     </div>
//                                     ${!date_from ? `` : `
//                                         <div class="seperator">
//                                     </div>
//                                     <div>
//                                         ${date_from} - ${date_to}
//                                     </div>`}`}
//                                 </div>
//                             </div>
//                         </div>
//                         <div class="card-icons">
//                             <img src="icons/preview.svg" ${!preview ? `class="disable-icons"` : ``} alt="">
//                             <img src="icons/manage course.svg" ${!manage_course ? `class="disable-icons"` : ``} alt="">
//                             <img src="icons/grade submissions.svg" ${!grade_submission ? `class="disable-icons"` : ``} alt="">
//                             <img src="icons/reports.svg" ${!reports ? `class="disable-icons"` : ``} alt="">
//                         </div>
//                     </div>
//                 `
//     grid.appendChild(div);
// }

// AddSubject(subject_1)
// AddSubject(subject_2)
// AddSubject(subject_3)
// AddSubject(subject_4)



const subject_1 = {
    img_src : "imageMask.png",
    card_heading : "Acceleration",
    fav_icon : true,
    subject: "Physics",
    grade: "Grade 7",
    grade_upto: "+2",
    units: 4,
    lessons: 18,
    topics: 24,
    classes: ["Mr. Frank's Class B"],
    total_students: 50,
    date_from: "21-Jan-2020",
    date_to: "21-Aug-2020",
    preview: true,
    manage_course: true,
    grade_submission: true,
    reports: true,
    expired: false,
}
const subject_2 = {
    img_src: "imageMask-1.png",
    card_heading: "Displacement, Velocity and Speed",
    fav_icon: true,
    subject: "Physics 2",
    grade: "Grade 6",
    grade_upto: "+3",
    units: 2,
    lessons: 15,
    topics: 20,
    classes: [],
    total_students: false,
    date_from: false,
    date_to: false,
    preview: true,
    manage_course: true,
    grade_submission: true,
    reports: true,
    expired: false,
}
const subject_3 = {
    img_src: "imageMask-3.png",
    card_heading: "Introduction to Biology: Micro organisms and how they affec...",
    fav_icon: true,
    subject: "Biology",
    grade: "Grade 4",
    grade_upto: "+1",
    units: 5,
    lessons: 16,
    topics: 22,
    classes: ["All Classes"],
    total_students: 300,
    date_from: false,
    date_to: false,
    preview: true,
    manage_course: false,
    grade_submission: false,
    reports: true,
    expired: false,
}
const subject_4 = {
    img_src: "imageMask-2.png",
    card_heading: "Introduction to High School Mathematics",
    fav_icon: false,
    subject: "Mathematics",
    grade: "Grade 8",
    grade_upto: "+3",
    units: false,
    lessons: false,
    topics: false,
    classes: ["Mr. Frank's Class A"],
    total_students: 44,
    date_from: "14-Oct-2019",
    date_to: "20-Oct-2020",
    preview: true,
    manage_course: true,
    grade_submission: true,
    reports: true,
    expired: true,
}

const grid = document.querySelector(".grid");

const cards = [subject_1, subject_2, subject_3, subject_4];

cards.map( ({    img_src,
    card_heading,
    fav_icon,
    subject,
    grade,
    grade_upto,
    units,
    lessons,
    topics,
    classes,
    total_students,
    date_from,
    date_to,
    preview,
    manage_course,
    grade_submission,
    reports,
    expired,}) => {
    const div = document.createElement("div");
    div.classList.add("card")
    div.innerHTML = `
                    <div class="card-container">
                        ${expired ? `<span class="expired">EXPIRED</span>` : ``}
                        <div class="card-content">
                            <div class="card-left-content">
                                <img width="125" src="images/${img_src}" alt="">
                            </div>
                            <div class="card-right-content">
                                <div class="card-heading">${card_heading}</div>
                                <span class="favourite-icon" id="fav-1">
                                    <img src="icons/favourite.svg" ${!fav_icon ? `class="favourite-icon-unliked"` : ``} alt="">
                                </span>
                                <div class="subject-class">
                                    <div>
                                        ${subject}
                                    </div>
                                    <div class="seperator">
                                    </div>
                                    <div>
                                        ${grade} <span class="grade-plus">${grade_upto}</span>
                                    </div>
                                </div>
                                <div class="units-lessons-topics">
                                    ${units ? `<div>
                                        <span>${units}</span> Units
                                    </div>` : ``}
                                    
                                    ${lessons ? `<div>
                                        <span>${lessons}</span> Lessons
                                    </div>` : ``}
                                    
                                    ${topics ? `<div>
                                        <span>${topics}</span> Topics
                                    </div>` : ``}
                                </div>
                                <div>
                                    <select name="" id="" class="card-selected ${classes.length == 0 ? `disable-icons` : ``}">
                                        ${classes.length == 0 ? `
                                            <option value="">No Classes</option>`: `
                                            <option value="">${classes[0]}</option>`}
                                    </select>
                                </div>
                                <div class="students-dates">
                                ${!total_students ? `` : `<div>
                                        ${total_students} Students
                                    </div>
                                    ${!date_from ? `` : `
                                        <div class="seperator">
                                    </div>
                                    <div>
                                        ${date_from} - ${date_to}
                                    </div>`}`}
                                </div>
                            </div>
                        </div>
                        <div class="card-icons">
                            <img src="icons/preview.svg" ${!preview ? `class="disable-icons"` : ``} alt="">
                            <img src="icons/manage course.svg" ${!manage_course ? `class="disable-icons"` : ``} alt="">
                            <img src="icons/grade submissions.svg" ${!grade_submission ? `class="disable-icons"` : ``} alt="">
                            <img src="icons/reports.svg" ${!reports ? `class="disable-icons"` : ``} alt="">
                        </div>
                    </div>
                `
    grid.appendChild(div);
})