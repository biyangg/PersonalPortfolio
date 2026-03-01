document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('darkModeToggle');
    const nav = document.querySelector('.nav'); 
    const navLinks = document.querySelectorAll('.nav a'); 
    const nameTitleH1 = document.querySelector('.name-title h1'); 
    const nameTitleH2 = document.querySelector('.name-title h2'); 
    const sections = document.querySelectorAll('section, header'); 
    const aboutParagraph = document.querySelector('.about-me p');
    const projectCards = document.querySelectorAll('.project');
    const contactContainers = document.querySelectorAll('.contact-container, .contact-info, .contact-form');
    const educBg = document.querySelectorAll('.educ-bg, .educ-bg h4, .educ-bg .degree, .educ-bg .year');

    const hamburger = document.getElementById('hamburger');
    const navLinksContainer = document.getElementById('nav-links');

    if (toggle) {
        toggle.addEventListener('change', () => {
            if (toggle.checked) {
                
                if(nav) nav.classList.add('dark-mode');
                document.body.classList.add('dark-mode');

                document.body.style.backgroundColor = '#121212';
                document.body.style.color = '#e0e0e0';
                if (nav) nav.style.backgroundColor = '#1a1a1a';
                
                if (nameTitleH1) nameTitleH1.style.color = '#e0e0e0';
                if (nameTitleH2) nameTitleH2.style.color = '#cccccc';
                if (aboutParagraph) aboutParagraph.style.color = '#d0d0d0';
                sections.forEach(sec => sec.style.backgroundColor = '#121212');
                projectCards.forEach(card => card.style.backgroundColor = '#1a1a1a');
                projectCards.forEach(card => card.style.color = '#e0e0e0');
                contactContainers.forEach(cont => cont.style.backgroundColor = '#1a1a1a');
                contactContainers.forEach(cont => cont.style.color = '#e0e0e0');
                educBg.forEach(bg => bg.style.backgroundColor = '#1a1a1a');
                educBg.forEach(bg => bg.style.color = '#e0e0e0');
                document.querySelectorAll('.desc').forEach(p => p.style.color = '#ddd');
                document.querySelectorAll('#experience li').forEach(li => li.style.color = '#ddd');

                if (navLinksContainer) navLinksContainer.style.backgroundColor = '#1a1a1a';
                if (hamburger) hamburger.style.backgroundColor = '#1a1a1a';
                if (hamburger) hamburger.querySelectorAll('span').forEach(span => span.style.backgroundColor = '#e0e0e0');
            } else {
                
                if(nav) nav.classList.remove('dark-mode');
                document.body.classList.remove('dark-mode');

                document.body.style.backgroundColor = '#ffffff';
                document.body.style.color = '#222222';
                if (nav) nav.style.backgroundColor = '#ffffff';
                
                if (nameTitleH1) nameTitleH1.style.color = '#222222';
                if (nameTitleH2) nameTitleH2.style.color = '#555555';
                if (aboutParagraph) aboutParagraph.style.color = '#222222';
                sections.forEach(sec => sec.style.backgroundColor = '#ffffff');
                projectCards.forEach(card => card.style.backgroundColor = '#ffffff');
                projectCards.forEach(card => card.style.color = '#222222');
                contactContainers.forEach(cont => cont.style.backgroundColor = '#ffffff');
                contactContainers.forEach(cont => cont.style.color = '#222222');
                educBg.forEach(bg => bg.style.backgroundColor = '#ffffff');
                educBg.forEach(bg => bg.style.color = '#222222');
                document.querySelectorAll('.desc').forEach(p => p.style.color = '#666');
                document.querySelectorAll('#experience li').forEach(li => li.style.color = '#333');

                if (navLinksContainer) navLinksContainer.style.backgroundColor = '#ffffff';
                if (hamburger) hamburger.style.backgroundColor = 'transparent';
                if (hamburger) hamburger.querySelectorAll('span').forEach(span => span.style.backgroundColor = '#222222');
            }
        });
    }

    if (hamburger && navLinksContainer) {
        hamburger.addEventListener('click', () => {
            navLinksContainer.classList.toggle('active');
            hamburger.classList.toggle('open');
        });

        navLinksContainer.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinksContainer.classList.remove('active');
                hamburger.classList.remove('open');
            });
        });
    }
});
