// src/data.js
// Data modeled after Priyanshi's portfolio structure (clean + section-driven)

export const data = {
  name: "Vikas Shukla",
  photo: "avatar.jpg", // public/
  location: "McLean, VA",
  email: "vikasofficial927@gmail.com",
  github: "crazyphoton007",
  linkedin: "vikas-shukla-48063b78",
  resumeUrl: "Vikas_Shukla_Resume.pdf", // public/

  // Hero headline (1–2 lines)
  headline:
    "Data Scientist with 7+ years of experience building ML and analytics solutions that support real business decisions — from fraud detection to trial analytics to LLM + RAG systems.",

  // ✅ Your exact roles (bold + rotating in Hero)
  roles: ["Data Scientist", "Analytics Builder", "Billiards Player"],

  about:
    "Innovative and collaborative Data Scientist with 7+ years delivering large-scale models. Detail-oriented with a track record of structured execution. Experienced in cloud-scale data solutions focused on market behavior analysis, insight generation, and decision support.",

  skills: {
    languages: ["Python", "R", "SQL"],
    tools: [
      "Databricks",
      "Snowflake",
      "AWS",
      "Azure",
      "Docker",
      "Git",
      "CI/CD",
      "Tableau",
      "QuickSight",
    ],
    frameworks: [
      "Pandas",
      "NumPy",
      "scikit-learn",
      "XGBoost",
      "Gradient Boosting",
      "Time Series",
      "A/B Testing",
      "LLM",
      "RAG",
      "FAISS",
    ],
  },

  experience: [
    {
      company: "Capital One",
      title: "Data Scientist",
      dates: "Oct 2024 – Present",
      location: "Richmond, VA",
      bullets: [
        "Identified instability in high-volume card transaction signals and rebuilt monitoring using XGBoost and segmented time-series diagnostics, improving fraud prediction accuracy and reducing false positives during peak shopping periods.",
        "Built consolidated behavioral datasets from tens of millions of transactions, cutting manual analysis cycles and speeding up decisions for product and risk teams.",
        "Designed a scoring framework combining ensemble models with business rules to surface early indicators of account compromise and reduce investigation time for analysts.",
        "Created SQL diagnostics to catch data-quality issues before they affected KPIs, reducing weekly metric variance by ~20%.",
        "Performed Risk Management and Audit testing for data pipeline controls and delivered clear, traceable audit evidence.",
      ],
    },
    {
      company: "Bayer",
      title: "Data Scientist",
      dates: "Jul 2023 – Oct 2024",
      location: "St. Louis, MO",
      bullets: [
        "Modernized analytics workflows for trial and breeding data by containerizing RMarkdown pipelines and making reporting consistent and reproducible.",
        "Automated reporting on a fixed schedule so research and commercial teams always had updated insights.",
        "Built Gradient Boosting and regularized Logistic models on complex datasets and reduced model iteration time from several days to a single day.",
        "Developed an R Shiny application for data visualization and model training with ROC/PR curves and interactive threshold tuning.",
        "Produced executive-ready tables and visuals for large analytical reports, making technical outputs easier for leadership to use.",
      ],
    },
    {
      company: "Amazon",
      title: "Software Engineer (ML)",
      dates: "Jun 2022 – Apr 2023",
      location: "Bellevue, WA",
      bullets: [
        "Built a secure notebook environment for data science teams to explore, train, and deploy models, reducing development time by ~40%.",
        "Created a notification quality framework across push, SMS, and email channels, improving engagement and retention for Alexa.",
        "Implemented automated logic for A/B tests, auto-targeting, and multivariate experiments to improve conversion and ROI.",
        "Launched uplift-based targeting with fatigue controls, reducing total notification volume and delivery failures while increasing incremental conversion.",
      ],
    },
    {
      company: "SGS Tekniks",
      title: "Data Scientist",
      dates: "Nov 2014 – May 2018",
      location: "Gurugram, IND",
      bullets: [
        "Delivered forecasting models for customer demand using regression to guide planning decisions.",
        "Built incident categorization models (including KNN), achieving >95% accuracy.",
        "Automated Python and SQL pipelines for orders, tickets, and marketing data, moving from weekly to daily freshness.",
        "Consolidated vendors and created volume advantage, reducing marketing costs and supporting analytics operations.",
      ],
    },
  ],

  projects: [
    {
      name: "Fraud Detection",
      stack: ["Python", "SQL", "XGBoost"],
      bullets: [
        "Engineered features using target encoding and transaction pattern signals and trained an XGBoost classifier.",
        "Validated performance using decile analysis, Lorenz curve, and Gini coefficient for discrimination strength.",
        "Top deciles captured the majority of fraudulent transactions, achieving high recall while controlling false positives.",
      ],
      links: [
        {
          label: "Repo",
          href: "https://github.com/crazyphoton007/Fraud-detection/blob/main/fraud_detection.ipynb",
        },
      ],
    },
    {
      name: "Cancer Gene Detection",
      stack: ["R", "Python", "SQL"],
      bullets: [
        "Reduced dimensionality from 20K+ features to ~500 using PCA + feature selection (~99.7% reduction).",
        "Applied multiple clustering algorithms on principal components to group patients.",
        "Validated clusters using original labels to confirm separability and interpretability.",
      ],
      links: [
        {
          label: "Repo",
          href: "https://github.com/crazyphoton007/Gene-Expression-Cancer-RNA-Sequence",
        },
      ],
    },
    {
      name: "Forecast Bike Rentals",
      stack: ["Python", "SQL", "Gradient Boosting"],
      bullets: [
        "Built Gradient Boosting models to estimate hourly bike rentals for the last quarter of 2012.",
        "Performed correlation analysis to identify high/low impact features and improve forecast stability.",
        "Created evaluation checks to verify performance across time slices and peak-hour segments.",
      ],
      links: [
        {
          label: "Repo",
          href: "https://github.com/crazyphoton007/Forecast_Bike-Rentals",
        },
      ],
    },
    {
      name: "IntelliQuery Engine (LLM + RAG)",
      stack: ["Python", "FastAPI", "Embeddings", "FAISS", "RAG"],
      bullets: [
        "Built a production-ready RAG engine for legal and finance Q&A with ingestion, chunking, and vector search.",
        "Achieved sub-second retrieval (<800ms) over 10K+ chunks using embeddings + FAISS indexing.",
        "Returned source-cited answers to reduce manual review by ~60% and improve trust for users.",
      ],
      links: [
        {
          label: "Repo",
          href: "https://github.com/crazyphoton007/Intelliquery-Engine",
        },
      ],
    },
  ],

  education: [
    {
      school: "Trine University",
      degree: "M.S. Information Studies",
      dates: "2025",
    },
    {
      school: "University at Buffalo",
      degree: "M.S. Data Science (GPA 3.7/4)",
      dates: "2020 – 2022",
    },
    {
      school: "SRM University",
      degree: "B.Tech Electrical and Electronics Engineering (GPA 8.6/10)",
      dates: "2010 – 2014",
    },
  ],
};
