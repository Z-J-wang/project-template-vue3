pipeline {
  agent {
    node {
      label 'Node'
    }

  }
  stages {
    stage('first') {
      steps {
        echo 'hello world'
        sh 'git pull'
      }
    }

    stage('run test') {
      steps {
        echo 'run test12'
      }
    }

  }
  post {
    always {
      echo 'always say goodbay'
    }

  }
}