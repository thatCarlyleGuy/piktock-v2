// Database
variable db_name           { type = string }
variable db_user_name      { type = string }
variable db_cluster_name   { type = string }
variable db_cluster_size   { type = string }
variable db_cluster_region { type = string }

// Apps
variable app_name    { type = string }
variable app_region  { type = string }

variable app_service_name          { type = string }
variable app_service_do_instance   { type = string }
variable app_service_source_dir    { type = string }
variable app_service_run_command   { type = string }
variable app_service_build_command { type = string }

variable app_service_repo_url    { type = string }
variable app_service_repo_branch { type = string }

variable app_service_env_db_schema        { type = string }
variable app_service_env_db_ssl_self      { type = string }
variable app_service_env_db_ca_cert       { type = string }
variable app_service_env_admin_jwt_secret { type = string }
variable app_service_env_node_env         { type = string }

module "do_database" {
  source       = "./modules/do-database"

  db_name      = var.db_name
  db_user_name = var.db_user_name

  db_cluster_name   = var.db_cluster_name
  db_cluster_size   = var.db_cluster_size
  db_cluster_region = var.db_cluster_region
}

module "do_cms_service_app" {
  source = "./modules/do-apps"

  app_name = var.app_name
  app_region = var.app_region

  app_service_name = var.app_service_name
  app_service_do_instance = var.app_service_do_instance
  app_service_source_dir = var.app_service_source_dir
  app_service_run_command = var.app_service_run_command
  app_service_build_command = var.app_service_build_command

  app_service_repo_url = var.app_service_repo_url
  app_service_repo_branch = var.app_service_repo_branch

  app_service_env_db_host = module.do_database.db_host
  app_service_env_db_port = module.do_database.db_port
  app_service_env_db_name = module.do_database.db_name
  app_service_env_db_user_name = module.do_database.db_user_name
  app_service_env_db_user_password = module.do_database.db_user_password
  app_service_env_db_ssl_self = var.app_service_env_db_ssl_self
  app_service_env_db_ca_cert = var.app_service_env_db_ca_cert
  app_service_env_db_schema = var.app_service_env_db_schema
  app_service_env_admin_jwt_secret = var.app_service_env_admin_jwt_secret
  app_service_env_node_env = var.app_service_env_node_env
}