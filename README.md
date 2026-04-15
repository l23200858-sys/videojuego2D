# Examen Unidades III y IV - Graficación (I.S.C.)
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
El desarrollo de este examen permitió integrar conocimientos de geometría analítica y física básica con programación web moderna. Se logró optimizar el rendimiento del juego mediante el uso de `requestAnimationFrame` y se cumplió con la rigurosa estructura de archivos solicitada (`/assets/img`, `/assets/audio`, `/js`). La publicación exitosa en GitHub Pages valida la capacidad técnica para entregar productos de software listos para el usuario final.

### Datos del ALumno
* **Nombre:** Nancy Jazareth Lugo Cruz
* **Número de Control:** 23200858
* **Materia:** Graficación
* **Carrera:** Ingeniería en Sistemas Computacionales

---
**Repositorio:** [https://github.com/l23200858-sys/videojuego2D.git](https://github.com/l23200858-sys/videojuego2D.git)
