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

        stage('Test') {
            steps {
                bat 'npm test'
            }
        }

        stage('Run App') {
            steps {
                bat 'start /B node index.js'
            }
        }
    }
}