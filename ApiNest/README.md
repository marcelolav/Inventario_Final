# APINest

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## Descripción

API/REST desarrollada sobre NEST JS para dar servicio a sistema de control de inventario Versión 2.0

## Instalación

```bash
$ npm install
```

Crear archivo de configuración en la raiz del proyecto llamado ormconfig.json de las siguientes caracteristicas

```
{
  "type": "mysql",
  "host": "localhost",
  "port": 3306,
  "username": "su usuario para acceso a mysql",
  "password": "su contraseña para acceso a mysql",
  "database": "ecom",
  "entities": ["src/**/**.entity{.ts,.js}"],
  "synchronize": true
}

```

## Ejecución de la APP

```bash
# Modo Desarrollo
$ npm run start

# Modo Desarrollo con visualización de cambios en tiempo real
$ npm run start:dev

# Modo Producción
$ npm run start:prod
```

## Documentación de API (Endpoints)

Para acceder a todos los endpoints el sistema cuenta con Swagger. Una vez iniciada la API puede acceder a todos los endpoints en la dirección:

```
http://localhost:3000/docs/
```

O bien si se encuentra instalado por default hacer [click aqui...](http://localhost:3000/docs#/)

## Pruebas

```bash
# Pruebas Unitarias
$ npm run test

# Pruebas e2e
$ npm run test:e2e

# Pruebas coverage
$ npm run test:cov
```

## Soporte

Nest es un proyecto de código abierto licenciado por MIT. Puede crecer gracias al apoyo de los patrocinadores. Si quieres unirte a ellos, por favor [leer mas aquí](https://docs.nestjs.com/support).

La API fué desarrollada y se encuentra en etapa de pruebas por [Marcelo Lavandeira](mailto:marcelo.lavandeira@gmail.com)

## Contactos

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## Licencia NEST

Nest posee una licencia de tipo [MIT licensed](LICENSE).
