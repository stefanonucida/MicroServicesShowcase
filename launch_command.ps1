docker compose -f .\0-docker-compose.yml up -d
Start-Sleep -Seconds 3
docker compose -f .\1-docker-compose.yml up -d
Start-Sleep -Seconds 3
docker compose -f .\2-docker-compose.yml up -d
