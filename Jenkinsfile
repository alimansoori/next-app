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
      steps {
        sh 'docker login -u $DOCKERHUB_USER -p $DOCKERHUB_PASSWORD'
      }
    }

  }
}