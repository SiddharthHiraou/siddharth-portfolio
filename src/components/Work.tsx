import "./styles/Work.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { FiExternalLink } from "react-icons/fi";

gsap.registerPlugin(useGSAP);

const projects = [
  {
    title: "Smart Chicken Disease Detection",
    category: "Venky's Kitchen and Farm",
    period: "Aug 2024 – Nov 2024",
    tools: ["Python", "YOLOv8", "PyTorch", "OpenCV", "FastAPI", "MQTT", "Docker", "Next.js", "Supabase"],
    link: "https://smart-poultry-platform.vercel.app/",
    image: "/projects/poultry-dashboard.png",
    accent: "#22c55e",
    description: [
      "Built a real-time poultry health platform flagging sick, dead, and abnormal birds from camera feeds.",
      "Designed a two-stage CV pipeline with YOLOv8 and a fine-tuned classifier, served via Dockerized FastAPI.",
      "Automated shed climate control via an MQTT rules engine using live sensor readings and dashboard overrides.",
      "Shipped Next.js/Supabase dashboard with real-time alerting, health scoring, RBAC, and client-side face check-in.",
    ],
  },
  {
    title: "AutoETL",
    category: "Intisca Technologies",
    period: "Aug 2024 – Nov 2024",
    tools: ["TypeScript", "Next.js 15", "Python", "FastAPI", "Polars", "DuckDB", "Redis", "Supabase", "LLMs"],
    link: "https://autoetl-mu.vercel.app/",
    image: "/projects/autoetl-dashboard.png",
    accent: "#a855f7",
    description: [
      "Built a full-stack app converting plain English prompts into executable ETL pipelines.",
      "Wrote a custom Python DAG executor with topological ordering, retries, and live step status streaming.",
      "Hardened the AI layer with dual validation, a sandboxed AST compiler, encrypted credentials, and Postgres RLS.",
      "Designed a provider-agnostic LLM layer with cost-aware routing and comprehensive test coverage.",
    ],
  },
  {
    title: "Fault Prediction in Rotor Machines",
    category: "Deep Learning",
    period: "Research Project",
    tools: ["2D-CNN", "ResNet", "TensorFlow", "PyTorch", "Signal Processing"],
    link: "",
    image: "/projects/fault-prediction.png",
    accent: "#f59e0b",
    description: [
      "Built an end-to-end fault prediction pipeline for industrial machines.",
      "Improved fault-pattern separability by 60% after signal pre-processing.",
      "Achieved 98.4% accuracy and 98.1% F1-Score with 2D-ResNet models.",
    ],
  },
  {
    title: "Credit Risk Evaluation",
    category: "University at Buffalo",
    period: "Jun 2023 – Jan 2024",
    tools: ["Python", "Polars", "LightGBM", "XGBoost", "CatBoost", "Optuna", "SHAP", "Fairlearn", "MLflow", "FastAPI", "Next.js"],
    link: "https://creditlens-seven.vercel.app/",
    image: "/projects/credit-risk.png",
    accent: "#3b82f6",
    description: [
      "Built a credit decisioning platform scoring loan applications in 9 ms with calibrated default probability, 300-850 score, and ECOA adverse-action reasons.",
      "Compared WOE scorecard, LightGBM, XGBoost, and CatBoost on out-of-time splits; champion reached 0.583 Gini / 0.435 KS.",
      "Automated drift monitoring and retraining with Prefect and MLflow behind a five-check promotion gate.",
    ],
  },
  {
    title: "End-to-End ML Pipeline",
    category: "MLOps",
    period: "Personal Project",
    tools: ["FastAPI", "Streamlit", "MLflow", "SQLite", "Docker", "CI/CD"],
    link: "",
    image: "/projects/mlops-pipeline.png",
    accent: "#06b6d4",
    description: [
      "Built an end-to-end data intelligence pipeline.",
      "Implemented ML models with experiment tracking via MLflow.",
      "Served predictions through FastAPI and Streamlit dashboard.",
    ],
  },
];

const Work = () => {
  useGSAP(() => {
    const getTranslateAmount = () => {
      const boxes = document.querySelectorAll(".work-box");
      if (boxes.length === 0) return 0;

      // Measure the actual rendered width of all cards by looking at the first and last card
      const firstCard = boxes[0].getBoundingClientRect();
      const lastCard = boxes[boxes.length - 1].getBoundingClientRect();
      
      // Total pixel width from the start of the first card to the end of the last card
      const totalContentWidth = lastCard.right - firstCard.left;
      
      // We want to translate left just enough so the last card's right edge is on screen,
      // plus a bit of padding (e.g. 100px) so it doesn't touch the literal edge.
      const amountToTranslate = totalContentWidth - window.innerWidth + 100;
      
      return amountToTranslate > 0 ? amountToTranslate : 0;
    };

    let tween = gsap.to(".work-flex", {
      x: () => -getTranslateAmount(),
      ease: "none",
    });

    ScrollTrigger.create({
      trigger: ".work-section",
      start: "top top",
      // Pin the section for the distance we need to scroll, plus a 400px pause at the end
      end: () => `+=${getTranslateAmount() + 400}`,
      pin: true,
      animation: tween,
      scrub: 1,
      invalidateOnRefresh: true,
      id: "work",
      anticipatePin: 1,
    });

    return () => {
      tween.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div
              className="work-box"
              key={index}
              style={{ "--project-accent": project.accent } as React.CSSProperties}
            >
              {/* Hero Image */}
              <div className="work-hero">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                />
                <div className="work-number">0{index + 1}</div>
              </div>

              {/* Info Section */}
              <div className="work-info">
                <div className="work-title">
                  <h4>{project.title}</h4>
                  <div className="work-meta">
                    <span className="work-category">{project.category}</span>
                    <span className="work-period">{project.period}</span>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="work-demo-link"
                      >
                        <FiExternalLink />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Tech Pills */}
                <div className="work-tech-pills">
                  {project.tools.map((tool, i) => (
                    <span
                      className="work-pill"
                      key={i}
                      style={{ animationDelay: `${i * 0.05}s` }}
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <div className="work-description-card">
                  <ul>
                    {project.description.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
