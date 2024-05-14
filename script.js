// Fetch all YAML data
Promise.all([
    fetchYAMLData('./profile/profile.yml'),
    fetchYAMLData('./profile/experience.yml'),
    fetchYAMLData('./profile/skills.yml'),
    fetchYAMLData('./profile/education.yml')
]).then(([profileData, experienceData, skillsData, educationData]) => {
    // Compile the Handlebars template
    const source = document.getElementById("resume-template").innerHTML;
    const template = Handlebars.compile(source);

    // Render the template with the data
    const context = {
        profile: profileData,
        experience: experienceData,
        skills: skillsData,
        education: educationData,
        template: "default"
    };
    const html = template(context);

    // Insert the rendered HTML into the DOM
    document.getElementById("resume").innerHTML = html;
});

