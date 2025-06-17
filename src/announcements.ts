interface Announcement {
    done: boolean;
    from: string;
    title: string;
    attachment_file: number | false;
    course: string | false;
    date_on: string;
    time_on: string;
}

const announcements_list = document.querySelector(".announcements-show") as HTMLElement | null;

function addAnnouncement({
    done,
    from,
    title,
    attachment_file,
    course,
    date_on,
    time_on,
}: Announcement): void {
    if (!announcements_list) return;

    const div = document.createElement("div");
    div.classList.add("announcements-card");
    div.classList.add(done ? "done" : "not-done");

    div.innerHTML = `
        ${done ? `
            <span class="done-icon">
                <img src="./icons/done-24.png" width="15" alt="">
            </span>` : `
            <span class="not-done-icon">
                <div>—</div>
            </span>`}
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
                </div>` : `
                <div style="opacity: 0;">
                    <img src="./icons/attach-32.png" width="13" alt="">
                    <div>0 files are attached</div>
                </div>`}
            <div>${date_on} at ${time_on}</div>
        </div>
    `;

    announcements_list.appendChild(div);
}

// Announcement data
const announcementsData: Announcement[] = [
    {
        done: true,
        from: "Willson Kumor",
        title: "No classes will be held on 21st Nov",
        course: false,
        attachment_file: 2,
        date_on: "15-Sep-2018",
        time_on: "07:21 pm",
    },
    {
        done: false,
        from: "Samson White",
        title: "Guest lecture on geometry on 20th September",
        course: false,
        attachment_file: 2,
        date_on: "15-Sep-2018",
        time_on: "07:21 pm",
    },
    {
        done: true,
        from: "Willson Kumar",
        title: "Additional course materials available on request",
        course: "Mathematics 101",
        attachment_file: false,
        date_on: "15-Sep-2018",
        time_on: "07:21 pm",
    },
    {
        done: false,
        from: "Willson Kumar",
        title: "No classes will be held on 25th Dec",
        course: false,
        attachment_file: false,
        date_on: "15-Sep-2018",
        time_on: "07:21 pm",
    },
];

// Render announcements
announcementsData.forEach(addAnnouncement);
addAnnouncement(announcementsData[2]); // Duplicate render

// Announcement toggle UI
const announcements = document.querySelector(".header-announcements") as HTMLElement | null;
const announcements_wrapper = document.querySelector(".announcements-wrapper") as HTMLElement | null;
const announcements_img = document.querySelector(".header-announcements-img") as HTMLElement | null;
const announcements_count = document.querySelector(".announcements-count") as HTMLElement | null;

if (announcements && announcements_wrapper && announcements_img && announcements_count) {
    announcements.addEventListener("mouseover", () => {
        announcements_wrapper.classList.toggle("announcements-wrapper-show");
        announcements_wrapper.classList.toggle("announcements-wrapper-hide");
        announcements_img.style.filter = "brightness(0) invert(1)";
        announcements_count.style.display = "none";
    });

    announcements.addEventListener("mouseout", () => {
        announcements_wrapper.classList.toggle("announcements-wrapper-show");
        announcements_wrapper.classList.toggle("announcements-wrapper-hide");
        announcements_img.style.filter = "none";
        announcements_count.style.display = "block";
    });
}
