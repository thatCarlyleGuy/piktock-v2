
module "do_database" {
  source                  = "../../modules/do-database"
  database_name           = var.database.name
  database_cluster_name   = var.database.cluster_name
  database_cluster_size   = var.database.cluster_size
  database_cluster_region = var.database.cluster_region
  database_user_name      = var.database.app_user_name
}

module "do_cms_service" {
  source = "../../modules/do-app"
  do_app_name = var.cms_service.do_app_name
  do_app_region = var.cms_service.do_app_region

  service_name = var.cms_service.name
  service_do_instance = var.cms_service.do_instance
  service_repo_branch = var.cms_service.repo_branch
  service_repo_url = var.cms_service.repo_url

  service_source_dir = var.cms_service.source_dir
  service_run_command = var.cms_service.run_command
  service_build_command = var.cms_service.build_command
  service_http_port = var.cms_service.http_port

  service_env_admin_jwt_secret = var.env_admin_jwt_secret
  service_env_database_url = var.env_database_url
  service_env_node_env = var.env_node_env
  service_env_port = var.env_port
}