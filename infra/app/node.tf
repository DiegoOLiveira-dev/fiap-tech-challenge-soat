resource "kubernetes_deployment" "node_app_deployment" {
  metadata {
    name = "node-app-deployment"
    labels = {
      app = "node-app"
    }
  }
  spec {
    replicas = 2
    selector {
      match_labels = {
        app = "node-app"
      }
    }
    template {
      metadata {
        labels = {
          app = "node-app"
        }
      }
      spec {
        container {
          name = "node-app"
          image = "diegodev1996/postechfiap"
          port {
            container_port = 3000
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
          env {
            name = "MONGO_URL"
            value_from {
              config_map_key_ref {
                name = "node-configmap"
                key  = "mongo-db-url"
              }
            }
          }
        }
      }
    }
  }
}

resource "kubernetes_service" "node_app_service" {
  metadata {
    name = "node-app-service"
  }
  spec {
    selector = {
      app = "node-app"
    }
    port {
      protocol    = "TCP"
      port        = 3000
      target_port = 3000
    }
    type = "LoadBalancer"
  }
}

