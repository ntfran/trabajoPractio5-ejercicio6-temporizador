# Ejercicio 6 - Temporizador

Temporizador web con presets de tiempo desarrollado con Bootstrap y JavaScript vanilla. El usuario configura el tiempo mediante botones rápidos y el contador decrementa hasta cero.

## Tecnologías utilizadas

- HTML5
- CSS3 (fuente Oswald via Google Fonts)
- JavaScript (ES6+)
- Bootstrap 5.3.8 (CDN)

## Cómo ejecutar

1. Cloná el repositorio.
2. Abrí `index.html` en el navegador.
3. Seleccioná el tiempo usando los botones de preset (+10 seg, +1 min, etc.).
4. Presioná **Iniciar** para comenzar la cuenta regresiva.
5. Usá **Pausar** para detener y **Reiniciar** para volver a cero.

## Funcionalidades

- Configuración de tiempo mediante 6 botones preset: +10 seg, +1 min, +5 min, +10 min, +30 min, +1 hs.
- Los presets son acumulables: podés combinarlos para armar cualquier tiempo.
- El botón Iniciar se habilita solo después de agregar tiempo.
- Cuenta regresiva en formato HH:MM:SS con `padStart`.
- Al llegar a cero: el intervalo se detiene, suena una alarma en loop y la card parpadea con animación CSS.
- El sonido se detiene y la animación se remueve al presionar Reiniciar.
- Feedback visual: borde verde al correr, borde amarillo al pausar, animación de alerta al finalizar.
- Función `renderizarTiempo()` reutilizada en presets, cuenta regresiva y reinicio.

## Autor

Francisco
