// Uses Declarative syntax to run commands inside a container.
pipeline {
    triggers {
        pollSCM("*/5 * * * *")
    }
    agent {
        kubernetes {
            yaml '''
apiVersion: v1
kind: Pod
spec:
  imagePullSecrets:
    - name: dev-imanuel-jenkins-regcred
  volumes:
    - name: docker-sock
      hostPath:
        path: /var/run/docker.sock
  containers:
  - name: docker
    image: docker:latest
    command:
    - cat
    tty: true
    volumeMounts:
    - mountPath: /var/run/docker.sock
      name: docker-sock
'''
            defaultContainer 'node'
        }
    }
    stages {
        stage('Push') {
            steps {
                container('docker') {
                    sh "docker build -t quay.imanuel.dev/imanuel/imanuel.dev:$BUILD_NUMBER ."
                    sh "docker tag quay.imanuel.dev/imanuel/imanuel.dev:$BUILD_NUMBER quay.imanuel.dev/imanuel/imanuel.dev:latest"
                    withDockerRegistry(credentialsId: 'quay.imanuel.dev', url: 'https://quay.imanuel.dev') {
                        sh "docker push quay.imanuel.dev/imanuel/imanuel.dev:$BUILD_NUMBER"
                        sh "docker push quay.imanuel.dev/imanuel/imanuel.dev:latest"
                    }
                }
            }
        }
    }
}
