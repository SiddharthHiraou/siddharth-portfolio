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
                <h4>AI/ML Engineer Intern</h4>
                <h5>INTISCA TECHNOLOGIES</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Architected and developed a multi-agent LLM system using CrewAI.
              Built a FastAPI backend integrated with DynamoDB and S3 for agent context.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Science Intern</h4>
                <h5>Machine Monitoring Systems (MMS)</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Built an end-to-end fault prediction pipeline for industrial rotor machines.
              Deployed 2D-CNN/ResNet models as an early-warning predictive maintenance system.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Pipeline Engineering Intern</h4>
                <h5>INTISCA TECHNOLOGIES</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Designed and developed an ETL pipeline integrating multiple LLMs (OpenAI GPT-4.0).
              Implemented and orchestrated pipelines using Apache Airflow and Python.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Engineering Intern</h4>
                <h5>Hanker Analytics</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Built an end-to-end ETL pipeline and designed web scrapers.
              Developed a Data Quality Management model improving analysis report accuracy.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Analyst Intern</h4>
                <h5>Internlabs</h5>
              </div>
              <h3>2022-2023</h3>
            </div>
            <p>
              Consolidated diverse data into a unified structure (90,000+ real estate listings).
              Spearheaded an automated data pipeline saving 48 hours of work per week.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Research Assistant</h4>
                <h5>Isquare-IT</h5>
              </div>
              <h3>2022-2023</h3>
            </div>
            <p>
              Developed a real-time poultry monitoring system using AI/ML algorithms.
              Utilized Python, OpenCV, and CNN-based pattern recognition.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Intern (Python)</h4>
                <h5>ORGPEDIA</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Worked on debugging Python code for the company's document analysis model.
              Increased model accuracy by 22.61%.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
