variable "aws_region" {
  type        = string
  description = "AWS region for the static site infrastructure."
  default     = "eu-north-1"
}

variable "project_name" {
  type        = string
  description = "Project name used in resource naming."
  default     = "cloudini-web"
}

variable "terraform_state_bucket_name" {
  type        = string
  description = "S3 bucket name used for Terraform state."
  default     = "cloudini-terraform-state"
}

variable "site_domain_name" {
  type        = string
  description = "Custom domain name for the website."
  default     = "cloudini.org"
}

variable "site_certificate_arn" {
  type        = string
  description = "ACM certificate ARN for the custom domain. Must be in us-east-1 for CloudFront."
}
