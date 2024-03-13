# main.tf

provider "aws" {
  region = "us-east-1"
}

# Import ConfigMaps
module "configmaps" {
  source = "./configmaps"
}

# Import Databases
# module "databases" {
#  source = "./db"
# }

# Import Apps
module "apps" {
  source = "./app"
}
