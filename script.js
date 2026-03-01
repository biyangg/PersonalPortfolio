document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('darkModeToggle');
    const hamburger = document.getElementById('hamburger');
    const navLinksContainer = document.getElementById('nav-links');
    const nav = document.querySelector('.nav');
    const nameTitleH1 = document.querySelector('.name-title h1');
    const nameTitleH2 = document.querySelector('.name-title h2');
    const aboutParagraph = document.querySelector('.about-me p');
    const sections = document.querySelectorAll('section, header');
    const projectCards = document.querySelectorAll('.project');
    const contactContainers = document.querySelectorAll('.contact-info, .contact-form');

    if (toggle) {
        toggle.addEventListener('change', () => {
            const isDark = toggle.checked;
            
            document.body.classList.toggle('dark-mode', isDark);
            if (nav) nav.classList.toggle('dark-mode', isDark);

            applyThemeStyles(isDark);
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

function applyThemeStyles(isDark) {
    const styles = isDark ? {
        bodyBg: '#121212',
        bodyColor: '#e0e0e0',
        navBg: '#1a1a1a',
        h1Color: '#e0e0e0',
        h2Color: '#cccccc',
        pColor: '#d0d0d0',
        sectionBg: '#121212',
        cardBg: '#1a1a1a',
        cardColor: '#e0e0e0',
        educBg: '#1a1a1a',
        educColor: '#e0e0e0',
        listColor: '#ddd',
        navLinksBg: '#1a1a1a',
        hamburgerBg: '#1a1a1a',
        hamburgerSpan: '#e0e0e0'
    } : {
        bodyBg: '#ffffff',
        bodyColor: '#222222',
        navBg: '#ffffff',
        h1Color: '#222222',
        h2Color: '#555555',
        pColor: '#222222',
        sectionBg: '#ffffff',
        cardBg: '#ffffff',
        cardColor: '#222222',
        educBg: '#ffffff',
        educColor: '#222222',
        listColor: '#333',
        navLinksBg: '#ffffff',
        hamburgerBg: 'transparent',
        hamburgerSpan: '#222222'
    };

    document.body.style.backgroundColor = styles.bodyBg;
    document.body.style.color = styles.bodyColor;

    if (document.querySelector('.nav')) document.querySelector('.nav').style.backgroundColor = styles.navBg;
    if (document.querySelector('.name-title h1')) document.querySelector('.name-title h1').style.color = styles.h1Color;
    if (document.querySelector('.name-title h2')) document.querySelector('.name-title h2').style.color = styles.h2Color;
    if (document.querySelector('.about-me p')) document.querySelector('.about-me p').style.color = styles.pColor;

    document.querySelectorAll('section, header').forEach(sec => sec.style.backgroundColor = styles.sectionBg);
    document.querySelectorAll('.project').forEach(card => {
        card.style.backgroundColor = styles.cardBg;
        card.style.color = styles.cardColor;
    });
    document.querySelectorAll('.contact-info, .contact-form').forEach(cont => {
        cont.style.backgroundColor = styles.cardBg;
        cont.style.color = styles.cardColor;
    });
    document.querySelectorAll('.educ-bg *').forEach(el => {
        el.style.backgroundColor = styles.educBg;
        el.style.color = styles.educColor;
    });

    document.querySelectorAll('#experience li').forEach(el => el.style.color = styles.descColor || styles.listColor);
    
    const navLinksContainer = document.getElementById('nav-links');
    const hamburger = document.getElementById('hamburger');
    
    if (navLinksContainer) navLinksContainer.style.backgroundColor = styles.navLinksBg;
    if (hamburger) {
        hamburger.style.backgroundColor = styles.hamburgerBg;
        hamburger.querySelectorAll('span').forEach(span => span.style.backgroundColor = styles.hamburgerSpan);
    }
}

function openResume() {
    const modal = document.createElement('div');
    modal.className = 'resume-modal';
    modal.innerHTML = `
        <div class="resume-content">
            <span class="close-resume" onclick="closeResume()">&times;</span>
            <iframe class="resume-iframe" src="resume/Resume.pdf" title="Breanna Antero Resume"></iframe>
        </div>
    `;
    document.body.appendChild(modal);
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeResume() {
    const modal = document.querySelector('.resume-modal');
    if (modal) {
        modal.remove();
        document.body.style.overflow = 'auto';
    }
}

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('resume-modal')) {
        closeResume();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeResume();
    }
});
