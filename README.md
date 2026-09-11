# Rizky Abdillah | AI Engineer Portfolio

This repository contains a personal portfolio website built to present my work as a final-year Informatics Engineering student and aspiring AI Engineer. The site highlights practical projects in deep learning, computer vision, cybersecurity research, and project coordination, with a structure designed to be easy to read for recruiters, collaborators, and technical reviewers.

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

### 1. Deep Learning Intrusion Detection System

2026 | AI Developer

An AI-based cybersecurity project designed to detect malicious network traffic using structured network-flow data. The project implements an end-to-end workflow covering data preprocessing, model training, evaluation, and inference for automated cyber threat detection.

### 2. GizGOAT Health Recommendation Platform

Feb 2026 – July 2026 | AI Engineer & Project Manager

GizGOAT is an AI-integrated health recommendation platform designed to help users monitor health-related information and receive data-driven insights. As AI Engineer and Project Manager, I worked on the machine learning workflow, model integration, API development, and cross-functional project coordination.

Best model R² on test data: ≈ 0.69

### 3. Flower Image Classification using MobileNetV2

2025 | AI / Machine Learning Developer

A deep learning image classification system developed to identify different flower categories using MobileNetV2 and transfer learning. The project demonstrates an end-to-end computer vision workflow from image preprocessing and augmentation to training, evaluation, and deployment.

Test accuracy: 89.75%; Dataset: 3,000+ images

### 4. Urban Village Digitalization Platform

2025 · Supporting experience | Web Developer

A responsive digital platform designed to centralize public information, administrative services, news, and community activities for a local government office. The platform includes client-side content management, image uploads, live preview, LocalStorage persistence, and responsive design.

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
