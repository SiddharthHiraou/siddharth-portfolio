import "./styles/Career.css";

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
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer / AI Software Engineer</h4>
                <h5>Avnet, NY</h5>
              </div>
              <h3>Jan 2026 – Present</h3>
            </div>
            <p>
              • Developed and maintained Python-based software applications that integrated LLMs, machine learning models, external APIs, and cloud services to support AI-enabled business workflows.<br />
              <br />
              • Built Generative AI applications using Python, LangChain, OpenAI APIs, and Retrieval-Augmented Generation (RAG), integrating vector databases to provide context-aware search and document-based responses.<br />
              <br />
              • Designed and developed Python services and REST APIs to connect AI capabilities with application components, databases, and cloud services, supporting scalable and maintainable production workflows.<br />
              <br />
              • Developed document-processing and NLP features using Hugging Face Transformers, PyTorch, and TensorFlow to support text classification, information extraction, and AI-powered application functionality.<br />
              <br />
              • Integrated SQL and NoSQL databases with Python applications to manage application data, processed documents, search data, and AI-generated results while supporting reliable data retrieval.<br />
              <br />
              • Containerized Python and AI applications using Docker and supported deployment through Kubernetes and AWS services, maintaining consistent development and production environments.<br />
              <br />
              • Implemented Git-based CI/CD workflows to automate application builds, testing, and deployments, improving release consistency across cloud environments.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer</h4>
                <h5>Siemens, India</h5>
              </div>
              <h3>Sep 2022 – Jul 2024</h3>
            </div>
            <p>
              • Designed and developed modular Python microservices to implement business logic and integrate application workflows with enterprise systems.<br />
              <br />
              • Built reusable Python modules for data validation, transformation, and stream processing, making common processing logic easier to maintain across services.<br />
              <br />
              • Developed RESTful APIs with request validation, error handling, and structured response processing to support communication between internal applications and services.<br />
              <br />
              • Improved relational database performance by developing and tuning SQL queries, stored procedures, and database views used by application workflows and reporting processes.<br />
              <br />
              • Created unit tests with pytest, investigated application issues, and fixed production defects to improve code reliability and reduce recurring software issues.<br />
              <br />
              • Worked with Product, Architecture, and QA teams to understand requirements, define technical approaches, and review code changes before release.<br />
              <br />
              • Automated build, testing, and deployment workflows using Git and CI/CD tools, supporting consistent releases across development, staging, and production environments.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>M.S. in Data Science</h4>
                <h5>University at Buffalo, SUNY</h5>
              </div>
              <h3>Jan 2026</h3>
            </div>
            <p>
              Master of Science in Data Science, University at Buffalo, The State University of New York, Buffalo, NY.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.E. in Information Technology</h4>
                <h5>Savitribai Phule Pune University</h5>
              </div>
              <h3>Jun 2024</h3>
            </div>
            <p>
              Bachelor of Engineering in Information Technology, Savitribai Phule Pune University, India.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
