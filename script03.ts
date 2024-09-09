
  
  interface ResumeData {
    name: string;
    contact: string;
    location: string;
  
    education: {
      institution: string;
     
      year: string;
    };
    skills: string;
    experience: {
      company: string;
      role: string;
      duration: string;
    };
  }
  
  function generateResume(): void{
    const resumeData: ResumeData = {
      name: (document.getElementById('name') as HTMLInputElement).value,
      contact: (document.getElementById('contact') as HTMLInputElement).value,
      location: (document.getElementById('location') as HTMLInputElement).value,
 
      education: {
        institution: (document.getElementById('institution') as HTMLInputElement).value,
        year: (document.getElementById('year') as HTMLInputElement).value,
      },
      skills: (document.getElementById('skills') as HTMLInputElement).value,
      experience: {
        company: (document.getElementById('company') as HTMLInputElement).value,
        role: (document.getElementById('role') as HTMLInputElement).value,
        duration: (document.getElementById('duration') as HTMLInputElement).value,
      },
    };
  
    const output = `
      <h3>Personal Information</h3>
      <p><strong>Name:</strong> ${resumeData.name}</p>
      <p><strong>Contact:</strong> ${resumeData.contact}</p>
      <p><strong>Location:</strong> ${resumeData.location}</p>
     
      
      <h3>Education</h3>
      <p><strong>Institution:</strong> ${resumeData.education.institution}</p>
      <p><strong>Year:</strong> ${resumeData.education.year}</p>
      
      
      <h3>Skills</h3>
      <p>${resumeData.skills}</p>
      
      <h3>Experience</h3>
      <p><strong>Company:</strong> ${resumeData.experience.company}</p>
      <p><strong>Role:</strong> ${resumeData.experience.role}</p>
      <p><strong>Duration:</strong> ${resumeData.experience.duration}</p>
    `;
  
    document.getElementById('resume-output')!.innerHTML = output;
  }
  
  
