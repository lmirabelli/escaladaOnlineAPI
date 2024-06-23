# API de Gestión de Tiendas

## Descripción

Esta API permite gestionar información de tiendas, incluyendo operaciones para agregar, obtener, eliminar y editar tiendas. Está construida con Node.js y Express, y utiliza MongoDB para el almacenamiento de datos.

## Estructura del Proyecto

El proyecto está organizado de la siguiente manera:

root
│ index.js # Archivo principal del servidor
│
├───controllers # Controladores de las rutas
│ shopController.js
│ addShopController.js
│ deleteShopController.js
│ putShopController.js
│
├───models # Modelos de Mongoose
│ schemaShops.js
│
├───routes # Definición de rutas
│ shopRoutes.js
│ addShopRoutes.js
│ deleteShopRoutes.js
│ putShopRoutes.js
│
└───db.js # Conexión a la base de datos

## Uso

### Rutas Disponibles

- **Agregar Tienda**
    - **URL:** `/addShop`
    - **Método:** `POST`
    - **Descripción:** Agrega una nueva tienda.
    - **Body Params:**
      ```json
      {
        "name": "Nombre de la tienda",
        "adress": "Dirección",
        "adressNumber": 123,
        "email": "email@ejemplo.com",
        "logo": "URL del logo",
        "days": ["Lunes", "Martes"],
        "hours": ["9:00-18:00"],
        "whatsapp": 1234567890,
        "category": "Categoría",
        "instagram": "@instagram",
        "facebook": "facebook.com/perfil",
        "tiktok": "@tiktok",
        "web": "www.ejemplo.com"
      }
      ```

- **Obtener Tienda por ID**
    - **URL:** `/shop/:id`
    - **Método:** `GET`
    - **Descripción:** Obtiene una tienda específica por su ID.

- **Eliminar Tienda**
    - **URL:** `/shop/:id`
    - **Método:** `DELETE`
    - **Descripción:** Elimina una tienda específica por su ID.

- **Editar Tienda**
    - **URL:** `/editShop/:id`
    - **Método:** `PUT`
    - **Descripción:** Edita una tienda específica por su ID.
    - **Body Params:** (Similar a Agregar Tienda)

- **Obtener Tiendas por Categoría**
    - **URL:** `/shops/:category`
    - **Método:** `GET`
    - **Descripción:** Obtiene tiendas filtradas por categoría.

- **Obtener Todas las Tiendas**
    - **URL:** `/`
    - **Método:** `GET`
    - **Descripción:** Obtiene todas las tiendas.