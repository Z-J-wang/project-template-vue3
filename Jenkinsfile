pipeline {
  agent {
    node {
      label 'build'
    }

  }
  stages {
    stage('yarn') {
      steps {
        sh 'ls'
        yarn 'yarn'
        sh 'exit'
      }
    }

  }
}