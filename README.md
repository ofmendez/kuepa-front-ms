# Prueba tecnica para Kuepa (FRONTEND)

## Publicado en

[https://kuepa-front-ms.pages.dev/](https://kuepa-front-ms.pages.dev/)

## Desarrollo

### Prerequisitos

- Bun

### Para instalar dependencias

```sh
bun i
```

### Para ejecutar entorno de desarrollo

Configurar el archivo .env.development tal como el archivo de referencia example.env.development.

```sh
bun run dev
```

abrir: <http://localhost:5173>

### Para desplegar

```sh
bun run build
```

Ejecutar en servidor:

```sh
bun dist/_worker.js
```

O usando Wrangler para Github pages con la cuenta configurada:

```sh
bunx wrangler pages deploy dist
```
