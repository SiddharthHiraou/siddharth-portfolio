import "./styles/Work.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { FiExternalLink } from "react-icons/fi";

gsap.registerPlugin(useGSAP);

const Work = () => {
  useGSAP(() => {
  let translateX: number = 0;

  function setTranslateX() {
    const box = document.getElementsByClassName("work-box");
    const rectLeft = document
      .querySelector(".work-container")!
      .getBoundingClientRect().left;
    const rect = box[0].getBoundingClientRect();
    const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
    let padding: number =
      parseInt(window.getComputedStyle(box[0]).padding) / 2;
    translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
  }

  setTranslateX();

  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".work-section",
      start: "top top",
      end: `+=${translateX}`, // Use actual scroll width
      scrub: true,
      pin: true,
      id: "work",
    },
  });

  timeline.to(".work-flex", {
    x: -translateX,
    ease: "none",
  });

  // Clean up (optional, good practice)
  return () => {
    timeline.kill();
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
          {[
            {
              title: "Smart Chicken Disease Detection",
              category: "Venky’s Kitchen and Farm | Aug 2024 - Nov 2024",
              tools: "Python, YOLOv8, PyTorch, OpenCV, FastAPI, MQTT, Docker, Next.js, Supabase",
              link: "https://smart-poultry-platform.vercel.app/",
              description: [
                "Built a real-time poultry health platform flagging sick, dead, and abnormal birds from camera feeds.",
                "Designed a two-stage CV pipeline with YOLOv8 and a fine-tuned classifier, served via Dockerized FastAPI.",
                "Automated shed climate control via an MQTT rules engine using live sensor readings and dashboard overrides.",
                "Shipped Next.js/Supabase dashboard with real-time alerting, health scoring, RBAC, and client-side face check-in."
              ]
            },
            {
              title: "AutoETL",
              category: "Intisca Technologies | Aug 2024 - Nov 2024",
              tools: "TypeScript, Next.js 15, Python, FastAPI, Polars, DuckDB, Redis, Supabase, LLMs",
              link: "https://autoetl-mu.vercel.app/",
              description: [
                "Built a full-stack app converting plain English prompts into executable ETL pipelines.",
                "Wrote a custom Python DAG executor with topological ordering, retries, and live step status streaming.",
                "Hardened the AI layer with dual validation, a sandboxed AST compiler, encrypted credentials, and Postgres RLS.",
                "Designed a provider-agnostic LLM layer with cost-aware routing and comprehensive test coverage."
              ]
            },
            {
              title: "Fault Prediction in Rotor Machines",
              category: "Deep Learning",
              tools: "2D-CNN, ResNet, TensorFlow/PyTorch",
              link: "",
              description: [
                "Built an end-to-end fault prediction pipeline for industrial machines.",
                "Improved fault-pattern separability by 60% after signal pre-processing.",
                "Achieved 98.4% accuracy and 98.1% F1-Score with 2D-ResNet models."
              ]
            },
            {
              title: "Credit Risk Analytics",
              category: "Machine Learning",
              tools: "XGBoost, Flask, PyTorch, Scikit-learn",
              link: "",
              description: [
                "Developed predictive system to evaluate credit risk.",
                "Engineered ML models with extensive hyperparameter tuning.",
                "Deployed Flask API integrated into a PyTorch backend."
              ]
            },
            {
              title: "End-to-End ML Pipeline",
              category: "MLOps",
              tools: "FastAPI, Streamlit, MLflow, SQLite",
              link: "",
              description: [
                "Built an end-to-end data intelligence pipeline.",
                "Implemented ML models with experiment tracking via MLflow.",
                "Served predictions through FastAPI and Streamlit dashboard."
              ]
            },
          ].map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "var(--accentColor, #9d4edd)", textDecoration: "none", display: "inline-flex", alignItems: "center", fontSize: "14px", fontWeight: 500, marginTop: "10px", padding: "6px 12px", background: "rgba(255,255,255,0.05)", borderRadius: "20px", border: "1px solid rgba(255,255,255,0.1)", transition: "background 0.3s ease" }}
                        onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.1)")}
                        onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.05)")}
                      >
                        Live Demo <FiExternalLink style={{ marginLeft: "6px" }} />
                      </a>
                    )}
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <div className="work-description-card">
                <ul>
                  {project.description.map((point, i) => (
                    <li key={i}>{point}</li>
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

export default Work;
