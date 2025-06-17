const hamburgerBtn = document.querySelector(".hamburger-btn");
const hamburgerList = document.querySelector(".hamburger-items")

function showMenu(){
    hamburgerList.classList.remove("hamburger-items-hide");
    hamburgerBtn.style.filter = "brightness(0) invert(1)";
}

function hideMenu(){
    hamburgerList.classList.add("hamburger-items-hide")
    hamburgerBtn.style.filter = "none";
}
  
hamburgerBtn.addEventListener("mouseover", showMenu);
hamburgerBtn.addEventListener("mouseout", hideMenu);
hamburgerList.addEventListener("mouseover", showMenu);
hamburgerList.addEventListener("mouseout", hideMenu);


function setupMenuToggle(triggerSelector, subItemsSelector, arrowSelector) {
  const trigger = document.querySelector(triggerSelector);
  const subItems = document.querySelectorAll(subItemsSelector);
  const arrow = document.querySelector(arrowSelector);

  trigger.addEventListener("click", () => {
    const isHidden = subItems[0].classList.contains("hamburger-sub-item-hide");

    subItems.forEach(item => {
      item.classList.toggle("hamburger-sub-item-hide", !isHidden);
      item.classList.toggle("hamburger-sub-item-show", isHidden);
    });

    if (arrow) {
      arrow.style.transform = isHidden ? 'rotate(180deg)' : 'rotate(0deg)';
    }
  });
}

setupMenuToggle(
  ".hamburger-content",
  ".hamburger-sub-item-content",
  ".content-arrow",
);
setupMenuToggle(".hamburger-users", ".hamburger-sub-item-users", ".users-arrow");
setupMenuToggle(".hamburger-reports", ".hamburger-sub-item-reports", ".reports-arrow");
setupMenuToggle(".hamburger-admin", ".hamburger-sub-item-admin", ".admin-arrow");













// const ham_content = document.querySelector(".hamburger-content");
// const ham_content_subitems = document.querySelector(".hamburger-sub-item-content");
// const ham_content_arrow = document.querySelector(".content-arrow");

// ham_content.addEventListener("click", (e) => {
//         ham_content_subitems.classList.toggle("hamburger-sub-item-hide");
//         ham_content_subitems.classList.toggle("hamburger-sub-item-show");
// })

// const ham_users = document.querySelector(".hamburger-users");
// const ham_users_subitems = document.querySelectorAll(".hamburger-sub-item-users");
// const ham_users_arrow = document.querySelector(".users-arrow");


// ham_users.addEventListener("click", () => {
//     if (ham_users_subitems[0].classList.contains("hamburger-sub-item-hide")) {
//         ham_users_subitems.forEach(element => {
//             element.classList.remove("hamburger-sub-item-hide");
//             element.classList.add("hamburger-sub-item-show");
//         })
//         ham_users_arrow.style.transform = 'rotate(180deg)'
//     } else {
//         ham_users_subitems.forEach(element => {
//             element.classList.add("hamburger-sub-item-hide");
//             element.classList.remove("hamburger-sub-item-show");
//         })
//         ham_users_arrow.style.transform = 'rotate(0deg)'
//     }
// })


// const ham_reports = document.querySelector(".hamburger-reports");
// const ham_reports_subitems = document.querySelectorAll(".hamburger-sub-item-reports");
// const ham_reports_arrow = document.querySelector(".reports-arrow");


// ham_reports.addEventListener("click", () => {
//     if (ham_reports_subitems[0].classList.contains("hamburger-sub-item-hide")) {
//         ham_reports_subitems.forEach(element => {
//             element.classList.remove("hamburger-sub-item-hide");
//             element.classList.add("hamburger-sub-item-show");
//         })
//         ham_reports_arrow.style.transform = 'rotate(180deg)'
//     } else {
//         ham_reports_subitems.forEach(element => {
//             element.classList.add("hamburger-sub-item-hide");
//             element.classList.remove("hamburger-sub-item-show");
//         })
//         ham_reports_arrow.style.transform = 'rotate(0deg)'
//     }
// })


// const ham_admin = document.querySelector(".hamburger-admin");
// const ham_admin_subitems = document.querySelectorAll(".hamburger-sub-item-admin");
// const ham_admin_arrow = document.querySelector(".admin-arrow");


// ham_admin.addEventListener("click", () => {
//     if (ham_admin_subitems[0].classList.contains("hamburger-sub-item-hide")) {
//         ham_admin_subitems.forEach(element => {
//             element.classList.remove("hamburger-sub-item-hide");
//             element.classList.add("hamburger-sub-item-show");
//         })
//         ham_admin_arrow.style.transform = 'rotate(180deg)'
//     } else {
//         ham_admin_subitems.forEach(element => {
//             element.classList.add("hamburger-sub-item-hide");
//             element.classList.remove("hamburger-sub-item-show");
//         })
//         ham_admin_arrow.style.transform = 'rotate(0deg)'
//     }
// })

