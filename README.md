# piktock-v2
Piktock with more cloud providers

## Execution
### Digital Ocean:
```shell
### Install command line util
brew install doctl

### Authorize `doctl` with auth token when prompted
doctl auth init --context piktock-v2

### List instance sizes
doctl apps tier instance-size list --context piktock-v2

```

### Terraform:
For a given env:
```shell
# In the terraform folder:

# List available DO regions
terraform -chdir=./datasources/regions init
terraform -chdir=./datasources/regions plan -no-color > region-options.txt

# Plan server infra
export TF_VAR_do_token=api_token
export TF_VAR_env_admin_jwt_secret=env
export TF_VAR_env_database_url=env
export TF_VAR_env_node_env=env
export TF_VAR_env_port=env

terraform -chdir=./applications/server init
terraform -chdir=./applications/server plan \
   -var-file ./env/production.tfvars
terraform -chdir=./applications/server apply \
   -var-file ./env/production.tfvars
```

## Setting up vendors:
### Digital Ocean & Terraform
https://www.digitalocean.com/community/tutorials/how-to-use-terraform-with-digitalocean


## Vendors:
- Authentication and Authorization: Auth0
- Headless CMS: Contentful
- Cloud provider: Digital Ocean
- Static site generator: Next.js
- Static file hosting: Cloudflare
- Continuous integration: CircleCI

1. We build a static site.
    - When we push to a branch, CircleCI runs test on that branch.
    - If the tests pass, CircleCI builds our site into static resources.
    - CircleCi can deploy these static files to an environment managed by Cloudflare.
2. We serve static site from CDN.
    - Cloudflare hosts our static content in different DNS environments, e.g. including staging and production.
    - Each environment distributes our assets via a CDN.
3. Static site redirects user to Auth0 for authentication.
    - Certain endpoints require authentication, so the user is directed to authenticate via Aut0.
    - Static site and Auth0 perform a code exchange to retrieve the user's - user_id and access_token.
    - These are stored in-memory on the client.
    - When the access_token expires, this flow will happen again silently.
4. User makes query to API service using authentication token.
    - To access API data, the static site passes the user's access_token as a Bearer token with the request.
5. Api validates token and authorizes user's request.
    - ??
    - API service can pass along the access_token
6. If authorized, API service can query CMS for content.
7. Content is rendered with dynamic part of static site shell.