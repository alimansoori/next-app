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
        sh 'docker build -t alimansoori/next-app:latest .'
      }
    }

    stage('Log into Docker Hub') {
      environment {
        DOCKERHUB_USERNAME = ''
        DOCKERHUB_PASSWORD = ''
      }
      steps {
        sh 'docker login -u $DOCKERHUB_USERNAME -p $DOCKERHUB_PASSWORD'
      }
    }

    stage('Push') {
      steps {
        sh 'docker push alimansoori/next-app:latest'
      }
    }

  }
}