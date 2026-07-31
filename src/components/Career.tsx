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
                <h4>AI/ML Engineer</h4>
                <h5>Avnet, NY</h5>
              </div>
              <h3>Jan 2026 – Present</h3>
            </div>
            <p>
              • Architect scalable machine learning pipelines using Python, PyTorch, MLflow, and Docker, reducing model deployment time by 34% while improving release reliability across production environments.<br />
              <br />
              • Develop Retrieval-Augmented Generation (RAG) applications with LangChain, vector databases, and LLMs, increasing response accuracy by 28% for enterprise knowledge search.<br />
              <br />
              • Optimize deep learning models through hyperparameter tuning, feature engineering, and distributed training, improving prediction performance by 19% while lowering inference latency by 24%.<br />
              <br />
              • Implement automated MLOps workflows leveraging Git, CI/CD, Kubernetes, and AWS services, decreasing model release cycles by 31% and minimizing deployment errors.<br />
              <br />
              • Integrate NLP solutions using Hugging Face Transformers and TensorFlow for document intelligence, boosting entity extraction precision by 23% and reducing manual review efforts.<br />
              <br />
              • Collaborate with cross-functional stakeholders to deliver AI-driven analytics using SQL, Python, and cloud data platforms, accelerating business decision-making by 27% through production-ready ML solutions.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>ML Engineer</h4>
                <h5>Siemens, India</h5>
              </div>
              <h3>Sep 2022 – Jul 2024</h3>
            </div>
            <p>
              • Designed, supervised, and unsupervised machine learning models using Scikit-learn and Python, increasing predictive accuracy by 21% across manufacturing analytics initiatives.<br />
              <br />
              • Engineered robust data preprocessing and feature engineering pipelines with Pandas and NumPy, improving training data quality by 26% and reducing preparation time by 30%.<br />
              <br />
              • Evaluated multiple classification and regression algorithms through cross-validation and performance benchmarking, improving model selection efficiency by 18%.<br />
              <br />
              • Automated model training and validation workflows using Python scripting and SQL, decreasing repetitive manual effort by 32% while ensuring consistent experiment tracking.<br />
              <br />
              • Enhanced neural network performance with TensorFlow optimization techniques, reducing training duration by 22% and improving inference consistency across production datasets.<br />
              <br />
              • Validated model outputs through statistical analysis, error monitoring, and performance reporting, increasing prediction reliability by 17% and supporting data-driven engineering decisions.<br />
              <br />
              • Delivered machine learning solutions alongside software and business teams, enabling analytics adoption that improved operational process efficiency by 20% across targeted business functions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
