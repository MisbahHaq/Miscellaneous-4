const projects = [
    { year: '2025', title: 'Apple Vision', description: 'Web Development, Design', link: 'https://de-sign.netlify.app/', type: 'web' },
    { year: '2025', title: 'Hotel Odisej', description: 'Design, Web Development', link: 'https://odisej-hotel.netlify.app/', type: 'web' },
    { year: '2025', title: 'Lazarev Agency', description: 'Web Development, Design', link: 'https://lazarev-agen.netlify.app/', type: 'web' },
    { year: '2025', title: 'Sundown', description: 'Web Development, Design', link: 'https://sundown-port.netlify.app/', type: 'web' },
    { year: '2025', title: 'Paper Portfolio', description: 'Design, Development', link: 'https://paper-port.netlify.app/', type: 'web' },
    { year: '2025', title: 'Ephemeral Equilibrium.', description: 'Design, Web Development', link: 'https://equilibrium-port.netlify.app/', type: 'web' },
    { year: '2025', title: 'Works | Studio', description: 'Design, Web Development', link: 'https://works-studios.netlify.app/', type: 'web' },
    { year: '2025', title: 'FoodGo', description: 'FoodGo is a mobile app designed to satisfy your cravings instantly.', link: './foodgo.html', type: 'app' },
    { year: '2025', title: 'CineFlix', description: 'CineFlix is designed to enhance your movie-going experience. Browse latest movies.', link: './cineflix.html', type: 'app' },
    { year: '2025', title: 'Mega Mart', description: 'Mega Mart is a grocery ordering app designed to simplify everyday shopping.', link: './mega.html', type: 'app' },
    { year: '2025', title: 'Aurpaisy', description: 'Aurpaisy is a mobile banking app designed to revolutionize the way you manage finances.', link: './aur.html', type: 'app' },
    { year: '2025', title: 'Rejouice', description: 'Web Development, Design', link: 'https://rejoice-port.netlify.app/', type: 'web' },
    { year: '2025', title: 'RayBin', description: 'Web Development, Design', link: 'https://raybin.netlify.app/', type: 'web' },
    { year: '2025', title: 'CyberFiction', description: 'Web Development', link: 'https://cyberfiction-port.netlify.app/', type: 'web' },
    { year: '2025', title: 'Zelt', description: 'Design, Development', link: 'https://zelt-port.netlify.app/', type: 'web' },

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
            <span class="project-year">${project.year}</span>
            <div>
              <div class="project-title">${project.title}</div>
              <div class="project-description">${project.description}</div>
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
});
