import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

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
              title: "AutoETL",
              category: "Data Engineering",
              tools: "GPT-4, LangChain, Airflow, Pandas, Streamlit",
              description: [
                "Built a natural language-driven ETL pipeline generator.",
                "Integrated with Apache Airflow to auto-generate and schedule DAGs.",
                "Provided an interactive Streamlit interface for transformations."
              ]
            },
            {
              title: "Flock Vision",
              category: "Computer Vision",
              tools: "Python, OpenCV, CNN, AWS, PyTorch",
              description: [
                "Developed a real-time poultry monitoring system using AI/ML.",
                "Analyzed over 41,000 images for health trend identification.",
                "Implemented attendance monitoring system for farm workers."
              ]
            },
            {
              title: "Fault Prediction in Rotor Machines",
              category: "Deep Learning",
              tools: "2D-CNN, ResNet, TensorFlow/PyTorch",
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
