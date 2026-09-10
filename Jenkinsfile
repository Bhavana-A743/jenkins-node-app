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
                bat 'node index.js'
            }
        stage('Test') {
            steps {
                bat 'npm test'
        }
    }
}