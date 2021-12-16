variable db_name           { type = string }
variable db_user_name      { type = string }
variable db_cluster_name   { type = string }
variable db_cluster_size   { type = string }
variable db_cluster_region { type = string }

resource "digitalocean_database_db" "do_pg_database" {
  cluster_id = digitalocean_database_cluster.do_db_cluster.id
  name       = var.db_name
}

resource "digitalocean_database_cluster" "do_db_cluster" {
  name       = var.db_cluster_name
  engine     = "pg"
  version    = "11"
  size       = var.db_cluster_size
  region     = var.db_cluster_region
  node_count = 1
}

resource "digitalocean_database_user" "do_pg_database_user" {
  cluster_id = digitalocean_database_cluster.do_db_cluster.id
  name       = var.db_user_name
}

output "db_host" {
  value = digitalocean_database_cluster.do_db_cluster.host
}
output "db_port" {
  value = digitalocean_database_cluster.do_db_cluster.port
}
output "db_name" {
  value = digitalocean_database_db.do_pg_database.name
}
output "db_user_name" {
  value = digitalocean_database_user.do_pg_database_user.name
}
output "db_user_password" {
  value = digitalocean_database_user.do_pg_database_user.password
  sensitive = true
}
