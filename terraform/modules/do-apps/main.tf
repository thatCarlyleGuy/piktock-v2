variable app_name    { type = string }
variable app_region  { type = string }

variable app_service_name          { type = string }
variable app_service_do_instance   { type = string }
variable app_service_source_dir    { type = string }
variable app_service_run_command   { type = string }
variable app_service_build_command { type = string }

variable app_service_repo_url    { type = string }
variable app_service_repo_branch { type = string }

variable app_service_env_db_host          { type = string }
variable app_service_env_db_port          { type = string }
variable app_service_env_db_name          { type = string }
variable app_service_env_db_user_name     { type = string }
variable app_service_env_db_user_password { type = string }
variable app_service_env_db_schema        { type = string }
variable app_service_env_db_ssl_self      { type = string }
variable app_service_env_db_ca_cert       { type = string }
variable app_service_env_admin_jwt_secret { type = string }
variable app_service_env_node_env         { type = string }

resource "digitalocean_app" "do_service_app" {
  spec {
    name   = var.app_name
    region = var.app_region

    service {
      name               = var.app_service_name
      instance_count     = 1
      instance_size_slug = var.app_service_do_instance
      source_dir         = var.app_service_source_dir
      run_command        = var.app_service_run_command
      build_command      = var.app_service_build_command

      git {
        repo_clone_url = var.app_service_repo_url
        branch         = var.app_service_repo_branch
      }

      env {
        key   = "DATABASE_HOST"
        value = var.app_service_env_db_host
      }
      env {
        key   = "DATABASE_PORT"
        value = var.app_service_env_db_port
      }
      env {
        key   = "DATABASE_NAME"
        value = var.app_service_env_db_name
      }
      env {
        key   = "DATABASE_USERNAME"
        value = var.app_service_env_db_user_name
      }
      env {
        key   = "DATABASE_PASSWORD"
        value = var.app_service_env_db_user_password
      }
      env {
        key   = "DATABASE_SCHEMA"
        value = var.app_service_env_db_schema
      }
      env {
        key   = "DATABASE_SSL_SELF"
        value = var.app_service_env_db_ssl_self
      }
      env {
        key   = "DATABASE_CA_CERT"
        value = var.app_service_env_db_ca_cert
      }
      env {
        key   = "ADMIN_JWT_SECRET"
        value = var.app_service_env_admin_jwt_secret
      }
      env {
        key   = "NODE_ENV"
        value = var.app_service_env_node_env
      }
    }
  }
}
