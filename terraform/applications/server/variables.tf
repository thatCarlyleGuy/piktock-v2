
#db-s-1vcpu-1gb	1 GB	1 vCPU	10 GB	False
#db-s-1vcpu-2gb	2 GB	1 vCPU	25 GB	True
#db-s-2vcpu-4gb	4 GB	2 vCPU	38 GB	True
#db-s-4vcpu-8gb	8 GB	4 vCPU	115 GB	True
#db-s-6vcpu-16gb	16 GB	6 vCPU	270 GB	True
#db-s-8vcpu-32gb	32 GB	8 vCPU	580 GB	True
#db-s-16vcpu-64gb	64 GB	16 vCPU	1.12 TB	True

variable "do_token" {}
variable "env_admin_jwt_secret" {}
variable "env_database_url" {}
variable "env_node_env" {}
variable "env_port" {}
variable "env_db_ca_cert" {}

variable "database" {
  type = object({
    name           = string
    app_user_name  = string
    cluster_name   = string
    cluster_size   = string
    cluster_region = string
  })

  description = "Database config"
}

variable "cms_service" {
  type = object({
    do_app_name      = string
    do_app_region    = string

    name             = string
    do_instance      = string
    repo_url         = string
    repo_branch      = string
    source_dir       = string
    run_command      = string
    build_command    = string
  })
}