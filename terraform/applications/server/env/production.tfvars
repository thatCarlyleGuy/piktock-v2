database = {
  "name": "piktock-do-prod-db",
  "cluster_name": "piktock-do-prod-db-cluster",
  "cluster_size": "db-s-1vcpu-2gb"
  "cluster_region": "tor1"
  "app_user_name": "strapiv4-app-user"
}

cms_service = {
  "do_app_name": "piktock-do-prod-server-cms-app"
  "do_app_region": "tor1"

  "name": "piktock-do-prod-cms-service"
  "do_instance": "basic-s"

  "repo_url": "https://github.com/thatCarlyleGuy/piktock-v2.git"
  "repo_branch": "main"
  "source_dir": "."

  "run_command": "yarn workspace server-cms start"
  "build_command": "yarn workspace server-cms build"

  "env_node_env": "production"
}