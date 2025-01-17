const data = {
  professionalExperiences: [
    {
      title: "Associate Full Stack Software Engineer",
      company: "Onterra Group",
      duration: "Sep 2023 - Present",
      length: "1 Year 4 Months",
    },
    {
      title: "Intern Web Developer",
      company: "Next Digital Innovations",
      duration: "Mar 2023 - Sep 2023",
      length: "1 Year 4 Months",
    },
    {
      title: "Graphic Designer",
      company: "Sandy Advertising Services, Padukka",
      duration: "Jun 2019 - Jan 2021",
      length: "1 Year 6 Months",
    },
  ],
  education: [
    {
      degree: "Bachelor of Technology in Software Technology",
      institution: "University of Vocational Technology, Ratmalana",
      status: "Ongoing, 2024",
    },
    {
      degree: "NVQ Level 5 ICT National Diploma",
      institution: "College of Technology, Ratnapura",
      year: "2021",
    },
    {
      degree: "NVQ Level 4 in Computer Graphic Design",
      institution: "NAITA, Katubedda",
      year: "2019",
    },
    {
      degree: "Web Development Course",
      institution: "SLIIT, Kollupitiya",
      duration: "6 Months, 2019",
    },
  ],
  skills: [
    "React.js",
    "Node.js / Express.js",
    "CodeIgniter (PHP)",
    "MySQL / MongoDB",
    "AWS / Azure (Maderate Server Configuration Skills)",
    "jQuery",
    "Tailwind / Bootstrap / Material UI",
  ],
  softSkills: [
    "Effective teamwork skills",
    "Problem-solving ability",
    "Time management skills",
    "Good communication skills",
  ],
  references: [
    {
      name: "Udara C. Hapuarachchi",
      position: "Visiting Lecturer, College of Technology, Ratnapura",
      email: "ugtdbt@gmail.com",
      phone: "071-112-6909",
    },
    {
      name: "Thanuja Tennakoon",
      position: "Director, Onterra Group",
      email: "udhaara@gmail.com",
      phone: "077-730-3945",
    },
  ],
  projects: [
    {
      title: "LionsClub Member Portal",
      company: "Onterra Group",
      url: "<a href='https://members.lions306c1.org/' target='_blank'>members.lions306c1.org</a>",
      // length: "7 Months",
    },
    {
      title: "Bosomd' Webisite (Currently under development)",
      company: "Bosomd'",
      url: "<a href='https://www.bosomd.com/' target='_blank'>www.bosomd.com</a>",
      // length: "7 Months",
    },
    {
      title: "Onterra Company Webisite",
      company: "Lions 306c1",
      url: "<a href='https://www.onterragroup.com/' target='_blank'>www.onterragroup.com</a>",
      // length: "7 Months",
    },
    {
      title: "Cambridge-Ventures Company Website",
      company: "Cambridge-Ventures (PVT) LTD.</br>",
      url: "<a href='https://cambridge-ventures.com/' target='_blank'>cambridge-ventures.com</a>",
      // length: "7 Months",
    },
    {
      title: "Restaurant Management System for DeatBurger, Galle",
      company: "Dear Burger</br>",
      url: "Private Website",
      // length: "7 Months",
    },
  ],
};

function populateData(id, items, formatter) {
  const list = document.getElementById(id);
  list.innerHTML = "";
  items.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = formatter(item);
    list.appendChild(li);
  });
}

// formatters
const formatExperience = (exp) =>
  `<b>${exp.title}</b> : ${exp.company} (${exp.duration}) </br> ${exp.length}`;
const formatEducation = (edu) =>
  `<b>${edu.degree}</b>:  ${edu.institution} </br> (${
    edu.status || edu.year || edu.duration
  })`;
const formatSkill = (skill) => skill;
const formatSoftSkill = (skill) => skill;
const formatReference = (ref) =>
  `<b>${ref.name}</b> - ${ref.position} <br /> Email: <a href="mailto: ${ref.email}"> ${ref.email} </a> | <a href="tel:${ref.phone}" > Phone: ${ref.phone}  </a>`;
const formatProject = (exp) =>
  `<b>${exp.title}</b> : ${exp.company} (${exp.url}) `;
populateData(
  "professional-experiences",
  data.professionalExperiences,
  formatExperience
);
populateData("education", data.education, formatEducation);
populateData("skills", data.skills, formatSkill);
populateData("soft-skills", data.softSkills, formatSoftSkill);
populateData("references", data.references, formatReference);
populateData("projects", data.projects, formatProject);
