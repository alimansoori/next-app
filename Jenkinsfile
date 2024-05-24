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

  }
}