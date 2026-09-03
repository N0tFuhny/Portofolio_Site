# Rizky Abdillah | AI Engineer Portfolio

This repository contains a personal portfolio website built to present my work as a Computer Science student focused on AI Engineering. The site highlights practical projects in deep learning, computer vision, cybersecurity research, and project coordination, with a structure designed to be easy to read for recruiters, collaborators, and technical reviewers.

The portfolio is built with Next.js and TypeScript, and it is centered around project evidence, technical storytelling, and a clear progression from learning to applied AI engineering.

## Portfolio focus

This project demonstrates:

- Machine learning and deep learning workflows
- Computer vision and transfer learning
- Model evaluation with accuracy, loss, ROC, confusion matrices, and threshold analysis
- Feature engineering and preprocessing for tabular and image data
- Inference prototypes and deployment-oriented thinking
- Responsible AI evaluation, especially in high-impact security contexts
- Cross-functional AI engineering communication and project coordination

## Featured projects

### 1. Cyber Threat Detection Using Deep Learning

Research-driven intrusion detection project using the Improved CICIDS2017 dataset for binary classification of benign and malicious network traffic. The project emphasizes false-negative-aware evaluation, threshold tuning, and explainable performance reporting.

Key focus:

- Logistic Regression baseline comparison
- CNN and LSTM model experiments
- ROC-AUC and confusion-matrix evaluation
- Recall-sensitive model reasoning
- Real evaluation trade-offs instead of relying only on headline accuracy

### 2. Sleep Quality Prediction System

A capstone-style AI engineering project that predicts sleep quality from health and lifestyle data. The project includes preprocessing, feature engineering, TensorFlow modeling, model serialization, and a FastAPI-based inference prototype.

Key focus:

- Data cleaning and schema alignment
- Feature scaling and preparation
- Neural network model development
- Model evaluation and custom training logic
- Inference prototype for practical usage

### 3. Flower Image Classification with MobileNetV2

A computer vision project using transfer learning on more than 3,000 flower images across five classes. The model is exported into multiple runtime-friendly formats, showing attention to deployment-oriented AI work beyond a single notebook output.

Key focus:

- Transfer learning with MobileNetV2
- Image preprocessing and augmentation
- Train-validation-test splitting
- Evaluation with accuracy and loss curves
- Model export to SavedModel, TensorFlow Lite, and TensorFlow.js

### 4. Digitalization Project Management

A supporting project-management experience focused on planning, scope definition, milestones, risk tracking, and communication. This section reflects the operational side of technical delivery and project coordination.

Key focus:

- Public service website structure
- Admin content management workflow
- Mobile-first UI design
- Stakeholder communication and reporting
- Planning and milestone coordination

## Technical stack

- Next.js 14
- React 18
- TypeScript
- CSS design system and responsive UI styling
- App Router architecture
- Node.js and npm

## Project structure

```text
Portofolio_Site/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── projects/[slug]/page.tsx
│   ├── components/
│   │   └── Portfolio.tsx
│   └── data/
│       ├── journey.ts
│       ├── profile.ts
│       └── projects.ts
├── public/
│   ├── cv/
│   │   └── resume.pdf
│   ├── cyber-threat-detection/
│   ├── sleep-quality-prediction/
│   ├── flower-classification/
│   └── digitalization-project-management/
├── package.json
├── next.config.mjs
├── tsconfig.json
├── README.md
├── .gitignore
└── next-env.d.ts
```

## Local development

### Requirements

- Node.js 18.17 or newer
- npm

### Install dependencies

```bash
npm install
```

### Run the app locally

```bash
npm run dev
```

Then open:

```text
http://localhost:3000
```

### Production build

```bash
npm run build
npm run start
```

## Design and presentation

The portfolio is intentionally designed to feel professional, calm, and technically focused rather than overly flashy. It emphasizes:

- Clear project storytelling
- Evidence-based machine learning presentation
- Good readability on desktop and mobile
- Structured project cards and case-study pages
- Consistent visual hierarchy and accessible layout

## Notes on authenticity

This portfolio is built to present actual project work in a credible and honest way. It uses project evidence, technical summaries, and model narratives that reflect real project activities and evaluation patterns rather than generic template content.

## Author

Rizky Abdillah

- GitHub: https://github.com/N0tFuhny
- LinkedIn: https://www.linkedin.com/in/rzkyabdlh/
- Email: risky1243@gmail.com
