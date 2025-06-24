// ✅ Run when DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // 👉 Mobile menu toggle functionality
    const menu = document.getElementById("mobile-menu");
    const navLinks = document.querySelector(".nav-links");
  
    if (menu && navLinks) {
      menu.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        menu.classList.toggle("open");
      });
    }
  
    // 👉 Animate furniture images on load
    const images = document.querySelectorAll(".furniture-item img");
    images.forEach((img, index) => {
      img.style.animationDelay = `${index * 0.2}s`; // staggered delay
    });
  
    // 👉 Pause welcome banner scroll on hover (optional)
    const banner = document.getElementById("banner-text");
    if (banner) {
      banner.addEventListener("mouseover", () => {
        banner.style.animationPlayState = "paused";
      });
      banner.addEventListener("mouseout", () => {
        banner.style.animationPlayState = "running";
      });
    }
  });
S  