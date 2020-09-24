# Laboratorio 6 - Clientes pesados II

## Empezando

Estas instrucciones se utilizan para compilación, ejecución de pruebas y pruebas de aceptación.

## Funcionalidades

Se despliega un cliente pesado en spring para que pueda acceder a consultar las funciones de un cinema y la fecha de las funciones.

### Prerrequisitos 

Para instalar y correr exitosamente este proyecto necesitamos:
* **Java**
* **Maven**
* **Git**

### Instalación

Primeramente vamos a descargar el repositorio en nuestra máquina local, y en la carpeta de 
nuestra preferencia. En consola vamos a digitar el siguiente comando para clonar el repositorio.

```console
git clone https://github.com/alejovasquero/ARSW---LAB6
```

Entremos a el directorio del proyecto

```console
cd ARSW---LAB6
```

Debemos compilar el proyecto, que contiene las clases necesarias para poder correr nuestro
proyecto. Por medio de maven vamos a crear todos los compilables **.class**. Desde consola, y ubicados en la carpeta donde se encuentra
nuestra configuración de maven.

```console
mvn package
```

Ahora que nuestras clases etan compiladas vamos a ejecutar la clase principal para
ver el código en acción : )

```console
mvn spring-boot:run
```

--------------------

## Construido con

* [Maven](https://maven.apache.org/) - Manejo de dependencias
* [Git](https://git-scm.com/) - Control de versiones
* [Java](https://www.java.com/es/) - Lenguaje de programación
* [Spring](https://spring.io/) - Inyección de dependencias y framework web

## Autores

* **Alejandro Vasquez** - *Extender* - [alejovasquero](https://github.com/alejovasquero)
* **Michael Ballesteros** - *Extender* - [Wasawsky](https://github.com/Wasawsky)

## Licencia

Este proyecto está licenciado bajo la licencia del MIT - Vea el [LICENSE](LICENSE) para más detalles