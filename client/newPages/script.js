document.getElementById("addSkillBtn").addEventListener("click", async function () {
  console.log("Add Skill button clicked");

  // Get values from inputs
  const skill = document.getElementById("skillInput").value.trim();
  const deadline = document.getElementById("deadlineInput").value;
  const timeValue = document.getElementById("timeInput").value.trim();
  const timeUnit = document.getElementById("timeSelect").value;

  // Validate inputs
  if (!skill) {
    alert("Please enter a skill.");
    return;
  }
  if (!deadline) {
    alert("Please enter a deadline.");
    return;
  }
  if (!timeValue || isNaN(timeValue) || timeValue <= 0) {
    alert("Please enter a valid time commitment.");
    return;
  }

  // Create the frequency string based on the user's input
  const frequency = `${timeValue} ${timeUnit}`;

  // Prepare the data for the API
  const roadmapData = {
    skill: skill,
    timeBy: deadline,
    frequency: frequency,
  };

  try {
    // API call (use console logs for debugging)
    console.log("Sending data to API:", roadmapData);
    const response = await fetch(`http://localhost:5000/roadmaps/add/6701db3f149f40705f2ae57b`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(roadmapData),
    });

    if (!response.ok) {
      throw new Error("Error: " + response.statusText);
    }

    const result = await response.json();
    console.log("API Response:", result);
    alert("Roadmap added successfully!");

    // Clear input fields
    document.getElementById("skillInput").value = "";
    document.getElementById("deadlineInput").value = "";
    document.getElementById("timeInput").value = "";
    document.getElementById("timeSelect").value = "days";

    // Add new reminder widget
    addSkillReminder(skill, deadline);

    // Add skill to "Skills in Progress"
    skillsInProgress.push(skill);
    updateSkillsList();
  } catch (error) {
    console.error("API Request Error:", error);
    alert("There was a problem adding the roadmap.");
  }
});

// Add skill reminder to widget (max 5 reminders, prioritize by deadline)
function addSkillReminder(skill, deadline) {
  const reminderList = document.getElementById("reminderList");

  const reminderItem = document.createElement("div");
  reminderItem.classList.add("reminder-item");
  reminderItem.textContent = `Skill: ${skill}, Deadline: ${deadline}`;
  reminderItem.dataset.deadline = deadline;

  reminderList.appendChild(reminderItem);

  // Sort reminders by the closest deadline
  const reminders = Array.from(reminderList.children);
  reminders.sort((a, b) => new Date(a.dataset.deadline) - new Date(b.dataset.deadline));

  reminderList.innerHTML = "";
  reminders.forEach((item, index) => {
    if (index < 5) {
      // Only show top 5 reminders
      reminderList.appendChild(item);
    }
  });
}

// Update Skills Gained and Skills In Progress
const skillsInProgress = [];
const skillsGained = [];

function updateSkillsList() {
  const progressList = document.getElementById("skillsInProgress");
  const gainedList = document.getElementById("skillsGained");

  progressList.innerHTML = "";
  gainedList.innerHTML = "";

  skillsInProgress.forEach((skill) => {
    const listItem = document.createElement("li");
    listItem.textContent = skill;
    progressList.appendChild(listItem);
  });

  skillsGained.forEach((skill) => {
    const listItem = document.createElement("li");
    listItem.textContent = skill;
    gainedList.appendChild(listItem);
  });
}
