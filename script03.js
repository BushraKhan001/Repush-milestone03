function generateResume() {
    var resumeData = {
        name: document.getElementById('name').value,
        contact: document.getElementById('contact').value,
        location: document.getElementById('location').value,
        education: {
            institution: document.getElementById('institution').value,
            year: document.getElementById('year').value,
        },
        skills: document.getElementById('skills').value,
        experience: {
            company: document.getElementById('company').value,
            role: document.getElementById('role').value,
            duration: document.getElementById('duration').value,
        },
    };
    var output = "\n      <h3>Personal Information</h3>\n      <p><strong>Name:</strong> ".concat(resumeData.name, "</p>\n      <p><strong>Contact:</strong> ").concat(resumeData.contact, "</p>\n      <p><strong>Location:</strong> ").concat(resumeData.location, "</p>\n     \n      \n      <h3>Education</h3>\n      <p><strong>Institution:</strong> ").concat(resumeData.education.institution, "</p>\n      <p><strong>Year:</strong> ").concat(resumeData.education.year, "</p>\n      \n      <h3>Skills</h3>\n      <p>").concat(resumeData.skills, "</p>\n      \n      <h3>Experience</h3>\n      <p><strong>Company:</strong> ").concat(resumeData.experience.company, "</p>\n      <p><strong>Role:</strong> ").concat(resumeData.experience.role, "</p>\n      <p><strong>Duration:</strong> ").concat(resumeData.experience.duration, "</p>\n    ");
    document.getElementById('resume-output').innerHTML = output;
}
