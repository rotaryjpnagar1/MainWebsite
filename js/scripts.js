// scripts.js

// Function to fetch the projects from Strapi
function fetchProjects() {
  fetch('http://localhost:1337/projects')
      .then(response => response.json())
      .then(data => {
          console.log('Fetched Projects:', data);  // Logs the entire API response
          if (data && Array.isArray(data.data)) {  // Check if data.data is an array
              renderProjects(data.data);  // Pass the array to renderProjects function
          } else {
              console.error('Projects data is not in expected array format:', data);
          }
      })
      .catch(error => console.error('Error fetching projects:', error));
}

// Function to render the projects on the page
function renderProjects(projects) {
  if (!Array.isArray(projects)) {
      console.error('Projects is not an array:', projects);
      return;
  }

  // Clear existing projects before rendering new ones
  const projectsContainer = document.getElementById('projects-container');
  projectsContainer.innerHTML = '';

  // Loop through each project and render it
  projects.forEach(project => {
      const projectElement = document.createElement('div');
      projectElement.classList.add('project');
      projectElement.innerHTML = `
          <h3>${project.name}</h3>
          <p>${project.description}</p>
      `;
      projectsContainer.appendChild(projectElement);
  });
}

// Fetch projects when the page loads
document.addEventListener('DOMContentLoaded', fetchProjects);
