// const subject_1 = {
//     img_src: "imageMask.png",
//     card_heading: "Acceleration",
//     fav_icon: true,
//     subject: "Physics",
//     grade: "Grade 7",
//     grade_upto: "+2",
//     units: 4,
//     lessons: 18,
//     topics: 24,
//     classes: ["Mr. Frank's Class B"],
//     total_students: 50,
//     date_from: "21-Jan-2020",
//     date_to: "21-Aug-2020",
//     preview: true,
//     manage_course: true,
//     grade_submission: true,
//     reports: true,
//     expired: false,
// }
// const subject_2 = {
//     img_src: "imageMask-1.png",
//     card_heading: "Displacement, Velocity and Speed",
//     fav_icon: true,
//     subject: "Physics 2",
//     grade: "Grade 6",
//     grade_upto: "+3",
//     units: 2,
//     lessons: 15,
//     topics: 20,
//     classes: [],
//     total_students: false,
//     date_from: false,
//     date_to: false,
//     preview: true,
//     manage_course: true,
//     grade_submission: true,
//     reports: true,
//     expired: false,
// }
// const subject_3 = {
//     img_src: "imageMask-3.png",
//     card_heading: "Introduction to Biology: Micro organisms and how they affec...",
//     fav_icon: true,
//     subject: "Biology",
//     grade: "Grade 4",
//     grade_upto: "+1",
//     units: 5,
//     lessons: 16,
//     topics: 22,
//     classes: ["All Classes"],
//     total_students: 300,
//     date_from: false,
//     date_to: false,
//     preview: true,
//     manage_course: false,
//     grade_submission: false,
//     reports: true,
//     expired: false,
// }
// const subject_4 = {
//     img_src: "imageMask-2.png",
//     card_heading: "Introduction to High School Mathematics",
//     fav_icon: false,
//     subject: "Mathematics",
//     grade: "Grade 8",
//     grade_upto: "+3",
//     units: false,
//     lessons: false,
//     topics: false,
//     classes: ["Mr. Frank's Class A"],
//     total_students: 44,
//     date_from: "14-Oct-2019",
//     date_to: "20-Oct-2020",
//     preview: true,
//     manage_course: true,
//     grade_submission: true,
//     reports: true,
//     expired: true,
// }

// const grid = document.querySelector(".grid");

// const cards = [subject_1, subject_2, subject_3, subject_4];

// cards.map(({ img_src,
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
//     expired, }) => {
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
// })