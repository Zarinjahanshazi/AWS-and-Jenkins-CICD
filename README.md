# 🚀 AWS + Jenkins + Docker CI/CD Pipeline

This project demonstrates a fully automated CI/CD pipeline using:

- GitHub
- Jenkins
- Docker
- AWS EC2

Whenever code is pushed to GitHub, Jenkins automatically builds and deploys the application using Docker.
URL:http://52.66.209.27:8000/
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
```
### 5️⃣ Stop & Remove Old Container
```bash
docker stop node-app || true
docker rm node-app || true

```

### 6️⃣ Run New Container
```bash
docker run -d -p 8000:8000 --name node-app cicd-node-app

```

### 7️⃣ Application Live
```bash
http://<EC2-PUBLIC-IP>:8000

```
