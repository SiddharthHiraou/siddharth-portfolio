import "./styles/Career.css";

const roles = [
  {
    title: "AI Forward Deployed Engineer",
    company: "DXC Technology, NY",
    period: "Jan 2026 – Present",
    summary:
      "I deploy production AI agents inside enterprise client environments, from discovery workshop to live system.",
    points: [
      "Architected OASIS AI agents with LangGraph, LangChain and MCP across 12+ enterprise IT personas, including SAP, Linux and cloud infrastructure.",
      "Built a vendor-agnostic LLM routing layer over Claude, Amazon Bedrock and Azure OpenAI, cutting PoC-to-production time by 60%.",
      "Shipped hybrid-search RAG over multi-terabyte knowledge bases with Pinecone and FAISS, lifting retrieval relevance by 35%.",
      "Run FastAPI services on Docker and Kubernetes at 99.9% uptime, serving 15,000+ daily agentic requests with p95 latency under 1.4s.",
    ],
  },
  {
    title: "Systems Designer",
    company: "Infinite Infolab, India",
    period: "Sep 2022 – Jul 2024",
    summary:
      "Backend and data engineering for client software integrations, from system design to cloud delivery.",
    points: [
      "Built Python, Java and Flask APIs and microservices connecting client ERP, CRM and web platforms, cutting data sync latency by 40%.",
      "Designed SQL, Pandas and NumPy ETL pipelines that cut manual reporting turnaround by 55%.",
      "Built NLP semantic search with LangChain, embeddings and FAISS/ChromaDB, improving knowledge retrieval accuracy by 38%.",
      "Led AWS and Azure migrations with Docker, Kubernetes and CI/CD, speeding releases by 45% at 99.8% availability.",
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
