run-watcher:
	npm run local

compile-dev:
	gradle -Dspring.profiles.active=development build

compile-prod:
	gradle -Dspring.profiles.active=production build
