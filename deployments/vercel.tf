variable "vercel_token" {
    type = string
    sensitive = true
}

variable "fauna_token" {
    type = string
    sensitive = true
}




provider "vercel" {
  token = var.vercel_token
}

resource "vercel_project" "mercury" {
  name = "mercury"
  git_repository {
    type = "github"
    repo = "chronark/mercury"
  }
}

resource "vercel_secret" "fauna_token" {
  name  = "fauna_token"
  value = var.fauna_token
}

resource "vercel_env" "env" {
    project_id = vercel_project.mercury.id
  type  = "secret"
  key   = "FAUNA_TOKEN"
  value = vercel_secret.fauna_token.id
    target = ["production", "preview"]

}