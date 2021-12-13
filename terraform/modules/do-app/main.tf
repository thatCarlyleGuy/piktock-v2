resource "digitalocean_app" "do_service_app" {
  spec {
    name   = var.do_app_name
    region = var.do_app_region

    service {
      name               = var.service_name
      instance_count     = 1
      instance_size_slug = var.service_do_instance

      git {
        repo_clone_url = var.service_repo_url
        branch         = var.service_repo_branch
      }

      source_dir    = var.service_source_dir
      run_command   = var.service_run_command
      build_command = var.service_build_command

      env {
        key = "DATABASE_URL"
        value = var.service_env_database_url
      }
      env {
        key = "ADMIN_JWT_SECRET"
        value = var.service_env_admin_jwt_secret
      }
      env {
        key = "NODE_ENV"
        value = var.service_env_node_env
      }
      env {
        key = "DB_CA_CERT"
        value = var.service_env_db_ca_cert
      }
  }
}