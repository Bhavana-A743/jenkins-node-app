pipeline {
    agent any

    stages {

        stage('Clone') {
     steps {
            git 'https://github.com/Bhavana-A743/jenkins-node-app.git'
           }
        }

        stage('Install') {
            steps {
                bat 'npm install'
            }
        }
        stage('Run App') {
            steps {
                bat 'start node index.js'
            }
        }

        stage('Test') {
            steps {
                bat 'npm test'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t jenkins-node-app .'
            }
        }

        stage('Run Docker Container'){
            steps {
                bat 'docker run -d --name jenkins-node-container -p 3000:3000 jenkins-node-app'
            }
        }

        stage('Docker Container Logs'){
            steps {
                bat 'docker logs jenkins-node-container'
            }
        }
    }
}