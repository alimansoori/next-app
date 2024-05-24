pipeline {
  agent any
  stages {
    stage('Check out') {
      steps {
        git(url: 'https://github.com/alimansoori/next-app', branch: 'main')
      }
    }

    stage('Unit Test') {
      steps {
        sh 'npm install && npm run test'
      }
    }

    stage('Build') {
      steps {
        sh 'docker build -t alimansoori/next-app .'
      }
    }

    stage('Log into Docker Hub') {
      environment {
        DOCKERHUB_USERNAME = 'credentials(\'DOCKERHUB_USERNAME\')'
        DOCKERHUB_PASSWORD = 'credentials(\'DOCKERHUB_PASSWORD\')'
      }
      steps {
        sh 'docker login -u $DOCKERHUB_USERNAME -p $DOCKERHUB_PASSWORD'
      }
    }

  }
}