
module "do_database" {
  source = "../../modules/do-database"
  database_name = var.database.name
  database_cluster_name = var.database.cluster_name
  database_cluster_size = var.database.cluster_size
}
