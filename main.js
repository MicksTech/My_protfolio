window.onload = () => {
    // Apply dark mode state when page loads
    const darkMode = localStorage.getItem("darkMode")
    if (darkMode === "enabled") {
        document.body.classList.add("dark-theme")
    }
}

// Select elements
const togglechange = document.getElementById("togglechange")
const hamburger = document.querySelector(".hamburger")
const navlist = document.querySelector(".navlist")

const loader = document.getElementById("loader_circle")
const aside = document.getElementById("aside")
const mainContainer = document.getElementById("main_container")

// Import AOS library
const AOS = window.AOS

setTimeout(() => {
    loader.style.opacity = "0"
    setTimeout(() => {
        loader.style.display = "none"
        aside.style.display = "flex"
        mainContainer.style.display = "flex"

        // Initialize AOS animations
        if (typeof AOS !== "undefined") {
            AOS.init({
                duration: 800,
                offset: 100,
                easing: "ease-in-out",
            })
        }
    }, 300)
}, 3000)

togglechange.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme")

    if (document.body.classList.contains("dark-theme")) {
        localStorage.setItem("darkMode", "enabled")
    } else {
        localStorage.setItem("darkMode", "disabled")
    }
})

hamburger.addEventListener("click", () => {
    navlist.parentElement.parentElement.classList.toggle("active")
})

// Close menu when clicking on a link
document.querySelectorAll(".navlist a").forEach((link) => {
    link.addEventListener("click", () => {
        navlist.parentElement.parentElement.classList.remove("active")
    })
})

const currentDay = document.getElementById("currentDay")
currentDay.textContent = new Date().getFullYear()

const contactForm = document.getElementById("contact-form")
if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault()

        const name = document.getElementById("name").value.trim()
        const email = document.getElementById("email").value.trim()
        const message = document.getElementById("message").value.trim()

        // Simple validation
        if (!name || !email || !message) {
            alert("Please fill in all fields")
            return
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address")
            return
        }

        // Simulate form submission
        const button = contactForm.querySelector("button")
        const originalText = button.textContent
        button.textContent = "Sending..."
        button.disabled = true

        setTimeout(() => {
            button.textContent = "Sent!"
            contactForm.reset()

            setTimeout(() => {
                button.textContent = originalText
                button.disabled = false
            }, 1500)
        }, 800)
    })
}

document.querySelectorAll(".project-image img, .image-card img").forEach((img) => {
    img.addEventListener("mouseenter", function () {
        this.style.transition = "transform 0.4s ease, box-shadow 0.4s ease"
    })
})

document.addEventListener("keydown", (e) => {
    // Close menu on Escape
    if (e.key === "Escape" && navlist.parentElement.parentElement.classList.contains("active")) {
        navlist.parentElement.parentElement.classList.remove("active")
    }
})
