resource "kubernetes_config_map" "node_configmap" {
  metadata {
    name = "node-configmap"
  }
  data = {
    mongo-db-url = "mongodb+srv://mongo:mongoteste@fiap.wn2gezr.mongodb.net/?retryWrites=true&w=majority&appName=FIAP"
  }
}
