import type { PathName } from "./paths";

export type Project = {
  title: string;
  slug: string;
  paths: Exclude<PathName, "All">[];
  summary: string;
  description: string;
  stack: string[];
  videoUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
  appUrl?: string;
  featured: boolean;
  result: string;
  decisions: string[];
};

export const projects: Project[] = [
  {
    title: "Rumore — Campus Social Platform",
    slug: "rumore-campus-social-platform",
    paths: ["Founder Projects", "Product & Systems", "Security & Risk"],
    summary: "A mobile-first campus social platform with anonymous posting, campus-based access control, and privacy-focused identity separation.",
    description: "Built a campus social platform focused on privacy-sensitive student interaction, authentication, token handling, session control, protected API access, moderation workflows, and campus-specific communities.",
    stack: ["FastAPI", "Supabase", "PostgreSQL", "Redis", "React Native/Expo", "Google OAuth"],
    // TODO: Replace this placeholder with the real Rumore App Store, Play Store, or official landing page link once available.
    appUrl: "#",
    featured: true,
    result: "Turned a raw campus product idea into a structured backend, auth, and launch architecture.",
    decisions: ["Separated identity-sensitive flows", "Used Redis for fast temporary state", "Designed campus-based access control"]
  },
  {
    title: "Marketing Assistant AI Agent",
    slug: "marketing-assistant-ai-agent",
    paths: ["AI & Machine Learning", "Analytics & BI", "Product & Systems"],
    summary: "A Python-based AI marketing assistant that lets users query campaign data, business documents, and performance metrics.",
    description: "Built an AI assistant workflow for data aggregation, validation, insight generation, report building, and feedback refinement to help marketers make faster but human-controlled decisions.",
    stack: ["Python", "AI Agent", "Data Analysis", "Report Generation", "Decision Support"],
    videoUrl: "https://youtube.com/",
    githubUrl: "https://github.com/",
    featured: true,
    result: "Converted scattered marketing information into a queryable decision-support workflow.",
    decisions: ["Kept humans in the approval loop", "Separated retrieval from insight generation", "Documented hallucination and data privacy risks"]
  },
  {
    title: "Medicaid Pharmaceutical Spending Analysis",
    slug: "medicaid-pharmaceutical-spending-analysis",
    paths: ["Analytics & BI", "Business Strategy"],
    summary: "A Tableau-driven analysis of Medicaid drug reimbursement, high-cost drugs, population-adjusted spending, and state-level cost variation.",
    description: "Built dashboards using calculated per-capita reimbursement fields to compare drug costs, Medicaid vs. non-Medicaid spending, and geographic cost concentration.",
    stack: ["Tableau", "Excel", "Data Analysis", "Healthcare Analytics", "Data Visualization"],
    videoUrl: "https://youtube.com/",
    githubUrl: "https://github.com/",
    featured: true,
    result: "Identified high-cost specialty drugs and state-level cost concentration as stronger pressure points than generic volume.",
    decisions: ["Used per-capita reimbursement to normalize comparisons", "Separated Medicaid and non-Medicaid views", "Focused recommendations on rebate and prior authorization strategy"]
  },
  {
    title: "Sentiment Analysis Using GCP and PySpark",
    slug: "sentiment-analysis-gcp-pyspark",
    paths: ["AI & Machine Learning", "Analytics & BI"],
    summary: "A PySpark NLP pipeline on Google Cloud for Amazon review sentiment classification.",
    description: "Built a cloud-based NLP pipeline using tokenization, stopword removal, Word2Vec vectorization, Random Forest classification, and F1-score evaluation.",
    stack: ["PySpark", "Google Cloud Platform", "Word2Vec", "Random Forest", "NLP", "Spark ML"],
    videoUrl: "https://youtube.com/",
    githubUrl: "https://github.com/",
    featured: true,
    result: "Created a reusable cloud ML workflow for review sentiment classification.",
    decisions: ["Compared preprocessing choices", "Used Word2Vec for text vectorization", "Evaluated with F1 score"]
  },
  {
    title: "Heart Disease ML Project",
    slug: "heart-disease-ml-project",
    paths: ["AI & Machine Learning", "Analytics & BI"],
    summary: "A machine learning analysis identifying clinical and demographic factors influencing heart disease risk.",
    description: "Cleaned patient data, trained Logistic Regression and Random Forest models, and evaluated results using accuracy, recall, AUC, and classification metrics.",
    stack: ["Python", "Pandas", "Scikit-learn", "Logistic Regression", "Random Forest", "GridSearchCV"],
    githubUrl: "https://github.com/",
    featured: false,
    result: "Reached strong recall and AUC while identifying important clinical predictors.",
    decisions: ["Used train/test split", "Tuned models with GridSearchCV", "Prioritized recall because missed risk can be costly"]
  },
  {
    title: "Snowflake Schema Design for Ticket Sales Data Warehouse",
    slug: "snowflake-schema-ticket-sales-data-warehouse",
    paths: ["Analytics & BI", "Product & Systems"],
    summary: "A dimensional modeling project converting a transaction-grained star schema into a normalized snowflake schema.",
    description: "Designed SQL CREATE TABLE statements with surrogate keys, primary keys, foreign keys, and hierarchical dimension relationships for ticket sales analysis.",
    stack: ["SQL", "Data Warehousing", "Dimensional Modeling", "Star Schema", "Snowflake Schema"],
    githubUrl: "https://github.com/",
    featured: false,
    result: "Modeled clean analytical relationships for reporting over ticket sales data.",
    decisions: ["Normalized dimensional hierarchies", "Preserved fact-to-dimension grain", "Used surrogate keys for analytics stability"]
  },
  {
    title: "Lending Bias Analysis Using HMDA Data",
    slug: "lending-bias-analysis-hmda-data",
    paths: ["Analytics & BI", "Business Strategy"],
    summary: "An Excel-based analysis of mortgage applications to identify potential lending bias patterns.",
    description: "Analyzed 12,550 loan applications and identified approval-rate differences across race and ethnicity groups.",
    stack: ["Excel", "PivotTables", "A/B Testing", "Data Analysis", "Bias Analysis"],
    githubUrl: "https://github.com/",
    featured: false,
    result: "Surfaced measurable approval-rate differences that could support deeper fairness investigation.",
    decisions: ["Used PivotTables for fast slicing", "Compared approval rates across groups", "Framed results as potential bias patterns, not final legal conclusions"]
  },
  {
    title: "Data Center Location Selection",
    slug: "data-center-location-selection",
    paths: ["Analytics & BI", "Business Strategy"],
    summary: "A Tableau dashboard project analyzing regional energy surplus and renewable energy share for data center siting.",
    description: "Built interactive dashboards comparing energy surplus, renewable share, supply, and demand across regions.",
    stack: ["Tableau", "Energy Analytics", "Data Visualization", "Location Analysis"],
    githubUrl: "https://github.com/",
    featured: false,
    result: "Identified region and time-based patterns useful for renewable-aware data center siting.",
    decisions: ["Used dual-axis supply/demand views", "Compared renewable share by region", "Connected technical infrastructure to business location strategy"]
  },
  {
    title: "Student Event Management System",
    slug: "student-event-management-system",
    paths: ["Product & Systems", "Security & Risk"],
    summary: "A system design project for centralizing campus event discovery, approvals, RSVP tracking, and attendance logging.",
    description: "Designed role-based workflows for students, organizers, and admins, including event creation, approval, RSVP enforcement, check-in tracking, reporting, and access control.",
    stack: ["SDLC", "Requirements Analysis", "Use Cases", "DFDs", "ERD", "Wireframes", "Access Control"],
    githubUrl: "https://github.com/",
    featured: false,
    result: "Translated a campus operations problem into structured requirements and system design artifacts.",
    decisions: ["Mapped role-specific permissions", "Documented functional and non-functional requirements", "Designed workflows before implementation"]
  },
  {
    title: "Airbnb Strategic Analysis",
    slug: "airbnb-strategic-analysis",
    paths: ["Business Strategy", "Security & Risk"],
    summary: "A strategic analysis of Airbnb’s trust, safety, fraud, and quality-control risks.",
    description: "Analyzed Airbnb’s brand fragility and recommended stronger host/guest verification, AI-driven monitoring, and phased trust/safety improvements.",
    stack: ["PESTEL", "Porter's Five Forces", "VRIO", "SWOT", "Trust & Safety", "Strategy"],
    githubUrl: "https://github.com/",
    featured: false,
    result: "Produced a phased strategic recommendation around trust, safety, fraud, and substitution pressure.",
    decisions: ["Connected brand risk to competitive advantage", "Used multiple strategy frameworks", "Recommended phased implementation"]
  },
  {
    title: "Jefford’s Risk Mitigation",
    slug: "jeffords-risk-mitigation",
    paths: ["Security & Risk", "Business Strategy"],
    summary: "An InfoSec governance and risk mitigation roadmap aligned with COBIT, ISO, and NIST.",
    description: "Led a team project designing an agile InfoSec framework and 8-quarter roadmap covering business continuity, disaster recovery, laptop encryption, malware patching, and fraud protection.",
    stack: ["COBIT", "ISO", "NIST", "BCP", "DRP", "Risk Mitigation", "Compliance"],
    githubUrl: "https://github.com/",
    featured: false,
    result: "Created a governance-aligned roadmap for reducing operational and security risk.",
    decisions: ["Mapped actions to recognized frameworks", "Structured roadmap across eight quarters", "Balanced compliance and execution feasibility"]
  },
  {
    title: "SwiftUI Map-Based Location App",
    slug: "swiftui-map-based-location-app",
    paths: ["Product & Systems"],
    summary: "A SwiftUI iOS map application using MapKit and custom user-selected coordinates.",
    description: "Built a foundational mobile app with custom annotations, location labels, and simulator behavior.",
    stack: ["SwiftUI", "MapKit", "iOS Development", "Xcode"],
    githubUrl: "https://github.com/",
    featured: false,
    result: "Demonstrated foundational mobile app development and location-based UI control.",
    decisions: ["Used custom annotations", "Focused on coordinate-driven UI", "Tested behavior in the simulator"]
  }
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
