interface Alert {
    done: boolean;
    title: string;
    attachment_file: number | false;
    course: string | false;
    date_on: string;
    time_on: string;
}

const alerts = document.querySelector(".alerts-show") as HTMLElement | null;

function addAlerts({
    done,
    title,
    attachment_file,
    course,
    date_on,
    time_on,
}: Alert): void {
    if (!alerts) return;

    const div = document.createElement("div");
    div.classList.add("alerts-card", done ? "done" : "not-done");

    div.innerHTML = `
        ${done ? `
            <span class="done-icon">
                <img src="./icons/done-24.png" width="15" alt="">
            </span>` : `
            <span class="not-done-icon">
                <div>—</div>
            </span>`}
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
                </div>` : `
                <div style="opacity: 0;">
                    <img src="./icons/attach-32.png" width="13" alt="">
                    <div>0 files are attached</div>
                </div>`}
            <div>${date_on} at ${time_on}</div>
        </div>
    `;

    alerts.appendChild(div);
}

// Alerts data
const alertsData: Alert[] = [
    {
        done: false,
        title: "License for introduction to algebra has been assigned to your school",
        course: false,
        attachment_file: false,
        date_on: "15-Sep-2018",
        time_on: "07:21 pm"
    },
    {
        done: true,
        title: "Lesson 3 Practice Worksheet overdue for Army Santiago",
        course: "Advanced Mathematics",
        attachment_file: false,
        date_on: "15-Sep-2018",
        time_on: "05:21 pm"
    },
    {
        done: false,
        title: "23 new students created",
        course: false,
        attachment_file: false,
        date_on: "14-Sep-2018",
        time_on: "01:21 pm"
    },
    {
        done: false,
        title: "15 submissions ready for evaluation",
        course: "Basics of Algebra",
        attachment_file: false,
        date_on: "13-Sep-2018",
        time_on: "01:15 pm"
    },
    {
        done: false,
        title: "License for Basic Concepts in Geometry has been assigned to your...",
        course: false,
        attachment_file: false,
        date_on: "15-Sep-2018",
        time_on: "07:21 pm"
    },
    {
        done: false,
        title: "Lesson 3 Practice Worksheet overdue for Sam Diego",
        course: "Advanced Mathematics",
        attachment_file: false,
        date_on: "15-Sep-2018",
        time_on: "07:21 pm"
    }
];

// Render alerts
alertsData.forEach(addAlerts);

// Alert UI toggle
const alert_header = document.querySelector(".header-alerts") as HTMLElement | null;
const alert_wrapper = document.querySelector(".alerts-wrapper") as HTMLElement | null;
const alert_img = document.querySelector(".header-alert-img") as HTMLElement | null;
const alert_count = document.querySelector(".alert-count") as HTMLElement | null;

if (alert_header && alert_wrapper && alert_img && alert_count) {
    alert_header.addEventListener("mouseover", () => {
        alert_wrapper.classList.toggle("alerts-wrapper-hide");
        alert_wrapper.classList.toggle("alerts-wrapper-show");
        alert_img.style.filter = "brightness(0) invert(1)";
        alert_count.style.display = "none";
    });

    alert_header.addEventListener("mouseout", () => {
        alert_wrapper.classList.toggle("alerts-wrapper-hide");
        alert_wrapper.classList.toggle("alerts-wrapper-show");
        alert_img.style.filter = "none";
        alert_count.style.display = "block";
    });
}
