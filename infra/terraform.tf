# Copyright (c) HashiCorp, Inc.
# SPDX-License-Identifier: MPL-2.0

terraform {

  # cloud {
  #   workspaces {
  #     name = "learn-terraform-eks"
  #   }
  # }

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.7.0"
    }

    random = {
      source  = "hashicorp/random"
      version = "~> 3.5.1"
    }

    tls = {
      source  = "hashicorp/tls"
      version = "~> 4.0.4"
    }

    cloudinit = {
      source  = "hashicorp/cloudinit"
      version = "~> 2.3.2"
    }
  }

  required_version = "~> 1.3"
}

provider "kubernetes" {
  host                   = "https://C44896BA15BD9AD3E0470BACE5C3105E.gr7.us-east-1.eks.amazonaws.com"
  cluster_ca_certificate = base64decode("LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSURCVENDQWUyZ0F3SUJBZ0lJV1BLUFNpakJmVEF3RFFZSktvWklodmNOQVFFTEJRQXdGVEVUTUJFR0ExVUUKQXhNS2EzVmlaWEp1WlhSbGN6QWVGdzB5TkRBek1UY3hOekkxTlRSYUZ3MHpOREF6TVRVeE56TXdOVFJhTUJVeApFekFSQmdOVkJBTVRDbXQxWW1WeWJtVjBaWE13Z2dFaU1BMEdDU3FHU0liM0RRRUJBUVVBQTRJQkR3QXdnZ0VLCkFvSUJBUUNpTUZ6RHBiRXpQUDRXNTNBcEZ2ZEErK1VISzFNU3piNmFIL0QvZENLRkxqUkVscXlQWjV4ZWJYUTEKMzZoSzhDUXQ0MHNxZENFM2R0OTYrZjdIYmFHdUl2eS9hL3dBTUVxakhtUkFaalV2ckRTYVZNR1BVMTZ2QUF6OApHVFN3VTJpa3pqWG5XOVRvc3BZT2ZTcmg3MU0yK1dzSFJ4dG1SYS90ZWhwR1loYnRMR3k4SUlQd0tCM3R2TTN6CmloZGV6aFVjckJ4eDJHOS91cVQ5OG55OENmaFhtZlk1ek40ZzFFb05NTmFUNTFKT0ltNEZ0eUtweHRJREFjb3IKUit5Z3pUSHhBTFZaSlI1ajhuVktwZkJJNkpxdWFuRnlWTEcrem5VTUduU1FxVm5WNiswTjlxMkFIMitzZC9SZwpXMzJyTjZ6ejZzeVJPS3dzaUJQVlc1TkVuTUhoQWdNQkFBR2pXVEJYTUE0R0ExVWREd0VCL3dRRUF3SUNwREFQCkJnTlZIUk1CQWY4RUJUQURBUUgvTUIwR0ExVWREZ1FXQkJTOUY1VkRibVoxTzAzNTB0c3hUeDc5MjlpcEl6QVYKQmdOVkhSRUVEakFNZ2dwcmRXSmxjbTVsZEdWek1BMEdDU3FHU0liM0RRRUJDd1VBQTRJQkFRQWRzV2lzWkFHegpwK2JJenlvQnE3YjNFbUxiaUtNZGpySFJ1Tk8wY05FREFrVUNrN0RkQ3k5em5va1UxSitnNXIvMm9RKzd6Q1ByCmdCcDExM3p3SThyMi9mTUUvcUNFRy8waEdtVlZoRHBMNFdsNE5BYlNwR3Z3ODdhQlNuSDN3Q3lhNUZtaHE4aWMKbFZFdXUwTitDQzluQ0tta2FaeUpISkJ0Yy9SMlpFaHVmYzB6dk53Y2hiRWxXUlRmaDBBeWV3S2hWM2p0d3NJQgpwY2ZkRTZXZ2kyOEtCeE1XUTRIOUlCekFXa3Q3bXg4bHVLdC9hRUdRK3pLN1M2bHQrR0pkSk50N3JOdDNXY3VrCmxGSG8wck1Ed3lZRnpZdU5WUFVGd3hHRlpJRGt5QmFEa3FsNnFoUm5ZY3F5REJpdGJkUGtPYU1vNUswWGpIK20KdkxjUWxYK0xNU2RNCi0tLS0tRU5EIENFUlRJRklDQVRFLS0tLS0K")

  exec {
    api_version = "client.authentication.k8s.io/v1beta1"
    command     = "aws"
    # This requires the awscli to be installed locally where Terraform is executed
    args = ["eks", "get-token", "--cluster-name", "education-eks-1QDUa7Y0"]
  }
}

