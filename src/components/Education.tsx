import "./styles/Education.css";

const education = [
  {
    degree: "Master of Science in Data Science",
    school: "University at Buffalo, The State University of New York",
    location: "Buffalo, NY",
    date: "Jan 2026",
  },
  {
    degree: "Bachelor of Engineering in Information Technology",
    school: "Savitribai Phule Pune University",
    location: "India",
    date: "Jun 2024",
  },
];

const Education = () => {
  return (
    <div className="education-section section-container">
      <h2>
        My <span>education</span>
      </h2>
      <div className="education-grid">
        {education.map((item, index) => (
          <div className="education-card" key={index}>
            <h3>{item.degree}</h3>
            <h4>{item.school}</h4>
            <p>
              {item.date} · {item.location}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
