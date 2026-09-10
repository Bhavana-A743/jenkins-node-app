pipeline {
    agent any

    stages {

        stage('Clone') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/Bhavana-A743/jenkins-node-app.git'
            }
        }

        stage('Install') {
            steps {
                bat 'npm install'
            }
        }

        stage('Test') {
            steps {
                bat 'npm test'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t my-node-app .'
            }
        }

        stage('Run Docker Container') {
            steps {
                bat 'docker stop jenkins-node-container || exit 0'
                bat 'docker rm jenkins-node-container || exit 0'
                bat 'docker run -d --name jenkins-node-container -p 3000:3000 my-node-app'
            }
        }

        stage('Docker Container Logs') {
            steps {
                bat 'docker logs jenkins-node-container'
            }
        }
    }
}