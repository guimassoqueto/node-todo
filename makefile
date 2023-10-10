
default:
	npm run ts

build: 
	npm run build

mongo:
	docker compose up mongodb -d

env:
	@cp .env.sample .env