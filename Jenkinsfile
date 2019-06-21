pipeline {
    agent {
        docker {
            image 'node:10-alpine'
            args '-p 8001:8001'
        }
    }
    environment {
        CI = 'true'
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'node app.js'
            }
        }
       
    }
    
}
