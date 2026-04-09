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
