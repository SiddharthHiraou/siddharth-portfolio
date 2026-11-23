import { useRef } from "react";
import "./styles/Work.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { FiExternalLink } from "react-icons/fi";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const projects = [
  {
    title: "Smart Chicken Disease Detection",
    category: "Venky's Kitchen and Farm",
    period: "Aug 2024 – Nov 2024",
    tools: ["Python", "YOLOv8", "PyTorch", "OpenCV", "FastAPI", "MQTT", "Docker", "Next.js", "Supabase", "PostgreSQL"],
    link: "https://smart-poultry-platform.vercel.app/",
    image: "/projects/poultry-dashboard.jpg",
    accent: "#22c55e",
    description: [
      "Built a real-time poultry health platform that spots sick, dead, and abnormal birds from shed camera feeds for early outbreak detection.",
      "Designed a two-stage CV pipeline with YOLOv8 and a fine-tuned classifier for coccidiosis, Newcastle disease, and Salmonella, served via Dockerized FastAPI on edge hardware.",
      "Automated shed climate control over MQTT, driving fans, heaters, and misters from temperature, humidity, ammonia, and CO₂ sensors with hysteresis rules.",
      "Shipped a Next.js/Supabase dashboard with real-time alerts, health scoring, RBAC, and client-side face check-in that keeps worker images on-device.",
    ],
  },
  {
    title: "AutoETL",
    category: "Intisca Technologies",
    period: "Aug 2024 – Nov 2024",
    tools: ["TypeScript", "Next.js 15", "React Flow", "Python", "FastAPI", "Polars", "DuckDB", "Redis", "Supabase", "Zod", "Pydantic"],
    link: "https://autoetl-mu.vercel.app/",
    image: "/projects/autoetl-dashboard.jpg",
    accent: "#a855f7",
    description: [
      "Built a full-stack ETL platform where the LLM plans and the engine executes: plain-English prompts become schema-validated JSON DAGs, never code.",
      "Wrote a Python DAG engine on Polars and DuckDB with topological ordering, per-node retries, failure isolation, and data-quality checks for row counts, nulls, and schema drift.",
      "Streamed live run status with Redis Pub/Sub and SSE, and secured the app with Zod/Pydantic, sandboxed AST compilation, AES-256-GCM credentials, and Postgres RLS.",
      "Designed a provider-agnostic LLM layer with cost-aware routing, backed by 43 Python and 9 TypeScript tests.",
    ],
  },
];

const Work = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      // Horizontal pinned scroll on desktop only; smaller screens stack the cards vertically
      mm.add("(min-width: 1025px)", () => {
        const track = trackRef.current!;
        // Distance needed to bring the last card's right edge to the container's right edge
        const getDistance = () =>
          Math.max(0, track.scrollWidth - track.clientWidth);

        const tl = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: () => `+=${getDistance() * 1.1}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
            anticipatePin: 1,
            id: "work",
          },
        });

        // Short holds at both ends so the first and last cards can be read
        tl.to({}, { duration: 0.05 })
          .to(track, { x: () => -getDistance(), duration: 1 })
          .to(progressRef.current, { scaleX: 1, duration: 1 }, "<")
          .to({}, { duration: 0.05 });
      });

      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  return (
    <div className="work-section" id="work" ref={sectionRef}>
      <div className="work-container section-container">
        <div className="work-head">
          <h2>
            My <span>Work</span>
          </h2>
          <div className="work-progress" aria-hidden="true">
            <div className="work-progress-bar" ref={progressRef}></div>
          </div>
        </div>
        <div className="work-flex" ref={trackRef}>
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
                  width={1024}
                  height={1024}
                  loading="lazy"
                  decoding="async"
                />
                <div className="work-number">
                  0{index + 1} / 0{projects.length}
                </div>
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
                        data-cursor="disable"
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
                    <span className="work-pill" key={i}>
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
