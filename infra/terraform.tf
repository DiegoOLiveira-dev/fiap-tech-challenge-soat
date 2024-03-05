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
  host                   = "https://443ABBE919188DE6BA56A71E55B976A8.gr7.us-east-1.eks.amazonaws.com"
  cluster_ca_certificate = base64decode("LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSURCVENDQWUyZ0F3SUJBZ0lJSWQ3NWNMdE1QTXN3RFFZSktvWklodmNOQVFFTEJRQXdGVEVUTUJFR0ExVUUKQXhNS2EzVmlaWEp1WlhSbGN6QWVGdzB5TkRBek1EUXhPREV3TXpSYUZ3MHpOREF6TURJeE9ERTFNelJhTUJVeApFekFSQmdOVkJBTVRDbXQxWW1WeWJtVjBaWE13Z2dFaU1BMEdDU3FHU0liM0RRRUJBUVVBQTRJQkR3QXdnZ0VLCkFvSUJBUUM5TS9YaGhOYVlYOVhtcG9yU2YvRGZ1clorN2lzaXJ0cjlVTWt2NWhsaTBuWTUwRjFYdXBhdlErekkKSlZ5anpnK3VqMFEvRzN2WGhUQXo3WXV0Ykd5MUU2SWpzdDh0YmxUdldWZUpRaFhJS1czV3pkMlM0eHVVUGZOMQptQ0VoZ1FhYU9qVDFrS0tVclpRU0JvMGdRdWpUbnkvTU1scU10dlliUXNZV1c4UkN3WmVJV2cxSHhYUjVLQ3UvCmU3NEdVSE1FdU5DVmVySHlLbzM4QmlEZFJlMlVNdjkwYnBMRXA4dEVSZlVHV3NpQ1BqZVVkeGowVElrd29NQi8KRTVrZEkrT20vNm9aUk5qa25meWR2TWxURVZLaTVDS2VVbFE2VTRGK2hxcngrQnVkWStFcllmc1ArZW5WUVlQOAptWVYrc0srb3lNVEFuZTlHcnl2QUY0WEhLdEc5QWdNQkFBR2pXVEJYTUE0R0ExVWREd0VCL3dRRUF3SUNwREFQCkJnTlZIUk1CQWY4RUJUQURBUUgvTUIwR0ExVWREZ1FXQkJSNTU3YVZFZTVpM01CVmptTjRaWlIvVm5HTVdUQVYKQmdOVkhSRUVEakFNZ2dwcmRXSmxjbTVsZEdWek1BMEdDU3FHU0liM0RRRUJDd1VBQTRJQkFRQzVPRmVnL05tcQpTZG9WaEtPendTdGlwWE54Rzc4cjZUWmNQNnpVMmN6WWU3T0sySG94Vmd1NUlzWXhVNmVaSVA5eHNDK1hGdmNtCmwvcVpCY1Fib0RTdVBYN2ZST29NY1EzT3M3dzFobHhXQ1FmU082cGM2RFFyWTFkMk5PWmJiR2ZGZTQrQVR6VmYKTVJsU1lvNEdFdThWekNvbHRVUXh5dDl1K3BFSm9RL2dJb3lSaXZCc0hwYVJxUm1oYU5kbHVqcmRzUmpWWXpIbQpTNUpPS1BWQzh4SVcvRmQ5akJjN2xlVk9mV1JIVVAxa1BWczJ3MU9HWlpaZHNXVVZCZFhPTndYL0xmUzZMQ0VkCmtKMHVNblpKUmorQVYvTHhLa29FcG5aSDk1ME1PZ3pqNmIzZUVlbzR2YS9QU0o4MkhWRjVEcGp2T1RDM25qSUMKT3NhdzljckJCTkhECi0tLS0tRU5EIENFUlRJRklDQVRFLS0tLS0K")

  exec {
    api_version = "client.authentication.k8s.io/v1beta1"
    command     = "aws"
    # This requires the awscli to be installed locally where Terraform is executed
    args = ["eks", "get-token", "--cluster-name", "education-eks-2osN4fjs"]
  }
}

