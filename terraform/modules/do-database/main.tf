resource "digitalocean_database_db" "do_pg_database" {
  cluster_id = digitalocean_database_cluster.do_db_cluster.id
  name       = var.database_name
}

resource "digitalocean_database_cluster" "do_db_cluster" {
  name       = var.database_cluster_name
  engine     = "pg"
  version    = "11"
  size       = var.database_cluster_size
  region     = var.database_cluster_region
  node_count = 1
}

resource "digitalocean_database_user" "do_pg_database_user" {
  cluster_id = digitalocean_database_cluster.do_db_cluster.id
  name       = var.database_user_name
}