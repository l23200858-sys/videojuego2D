# Examen Seguimiento 2 - Graficación (I.S.C.)
**Instituto Tecnológico de Pachuca** **Profesor:** M.T.I. Luis Alejandro Santana Valadez  
**Fecha:** 15 de Abril de 2026

---

## 1. Contexto del Proyecto
Este proyecto consiste en el desarrollo de un videojuego interactivo en 2D utilizando la **API Canvas de JavaScript**. El reto principal es gestionar un entorno de 25 objetos dinámicos con comportamiento autónomo, detección de colisiones y respuesta a eventos del usuario, aplicando conceptos avanzados de graficación y control de versiones con Git/GitHub.

## 2. Objetivo
Diseñar y programar una aplicación WebGL con Canvas 2D que integre animaciones complejas, manejo de recursos multimedia (imágenes y audio) y lógica de colisiones, asegurando una ejecución remota fluida a través de GitHub Pages.

## 3. Justificación Técnica
La implementación de este videojuego permite demostrar el dominio de:
* **Manipulación del DOM y Canvas:** Renderizado de gráficos en tiempo real a 60 FPS.
* **Algoritmos de Colisión:** Uso de distancia euclidiana para detectar choques entre objetos circulares y resolución de vectores para el rebote físico.
* **Programación Orientada a Objetos (POO):** Uso de clases para encapsular las propiedades (velocidad, tipo, posición) de cada entidad.
* **Despliegue Continuo:** Uso de herramientas de industria como Git para la gestión de versiones y GitHub Pages para el alojamiento web.

## 4. Operación del Videojuego
* **Mecánica Principal:** El usuario debe "atrapar" (hacer clic) a los fantasmas que se mueven por la pantalla.
* **Gestión de Población:** Al eliminar un objeto, el sistema genera uno nuevo en una posición aleatoria instantáneamente, manteniendo siempre **25 objetos** en el escenario (Regla de Negocio 1 y 3).
* **Movimientos:** Los objetos cuentan con 4 patrones de movimiento: arriba/abajo, lateral, diagonal y circular.
* **Feedback Visual:** Al colisionar entre sí, los objetos muestran una animación de "choque" (explosión) y cambian su trayectoria mediante un rebote elástico.
* **Interfaz:** El juego incluye un contador dinámico de puntos, música de fondo activada por interacción y un puntero personalizado.

## 5. Conclusiones
* Nancy Jazareth Lugo Cruz
El desarrollo de este examen permitió integrar conocimientos de geometría analítica y física básica con programación web moderna. Se logró optimizar el rendimiento del juego mediante el uso de `requestAnimationFrame` y se cumplió con la rigurosa estructura de archivos solicitada (`/assets/img`, `/assets/audio`, `/js`). La publicación exitosa en GitHub Pages valida la capacidad técnica para entregar productos de software listos para el usuario final.

*Iker Adrik Perez Badillo
Al termino de esta practica se obtuvo un reforzamiento de todos los temas vistos en clase acerca de la creación, comportamiento y características de los objetos 2D y el comportamiento que estos tienen en el escenario donde se coloquen. Entendiendo que el funcionamiento del 2D tiene caracteristicas peculiares a las de otros objetos o distintas a como son los comportamientos de un objeto en 3D. Entendiendo la importancia de poder manipular distintos objetos 2D.

*Karla Esperanza Sanchez Esqueda
En esta práctica desarrollamos un videojuego con objetos en movimiento, colisiones y comportamiento aleatorio. Usando elementos visuales y de interacción para mejorar la experiencia y utilizando las competencias vistas en la unidad además de usar Git y GitHub para el control de versiones y publicación del proyecto, un reto importante fue lograr que los objetos no se encimaran incorrectamente o se comportaran de forma extraña al colisionar. La solución fue ajustar la lógica de colisiones y aplicar correctamente el rebote, verificando las posiciones y direcciones de cada objeto.

### Datos del Equipo
* **Materia:** Graficación
* **Carrera:** Ingeniería en Sistemas Computacionales
* Nancy Jazareth Lugo Cruz - 23200858
*Iker Adrik Perez Badillo - 23200876
*Karla Esperanza Sanchez Esqueda - 23200898
