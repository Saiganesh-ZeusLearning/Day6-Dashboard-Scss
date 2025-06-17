const hamburgerBtn = document.querySelector(".hamburger-btn") as HTMLElement | null;
const hamburgerList = document.querySelector(".hamburger-items") as HTMLElement | null;

function showMenu(): void {
    if (hamburgerList && hamburgerBtn) {
        hamburgerList.classList.remove("hamburger-items-hide");
        hamburgerBtn.style.filter = "brightness(0) invert(1)";
    }
}

function hideMenu(): void {
    if (hamburgerList && hamburgerBtn) {
        hamburgerList.classList.add("hamburger-items-hide");
        hamburgerBtn.style.filter = "none";
    }
}

if (hamburgerBtn && hamburgerList) {
    hamburgerBtn.addEventListener("mouseover", showMenu);
    hamburgerBtn.addEventListener("mouseout", hideMenu);
    hamburgerList.addEventListener("mouseover", showMenu);
    hamburgerList.addEventListener("mouseout", hideMenu);
}

function setupMenuToggle(
    triggerSelector: string,
    subItemsSelector: string,
    arrowSelector: string
): void {
    const trigger = document.querySelector(triggerSelector) as HTMLElement | null;
    const subItems = document.querySelectorAll(subItemsSelector) as NodeListOf<HTMLElement>;
    const arrow = document.querySelector(arrowSelector) as HTMLElement | null;

    if (!trigger || subItems.length === 0) return;

    trigger.addEventListener("click", () => {
        const isHidden = subItems[0].classList.contains("hamburger-sub-item-hide");

        subItems.forEach(item => {
            item.classList.toggle("hamburger-sub-item-hide", !isHidden);
            item.classList.toggle("hamburger-sub-item-show", isHidden);
        });

        if (arrow) {
            arrow.style.transform = isHidden ? "rotate(180deg)" : "rotate(0deg)";
        }
    });
}

// Initialize all toggle sections
setupMenuToggle(".hamburger-content", ".hamburger-sub-item-content", ".content-arrow");
setupMenuToggle(".hamburger-users", ".hamburger-sub-item-users", ".users-arrow");
setupMenuToggle(".hamburger-reports", ".hamburger-sub-item-reports", ".reports-arrow");
setupMenuToggle(".hamburger-admin", ".hamburger-sub-item-admin", ".admin-arrow");
