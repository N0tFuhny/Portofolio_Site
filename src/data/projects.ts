export type Project = {
  slug: string; title: string; shortTitle: string; category: string; type: string; status: string; role: string;
  summary: string; problem: string; responsibilities: string[]; approach: string[]; technologies: string[];
  metrics?: { label: string; value: string }[]; challenges: string[]; solutions: string[]; lessons: string[];
  workflow: string[]; githubUrl: string; demoUrl?: string; featured: boolean; evidence: { title: string; caption: string; imageUrl: string }[];
};

export const projects: Project[] = [
  {
    "slug": "cyber-threat-detection",
    "title": "Deep Learning Intrusion Detection System",
    "shortTitle": "Deep Learning Intrusion Detection System",
    "category": "Research",
    "type": "Cybersecurity Project",
    "status": "2026",
    "role": "AI Developer",
    "summary": "An AI-based cybersecurity project designed to detect malicious network traffic using structured network-flow data. The project implements an end-to-end workflow covering data preprocessing, model training, evaluation, and inference for automated cyber threat detection.",
    "problem": "Detecting malicious network traffic from structured network-flow data.",
    "responsibilities": [
      "Developed a deep learning-based Intrusion Detection System",
      "Built preprocessing, training, evaluation, artifact management, and batch inference workflows",
      "Integrated a TensorFlow/Keras model with preprocessing artifacts",
      "Developed desktop and CLI inference workflows for CSV network traffic data"
    ],
    "approach": [
      "Preprocessed structured network-flow data",
      "Trained and evaluated the TensorFlow/Keras model",
      "Implemented artifact discovery and model validation",
      "Added testing and reproducible project documentation"
    ],
    "technologies": [
      "TensorFlow",
      "Keras",
      "Python",
      "Deep Learning",
      "Cybersecurity"
    ],
    "challenges": [
      "Connecting trained models and preprocessing artifacts for repeatable inference"
    ],
    "solutions": [
      "Implemented artifact discovery, model validation, and testing"
    ],
    "lessons": [
      "Reproducible inference requires model artifacts, validation, and clear documentation."
    ],
    "workflow": [
      "Network-flow data",
      "Preprocessing",
      "Model training",
      "Evaluation",
      "Artifact management",
      "Desktop / CLI batch inference"
    ],
    "githubUrl": "https://github.com/N0tFuhny/IDS_Project",
    "featured": true,
    "evidence": [
      {
        "title": "Model dashboard",
        "caption": "Desktop interface for network traffic classification.",
        "imageUrl": "/cyber-threat-detection/cyber-threat-detection-model-dashboard.JPG"
      },
      {
        "title": "CSV scan workflow",
        "caption": "Screenshot of the CSV selection and scanning process used to test new input data in the system.",
        "imageUrl": "/cyber-threat-detection/cyber-threat-detection-csv-selection-gui.JPG"
      }
    ]
  },
  {
    "slug": "sleep-quality-prediction",
    "title": "GizGOAT Health Recommendation Platform",
    "shortTitle": "GizGOAT Health Recommendation Platform",
    "category": "AI Engineering",
    "type": "Capstone Project",
    "status": "Feb 2026 – July 2026",
    "role": "AI Engineer & Project Manager",
    "summary": "GizGOAT is an AI-integrated health recommendation platform designed to help users monitor health-related information and receive data-driven insights. As AI Engineer and Project Manager, I worked on the machine learning workflow, model integration, API development, and cross-functional project coordination.",
    "problem": "Developing and integrating a deep learning-based sleep quality prediction system within a health recommendation platform.",
    "responsibilities": [
      "Led project planning and cross-functional coordination across AI, Data Science, Backend, and Frontend teams",
      "Designed and implemented end-to-end ML workflows covering preprocessing, training, evaluation, and deployment",
      "Developed a sleep quality prediction system using TensorFlow Functional API and custom training workflows",
      "Built RESTful AI services using FastAPI for application integration and model inference",
      "Managed encoders, scalers, and trained weights",
      "Used Git-based collaborative development practices"
    ],
    "approach": [
      "Prepared data and trained a deep learning sleep quality model",
      "Evaluated the best model: best model R² of approximately 0.69 on test data.",
      "Managed preprocessing artifacts and trained weights for deployment",
      "Integrated model inference through RESTful FastAPI services"
    ],
    "technologies": [
      "Python",
      "TensorFlow",
      "Keras",
      "FastAPI",
      "Git"
    ],
    "metrics": [
      {
        "label": "Best model R² on test data",
        "value": "≈ 0.69"
      }
    ],
    "challenges": [
      "Connecting model development with application integration and deployment",
      "Coordinating work across AI, Data Science, Backend, and Frontend teams"
    ],
    "solutions": [
      "Built RESTful FastAPI services and managed encoders, scalers, and trained weights for deployment",
      "Led project planning and cross-functional coordination using Git-based collaborative development practices"
    ],
    "lessons": [
      "The project covered preprocessing, training, evaluation, deployment, and REST API integration.",
      "AI engineering work was supported by project planning and cross-functional collaboration."
    ],
    "workflow": [
      "Health data",
      "Preprocessing",
      "Model training",
      "Evaluation",
      "Artifact management",
      "Deployment",
      "FastAPI integration"
    ],
    "githubUrl": "https://github.com/GizGoat-Capstone-2026",
    "demoUrl": "https://gizgoat.vercel.app",
    "featured": true,
    "evidence": [
      {
        "title": "Dataset loading",
        "caption": "Dataset loading step in the sleep quality model development workflow.",
        "imageUrl": "/sleep-quality-prediction/sleep-quality-prediction-dataset_loaded.png"
      },
      {
        "title": "Train-test split",
        "caption": "Training and test data preparation for model evaluation.",
        "imageUrl": "/sleep-quality-prediction/sleep-quality-prediction-train-test-split.png"
      },
      {
        "title": "Data preprocessing",
        "caption": "Feature cleaning and transformation steps that prepared the tabular data for model training.",
        "imageUrl": "/sleep-quality-prediction/sleep-quality-prediction-data_preprocssing.png"
      },
      {
        "title": "Scaling proof",
        "caption": "Scaling step in the data preprocessing workflow.",
        "imageUrl": "/sleep-quality-prediction/sleep-quality-prediction-scaling_proof.png"
      },
      {
        "title": "Model summary",
        "caption": "Architecture summary and parameter count validating the implemented neural network structure.",
        "imageUrl": "/sleep-quality-prediction/sleep-quality-prediction-model_summary.png"
      },
      {
        "title": "Batch inference",
        "caption": "Batch prediction output demonstrating the model can process multiple records in a single run.",
        "imageUrl": "/sleep-quality-prediction/sleep-quality-prediction-batch_inference.png"
      },
      {
        "title": "Single inference",
        "caption": "A single-record prediction example showing the model produces a real output for end-user use.",
        "imageUrl": "/sleep-quality-prediction/sleep-quality-prediction-single_inference.png"
      }
    ]
  },
  {
    "slug": "flower-classification",
    "title": "Flower Image Classification using MobileNetV2",
    "shortTitle": "Flower Image Classification using MobileNetV2",
    "category": "Computer Vision",
    "type": "Computer Vision Project",
    "status": "2025",
    "role": "AI / Machine Learning Developer",
    "summary": "A deep learning image classification system developed to identify different flower categories using MobileNetV2 and transfer learning. The project demonstrates an end-to-end computer vision workflow from image preprocessing and augmentation to training, evaluation, and deployment.",
    "problem": "Classifying flower images into multiple categories using MobileNetV2 transfer learning on 3,000+ images.",
    "responsibilities": [
      "Prepared 3,000+ flower images for multi-class classification",
      "Applied image preprocessing and data augmentation",
      "Fine-tuned ImageNet-pretrained MobileNetV2 with a custom classification head",
      "Achieved 89.75% test accuracy and exported SavedModel, TFLite, and TensorFlow.js formats"
    ],
    "approach": [
      "Used ImageNet-pretrained MobileNetV2 for transfer learning",
      "Added a custom classification head",
      "Applied Early Stopping and learning-rate scheduling",
      "Evaluated test accuracy and exported the trained model"
    ],
    "technologies": [
      "TensorFlow",
      "Computer Vision",
      "Transfer Learning",
      "MobileNetV2"
    ],
    "metrics": [
      {
        "label": "Test accuracy",
        "value": "89.75%"
      },
      {
        "label": "Dataset",
        "value": "3,000+ images"
      }
    ],
    "challenges": [
      "Developing and evaluating a multi-class flower classification model",
      "Preparing the trained model for deployment in multiple formats"
    ],
    "solutions": [
      "Implemented data augmentation, MobileNetV2 transfer learning, Early Stopping, and learning-rate scheduling; achieved 89.75% test accuracy",
      "Exported the model to TensorFlow SavedModel, TFLite, and TensorFlow.js"
    ],
    "lessons": [
      "The computer vision workflow covered data augmentation, training, evaluation, and model export for deployment."
    ],
    "workflow": [
      "Image dataset",
      "Augmentation",
      "MobileNetV2",
      "Transfer learning",
      "Evaluation",
      "SavedModel",
      "TFLite / TFJS"
    ],
    "githubUrl": "https://github.com/N0tFuhny/MobileNetV2-Flower-Classification",
    "featured": true,
    "evidence": [
      {
        "title": "Sample inference",
        "caption": "Real flower prediction example showing the input image and the final class prediction output.",
        "imageUrl": "/flower-classification/flower-classification-sample-inference.png"
      },
      {
        "title": "Dataset split",
        "caption": "Train, validation, and test partitioning used to evaluate the model on unseen flower images.",
        "imageUrl": "/flower-classification/flower-classification-dataset-split.PNG"
      },
      {
        "title": "Class distribution",
        "caption": "Count of images per flower class showing the dataset balance and class composition.",
        "imageUrl": "/flower-classification/flower-classification-class-distribution.PNG"
      },
      {
        "title": "Preprocessing visualization",
        "caption": "Image normalization and preprocessing steps used to standardize inputs before model inference.",
        "imageUrl": "/flower-classification/flower-classification-preprocessing.PNG"
      },
      {
        "title": "Model summary",
        "caption": "Architecture overview of the MobileNetV2 transfer-learning model and the added classification head.",
        "imageUrl": "/flower-classification/flower-classification-model-summary.PNG"
      },
      {
        "title": "Accuracy curve",
        "caption": "Training and validation accuracy trend demonstrating learning performance over epochs.",
        "imageUrl": "/flower-classification/flower-classification-accuracy-curve.PNG"
      },
      {
        "title": "Loss curve",
        "caption": "Loss trend indicating optimization stability and reduction in error during training.",
        "imageUrl": "/flower-classification/flower-classification-loss-curve.PNG"
      },
      {
        "title": "Evaluation metrics",
        "caption": "Final test accuracy and loss values used to assess model performance on the hold-out set.",
        "imageUrl": "/flower-classification/flower-classification-evaluation-metrics.PNG"
      },
      {
        "title": "Export formats",
        "caption": "SavedModel, TFLite, and TensorFlow.js outputs showing the model was prepared for deployment.",
        "imageUrl": "/flower-classification/flower-classification-export-formats.PNG"
      }
    ]
  },
  {
    "slug": "digitalization-project-management",
    "title": "Urban Village Digitalization Platform",
    "shortTitle": "Urban Village Digitalization Platform",
    "category": "Web Development",
    "type": "Web Development Project",
    "status": "2025 · Supporting experience",
    "role": "Web Developer",
    "summary": "A responsive digital platform designed to centralize public information, administrative services, news, and community activities for a local government office. The platform includes client-side content management, image uploads, live preview, LocalStorage persistence, and responsive design.",
    "problem": "Centralizing local government information, services, news, and community activities in an accessible platform.",
    "responsibilities": [
      "Developed a responsive platform for desktop and mobile",
      "Built a client-side admin dashboard for content management",
      "Implemented image uploads and live content preview",
      "Used Vanilla JavaScript and LocalStorage for dynamic content",
      "Integrated Google Maps"
    ],
    "approach": [
      "Structured public information and administrative services",
      "Built client-side content management with image uploads and live preview",
      "Persisted dynamic content using LocalStorage",
      "Adapted the interface for desktop and mobile"
    ],
    "technologies": [
      "HTML5",
      "CSS3",
      "JavaScript",
      "LocalStorage"
    ],
    "challenges": [
      "Maintaining dynamic client-side content across page visits"
    ],
    "solutions": [
      "Used LocalStorage persistence and live content preview"
    ],
    "lessons": [
      "Responsive design and content management support access to public information."
    ],
    "workflow": [
      "Public information",
      "Responsive interface",
      "Admin dashboard",
      "Image uploads",
      "Live preview",
      "LocalStorage",
      "Google Maps"
    ],
    "githubUrl": "https://github.com/N0tFuhny/Digitalisasi_Kelurahan",
    "demoUrl": "https://n0tfuhny.github.io/Digitalisasi_Kelurahan/",
    "featured": true,
    "evidence": [
      {
        "title": "Homepage",
        "caption": "Public-facing landing page presenting the digitalized kelurahan information and key navigation.",
        "imageUrl": "/digitalization-project-management/digitalization-project-homepage.PNG"
      },
      {
        "title": "Mobile homepage",
        "caption": "Responsive mobile version of the landing page showing the interface adapts to smaller screens.",
        "imageUrl": "/digitalization-project-management/digitalization-project-mobile-homepage.PNG"
      },
      {
        "title": "Mobile navigation menu",
        "caption": "Hamburger-menu navigation demonstrating the mobile-first user experience for public access.",
        "imageUrl": "/digitalization-project-management/digitalization-project-mobile-navigation-menu.PNG"
      },
      {
        "title": "Public services",
        "caption": "Service information page highlighting public administration offerings and citizen-facing content.",
        "imageUrl": "/digitalization-project-management/digitalization-project-public-services-page.PNG"
      },
      {
        "title": "News page",
        "caption": "News and community content layout that organizes information for residents and stakeholders.",
        "imageUrl": "/digitalization-project-management/digitalization-project-news-page.PNG"
      },
      {
        "title": "Contact and maps",
        "caption": "Local contact information and embedded map section showing the project’s geographic information support.",
        "imageUrl": "/digitalization-project-management/digitalization-project-contact-maps.PNG"
      },
      {
        "title": "Admin login",
        "caption": "Client-side admin login interface for the content-management dashboard.",
        "imageUrl": "/digitalization-project-management/digitalization-project-admin-login-page.PNG"
      },
      {
        "title": "Add/edit content workflow",
        "caption": "Content management flow for creating and updating community news or activities in the dashboard.",
        "imageUrl": "/digitalization-project-management/digitalization-project-add-edit-content-workflow.PNG"
      },
      {
        "title": "Content validation",
        "caption": "Preview of news content in the platform.",
        "imageUrl": "/digitalization-project-management/digitalization-project-content-validated-news-page.PNG"
      }
    ]
  }
];
