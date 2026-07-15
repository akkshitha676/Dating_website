async function fetchAndRenderProfiles() {
    try {
        const response = await fetch("students.json");
        const profilesData = await response.json();
        const profilesContainer = document.getElementById("profiles");

        profilesContainer.innerHTML = ""; // Clear existing profiles
        profilesData.forEach(profile => {
            const profileElement = document.createElement("div");
            profileElement.classList.add("profile");

            const img = document.createElement("img");
            img.src = profile.Photo;
            img.alt = profile.Name;

            const details = document.createElement("div");
            

            details.innerHTML = `
            <div class="details">
                <div><b>Name:</b> ${profile.Name}</div>
                <div><b>IITB Roll Number:</b> ${profile['IITB Roll Number']}</div>
                <div><b>Year of Study:</b> ${profile['Year of Study']}</div> 
                <div><b>Age:</b> ${profile.Age}</div>
                <div><b>Gender:</b> ${profile.Gender}</div>
                <div><b>Interests:</b> ${profile.Interests}</div>
                <div><b>Hobbies:</b> ${profile.Hobbies}</div>
                <div><b>Email:</b> <a href="mailto:${profile.Email} target= "_blank"> ${profile.Email}</a></div>
                </div>
            `;
            profileElement.appendChild(img);
            profileElement.appendChild(details);
            profilesContainer.appendChild(profileElement);
        });
    } catch (error) {
        console.error("Error fetching and rendering profiles:", error);
    }
}

// Call fetchAndRenderProfiles to initially fetch and render profiles
fetchAndRenderProfiles();
