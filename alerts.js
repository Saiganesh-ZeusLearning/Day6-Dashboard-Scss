const alerts = document.querySelector(".alerts-show")

const alerts_1 = {
    done: false,
    title: "License for introduction to algebra has been assigned to your school",
    course: false,
    attachment_file: false,
    date_on: "15-Sep-2018",
    time_on: "07:21 pm"
}
const alerts_2 = {
    done: true,
    title: "Lesson 3 Practice Worksheet overdue for Army Santiago",
    course: "Advanced Mathematics",
    attachment_file: false,
    date_on: "15-Sep-2018",
    time_on: "05:21 pm"
}
const alerts_3 = {
    done: false,
    title: "23 new students created",
    course: false,
    attachment_file: false,
    date_on: "14-Sep-2018",
    time_on: "01:21 pm"
}
const alerts_4 = {
    done: false,
    title: "15 submissions ready for evaluation",
    course: "Basics of Algebra",
    attachment_file: false,
    date_on: "13-Sep-2018",
    time_on: "01:15 pm"
}
const alerts_5 = {
    done: false,
    title: "License for Basic Concepts in Geometry has been assigned to your...",
    course: false,
    attachment_file: false,
    date_on: "15-Sep-2018",
    time_on: "07:21 pm"
}
const alerts_6 = {
    done: false,
    title: "Lesson 3 Practice Worksheet overdue for Sam Diego",
    course: "Advanced Mathematics",
    attachment_file: false,
    date_on: "15-Sep-2018",
    time_on: "07:21 pm"
}
addAlerts(alerts_1);
addAlerts(alerts_2);
addAlerts(alerts_3);
addAlerts(alerts_4);
addAlerts(alerts_5);
addAlerts(alerts_6);


function addAlerts(
    {   
    done,
    title,
    attachment_file,
    course,
    date_on,
    time_on,
}
) {
    const div = document.createElement("div");
    div.classList.add("alerts-card");

    done ?
        div.classList.add("done")
        : div.classList.add("not-done");

    div.innerHTML = `
                        ${done ?`
                            <span class="done-icon">
                            <img src="./icons/done-24.png" width="15" alt="">
                            </span>` 
                        :`
                            <span class="not-done-icon">
                            <div>—</div>
                            </span>
                        `}
                        <div class="alerts-heading">
                            <div>${title}</div>
                        </div>
                        ${course ? `
                            <div class="announcements-course">
                            Course: ${course}
                        </div>` : ``}
                        
                        <div class="announcements-attachments-date">
                            ${attachment_file ? `
                                <div>
                                <img src="./icons/attach-32.png" width="13" alt="">
                                <div>${attachment_file} files are attached</div>
                            </div>` 
                            : 
                                `
                                <div style="opacity: 0;">
                                    <img src="./icons/attach-32.png" width="13" alt="">
                                    <div>${attachment_file} files are attached</div>
                            </div>` 
                        }
                            <div>${date_on} at ${time_on}</div>
                        </div>`
    alerts.appendChild(div);
}

const alert_header = document.querySelector(".header-alerts");
const alert_wrapper = document.querySelector(".alerts-wrapper"); 
const alert_img = document.querySelector(".header-alert-img"); 
const alert_count = document.querySelector(".alert-count"); 

alert_header.addEventListener("mouseover", () => {
    alert_wrapper.classList.toggle("alerts-wrapper-hide");
    alert_wrapper.classList.toggle("alerts-wrapper-show");
    alert_img.style.filter = "brightness(0) invert(1)";
    alert_count.style.display = "none";
})
alert_header.addEventListener("mouseout", () => {
    alert_wrapper.classList.toggle("alerts-wrapper-hide");
    alert_wrapper.classList.toggle("alerts-wrapper-show");
    alert_img.style.filter = "none";
    alert_count.style.display = "block";
})