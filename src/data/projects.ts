export type Project = {
  slug: string; title: string; shortTitle: string; category: string; type: string; status: string; role: string;
  summary: string; problem: string; responsibilities: string[]; approach: string[]; technologies: string[];
  metrics?: { label: string; value: string }[]; challenges: string[]; solutions: string[]; lessons: string[];
  workflow: string[]; githubUrl: string; demoUrl?: string; featured: boolean; evidence: { title: string; caption: string }[];
};

export const projects: Project[] = [
  {
    slug: "cyber-threat-detection", title: "Cyber Threat Detection Using Deep Learning", shortTitle: "Cyber Threat Detection",
    category: "Research", type: "Thesis / Research Project", status: "Featured research project", role: "AI / Deep Learning Researcher",
    summary: "Intrusion Detection System research using the Improved CICIDS2017 dataset, focused on binary classification of benign and malicious network traffic.",
    problem: "How can a network traffic classifier be evaluated responsibly when false negatives matter as much as headline accuracy?",
    responsibilities: ["Prepared and validated flow-level data", "Built a Logistic Regression baseline alongside CNN and LSTM experiments", "Analyzed thresholds, ROC-AUC, precision-recall, and false negatives", "Experimented with explainability"],
    approach: ["Deduplicated and corrected labels across approximately 86 numeric features", "Used train / validation / test splits and feature scaling", "Compared a classical baseline with deep learning models", "Tuned the decision threshold for recall-aware evaluation"],
    technologies: ["Python", "PyTorch", "scikit-learn", "Pandas", "NumPy", "CNN", "LSTM"],
    metrics: [{ label: "Best threshold", value: "≈ 0.59" }, { label: "Weighted F1", value: "≈ 0.9991" }, { label: "ROC-AUC", value: "≈ 1.0000" }],
    challenges: ["Very high dataset metrics can hide evaluation weaknesses", "Choosing a threshold requires understanding the cost of missed attacks"],
    solutions: ["Kept a Logistic Regression baseline for context", "Reported precision-recall and confusion-matrix behavior rather than accuracy alone", "Documented the limits of benchmark performance"],
    lessons: ["Strong results are only useful when the evaluation protocol is transparent.", "Threshold selection is a product and risk decision, not just a model default."],
    workflow: ["Improved CICIDS2017", "Preprocessing", "Data validation", "Train / test split", "Feature scaling", "Baseline", "CNN / LSTM", "Threshold tuning", "Evaluation"],
    githubUrl: "PROJECT_GITHUB_URL", featured: true,
    evidence: [{ title: "Evaluation evidence", caption: "Placeholder for confusion matrix, ROC, and precision-recall figures." }],
  },
  {
    slug: "sleep-quality-prediction", title: "Sleep Quality Prediction System", shortTitle: "Sleep Quality Prediction", category: "AI Engineering", type: "Team / Capstone Project", status: "GizGOAT capstone project", role: "AI Engineer",
    summary: "A regression system that predicts sleep quality from health and lifestyle information, with a FastAPI inference prototype.",
    problem: "How do we turn a trained regression model into a reliable interface when teams use different representations of the same features?",
    responsibilities: ["Designed preprocessing and feature engineering", "Built a TensorFlow Functional API model and custom training pipeline", "Implemented inference and model serialization", "Coordinated input requirements with Data Science and Backend / Fullstack teams"],
    approach: ["Split and scaled features and target values", "Experimented with custom loss and tf.GradientTape", "Used early stopping and TensorBoard logging", "Exposed the model through a FastAPI inference prototype"],
    technologies: ["Python", "TensorFlow", "Keras", "scikit-learn", "Pandas", "FastAPI", "TensorBoard"],
    metrics: [{ label: "Best model R²", value: "≈ 0.69" }, { label: "Delivery", value: "Inference prototype" }],
    challenges: ["Blood Pressure had inconsistent representations", "Occupation used string categories", "Preprocessing schema drifted between teams"],
    solutions: ["Aligned a shared feature format and API input contract", "Made categorical handling explicit", "Used communication and documentation to resolve integration assumptions"],
    lessons: ["A useful model is also a clear data contract.", "Cross-functional communication is part of AI engineering, not work around it."],
    workflow: ["Health & lifestyle data", "Preprocessing", "Feature engineering", "Scaling", "TensorFlow model", "Custom training", "Evaluation", "Model export", "FastAPI prototype"],
    githubUrl: "PROJECT_GITHUB_URL", featured: true,
    evidence: [{ title: "System evidence", caption: "Placeholder for TensorBoard, API, or inference screenshots." }],
  },
  {
    slug: "flower-classification", title: "Flower Image Classification with MobileNetV2", shortTitle: "MobileNetV2 Classification", category: "Computer Vision", type: "Computer Vision Project", status: "Completed academic project", role: "AI / Machine Learning Developer",
    summary: "A transfer-learning image classifier trained on 3,000+ flower images across five classes, with portable export formats.",
    problem: "How can a small image project become evidence of deployment-oriented thinking beyond a single training notebook?",
    responsibilities: ["Prepared and augmented image data", "Fine-tuned a MobileNetV2 transfer-learning model", "Evaluated with validation, test metrics, and a confusion matrix", "Exported the trained model for different runtimes"],
    approach: ["Used a 70 / 15 / 15 train-validation-test split", "Applied image preprocessing and augmentation", "Exported SavedModel, TensorFlow Lite, and TensorFlow.js artifacts"],
    technologies: ["TensorFlow", "Keras", "MobileNetV2", "Transfer learning", "TensorFlow Lite", "TensorFlow.js"],
    metrics: [{ label: "Test accuracy", value: "89.75%" }, { label: "Dataset", value: "3,000+ images · 5 classes" }],
    challenges: ["Keeping preprocessing consistent across export targets", "Understanding class-level errors rather than one aggregate score"],
    solutions: ["Used a repeatable preprocessing path", "Reviewed confusion-matrix results and retained multiple model formats"],
    lessons: ["Export is an engineering deliverable: model format affects where inference can happen."],
    workflow: ["Image dataset", "Augmentation", "MobileNetV2", "Transfer learning", "Evaluation", "SavedModel", "TFLite / TFJS"],
    githubUrl: "PROJECT_GITHUB_URL", featured: true,
    evidence: [{ title: "Model evidence", caption: "Placeholder for confusion matrix or inference examples." }],
  },
  {
    slug: "digitalization-project-management", title: "Digitalization Project Management", shortTitle: "Digitalization Project Management", category: "Project Management", type: "Team Project", status: "Supporting experience", role: "Project Manager",
    summary: "Project coordination experience at GizGOAT, strengthening the planning and communication habits that support technical delivery.",
    problem: "How can a cross-functional project stay aligned as scope, dependencies, risks, and milestones evolve?",
    responsibilities: ["Created the project charter and scope", "Built timelines and tracked milestones", "Maintained progress logs and a risk register", "Coordinated communication and weekly reporting"],
    approach: ["Translated requirements into actionable tasks", "Documented decisions and dependencies", "Used Notion, project plans, progress trackers, and Gantt-style planning"],
    technologies: ["Notion", "Project planning", "Risk management", "Progress tracking", "Stakeholder communication"],
    challenges: ["Keeping shared understanding current across teams", "Making dependencies visible before they block work"],
    solutions: ["Established regular reporting and milestone tracking", "Kept risks and decisions visible to the team"],
    lessons: ["Planning and technical communication make complex AI work easier to coordinate."],
    workflow: ["Requirements", "Scope", "Project plan", "Task coordination", "Risk review", "Weekly reporting", "Milestones"],
    githubUrl: "PROJECT_GITHUB_URL", featured: true, evidence: [{ title: "Project artifacts", caption: "Placeholder for a planning or progress-tracker screenshot." }],
  },
];
