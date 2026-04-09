output "bucket_name" {
  value       = aws_s3_bucket.site.bucket
  description = "S3 bucket used for static site assets."
}

output "bucket_uri" {
  value       = "s3://${aws_s3_bucket.site.bucket}"
  description = "S3 URI for static site deployment."
}

output "cloudfront_distribution_id" {
  value       = aws_cloudfront_distribution.site.id
  description = "CloudFront distribution ID."
}

output "cloudfront_domain_name" {
  value       = aws_cloudfront_distribution.site.domain_name
  description = "CloudFront default domain name."
}
