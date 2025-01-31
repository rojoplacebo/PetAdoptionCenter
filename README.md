# MEAN-PetStore

Aplicacion Demo implementada como parte del curso Fullstack-Mean

Se trata de una aplicacion para gestionar las citas a una imaginaria clinica veterinaria.

Utilizaremos la pila MEAN para implementar la gestion de Clientes/Mascotas y dar de alta Citas en un Calendario.

# Instalación

```bash
git clone https://github.com/Curso-Fullstack-MEAN-Octubre2017/AdrianBR2
cd MEAN-PetStore
npm install
npm start

```


# Arquitectura Mean: Mongodb + ExpressJs + AngularJs + NodeJs
![Arquitectura Mean](https://github.com/Curso-Fullstack-MEAN-Octubre2017/AdrianBR2/blob/master/imagenes%20README/Diagrama_de_arquitectura.jpg)

## El navegador
Programa para acceder y visualizar contenido web.

## AngularJS
Framework de JavaScript, que facilita la creación de SPA(Single Page Application). En mi aplicación se ejecuta en el cliente, aunque puede ejecutarse en una máquina servidor bajo Node.js.
 
## El Servidor físico
Máquina de procesamiento que provee servicios web a clientes HTTP: apps móviles, navegadores web, otros sistemas.

## NodeJs
Entorno de ejecución para la capa de servidor en una arquitectura cliente-servidor.

## Express
Framework para Node.js que provee de una interfaz más cómoda, que la que provee el propio Node.js, para implementar servicios web, además de proveer otras características.

## Mongoose
Driver para conectarse y hacer peticiones desde una aplicación Node.js a un servidor de bases de datos MongoDB.

## Internet
Red de computadores mundial que opera bajo los protocolos TCP/IP. La nube encima de los enlaces de comunicación significa que la comunicación entre los procesos se realiza utilizando la infraestructura proporcionada por Internet. En este caso, la capa de aplicación por encima de TCP/IP utiliza el protocolo HTTP para comunicarse entre Node y el navegador.


## MongoDB
Servidor de Bases de datos NoSQL. En mi diagrama de arquitectura se ejecuta en la misma máquina servidor que la aplicación Node.js, aunque también es posible que se aloje en una máquina servidor diferente.


# El Proyecto

Se trata de una aplicacion para gestionar las citas a una imaginaria clinica veterinaria.

# Modelo de datos

El principal objeto del modelo de negocio es:

- Cita, que teniendo una 
	-  fecha y hora de inicio y fin, estaria 
	-  relacionada con una sola mascota, que a su vez estaria 
		-  relacionada con un solo cliente.


![Modelo de Datos](https://raw.githubusercontent.com/Curso-Fullstack-MEAN-Octubre2017/MEAN-PetStore/master/public/images/modelo-datos.png)


## RESTfull Services API

Esta es una lista completa de los servicios web REST publicados con ExpressJs

| Metodo  |  URL  |  Body  |  Response |
|---|---|---|---|
|  GET  |  api/clientes  |  << vacio >>  |  res.json([clientes]) |
|  GET  |  api/clientes/:id  |  << vacio >>  |  res.json(cliente) |
|  GET  |  api/clientes/:id/mascotas  |  << vacio >>  |  res.json(mascotas) |
|  GET  |  api/clientes/with/mascotas  |  << vacio >>  |  res.json(clientesConMascotas) |
|  POST  |  api/clientes  |  {JSON}  |  res.json(clienteCreado) |
|  PUT  |  api/clientes/:id  |  {JSON}  |  res.json(clienteActualizado)|
|  GET  |  api/mascotas/:id  |  << vacio >>  |  res.json(mascota) |
|  POST  |  api/mascotas  |  {JSON}  |  res.json(mascotaCreada) |
|  PUT  |  api/mascotas/:id  |  {JSON}  |  res.json(mascotaActualizada) |
|  DELETE  |  api/mascotas/:id  |  {JSON}  |  res.sendStatus(200); //OK |
|  GET  |  api/citas  |  << vacio >>  |  res.json(citas) |
|  GET  |  api/citas/:id  |  << vacio >>  |  res.json(cita)|
|  GET  |  api/citas/:fromdate/:todate  |  << vacio >>  |  res.json(citas) |
|  POST  |  api/citas  |  {JSON}  |  res.json(citaCreada)|
|  PUT  |  api/citas/:id  |  {JSON}  |  res.json(citaActualizada)|


# Implementación entidad Cliente

- 1.- Crear Schema con mongoose para Cliente. ![Schema Cliente](https://github.com/Curso-Fullstack-MEAN-Octubre2017/AdrianBR2/blob/84ab8bd57c9c99325db3ac6b187787cc3fcb673f/appserver/models/clientes.js#L4)
- 2.- Crear rutas REST para hacer un CRUD sobre la entidad Cliente.
![líneas 12 a 15, appserver/routes/index.js](https://github.com/Curso-Fullstack-MEAN-Octubre2017/AdrianBR2/blob/84ab8bd57c9c99325db3ac6b187787cc3fcb673f/appserver/routes/index.js#L12)
- 2.1.- Ruta Rest para recuperar clientes.
- 2.2- Ruta Rest para recuperar cliente por id.
- 2.3.- Ruta Rest para guardar cliente.
- 2.4.- Ruta Rest para actualizar cliente.
- 3.- Funciones que operan sobre la base de datos para guardar, recuperar y actualizar clientes. Están registradas a las rutas en la definición de estas.
- 3.1- Función recuperarClientes. ![linea 6, appserver/controllers/clientes.js](https://github.com/Curso-Fullstack-MEAN-Octubre2017/AdrianBR2/blob/84ab8bd57c9c99325db3ac6b187787cc3fcb673f/appserver/controllers/clientes.js#L6)
- 3.2- Función recuperarClientesById. ![linea 18, appserver/controllers/clientes.js](https://github.com/Curso-Fullstack-MEAN-Octubre2017/AdrianBR2/blob/84ab8bd57c9c99325db3ac6b187787cc3fcb673f/appserver/controllers/clientes.js#L18)
- 3.3- Función guardarCliente. ![linea 32, appserver/controllers/clientes.js](https://github.com/Curso-Fullstack-MEAN-Octubre2017/AdrianBR2/blob/84ab8bd57c9c99325db3ac6b187787cc3fcb673f/appserver/controllers/clientes.js#L32)
- 3.4- Función actualizarCliente. ![linea 48, appserver/controllers/clientes.js](https://github.com/Curso-Fullstack-MEAN-Octubre2017/AdrianBR2/blob/84ab8bd57c9c99325db3ac6b187787cc3fcb673f/appserver/controllers/clientes.js#L48)
- 4.- Crear componentes en Angular para que el usuario pueda realizar las operaciones CRUD sobre la entidad Cliente. Los componentes son registrados en el archivo ![app.module.js](https://github.com/Curso-Fullstack-MEAN-Octubre2017/AdrianBR2/blob/master/public/app/app.module.js). 
Y la configuración de las rutas angular asociadas a cada componente registrado estará en el archivo ![app.config.js](https://github.com/Curso-Fullstack-MEAN-Octubre2017/AdrianBR2/blob/master/public/app/app.config.js). Todos los archivos de angular serán enlazados en el archivo ![index.html](https://github.com/Curso-Fullstack-MEAN-Octubre2017/AdrianBR2/blob/master/public/index.html) dentro de  la etiqueta <head>.
- 4.1.- Componente para mostrar lista de clientes. 
  Creado en el archivo  ![listaClientesModule.component.js](https://github.com/Curso-Fullstack-MEAN-Octubre2017/AdrianBR2/blob/master/public/app/listaClientesModule/listaClientesModule.component.js)
  Plantilla html del componente ![listaClientesModule.html](https://github.com/Curso-Fullstack-MEAN-Octubre2017/AdrianBR2/blob/master/public/app/listaClientesModule/listaClientesModule.html)
- 4.2.- Componente para guardar cliente.
	Creado en el archivo ![insertarClienteModule.component.js](https://github.com/Curso-Fullstack-MEAN-Octubre2017/AdrianBR2/blob/master/public/app/actualizarClienteModule/actualizarClienteModule.component.js)
	Plantilla html del componente ![insertarClienteModule.html](https://github.com/Curso-Fullstack-MEAN-Octubre2017/AdrianBR2/blob/master/public/app/insertarClienteModule/insertarClienteModule.html)
- 4.3.- Componente para actualizar cliente.
	Creado en el archivo ![actualizarClienteModule.component.js](https://github.com/Curso-Fullstack-MEAN-Octubre2017/AdrianBR2/blob/master/public/app/actualizarClienteModule/actualizarClienteModule.component.js)
	Plantilla html del componente ![actualizarClienteModule.html](https://github.com/Curso-Fullstack-MEAN-Octubre2017/AdrianBR2/blob/master/public/app/actualizarClienteModule/actualizarClienteModule.html)
- 4.4.- Componente para mostrar datos cliente.
	Creado en el archivo ![clienteDetalleModule.component.js](https://github.com/Curso-Fullstack-MEAN-Octubre2017/AdrianBR2/blob/master/public/app/clienteDetalleModule/clienteDetalleModule.component.js)
	Plantilla html del componente ![clienteDetalleModule.html](https://github.com/Curso-Fullstack-MEAN-Octubre2017/AdrianBR2/blob/master/public/app/clienteDetalleModule/clienteDetalleModule.html)
	

# Integración en la aplicación de las tareas propuestas

## 1.-Creación de directivas de AngularJS
![directiva entradaDatos para formularios](https://github.com/Curso-Fullstack-MEAN-Octubre2017/AdrianBR2/blob/master/public/app/directives/formulario-directives.js)

![uso de la directiva entradaDatos en el formulario insertar cliente](https://github.com/Curso-Fullstack-MEAN-Octubre2017/AdrianBR2/blob/55bfe699a7e47c70ee806439f8cb9b69a731c1bb/public/app/insertarClienteModule/insertarClienteModule.html#L2)


## 2.-Validaciones en cliente y servidor con librería validate.js
![validación al insertar una mascota en el cliente](https://github.com/Curso-Fullstack-MEAN-Octubre2017/AdrianBR2/blob/10e6a72684e7bf2fbc30547c09c2e5b525ca8c76/public/app/insertarMascotaModule/insertarMascotaModule.component.js#L22)

![validación al insertar una mascota en el servidor](https://github.com/Curso-Fullstack-MEAN-Octubre2017/AdrianBR2/blob/38302e54ecb6bd8320ea8f0f3755111214c91f60/appserver/controllers/mascota.js#L32)


## 3.-Creación de servicio en AngularJS
![servicio que recupera mapa de citas del servidor](https://github.com/Curso-Fullstack-MEAN-Octubre2017/AdrianBR2/blob/master/public/app/services/calendarioCitas-service.js)

![utilización del servicio que recupera mapa de citas del servidor](https://github.com/Curso-Fullstack-MEAN-Octubre2017/AdrianBR2/blob/55bfe699a7e47c70ee806439f8cb9b69a731c1bb/public/app/calendarioCitasModule/calendarioCitasModule.component.js#L19)


## 4.-Comunicación entre componentes mediante eventos
Eventos en componente citasPadreModule:
![manejador evento cita:irModificarCitaClick](https://github.com/Curso-Fullstack-MEAN-Octubre2017/AdrianBR2/blob/10e6a72684e7bf2fbc30547c09c2e5b525ca8c76/public/app/citasPadreModule/citasPadreModule.component.js#L9)
![transmisión evento cita:irModificarCita](https://github.com/Curso-Fullstack-MEAN-Octubre2017/AdrianBR2/blob/10e6a72684e7bf2fbc30547c09c2e5b525ca8c76/public/app/citasPadreModule/citasPadreModule.component.js#L10)
![manejador evento cita:irCrearCitaClick](https://github.com/Curso-Fullstack-MEAN-Octubre2017/AdrianBR2/blob/10e6a72684e7bf2fbc30547c09c2e5b525ca8c76/public/app/citasPadreModule/citasPadreModule.component.js#L12)
![transmisión evento cita:irCrearCita](https://github.com/Curso-Fullstack-MEAN-Octubre2017/AdrianBR2/blob/10e6a72684e7bf2fbc30547c09c2e5b525ca8c76/public/app/citasPadreModule/citasPadreModule.component.js#L13)
![manejador evento cita:citaGuardadaExito](https://github.com/Curso-Fullstack-MEAN-Octubre2017/AdrianBR2/blob/10e6a72684e7bf2fbc30547c09c2e5b525ca8c76/public/app/citasPadreModule/citasPadreModule.component.js#L15)
![transmisión evento cita:refrescarHorarioCitas](https://github.com/Curso-Fullstack-MEAN-Octubre2017/AdrianBR2/blob/10e6a72684e7bf2fbc30547c09c2e5b525ca8c76/public/app/citasPadreModule/citasPadreModule.component.js#L16)
![manejador evento cita:citaActualizadaExito](https://github.com/Curso-Fullstack-MEAN-Octubre2017/AdrianBR2/blob/10e6a72684e7bf2fbc30547c09c2e5b525ca8c76/public/app/citasPadreModule/citasPadreModule.component.js#L18)
![transmisión evento cita:refrescarHorarioCitas](https://github.com/Curso-Fullstack-MEAN-Octubre2017/AdrianBR2/blob/10e6a72684e7bf2fbc30547c09c2e5b525ca8c76/public/app/citasPadreModule/citasPadreModule.component.js#L19)


Eventos en componente actualizarCitaModule:
![manejador evento cita:irModificarCita](https://github.com/Curso-Fullstack-MEAN-Octubre2017/AdrianBR2/blob/10e6a72684e7bf2fbc30547c09c2e5b525ca8c76/public/app/citasPadreModule/actualizarCitaModule/actualizarCitaModule.component.js#L10)
![emisión evento cita:citaActualizadaExito](https://github.com/Curso-Fullstack-MEAN-Octubre2017/AdrianBR2/blob/10e6a72684e7bf2fbc30547c09c2e5b525ca8c76/public/app/citasPadreModule/insertarCitaModule/insertarCitaModule.component.js#L37)

Eventos en componente insertarCitaModule:
![manejador evento cita:irCrearCita](https://github.com/Curso-Fullstack-MEAN-Octubre2017/AdrianBR2/blob/10e6a72684e7bf2fbc30547c09c2e5b525ca8c76/public/app/citasPadreModule/insertarCitaModule/insertarCitaModule.component.js#L10)
![emisión evento cita:citaGuardadaExito](https://github.com/Curso-Fullstack-MEAN-Octubre2017/AdrianBR2/blob/10e6a72684e7bf2fbc30547c09c2e5b525ca8c76/public/app/citasPadreModule/insertarCitaModule/insertarCitaModule.component.js#L37)


Eventos en componente horarioCitasModule:
![manejador evento cita:refrescarHorarioCitas](https://github.com/Curso-Fullstack-MEAN-Octubre2017/AdrianBR2/blob/10e6a72684e7bf2fbc30547c09c2e5b525ca8c76/public/app/citasPadreModule/horarioCitasModule/horarioCitasModule.component.js#L13)
![emisión evento cita:irCrearCitaClick](https://github.com/Curso-Fullstack-MEAN-Octubre2017/AdrianBR2/blob/10e6a72684e7bf2fbc30547c09c2e5b525ca8c76/public/app/citasPadreModule/horarioCitasModule/horarioCitasModule.component.js#L63)
![emisión evento cita:irModificarCitaClick](https://github.com/Curso-Fullstack-MEAN-Octubre2017/AdrianBR2/blob/10e6a72684e7bf2fbc30547c09c2e5b525ca8c76/public/app/citasPadreModule/horarioCitasModule/horarioCitasModule.component.js#L68)


## 5.-Creación de un servicio AngularJS con NgResource para interactuar con api RESTful
![creación de un servicio que utiliza ngResource](https://github.com/Curso-Fullstack-MEAN-Octubre2017/AdrianBR2/blob/master/public/app/services/clienteREST-service.js)

![uso del servicio que utiliza ngResource](https://github.com/Curso-Fullstack-MEAN-Octubre2017/AdrianBR2/blob/55bfe699a7e47c70ee806439f8cb9b69a731c1bb/public/app/insertarClienteModule/insertarClienteModule.component.js#L12)


## 6.-Refactorización de un servicio REST con promesas
![promesas en servicio REST api/clientes](https://github.com/Curso-Fullstack-MEAN-Octubre2017/AdrianBR2/blob/10e6a72684e7bf2fbc30547c09c2e5b525ca8c76/appserver/controllers/clientes.js#L9)

![promesas en servicio REST api/clientes/mascotas](https://github.com/Curso-Fullstack-MEAN-Octubre2017/AdrianBR2/blob/10e6a72684e7bf2fbc30547c09c2e5b525ca8c76/appserver/controllers/clientes.js#L25)


## 7.-Optimistic locking
![implementacion de control concurrente optimista en edición de mascotas](https://github.com/Curso-Fullstack-MEAN-Octubre2017/AdrianBR2/blob/fcb981c4ec29ed5b5b7d32bbaa034decbdacf2b7/appserver/controllers/mascota.js#L99)



