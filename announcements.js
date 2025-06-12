
const announcements_list = document.querySelector(".announcements-show")

function addAnnouncement(
{   
    done,
    from,
    title,
    attachment_file,
    course,
    date_on,
    time_on,
}
) {
    const div = document.createElement("div");
    div.classList.add("announcements-card");

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
                        <div class="announcements-heading">
                            <div><span>PA: </span>${from}</div>
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
    announcements_list.appendChild(div);
}

const announcements_1 = {
    done: true,
    from: "Willson Kumor",
    title: "No classes will be held on 21st Nov",
    course: false,
    attachment_file: 2,
    date_on: "15-Sep-2018",
    time_on: "07:21 pm"
}
const announcements_2 = {
    done: false,
    from: "Samson White",
    title: "Guest lecture on geometry on 20th September",
    course: false,
    attachment_file: 2,
    date_on: "15-Sep-2018",
    time_on: "07:21 pm"
}
const announcements_3 = {
    done: true,
    from: "Willson Kumar",
    title: "Additional course materials available on request",
    course: "Mathematics 101",
    attachment_file: false,
    date_on: "15-Sep-2018",
    time_on: "07:21 pm"
}
const announcements_4 = {
    done: false,
    from: "Willson Kumar",
    title: "No classes will be held on 25th Dec",
    course: false,
    attachment_file: false,
    date_on: "15-Sep-2018",
    time_on: "07:21 pm"
}

addAnnouncement(announcements_1);
addAnnouncement(announcements_2);
addAnnouncement(announcements_3);
addAnnouncement(announcements_4);
addAnnouncement(announcements_3);

const announcements = document.querySelector(".header-alert")
const announcements_wrapper = document.querySelector(".announcements-wrapper")

announcements.addEventListener("mouseover",() => {
    announcements_wrapper.classList.toggle("announcements-wrapper-show")
})
announcements.addEventListener("mouseout",() => {
    announcements_wrapper.classList.toggle("announcements-wrapper-hide")
})
