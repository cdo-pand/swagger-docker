# Run dev docker containers.
init: docker-down-clear \
	docker-build docker-up \
	app-init

# Stop docker containers.
down: docker-down-clear

# Run docker containers from dev docker-compose file.
docker-up:
	docker-compose up --remove-orphans -d

# Stop docker containers. Remove orphan containers.
docker-down:
	docker-compose down --remove-orphans

# Stop docker containers. Remove orphan containers and clear volumes.
docker-down-clear:
	docker-compose down -v --remove-orphans

# Download docker images required for dev docker-compose file.
docker-pull:
	docker-compose pull

# Build docker images from dev docker-compose file.
docker-build:
	docker-compose build

# Force rebuild docker images from dev docker-compose file.
docker-rebuild:
	docker-compose build --no-cache

# Initial setup for app.
app-init: swagger-install

# node swagger npm install
swagger-install:
	docker-compose run --rm app-swagger-cli npm install

# Check js code style by rules
swagger-lint:
	docker-compose run --rm app-swagger-cli npm run eslint

# Fix js code style by rules
swagger-lint-fix:
	docker-compose run --rm app-swagger-cli npm run eslint-fix
