const projects = [
    { title: 'Apple Vision', link: 'https://de-sign.netlify.app/', type: 'web' },
    { title: 'Hotel Odisej', link: 'https://odisej-hotel.netlify.app/', type: 'web' },
    { title: 'Lazarev Agency', link: 'https://lazarev-agen.netlify.app/', type: 'web' },
    { title: 'Sundown', link: 'https://sundown-port.netlify.app/', type: 'web' },
    { title: 'Paper Portfolio', link: 'https://paper-port.netlify.app/', type: 'web' },
    { title: 'Ephemeral Equilibrium.', link: 'https://equilibrium-port.netlify.app/', type: 'web' },
    { title: 'Works | Studio', link: 'https://works-studios.netlify.app/', type: 'web' },
    { title: 'FoodGo', link: './foodgo.html', type: 'app' },
    { title: 'CineFlix', link: './cineflix.html', type: 'app' },
    { title: 'Mega Mart', link: './mega.html', type: 'app' },
    { title: 'Aurpaisy', link: './aur.html', type: 'app' },
    { title: 'Rejouice', link: 'https://rejoice-port.netlify.app/', type: 'web' },
    { title: 'RayBin', link: 'https://raybin.netlify.app/', type: 'web' },
    { title: 'CyberFiction', link: 'https://cyberfiction-port.netlify.app/', type: 'web' },
    { title: 'Zelt', link: 'https://zelt-port.netlify.app/', type: 'web' },

    // New Product Projects
    { year: '2025', title: 'ATS Resume Checker', description: 'Make your resume stand out for automated systems.', link: 'https://ats-resume-tester.netlify.app/', type: 'product' },
];

let shownProjects = [];

function renderProjects(filter = 'web', showMore = false) {
    const projectsContainer = document.querySelector('.projects');
    const showMoreBtn = document.getElementById('showMoreBtn');
    const hideBtn = document.getElementById('hideBtn');

    if (!showMore) {
        projectsContainer.innerHTML = '';
        shownProjects = [];
    }

    const filtered = projects.filter(project => project.type === filter);

    filtered.forEach((project, index) => {
        if (!showMore && index < 4) {
            createProjectElement(project);
        }
        if (showMore && index >= 4) {
            createProjectElement(project);
            shownProjects.push(project);
        }
    });

    if (filtered.length > 4) {
        showMoreBtn.style.display = 'inline-block';
        hideBtn.style.display = 'none';
    } else {
        showMoreBtn.style.display = 'none';
        hideBtn.style.display = 'none';
    }
}

function createProjectElement(project) {
    const projectsContainer = document.querySelector('.projects');
    const projectElement = document.createElement('a');
    projectElement.href = project.link;
    projectElement.className = 'project';
    projectElement.target = '_blank';
    projectElement.rel = 'noopener noreferrer';

    projectElement.innerHTML = `
      <div class="project-content">
        <div class="project-info">
          <div class="project-header">
            <div>
              <div class="project-title">${project.title}</div>
            </div>
          </div>
        </div>
        <svg class="arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="opacity: 0; transition: opacity 0.3s;">
          <line x1="7" y1="17" x2="17" y2="7"></line>
          <polyline points="7 7 17 7 17 17"></polyline>
        </svg>
      </div>
    `;

    projectElement.addEventListener('mouseenter', () => {
        projectElement.querySelector('.arrow').style.opacity = '1';
    });

    projectElement.addEventListener('mouseleave', () => {
        projectElement.querySelector('.arrow').style.opacity = '0';
    });

    projectsContainer.appendChild(projectElement);
}

document.addEventListener('DOMContentLoaded', () => {
    renderProjects('web');

    const webBtn = document.getElementById('webBtn');
    const productBtn = document.getElementById('productBtn');
    const showMoreBtn = document.getElementById('showMoreBtn');
    const hideBtn = document.getElementById('hideBtn');

    webBtn.addEventListener('click', () => {
        renderProjects('web');
        webBtn.classList.add('active');
        appBtn.classList.remove('active');
        productBtn.classList.remove('active');
    });


    productBtn.addEventListener('click', () => {
        renderProjects('product');
        productBtn.classList.add('active');
        webBtn.classList.remove('active');
        appBtn.classList.remove('active');
    });

    showMoreBtn.addEventListener('click', () => {
        const activeBtn = document.querySelector('.filter-btn.active');
        const filter = activeBtn.id.replace('Btn', '');
        renderProjects(filter, true);
        showMoreBtn.style.display = 'none';
        hideBtn.style.display = 'inline-block';
    });

    hideBtn.addEventListener('click', () => {
        const projectsContainer = document.querySelector('.projects');
        shownProjects.forEach(project => {
            const projectElements = projectsContainer.querySelectorAll('.project');
            projectElements.forEach(element => {
                if (element.querySelector('.project-title').textContent === project.title) {
                    element.remove();
                }
            });
        });
        shownProjects = [];
        showMoreBtn.style.display = 'inline-block';
        hideBtn.style.display = 'none';
    });

    const follower = document.querySelector('.mouse-follower');

    window.addEventListener('mousemove', (e) => {
        follower.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    });
    let mouseX = 0, mouseY = 0;
    let currentX = 0, currentY = 0;

    document.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animateFollower() {
        currentX += (mouseX - currentX) * 0.2;
        currentY += (mouseY - currentY) * 0.2;
        follower.style.transform = `translate(${currentX}px, ${currentY}px)`;
        requestAnimationFrame(animateFollower);
    }

    animateFollower();


});
