const slides = document.querySelectorAll('.slides img');
    const dots = document.querySelectorAll('.dot');

    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('hidden', i !== index);
            dots[i].classList.toggle('active', i === index);
        });
    }

    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            currentIndex = i;
            showSlide(currentIndex);
        });
    });

    showSlide(currentIndex);
    document.addEventListener('DOMContentLoaded', function() {
        document.querySelectorAll('nav ul li').forEach(function(item) {
            item.addEventListener('click', function(e) {
                const target = e.target.innerText.toLowerCase().replace(' ', '-'); // Convert to section ID format
                let section;
    
                if (target === 'home') {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                } else if (target === 'help') {
                    window.location.href = 'help.html'; // Redirect to new page
                } else {
                    section = document.querySelector(`#${target}-section`);
                    if (section) {
                        section.scrollIntoView({ behavior: 'smooth' });
                    }
                }
            });
        });
    });

    document.addEventListener('DOMContentLoaded', function() {
        document.querySelectorAll('nav ul li').forEach(function(item) {
            item.addEventListener('click', function(e) {
                const target = e.target.innerText.toLowerCase().replace(' ', '-');
                let section;
    
                if (target === 'home') {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                } else if (target === 'help') {
                    // Open the help modal
                    document.getElementById('helpModal').classList.remove('hidden');
                } else {
                    section = document.querySelector(`#${target}-section`);
                    if (section) {
                        section.scrollIntoView({ behavior: 'smooth' });
                    }
                }
            });
        });
    
        document.querySelector('.close-btn').addEventListener('click', function() {
            document.getElementById('helpModal').classList.add('hidden');
        });
    
        window.onclick = function(event) {
            if (event.target == document.getElementById('helpModal')) {
                document.getElementById('helpModal').classList.add('hidden');
            }
        };
    });
    
    