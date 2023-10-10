
default:
	npm run ts

mongo:
	docker compose up mongodb -d

env:
	@cp .env.sample .env