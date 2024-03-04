resource "kubernetes_config_map" "node_configmap" {
  metadata {
    name = "node-configmap"
  }
  data = {
    mongo-db-url = "mongodb://admin:pass@mongodb-service:27017"
  }
}
