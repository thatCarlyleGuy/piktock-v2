// Production DB
db_name      = "piktock-do-prod-db"
db_user_name = "strapiv4-app-user"
db_cluster_name   = "piktock-do-prod-db-cluster"
db_cluster_size   = "db-s-1vcpu-2gb"
db_cluster_region = "tor1"

// Production CMS Service
app_name                  = "piktock-do-prod-server-cms-app"
app_region                = "tor1"
app_service_name          = "piktock-do-prod-cms-service"
app_service_do_instance   = "basic-s"
app_service_source_dir    = "."
app_service_run_command   = "yarn workspace cms-service start"
app_service_build_command = "yarn workspace cms-service build"

app_service_repo_url    = "https://github.com/thatCarlyleGuy/piktock-v2.git"
app_service_repo_branch = "main"

app_service_env_db_schema        = "public"
app_service_env_db_ssl_self      = "false"
app_service_env_db_ca_cert       = "$${CA_CERT}"
app_service_env_node_env         = "production"
