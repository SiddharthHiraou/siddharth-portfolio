import "./styles/TechStackList.css";

const groups = [
  {
    title: "Languages",
    items: ["Python", "SQL", "C++"],
  },
  {
    title: "AI & Machine Learning",
    items: [
      "Generative AI",
      "RAG",
      "LLMs (OpenAI APIs)",
      "LangChain",
      "Hugging Face Transformers",
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
      "Vector Databases",
      "Prompt Engineering",
    ],
  },
  {
    title: "Backend & Data Engineering",
    items: [
      "REST APIs",
      "FastAPI",
      "Flask",
      "Microservices",
      "ETL Pipelines",
      "Pandas",
      "NumPy",
      "Data Wrangling",
      "Asynchronous Processing",
    ],
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Pinecone", "Chroma", "FAISS"],
  },
  {
    title: "Cloud, DevOps & Tools",
    items: [
      "AWS",
      "Docker",
      "Kubernetes",
      "Git",
      "CI/CD Pipelines",
      "Pytest",
      "Linux",
      "Agile/Scrum",
    ],
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
