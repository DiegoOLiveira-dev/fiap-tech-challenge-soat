# main.tf

# Import ConfigMaps
module "configmaps" {
  source = "./configmaps"
}

# Import Databases
module "databases" {
  source = "./db"
}

# Import Apps
module "apps" {
  source = "./app"
  depends_on = [module.databases]
}
