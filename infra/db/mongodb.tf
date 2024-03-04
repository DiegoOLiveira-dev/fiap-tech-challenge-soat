resource "kubernetes_deployment" "mongodb_deployment" {
  metadata {
    name = "mongodb-deployment"
  }
  spec {
    replicas = 1
    selector {
      match_labels = {
        app = "mongodb"
      }
    }
    template {
      metadata {
        labels = {
          app = "mongodb"
        }
      }
      spec {
        container {
          name = "mongodb"
          image = "mongo"
          env {
            name  = "MONGO_INITDB_ROOT_USERNAME"
            value = "admin"
          }
          env {
            name  = "MONGO_INITDB_DATABASE"
            value = "auth"
          }
          env {
            name  = "MONGO_INITDB_ROOT_PASSWORD"
            value = "pass"
          }
          port {
            container_port = 27017
          }
          volume_mount {
            name       = "mongodb-data"
            mount_path = "/data/db"
          }
          resources {
            limits = {
              cpu    = "0.5"
              memory = "512Mi"
            }
            requests = {
              cpu    = "250m"
              memory = "50Mi"
            }
          }
        }
        volume {
          name = "mongodb-data"
        }
      }
    }
  }
}

resource "kubernetes_service" "mongodb_service" {
  metadata {
    name = "mongodb-service"
  }

  spec {
    selector = {
      app = "mongodb"
    }

    port {
      protocol    = "TCP"
      port        = 27017
      target_port = 27017
    }

    type = "LoadBalancer"
  }
}
