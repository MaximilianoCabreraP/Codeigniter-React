---
on:
  issues:
    types: [opened, reopened]
permissions:
  contents: read
  issues: read
  pull-requests: read
  packages: read
engine: copilot
network: defaults
tools:
  github:
    toolsets: [default]
safe-outputs:
  update-issue:
---

# issue-enhancer-jira-php

Cuando un nuevo issue es creado o reabierto, este workflow se activa para mejorar el contenido del issue para adaptarlo a la estructura que necesito en Jira.
El workflow lee el título y la descripción del issue, mejora el contenido del mismo para darle un mejor entendimiento a quien lea el issue, dando un contexto técnico para otro colaborador, y mejorando la documentación e historico de cambios cuando sea necesario. Además, agrega emojis relevantes y deja un comentario amigable. Esto ayuda a mantener los issues organizados y atractivos para la comunidad.

## Que hacer

1. Lee el título para entender el tema y el contexto.
2. Mejora el título para que sea claro, conciso y descriptivo del problema o la solicitud. Siguiendo la siguiente estructura:
  [TIPO] [DESCRIPCION BREVE]
  Ejemplo de TIPO: HOT SALE, PROYECTO SOFIA, BIDCOM, GADNIC, CHECKOUT, etc. dependiendo del proyecto o área a la que se refiera el issue.
  Ejemplos de DESCRIPCION BREVE:
  - [TIPO] Como usuario deseo que el sistema valide el formato del correo electrónico para evitar errores de registro.
  - [TIPO] Como usuario deseo actualizar los textos del flujo
  - [TIPO] Como usuario deseo corregir las ventas que se exportan con X
3. Lee la descripción para entender el tema y el contexto. La descripción va a contener la siguiente estructura:
[DESCRIPCION LEVE]
[RESULTADO ACTUAL] (opcional)
[IMAGEN O VIDEO] (opcional)
[RESULTADO ESPERADO]
[CRITERIOS DE ACEPTACION]
  3.1. DESCRIPCION LEVE: Necesito que mejores la descripción para que sea detallada, estructurada y fácil de entender, incluyendo pasos para reproducir el problema.
  3.2. RESULTADO ACTUAL: (Solo si existe esta sección) Si el issue es un bug o un evolutivo, incluye una sección que describa el resultado actual del sistema, incluyendo cualquier error o comportamiento inesperado que se esté experimentando.
  3.3. IMAGEN O VIDEO: (Solo si existe esta sección) Asegúrate de que esté correctamente formateado y visible en la descripción mejorada.
  3.4. RESULTADO ESPERADO: Mejora la estructura, descripción y documentación, incluye una sección que describa el resultado esperado del sistema, es decir, cómo debería funcionar correctamente.
  3.5. CRITERIOS DE ACEPTACION: Toma estos criterios de aceptación y mejóralos para que sean claros, específicos y medibles, de modo que cualquier colaborador pueda entender exactamente lo que se necesita para considerar el issue como resuelto.
4. Lee el código fuente del proyecto para entender el contexto técnico del issue, y mejora la descripción agregando detalles técnicos relevantes, como referencias a archivos, funciones o módulos específicos del código que están relacionados con el issue. Esto ayudará a otros colaboradores a entender mejor el contexto técnico y a encontrar la información relevante más rápidamente. Esto último ponlo en un bloque de código al final de la descripción mejorada con el título "Contexto Técnico".
5. Agregar Emojis relevantes basado en el contenido.
6. Agrega las etiquetas correspondientes al issue dependiendo del tipo de issue, por ejemplo: bug, feature request, hot sale, proyecto sofia, etc.
7. Deja un comentario amigable indicando que el issue ha sido mejorado.