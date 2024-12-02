# Integrador

```.env
DATABASE_URL="postgresql://user:password@localhost:5432/mydatabase"
JWT_SECRET="senhafoda"
```


## How to run

```
docker compose up -d --build
npm run generate
npm run migrate
npm run dev
```