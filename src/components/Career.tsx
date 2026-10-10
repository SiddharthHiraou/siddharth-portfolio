import "./styles/Career.css";

const roles = [
  {
    title: "Software Engineer / AI Software Engineer",
    company: "Avnet, NY",
    period: "Jan 2026 – Present",
    summary:
      "I build the AI features behind business workflows, from the first prompt to production.",
    points: [
      "Build document search that answers from the source material, using RAG with LangChain, OpenAI APIs and vector databases.",
      "Write the Python services and REST APIs that connect LLMs to the apps, databases and cloud services around them.",
      "Add NLP features that classify text and pull information out of documents, with Hugging Face, PyTorch and TensorFlow.",
      "Ship everything in Docker on Kubernetes and AWS, with Git-based CI/CD running the builds, tests and releases.",
    ],
  },
  {
    title: "Software Engineer",
    company: "Siemens, India",
    period: "Sep 2022 – Jul 2024",
    summary:
      "Backend engineering in Python: the services, APIs and databases behind enterprise applications.",
    points: [
      "Built modular Python microservices, plus shared modules for data validation, transformation and stream processing.",
      "Designed REST APIs with request validation and clear error handling for internal applications.",
      "Sped up relational databases by tuning SQL queries, stored procedures and views.",
      "Wrote pytest suites, fixed production defects, and automated build, test and deploy across dev, staging and production.",
    ],
  },
];

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          {roles.map((role) => (
            <div className="career-info-box" key={role.company}>
              <div className="career-info-in">
                <div className="career-role">
                  <h4>{role.title}</h4>
                  <h5>{role.company}</h5>
                </div>
                <h3>{role.period}</h3>
              </div>
              <div className="career-desc">
                <p className="career-lead">{role.summary}</p>
                <ul>
                  {role.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;
