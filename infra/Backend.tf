terraform {
  backend "s3" {
    bucket = "terraform-state-fiap"
    key    = "Prod/app/terraform.tfstate"
    region = "us-east-1"
  }
}