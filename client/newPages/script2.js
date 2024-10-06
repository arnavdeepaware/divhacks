// script.js
// const id = "6701c0699503cd48c6962dc6";
// Function to fetch roadmap data from the API by ID
async function fetchRoadmapData(id) {
    try {
        const response = await fetch(`https://localhost:5000/roadmaps/${id}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        updatePageContent(data);
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

// Function to update page content
function updatePageContent(data) {
    // Assuming the API returns an object with steps, todo, and resources
    const stepsContent = document.getElementById('steps-content');
    const todoContent = document.getElementById('todo-content');
    const resourcesContent = document.getElementById('resources-content');

    // Clear existing content
    stepsContent.innerHTML = '';
    todoContent.innerHTML = '';
    resourcesContent.innerHTML = '';

    // Populate Steps to Learn
    data.steps.forEach(step => {
        const stepElement = document.createElement('p');
        stepElement.innerText = step;
        stepsContent.appendChild(stepElement);
    });

    // Populate To-Do
    data.todo.forEach(todo => {
        const todoElement = document.createElement('p');
        todoElement.innerText = todo;
        todoContent.appendChild(todoElement);
    });

    // Populate Resources
    data.resources.forEach(resource => {
        const resourceElement = document.createElement('p');
        const linkElement = document.createElement('a');
        linkElement.href = resource.link;
        linkElement.innerText = resource.name;
        linkElement.target = "_blank"; // Open in new tab
        resourceElement.appendChild(linkElement);
        resourcesContent.appendChild(resourceElement);
    });
}

// You can dynamically update X and Y using JavaScript
const roadmapId = "6701c0699503cd48c6962dc6"; // Replace with the actual roadmap ID

// Update the title based on user input
document.getElementById('page-title').innerText = `Roadmap for ID: ${roadmapId}`;

// Fetch the roadmap data when the page loads
window.onload = () => {
    fetchRoadmapData(roadmapId);
};
