
# izzimovil-consulta-cuenta




## Authors

- [@Carlos Garcia](https://github.com/carlosGarciaMtz)


## Instalación
1. Instalar node 16 o mayor
2. tener claves para uso de aws cli (Seción IAM)
3. Instalar serverless de forma global:
    ```bash
    npm install -g serverless
    ```
4. configurar serverles
    ```bash
    serverless config credentials --provider aws --key <key> --secret <secret key> --profile <user>
    ```
## Environment Variables

para correr el proyecto, es necesario agregar las siguientes variables de entorno a un archivo .env

`ORING`
## Despliegue

Para desplegar en AWS Lambda:

```bash
    npm install -g serverless
```