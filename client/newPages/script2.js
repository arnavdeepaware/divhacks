// script.js
async function fetchRoadmapData(id) {
    try {
        const response = await fetch(`http://localhost:5000/roadmaps/${id}`);
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
    const stepsContent = document.getElementById('steps-content');
    const todoContent = document.getElementById('todo-content');
    const resourcesContent = document.getElementById('resources-content');

    // Update the title based on the skill and time from the API response
    document.getElementById('page-title').innerText = `Learn ${data.skill} by ${new Date(data.timeBy).toLocaleDateString()}`;

    // Clear existing content
    stepsContent.innerHTML = '';
    todoContent.innerHTML = '';
    resourcesContent.innerHTML = '';

    // Assuming the API returns an object with instructions
    data.instructions.forEach(instruction => {
        // Populate Steps to Learn
        instruction.step.forEach(step => {
            const stepElement = document.createElement('p');
            stepElement.innerText = step;
            stepsContent.appendChild(stepElement);
        });

        // Populate To-Do
        instruction.todo.forEach(todo => {
            const todoElement = document.createElement('p');
            todoElement.innerText = todo;
            todoContent.appendChild(todoElement);
        });

        // Populate Resources
        instruction.resources.forEach(resource => {
            const resourceElement = document.createElement('p');
            const linkElement = document.createElement('a');
            linkElement.href = resource; // Use the URL directly from the resources array
            linkElement.innerText = resource; // Set the link text as the resource URL
            linkElement.target = "_blank"; // Open in new tab
            resourceElement.appendChild(linkElement);
            resourcesContent.appendChild(resourceElement);
        });
    });
}

// Call the fetch function when the page loads
window.onload = () => {
    const roadmapId = "6701ca88f4e0a52078317b63"; // Use the actual roadmap ID here
    fetchRoadmapData(roadmapId);
};
