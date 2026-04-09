terraform {
  backend "s3" {
    bucket  = "cloudini-terraform-state"
    key     = "web/terraform.tfstate"
    region  = "eu-north-1"
    encrypt = true
  }
}
