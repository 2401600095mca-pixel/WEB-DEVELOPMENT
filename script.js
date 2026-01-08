// Button click
document.getElementById("ctaBtn").addEventListener("click", () => {
  alert("🎉 Welcome! Your journey starts now!");
});

// GSAP animation
gsap.from(".title", { duration: 1, y: -50, opacity: 0 });
gsap.from(".subtitle", { duration: 1, y: 50, opacity: 0, delay: 0.3 });
gsap.from(".card", { duration: 1, opacity: 0, stagger: 0.2, x: -100, delay: 0.6 });