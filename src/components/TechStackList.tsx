import "./styles/TechStackList.css";

const groups = [
  {
    title: "Languages",
    items: ["Python", "SQL", "Java", "TypeScript"],
  },
  {
    title: "Generative & Agentic AI",
    items: [
      "LLMs",
      "OpenAI API",
      "Anthropic Claude",
      "Amazon Bedrock",
      "Azure OpenAI",
      "LangGraph",
      "LangChain",
      "LlamaIndex",
      "MCP",
      "Multi-Agent Systems",
      "Prompt Engineering",
    ],
  },
  {
    title: "RAG & Vector Search",
    items: [
      "Advanced RAG",
      "Hybrid Search",
      "Vector Embeddings",
      "Semantic Search",
      "Pinecone",
      "FAISS",
      "ChromaDB",
    ],
  },
  {
    title: "Backend & Data",
    items: [
      "FastAPI",
      "Flask",
      "REST APIs",
      "Microservices",
      "Event-Driven Architecture",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "PostgreSQL",
    ],
  },
  {
    title: "Cloud & DevOps",
    items: ["AWS", "Microsoft Azure", "Docker", "Kubernetes", "CI/CD"],
  },
];

// Lightweight stand-in for the 3D tech stack on phones and tablets
const TechStackList = () => {
  return (
    <div className="techlist-section section-container">
      <h2>
        My <span>techstack</span>
      </h2>
      <div className="techlist-groups">
        {groups.map((group) => (
          <div className="techlist-group" key={group.title}>
            <h4>{group.title}</h4>
            <div className="techlist-pills">
              {group.items.map((item) => (
                <span className="techlist-pill" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStackList;
