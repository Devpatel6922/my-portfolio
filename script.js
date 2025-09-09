// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetID = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetID);
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - document.getElementById('navbar').offsetHeight,
                behavior: 'smooth'
            });
        }
    });
});

// Animate skill progress bars on scroll
function animateSkills() {
    const skillsSection = document.getElementById('skills');
    const progressBars = document.querySelectorAll('.progress');
    const triggerPoint = window.innerHeight + window.scrollY - 100;

    if (triggerPoint > skillsSection.offsetTop) {
        progressBars.forEach(bar => {
            const width = bar.style.width;
            bar.style.width = '0';
            setTimeout(() => {
                bar.style.width = width;
            }, 100);
        });
        window.removeEventListener('scroll', animateSkills);
    }
}

window.addEventListener('scroll', animateSkills);

// Contact form submission (basic)
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    this.reset();
});
