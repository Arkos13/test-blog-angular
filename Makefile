terminal:
	docker exec -ti angular-node sh

up:
	docker-compose up -d

down:
	docker-compose down

build:
	docker-compose up -d --build
