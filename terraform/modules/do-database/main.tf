resource "digitalocean_database_db" "do_pg_database" {
  cluster_id = digitalocean_database_cluster.do_db_cluster.id
  name       = var.database_name
}

resource "digitalocean_database_cluster" "do_db_cluster" {
  name       = var.database_cluster_name
  engine     = "pg"
  version    = "11"
  size       = var.database_cluster_size
  region     = "nyc1"
  node_count = 1
}