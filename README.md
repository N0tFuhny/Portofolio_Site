# AI Engineer Portfolio

A focused portfolio for a Computer Science student pursuing a career in **AI Engineering**.

This site is designed to show the progression from learning machine learning and deep learning fundamentals to building practical AI systems, evaluating models responsibly, integrating inference APIs, and collaborating across technical teams.

> The portfolio presents academic, capstone, research, and project-based experience honestly. It does not claim professional production experience that has not happened.

## What this portfolio demonstrates

- Practical machine learning and deep learning development
- Computer vision and transfer learning
- End-to-end preprocessing, training, evaluation, and inference workflows
- Model serving through a FastAPI inference prototype
- Research-oriented evaluation for cybersecurity
- Threshold tuning, ROC-AUC, precision-recall, confusion matrices, and false-negative analysis
- Model export for SavedModel, TensorFlow Lite, and TensorFlow.js
- Cross-functional communication and technical project coordination

## Featured work

### Cyber Threat Detection Using Deep Learning

Thesis/research project using the Improved CICIDS2017 dataset for binary classification of benign and malicious network traffic. The work compares a Logistic Regression baseline with CNN and LSTM approaches and emphasizes recall-aware evaluation, threshold tuning, and explainability experimentation.

**Technologies:** Python, PyTorch, scikit-learn, Pandas, NumPy, CNN, LSTM

### Sleep Quality Prediction System

GizGOAT capstone project that predicts sleep quality from health and lifestyle information. The project covers preprocessing, feature engineering, TensorFlow model development, custom training experiments, model serialization, TensorBoard logging, and a FastAPI inference prototype.

**Technologies:** Python, TensorFlow, Keras, scikit-learn, Pandas, FastAPI, TensorBoard

### Flower Image Classification with MobileNetV2

A computer vision project using transfer learning on 3,000+ flower images across five classes. The model reached approximately 89.75% test accuracy and was exported into formats suitable for different runtime environments.

**Technologies:** TensorFlow, Keras, MobileNetV2, transfer learning, TensorFlow Lite, TensorFlow.js

### Digitalization Project Management

Supporting project-management experience covering scope definition, project planning, progress tracking, risk management, milestone coordination, weekly reporting, and cross-functional communication.

## Technology stack

- **Framework:** Next.js 14, React 18
- **Language:** TypeScript
- **Styling:** CSS design tokens and responsive CSS
- **Architecture:** Next.js App Router, static generation, reusable data-driven components
- **Runtime:** Node.js and npm
- **Deployment:** Not configured; the project is intentionally local and ready for future hosting

## Site features

- Responsive homepage for mobile, tablet, and desktop
- Sticky navigation with an accessible mobile menu
- Dark and light themes with local persistence
- AI Engineering journey timeline
- Selected project cards with technical metrics
- Dynamic project case studies at `/projects/[slug]`
- Reusable workflow visualizations
- Skills grouped by evidence-oriented categories
- Project-based experience section
- SEO metadata and Open Graph configuration
- Reduced-motion support
- Centralized Three-Color design system: Dark Ash, adaptive Blue, and Ash Grey

## Getting started

### Requirements

- Node.js 18.17 or newer
- npm

### Install and run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Create a production build

```bash
npm run build
npm run start
```

## Project structure

```text
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── projects/[slug]/page.tsx
├── components/
│   └── Portfolio.tsx
└── data/
    ├── journey.ts
    ├── profile.ts
    └── projects.ts
public/
└── cv/
    └── resume.pdf
```

## Customizing the portfolio

### Update personal information

Edit `src/data/profile.ts` and replace:

- `YOUR_NAME`
- `YOUR_EMAIL`
- `YOUR_GITHUB_URL`
- `YOUR_LINKEDIN_URL`
- `YOUR_LOCATION`

The same placeholder name also appears in the page metadata, navigation brand, and footer.

### Add or update a project

Edit `src/data/projects.ts`. Each project provides its own:

- Summary and role
- Project type and category
- Problem statement
- Responsibilities and technical approach
- Technologies
- Metrics
- Challenges and solutions
- Lessons learned
- Workflow stages
- GitHub link
- Evidence placeholders

Adding a project to this data file automatically makes it available to the project grid and its dynamic case-study route.

### Add your CV

Replace `public/cv/resume.pdf` with the real resume PDF. The existing download button already points to `/cv/resume.pdf`.

### Add project evidence

Replace the evidence placeholders in `src/data/projects.ts` when screenshots, diagrams, evaluation charts, API examples, or project-management artifacts are ready. Do not add fabricated charts or results.

### Modify the visual theme

Update the CSS variables at the top of `src/app/globals.css`. The palette is intentionally centralized so the site can be restyled without changing every component.

## Design principles

The site is intentionally calm, technical, and recruiter-friendly rather than flashy. It uses:

- Dark Ash as the structural neutral
- Blue as a restrained interaction and emphasis color
- Ash Grey for supporting text, borders, and metadata
- CSS transitions instead of a heavy animation library
- System fonts to avoid an external font request
- Mobile-first layouts with no forced horizontal scrolling
- Semantic sections and visible keyboard focus states

## Current scope

This repository is a frontend-only portfolio. It does not include:

- A backend or database
- Authentication
- A contact-form service
- Production model hosting
- Automatic deployment
- Fabricated personal information or achievements

Future deployment can be added after personal content, CV, project links, and evidence assets have been reviewed.
