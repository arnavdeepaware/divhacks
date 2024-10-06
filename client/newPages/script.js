document.getElementById('addSkillBtn').addEventListener('click', function () {
    // Get values from inputs
    const skill = document.getElementById('skillInput').value;
    const deadline = document.getElementById('deadlineInput').value;
    const timeValue = document.getElementById('timeInput').value;
    const timeUnit = document.getElementById('timeSelect').value;

    // Validate all fields
    if (!skill) {
        alert('Please enter a skill.');
        return;
    }
    if (!deadline) {
        alert('Please enter a deadline.');
        return;
    }
    if (!timeValue || isNaN(timeValue) || timeValue <= 0) {
        alert('Please enter a valid time commitment.');
        return;
    }

    // Create the new skill button
    const skillButton = document.createElement('button');
    skillButton.textContent = `${skill} - Deadline: ${deadline} - Time: ${timeValue} ${timeUnit}`;
    skillButton.classList.add('skill-button'); // Add a class for styling if needed

    // Add the new skill button to the skill buttons container
    document.getElementById('skillButtons').appendChild(skillButton);

    // Clear input fields
    document.getElementById('skillInput').value = '';
    document.getElementById('deadlineInput').value = '';
    document.getElementById('timeInput').value = '';
    document.getElementById('timeSelect').value = 'days';
});



