# 🚀 AWS + Jenkins + Docker CI/CD Pipeline

This project demonstrates a fully automated CI/CD pipeline using:

- GitHub
- Jenkins
- Docker
- AWS EC2

Whenever code is pushed to GitHub, Jenkins automatically builds and deploys the application using Docker.

---

## 📌 Project Architecture

cicd-node-app/
│
├── Dockerfile
├── package.json
├── package-lock.json
├── server.js
└── README.md


---

## 🛠 Technologies Used

- Node.js
- Docker
- Jenkins
- GitHub
- AWS EC2
- Webhook Integration

---

## ⚙️ CI/CD Workflow

### 1️⃣ Developer Push Code
Code is pushed to the GitHub repository.

### 2️⃣ GitHub Webhook
GitHub sends a webhook request to Jenkins.

### 3️⃣ Jenkins Auto Trigger
Jenkins automatically starts the build process.

### 4️⃣ Docker Build

```bash
docker build -t cicd-node-app .
