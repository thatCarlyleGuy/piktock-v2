output "regions" {
  value = {
    slug: data.digitalocean_regions.available
  }
}