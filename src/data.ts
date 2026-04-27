export const planes: Record<string, Array<{tema: string; exp: string; img?: string; exp2?: string; exp3?: string}>> = {

matematicas: [
  //dia 1
{tema:"Números reales",
exp:`
<section>
  <p>Son todos los números que existen en la recta numérica.</p>

  <h3> Tipos</h3>
  <ul>
    <li><b>Naturales:</b> 0, 1, 2, 3...</li>
    <li><b>Enteros:</b> negativos y positivos</li>
    <li><b>Racionales:</b> fracciones</li>
    <li><b>Irracionales:</b> π, √2</li>
  </ul>

  <h2> Propiedades</h2>

  <div>
    <h3> Propiedad conmutativa</h3>
    <p>El orden no importa:</p>
    <ul>
      <li>a + b = b + a</li>
      <li>a × b = b × a</li>
    </ul>
    <p><b>Ejemplo:</b> 3 + 5 = 5 + 3</p>
  </div>

  <div>
    <h3> Propiedad asociativa</h3>
    <p>Puedes agrupar como quieras:</p>
    <ul>
      <li>a + b + c = a + (b + c)</li>
      <li>(a × b) × c = a × (b × c)</li>
    </ul>
    <p><b>Ejemplo:</b> (2 + 3) + 4 = 2 + (3 + 4)</p>
  </div>

  <div>
    <h3> Propiedad distributiva</h3>
    <p>Se multiplica por todos los términos:</p>
    <ul>
      <li>a(b + c) = ab + ac</li>
    </ul>
    <p><b>Ejemplo:</b> 2(3 + 4) = 2×3 + 2×4</p>
  </div>

  <div>
    <h3> Elemento neutro</h3>
    <p>No cambia el número:</p>
    <ul>
      <li>a + 0 = a</li>
      <li>a × 1 = a</li>
    </ul>
    <p><b>Ejemplo:</b> 45 + 0 = 45</p>
  </div>

  <div>
    <h3> Elemento inverso</h3>
    <p>Es el número que “deshace” a otro número:</p>
    <ul>
      <li>a + (-a) = 0</li>
      <li>a × (<sup>1</sup>/<sub>a</sub>) = 1 (si a ≠ 0)</li>
    </ul>
    <p><b>Ejemplo:</b> -8 + 8 = 0</p>
    <p>4 × (<sup>1</sup>/<sub>4</sub>) = 1</p>

    <p><b>Extra:</b></p>
    <ul>
      <li>El inverso de 7 es -7</li>
      <li>El inverso de <sup>2</sup>/<sub>3</sub> es <sup>3</sup>/<sub>2</sub></li>
    </ul>
  </div>

  <h2> Operaciones Básicas</h2>

  <div>
    <h3> Suma</h3>
    <ul>
      <li>Mismo signo → se suman</li>
      <li>Diferente signo → se restan</li>
    </ul>
    <p><b>Ejemplo:</b> -3 + 5 = 2</p>
  </div>

  <div>
    <h3> Resta</h3>
    <ul>
      <li>a - b = a + (-b)</li>
    </ul>
    <p><b>Ejemplo:</b> 7 - 10 = 7 + (-10) = -3</p>
  </div>

  <div>
    <h3> Multiplicación</h3>
    <ul>
      <li>Signos iguales → positivo</li>
      <li>Signos diferentes → negativo</li>
    </ul>
    <p><b>Ejemplo:</b> (-2)(-3) = 6</p>
  </div>

  <div>
    <h3> División</h3>
    <ul>
      <li>Signos iguales → positivo</li>
      <li>Signos diferentes → negativo</li>
    </ul>
    <p><b>Ejemplo:</b> (-8) ÷ 2 = -4</p>
  </div>

  <h2> Proporciones</h2>

  <p>Es cuando dos razones son iguales:</p>
  <ul>
    <li><sup>a</sup>/<sub>b</sub> = <sup>c</sup>/<sub>d</sub></li>
  </ul>

  <p>Se resuelve con producto cruzado:</p>
  <ul>
    <li>a ⋅ d = b ⋅ c</li>
  </ul>

  <p><b>Ejemplo:</b></p>
  <p><sup>2</sup>/<sub>3</sub> = <sup>x</sup>/<sub>6</sub></p>
  <p>2 × 6 = 3x</p>
  <p>12 = 3x</p>
  <p><b>x = 4</b></p>
</section>
`,img:"https://i.pinimg.com/originals/d2/ed/16/d2ed16ceb66d6986c6b50cfa96e9047f.jpg"
},
//dia 2
{tema:"Expresiones algebraicas",
exp:`
<section>
  <p>Son combinaciones de números, variables (letras) y operaciones matemáticas que representan cantidades desconocidas o generales.</p>

  <h3> Tipos</h3>
  <ul>
    <li><b>Monomio:</b> Una sola expresión. Ejemplo: 4x</li>
    <li><b>Binomio:</b> Dos términos. Ejemplo: x + 3</li>
    <li><b>Trinomio:</b> Tres términos. Ejemplo: x² + 5x + 6</li>
    <li><b>Polinomio:</b> Más de tres términos. Ejemplo: x³ + 2x² + x + 1</li>
  </ul>

  <h2> Lenguaje algebraico</h2>

  <div>
    <h3>🔹 Traducción de expresiones</h3>
    <p>Consiste en convertir frases del lenguaje común a expresiones matemáticas usando variables.</p>
    <ul>
      <li>Un número → x</li>
      <li>Doble → 2x</li>
      <li>Triple → 3x</li>
      <li>Mitad → <sup>x</sup>⁄<sub>2</sub></li>
      <li>Más → +</li>
      <li>Menos → -</li>
      <li>Producto → multiplicación</li>
      <li>Cociente → división</li>
    </ul>
    <p><b>Ejemplo:</b> “La mitad de un número más 8” → (<sup>x</sup>⁄<sub>2</sub>) + 8</p>
  </div>

  <div>
    <h3>🔹 Expresiones fraccionarias</h3>
    <p>Son expresiones donde aparece una división entre expresiones algebraicas.</p>
    <ul>
      <li>No se permite dividir entre 0</li>
      <li>Se simplifican eliminando factores comunes</li>
      <li>Es importante factorizar antes de simplificar</li>
    </ul>
    <p><b>Ejemplo:</b> <sup>2x²</sup>⁄<sub>4x</sub> = <sup>x</sup>⁄<sub>2</sub></p>
  </div>

  <h2> Leyes de exponentes y radicales</h2>

  <div>
    <h3>🔸 Exponentes</h3>
    <p>Permiten simplificar potencias con la misma base.</p>
    <ul>
      <li>a<sup>m</sup> · a<sup>n</sup> = a<sup>(m+n)</sup></li>
      <li><sup>a<sup>m</sup></sup>⁄<sub>a<sup>n</sup></sub> = a<sup>(m-n)</sup></li>
      <li>a<sup>m</sup> · a<sup>n</sup> = a<sup>m·n</sup></li>
      <li>(ab)<sup>n</sup> = a<sup>n</sup> · b<sup>n</sup></li>
      <li>a<sup>0</sup> = 1 (si a es diferente de 0)</li>
      <li>a<sup>-n</sup> = <sup>1</sup>/<sub>a<sup>n</sup></sub>
    </ul>
    <p><b>Ejemplo:</b> x³ · x² = x⁵</p>
  </div>

  <div>
    <h3>🔸 Radicales</h3>
    <p>Representan raíces y pueden expresarse como exponentes.</p>
    <ul>
      <li>&radic;a = a<sup><sup>1</sup>⁄<sub>2</sub></sup></li>
      <li><sup>n</sup>√a = a<sup><sup>1</sup>⁄<sub>n</sub></sup></li>
      <li>&radic;a · &radic;b = &radic;a·b</li>
      <li>&radic;(<sup>a</sup>⁄<sub>b</sub>) = <sup>&radic;a</sup>⁄<sub>&radic;b</sub>
    </ul>
    <p><b>Ejemplo:</b> &radic;16 = 4</p>
  </div>

  <h2> Productos notables</h2>

  <div>
    <h3>🔸 Cuadrado de binomio</h3>
    <ul>
      <li>(a + b)² = a² + 2ab + b²</li>
      <li>(a - b)² = a² - 2ab + b²</li>
    </ul>
    <p><b>Ejemplo:</b> (x + 3)² = x² + 6x + 9</p>
  </div>

  <div>
    <h3>🔸 Diferencia de cuadrados</h3>
    <ul>
      <li>a² - b² = (a - b)(a + b)</li>
    </ul>
    <p><b>Ejemplo:</b> x² - 16 = (x - 4)(x + 4)</p>
  </div>

  <h2> Métodos de factorización</h2>

  <p>La factorización consiste en descomponer una expresión algebraica en el producto de factores más simples. Es el proceso inverso a multiplicar.</p>

  <!-- FACTOR COMÚN -->
  <div>
    <h3>🔹 Factor común</h3>
    <p>Se utiliza cuando todos los términos tienen un factor en común (número, letra o ambos). Ese factor se extrae.</p>
    <ul>
      <li>Se identifica el máximo factor común (MFC)</li>
      <li>Se divide cada término entre ese factor</li>
    </ul>

    <p><b>Ejemplo fácil:</b></p>
    <p>
      6x + 12 <br>
      Factor común: 6 <br>
      Resultado: 6(x + 2)
    </p>

    <p><b>Ejemplo más difícil:</b></p>
    <p>
      8x²y + 4xy² <br>
      Factor común: 4xy <br>
      Resultado: 4xy(2x + y)
    </p>
  </div>

  <!-- DIFERENCIA DE CUADRADOS -->
  <div>
    <h3>🔹 Diferencia de cuadrados</h3>
    <p>Se aplica cuando hay una resta entre dos términos que son cuadrados perfectos.</p>
    <ul>
      <li>Forma: a² - b² = (a - b)(a + b)</li>
      <li>Siempre debe haber resta, no suma</li>
    </ul>

    <p><b>Ejemplo fácil:</b></p>
    <p>
      x² - 9 <br>
      √x² = x, √9 = 3 <br>
      Resultado: (x - 3)(x + 3)
    </p>

    <p><b>Ejemplo más difícil:</b></p>
    <p>
      4x² - 25y² <br>
      √4x² = 2x, √25y² = 5y <br>
      Resultado: (2x - 5y)(2x + 5y)
    </p>
  </div>

  <!-- TRINOMIO CUADRÁTICO -->
  <div>
    <h3>🔹 Trinomio cuadrático (x² + bx + c)</h3>
    <p>Se usa cuando hay tres términos y el coeficiente de x² es 1.</p>
    <ul>
      <li>Se buscan dos números que multipliquen “c” y sumen “b”</li>
    </ul>

    <p><b>Ejemplo fácil:</b></p>
    <p>
      x² + 5x + 6 <br>
      Números: 2 y 3 <br>
      Resultado: (x + 2)(x + 3)
    </p>

    <p><b>Ejemplo más difícil:</b></p>
    <p>
      x² - x - 12 <br>
      Números: -4 y 3 <br>
      Resultado: (x - 4)(x + 3)
    </p>
  </div>

  <!-- TRINOMIO GENERAL -->
  <div>
    <h3>🔹 Trinomio general (ax² + bx + c)</h3>
    <p>Se usa cuando el coeficiente de x² es diferente de 1.</p>
    <ul>
      <li>Se multiplica a·c</li>
      <li>Se buscan dos números que multipliquen ese resultado y sumen b</li>
      <li>Se separa el término central</li>
    </ul>

    <p><b>Ejemplo fácil:</b></p>
    <p>
      2x² + 7x + 3 <br>
      2·3 = 6 → números: 6 y 1 <br>
      2x² + 6x + x + 3 <br>
      Resultado: (2x + 1)(x + 3)
    </p>

    <p><b>Ejemplo más difícil:</b></p>
    <p>
      3x² + 11x + 6 <br>
      3·6 = 18 → números: 9 y 2 <br>
      3x² + 9x + 2x + 6 <br>
      Resultado: (3x + 2)(x + 3)
    </p>
  </div>

  <!-- AGRUPACIÓN -->
  <div>
    <h3>🔹 Factorización por agrupación</h3>
    <p>Se usa cuando hay cuatro términos. Se agrupan en pares para encontrar factor común.</p>
    <ul>
      <li>Se agrupan términos</li>
      <li>Se factoriza cada grupo</li>
      <li>Se extrae factor común final</li>
    </ul>

    <p><b>Ejemplo fácil:</b></p>
    <p>
      x² + 3x + 2x + 6 <br>
      (x² + 3x) + (2x + 6) <br>
      x(x + 3) + 2(x + 3) <br>
      Resultado: (x + 3)(x + 2)
    </p>

    <p><b>Ejemplo más difícil:</b></p>
    <p>
      2x³ + 4x² + 3x + 6 <br>
      (2x³ + 4x²) + (3x + 6) <br>
      2x²(x + 2) + 3(x + 2) <br>
      Resultado: (x + 2)(2x² + 3)
    </p>
  </div>

  <h2> Tip </h2>

  <ul>
    <li>¿Todos tienen algo en común? → factor común</li>
    <li>¿Son dos términos con resta? → diferencia de cuadrados</li>
    <li>¿Son 3 términos? → trinomio</li>
    <li>¿Son 4 términos? → agrupación</li>
  </ul>
</section>
`},
//dia 3
{tema:"Funciones y ecuaciones lineales",
exp:`
<section>
  <p>Son herramientas matemáticas que permiten representar relaciones entre cantidades. Se usan cuando una variable depende de otra, como en situaciones de la vida real (precio, tiempo, distancia, etc.).</p>

  <h3> Tipos</h3>
  <ul>
    <li><b>Función:</b> Relación donde a cada valor de x le corresponde un único valor de y</li>
    <li><b>Ecuación:</b> Igualdad matemática que se debe resolver encontrando el valor de la incógnita</li>
  </ul>

  <h2> Concepto de función</h2>

  <div>
    <h3>🔹 Definición</h3>
    <p>Una función asigna a cada valor de la variable independiente (x) un único valor de la variable dependiente (y). Esto significa que no puede haber dos resultados distintos para el mismo valor de x.</p>
    <ul>
      <li>Se escribe como: y = f(x)</li>
      <li>x → variable independiente (la que eliges)</li>
      <li>y → variable dependiente (depende de x)</li>
    </ul>
    <p><b>Ejemplo:</b><br>
      f(x) = 2x + 1 <br>
      Paso 1: sustituir x = 3 <br>
      Paso 2: f(3) = 2(3) + 1 <br>
      Paso 3: f(3) = 6 + 1 <br>
      Paso 4: f(3) = 7 <br>
       Resultado: cuando x = 3, y = 7
    </p>
  </div>

  <div>
    <h3>🔹 Función lineal</h3>
    <p>Es una función de primer grado que forma una línea recta en el plano cartesiano. Su comportamiento es constante (crece o decrece de manera uniforme).</p>
    <ul>
      <li>Forma: y = mx + b</li>
      <li>m = pendiente (qué tan inclinada está la recta)</li>
      <li>b = punto donde la recta corta el eje y</li>
    </ul>
    <p><b>Ejemplo:</b><br>
      y = 2x + 3 <br>
      Si x = 2: <br>
      y = 2(2) + 3 = 4 + 3 = 7 <br>
       La recta pasa por el punto (2,7)
    </p>
  </div>

  <h2> Propiedades de las igualdades</h2>

  <div>
    <h3>🔸 Suma y resta</h3>
    <p>Permiten mantener la igualdad al sumar o restar el mismo número en ambos lados.</p>
    <ul>
      <li>Si a = b → a + c = b + c</li>
      <li>Si a = b → a - c = b - c</li>
    </ul>
    <p><b>Ejemplo:</b><br>
      x - 3 = 5 <br>
      Paso 1: sumas 3 en ambos lados <br>
      x - 3 + 3 = 5 + 3 <br>
      Paso 2: simplificas <br>
      x = 8
    </p>
  </div>

  <div>
    <h3>🔸 Multiplicación y división</h3>
    <p>Se usan para eliminar coeficientes y dejar sola la variable.</p>
    <ul>
      <li>Si a = b → a·c = b·c</li>
      <li>Si a = b → a/c = b/c (c ≠ 0)</li>
    </ul>
    <p><b>Ejemplo:</b><br>
      2x = 10 <br>
      Paso 1: divides entre 2 ambos lados <br>
      x = 10 ÷ 2 <br>
      Paso 2: resultado <br>
      x = 5
    </p>
  </div>

  <h2> Ecuaciones lineales</h2>

  <div>
    <h3>🔹 Definición</h3>
    <p>Son ecuaciones donde la incógnita tiene exponente 1. El objetivo es despejar la variable.</p>
    <ul>
      <li>Forma general: ax + b = 0</li>
    </ul>
    <p><b>Ejemplo fácil:</b><br>
      x + 4 = 10 <br>
      Paso 1: restar 4 en ambos lados <br>
      x = 10 - 4 <br>
      Paso 2: resultado <br>
      x = 6
    </p>
  </div>

  <div>
    <h3>🔹 Resolución paso a paso</h3>
    <p>Se ordenan los términos y se despeja la variable aplicando operaciones inversas.</p>
    <ul>
      <li>Se agrupan términos semejantes</li>
      <li>Se eliminan coeficientes</li>
    </ul>
    <p><b>Ejemplo más difícil:</b><br>
      3x - 5 = 2x + 7 <br>
      Paso 1: restar 2x en ambos lados <br>
      3x - 2x - 5 = 7 <br>
      Paso 2: simplificar <br>
      x - 5 = 7 <br>
      Paso 3: sumar 5 <br>
      x = 12
    </p>
  </div>

  <h2> Sistema de ecuaciones lineales</h2>

  <p>Son conjuntos de dos o más ecuaciones que se resuelven simultáneamente para encontrar valores que satisfacen todas.</p>

  <div>
    <h3>🔸 Método de sustitución</h3>
    <ul>
      <li>Se despeja una variable</li>
      <li>Se sustituye en la otra ecuación</li>
    </ul>
    <p><b>Ejemplo:</b><br>
      x + y = 5 <br>
      y = 2 <br>
      Paso 1: sustituir <br>
      x + 2 = 5 <br>
      Paso 2: despejar <br>
      x = 3 <br>
       Solución: (3,2)
    </p>
  </div>

  <div>
    <h3>🔸 Método de eliminación</h3>
    <ul>
      <li>Se suman o restan ecuaciones para eliminar una variable</li>
    </ul>
    <p><b>Ejemplo más difícil:</b><br>
      2x + y = 7 <br>
      x - y = 1 <br>
      Paso 1: sumar ecuaciones <br>
      3x = 8 <br>
      Paso 2: despejar <br>
      x = <sup>8</sup>⁄<sub>3</sub> <br>
      Paso 3: sustituir en una ecuación <br>
      (<sup>8</sup>⁄<sub>3</sub>) - y = 1 <br>
      Paso 4: resolver <br>
      y = <sup>5</sup>⁄<sub>3</sub> <br>
       Solución: (<sup>8</sup>⁄<sub>3</sub> , <sup>5</sup>⁄<sub>3</sub>)
    </p>
  </div>
</section>
`},
//dia 4
{tema:"Funciones y ecuaciones cuadraticas",
exp:`
<section>
  <p>Son expresiones algebraicas de segundo grado, es decir, donde la variable está elevada al cuadrado (x²). Se utilizan para modelar fenómenos como trayectorias, áreas y problemas de optimización.</p>

  <h3> Tipos</h3>
  <ul>
    <li><b>Ecuación cuadrática:</b> Igualdad de segundo grado que se resuelve encontrando el valor de x</li>
    <li><b>Función cuadrática:</b> Relación que genera una parábola al graficarse</li>
  </ul>

  <h2> Concepto de ecuación cuadrática</h2>

  <div>
    <h3>🔹 Forma general</h3>
    <p>Una ecuación cuadrática tiene la forma:</p>
    <ul>
      <li>ax² + bx + c = 0</li>
      <li>a ≠ 0</li>
    </ul>
    <p>Donde:</p>
    <ul>
      <li>a = coeficiente de x²</li>
      <li>b = coeficiente de x</li>
      <li>c = término independiente</li>
    </ul>
    <p><b>Ejemplo:</b> 2x² + 3x - 5 = 0</p>
  </div>

  <div>
    <h3>🔹 Interpretación</h3>
    <p>Resolver una ecuación cuadrática significa encontrar los valores de x que hacen que la expresión sea igual a 0.</p>
    <ul>
      <li>Pueden existir 2 soluciones</li>
      <li>1 solución (cuando se repite)</li>
      <li>O ninguna real</li>
    </ul>
    <p><b>Ejemplo:</b><br>
      x² - 4 = 0 <br>
      x² = 4 <br>
      x = ±2
    </p>
  </div>

  <h2> Ecuaciones cuadráticas</h2>

  <!-- FACTORIZACIÓN -->
  <div>
    <h3>🔸 Método de factorización</h3>
    <p>Se descompone la expresión en factores y se iguala cada uno a cero.</p>
    <ul>
      <li>Se factoriza la expresión</li>
      <li>Se iguala cada factor a 0</li>
    </ul>

    <p><b>Ejemplo fácil:</b><br>
      x² + 5x + 6 = 0 <br>
      Paso 1: factorizar → (x + 2)(x + 3) = 0 <br>
      Paso 2: igualar <br>
      x + 2 = 0 → x = -2 <br>
      x + 3 = 0 → x = -3 <br>
       Soluciones: x = -2, x = -3
    </p>

    <p><b>Ejemplo difícil:</b><br>
      2x² + 7x + 3 = 0 <br>
      Paso 1: factorizar → (2x + 1)(x + 3) = 0 <br>
      Paso 2: igualar <br>
      2x + 1 = 0 → x = -1/2 <br>
      x + 3 = 0 → x = -3 <br>
       Soluciones: x = -1/2, x = -3
    </p>
  </div>

  <!-- FORMULA GENERAL -->
  <div>
    <h3>🔸 Fórmula general</h3>
    <p>Se usa cuando no se puede factorizar fácilmente.</p>
    <ul>
      <li>x = (-b ± √(b² - 4ac)) / (2a)</li>
      <li>b² - 4ac = discriminante</li>
    </ul>

    <p><b>Ejemplo fácil:</b><br>
      x² - 5x + 6 = 0 <br>
      a=1, b=-5, c=6 <br>
      Paso 1: sustituir <br>
      x = (5 ± √(25 - 24)) / 2 <br>
      Paso 2: resolver raíz <br>
      x = (5 ± 1)/2 <br>
      Paso 3: resultados <br>
      x = 3, x = 2
    </p>

    <p><b>Ejemplo difícil:</b><br>
      3x² + 4x - 2 = 0 <br>
      a=3, b=4, c=-2 <br>
      Paso 1: discriminante <br>
      4² - 4(3)(-2) = 16 + 24 = 40 <br>
      Paso 2: fórmula <br>
      x = (-4 ± √40) / 6 <br>
      Paso 3: simplificar <br>
      √40 = 2√10 <br>
      x = (-4 ± 2√10)/6 <br>
       Soluciones: (-2 ± √10)/3
    </p>
  </div>

  <!-- COMPLETAR CUADRADO -->
  <div>
    <h3>🔸 Método de completar el cuadrado</h3>
    <p>Se transforma la ecuación en un trinomio cuadrado perfecto.</p>
    <ul>
      <li>Se agrupan términos</li>
      <li>Se añade un valor para completar cuadrado</li>
    </ul>

    <p><b>Ejemplo fácil:</b><br>
      x² + 6x + 5 = 0 <br>
      Paso 1: mover constante <br>
      x² + 6x = -5 <br>
      Paso 2: completar cuadrado <br>
      (6/2)² = 9 <br>
      x² + 6x + 9 = 4 <br>
      Paso 3: factorizar <br>
      (x + 3)² = 4 <br>
      Paso 4: raíz <br>
      x + 3 = ±2 <br>
      x = -1, x = -5
    </p>

    <p><b>Ejemplo difícil:</b><br>
      x² + 4x - 1 = 0 <br>
      Paso 1: mover constante <br>
      x² + 4x = 1 <br>
      Paso 2: completar cuadrado <br>
      (4/2)² = 4 <br>
      x² + 4x + 4 = 5 <br>
      Paso 3: factorizar <br>
      (x + 2)² = 5 <br>
      Paso 4: raíz <br>
      x + 2 = ±√5 <br>
      x = -2 ± √5
    </p>
  </div>
  <div>
  
</section>
`},
//dia 5
{tema:"Cálculo diferencial",
exp:`
<section>
  <p>El cálculo diferencial estudia cómo cambian las funciones y analiza su comportamiento local a través de los límites y las derivadas. Nos permite predecir pendientes, tasas de cambio y comportamientos de crecimiento o decrecimiento.</p>

  <h3> Tipos de conceptos</h3>
  <ul>
    <li><b>Límites:</b> Valor al que se aproxima una función cuando la variable se acerca a un punto</li>
    <li><b>Derivadas:</b> Tasa de cambio instantánea de una función en un punto, pendiente de la tangente</li>
  </ul>

  <h2> Límites</h2>

  <div>
    <h3>🔹 Concepto</h3>
    <p>El límite describe el comportamiento de una función cuando x se acerca a un valor específico, aunque la función no esté definida en ese punto.</p>
    <ul>
      <li>Se escribe como: lim(x→a) f(x) = L</li>
      <li>Permite estudiar continuidad, puntos de ruptura y comportamiento cercano a un valor</li>
    </ul>
    <p><b>Ejemplo fácil:</b> lim(x→2) (x²) = 4 porque al acercarse x a 2, x² se acerca a 4</p>
    <p><b>Ejemplo difícil:</b> lim(x→1) (x² - 1)/(x - 1) = 2, ya que factorizar x² - 1 → (x - 1)(x + 1) y simplificar → lim(x→1) (x + 1) = 2</p>
  </div>

  <div>
    <h3>🔹 Propiedades importantes</h3>
    <ul>
      <li>lim(x→a) [f(x) + g(x)] = lim f(x) + lim g(x)</li>
      <li>lim(x→a) [f(x)·g(x)] = lim f(x) · lim g(x)</li>
      <li>lim(x→a) [f(x)/g(x)] = lim f(x)/lim g(x), siempre que lim g(x) ≠ 0</li>
    </ul>
    <p><b>Ejemplo:</b> lim(x→2) (3x² + 2x) = 3·4 + 4 = 16</p>
  </div>

  <h2> Derivadas</h2>

  <div>
    <h3>🔹 Concepto</h3>
    <p>La derivada mide la tasa de cambio instantánea de una función. Representa la pendiente de la tangente a la curva en un punto.</p>
    <ul>
      <li>Se escribe f(x)&#39; o dy/dx</li>
      <li>Indica crecimiento (f(x)&#39; &gt; 0) o decrecimiento (f(x)&#39; &lt; 0)</li>
      <li>Si f(x)&#39; = 0 → posible máximo, mínimo o punto de inflexión</li>
    </ul>
    <p><b>Ejemplo fácil:</b> f(x) = x² → f(x)&#39; = 2x</p>
    <p><b>Ejemplo difícil:</b> f(x) = 4x³ - 3x² + 2x - 5 → f(x)&#39; = 12x² - 6x + 2</p>
  </div>

  <div>
    <h3>🔹 Interpretaciones geométricas</h3>
    <p>La derivada representa la pendiente de la recta tangente en un punto de la función. Permite determinar máximos, mínimos y concavidad.</p>
    <ul>
      <li>f(x)&#39; &gt; 0 → función creciente</li>
      <li>f(x)&#39; &lt; 0 → función decreciente</li>
      <li>f(x)&#39; = 0 → punto crítico (máximo o mínimo local)</li>
    </ul>
    <p><b>Ejemplo fácil:</b> f(x) = x², f(1)&#39; = 2 → pendiente positiva, curva sube</p>
    <p><b>Ejemplo difícil:</b> f(x) = x³ - 3x² + 2, f(x)&#39; = 3x² - 6x, f(0)&#39; = 0, f(2)&#39; = 0 → puntos críticos en x = 0 y x = 2</p>
  </div>

  <h2> Reglas básicas de derivación</h2>

  <div>
    <h3>🔸 Reglas esenciales</h3>
    <ul>
      <li>d/dx (c) = 0</li>
      <li>d/dx (xⁿ) = n·xⁿ⁻¹</li>
      <li>d/dx (f + g) = f&#39; + g&#39;</li>
      <li>d/dx (kf) = k·f&#39;</li>
    </ul>
    <p><b>Ejemplo:</b> f(x) = 5x² + 3x → f(x)&#39; = 10x + 3</p>
  </div>

  <div>
    <h3>🔸 Derivadas de funciones trascendentes</h3>
    <ul>
      <li>d/dx (e^x) = e^x</li>
      <li>d/dx (ln x) = 1/x</li>
      <li>d/dx (sen x) = cos x</li>
      <li>d/dx (cos x) = -sen x</li>
    </ul>
    <p><b>Ejemplo difícil:</b> f(x) = e^x + ln x + sen x → f(x)&#39; = e^x + 1/x + cos x</p>
  </div>

  <h2> Tips </h2>
  <ul>
    <li>Límites: analiza el comportamiento cercano a un valor, factoriza o simplifica cuando sea necesario</li>
    <li>Derivadas: identifica tipo de función (algebraica o trascendente) y aplica regla adecuada</li>
    <li>Para máximos y mínimos: deriva, iguala a 0 y analiza los puntos críticos</li>
    <li>Siempre relaciona derivadas con pendientes y límites con aproximaciones</li>
  </ul>

</section>
`},
//dia 6
{tema:"Funciones, límites y continuidad",
 exp:`
 <section>
  <p>En matemáticas, una función relaciona cada valor de entrada (x) con un único valor de salida (y). Para entender una función, debemos conocer dos cosas fundamentales:</p>

  <h3> Conceptos</h3>
  <ul>
    <li><b>Dominio:</b> Todos los valores posibles de x para los que la función está definida. No podemos usar valores que causen divisiones por cero o raíces pares de números negativos.</li>
    <li><b>Rango:</b> Todos los valores posibles que toma y = f(x) cuando x recorre el dominio. Es decir, los valores de salida de la función.</li>
  </ul>

  <h2> Ejemplos</h2>

  <div>
    <h3>🔹 Ejemplo fácil</h3>
    <p>f(x) = x²</p>
    <ul>
      <li>Dominio: todos los números reales, porque puedes elevar cualquier número al cuadrado</li>
      <li>Rango: y ≥ 0, porque un número al cuadrado nunca es negativo</li>
    </ul>
    <p><b>Explicación:</b> Si ponemos x = -2, f(-2) = 4; x = 0, f(0) = 0; x = 3, f(3) = 9. Vemos que nunca obtenemos valores negativos en y.</p>
  </div>

  <div>
    <h3>🔹 Ejemplo difícil</h3>
    <p>f(x) = 1 / (x - 2)</p>
    <ul>
      <li>Dominio: x ≠ 2, porque si x = 2 la función se vuelve indefinida (división por cero)</li>
      <li>Rango: todos los números reales excepto y = 0, porque la función nunca puede tomar valor cero</li>
    </ul>
    <p><b>Explicación:</b> A medida que x se acerca a 2, f(x) crece o decrece sin límite (∞ o -∞). Si x es grande, f(x) se acerca a 0 pero nunca llega a 0.</p>
  </div>

  <h2> Desigualdades</h2>
  <p>Las desigualdades nos permiten comparar funciones o números y establecer rangos de valores posibles. Son muy útiles para definir dominios y rangos o resolver problemas.</p>

  <h3> Tipos</h3>
  <ul>
    <li><b>Menor que:</b> a &lt; b → a es menor que b</li>
    <li><b>Mayor que:</b> a &gt; b → a es mayor que b</li>
    <li><b>Menor o igual que:</b> a ≤ b → a es menor o igual que b</li>
    <li><b>Mayor o igual que:</b> a ≥ b → a es mayor o igual que b</li>
  </ul>

  <h2> Ejemplos de desigualdades</h2>

  <div>
    <h3>🔹 Ejemplo fácil</h3>
    <p>Resolver x + 3 &lt; 7</p>
    <ul>
      <li>Restamos 3 a ambos lados → x &lt; 4</li>
    </ul>
    <p><b>Explicación:</b> Todos los números menores que 4 cumplen la desigualdad.</p>
  </div>

  <div>
    <h3>🔹 Ejemplo difícil</h3>
    <p>Resolver 2x² - 5x + 2 ≥ 0</p>
    <ul>
      <li>Factorizamos: (2x - 1)(x - 2) ≥ 0</li>
      <li>Analizamos intervalos usando la recta numérica:</li>
      <ul>
        <li>x &lt; 0.5 → positivo</li>
        <li>0.5 &lt; x &lt; 2 → negativo</li>
        <li>x ≥ 2 → positivo</li>
      </ul>
      <li>Solución: x ≤ 0.5 o x ≥ 2</li>
    </ul>
    <p><b>Explicación:</b> Dibujar los signos de cada factor nos ayuda a ver en qué intervalos la desigualdad se cumple.</p>
  </div>

  <h2> Tips </h2>
  <ul>
    <li>Para el dominio, busca dónde la función no estaría definida (divisiones por cero, raíces pares de negativos, logaritmos de números ≤ 0).</li>
    <li>Para el rango, piensa en todos los posibles valores de salida al recorrer todo el dominio.</li>
    <li>Al resolver desigualdades, factoriza y analiza los signos de cada factor en los intervalos.</li>
  </ul>

</section>
`},
//dia 7
{tema:"Funciones, límites y continuidad",
exp:`
<section>
  <p>El límite de una función nos dice qué valor se aproxima f(x) cuando x se acerca a un número específico. Aunque f(x) no tome ese valor exacto, el límite refleja el comportamiento de la función cerca de ese punto.</p>

  <h3> Concepto</h3>
  <ul>
    <li>Si f(x) se acerca a un número L cuando x se aproxima a a, escribimos: lim(x→a) f(x) = L</li>
    <li>El límite estudia <b>la tendencia</b> de la función cerca de un punto, no necesariamente el valor exacto en ese punto.</li>
  </ul>

  <h2> Ejemplos de límites</h2>

  <div>
    <h3>🔹 Ejemplo fácil</h3>
    <p>lim(x→2) (x² + 1) = ?</p>
    <ul>
      <li>Sustituimos x = 2 → 2² + 1 = 5</li>
    </ul>
    <p><b>Explicación:</b> Como x² + 1 es continua, podemos sustituir directamente para encontrar el límite.</p>
  </div>

  <div>
    <h3>🔹 Ejemplo difícil</h3>
    <p>lim(x→1) (x² - 1)/(x - 1) = ?</p>
    <ul>
      <li>Factorizamos el numerador: (x - 1)(x + 1)/(x - 1)</li>
      <li>Cancelamos el (x - 1) → queda x + 1</li>
      <li>Sustituimos x = 1 → 1 + 1 = 2</li>
    </ul>
    <p><b>Explicación:</b> El límite existe incluso si f(1) no está definida originalmente, porque la función se acerca a 2 al acercarse a x = 1.</p>
  </div>

  <h2> Teorema de límites</h2>
  <p>Existen reglas que nos ayudan a calcular límites sin sustituir directamente:</p>

  <div>
    <h3>🔹 Propiedades básicas</h3>
    <ul>
      <li>lim(x→a) [f(x) + g(x)] = lim(x→a) f(x) + lim(x→a) g(x)</li>
      <li>lim(x→a) [f(x) · g(x)] = lim(x→a) f(x) · lim(x→a) g(x)</li>
      <li>lim(x→a) [f(x)/g(x)] = lim(x→a) f(x) / lim(x→a) g(x), siempre que lim(x→a) g(x) ≠ 0</li>
    </ul>
    <p><b>Ejemplo fácil:</b> lim(x→2) (x² + 3x) = lim(x→2) x² + lim(x→2) 3x = 4 + 6 = 10</p>
    <p><b>Ejemplo difícil:</b> lim(x→0) (sin x)/x = 1 (Teorema fundamental de límites trigonométricos)</p>
  </div>

  <h2> Límites al infinito</h2>
  <p>Cuando x crece sin límite (x→∞ o x→-∞), podemos estudiar el comportamiento de la función para ver si se aproxima a un número o sigue creciendo/decreciendo indefinidamente.</p>

  <div>
    <h3>🔹 Concepto</h3>
    <ul>
      <li>lim(x→∞) f(x) → valor al que se aproxima f(x) cuando x crece mucho</li>
      <li>lim(x→-∞) f(x) → valor al que se aproxima f(x) cuando x decrece mucho</li>
    </ul>
    <p><b>Ejemplo fácil:</b> f(x) = 1/x → lim(x→∞) 1/x = 0, lim(x→-∞) 1/x = 0</p>
    <p><b>Ejemplo difícil:</b> f(x) = (3x² + 2)/(x² - 1)</p>
    <ul>
      <li>Dividimos numerador y denominador por x²: (3 + 2/x²)/(1 - 1/x²)</li>
      <li>lim(x→∞) → (3 + 0)/(1 - 0) = 3</li>
      <li>lim(x→-∞) → mismo proceso → 3</li>
    </ul>
    <p><b>Explicación:</b> Aunque x crece mucho, f(x) se estabiliza cerca de 3, que se llama <b>asíntota horizontal</b>.</p>
  </div>

  <h2> Tips </h2>
  <ul>
    <li>Para límites simples de funciones continuas, puedes sustituir directamente x por el valor del límite.</li>
    <li>Para límites indeterminados (0/0), factoriza o usa teoremas conocidos como sin x / x → 1.</li>
    <li>Para límites al infinito, divide entre la potencia más alta de x y analiza los términos.</li>
    <li>Los límites muestran el comportamiento de la función cerca de puntos o en extremos, aunque la función no tome esos valores exactamente.</li>
  </ul>

</section>
`},
//dia 8
{tema:"Derivada de funciones algebraicas y trascendentes",
exp:`
<section>
  <p>La derivada mide la variación instantánea de una función. Para funciones algebraicas indica la pendiente de la curva en un punto, y para funciones trascendentes nos permite analizar tasas de cambio de fenómenos exponenciales, logarítmicos o trigonométricos.</p>

  <h3> Tipos de funciones</h3>
  <ul>
    <li><b>Algebraicas:</b> Polinomios, racionales, raíces y combinaciones de estas</li>
    <li><b>Trascendentes:</b> Funciones exponenciales, logarítmicas, seno, coseno y otras funciones no algebraicas</li>
  </ul>

  <h2> Derivada</h2>

  <div>
    <h3>🔹 Concepto</h3>
    <p>La derivada f&#39;(x) representa la tasa de cambio instantánea de la función f(x) en cada punto x. Muestra cuánto cambia la función respecto a su variable independiente.</p>
    <ul>
      <li>f&#39;(x) = lim(h→0) [f(x + h) - f(x)] / h</li>
      <li>Si f&#39;(x) &gt; 0 → función creciente</li>
      <li>Si f&#39;(x) &lt; 0 → función decreciente</li>
      <li>Si f&#39;(x) = 0 → posible máximo, mínimo o punto de inflexión</li>
    </ul>
    <p><b>Ejemplo fácil:</b> f(x) = x² → f&#39;(x) = 2x</p>
    <p><b>Ejemplo difícil:</b> f(x) = 4x³ - 3x² + 2x - 5 → f&#39;(x) = 12x² - 6x + 2</p>
  </div>

  <h2> Interpretaciones geométricas</h2>

  <div>
    <h3>🔹 Pendiente de la tangente</h3>
    <p>La derivada indica la pendiente de la recta tangente a la función en un punto dado. Esto permite analizar crecimiento, decrecimiento y concavidad de la función.</p>
    <ul>
      <li>f&#39;(x) &gt; 0 → curva sube</li>
      <li>f&#39;(x) &lt; 0 → curva baja</li>
      <li>f&#39;(x) = 0 → punto crítico</li>
    </ul>
    <p><b>Ejemplo fácil:</b> f(x) = x² → f&#39;(1) = 2 → pendiente positiva</p>
    <p><b>Ejemplo difícil:</b> f(x) = x³ - 3x² + 2 → f&#39;(x) = 3x² - 6x → f&#39;(0) = 0, f&#39;(2) = 0 → puntos críticos en x = 0 y x = 2</p>
  </div>

  <h2> Fórmula de derivada</h2>

  <div>
    <h3>🔹 Reglas generales</h3>
    <ul>
      <li>d/dx (c) = 0, donde c es constante</li>
      <li>d/dx (xⁿ) = n·xⁿ⁻¹</li>
      <li>d/dx (f(x) + g(x)) = f&#39;(x) + g&#39;(x)</li>
      <li>d/dx (k·f(x)) = k·f&#39;(x)</li>
      <li>Derivadas de funciones trascendentes:</li>
      <ul>
        <li>d/dx (e^x) = e^x</li>
        <li>d/dx (ln x) = 1/x</li>
        <li>d/dx (sen x) = cos x</li>
        <li>d/dx (cos x) = -sen x</li>
      </ul>
    </ul>
    <p><b>Ejemplo fácil:</b> f(x) = 5x² + 3x → f&#39;(x) = 10x + 3</p>
    <p><b>Ejemplo difícil:</b> f(x) = 2x³ - 3x² + e^x + ln x → f&#39;(x) = 6x² - 6x + e^x + 1/x</p>
  </div>
</section>
`},
//dia 9
{tema:"Derivada de funciones algebraicas y trascendentes",
exp:`
<section>
  <p>En cálculo diferencial, la derivada no solo mide tasas de cambio, también nos ayuda a analizar funciones compuestas, encontrar máximos y mínimos, y resolver problemas de optimización o interpretación física de fenómenos.</p>

  <h2> Regla de cadena</h2>

  <div>
    <h3>🔹 Concepto</h3>
    <p>La regla de cadena se usa para derivar funciones compuestas, es decir, funciones dentro de otras funciones. Si y = f(g(x)), entonces:</p>
    <ul>
      <li>y&#39; = f&#39;(g(x)) · g&#39;(x)</li>
    </ul>
    <p>Permite “descomponer” la derivada aplicando primero la función externa y luego multiplicando por la derivada de la interna.</p>
    <p><b>Ejemplo fácil:</b> y = (2x + 3)² → y&#39; = 2(2x + 3) · 2 = 4(2x + 3)</p>
    <p><b>Ejemplo difícil:</b> y = sin(x² + 1) → y&#39; = cos(x² + 1) · 2x = 2x·cos(x² + 1)</p>
  </div>

  <h2> Máximos y mínimos</h2>

  <div>
    <h3>🔹 Concepto</h3>
    <p>Los máximos y mínimos locales se encuentran donde la derivada se anula (f&#39;(x) = 0) o no existe. Sirve para determinar puntos donde la función alcanza valores extremos.</p>
    <ul>
      <li>Puntos críticos: f&#39;(x) = 0 o f&#39;(x) indefinida</li>
      <li>Prueba de la segunda derivada: f&#39;&#39;(x) &gt; 0 → mínimo, f&#39;&#39;(x) &lt; 0 → máximo</li>
    </ul>
    <p><b>Ejemplo fácil:</b> f(x) = x² → f&#39;(x) = 2x → f&#39;(0) = 0 → mínimo en x = 0</p>
    <p><b>Ejemplo difícil:</b> f(x) = x³ - 3x² + 2 → f&#39;(x) = 3x² - 6x → f&#39;(0) = 0, f&#39;(2) = 0 → puntos críticos x = 0 y x = 2. Segunda derivada: f&#39;&#39;(x) = 6x - 6 → f&#39;&#39;(0) = -6 → máximo, f&#39;&#39;(2) = 6 → mínimo</p>
  </div>

  <h2> Aplicaciones de las derivadas</h2>

  <div>
    <h3>🔹 Concepto</h3>
    <p>Las derivadas permiten resolver problemas prácticos de la vida real, como velocidad instantánea, optimización de recursos, crecimiento o decrecimiento de funciones y análisis de concavidad.</p>
    <ul>
      <li>Velocidad instantánea: v(t) = s&#39;(t)</li>
      <li>Optimización: encontrar valores máximos o mínimos de costos, áreas, ganancias, etc.</li>
      <li>Concavidad: f&#39;&#39;(x) &gt; 0 → concavidad hacia arriba, f&#39;&#39;(x) &lt; 0 → concavidad hacia abajo</li>
    </ul>
    <p><b>Ejemplo fácil:</b> Una partícula con posición s(t) = t² → velocidad v(t) = s&#39;(t) = 2t</p>
    <p><b>Ejemplo difícil:</b> Maximizar el área de un rectángulo inscrito en la parábola y = 12 - x² → Área A = x·y = x(12 - x²) = 12x - x³ → A&#39;(x) = 12 - 3x² → A&#39;(x) = 0 → 3x² = 12 → x = 2 → área máxima A = 2·(12 - 4) = 16</p>
  </div>

  <h2> Tips </h2>
  <ul>
    <li>Para funciones compuestas siempre revisa si puedes aplicar la regla de cadena.</li>
    <li>Busca siempre puntos críticos usando f&#39;(x) = 0 antes de analizar máximos y mínimos.</li>
    <li>Aplica derivadas de segundo orden para confirmar la naturaleza de los extremos.</li>
    <li>Relaciona derivadas con problemas físicos o de optimización para aplicar la teoría a la práctica.</li>
  </ul>

</section>
`},
//dia 10
{tema:"Cálculo integral",
exp:`
<section>
  <p>La integral es una herramienta matemática que permite calcular acumulaciones, como áreas, distancias o cantidades totales. Se enfoca en sumar infinitos valores pequeños para obtener un resultado total.</p>

  <h3> Tipos</h3>
  <ul>
    <li><b>Integral definida:</b> Calcula el área bajo una curva en un intervalo</li>
    <li><b>Área bajo la curva:</b> Interpretación geométrica de la integral</li>
  </ul>

  <h2> Concepto de integral</h2>

  <div>
    <h3>🔹 Idea fundamental</h3>
    <p>La integral suma pequeñas partes de una función para obtener un total. Es como dividir una figura en muchas tiras muy delgadas y luego sumarlas.</p>
    <ul>
      <li>Se representa como: ∫ f(x) dx</li>
      <li>dx indica una pequeña variación en x</li>
      <li>Es una suma continua (no discreta)</li>
    </ul>

    <p><b>Ejemplo intuitivo:</b><br>
      Imagina que quieres saber el área bajo una curva.<br>
      Divides en rectángulos pequeños → los sumas → obtienes el área total.
    </p>
  </div>

  <h2> Integral definida</h2>

  <div>
    <h3>🔸 Concepto</h3>
    <p>La integral definida calcula el área bajo la curva de una función entre dos valores (límite inferior y superior).</p>
    <ul>
      <li>Se escribe: ∫[a,b] f(x) dx</li>
      <li>a = límite inferior</li>
      <li>b = límite superior</li>
    </ul>

    <p><b>Ejemplo fácil:</b><br>
      ∫ de 0 a 2 de f(x) = x dx <br>
      Paso 1: encontrar función acumulada → x²/2 <br>
      Paso 2: evaluar <br>
      (2²/2) - (0²/2) <br>
      2 - 0 = 2 <br>
       Área = 2
    </p>

    <p><b>Ejemplo más difícil:</b><br>
      ∫ de 1 a 3 de (2x + 1) dx <br>
      Paso 1: integrar término a término <br>
      2x → x² <br>
      1 → x <br>
      Paso 2: función acumulada → x² + x <br>
      Paso 3: evaluar <br>
      (3² + 3) - (1² + 1) <br>
      (9 + 3) - (1 + 1) <br>
      12 - 2 = 10 <br>
       Resultado = 10
    </p>
  </div>

  <h2> Interpretación geométrica</h2>

  <div>
    <h3>🔸 Área bajo la curva</h3>
    <p>La integral representa el área entre la gráfica de la función y el eje x en un intervalo.</p>
    <ul>
      <li>Si la función está arriba del eje x → área positiva</li>
      <li>Si está abajo → área negativa</li>
    </ul>

    <p><b>Ejemplo fácil:</b><br>
      f(x) = x en [0,2] <br>
      Forma un triángulo <br>
      Área = (base × altura)/2 = (2×2)/2 = 2
    </p>

    <p><b>Ejemplo más difícil:</b><br>
      f(x) = x² en [0,2] <br>
      Paso 1: usar integral <br>
      x³/3 evaluado de 0 a 2 <br>
      Paso 2: calcular <br>
      (8/3) - 0 = 8/3 <br>
       Área bajo la curva = 8/3
    </p>
  </div>

  <h2> Propiedades de la integral</h2>

  <div>
    <h3>🔸 Reglas básicas</h3>
    <ul>
      <li>∫ (f + g) dx = ∫ f dx + ∫ g dx</li>
      <li>∫ kf(x) dx = k ∫ f(x) dx</li>
      <li>∫ de a a = 0</li>
      <li>Si intercambias límites → cambia signo</li>
    </ul>

    <p><b>Ejemplo:</b><br>
      ∫ de 0 a 1 de (x + 2) dx <br>
      = ∫ x dx + ∫ 2 dx <br>
      = (1/2) + 2 = 5/2
    </p>
  </div>

  <h2> Aplicaciones de las integrales</h2>

  <div>
    <h3>🔸 Acumulación</h3>
    <ul>
      <li>Distancia a partir de velocidad</li>
      <li>Área total</li>
      <li>Crecimiento acumulado</li>
    </ul>

    <p><b>Ejemplo fácil:</b><br>
      Velocidad: v(t) = t <br>
      Distancia de 0 a 2: <br>
      ∫ t dt = 2
    </p>

    <p><b>Ejemplo más difícil:</b><br>
      v(t) = 3t² <br>
      Distancia de 0 a 2: <br>
      ∫ 3t² dt → t³ <br>
      Evaluar: 8 - 0 = 8 <br>
       Distancia total = 8
    </p>
  </div>

  <h2> Tips </h2>

  <p>La integral no es magia… es acumulación ordenada.</p>
  <ul>
    <li>Piensa en áreas o acumulación</li>
    <li>Siempre evalúa en límites</li>
    <li>Divide funciones en partes si es necesario</li>
    <li>Visualiza la gráfica</li>
  </ul>

  <p><b>Ejemplo:</b></p>
  <p>
    ∫ de 0 a 1 de x² dx <br>
    Resultado: 1/3
  </p>
</section>
`},
//dia 11
{tema:"Integral indefinida",
exp:`
<section>
  <p>La integral indefinida es básicamente el “viaje inverso” de la derivada. Si la derivada nos dice cómo cambia una función, la integral nos dice cuál era la función original antes de derivarla. Como al derivar se pierde cualquier constante, la incluimos siempre al final como <b>C</b>.</p>

  <h3> Conceptos básicos</h3>
  <ul>
    <li><b>Antiderivada:</b> Función que, al derivarse, nos da la función original. Por ejemplo, si f(x) = 2x, entonces su antiderivada es F(x) = x², porque (x²)&#39; = 2x.</li>
    <li><b>Constante de integración (C):</b> Al derivar cualquier número constante desaparece, entonces al integrar debemos sumarla para cubrir todas las posibles funciones originales.</li>
    <li><b>Integral indefinida:</b> Se escribe así: ∫ f(x) dx = F(x) + C</li>
  </ul>

  <h2> Fórmulas básicas de integración</h2>

  <div>
    <h3>🔹 Integrales de potencias</h3>
    <p>Para integrar potencias de x usamos esta regla:</p>
    <ul>
      <li>∫ xⁿ dx = xⁿ⁺¹ / (n + 1) + C, siempre que n ≠ -1</li>
      <li>∫ 1/x dx = ln|x| + C (caso especial para n = -1)</li>
    </ul>
    <p><b>Ejemplo fácil:</b> ∫ x² dx → subimos el exponente en 1 → x² → x³, dividimos entre el nuevo exponente → x³ / 3 + C</p>
    <p><b>Ejemplo difícil:</b> ∫ (3x² + 2x + 1) dx → integrando término por término:</p>
    <ul>
      <li>∫ 3x² dx = 3·(x³/3) = x³</li>
      <li>∫ 2x dx = 2·(x²/2) = x²</li>
      <li>∫ 1 dx = x</li>
    </ul>
    <p>Sumamos todo y agregamos C → x³ + x² + x + C</p>
  </div>

  <div>
    <h3>🔹 Integrales de funciones trascendentes</h3>
    <p>Las funciones trascendentes son aquellas que no son polinomios, como exponenciales, logaritmos y trigonométricas. Cada una tiene su propia regla:</p>
    <ul>
      <li>∫ e^x dx = e^x + C</li>
      <li>∫ a^x dx = a^x / ln(a) + C, a &gt; 0, a ≠ 1</li>
      <li>∫ sin x dx = -cos x + C</li>
      <li>∫ cos x dx = sin x + C</li>
      <li>∫ sec² x dx = tan x + C</li>
      <li>∫ csc² x dx = -cot x + C</li>
    </ul>
    <p><b>Ejemplo fácil:</b> ∫ e^x dx = e^x + C</p>
    <p><b>Ejemplo difícil:</b> ∫ (2e^x + 3 cos x - 1/x) dx → integrando término por término:</p>
    <ul>
      <li>∫ 2e^x dx = 2e^x</li>
      <li>∫ 3 cos x dx = 3 sin x</li>
      <li>∫ -1/x dx = -ln|x|</li>
    </ul>
    <p>Sumamos todo y agregamos C → 2e^x + 3 sin x - ln|x| + C</p>
  </div>

  <h2> Tips para entender la integral indefinida</h2>
  <ul>
    <li>Piénsalo como deshacer una derivada: pregunta siempre “¿qué función tenía que derivar para obtener esta?”</li>
    <li>Agrega siempre la constante C al final, porque podría ser cualquier número que desapareció al derivar.</li>
    <li>Para integrar sumas o restas, hazlo término por término: ∫ (f(x) ± g(x)) dx = ∫ f(x) dx ± ∫ g(x) dx</li>
    <li>Si nunca viste productos o funciones complicadas, empieza solo con polinomios, senos, cosenos, exponenciales y logaritmos</li>
  </ul>

</section>
`},
//dia 12
{tema:"Métodos de integración",
exp:`
<section>
  <p>Cuando las integrales son más complicadas que las básicas, necesitamos técnicas especiales para encontrar la antiderivada. Cada método nos ayuda a simplificar la integral para poder resolverla.</p>

  <h3> Conceptos</h3>
  <ul>
    <li><b>Por sustitución:</b> Cambiamos variables para simplificar la integral.</li>
    <li><b>Integración por partes:</b> Se aplica cuando la integral es el producto de dos funciones.</li>
    <li><b>Sustitución trigonométrica:</b> Se usa para integrales con raíces cuadradas que se parecen a fórmulas trigonométricas.</li>
    <li><b>Fracciones parciales:</b> Descomponemos una función racional en fracciones más simples para integrar fácilmente.</li>
  </ul>

  <h2> Método 1: Por sustitución</h2>

  <div>
    <h3>🔹 Concepto</h3>
    <p>Se elige una parte de la integral como u = g(x), y luego dx se reemplaza según du = g&#39;(x) dx. Esto simplifica la integral.</p>

    <p><b>Ejemplo fácil:</b> ∫ 2x(x² + 1) dx</p>
    <ul>
      <li>Elegimos u = x² + 1 → du = 2x dx</li>
      <li>Integral se convierte en ∫ u du = u²/2 + C</li>
      <li>Volvemos a x → (x² + 1)² / 2 + C</li>
    </ul>

    <p><b>Ejemplo difícil:</b> ∫ x e^(x²) dx</p>
    <ul>
      <li>u = x² → du = 2x dx → (1/2) du = x dx</li>
      <li>Integral se convierte en (1/2) ∫ e^u du = (1/2) e^u + C</li>
      <li>Volvemos a x → (1/2) e^(x²) + C</li>
    </ul>
  </div>

  <h2> Método 2: Integración por partes</h2>

  <div>
    <h3>🔹 Concepto</h3>
    <p>Se aplica la fórmula ∫ u dv = u·v - ∫ v du, donde u y dv son partes de la integral.</p>

    <p><b>Ejemplo fácil:</b> ∫ x e^x dx</p>
    <ul>
      <li>u = x → du = dx</li>
      <li>dv = e^x dx → v = e^x</li>
      <li>∫ x e^x dx = x·e^x - ∫ e^x dx = x e^x - e^x + C</li>
    </ul>

    <p><b>Ejemplo difícil:</b> ∫ x² ln(x) dx</p>
    <ul>
      <li>u = ln(x) → du = dx/x</li>
      <li>dv = x² dx → v = x³/3</li>
      <li>∫ x² ln(x) dx = (ln(x)·x³/3) - ∫ (x³/3)(1/x) dx = x³ ln(x)/3 - ∫ x²/3 dx</li>
      <li>Integral final: x³ ln(x)/3 - x³/9 + C</li>
    </ul>
  </div>

  <h2> Método 3: Sustitución trigonométrica</h2>

  <div>
    <h3>🔹 Concepto</h3>
    <p>Se usa cuando la integral tiene raíces como √(a² - x²), √(a² + x²) o √(x² - a²), usando identidades trigonométricas para simplificar.</p>

    <p><b>Ejemplo fácil:</b> ∫ dx / √(1 - x²)</p>
    <ul>
      <li>Sustituimos x = sin θ → dx = cos θ dθ</li>
      <li>Integral se convierte en ∫ cos θ / √(1 - sin² θ) dθ = ∫ cos θ / cos θ dθ = ∫ dθ = θ + C</li>
      <li>Volvemos a x → arcsin(x) + C</li>
    </ul>

    <p><b>Ejemplo difícil:</b> ∫ √(4 - x²) dx</p>
    <ul>
      <li>Sustituimos x = 2 sin θ → dx = 2 cos θ dθ</li>
      <li>Integral: ∫ √(4 - 4 sin² θ) · 2 cos θ dθ = ∫ √(4 cos² θ) · 2 cos θ dθ = ∫ 4 cos² θ dθ</li>
      <li>Usamos identidad cos² θ = (1 + cos 2θ)/2 → ∫ 4·(1 + cos 2θ)/2 dθ = ∫ (2 + 2 cos 2θ) dθ = 2θ + sin 2θ + C</li>
      <li>Volvemos a x → 2 arcsin(x/2) + (x/2)√(4 - x²) + C</li>
    </ul>
  </div>

  <h2> Método 4: Fracciones parciales</h2>

  <div>
    <h3>🔹 Concepto</h3>
    <p>Se usa para integrar funciones racionales (cocientes de polinomios). La idea es descomponer la función en sumas de fracciones más simples.</p>

    <p><b>Ejemplo fácil:</b> ∫ 1 / (x² - 1) dx</p>
    <ul>
      <li>Factorizamos denominador: x² - 1 = (x - 1)(x + 1)</li>
      <li>Descomponemos: 1/(x² - 1) = A/(x - 1) + B/(x + 1)</li>
      <li>Resolvemos A = 1/2, B = -1/2 → ∫ 1/2 (1/(x-1) - 1/(x+1)) dx = (1/2) ln|x-1| - (1/2) ln|x+1| + C</li>
    </ul>

    <p><b>Ejemplo difícil:</b> ∫ (3x + 5) / (x² + 2x - 3) dx</p>
    <ul>
      <li>Factorizamos denominador: x² + 2x - 3 = (x + 3)(x - 1)</li>
      <li>Descomponemos: (3x + 5)/(x + 3)(x - 1) = A/(x + 3) + B/(x - 1)</li>
      <li>Resolvemos: A = 2, B = 1 → ∫ 2/(x+3) + 1/(x-1) dx = 2 ln|x+3| + ln|x-1| + C</li>
    </ul>
  </div>

  <h2> Tips </h2>
  <ul>
    <li>Elige el método según la forma de la integral.</li>
    <li>Por sustitución simplifica funciones compuestas.</li>
    <li>Por partes se usa en productos de funciones.</li>
    <li>Sustitución trigonométrica funciona con raíces cuadradas especiales.</li>
    <li>Fracciones parciales sirve para cocientes de polinomios.</li>
  </ul>

</section>
`},
//dia 13
{tema:"Integral definida",
exp:`
<section>
  <p>La integral definida se usa para calcular el área bajo una curva entre dos puntos específicos, de a hasta b. A diferencia de la integral indefinida, ahora tenemos límites de integración y el resultado es un número.</p>

  <h3> Conceptos</h3>
  <ul>
    <li><b>Integral definida:</b> ∫<sub>a</sub><sup>b</sup> f(x) dx representa el área entre la curva f(x) y el eje x desde x = a hasta x = b.</li>
    <li><b>Límites de integración:</b> a es el límite inferior y b el límite superior.</li>
    <li><b>Teorema fundamental del cálculo:</b> Si F(x) es una antiderivada de f(x), entonces ∫<sub>a</sub><sup>b</sup> f(x) dx = F(b) - F(a).</li>
  </ul>

  <h2> Ejemplos de integral definida</h2>

  <div>
    <h3>🔹 Ejemplo fácil: Área bajo la curva</h3>
    <p>∫<sub>0</sub><sup>2</sup> x dx</p>
    <ul>
      <li>Antiderivada: F(x) = x² / 2</li>
      <li>Aplicamos el teorema fundamental: F(2) - F(0) = (2² / 2) - (0² / 2) = 2</li>
    </ul>
    <p><b>Explicación:</b> El área bajo la línea recta y = x desde x = 0 hasta x = 2 es 2 unidades cuadradas.</p>
  </div>

  <div>
    <h3>🔹 Ejemplo difícil: Área bajo curva cuadrática</h3>
    <p>∫<sub>1</sub><sup>3</sup> (2x² + 3x) dx</p>
    <ul>
      <li>Antiderivada: F(x) = (2/3)x³ + (3/2)x²</li>
      <li>Aplicamos teorema: F(3) - F(1) = [(2/3)·27 + (3/2)·9] - [(2/3)·1 + (3/2)·1] = (18 + 13.5) - (0.6667 + 1.5) = 31.5 - 2.1667 ≈ 29.33</li>
    </ul>
    <p><b>Explicación:</b> Calculamos el área exacta bajo la curva desde x = 1 hasta x = 3 usando la antiderivada.</p>
  </div>

  <h2> Sólidos de revolución</h2>
  <p>Si giramos una curva alrededor de un eje, la integral definida nos permite calcular el volumen del sólido generado.</p>

  <div>
    <h3>🔹 Ejemplo fácil:</h3>
    <p>Volumen al girar y = x desde x = 0 hasta x = 1 alrededor del eje x</p>
    <ul>
      <li>Fórmula: V = π ∫<sub>0</sub><sup>1</sup> (x)² dx = π ∫<sub>0</sub><sup>1</sup> x² dx</li>
      <li>Antiderivada: F(x) = x³ / 3 → V = π [1³/3 - 0³/3] = π/3</li>
    </ul>
    <p><b>Explicación:</b> Girando la línea y = x obtenemos un cono y calculamos su volumen con la integral definida.</p>
  </div>

  <div>
    <h3>🔹 Ejemplo difícil:</h3>
    <p>Volumen al girar y = √x desde x = 0 hasta x = 4 alrededor del eje x</p>
    <ul>
      <li>V = π ∫<sub>0</sub><sup>4</sup> (√x)² dx = π ∫<sub>0</sub><sup>4</sup> x dx</li>
      <li>Antiderivada: F(x) = x² / 2 → V = π [16/2 - 0] = 8π</li>
    </ul>
    <p><b>Explicación:</b> Girando la curva obtenemos un sólido parabólico, calculando el volumen con la integral definida.</p>
  </div>

  <h2> Longitud de arco</h2>
  <p>La integral también permite calcular la longitud de una curva entre dos puntos.</p>

  <div>
    <h3>🔹 Concepto:</h3>
    <ul>
      <li>Fórmula: L = ∫<sub>a</sub><sup>b</sup> √(1 + (f&#39;(x))²) dx</li>
      <li>f&#39;(x) es la derivada de la función</li>
    </ul>
    <p><b>Ejemplo fácil:</b> y = x, desde x = 0 hasta x = 1</p>
    <ul>
      <li>f&#39;(x) = 1 → L = ∫<sub>0</sub><sup>1</sup> √(1 + 1²) dx = ∫<sub>0</sub><sup>1</sup> √2 dx = √2 [x]<sub>0</sub><sup>1</sup> = √2</li>
    </ul>
    <p><b>Ejemplo difícil:</b> y = x², desde x = 0 hasta x = 1</p>
    <ul>
      <li>f&#39;(x) = 2x → L = ∫<sub>0</sub><sup>1</sup> √(1 + (2x)²) dx = ∫<sub>0</sub><sup>1</sup> √(1 + 4x²) dx</li>
      <li>Esta integral requiere sustitución trigonométrica: x = (1/2) tan θ → dx = (1/2) sec² θ dθ</li>
      <li>Se transforma en ∫ sec³ θ /2 dθ → L = (1/4) [sinh⁻¹(2x) + ...] → cálculo final usando antiderivadas especiales</li>
    </ul>
    <p><b>Explicación:</b> Para curvas más complejas necesitamos técnicas avanzadas, pero el proceso siempre es: derivada → fórmula de longitud → integral definida.</p>
  </div>

  <h2> Tips </h2>
  <ul>
    <li>La integral definida da un número (área o volumen), mientras que la indefinida da una función general.</li>
    <li>Para áreas, considera el eje x y la función. Si la curva cruza el eje x, divide en partes positivas y negativas.</li>
    <li>Para sólidos de revolución, siempre usa π ∫ [f(x)]² dx o la versión con eje y según corresponda.</li>
    <li>Para longitud de arco, calcula la derivada, suma 1 y eleva al cuadrado dentro de la raíz, luego integra entre los límites.</li>
  </ul>

</section>
`},
//dia 14
{tema:"Geometría euclidiana",
exp:`
<section>
  <p>La geometría euclidiana estudia las figuras planas y sus propiedades, usando puntos, líneas, ángulos y figuras geométricas básicas. Es la base de toda la geometría clásica.</p>

  <h3> Elementos básicos</h3>
  <ul>
    <li><b>Punto:</b> Representa una posición en el espacio sin dimensiones.</li>
    <li><b>Línea:</b> Sucesión infinita de puntos en una sola dirección. Puede ser recta, segmento o semirrecta.</li>
    <li><b>Plano:</b> Superficie plana e infinita determinada por tres puntos no colineales.</li>
    <li><b>Ángulo:</b> Es la abertura formada por dos líneas que se intersectan.</li>
  </ul>

  <h2> Triángulos</h2>

  <div>
    <h3>🔹 Concepto</h3>
    <p>Un triángulo es un polígono de tres lados y tres ángulos. Sus propiedades dependen de la longitud de sus lados y la medida de sus ángulos.</p>

    <h3>🔹 Tipos de triángulos</h3>
    <ul>
      <li><b>Por lados:</b> Equilátero (3 lados iguales), Isósceles (2 lados iguales), Escaleno (3 lados distintos)</li>
      <li><b>Por ángulos:</b> Acutángulo (3 ángulos agudos), Rectángulo (1 ángulo recto), Obtusángulo (1 ángulo obtuso)</li>
    </ul>

    <h3>🔹 Ejemplos</h3>
    <p><b>Ejemplo fácil:</b> Triángulo equilátero con lado 4 cm → todos los ángulos = 60° y área = (√3/4)·4² = 4√3 cm²</p>
    <p><b>Ejemplo difícil:</b> Triángulo con lados 5, 6 y 7 → Área usando fórmula de Herón: s = (5+6+7)/2 = 9 → Área = √(9·(9-5)(9-6)(9-7)) = √(9·4·3·2) = √216 ≈ 14.7 cm²</p>
  </div>

  <h2> Polígonos</h2>

  <div>
    <h3>🔹 Concepto</h3>
    <p>Un polígono es una figura cerrada formada por segmentos de línea recta. Puede ser regular (todos los lados y ángulos iguales) o irregular.</p>

    <h3>🔹 Propiedades</h3>
    <ul>
      <li>La suma de los ángulos interiores de un polígono de n lados: (n-2)·180°</li>
      <li>La suma de los ángulos exteriores siempre = 360°</li>
    </ul>

    <h3>🔹 Ejemplos</h3>
    <p><b>Ejemplo fácil:</b> Pentágono regular → n=5 → suma ángulos interiores = (5-2)·180° = 540° → cada ángulo = 108°</p>
    <p><b>Ejemplo difícil:</b> Hexágono irregular con ángulos conocidos 110°, 120°, 100°, 90°, 80° → ángulo faltante = 720° - 500° = 220°</p>
  </div>

  <h2> Circunferencia</h2>

  <div>
    <h3>🔹 Concepto</h3>
    <p>La circunferencia es el conjunto de todos los puntos en un plano que están a la misma distancia (radio) de un punto fijo (centro).</p>

    <h3>🔹 Elementos</h3>
    <ul>
      <li><b>Radio (r):</b> Segmento desde el centro hasta cualquier punto de la circunferencia.</li>
      <li><b>Diámetro (d):</b> Segmento que pasa por el centro, d = 2·r.</li>
      <li><b>Cuerda:</b> Segmento que une dos puntos de la circunferencia.</li>
      <li><b>Tangente:</b> Línea que toca la circunferencia en un solo punto.</li>
    </ul>

    <h3>🔹 Ejemplos</h3>
    <p><b>Ejemplo fácil:</b> Circunferencia con r = 3 → d = 6, perímetro = 2πr = 6π, área = πr² = 9π</p>
    <p><b>Ejemplo difícil:</b> Hallar la ecuación de una circunferencia con centro (2, -1) y que pasa por (5, 3) → r² = (5-2)² + (3+1)² = 9 + 16 = 25 → ecuación: (x-2)² + (y+1)² = 25</p>
  </div>

  <h2> Tips </h2>
  <ul>
    <li>Triángulos: siempre revisa tipos por lados y ángulos.</li>
    <li>Polígonos: la suma de ángulos interiores depende del número de lados.</li>
    <li>Circunferencia: recuerda radio, diámetro, cuerda, tangente y fórmulas de área/perímetro.</li>
    <li>Para problemas más difíciles, aplica fórmulas como Herón, ecuaciones de circunferencia o suma de ángulos desconocidos.</li>
  </ul>

</section>
`},
//dia 15
{tema:"Geometría analítica",
exp:`
<section>
  <p>La geometría analítica combina álgebra y geometría para representar figuras mediante ecuaciones en el plano cartesiano, permitiendo calcular distancias, pendientes, áreas y posiciones exactas de los puntos.</p>

  <h3> Plano cartesiano</h3>
  <p>El plano cartesiano tiene dos ejes perpendiculares: el eje x (horizontal) y el eje y (vertical). Cada punto se identifica con coordenadas (x, y).</p>
  <img src="https://conhecimentocientifico.r7.com/wp-content/uploads/2020/01/plano-cartesiano-o-que-e-como-fazer-caracteristicas-e-coordenadas-375x375.jpg" 
  <ul>
    <li><b>Origen:</b> Punto (0, 0) donde se intersectan los ejes.</li>
    <li><b>Cuadrantes:</b> Dividen el plano en 4 partes: I (+,+), II (-,+), III (-,-), IV (+,-).</li>
  </ul>
  <p><b>Ejemplo:</b> Punto P(3,2) → 3 unidades a la derecha del origen y 2 hacia arriba.</p>

  <h3> Línea recta</h3>
  <p>La ecuación de la recta describe todos los puntos alineados. La forma más común es y = mx + b, donde m es la pendiente y b la ordenada al origen.</p>
  <img src="https://cursoparalaunam.com/wp-content/uploads/2020/08/GRAFICA-DE-LA-RECTA.png" 
  <ul>
    <li><b>Pendiente (m):</b> Indica inclinación → m = (y₂ - y₁)/(x₂ - x₁)</li>
    <li><b>Ordenada al origen (b):</b> Punto donde la recta corta el eje y</li>
  </ul>
  <p><b>Ejemplo fácil:</b> y = 2x + 1 → pendiente 2, corta el eje y en 1.</p>
  <p><b>Ejemplo difícil:</b> Hallar recta que pasa por P(1,2) y Q(3,6) → m = (6-2)/(3-1) = 4/2 = 2 → y - 2 = 2(x-1) → y = 2x</p>

  <h3> Circunferencia</h3>
  <p>En geometría analítica, una circunferencia se representa mediante su ecuación: (x-h)² + (y-k)² = r², donde (h,k) es el centro y r el radio.</p>
  <img src="https://www.neurochispas.com/wp-content/uploads/2021/04/grafica-de-circunferencia.png" alt="Circunferencia" width="400">
  <ul>
    <li><b>Centro:</b> (h,k)</li>
    <li><b>Radio:</b> Distancia desde el centro a cualquier punto de la circunferencia</li>
  </ul>
  <p><b>Ejemplo fácil:</b> Centro en (0,0), r = 3 → ecuación x² + y² = 9</p>
  <p><b>Ejemplo difícil:</b> Centro en (2,-1), r = 5 → ecuación (x-2)² + (y+1)² = 25</p>

  <h2> Tips </h2>
  <ul>
    <li>Para el plano cartesiano, identifica el cuadrante antes de ubicar puntos.</li>
    <li>Para rectas, siempre calcula pendiente y ordenada al origen, o usa la fórmula punto-pendiente.</li>
    <li>Para circunferencias, identifica centro y radio para escribir la ecuación correcta.</li>
    <li>En problemas más complejos, combina distancias, pendientes y ecuaciones para hallar intersecciones o distancias entre figuras.</li>
  </ul>

</section>
`},
//dia 16
{tema:"Geometría analítica",
exp:`
<section>
  <p>Las curvas cónicas son figuras que se obtienen al cortar un cono con un plano. En geometría analítica, se representan con ecuaciones y tienen elementos característicos como vértice, foco, directriz, parámetro, ejes, asintotas y más.</p>

  <h3> Parábola</h3>
  <p>La parábola es el lugar geométrico de los puntos equidistantes de un foco y una directriz. Tiene forma de “U” y se abre hacia arriba, abajo, izquierda o derecha.</p>
  <img src="https://matematix.org/wp-content/uploads/parabola-que-es-y-cuales-son-sus-elementos-esenciales-768x604.jpg" alt="Parábola" width="400">
  <ul>
    <li><b>Vértice (V):</b> Punto donde cambia la dirección de la parábola.</li>
    <li><b>Foco (F):</b> Punto dentro de la parábola que está a la misma distancia que cualquier punto de la curva a la directriz.</li>
    <li><b>Directriz:</b> Línea fija que ayuda a definir la parábola.</li>
    <li><b>Lado recto (LR):</b> Segmento perpendicular al eje que pasa por el foco y toca la parábola en dos puntos → LR = 4a</li>
    <li><b>Parámetro (p):</b> Distancia del vértice al foco → p = a</li>
  </ul>
  <p><b>Ejemplo fácil:</b> y² = 4x → vértice (0,0), foco (1,0), directriz x = -1, lado recto = 4, parámetro p = 1</p>
  <p><b>Ejemplo difícil:</b> y² + 6y - 8x + 9 = 0 → completamos cuadrado: y² + 6y + 9 = 8x → (y+3)² = 8(x+?) → verificamos vértice, foco, directriz, lado recto</p>

  <h3> Elipse</h3>
  <p>La elipse es el lugar geométrico de los puntos cuya <b>suma de distancias a dos focos</b> es constante. Tiene forma ovalada.</p>
  <img src="https://www.neurochispas.com/wp-content/uploads/2021/04/elementos-de-una-elipse.png" alt="Elipse" width="400">
  <ul>
    <li><b>Ecuación:</b> (x²/a²) + (y²/b²) = 1, donde a > b → eje mayor horizontal</li>
    <li><b>Centro:</b> (0,0)</li>
    <li><b>Ejes:</b> Mayor eje 2a, menor eje 2b</li>
    <li><b>Focos:</b> Distancia c desde el centro: c = √(a²-b²), ubicados en (±c,0)</li>
    <li><b>Excentricidad (e):</b> e = c/a → describe qué tan “alargada” está la elipse</li>
  </ul>
  <p><b>Ejemplo fácil:</b> (x²/4) + (y²/1) = 1 → a=2, b=1, c=√(4-1)=√3 ≈1.73, focos (±1.73,0), e=0.866</p>
  <p><b>Ejemplo difícil:</b> (x²/9) + (y²/4) = 1 → a=3, b=2, c = √(9-4) = √5 ≈ 2.236 → focos (±2.236,0), e = 0.745</p>

  <h3> Hipérbola</h3>
  <p>La hipérbola es el lugar geométrico de los puntos cuya <b>diferencia de distancias a dos focos</b> es constante. Tiene dos ramas abiertas.</p>
  <img src="https://www.caosyciencia.com/wp-content/uploads/2024/10/elementos-hiperbola-claves-y-aplicaciones-en-matematicas.png" alt="Hipérbola" width="400">
  <ul>
    <li><b>Ecuación:</b> (x²/a²) - (y²/b²) = 1 → ramas horizontales, o (y²/a²) - (x²/b²) = 1 → verticales</li>
    <li><b>Centro:</b> (0,0)</li>
    <li><b>Ejes:</b> Eje transversal: 2a, eje conjugado: 2b</li>
    <li><b>Focos:</b> c = √(a² + b²), ubicados en (±c,0) o (0,±c)</li>
    <li><b>Asintotas:</b> Rectas que la hipérbola se aproxima: y = ±(b/a)x (horizontal) o y = ±(a/b)x (vertical)</li>
    <li><b>Excentricidad:</b> e = c/a > 1 → describe “apertura” de las ramas</li>
  </ul>
  <p><b>Ejemplo fácil:</b> (x²/4) - (y²/1) = 1 → a=2, b=1, c=√(4+1)=√5 ≈ 2.236 → focos (±2.236,0), asintotas y = ±(1/2)x</p>
  <p><b>Ejemplo difícil:</b> (x²/9) - (y²/16) = 1 → a=3, b=4 → c = √(9+16)=√25=5 → focos (±5,0), asintotas y = ±(4/3)x</p>

  <h2> Tips </h2>
  <ul>
    <li>Parábola: identifica vértice, foco, directriz, lado recto y parámetro.</li>
    <li>Elipse: identifica a, b, c, focos y excentricidad para ubicar puntos importantes.</li>
    <li>Hipérbola: identifica a, b, c, focos, asintotas y eje transversal/conjugado.</li>
    <li>Siempre dibuja un esquema antes de resolver problemas complejos.</li>
  </ul>
</section>
`},
//dia 17
{tema:"Geometría analítica",
exp:`
<section>
  <p>Además del plano cartesiano, podemos usar otros sistemas de coordenadas y representaciones de curvas. Dos herramientas importantes son el plano polar y las ecuaciones paramétricas.</p>

  <h3> Plano polar</h3>
  <p>El plano polar representa puntos mediante <b>distancia y ángulo</b> en lugar de coordenadas x y y. Cada punto se define por (r, θ):</p>
  <ul>
    <li><b>r:</b> Distancia desde el origen (polo) hasta el punto</li>
    <li><b>θ:</b> Ángulo que forma la línea con el eje polar (generalmente el eje positivo x)</li>
  </ul>
  <img src="https://1.bp.blogspot.com/-RWXbxob3hi4/YOrqfLLWBaI/AAAAAAAAEtM/NBqQNWIKOWYGyW1mwQyQ4wb9CEsVdIKSACLcBGAsYHQ/s1352/polar_coordinate_system.png" alt="Plano polar" width="400">
  <p>Fórmula de conversión entre coordenadas cartesianas y polares:</p>
  <ul>
    <li>x = r cos(θ)</li>
    <li>y = r sin(θ)</li>
    <li>r = √(x² + y²)</li>
    <li>θ = arctan(y/x)</li>
  </ul>
  <p><b>Ejemplo fácil:</b> Punto polar (r=2, θ=60°) → x = 2 cos60° = 1, y = 2 sin60° ≈ 1.732 → coordenadas cartesianas (1, 1.732)</p>
  <p><b>Ejemplo difícil:</b> Convertir punto cartesiano (-3, 3√3) a polar → r = √((-3)² + (3√3)²) = √(9+27) = √36 =6 → θ = arctan((3√3)/-3) = arctan(-√3) = 120° → polar (6, 120°)</p>

  <h3> Ecuaciones paramétricas</h3>
  <p>Las ecuaciones paramétricas describen curvas usando un parámetro <b>t</b> en lugar de relacionar directamente x e y. Cada punto de la curva se obtiene con x(t) y y(t).</p>
  <ul>
    <li><b>Parámetro (t):</b> Variable que genera los puntos de la curva</li>
    <li><b>x = f(t), y = g(t):</b> Representan la coordenada x y la coordenada y en función de t</li>
    <li>Permite describir trayectorias, movimientos o curvas complejas que no se pueden expresar fácilmente con y = f(x)</li>
  </ul>
  <p><b>Ejemplo fácil:</b> x = t, y = t² → curva = parábola</p>
  <p><b>Ejemplo difícil:</b> x = cos(t), y = sin(t) → curva = circunferencia de radio 1, t ∈ [0, 2π]</p>
  <p>Para hallar pendientes o derivadas: dy/dx = (dy/dt)/(dx/dt) si la curva es diferenciable.</p>

  <h2> Tips </h2>
  <ul>
    <li>En el plano polar, siempre identifica r y θ, y dibuja desde el origen con el ángulo correspondiente.</li>
    <li>En ecuaciones paramétricas, el parámetro t genera todos los puntos de la curva; útil para movimientos y trayectorias.</li>
    <li>Se puede convertir de coordenadas polares a cartesianas y viceversa para combinar análisis.</li>
    <li>Para pendientes de curvas paramétricas: usa dy/dx = (dy/dt)/(dx/dt) para entender inclinación en cada punto.</li>
  </ul>

</section>
`},
//dia 18
{tema:"Razonamiento matemático",
exp:`
<section>
  <p>El razonamiento matemático nos ayuda a entender patrones, relaciones y estructuras de números y figuras. Es fundamental para resolver problemas lógicos y espaciales.</p>

  <h3> Sucesiones numéricas</h3>
  <p>Una sucesión es una lista ordenada de números siguiendo una regla o patrón. Cada número se llama término.</p>
  <ul>
    <li><b>Ejemplo fácil:</b> 2, 4, 6, 8 → patrón: sumar 2 cada vez</li>
    <li><b>Ejemplo difícil:</b> 3, 6, 12, 24 → patrón: multiplicar por 2 cada vez</li>
  </ul>

  <h3> Series espaciales</h3>
  <p>Son secuencias de figuras o formas donde debemos identificar un patrón visual, rotación o posición. Se usan mucho en exámenes de inteligencia espacial.</p>
  <ul>
    <li><b>Ejemplo fácil:</b> cuadrados que aumentan de tamaño: 1x1, 2x2, 3x3 → patrón: lado aumenta +1</li>
    <li><b>Ejemplo difícil:</b> rotación de triángulos en 90° → debes predecir la siguiente posición del triángulo</li>
  </ul>

  <h3> Imaginación espacial</h3>
  <p>Habilidad de visualizar y manipular mentalmente objetos en el espacio. Muy útil para resolver problemas de geometría o física.</p>
  <ul>
    <li><b>Ejemplo fácil:</b> doblar un cuadrado de papel en 2 → visualizar su forma final</li>
    <li><b>Ejemplo difícil:</b> imaginar un cubo girando 180° y determinar qué caras se ven desde un ángulo específico</li>
  </ul>

</section>
`},
//dia 19
{tema:"Principios de números reales",
exp:`
<section>
  <p>Los números reales incluyen todos los números que puedes imaginar en la recta numérica. Para operar correctamente debemos conocer reglas básicas.</p>

  <h3> Ley de los signos</h3>
  <p>Determina el signo del resultado al multiplicar o dividir números:</p>
  <ul>
    <li>+ × + = +</li>
    <li>+ × - = -</li>
    <li>- × - = +</li>
  </ul>
  <p><b>Ejemplo fácil:</b> (-2) × 3 = -6</p>
  <p><b>Ejemplo difícil:</b> (-5) × (-4) × 2 = 40</p>

  <h3> Ley de los exponentes</h3>
  <p>Reglas para operar potencias de números reales:</p>
  <ul>
    <li>a^m × a^n = a^(m+n)</li>
    <li>(a^m)^n = a^(m×n)</li>
    <li>a^0 = 1</li>
  </ul>
  <p><b>Ejemplo fácil:</b> 2^3 × 2^4 = 2^7 = 128</p>
  <p><b>Ejemplo difícil:</b> (3^2)^4 ÷ 3^5 = 3^(2×4 - 5) = 3^3 = 27</p>

  <h3> Jerarquía de operaciones</h3>
  <p>Indica el orden en que se realizan las operaciones:</p>
  <ul>
    <li>Paréntesis → Potencias/raíces → Multiplicación/División → Suma/Resta</li>
  </ul>
  <p><b>Ejemplo fácil:</b> 2 + 3 × 4 = 2 + 12 = 14</p>
  <p><b>Ejemplo difícil:</b> (2 + 3)^2 ÷ (1 + 1) = 25 ÷ 2 = 12.5</p>

</section>
`},
//dia 20
{tema:"Principios de números reales",
exp:`
<section>
  <p>Es fundamental para simplificar operaciones y resolver problemas de divisibilidad y factores.</p>

  <h3> Múltiplos y divisores</h3>
  <p>Un múltiplo de un número es el resultado de multiplicarlo por cualquier número entero. Un divisor divide exactamente al número.</p>
  <ul>
    <li><b>Ejemplo fácil:</b> múltiplos de 3 → 3, 6, 9… divisores de 12 → 1, 2, 3, 4, 6, 12</li>
    <li><b>Ejemplo difícil:</b> divisores de 36 → 1, 2, 3, 4, 6, 9, 12, 18, 36</li>
  </ul>

  <h3> Mínimo común múltiplo (MCM)</h3>
  <p>El menor número que es múltiplo común de varios números.</p>
  <p><b>Ejemplo fácil:</b> MCM(4,6) = 12</p>
  <p><b>Ejemplo difícil:</b> MCM(12,18,30) = 180</p>

  <h3> Máximo común divisor (MCD)</h3>
  <p>El mayor número que divide exactamente a varios números.</p>
  <p><b>Ejemplo fácil:</b> MCD(8,12) = 4</p>
  <p><b>Ejemplo difícil:</b> MCD(48,60,72) = 12</p>

  <h3> Notación científica</h3>
  <p>Permite expresar números muy grandes o muy pequeños como potencia de 10: N × 10^n, donde 1 ≤ N < 10.</p>
  <p><b>Ejemplo fácil:</b> 5000 = 5 × 10^3</p>
  <p><b>Ejemplo difícil:</b> 0.00072 = 7.2 × 10^-4</p>

</section>
`},
//dia 21
{tema:"Problemas con números racionales",
exp:`
<section>
  <p>Los números racionales permiten dividir, comparar y relacionar cantidades en problemas cotidianos. Se usan razones, proporciones y regla de tres para resolverlos.</p>

  <h3> Razones</h3>
  <p>Relación entre dos cantidades que indica cuántas veces una contiene a la otra.</p>
  <ul>
    <li><b>Ejemplo fácil:</b> Si hay 8 manzanas y 4 naranjas → razón manzanas:naranjas = 8:4 = 2:1</li>
    <li><b>Ejemplo difícil:</b> 15 lápices por cada 9 cuadernos → razón lápices:cuadernos = 15:9 = 5:3</li>
  </ul>

  <h3> Variaciones</h3>
  <p>Relacionan dos cantidades que cambian juntas. Puede ser directa (ambas aumentan o disminuyen) o inversa (una aumenta y otra disminuye).</p>
  <ul>
    <li><b>Ejemplo fácil:</b> Si 2 trabajadores hacen 10 cajas, 4 trabajadores hacen 20 cajas → variación directa</li>
    <li><b>Ejemplo difícil:</b> Si 3 máquinas llenan 12 botellas en 4 min, ¿cuánto tardarán 6 máquinas? → variación inversa, resultado = 2 min</li>
  </ul>

  <h3> Reparto proporcional</h3>
  <p>Distribución de una cantidad entre varias partes según proporción establecida.</p>
  <ul>
    <li><b>Ejemplo fácil:</b> Repartir $60 entre A y B en razón 1:2 → A=$20, B=$40</li>
    <li><b>Ejemplo difícil:</b> Repartir 240 kg de harina entre tres panaderías en razón 2:3:5 → 48 kg, 72 kg y 120 kg</li>
  </ul>

  <h3> Regla de tres</h3>
  <p>Permite encontrar un valor desconocido cuando tres valores relacionados son conocidos.</p>
  <ul>
    <li><b>Ejemplo fácil:</b> 4 lápices cuestan $8 → ¿cuánto cuestan 10 lápices? → x = (10*8)/4 = $20</li>
    <li><b>Ejemplo difícil:</b> Un carro recorre 180 km en 3 horas → ¿cuánto recorrerá en 7 horas a la misma velocidad? → x = (180*7)/3 = 420 km</li>
  </ul>

</section>
`},
],

fisica: [
// dia 1
{tema:"Electrostática",
exp:`
<section>
  <p>La electrostática estudia cómo se comportan las cargas eléctricas en reposo, cómo se atraen o repelen y cómo generan campos eléctricos a su alrededor. Todo parte de los átomos, donde los protones tienen carga positiva y los electrones carga negativa.</p>

  <h3>Tipos y propiedades de las cargas eléctricas</h3>
  <ul>
    <li><b>Positiva:</b> Carga del protón; atrae a cargas negativas y repele a otras positivas.</li>
    <li><b>Negativa:</b> Carga del electrón; atrae a cargas positivas y repele a otras negativas.</li>
  </ul>

  <h2>Propiedades fundamentales de las cargas</h2>

  <div>
    <h3>🔹 Conservación de la carga</h3>
    <p>La carga eléctrica no se crea ni se destruye, solo se transfiere de un objeto a otro.</p>
    <ul>
      <li>Total de carga antes = Total de carga después</li>
    </ul>
    <p><b>Ejemplo:</b> Frotas un globo con tu cabello. El globo gana electrones y se queda negativo, mientras que tu cabello queda positivo. La carga total no cambia.</p>
  </div>

  <div>
    <h3>🔹 Cuantización de la carga</h3>
    <p>Las cargas eléctricas solo existen en múltiplos de la carga del electrón (<b>e</b> = 1.6 &times; 10<sup>-19</sup> C).</p>
    <ul>
      <li>No hay "medias cargas", siempre enteros de <b>e</b>.</li>
    </ul>
    <p><b>Ejemplo:</b> Un objeto puede tener 3e, 10e, 100e, pero nunca 0.5e.</p>
  </div>

  <h2>Tipos de materiales eléctricos</h2>

  <div>
    <h3>🔸 Conductores</h3>
    <ul>
      <li>Permiten que los electrones se muevan libremente.</li>
      <li>Ejemplos: cobre, aluminio, plata.</li>
    </ul>
  </div>

  <div>
    <h3>🔸 Aislantes</h3>
    <ul>
      <li>No permiten el flujo de electrones.</li>
      <li>Ejemplos: vidrio, plástico, goma.</li>
    </ul>
  </div>

  <div>
    <h3>🔸 Semiconductores</h3>
    <ul>
      <li>Su conductividad cambia con luz, temperatura o dopaje.</li>
      <li>Ejemplos: silicio, germanio.</li>
    </ul>
  </div>

  <div>
    <h3>🔸 Superconductores</h3>
    <ul>
      <li>Conductividad perfecta, sin resistencia eléctrica.</li>
      <li>Ejemplos: YBCO cerámico (alta temperatura).</li>
    </ul>
  </div>

  <h2>Ley de Coulomb</h2>

  <div>
    <h3>🔹 Fuerza entre cargas</h3>
    <p>La fuerza eléctrica entre dos cargas puntuales es directamente proporcional al producto de sus cargas e inversamente proporcional al cuadrado de la distancia que las separa.</p>
    <ul>
      <li>F = k &middot; |q<sub>1</sub> &middot; q<sub>2</sub>| / r<sup>2</sup></li>
      <li>k = 8.99 &times; 10<sup>9</sup> N&middot;m<sup>2</sup>/C<sup>2</sup></li>
    </ul>
    <p><b>Ejemplo:</b> Dos cargas de +1 C separadas 1 m se repelen con una fuerza de 8.99 &times; 10<sup>9</sup> N.</p>
  </div>

  <div>
    <h3>🔹 Direcciones de la fuerza</h3>
    <ul>
      <li>Se repelen si son del mismo signo.</li>
      <li>Se atraen si son de signos opuestos.</li>
    </ul>
  </div>

</section>
`},
// dia 2
{tema:"Electrostática",
exp:`
<section>
  <p>El potencial eléctrico indica cuánta energía por unidad de carga tiene un punto en el espacio debido a otras cargas.</p>

  <h3>Definición de potencial eléctrico</h3>
  <ul>
    <li>V = U / q, donde U = energía potencial (J), q = carga (C).</li>
  </ul>

  <div>
    <h3>🔹 Energía potencial eléctrica</h3>
    <ul>
      <li>U = q &middot; V</li>
    </ul>
    <p><b>Ejemplo:</b> Una carga de 2 C en un punto con V = 5 V tiene U = 10 J.</p>
  </div>

  <div>
    <h3>🔹 Diferencia de potencial (&Delta;V)</h3>
    <ul>
      <li>&Delta;V = V<sub>B</sub> - V<sub>A</sub> = (U<sub>B</sub> - U<sub>A</sub>) / q</li>
    </ul>
    <p><b>Ejemplo:</b> Un electrón se mueve de A con 12 V a B con 7 V: &Delta;V = -5 V.</p>
  </div>

  <h2>Capacitancia</h2>

  <div>
    <h3>🔸 Definición</h3>
    <ul>
      <li>C = Q / V</li>
      <li>Se mide en faradios (&Omega;F)</li>
    </ul>
    <p><b>Ejemplo:</b> Un condensador que almacena 6 C con 3 V: C = 2 F.</p>
  </div>

  <div>
    <h3>🔸 Energía almacenada</h3>
    <ul>
      <li>U = 1/2 &middot; C &middot; V<sup>2</sup></li>
    </ul>
    <p><b>Ejemplo:</b> Un condensador de 4 F con 5 V: U = 50 J.</p>
  </div>

</section>
`},
// dia 3
{tema:"Electrodinámica",
exp:`
<section>
  <p>La electrodinámica estudia cómo se mueve la carga eléctrica, es decir, la corriente, a través de un circuito, y cómo interactúa con resistencias, fuentes y otros elementos. Es básicamente “electricidad en acción”.</p>

  <h3>Corriente eléctrica</h3>
  <ul>
    <li><b>Corriente (I):</b> Flujo de cargas eléctricas por un conductor por unidad de tiempo.</li>
    <li><b>Fórmula:</b> I = Q / t, donde Q = carga (C), t = tiempo (s).</li>
  </ul>
  <img src="https://blogdidactico.com/wp-content/uploads/2018/11/formula-de-la-corriente-electrica-2.jpg"

  <h2>Conceptos principales</h2>

  <div>
    <h3>🔹 Intensidad de corriente</h3>
    <p>Indica cuánta carga pasa por un punto del circuito por segundo.</p>
    <ul>
      <li>Se mide en amperios (A), donde 1 A = 1 C/s.</li>
    </ul>
    <p><b>Ejemplo:</b> Si pasan 10 C en 2 segundos por un cable, la corriente es I = 10 / 2 = 5 A.</p>
  </div>

  <div>
    <h3>🔹 Sentido de la corriente</h3>
    <p>Se define convencionalmente de positivo a negativo, aunque los electrones fluyen al revés.</p>
    <ul>
      <li>Importante al dibujar circuitos y aplicar leyes.</li>
    </ul>
    <p><b>Ejemplo:</b> Una batería de 9 V hace que la corriente fluya de su polo positivo al negativo a través del circuito.</p>
  </div>

  <h2>Resistencia eléctrica</h2>

  <div>
    <h3>🔸 Qué es la resistencia</h3>
    <p>Es la oposición que ofrece un material al paso de la corriente.</p>
    <ul>
      <li>Fórmula: R = ρ * L / A, donde ρ = resistividad, L = longitud, A = sección del conductor.</li>
      <li>Se mide en ohmios (Ω).</li>
    </ul>
    <img src="https://electricidad-basica.com/wp-content/uploads/2023/05/resistencia-electric.jpg"
    <p><b>Ejemplo:</b> Un alambre delgado y largo tiene más resistencia que uno grueso y corto.</p>
  </div>

  <div>
    <h3>🔸 Ley de Ohm</h3>
    <p>Relaciona la corriente, voltaje y resistencia en un circuito simple.</p>
    <ul>
      <li>Fórmula: V = I * R</li>
    </ul>
    <img src="https://cdn.todamateria.com/imagenes/ley-de-ohm1-0-cke-edited-1.jpg"
    <p><b>Ejemplo:</b> Una resistencia de 10 Ω con 2 A de corriente tiene un voltaje V = 2 * 10 = 20 V.</p>
  </div>

  <h2>Leyes de Kirchhoff</h2>

  <div>
    <h3>🔹 Ley de corrientes (Nodo)</h3>
    <p>La suma de corrientes que entran a un nodo es igual a la suma de corrientes que salen.</p>
    <ul>
      <li>&sum; I<sub>entrante</sub> = &sum; I<sub>saliente</sub></li>
    </ul>
    <p><b>Ejemplo:</b> Si a un nodo llegan 3 A y 2 A, y sale 4 A por un cable, ¿cuánto sale por el otro? 1 A.</p>
  </div>

  <div>
    <h3>🔹 Ley de voltajes (Malla)</h3>
    <p>La suma de caídas de voltaje en una malla cerrada es igual a la suma de las fuentes de voltaje.</p>
    <ul>
      <li>&sum; V<sub>fuentes</sub> = &sum; V<sub>caídas</sub></li>
    </ul>
    <p><b>Ejemplo:</b> Una batería de 12 V y resistencias en serie con caídas de 5 V y 4 V: la tercera debe tener 3 V para que se cumpla la ley.</p>
  </div>

  <h2>Energía eléctrica y potencia</h2>

  <div>
    <h3>🔸 Energía eléctrica</h3>
    <p>Es el trabajo realizado por la corriente para mover cargas a través de un conductor.</p>
    <ul>
      <li>Fórmula: E = V * Q = V * I * t</li>
    </ul>
    <p><b>Ejemplo:</b> Una bombilla de 2 A conectada a 120 V durante 3 s consume E = 120 * 2 * 3 = 720 J.</p>
  </div>

  <div>
    <h3>🔸 Potencia eléctrica</h3>
    <p>Es la velocidad a la que se consume o genera energía eléctrica.</p>
    <ul>
      <li>Fórmulas: P = V * I = I<sup>2</sup> * R = V<sup>2</sup> / R</li>
      <li>Se mide en vatios (W)</li>
    </ul>
    <img src="https://image.slidesharecdn.com/1-4-7power-090329193249-phpapp01/95/147power-2-728.jpg?cb=1238360229"
    <p><b>Ejemplo:</b> Una resistencia de 10 Ω con 2 A tiene P = I<sup>2</sup> * R = 4 * 10 = 40 W.</p>
  </div>

  <h2>Resumen conceptual</h2>
  <ul>
    <li>La <b>corriente</b> es el flujo de cargas.</li>
    <li>La <b>resistencia</b> limita la corriente.</li>
    <li>La <b>Ley de Ohm</b> conecta voltaje, corriente y resistencia.</li>
    <li>Las <b>Leyes de Kirchhoff</b> ayudan a analizar circuitos complejos.</li>
    <li>La <b>energía y potencia</b> nos dicen cuánto trabajo hace la corriente y a qué velocidad.</li>
  </ul>

</section>
`},
// dia 4
{tema:"Electromagnetismo",
exp:`
<section>
  <p>El magnetismo estudia cómo cargas en movimiento o materiales con propiedades magnéticas generan fuerzas que interactúan a distancia. Es una rama de la física fundamental que explica imanes, brújulas y motores eléctricos.</p>

  <h3>Magnetismo y campo magnético</h3>
  <ul>
    <li><b>Campo magnético (B):</b> Región del espacio donde una carga en movimiento o un imán experimenta fuerza magnética. Representa la intensidad y dirección de la interacción magnética.</li>
    <li>Se mide en teslas (T). 1 T = 1 N·s/(C·m).</li>
    <li>Siempre tiene dirección y sentido; se representa con líneas de campo.</li>
  </ul>

  <div>
    <h3>🔹 Flujo magnético (&Phi;)</h3>
    <p>El flujo magnético indica cuánta “cantidad” de campo atraviesa una superficie. Cuanto más perpendicular y fuerte sea B, mayor será el flujo.</p>
    <ul>
      <li>&Phi; = B &middot; A &middot; cos(&theta;), donde B = intensidad del campo, A = área de la superficie, &theta; = ángulo entre B y la normal al área.</li>
      <li>Se mide en weber (Wb).</li>
    </ul>
    <p><b>Ejemplo:</b> Un campo magnético de B = 2 T atraviesa un área de A = 3 m² perpendicularmente (&theta; = 0°):</p>
    <p>&Phi; = 2 * 3 * cos(0°) = 6 Wb</p>
  </div>

  <div>
    <h3>🔹 Líneas de campo magnético</h3>
    <ul>
      <li>Representan la dirección y sentido del campo magnético visualmente.</li>
      <li>Salen del polo norte y entran al polo sur de un imán.</li>
      <li>Cuanto más juntas están las líneas, más intenso es el campo.</li>
    </ul>
    <p><b>Ejemplo:</b> Entre los polos de un imán fuerte, las líneas de campo están muy densas, indicando un B grande.</p>
  </div>

  <div>
    <h3>🔹 Reglas de la mano</h3>
    <ul>
      <li><b>Mano derecha:</b> Para corrientes, pulgar = corriente I, dedos = dirección de B alrededor del conductor.</li>
      <li><b>Mano izquierda:</b> Para fuerzas sobre cargas, dedo índice = B, dedo medio = velocidad v, pulgar = fuerza F.</li>
    </ul>
    <p><b>Ejemplo:</b> Un electrón se mueve hacia el norte en un campo B hacia el este: la fuerza será hacia abajo según la mano izquierda.</p>
  </div>

  <div>
    <h3>🔹 Ley de Ampère</h3>
    <p>Relaciona la corriente que pasa por un conductor cerrado con el campo magnético que genera alrededor.</p>
    <ul>
      <li>&int; B &middot; dl = &mu;<sub>0</sub> * I<sub>enlazada</sub></li>
      <li>&mu;<sub>0</sub> = 4&pi; &times; 10<sup>-7</sup> T·m/A</li>
    </ul>
    <p><b>Ejemplo:</b> Una corriente de 5 A atraviesa un lazo circular de 0.1 m de radio:</p>
    <p>B * 2&pi; * 0.1 = 4&pi;10<sup>-7</sup> * 5</p>
    <p>B = (4&pi;10<sup>-7</sup> * 5) / (0.2&pi;) ≈ 1e-5 T</p>
  </div>

</section>
`},
// dia 5
{tema:"Electromagnetismo",
exp:`
<section>
  <p>Cuando las cargas se mueven, generan campos magnéticos que pueden interactuar con otras cargas o corrientes, generando fuerzas. Este fenómeno es la base de motores, generadores y muchos dispositivos eléctricos.</p>

  <div>
    <h3>🔹 Ley de Biot-Savart</h3>
    <p>Permite calcular el campo magnético <b>B</b> producido por un pequeño elemento de corriente <b>dl</b> en un punto del espacio:</p>
    <ul>
      <li>dB = (&mu;<sub>0</sub> / 4&pi;) * (I * dl &times; r̂) / r²</li>
      <li>donde r̂ = vector unitario desde dl hasta el punto de observación, r = distancia entre ellos.</li>
      <li>Se integra sobre todo el conductor para obtener el campo total: B = &int; dB</li>
    </ul>
    <p><b>Ejemplo:</b> Un tramo recto de conductor de 0.1 m con corriente I = 3 A genera un campo en un punto perpendicular a su centro, a 0.05 m de distancia:</p>
    <p>dB = (4&pi;10<sup>-7</sup>/4&pi;) * (3 * 0.1 / 0.05²) = 1.2e-5 T</p>
  </div>

  <div>
    <h3>🔹 Fuerza magnética sobre una carga</h3>
    <p>Una carga <b>q</b> en movimiento <b>v</b> dentro de un campo magnético <b>B</b> siente una fuerza:</p>
    <ul>
      <li>F = q * v &times; B</li>
      <li>La dirección se determina con la regla de la mano izquierda para electrones (cargas negativas) o derecha para positivas.</li>
    </ul>
    <p><b>Ejemplo:</b> Un electrón (q = -1.6 &times; 10<sup>-19</sup> C) se mueve a 2·10<sup>6</sup> m/s perpendicular a B = 0.01 T:</p>
    <p>F = |q| * v * B = 1.6e-19 * 2e6 * 0.01 = 3.2e-15 N</p>
  </div>

  <div>
    <h3>🔹 Fuerza sobre un conductor con corriente</h3>
    <p>Si un conductor de longitud <b>L</b> lleva corriente <b>I</b> dentro de un campo B:</p>
    <ul>
      <li>F = I * L &times; B</li>
      <li>La dirección se determina usando la regla de la mano derecha.</li>
    </ul>
    <p><b>Ejemplo:</b> Conductor de 0.5 m con I = 2 A perpendicular a B = 0.1 T:</p>
    <p>F = 2 * 0.5 * 0.1 = 0.1 N</p>
  </div>

  <div>
    <h3>🔹 Fuerza entre conductores paralelos</h3>
    <p>Dos conductores paralelos con corrientes I₁ y I₂ separados por distancia d se atraen si las corrientes son paralelas y se repelen si son opuestas:</p>
    <ul>
      <li>F/L = (&mu;<sub>0</sub> / 2&pi;) * (I₁ * I₂ / d)</li>
      <li>F/L se mide en N/m.</li>
    </ul>
    <p><b>Ejemplo:</b> Dos cables con I₁ = I₂ = 3 A separados d = 0.1 m:</p>
    <p>F/L = (4&pi;10<sup>-7</sup> / 2&pi;) * (3*3 / 0.1) = 1.8e-5 N/m</p>
  </div>

</section>
`},
// dia 6
{tema:"Electromagnetismo",
exp:`
<section>
  <p>Cuando un campo magnético cambia en el tiempo, se genera corriente en conductores cercanos. Este fenómeno se llama <b>inducción electromagnética</b> y es la base de transformadores, generadores y motores eléctricos.</p>

  <div>
    <h3>🔹 Ley de Faraday</h3>
    <p>La fuerza electromotriz (&epsilon;) inducida en un circuito es proporcional a la velocidad de cambio del flujo magnético que atraviesa la superficie del circuito:</p>
    <ul>
      <li>&epsilon; = - d&Phi;/dt</li>
      <li>El signo negativo indica que la corriente inducida se opone al cambio del flujo (Ley de Lenz).</li>
    </ul>
    <p><b>Ejemplo:</b> Un flujo magnético cambia de 0 a 0.02 Wb en 0.01 s:</p>
    <p>&epsilon; = - (0.02 / 0.01) = -2 V</p>
  </div>

  <div>
    <h3>🔹 Ley de Lenz</h3>
    <p>La corriente inducida siempre genera un campo que se opone al cambio que la produce:</p>
    <ul>
      <li>Si el flujo aumenta, la corriente genera un campo que disminuye el flujo.</li>
      <li>Si el flujo disminuye, la corriente genera un campo que lo aumenta.</li>
    </ul>
    <p><b>Ejemplo:</b> Un imán se acerca a una espira: la corriente inducida crea un campo que repele el imán, tratando de mantener constante el flujo.</p>
  </div>

  <div>
    <h3>🔹 Inductancia (L)</h3>
    <p>La inductancia mide la capacidad de un circuito para generar fuerza electromotriz cuando la corriente cambia:</p>
    <ul>
      <li>&epsilon; = - L * dI/dt</li>
      <li>L se mide en henrios (H).</li>
    </ul>
    <p><b>Ejemplo:</b> Bobina de L = 2 H, dI/dt = 3 A/s:</p>
    <p>&epsilon; = - 2 * 3 = -6 V</p>
  </div>

  <div>
    <h3>🔹 Enlaces de flujo</h3>
    <p>Es la multiplicación del flujo magnético por el número de vueltas de la bobina:</p>
    <ul>
      <li>&Phi;<sub>enlace</sub> = N * &Phi;</li>
    </ul>
    <p><b>Ejemplo:</b> Bobina de N = 100 vueltas, flujo = 0.01 Wb:</p>
    <p>&Phi;<sub>enlace</sub> = 100 * 0.01 = 1 Wb·vueltas</p>
  </div>

  <div>
    <h3>🔹 Energía asociada al campo magnético</h3>
    <p>La energía almacenada en un inductor es proporcional a la inductancia y al cuadrado de la corriente:</p>
    <ul>
      <li>U = 1/2 * L * I<sup>2</sup></li>
    </ul>
    <p><b>Ejemplo:</b> Inductor L = 2 H, corriente I = 3 A:</p>
    <p>U = 0.5 * 2 * 9 = 9 J</p>
  </div>

</section>
`},
// dia 7
{tema:"Estática",
exp:`
<section>
  <p>La estática es la rama de la mecánica que estudia los cuerpos en equilibrio, es decir, cuando la suma de fuerzas y momentos que actúan sobre ellos es cero. Se centra en cómo las fuerzas se distribuyen y cómo interactúan los objetos sin que se muevan.</p>

  <h3>Sistema de unidades</h3>
  <ul>
    <li><b>Fuerza:</b> Se mide en newtons (N). 1 N = 1 kg·m/s<sup>2</sup>.</li>
    <li><b>Distancia / longitud:</b> metros (m).</li>
    <li><b>Ángulo:</b> grados (&deg;) o radianes (rad).</li>
    <li><b>Masa:</b> kilogramos (kg).</li>
  </ul>
  <p><b>Ejemplo:</b> Una fuerza F = 10 N aplicada a un objeto de 2 kg no lo mueve si se equilibra con otra fuerza igual y opuesta.</p>

  <div>
    <h3>🔹 Estática de partículas</h3>
    <p>Una partícula está en equilibrio si la suma vectorial de todas las fuerzas que actúan sobre ella es cero:</p>
    <ul>
      <li>&sum; F<sub>x</sub> = 0</li>
      <li>&sum; F<sub>y</sub> = 0</li>
    </ul>
    <p><b>Ejemplo:</b> Una partícula recibe F<sub>1</sub> = 5 N hacia la derecha y F<sub>2</sub> = 3 N hacia la izquierda, junto con F<sub>3</sub> = 2 N hacia la izquierda:</p>
    <p>&sum; F<sub>x</sub> = 5 - 3 - 2 = 0 N → equilibrio en x</p>
    <p>Si no hay fuerzas en y, la partícula está en equilibrio total.</p>
  </div>

  <div>
    <h3>🔹 Resultante de fuerzas coplanares</h3>
    <p>Cuando varias fuerzas actúan en un mismo plano, se pueden sumar vectorialmente para encontrar una sola fuerza equivalente:</p>
    <ul>
      <li>Para fuerzas en la misma dirección: R = F<sub>1</sub> + F<sub>2</sub> + ...</li>
      <li>Para fuerzas en ángulo: se usan componentes rectangulares:</li>
      <li>R<sub>x</sub> = &sum; F<sub>i</sub> cos(&theta;<sub>i</sub>)</li>
      <li>R<sub>y</sub> = &sum; F<sub>i</sub> sin(&theta;<sub>i</sub>)</li>
      <li>R = &radic;(R<sub>x</sub><sup>2</sup> + R<sub>y</sub><sup>2</sup>)</li>
      <li>&alpha; = arctan(R<sub>y</sub> / R<sub>x</sub>)</li>
    </ul>
    <p><b>Ejemplo:</b> F<sub>1</sub> = 5 N a 0°, F<sub>2</sub> = 5 N a 90°:</p>
    <p>R<sub>x</sub> = 5 + 0 = 5 N, R<sub>y</sub> = 0 + 5 = 5 N</p>
    <p>R = &radic;(5² + 5²) = &radic;50 ≈ 7.07 N</p>
    <p>&alpha; = arctan(5/5) = 45&deg;</p>
  </div>

  <div>
    <h3>🔹 Descomposición de fuerzas en componentes rectangulares</h3>
    <p>Cualquier fuerza que actúe en un ángulo se puede descomponer en componentes horizontales y verticales para facilitar cálculos:</p>
    <ul>
      <li>F<sub>x</sub> = F * cos(&theta;)</li>
      <li>F<sub>y</sub> = F * sin(&theta;)</li>
    </ul>
    <p><b>Ejemplo:</b> Fuerza F = 10 N a 30° respecto al eje x:</p>
    <p>F<sub>x</sub> = 10 * cos(30°) ≈ 8.66 N</p>
    <p>F<sub>y</sub> = 10 * sin(30°) = 5 N</p>
  </div>

</section>
`},
// dia 8
{tema:"Estática",
exp:`
<section>
  <p>La estática es la rama de la mecánica que estudia los cuerpos en equilibrio, es decir, cuando no se mueven ni se deforman. Esto ocurre cuando las fuerzas y momentos que actúan sobre un objeto se compensan completamente.</p>

  <div>
    <h3>🔹 Equilibrio de partículas y primera ley de Newton</h3>
    <p>Según la <b>primera ley de Newton</b> (ley de inercia), una partícula permanecerá en reposo o en movimiento rectilíneo uniforme si la suma de todas las fuerzas que actúan sobre ella es cero:</p>
    <ul>
      <li>&sum; F<sub>x</sub> = 0</li>
      <li>&sum; F<sub>y</sub> = 0</li>
      <li>&sum; F<sub>z</sub> = 0 (si hay tercera dimensión)</li>
    </ul>
    <p>Esto significa que para mantener el equilibrio, cualquier fuerza que actúe debe ser contrarrestada por otra igual y opuesta. No importa la magnitud individual, lo importante es la suma vectorial.</p>
    <p><b>Ejemplo paso a paso:</b></p>
    <p>Una partícula está sujeta a tres fuerzas: F<sub>1</sub> = 10 N hacia la derecha, F<sub>2</sub> = 6 N hacia la izquierda, F<sub>3</sub> = 4 N hacia la izquierda.</p>
    <ul>
      <li>&sum; F<sub>x</sub> = F<sub>1</sub> - F<sub>2</sub> - F<sub>3</sub> = 10 - 6 - 4 = 0 N</li>
      <li>No hay fuerzas verticales → &sum; F<sub>y</sub> = 0</li>
    </ul>
    <p>Por lo tanto, la partícula está en equilibrio. Esto es la aplicación directa de la primera ley de Newton.</p>
  </div>

  <div>
    <h3>🔹 Estática de cuerpo rígido</h3>
    <p>Un cuerpo rígido no solo puede desplazarse, también puede girar. Para que un cuerpo rígido esté en equilibrio:</p>
    <ul>
      <li>&sum; F = 0 → No hay desplazamiento lineal</li>
      <li>&sum; M = 0 → No hay rotación (M = momento o torque)</li>
    </ul>
    <p>Esto significa que todas las fuerzas deben equilibrarse entre sí y, al mismo tiempo, los torques generados por estas fuerzas respecto a cualquier punto deben cancelarse.</p>
    <p><b>Ejemplo:</b> Una viga apoyada en dos puntos con varias fuerzas verticales debe cumplir que la suma de fuerzas y momentos respecto a cualquier punto sea cero para no moverse ni girar.</p>
  </div>

  <div>
    <h3>🔹 Momento de una fuerza respecto a un punto y a un eje</h3>
    <p>El momento (o torque) mide la capacidad de una fuerza para hacer rotar un cuerpo alrededor de un punto o eje:</p>
    <ul>
      <li>M = r &times; F</li>
      <li>r = distancia perpendicular desde el punto de referencia hasta la línea de acción de la fuerza</li>
      <li>Si la fuerza no es perpendicular, M = r * F * sin(&theta;), donde &theta; es el ángulo entre r y F</li>
    </ul>
    <p><b>Ejemplo:</b> Una fuerza F = 10 N se aplica a 0.5 m de un eje con ángulo 90°:</p>
    <ul>
      <li>M = 0.5 * 10 * sin(90°) = 5 N·m</li>
    </ul>
    <p>Si el ángulo fuera 60°, M = 0.5 * 10 * sin(60°) ≈ 4.33 N·m</p>
  </div>

  <div>
    <h3>🔹 Diagrama de fuerzas y aplicación de las condiciones de equilibrio</h3>
    <p>Un diagrama de cuerpo libre representa todas las fuerzas que actúan sobre un objeto. Es esencial para resolver problemas de equilibrio:</p>
    <ul>
      <li>Dibujar todas las fuerzas: peso (mg), tensión, normal, fricción, reacciones en apoyos</li>
      <li>Elegir un sistema de coordenadas y descomponer fuerzas en componentes x y y</li>
      <li>Aplicar las condiciones de equilibrio:</li>
      <ul>
        <li>&sum; F<sub>x</sub> = 0</li>
        <li>&sum; F<sub>y</sub> = 0</li>
        <li>&sum; M = 0 respecto a un punto estratégico</li>
      </ul>
    </ul>
    <p><b>Ejemplo paso a paso:</b></p>
    <p>Viga horizontal de 4 m con peso de 200 N en el centro y apoyos en extremos A y B:</p>
    <ul>
      <li>Reacciones desconocidas: R<sub>A</sub> y R<sub>B</sub></li>
      <li>&sum; F<sub>y</sub> = R<sub>A</sub> + R<sub>B</sub> - 200 = 0 → R<sub>A</sub> + R<sub>B</sub> = 200 N</li>
      <li>Momento respecto a A: &sum; M<sub>A</sub> = 0 → 200 * 2 - R<sub>B</sub> * 4 = 0 → R<sub>B</sub> = 100 N</li>
      <li>De &sum; F<sub>y</sub> → R<sub>A</sub> = 100 N</li>
    </ul>
    <p>Así, la viga está en equilibrio tanto translacional como rotacional.</p>
  </div>

</section>
`},
// dia 9
{tema:"Dinámica",
exp:`
<section>

  <h2>Cinemática</h2>
  <p>La cinemática estudia el movimiento de los cuerpos sin importar las fuerzas que lo producen. Se centra en describir <b>posición</b>, <b>velocidad</b> y <b>aceleración</b> a lo largo del tiempo.</p>

  <div>
    <h3>🔹 Posición</h3>
    <p>Indica dónde se encuentra un cuerpo en un instante determinado respecto a un sistema de referencia:</p>
    <ul>
      <li>x(t), y(t) → posición en coordenadas según el tiempo t</li>
      <li>Se mide en metros (m)</li>
    </ul>
    <p><b>Ejemplo:</b> Un móvil parte desde x = 0 m y su posición es x(t) = 5t m:</p>
    <p>A los 3 s → x = 5 * 3 = 15 m</p>
  </div>

  <div>
    <h3>🔹 Desplazamiento</h3>
    <p>Es el cambio de posición de un cuerpo:</p>
    <ul>
      <li>&Delta;x = x<sub>final</sub> - x<sub>inicial</sub></li>
      <li>Vectorial: indica magnitud y dirección</li>
    </ul>
    <p><b>Ejemplo:</b> Un cuerpo va de x = 2 m a x = 10 m:</p>
    <p>&Delta;x = 10 - 2 = 8 m</p>
  </div>

  <div>
    <h3>🔹 Velocidad</h3>
    <p>La velocidad indica qué tan rápido y en qué dirección se mueve un cuerpo:</p>
    <ul>
      <li>Velocidad media: v̄ = &Delta;x / &Delta;t</li>
      <li>Velocidad instantánea: v = dx/dt</li>
    </ul>
    <p><b>Ejemplo:</b> Un cuerpo se desplaza 20 m en 4 s:</p>
    <p>v̄ = 20 / 4 = 5 m/s</p>
  </div>

  <div>
    <h3>🔹 Rapidez</h3>
    <p>Magnitud de la velocidad, siempre positiva, no indica dirección:</p>
    <ul>
      <li>v = |v|</li>
    </ul>
    <p><b>Ejemplo:</b> Si v = -5 m/s (hacia la izquierda), la rapidez = 5 m/s</p>
  </div>

  <div>
    <h3>🔹 Aceleración</h3>
    <p>La aceleración indica cómo cambia la velocidad de un cuerpo con el tiempo:</p>
    <ul>
      <li>Aceleración media: ā = &Delta;v / &Delta;t</li>
      <li>Aceleración instantánea: a = dv/dt</li>
    </ul>
    <p><b>Ejemplo:</b> Velocidad inicial v<sub>0</sub> = 0 m/s, final v = 10 m/s en 2 s:</p>
    <p>ā = (10 - 0)/2 = 5 m/s²</p>
  </div>

  <div>
    <h3>🔹 Movimiento rectilíneo uniforme (MRU)</h3>
    <p>Movimiento a velocidad constante (aceleración = 0):</p>
    <ul>
      <li>x = x<sub>0</sub> + v * t</li>
    </ul>
    <p><b>Ejemplo:</b> v = 6 m/s, x<sub>0</sub> = 2 m, t = 3 s:</p>
    <p>x = 2 + 6*3 = 20 m</p>
  </div>

  <div>
    <h3>🔹 Movimiento rectilíneo uniformemente acelerado (MRUA)</h3>
    <p>Velocidad cambia de manera constante (aceleración constante):</p>
    <ul>
      <li>v = v<sub>0</sub> + a * t</li>
      <li>x = x<sub>0</sub> + v<sub>0</sub>*t + 1/2 * a * t²</li>
      <li>v² = v<sub>0</sub>² + 2 * a * (x - x<sub>0</sub>)</li>
    </ul>
    <p><b>Ejemplo:</b> v<sub>0</sub> = 0 m/s, a = 2 m/s², t = 3 s:</p>
    <p>v = 0 + 2*3 = 6 m/s</p>
    <p>x = 0 + 0*3 + 0.5*2*3² = 9 m</p>
  </div>

</section>
`},
// dia 10
{tema:"Fundamentos",
exp:`
<section>
  <p>La dinámica estudia cómo las fuerzas afectan el movimiento de los cuerpos. Para comprenderla, primero necesitamos dominar los conceptos de <b>desplazamiento</b>, <b>velocidad</b> y <b>aceleración</b>, que describen el movimiento de cualquier objeto.</p>

  <div>
    <h3>🔹 Desplazamiento</h3>
    <p>Es el cambio de posición de un cuerpo en el tiempo y se representa como un vector:</p>
    <ul>
      <li>&Delta;x = x<sub>final</sub> - x<sub>inicial</sub></li>
      <li>Indica tanto magnitud como dirección</li>
    </ul>
    <p><b>Ejemplo:</b> Un objeto va de x = 3 m a x = 12 m:</p>
    <p>&Delta;x = 12 - 3 = 9 m</p>
  </div>

  <div>
    <h3>🔹 Velocidad</h3>
    <p>Indica qué tan rápido cambia la posición de un cuerpo:</p>
    <ul>
      <li>Velocidad media: v̄ = &Delta;x / &Delta;t</li>
      <li>Velocidad instantánea: v = dx/dt</li>
    </ul>
    <p><b>Ejemplo:</b> Un objeto se desplaza 20 m en 4 s:</p>
    <p>v̄ = 20 / 4 = 5 m/s</p>
  </div>

  <div>
    <h3>🔹 Aceleración</h3>
    <p>Indica cómo cambia la velocidad con el tiempo:</p>
    <ul>
      <li>Aceleración media: ā = &Delta;v / &Delta;t</li>
      <li>Aceleración instantánea: a = dv/dt</li>
    </ul>
    <p><b>Ejemplo:</b> Velocidad inicial v<sub>0</sub> = 2 m/s, final v = 8 m/s en 3 s:</p>
    <p>ā = (8 - 2) / 3 = 2 m/s²</p>
  </div>

  <div>
    <h3>🔹 Movimiento uniforme (MRU)</h3>
    <p>Movimiento a velocidad constante, sin aceleración:</p>
    <ul>
      <li>x = x<sub>0</sub> + v * t</li>
      <li>v = constante</li>
      <li>a = 0</li>
    </ul>
    <p><b>Ejemplo:</b> v = 5 m/s, x<sub>0</sub> = 2 m, t = 4 s:</p>
    <p>x = 2 + 5 * 4 = 22 m</p>
  </div>

  <div>
    <h3>🔹 Movimiento uniformemente acelerado (MRUA)</h3>
    <p>Velocidad cambia de manera constante, con aceleración a:</p>
    <ul>
      <li>v = v<sub>0</sub> + a * t</li>
      <li>x = x<sub>0</sub> + v<sub>0</sub> * t + 1/2 * a * t²</li>
      <li>v² = v<sub>0</sub>² + 2 * a * (x - x<sub>0</sub>)</li>
    </ul>
    <p><b>Ejemplo:</b> v<sub>0</sub> = 0 m/s, a = 3 m/s², t = 2 s:</p>
    <p>v = 0 + 3 * 2 = 6 m/s</p>
    <p>x = 0 + 0 + 0.5 * 3 * 2² = 6 m</p>
  </div>

  <div>
    <h3>🔹 Cuerpos en caída libre</h3>
    <p>Se considera que un cuerpo cae solo bajo la acción de la gravedad (g ≈ 9.8 m/s²) y sin resistencia del aire:</p>
    <ul>
      <li>v = v<sub>0</sub> + g * t</li>
      <li>y = y<sub>0</sub> + v<sub>0</sub> * t + 1/2 * g * t²</li>
      <li>v² = v<sub>0</sub>² + 2 * g * (y - y<sub>0</sub>)</li>
    </ul>
    <p><b>Ejemplo:</b> Un objeto cae desde reposo (v<sub>0</sub> = 0) durante 3 s:</p>
    <p>v = 0 + 9.8 * 3 ≈ 29.4 m/s</p>
    <p>y = 0 + 0 + 0.5 * 9.8 * 3² ≈ 44.1 m</p>
  </div>

</section>
`},
// dia 11
{tema:"Fundamentos",
exp:`
<section>
  <p>En esta sección analizamos cómo se mueven los cuerpos bajo fuerzas, desde partículas simples hasta proyectiles. Esto combina conceptos de cinemática y dinámica para explicar cómo la fuerza afecta el movimiento.</p>

  <div>
    <h3>🔹 Movimiento de proyectiles</h3>
    <p>Un proyectil es un cuerpo que se lanza con cierta velocidad y está sujeto únicamente a la gravedad (g), despreciando la resistencia del aire. Su movimiento combina dos dimensiones: horizontal y vertical.</p>
    <ul>
      <li>Movimiento horizontal: MRU, v<sub>x</sub> = constante</li>
      <li>Movimiento vertical: MRUA con a = -g</li>
      <li>Trayectoria: parabólica</li>
    </ul>
    <p><b>Fórmulas:</b></p>
    <ul>
      <li>x = v<sub>0</sub> * cos(&theta;) * t</li>
      <li>y = v<sub>0</sub> * sin(&theta;) * t - 1/2 * g * t²</li>
      <li>Velocidad en cualquier instante: v<sub>x</sub> = v<sub>0</sub> cos(&theta;), v<sub>y</sub> = v<sub>0</sub> sin(&theta;) - g*t</li>
    </ul>
    <p><b>Ejemplo paso a paso:</b> Un proyectil se lanza con v<sub>0</sub> = 20 m/s a &theta; = 30°:</p>
    <ul>
      <li>v<sub>x</sub> = 20 * cos(30°) ≈ 17.32 m/s</li>
      <li>v<sub>y</sub> = 20 * sin(30°) ≈ 10 m/s</li>
      <li>Altura máxima: h = v<sub>y</sub>² / (2*g) = 10² / (2*9.8) ≈ 5.10 m</li>
      <li>Tiempo de vuelo: t<sub>total</sub> = 2 * v<sub>y</sub> / g ≈ 2.04 s</li>
      <li>Alcance horizontal: x = v<sub>x</sub> * t<sub>total</sub> ≈ 17.32 * 2.04 ≈ 35.3 m</li>
    </ul>
  </div>

  <div>
    <h3>🔹 Cinética de la partícula</h3>
    <p>La cinética estudia cómo las fuerzas afectan el movimiento de una partícula, conectando masa, aceleración y energía.</p>
    <ul>
      <li>Fuerza neta produce aceleración: F = m * a</li>
      <li>Energía cinética: K = 1/2 * m * v²</li>
      <li>Trabajo realizado por una fuerza: W = F * d * cos(&phi;)</li>
    </ul>
    <p><b>Ejemplo:</b> Una partícula de 2 kg recibe una fuerza de 10 N durante 3 m en la misma dirección:</p>
    <ul>
      <li>Aceleración: a = F / m = 10 / 2 = 5 m/s²</li>
      <li>Trabajo realizado: W = F * d = 10 * 3 = 30 J</li>
      <li>Velocidad final: v = sqrt(2 * W / m) = sqrt(2 * 30 / 2) = sqrt(30) ≈ 5.48 m/s</li>
    </ul>
  </div>

  <div>
    <h3>🔹 Segunda Ley de Newton aplicada al movimiento</h3>
    <p>La segunda ley relaciona fuerza, masa y aceleración: F = m * a. Permite calcular cómo una fuerza cambia el movimiento de un cuerpo.</p>
    <ul>
      <li>Fuerza neta: suma de todas las fuerzas que actúan sobre el cuerpo</li>
      <li>Dirección de la aceleración: misma que la fuerza neta</li>
      <li>En dos dimensiones: F<sub>x</sub> = m * a<sub>x</sub>, F<sub>y</sub> = m * a<sub>y</sub></li>
    </ul>
    <p><b>Ejemplo paso a paso:</b> Una partícula de 3 kg tiene F<sub>x</sub> = 12 N y F<sub>y</sub> = 9 N:</p>
    <ul>
      <li>a<sub>x</sub> = F<sub>x</sub>/m = 12 / 3 = 4 m/s²</li>
      <li>a<sub>y</sub> = F<sub>y</sub>/m = 9 / 3 = 3 m/s²</li>
      <li>Magnitud de la aceleración: a = sqrt(a<sub>x</sub>² + a<sub>y</sub>²) = sqrt(16 + 9) = 5 m/s²</li>
      <li>Dirección: &theta; = arctan(a<sub>y</sub>/a<sub>x</sub>) = arctan(3/4) ≈ 36.87°</li>
    </ul>
  </div>

</section>
`},
// dia 12
{tema:"Termodinámica",
exp:`
<section>
  <p>La termodinámica estudia cómo se transfiere y transforma la energía en forma de calor y cómo esto afecta a los cuerpos. Para entenderla, primero debemos conocer temperatura, dilatación, calorimetría y transferencia de calor.</p>

  <div>
    <h3>🔹 Termometría, temperatura y tipos de termómetros</h3>
    <p>La <b>temperatura</b> mide qué tan caliente o frío está un cuerpo y refleja la energía cinética promedio de sus partículas. La <b>termometría</b> es la ciencia de medir la temperatura.</p>
    <ul>
      <li>Escalas de temperatura: Celsius (°C), Kelvin (K), Fahrenheit (°F)</li>
      <li>Fórmula de conversión: 
        <ul>
          <li>K = °C + 273.15</li>
          <li>°F = (°C * 9/5) + 32</li>
        </ul>
      </li>
      <li>Tipos de termómetros:
        <ul>
          <li>Mercurio o alcohol: líquido que se expande</li>
          <li>Termopares: generan voltaje según temperatura</li>
          <li>Termistores: resistencia eléctrica depende de temperatura</li>
        </ul>
      </li>
    </ul>
    <p><b>Ejemplo:</b> Convertir 25 °C a K y °F:</p>
    <ul>
      <li>K = 25 + 273.15 = 298.15 K</li>
      <li>°F = 25 * 9/5 + 32 = 77 °F</li>
    </ul>
  </div>

  <div>
    <h3>🔹 Conceptos de dilatación: lineal, superficial y volumétrica</h3>
    <p>Los cuerpos cambian de tamaño al variar la temperatura. La dilatación depende de la forma:</p>
    <ul>
      <li><b>Lineal:</b> cambio de longitud de un objeto:
        <ul>
          <li>&Delta;L = &alpha; * L<sub>0</sub> * &Delta;T</li>
          <li>&alpha; = coeficiente de dilatación lineal</li>
        </ul>
      </li>
      <li><b>Superficial:</b> cambio de área:
        <ul>
          <li>&Delta;A = 2 * &alpha; * A<sub>0</sub> * &Delta;T</li>
        </ul>
      </li>
      <li><b>Volumétrica:</b> cambio de volumen:
        <ul>
          <li>&Delta;V = 3 * &alpha; * V<sub>0</sub> * &Delta;T</li>
        </ul>
      </li>
    </ul>
    <p><b>Ejemplo:</b> Una barra de 2 m con &alpha; = 1.2 *10<sup>-5</sup> /°C se calienta 50 °C:</p>
    <p>&Delta;L = 1.2*10<sup>-5</sup> * 2 * 50 ≈ 0.0012 m = 1.2 mm</p>
  </div>

  <div>
    <h3>🔹 Calorimetría</h3>
    <p>La calorimetría estudia cómo el calor se transfiere entre cuerpos y produce cambios de temperatura:</p>
    <ul>
      <li>Q = m * c * &Delta;T</li>
      <li>Q = calor (J), m = masa (kg), c = calor específico (J/kg·K), &Delta;T = cambio de temperatura</li>
      <li>Principio: el calor ganado por un cuerpo = calor perdido por otro en sistema aislado</li>
    </ul>
    <p><b>Ejemplo:</b> 0.5 kg de agua (c = 4186 J/kg·K) aumenta 10 °C:</p>
    <p>Q = 0.5 * 4186 * 10 ≈ 20930 J</p>
  </div>

  <div>
    <h3>🔹 Transferencia de calor en sistemas de cuerpo aislado</h3>
    <p>En un sistema aislado, el calor no se pierde al entorno. Se aplica el principio de conservación de la energía:</p>
    <ul>
      <li>&sum; Q = 0 → calor ganado = calor perdido</li>
      <li>m<sub>1</sub> c<sub>1</sub> (&Delta;T)<sub>1</sub> + m<sub>2</sub> c<sub>2</sub> (&Delta;T)<sub>2</sub> = 0</li>
    </ul>
    <p><b>Ejemplo paso a paso:</b> Mezclamos 0.2 kg de agua a 80 °C con 0.3 kg de agua a 20 °C. Calor específico c = 4186 J/kg·K:</p>
    <ul>
      <li>0.2 * 4186 * (T<sub>f</sub> - 80) + 0.3 * 4186 * (T<sub>f</sub> - 20) = 0</li>
      <li>837.2 * (T<sub>f</sub> - 80) + 1255.8 * (T<sub>f</sub> - 20) = 0</li>
      <li>837.2*T<sub>f</sub> - 66976 + 1255.8*T<sub>f</sub> - 25116 = 0</li>
      <li>2093*T<sub>f</sub> = 92092 → T<sub>f</sub> ≈ 43.97 °C</li>
    </ul>
  </div>

</section>
`},
// dia 13
{tema:"Termodinámica",
exp:`
<section>
  <p>Esta sección aborda cómo la energía térmica provoca cambios en la materia y cómo se transfiere el calor. También introducimos las leyes fundamentales de la termodinámica.</p>

  <div>
    <h3>🔹 Cambio de estado de agregación</h3>
    <p>Los cuerpos pueden cambiar entre sólido, líquido y gas cuando reciben o pierden energía sin cambiar su temperatura:</p>
    <ul>
      <li><b>Fusión:</b> sólido → líquido</li>
      <li><b>Solidificación:</b> líquido → sólido</li>
      <li><b>Vaporización:</b> líquido → gas</li>
      <li><b>Condensación:</b> gas → líquido</li>
      <li><b>Sublimación:</b> sólido → gas directamente</li>
      <li><b>Deposición:</b> gas → sólido directamente</li>
    </ul>
    <p>Durante el cambio de estado, la temperatura permanece constante y el calor suministrado se denomina <b>calor latente</b>.</p>
  </div>

  <div>
    <h3>🔹 Calor latente</h3>
    <p>El calor latente es la energía requerida para cambiar el estado de un cuerpo sin variar su temperatura:</p>
    <ul>
      <li>Fusión: Q = m * L<sub>f</sub></li>
      <li>Vaporización: Q = m * L<sub>v</sub></li>
      <li>Sublimación: Q = m * L<sub>s</sub></li>
    </ul>
    <p><b>Ejemplo:</b> 0.1 kg de hielo a 0 °C se funde (L<sub>f</sub> = 334000 J/kg):</p>
    <p>Q = 0.1 * 334000 = 33400 J</p>
  </div>

  <div>
    <h3>🔹 Transmisión de calor</h3>
    <p>El calor puede transferirse de tres formas:</p>
    <ul>
      <li><b>Conducción:</b> transferencia de calor entre cuerpos en contacto directo. Q = k * A * &Delta;T / d</li>
      <li><b>Convección:</b> transferencia mediante movimiento de fluidos (líquidos o gases)</li>
      <li><b>Radiación:</b> transferencia de energía por ondas electromagnéticas, no requiere medio</li>
    </ul>
    <p><b>Ejemplo:</b> Una barra metálica de área A = 0.01 m², longitud d = 0.5 m, k = 200 W/m·K, &Delta;T = 50 K:</p>
    <p>Q = 200 * 0.01 * 50 / 0.5 = 20 W</p>
  </div>

  <div>
    <h3>🔹 Leyes de la termodinámica</h3>
    <p>Reglas fundamentales que gobiernan la transferencia y conservación de la energía:</p>
    <ul>
      <li><b>Primera ley:</b> conservación de la energía: &Delta;U = Q - W
        <ul>
          <li>&Delta;U = cambio de energía interna</li>
          <li>Q = calor agregado al sistema</li>
          <li>W = trabajo realizado por el sistema</li>
        </ul>
      </li>
      <li><b>Segunda ley:</b> el calor no fluye espontáneamente de un cuerpo frío a uno caliente y aumenta la entropía (&Delta;S ≥ 0)</li>
      <li><b>Tercera ley:</b> a 0 K, la entropía de un sistema perfecto = 0</li>
    </ul>
    <p><b>Ejemplo (primera ley):</b> Un gas absorbe Q = 500 J y realiza W = 200 J:</p>
    <p>&Delta;U = Q - W = 500 - 200 = 300 J</p>
  </div>

</section>
`},
],

Biología: [
 // dia 1
{tema:"Seres vivos",
exp:`
<section>
  <h2> Clasificación y composición de la célula</h2>
  <p>La célula es la unidad básica de todos los seres vivos. Es el bloque de construcción que permite la vida, desde bacterias hasta plantas y animales. Cada célula tiene estructuras internas y está compuesta por sustancias químicas esenciales para funcionar.</p>

  <h3>Tipos de células</h3>
  <ul>
    <li><b>Procariotas:</b> Simples y antiguas, sin núcleo definido; el ADN flota en el citoplasma. Generalmente son pequeñas (1-5 μm) y se encuentran en bacterias y cianobacterias.</li>
    <li><b>Eucariotas:</b> Más complejas, con núcleo definido que contiene el ADN. Tienen organelos especializados y se encuentran en animales, plantas, hongos y protistas.</li>
  </ul>

  <h2>Estructura y funciones principales de la célula</h2>

  <div>
    <h3>🔹 Membrana plasmática</h3>
    <p>Es la capa externa que protege la célula y regula lo que entra y sale.</p>
    <ul>
      <li>Permite el paso selectivo de sustancias.</li>
      <li>Comunica la célula con su entorno.</li>
    </ul>
    <p><b>Ejemplo:</b> La glucosa entra a la célula a través de proteínas de transporte en la membrana.</p>
  </div>

  <div>
    <h3>🔹 Núcleo</h3>
    <p>Organelo exclusivo de células eucariotas que almacena el ADN y controla la actividad celular.</p>
    <ul>
      <li>Contiene información genética.</li>
      <li>Dirige la síntesis de proteínas mediante el ARN.</li>
    </ul>
    <p><b>Ejemplo:</b> La célula fabrica enzimas según las instrucciones del ADN.</p>
  </div>

  <div>
    <h3>🔹 Citoplasma</h3>
    <p>Medio interno de la célula donde ocurren las reacciones químicas y se ubican los organelos.</p>
    <ul>
      <li>Contiene agua, sales y moléculas orgánicas.</li>
      <li>Permite el transporte interno de sustancias.</li>
    </ul>
    <p><b>Ejemplo:</b> La glucosa se descompone en el citoplasma para obtener energía inicial.</p>
  </div>

  <div>
    <h3>🔹 Organelos especializados</h3>
    <p>Solo en células eucariotas, cada uno con funciones específicas.</p>
    <ul>
      <li>Mitocondrias: producen energía (ATP).</li>
      <li>Ribosomas: fabrican proteínas.</li>
      <li>Retículo endoplasmático: produce y transporta proteínas y lípidos.</li>
      <li>Aparato de Golgi: empaqueta y distribuye sustancias.</li>
      <li>Lisosomas: degradan desechos.</li>
      <li>Cloroplastos: fotosíntesis (solo en vegetales).</li>
    </ul>
    <p><b>Ejemplo:</b> Las mitocondrias transforman glucosa y oxígeno en ATP para que la célula pueda moverse y crecer.</p>
  </div>

  <h2>Composición química de la célula</h2>

  <div>
    <h3>🔸 Agua</h3>
    <ul>
      <li>Representa 70-80% de la célula.</li>
      <li>Medio donde ocurren todas las reacciones químicas.</li>
    </ul>
    <p><b>Ejemplo:</b> Las enzimas funcionan solo en solución acuosa dentro del citoplasma.</p>
  </div>

  <div>
    <h3>🔸 Moléculas orgánicas</h3>
    <ul>
      <li>Carbohidratos: fuente de energía y estructuras como celulosa.</li>
      <li>Lípidos: forman membranas y reserva energética.</li>
      <li>Proteínas: trabajan como enzimas, transporte y estructura.</li>
      <li>Ácidos nucleicos (ADN/ARN): almacenan y transmiten información genética.</li>
    </ul>
    <p><b>Ejemplo:</b> El ADN contiene instrucciones para producir la proteína hemoglobina.</p>
  </div>

  <div>
    <h3>🔸 Moléculas inorgánicas</h3>
    <ul>
      <li>Sales minerales e iones (Na⁺, K⁺, Ca²⁺) que regulan funciones celulares y equilibrio osmótico.</li>
    </ul>
    <p><b>Ejemplo:</b> El calcio permite la contracción de células musculares.</p>
  </div>

  <h2>Extra: Tip visual para memorizar</h2>

  <p>Si la célula fuera un pastel:</p>
  <ul>
    <li>Agua: relleno</li>
    <li>Carbohidratos: base</li>
    <li>Proteínas: decoraciones funcionales</li>
    <li>Lípidos: cobertura que mantiene todo junto</li>
  </ul>

  <p><b>Ejemplo:</b></p>
  <p>Imagina una célula vegetal: el agua en el citoplasma, la celulosa como la base de la pared celular, proteínas formando estructuras internas y membrana plasmática de lípidos protegiendo todo. Así funciona como un pastel vivo.</p>

</section>
`},
// dia 2
{tema:"Seres vivos",
exp:`
<section>

  <h2> Estructuras celulares y su función</h2>
  <p>Las células tienen diferentes partes llamadas organelos o estructuras, cada una con funciones específicas que permiten que la célula viva, crezca, se comunique y reproduzca. Aunque todas las células cumplen funciones similares, la complejidad y los organelos varían según el tipo de célula.</p>

  <h3>Tipos de estructuras celulares</h3>
  <ul>
    <li><b>Organelos membranosos:</b> Rodeados de membranas que separan sus funciones del resto de la célula. Ejemplo: núcleo, mitocondrias, retículo endoplasmático, lisosomas y cloroplastos.</li>
    <li><b>Organelos no membranosos:</b> No tienen membrana que los separe. Ejemplo: ribosomas, centriolos, citoesqueleto.</li>
  </ul>

  <h2>Estructuras celulares clave</h2>

  <div>
    <h3>🔹 Núcleo</h3>
    <p>Organelo central que almacena el ADN y regula todas las actividades de la célula. Es como la oficina principal de la célula.</p>
    <ul>
      <li>Membrana nuclear protege el ADN.</li>
      <li>Contiene nucleolos, donde se producen ribosomas.</li>
    </ul>
    <p><b>Ejemplo:</b> El núcleo envía instrucciones al citoplasma para producir proteínas necesarias para la célula.</p>
  </div>

  <div>
    <h3>🔹 Mitocondrias</h3>
    <p>“La central energética” de la célula. Transforma nutrientes en ATP, que es la energía que la célula puede usar.</p>
    <ul>
      <li>Realiza respiración celular: glucosa + oxígeno → ATP + CO₂ + H₂O.</li>
    </ul>
    <p><b>Ejemplo:</b> Las mitocondrias de una célula muscular producen ATP para permitir la contracción del músculo.</p>
  </div>

  <div>
    <h3>🔹 Retículo endoplasmático (RE)</h3>
    <p>Red de membranas que fabrica y transporta proteínas y lípidos dentro de la célula.</p>
    <ul>
      <li>RE rugoso: tiene ribosomas y produce proteínas.</li>
      <li>RE liso: produce lípidos y detoxifica sustancias.</li>
    </ul>
    <p><b>Ejemplo:</b> Las células hepáticas usan RE liso para eliminar toxinas de la sangre.</p>
  </div>

  <div>
    <h3>🔹 Aparato de Golgi</h3>
    <p>Recibe proteínas y lípidos del RE, los procesa, empaqueta y los distribuye a donde se necesitan.</p>
    <ul>
      <li>Modifica proteínas agregando carbohidratos o lípidos.</li>
      <li>Forma vesículas de transporte.</li>
    </ul>
    <p><b>Ejemplo:</b> Una enzima digestiva se fabrica en el RE rugoso, pasa al Golgi para empacarse y luego se envía al lisosoma.</p>
  </div>

  <div>
    <h3>🔹 Ribosomas</h3>
    <p>Fábricas de proteínas. Pueden estar libres en el citoplasma o adheridos al RE rugoso.</p>
    <ul>
      <li>Traducen la información del ARN mensajero en proteínas.</li>
    </ul>
    <p><b>Ejemplo:</b> Una célula produce hemoglobina usando ribosomas libres.</p>
  </div>

  <div>
    <h3>🔹 Lisosomas</h3>
    <p>“Basureros” de la célula. Degradan desechos y materiales viejos o dañados.</p>
    <ul>
      <li>Contienen enzimas digestivas.</li>
    </ul>
    <p><b>Ejemplo:</b> Una bacteria ingerida por un glóbulo blanco se destruye dentro del lisosoma.</p>
  </div>

  <div>
    <h3>🔹 Cloroplastos (solo vegetales)</h3>
    <p>Realizan fotosíntesis: convierten luz solar en energía química (glucosa).</p>
    <ul>
      <li>Contienen clorofila, el pigmento verde que captura la luz.</li>
    </ul>
    <p><b>Ejemplo:</b> Una hoja de planta produce azúcar para alimentar toda la planta gracias a los cloroplastos.</p>
  </div>

  <div>
    <h3>🔹 Citoesqueleto</h3>
    <p>Red de filamentos que da forma, soporte y permite movimiento dentro de la célula.</p>
    <ul>
      <li>Permite transporte de vesículas y organelos.</li>
      <li>Mueve la célula mediante flagelos o cilios.</li>
    </ul>
    <p><b>Ejemplo:</b> Los glóbulos blancos se mueven hacia bacterias gracias al citoesqueleto.</p>
  </div>

  <h2> Teoría celular</h2>
  <p>Es la base de toda biología celular y dice lo siguiente:</p>
  <ul>
    <li>Todos los seres vivos están formados por una o más células.</li>
    <li>La célula es la unidad estructural y funcional de los seres vivos.</li>
    <li>Toda célula proviene de otra célula preexistente.</li>
    <li>El metabolismo celular (reacciones químicas) ocurre dentro de las células.</li>
    <li>La información genética se transmite de célula a célula mediante el ADN.</li>
  </ul>
  <p><b>Ejemplo:</b> Una célula de la piel se divide para formar nuevas células, siguiendo la teoría celular de que toda célula viene de otra célula.</p>

</section>
`},
// dia 3
{tema:"Seres vivos",
exp:`
<section>

  <h2> Metabolismo celular</h2>
  <p>El metabolismo es el conjunto de todas las reacciones químicas que ocurren dentro de una célula para mantener la vida. Es como la “fábrica química” de la célula: transforma los nutrientes en energía, construye materiales para crecer y elimina desechos.</p>

  <h3>Tipos de metabolismo</h3>
  <ul>
    <li><b>Anabolismo:</b> Conjunto de reacciones que <b>construyen moléculas complejas</b> a partir de moléculas simples. Consume energía. Ejemplo: síntesis de proteínas a partir de aminoácidos.</li>
    <li><b>Catabolismo:</b> Conjunto de reacciones que <b>descomponen moléculas complejas</b> en moléculas simples, liberando energía. Ejemplo: descomposición de glucosa en la respiración celular.</li>
  </ul>

  <h2>Procesos clave del metabolismo</h2>

  <div>
    <h3>🔹 Respiración celular</h3>
    <p>Proceso catabólico donde la célula obtiene energía de la glucosa y el oxígeno.</p>
    <ul>
      <li>Glucosa + O₂ → CO₂ + H₂O + ATP (energía usable)</li>
      <li>Ocurre en las mitocondrias.</li>
    </ul>
    <p><b>Ejemplo:</b> Una célula muscular usa ATP producido en la respiración para contraerse y moverse.</p>
  </div>

  <div>
    <h3>🔹 Fotosíntesis</h3>
    <p>Proceso anabólico que solo ocurre en plantas y algunos protistas. Convierte energía solar en energía química (glucosa).</p>
    <ul>
      <li>CO₂ + H₂O + luz solar → O₂ + glucosa</li>
      <li>Ocurre en los cloroplastos.</li>
    </ul>
    <p><b>Ejemplo:</b> Una hoja convierte luz solar en glucosa que alimenta toda la planta.</p>
  </div>

  <h2>Nutrición celular: autótrofa y heterótrofa</h2>
  <p>La nutrición se refiere a cómo los seres vivos obtienen y utilizan la energía y los nutrientes para sobrevivir. Existen dos formas principales:</p>

  <div>
    <h3>🔸 Nutrición autótrofa</h3>
    <p>Los organismos producen su propio alimento a partir de sustancias simples como CO₂ y agua.</p>
    <ul>
      <li><b>Fotosintética:</b> Usa luz solar como fuente de energía (plantas, algas).</li>
      <li><b>Quimiosintética:</b> Usa reacciones químicas para obtener energía (algunos bacterias que viven en fuentes termales).</li>
    </ul>
    <p><b>Ejemplo:</b> Una planta convierte CO₂ y agua en glucosa y oxígeno mediante fotosíntesis.</p>
  </div>

  <div>
    <h3>🔸 Nutrición heterótrofa</h3>
    <p>Los organismos <b>no producen su propio alimento</b>, sino que lo obtienen de otros seres vivos.</p>
    <ul>
      <li>Herbívoros: comen plantas.</li>
      <li>Carnívoros: comen animales.</li>
      <li>Omnívoros: comen plantas y animales.</li>
      <li>Parásitos: viven a expensas de otros organismos.</li>
      <li>Descomponedores: obtienen nutrientes de materia orgánica muerta (hongos y bacterias).</li>
    </ul>
    <p><b>Ejemplo:</b> Un lobo obtiene energía comiendo un ciervo, mientras que una seta se alimenta de hojas muertas en el suelo.</p>
  </div>

  <h2>Extra: Relación entre metabolismo y nutrición</h2>
  <p>La nutrición proporciona las sustancias necesarias para el metabolismo. Sin alimento o energía, el metabolismo se detiene y la célula no puede crecer, reparar daños ni reproducirse.</p>
  <ul>
    <li>Los autótrofos generan sus nutrientes para luego metabolizarlos.</li>
    <li>Los heterótrofos dependen de otros seres vivos para obtener nutrientes que luego metabolizan.</li>
  </ul>

  <p><b>Ejemplo:</b></p>
  <p>Una hoja realiza fotosíntesis para crear glucosa (nutrición autótrofa) y luego usa esa glucosa en la respiración celular (metabolismo) para obtener ATP que le permite crecer y mantenerse viva.</p>

</section>
`},
// dia 4
{tema:"Seres vivos",
exp:`
<section>

  <h2> Respiración celular: aeróbica y anaeróbica</h2>
  <p>La respiración celular es el proceso mediante el cual la célula obtiene energía (ATP) a partir de nutrientes, generalmente glucosa. Es como la “fábrica de energía” de la célula. Dependiendo de si necesita oxígeno o no, se clasifica en aeróbica y anaeróbica.</p>

  <h3>Tipos de respiración</h3>
  <ul>
    <li><b>Respiración aeróbica:</b> Requiere oxígeno. Es más eficiente y produce más energía.</li>
    <li><b>Respiración anaeróbica:</b> No requiere oxígeno. Produce energía de manera más rápida pero menos eficiente.</li>
  </ul>

  <h2>Respiración aeróbica</h2>

  <div>
    <h3>🔹 Proceso</h3>
    <p>Se lleva a cabo en las mitocondrias y consta de varias etapas:</p>
    <ul>
      <li><b>Glucólisis:</b> Ocurre en el citoplasma, descompone glucosa en piruvato, generando 2 ATP.</li>
      <li><b>Ciclo de Krebs:</b> En la matriz mitocondrial, el piruvato se descompone completamente, liberando CO₂ y electrones.</li>
      <li><b>Cadena de transporte de electrones:</b> En la membrana interna de la mitocondria, los electrones generan un gradiente de protones que produce ~34 ATP.</li>
    </ul>
    <p><b>Fórmula resumida:</b> C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O + ~36 ATP</p>
    <p><b>Ejemplo:</b> Una célula muscular durante ejercicio intenso usa respiración aeróbica para obtener suficiente energía para moverse sostenidamente.</p>
  </div>

  <div>
    <h3>🔹 Características</h3>
    <ul>
      <li>Necesita oxígeno.</li>
      <li>Produce más ATP (~36 por glucosa) que la anaeróbica.</li>
      <li>Descompone completamente la glucosa en CO₂ y H₂O.</li>
    </ul>
    <p><b>Ejemplo:</b> Correr largas distancias: los músculos dependen de respiración aeróbica para energía constante.</p>
  </div>

  <h2>Respiración anaeróbica</h2>

  <div>
    <h3>🔹 Proceso</h3>
    <p>No necesita oxígeno y ocurre en el citoplasma. Se limita a la glucólisis y produce productos finales diferentes según el organismo:</p>
    <ul>
      <li>En humanos (fermentación láctica): glucosa → ácido láctico + 2 ATP</li>
      <li>En levaduras (fermentación alcohólica): glucosa → etanol + CO₂ + 2 ATP</li>
    </ul>
    <p><b>Ejemplo:</b> Hacer ejercicio explosivo y muy intenso: los músculos producen ácido láctico porque no llega suficiente oxígeno.</p>
  </div>

  <div>
    <h3>🔹 Características</h3>
    <ul>
      <li>No requiere oxígeno.</li>
      <li>Produce poca energía (2 ATP por glucosa).</li>
      <li>Genera productos de desecho como ácido láctico o etanol.</li>
    </ul>
    <p><b>Ejemplo:</b> La fermentación en panadería: las levaduras producen CO₂ que hace que la masa suba.</p>
  </div>

  <h2> Síntesis de proteínas</h2>
  <p>La síntesis de proteínas es el proceso mediante el cual la célula fabrica proteínas según la información genética del ADN. Es fundamental porque las proteínas realizan casi todas las funciones celulares.</p>

  <h3>Etapas de la síntesis de proteínas</h3>

  <div>
    <h3>🔹 Transcripción</h3>
    <p>Ocurre en el núcleo (eucariotas). Se copia la información del ADN a una molécula de ARN mensajero (ARNm).</p>
    <ul>
      <li>ADN sirve como plantilla.</li>
      <li>ARN polimerasa sintetiza el ARNm complementario.</li>
    </ul>
    <p><b>Ejemplo:</b> Un gen que codifica hemoglobina se transcribe a ARNm en el núcleo.</p>
  </div>

  <div>
    <h3>🔹 Traducción</h3>
    <p>Ocurre en los ribosomas (citoplasma). El ARNm se “lee” y se ensamblan aminoácidos para formar la proteína.</p>
    <ul>
      <li>ARN de transferencia (ARNt) lleva aminoácidos específicos.</li>
      <li>Ribosoma une los aminoácidos en la secuencia correcta.</li>
    </ul>
    <p><b>Ejemplo:</b> El ARNm de hemoglobina se traduce en los ribosomas y se produce la proteína funcional hemoglobina.</p>
  </div>

  <div>
    <h3>🔹 Características de la síntesis proteica</h3>
    <ul>
      <li>Depende de la información genética del ADN.</li>
      <li>Permite fabricar enzimas, estructuras y proteínas de transporte.</li>
      <li>Ocurre en todas las células vivas.</li>
    </ul>
    <p><b>Ejemplo:</b> Las células del páncreas producen insulina siguiendo este proceso de transcripción y traducción.</p>
  </div>

  <h2>Extra: Relación con metabolismo</h2>
  <p>La respiración celular produce ATP que alimenta los procesos de síntesis de proteínas. Sin energía, la célula no podría fabricar proteínas ni mantener sus funciones vitales.</p>
  <ul>
    <li>Respiración aeróbica: energía para síntesis proteica sostenida.</li>
    <li>Respiración anaeróbica: energía rápida pero limitada, útil en emergencias.</li>
  </ul>

  <p><b>Ejemplo:</b></p>
  <p>Una célula muscular necesita ATP de respiración aeróbica para mover sus fibras y al mismo tiempo sintetiza proteínas estructurales para reparar daño muscular.</p>

</section>
`},
// dia 5
{tema:"Seres vivos",
exp:`
<section>

  <h2> Células madre</h2>
  <p>Las células madre son células especiales que tienen la capacidad única de <b>convertirse en diferentes tipos de células</b> y de <b>autoreplicarse</b>. Es como si fueran la “materia prima” de todas las demás células del cuerpo.</p>

  <h3>Tipos de células madre</h3>
  <ul>
    <li><b>Totipotentes:</b> Pueden formar <b>cualquier célula del organismo</b>, incluso los tejidos que forman la placenta. Ejemplo: las primeras células del embrión.</li>
    <li><b>Pluripotentes:</b> Pueden formar <bcualquier tipo de célula del cuerpo</b>, pero no pueden formar la placenta. Ejemplo: células madre embrionarias.</li>
    <li><b>Multipotentes:</b> Pueden diferenciarse en varios tipos de células dentro de un mismo linaje. Ejemplo: células madre de la médula ósea que producen glóbulos rojos, glóbulos blancos y plaquetas.</li>
    <li><b>Unipotentes:</b> Solo producen <b>un tipo de célula</b>, pero tienen capacidad de autorreplicación. Ejemplo: células madre de la piel que producen más células de la piel.</li>
  </ul>

  <h2>Funciones y características</h2>

  <div>
    <h3>🔹 Autorreplicación</h3>
    <p>Capacidad de dividirse y producir copias idénticas de sí mismas.</p>
    <ul>
      <li>Mantienen la reserva de células madre en el organismo.</li>
    </ul>
    <p><b>Ejemplo:</b> Las células madre de la médula ósea se dividen para mantener siempre suficientes células para formar sangre.</p>
  </div>

  <div>
    <h3>🔹 Diferenciación celular</h3>
    <p>Pueden transformarse en células especializadas con funciones específicas.</p>
    <ul>
      <li>Depende de señales químicas del entorno.</li>
      <li>Permite reparar tejidos dañados o crecer órganos.</li>
    </ul>
    <p><b>Ejemplo:</b> Una célula madre puede convertirse en una célula muscular para reparar un músculo lesionado.</p>
  </div>

  <h2> Trasplantes y células madre</h2>
  <p>Los trasplantes con células madre buscan reemplazar células dañadas o enfermas en un organismo. Son muy útiles en enfermedades donde las células normales no funcionan o están destruidas.</p>

  <div>
    <h3>🔸 Tipos de trasplantes con células madre</h3>
    <ul>
      <li><b>Autólogo:</b> Las células madre provienen del mismo paciente. Reduce riesgo de rechazo.</li>
      <li><b>Alogénico:</b> Las células provienen de otro individuo compatible (donante).</li>
      <li><b>Singuénico:</b> Las células provienen de un gemelo idéntico.</li>
    </ul>
    <p><b>Ejemplo:</b> Un paciente con leucemia puede recibir un trasplante de médula ósea alogénico para reemplazar su sangre dañada con células sanas de un donante.</p>
  </div>

  <div>
    <h3>🔸 Usos de los trasplantes</h3>
    <ul>
      <li>Tratar leucemias y linfomas.</li>
      <li>Reparar médula ósea después de quimioterapia.</li>
      <li>Regenerar tejidos dañados, como corazón, hígado o nervios en estudios experimentales.</li>
    </ul>
    <p><b>Ejemplo:</b> Investigadores usan células madre para intentar regenerar tejido cardíaco después de un infarto.</p>
  </div>

  <div>
    <h3>🔸 Beneficios y riesgos</h3>
    <ul>
      <li>Beneficios: regeneración de tejidos, tratamiento de enfermedades graves, posibilidad de curación a largo plazo.</li>
      <li>Riesgos: rechazo inmunológico (en trasplantes alogénicos), formación de tumores si las células no se controlan, complicaciones médicas del procedimiento.</li>
    </ul>
    <p><b>Ejemplo:</b> En un trasplante alogénico de médula ósea, los pacientes deben recibir medicación inmunosupresora para evitar que su cuerpo ataque las células donadas.</p>
  </div>

  <h2>Extra: Analogía para memorizar</h2>
  <p>Imagina las células madre como <b>hormiguitas obreras súper versátiles</b>:</p>
  <ul>
    <li>Al principio, pueden convertirse en cualquier tipo de trabajador (totipotentes/pluripotentes).</li>
    <li>Con señales externas, se especializan (multipotentes/unipotentes).</li>
    <li>Se usan para reparar partes dañadas del hormiguero (trasplantes).</li>
  </ul>

  <p><b>Ejemplo paso a paso:</b></p>
  <p>Si alguien tiene médula ósea dañada: se extraen células madre de un donante compatible (alogénico), se transfieren al paciente, las células se instalan en la médula y comienzan a producir glóbulos nuevos, restaurando la función sanguínea.</p>

</section>
`},
// dia 6
{tema:"Seres vivos",
exp:`
<section>

  <h2> Transfusiones de sangre</h2>
  <p>Una transfusión es el proceso mediante el cual se <b>introduce sangre o componentes sanguíneos</b> de un donante a un receptor para reponer sangre perdida o tratar ciertas enfermedades. Es como “recargar” el sistema circulatorio de alguien que lo necesita.</p>

  <h3>Tipos de transfusiones</h3>
  <ul>
    <li><b>Transfusión de sangre completa:</b> Se administra sangre con todos sus componentes: glóbulos rojos, glóbulos blancos, plaquetas y plasma.</li>
    <li><b>Transfusión de componentes:</b> Solo se administra un componente específico según la necesidad: glóbulos rojos, plaquetas o plasma.</li>
  </ul>

  <h2>Aspectos clave de las transfusiones</h2>

  <div>
    <h3>🔹 Compatibilidad sanguínea</h3>
    <p>Para que una transfusión sea segura, el tipo de sangre del donante y del receptor debe ser compatible:</p>
    <ul>
      <li>Sistema ABO: A, B, AB, O</li>
      <li>Factor Rh: positivo (+) o negativo (-)</li>
    </ul>
    <p><b>Ejemplo:</b> Una persona con sangre tipo A+ solo puede recibir sangre A+ o O+ y nunca B o AB, porque su sistema inmunológico atacaría las células incompatibles.</p>
  </div>

  <div>
    <h3>🔹 Procedimiento y uso</h3>
    <p>La transfusión se hace mediante vía intravenosa y puede salvar vidas en:</p>
    <ul>
      <li>Hemorragias graves por accidentes o cirugías.</li>
      <li>Anemias severas (deficiencia de glóbulos rojos).</li>
      <li>Enfermedades que afectan la producción de sangre (leucemia, quimioterapia).</li>
    </ul>
    <p><b>Ejemplo:</b> Tras un accidente de tráfico, un paciente con pérdida masiva de sangre recibe glóbulos rojos compatibles para mantener oxigenación y vida.</p>
  </div>

  <h2> Clonación</h2>
  <p>La clonación es el proceso de crear un organismo o célula que sea genéticamente idéntico a otro. Es como hacer una “fotocopia biológica”.</p>

  <h3>Tipos de clonación</h3>
  <ul>
    <li><b>Clonación reproductiva:</b> Produce un organismo completo idéntico al original. Ejemplo famoso: la oveja <b>Dolly</b>.</li>
    <li><b>Clonación terapéutica:</b> Produce células, tejidos u órganos para tratamiento médico, no un organismo completo.</li>
    <li><b>Clonación celular:</b> Copia de células específicas en laboratorio, útil para investigación.</li>
  </ul>

  <h2>Proceso básico de clonación</h2>

  <div>
    <h3>🔹 Paso 1: Obtención de células</h3>
    <p>Se toma una célula somática (cualquier célula del cuerpo que no sea huevo ni esperma) del organismo original.</p>
    <p><b>Ejemplo:</b> En Dolly, se tomó una célula de la glándula mamaria de la oveja donante.</p>
  </div>

  <div>
    <h3>🔹 Paso 2: Transferencia nuclear</h3>
    <p>Se extrae el núcleo de la célula donante y se inserta en un óvulo al que se le ha quitado su núcleo.</p>
    <p><b>Ejemplo:</b> El óvulo ahora contiene toda la información genética de la oveja original.</p>
  </div>

  <div>
    <h3>🔹 Paso 3: Estimulación y desarrollo</h3>
    <p>El óvulo con el núcleo donante se estimula para que empiece a dividirse y formar un embrión.</p>
    <ul>
      <li>Se desarrolla hasta estadio de blastocisto (primeras divisiones).</li>
    </ul>
    <p><b>Ejemplo:</b> El embrión se implanta en una madre sustituta que lo llevará hasta el nacimiento.</p>
  </div>

  <div>
    <h3>🔹 Paso 4: Resultado</h3>
    <ul>
      <li>Se obtiene un organismo genéticamente idéntico al original (clon reproductivo) o células específicas para investigación (clonación terapéutica).</li>
    </ul>
    <p><b>Ejemplo:</b> Dolly nació como copia genética exacta de la oveja donante.</p>
  </div>

  <h2>Ventajas y riesgos</h2>
  <ul>
    <li><b>Ventajas:</b> producir tejidos y órganos para trasplantes, estudiar enfermedades genéticas, conservación de especies en peligro.</li>
    <li><b>Riesgos:</b> problemas éticos, baja eficiencia, posibles defectos en clones, problemas de envejecimiento prematuro.</li>
  </ul>

  <h2>Analogía para memorizar</h2>
  <p>Piensa en la clonación como copiar un archivo de computadora:</p>
  <ul>
    <li>Archivo original = organismo donante</li>
    <li>Copia exacta = clon</li>
    <li>Transfusión de sangre = instalar actualizaciones que necesita el sistema (células y componentes vitales)</li>
  </ul>

  <p><b>Ejemplo paso a paso:</b></p>
  <p>Una persona con insuficiencia renal podría recibir células clonadas de riñón (clonación terapéutica) para regenerar su órgano dañado, mientras que un accidente grave puede necesitar una transfusión de glóbulos rojos para mantenerla con vida.</p>

</section>
`},
// dia 7
{tema:"Seres vivos",
exp:`
<section>

  <h2> Leyes de Mendel</h2>
  <p>Las leyes de Mendel explican cómo se heredan los rasgos de padres a hijos. Gregor Mendel, un monje y científico del siglo XIX, descubrió estas reglas estudiando plantas de guisante. Sus experimentos mostraron que los rasgos se transmiten de manera predecible mediante “unidades de herencia”, que hoy llamamos genes.</p>

  <h3>Leyes principales</h3>
  <ul>
    <li><b>Primera Ley – Ley de la segregación:</b> Cada organismo tiene dos copias de cada gen (una de cada padre) y estas se separan al formar gametos, de modo que cada gameto recibe solo una copia.</li>
    <li><b>Segunda Ley – Ley de distribución independiente:</b> Los genes de diferentes rasgos se distribuyen de manera independiente en los gametos, siempre que estén en cromosomas distintos.</li>
  </ul>

  <h2>Conceptos clave</h2>

  <div>
    <h3>🔹 Genotipo y fenotipo</h3>
    <p>Genotipo: composición genética de un organismo (los genes que tiene).<br>
       Fenotipo: características visibles o expresadas de un organismo.</p>
    <ul>
      <li>Genotipo: AA, Aa, aa</li>
      <li>Fenotipo: altura alta o baja, color de flor</li>
    </ul>
    <p><b>Ejemplo:</b> Una planta con genotipo Aa puede tener flores rojas (fenotipo), aunque tenga un gen recesivo no expresado.</p>
  </div>

  <div>
    <h3>🔹 Dominante y recesivo</h3>
    <p>Un alelo dominante se expresa incluso si solo hay una copia; un alelo recesivo solo se expresa si hay dos copias iguales.</p>
    <ul>
      <li>Dominante: A</li>
      <li>Recesivo: a</li>
    </ul>
    <p><b>Ejemplo:</b> El color púrpura de la flor es dominante (A), mientras que el blanco es recesivo (a). Una planta con Aa será púrpura.</p>
  </div>

  <h2> Teoría sintética de la evolución</h2>
  <p>La teoría sintética de la evolución, también llamada neodarwinismo, combina la selección natural de Darwin con la genética moderna. Explica cómo ocurren los cambios evolutivos a nivel de poblaciones y genes.</p>

  <div>
    <h3>🔹 Principios clave</h3>
    <ul>
      <li><b>Variación genética:</b> Cada individuo tiene diferencias genéticas que pueden ser heredadas.</li>
      <li><b>Mutación:</b> Cambios aleatorios en el ADN que generan nueva variación.</li>
      <li><b>Selección natural:</b> Los individuos con características favorables tienen más posibilidades de sobrevivir y reproducirse.</li>
      <li><b>Deriva genética:</b> Cambios aleatorios en la frecuencia de genes en poblaciones pequeñas.</li>
      <li><b>Flujo génico:</b> Intercambio de genes entre poblaciones mediante migración y reproducción.</li>
    </ul>
    <p><b>Ejemplo:</b> En una población de mariposas, las más oscuras se camuflan mejor y sobreviven, mientras que las claras son más visibles para los depredadores. Con el tiempo, el color oscuro se vuelve más común.</p>
  </div>

  <div>
    <h3>🔹 Relación con Mendel</h3>
    <p>La genética mendeliana explica cómo se transmiten las variaciones que la selección natural puede “elegir”. Sin genética, Darwin no podía explicar cómo se mantenían las características favorables a lo largo de generaciones.</p>
    <ul>
      <li>Genes = unidades de herencia</li>
      <li>Selección natural actúa sobre fenotipos derivados de esos genes</li>
    </ul>
    <p><b>Ejemplo:</b> Si un alelo muta para dar mejor resistencia a enfermedades, la selección natural favorecerá a quienes lo tengan y lo pasará a la descendencia.</p>
  </div>

  <h2>Analogía para memorizar</h2>
  <p>Imagina que los genes son “recetas” en un libro de cocina:</p>
  <ul>
    <li>Cada receta = un gen que da un rasgo (color de flor, altura).</li>
    <li>Dominante = receta que siempre se cocina aunque haya otra receta en la página.</li>
    <li>Mutación = una receta con un ingrediente distinto.</li>
    <li>Selección natural = las recetas más deliciosas se siguen usando y transmitiendo.</li>
  </ul>

  <p><b>Ejemplo paso a paso:</b> Una planta puede tener un gen para flor roja y otro para blanca. Si las flores rojas atraen más polinizadores, se reproducen más y con el tiempo las plantas rojas son mayoría en la población.</p>

</section>
`},
// dia 8
{tema:"Seres vivos",
exp:`
<section>

  <h2> Los cinco reinos de los seres vivos</h2>
  <p>Los seres vivos se clasifican en cinco grandes grupos o reinos según sus características, estructura celular, modo de nutrición y forma de reproducción. Esta clasificación nos ayuda a entender la diversidad de la vida en la Tierra.</p>

  <h3>Los reinos</h3>
  <ul>
    <li><b>Monera:</b> Organismos unicelulares, sin núcleo definido (procariotas). Incluye bacterias y cianobacterias. Suelen obtener energía por fotosíntesis, quimiosíntesis o descomposición.</li>
    <li><b>Protista:</b> Organismos unicelulares o simples, eucariotas (con núcleo). Incluye protozoos y algas. Algunos son autotróficos y otros heterótrofos.</li>
    <li><b>Fungi (hongos):</b> Eucariotas, mayormente multicelulares, heterótrofos por absorción. Se alimentan de materia orgánica en descomposición. Ejemplo: champiñones, levaduras.</li>
    <li><b>Plantae (plantas):</b> Eucariotas multicelulares, autótrofas por fotosíntesis, con pared celular de celulosa. Incluye musgos, helechos y plantas con flores.</li>
    <li><b>Animalia (animales):</b> Eucariotas multicelulares, heterótrofos, se desplazan en algún momento de su vida. Incluye desde esponjas hasta mamíferos.</li>
  </ul>

  <h2> Biodiversidad</h2>
  <p>La biodiversidad se refiere a la <b>variedad de formas de vida</b> que existen en la Tierra, incluyendo animales, plantas, hongos, bacterias y ecosistemas. Es fundamental para el equilibrio de los ecosistemas y la supervivencia humana.</p>

  <div>
    <h3>🔹 Niveles de biodiversidad</h3>
    <ul>
      <li><b>Biodiversidad genética:</b> Variación de genes dentro de una especie.</li>
      <li><b>Biodiversidad de especies:</b> Cantidad de especies diferentes en un ecosistema o región.</li>
      <li><b>Biodiversidad de ecosistemas:</b> Diversidad de hábitats y relaciones entre organismos y su entorno.</li>
    </ul>
    <p><b>Ejemplo:</b> En un bosque tropical hay muchas especies de plantas y animales diferentes (biodiversidad de especies) y variaciones genéticas dentro de cada especie.</p>
  </div>

  <div>
    <h3>🔹 Importancia de la biodiversidad</h3>
    <ul>
      <li>Mantiene el equilibrio ecológico.</li>
      <li>Proporciona alimentos, medicinas y recursos.</li>
      <li>Favorece la resiliencia ante cambios ambientales.</li>
    </ul>
    <p><b>Ejemplo:</b> La polinización de cultivos depende de insectos diversos; si disminuye la biodiversidad, se afecta la producción de alimentos.</p>
  </div>

  <div>
    <h3>🔹 Amenazas a la biodiversidad</h3>
    <ul>
      <li>Deforestación y destrucción de hábitats.</li>
      <li>Contaminación del agua, aire y suelo.</li>
      <li>Sobreexplotación de especies y recursos naturales.</li>
      <li>Cambio climático.</li>
    </ul>
    <p><b>Ejemplo:</b> La tala masiva de bosques reduce la cantidad de especies animales y vegetales, afectando la estabilidad del ecosistema.</p>
  </div>

  <h2>Analogía para memorizar</h2>
  <p>Imagina la biodiversidad como un gran supermercado:</p>
  <ul>
    <li>Cada pasillo = ecosistema diferente.</li>
    <li>Cada producto = especie distinta.</li>
    <li>Diferentes versiones del mismo producto = diversidad genética.</li>
    <li>Si eliminamos pasillos o productos, el supermercado pierde equilibrio y utilidad.</li>
  </ul>

  <p><b>Ejemplo paso a paso:</b> En un lago, hay peces, algas y bacterias. Cada grupo cumple una función: los peces controlan la población de insectos, las algas producen oxígeno, y las bacterias descomponen materia orgánica. Si desaparece un grupo, todo el ecosistema se desequilibra.</p>

</section>
`},
// dia 9
{tema:"Seres vivos",
exp:`
<section>

  <h2> Ecosistema</h2>
  <p>Un ecosistema es un sistema formado por <b>organismos vivos (biocenosis)</b> y su <b>entorno físico (biotopo)</b>, interactuando entre sí. Incluye plantas, animales, microorganismos, aire, agua, suelo y energía solar. Es como un “vecindario” donde todos los habitantes dependen unos de otros y del lugar donde viven.</p>

  <h3>Componentes de un ecosistema</h3>
  <ul>
    <li><b>Productores:</b> Organismos que producen su propio alimento mediante fotosíntesis. Ejemplo: plantas, algas.</li>
    <li><b>Consumidores:</b> Animales que se alimentan de otros organismos. Pueden ser herbívoros, carnívoros u omnívoros.</li>
    <li><b>Descomponedores:</b> Organismos que descomponen materia orgánica muerta, reciclando nutrientes. Ejemplo: hongos, bacterias.</li>
  </ul>

  <div>
    <h3>🔹 Funciones de un ecosistema</h3>
    <ul>
      <li>Transferencia de energía desde productores hasta consumidores.</li>
      <li>Ciclo de nutrientes: carbono, nitrógeno, agua.</li>
      <li>Mantenimiento del equilibrio ecológico.</li>
    </ul>
    <p><b>Ejemplo:</b> En un bosque, las hojas caídas son descompuestas por hongos y bacterias, que devuelven nutrientes al suelo para que las plantas crezcan nuevamente.</p>
  </div>

  <h2> Cadenas, redes y pirámides biológicas</h2>
  <p>Estas son formas de representar las relaciones alimenticias y flujo de energía en los ecosistemas.</p>

  <div>
    <h3>🔹 Cadena alimenticia</h3>
    <p>Es una secuencia lineal que muestra quién se come a quién. Representa cómo fluye la energía de un organismo a otro.</p>
    <ul>
      <li>Productores → Consumidores primarios → Consumidores secundarios → Consumidores terciarios → Descomponedores</li>
    </ul>
    <p><b>Ejemplo:</b> Hierba → Conejo → Zorro → Bacterias descomponedoras.</p>
  </div>

  <div>
    <h3>🔹 Red alimentaria</h3>
    <p>Es una interconexión de varias cadenas alimenticias en un ecosistema. Muestra relaciones más realistas y complejas.</p>
    <ul>
      <li>Permite ver que un mismo organismo puede ser alimento de varios depredadores y viceversa.</li>
    </ul>
    <p><b>Ejemplo:</b> El conejo puede ser comido por zorros, águilas o serpientes, mientras que la hierba es consumida por conejos, caballos o ciervos.</p>
  </div>

  <div>
    <h3>🔹 Pirámides ecológicas</h3>
    <p>Son representaciones gráficas de la cantidad de energía, biomasa o número de individuos en cada nivel trófico de un ecosistema.</p>
    <ul>
      <li>Pirámide de números: cantidad de individuos en cada nivel.</li>
      <li>Pirámide de biomasa: masa total de organismos en cada nivel.</li>
      <li>Pirámide de energía: energía disponible en cada nivel (disminuye a medida que subimos).</li>
    </ul>
    <p><b>Ejemplo:</b> En una pirámide de energía, 10,000 kcal de energía en plantas → 1,000 kcal en herbívoros → 100 kcal en carnívoros → 10 kcal en depredadores superiores.</p>
  </div>

  <h2>Analogía para memorizar</h2>
  <p>Piensa en un ecosistema como un gran festival:</p>
  <ul>
    <li>Productores = puestos de comida que generan energía.</li>
    <li>Consumidores = asistentes que comen la comida.</li>
    <li>Descomponedores = el equipo de limpieza que recicla todo lo que sobra.</li>
    <li>Redes alimenticias = todas las rutas por las que pasa la comida entre los asistentes.</li>
    <li>Pirámides = mostrar cuánta comida llega a cada grupo.</li>
  </ul>

  <p><b>Ejemplo paso a paso:</b> En un lago, las algas producen energía con luz solar, los peces comen algas, las aves comen peces y las bacterias descomponen los restos. La energía disminuye a cada nivel, y la cantidad de individuos se representa en pirámides.</p>

</section>
`},
// dia 10
{tema:"Células",
exp:`
<section>

  <h2> Células</h2>
  <p>La célula es la unidad básica de la vida. Todo ser vivo está formado por células, que son como “mini fábricas” capaces de mantener la vida: obtienen energía, se reproducen, se comunican y realizan funciones vitales.</p>

  <h3>Tipos principales de células</h3>
  <ul>
    <li><b>Células procariotas:</b> No tienen núcleo definido ni organelos membranosos. Su ADN está libre en el citoplasma. Ejemplo: bacterias.</li>
    <li><b>Células eucariotas:</b> Tienen núcleo definido y organelos especializados rodeados por membranas. Ejemplo: células animales, vegetales, hongos y protistas.</li>
  </ul>

  <h2> Células según su reino</h2>

  <div>
    <h3>🔹 Células bacterianas</h3>
    <p>Procariotas, muy simples, generalmente unicelulares, sin núcleo. Tienen pared celular y ADN libre.</p>
    <ul>
      <li>Se reproducen por fisión binaria.</li>
      <li>Algunas producen toxinas, otras son beneficiosas (microbiota intestinal).</li>
    </ul>
    <p><b>Ejemplo:</b> <i>Escherichia coli</i> en el intestino humano ayuda a digerir alimentos.</p>
  </div>

  <div>
    <h3>🔹 Células protistas</h3>
    <p>Eucariotas, generalmente unicelulares, con núcleo y organelos. Pueden ser autótrofos (algas) o heterótrofos (protozoos).</p>
    <ul>
      <li>Se reproducen sexual o asexualmente.</li>
    </ul>
    <p><b>Ejemplo:</b> <i>Paramecium</i>, un protozoo que se mueve con cilios para capturar alimento.</p>
  </div>

  <div>
    <h3>🔹 Células fúngicas</h3>
    <p>Eucariotas, pueden ser unicelulares (levaduras) o multicelulares (hongos). Pared celular de quitina y nutrición heterótrofa por absorción.</p>
    <ul>
      <li>Descomponen materia orgánica.</li>
    </ul>
    <p><b>Ejemplo:</b> Champiñones, que descomponen hojas y madera muerta.</p>
  </div>

  <div>
    <h3>🔹 Células vegetales</h3>
    <p>Eucariotas, multicelulares, con pared celular de celulosa, cloroplastos para fotosíntesis y vacuola grande para almacenar agua y nutrientes.</p>
    <ul>
      <li>Realizan fotosíntesis para producir su propio alimento (autótrofas).</li>
    </ul>
    <p><b>Ejemplo:</b> Células de hoja de espinaca que producen glucosa usando luz solar.</p>
  </div>

  <div>
    <h3>🔹 Células animales</h3>
    <p>Eucariotas, multicelulares, sin pared celular, con organelos como mitocondrias y lisosomas. Obtienen energía de los alimentos (heterótrofas).</p>
    <ul>
      <li>Tienen membrana flexible para moverse y comunicarse.</li>
    </ul>
    <p><b>Ejemplo:</b> Neuronas, que transmiten señales eléctricas en el cerebro.</p>
  </div>

  <h2> Biomoléculas</h2>
  <p>Las biomoléculas son compuestos químicos esenciales para la vida y la estructura y función de las células.</p>

  <div>
    <h3>🔹 Carbohidratos</h3>
    <p>Fuente principal de energía y componentes estructurales.</p>
    <ul>
      <li>Monosacáridos: glucosa, fructosa.</li>
      <li>Polisacáridos: almidón (plantas), glucógeno (animales), celulosa (pared celular).</li>
    </ul>
    <p><b>Ejemplo:</b> La glucosa se usa en la respiración celular para generar ATP.</p>
  </div>

  <div>
    <h3>🔹 Lípidos</h3>
    <p>Almacenan energía y forman membranas celulares.</p>
    <ul>
      <li>Grasas, aceites, fosfolípidos y esteroides.</li>
    </ul>
    <p><b>Ejemplo:</b> La bicapa de fosfolípidos forma la membrana plasmática de todas las células.</p>
  </div>

  <div>
    <h3>🔹 Proteínas</h3>
    <p>Forman estructuras celulares, enzimas y regulan funciones.</p>
    <ul>
      <li>Aminoácidos como unidades básicas.</li>
      <li>Enzimas catalizan reacciones químicas dentro de la célula.</li>
    </ul>
    <p><b>Ejemplo:</b> La hemoglobina transporta oxígeno en los glóbulos rojos.</p>
  </div>

  <div>
    <h3>🔹 Ácidos nucleicos</h3>
    <p>Almacenan y transmiten información genética.</p>
    <ul>
      <li>ADN: almacena la información genética.</li>
      <li>ARN: participa en la síntesis de proteínas.</li>
    </ul>
    <p><b>Ejemplo:</b> El ADN de una célula determina el color de ojos de un individuo.</p>
  </div>

  <h2>Analogía para memorizar</h2>
  <p>Piensa en la célula como una ciudad:</p>
  <ul>
    <li>Núcleo = ayuntamiento donde se guardan los planos de construcción (ADN).</li>
    <li>Mitocondrias = plantas de energía.</li>
    <li>Ribosomas = fábricas que producen proteínas.</li>
    <li>Membrana = muralla que protege y regula la entrada y salida.</li>
    <li>Biomoléculas = los “materiales de construcción” y combustible de la ciudad.</li>
  </ul>

  <p><b>Ejemplo paso a paso:</b> Una célula vegetal toma agua y CO<sub>2</sub>, usa luz solar (energía) y produce glucosa (comida) y oxígeno, gracias a sus cloroplastos y enzimas (proteínas).</p>

</section>
`},
// dia 11
{tema:"Procesos celulares",
exp:`
<section>

  <h2> Procesos celulares: Nutrición</h2>
  <p>La nutrición celular es el conjunto de procesos mediante los cuales la célula obtiene y utiliza los nutrientes para generar energía, crecer, repararse y realizar todas sus funciones vitales.</p>

  <h3>Tipos de nutrición celular</h3>
  <ul>
    <li><b>Autótrofa:</b> La célula produce su propio alimento usando sustancias inorgánicas. Generalmente usa la fotosíntesis (plantas y algunas algas) o quimiosíntesis (algunas bacterias).</li>
    <li><b>Heterótrofa:</b> La célula obtiene energía a partir de sustancias orgánicas provenientes de otros seres vivos. Incluye animales, hongos y protozoos.</li>
  </ul>

  <div>
    <h3>🔹 Fotosíntesis (nutrición autótrofa)</h3>
    <p>Proceso mediante el cual las células vegetales y algunas algas convierten luz solar, agua y CO<sub>2</sub> en glucosa y oxígeno.</p>
    <ul>
      <li>Fórmula resumida: 6 CO<sub>2</sub> + 6 H<sub>2</sub>O + luz → C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6 O<sub>2</sub></li>
      <li>Ocurre en los cloroplastos.</li>
    </ul>
    <p><b>Ejemplo:</b> Una hoja de espinaca toma CO<sub>2</sub> del aire y agua del suelo, y produce glucosa para alimentarse y oxígeno para el ambiente.</p>
  </div>

  <div>
    <h3>🔹 Nutrición heterótrofa</h3>
    <p>La célula obtiene energía al descomponer moléculas orgánicas (como azúcares, proteínas y grasas) provenientes de otros organismos.</p>
    <ul>
      <li>Digestión intracelular: los nutrientes son degradados dentro de la célula.</li>
      <li>Digestión extracelular: algunas células (como hongos) liberan enzimas fuera para descomponer alimentos y luego los absorben.</li>
    </ul>
    <p><b>Ejemplo:</b> Las amebas ingieren partículas de alimentos y las digieren dentro de su vacuola digestiva.</p>
  </div>

  <h2> Procesos celulares: Respiración</h2>
  <p>La respiración celular es el proceso mediante el cual la célula obtiene energía a partir de nutrientes (principalmente glucosa) y oxígeno, generando ATP, la “moneda energética” de la célula.</p>

  <div>
    <h3>🔹 Respiración aeróbica</h3>
    <p>Ocurre en presencia de oxígeno y produce gran cantidad de energía.</p>
    <ul>
      <li>Fórmula resumida: C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6 O<sub>2</sub> → 6 CO<sub>2</sub> + 6 H<sub>2</sub>O + energía (ATP)</li>
      <li>Ocurre en las mitocondrias.</li>
    </ul>
    <p><b>Ejemplo:</b> Las células musculares de un atleta usan oxígeno y glucosa para generar energía durante el ejercicio.</p>
  </div>

  <div>
    <h3>🔹 Respiración anaeróbica</h3>
    <p>Ocurre sin oxígeno y produce menos energía. Genera productos como ácido láctico (en animales) o alcohol (en levaduras).</p>
    <ul>
      <li>Fórmula simplificada en animales: C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> → 2 C<sub>3</sub>H<sub>6</sub>O<sub>3</sub> + energía (ATP)</li>
      <li>Fórmula simplificada en levaduras: C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> → 2 C<sub>2</sub>H<sub>5</sub>OH + 2 CO<sub>2</sub> + energía (ATP)</li>
    </ul>
    <p><b>Ejemplo:</b> Cuando corres mucho y falta oxígeno, tus músculos producen ácido láctico, causando fatiga temporal.</p>
  </div>

  <h2>Analogía para memorizar</h2>
  <p>Piensa en la célula como una fábrica:</p>
  <ul>
    <li>Nutrición = la entrada de materia prima (alimentos) a la fábrica.</li>
    <li>Respiración = el proceso de “quema” de la materia prima para generar energía (ATP) que mueve toda la fábrica.</li>
    <li>ATP = la electricidad que hace funcionar todas las máquinas.</li>
  </ul>

  <p><b>Ejemplo paso a paso:</b> Una célula vegetal toma glucosa de la fotosíntesis y oxígeno del aire. Dentro de la mitocondria, se transforma en ATP, liberando CO<sub>2</sub> y agua como desechos. La energía generada permite mover sustancias, dividirse y realizar funciones vitales.</p>

</section>
`},
// dia 12
{tema:"Procesos celulares",
exp:`
<section>

  <h2> Ciclo celular y Mitosis</h2>
  <p>El ciclo celular es el conjunto de etapas que atraviesa una célula desde que se forma hasta que se divide en dos células hijas. La mitosis es una de esas etapas, específicamente la división del núcleo para asegurar que cada célula hija reciba el mismo material genético.</p>

  <h3>Etapas del ciclo celular</h3>
  <ul>
    <li><b>Fase G1 (crecimiento):</b> La célula aumenta de tamaño y sintetiza proteínas y orgánulos. Se prepara para replicar su ADN.</li>
    <li><b>Fase S (síntesis de ADN):</b> La célula duplica su ADN, asegurando que cada célula hija tendrá la misma información genética.</li>
    <li><b>Fase G2 (preparación para mitosis):</b> La célula sigue creciendo y revisa que todo el ADN esté correcto para la división.</li>
    <li><b>Fase M (mitosis):</b> La célula divide su núcleo y luego su citoplasma (citocinesis) para formar dos células hijas idénticas.</li>
    <li><b>Fase G0:</b> Algunas células salen del ciclo y entran en reposo; no se dividen pero realizan funciones normales (ejemplo: neuronas).</li>
  </ul>

  <div>
    <h3>🔹 Mitosis: Etapas</h3>
    <p>La mitosis asegura que el material genético se distribuya equitativamente entre las células hijas. Se divide en 4 fases principales:</p>
    <ul>
      <li><b>Profase:</b> Los cromosomas se condensan y se hacen visibles. La membrana nuclear empieza a desintegrarse.</li>
      <li><b>Metafase:</b> Los cromosomas se alinean en el centro de la célula (placa ecuatorial) y los microtúbulos del huso mitótico se unen a los centrómeros.</li>
      <li><b>Anafase:</b> Las cromátidas hermanas se separan y se dirigen a los polos opuestos de la célula.</li>
      <li><b>Telofase:</b> Se forman nuevas membranas nucleares alrededor de los cromosomas en cada polo. Los cromosomas comienzan a desenrollarse.</li>
      <li><b>Citocinesis:</b> Es la división del citoplasma que separa la célula en dos células hijas idénticas.</li>
    </ul>
    <p><b>Ejemplo:</b> Una célula de piel que se divide para reemplazar células muertas pasa por estas fases: duplica su ADN, separa cromosomas y finalmente forma dos células nuevas listas para funcionar.</p>
  </div>

  <div>
    <h3>🔹 Importancia del ciclo celular y la mitosis</h3>
    <ul>
      <li>Permite el crecimiento de los organismos.</li>
      <li>Reemplaza células dañadas o muertas.</li>
      <li>Mantiene la estabilidad genética (cada célula hija recibe la misma información).</li>
    </ul>
    <p><b>Ejemplo:</b> Cada vez que te cortas la piel, las células del borde del corte se dividen por mitosis para regenerar el tejido.</p>
  </div>

  <h2>Analogía para memorizar</h2>
  <p>Piensa en la célula como una oficina:</p>
  <ul>
    <li>Fase G1 = la oficina se prepara y organiza materiales.</li>
    <li>Fase S = duplican todos los documentos importantes (ADN).</li>
    <li>Fase G2 = revisan que no falte nada y todo esté correcto.</li>
    <li>Mitosis = dividen la oficina en dos nuevas oficinas, asegurándose de que cada una tenga todos los documentos.</li>
    <li>Fase G0 = algunas oficinas dejan de expandirse y sólo trabajan normalmente.</li>
  </ul>

  <p><b>Ejemplo paso a paso:</b> Una célula de hígado entra en ciclo celular: crece (G1), duplica su ADN (S), se prepara (G2), divide su núcleo y citoplasma (M), y finalmente las dos células hijas continúan funcionando en el hígado con toda la información intacta.</p>

</section>
`},
// dia 13
{tema:"Cuerpo humano",
exp:`
<section>

  <h2> Aparatos, sistemas y órganos</h2>
  <p>El cuerpo humano está organizado de manera jerárquica: células → tejidos → órganos → sistemas → aparatos. Cada nivel cumple funciones específicas que permiten que el organismo viva, crezca y se mantenga saludable.</p>

  <h3> Aparatos</h3>
  <p>Un aparato está formado por varios sistemas que trabajan juntos para cumplir una función general del cuerpo.</p>
  <ul>
    <li><b>Aparato digestivo:</b> Procesa los alimentos para obtener nutrientes y energía. Incluye sistemas digestivos de órganos como estómago, intestinos y hígado.</li>
    <li><b>Aparato locomotor:</b> Permite el movimiento y soporte del cuerpo. Incluye huesos, músculos, articulaciones y tendones.</li>
    <li><b>Aparato respiratorio:</b> Encargado de intercambiar gases (oxígeno y CO<sub>2</sub>). Incluye pulmones, tráquea y bronquios.</li>
    <li><b>Aparato circulatorio:</b> Transporta sangre, nutrientes y desechos. Incluye corazón, vasos sanguíneos y sangre.</li>
    <li><b>Aparato excretor:</b> Elimina desechos y mantiene equilibrio hídrico y químico. Incluye riñones, vejiga y uréteres.</li>
  </ul>

  <h3> Sistemas</h3>
  <p>Un sistema es un conjunto de órganos que colaboran para realizar una función específica dentro del aparato o del cuerpo en general.</p>
  <ul>
    <li><b>Sistema nervioso:</b> Coordina las funciones del cuerpo y transmite señales entre órganos y el cerebro. Ejemplo: cerebro, médula espinal, nervios.</li>
    <li><b>Sistema endocrino:</b> Regula funciones mediante hormonas. Ejemplo: tiroides, glándulas suprarrenales.</li>
    <li><b>Sistema inmunológico:</b> Defiende el cuerpo contra enfermedades. Ejemplo: linfocitos, ganglios linfáticos, bazo.</li>
    <li><b>Sistema tegumentario:</b> Protege el cuerpo y regula temperatura. Ejemplo: piel, uñas y pelo.</li>
  </ul>

  <h3> Órganos</h3>
  <p>Los órganos son estructuras formadas por diferentes tejidos que realizan funciones concretas dentro de un sistema o aparato.</p>
  <ul>
    <li><b>Corazón:</b> Bombea sangre a todo el cuerpo (aparato circulatorio).</li>
    <li><b>Pulmón:</b> Intercambia oxígeno y dióxido de carbono (aparato respiratorio).</li>
    <li><b>Estómago:</b> Digere alimentos y mezcla con enzimas (aparato digestivo).</li>
    <li><b>Riñón:</b> Filtra la sangre para eliminar desechos y regular líquidos (aparato excretor).</li>
    <li><b>Cerebro:</b> Controla funciones corporales y procesa información (sistema nervioso).</li>
  </ul>

  <h2>Analogía para memorizar</h2>
  <p>Piensa en el cuerpo humano como una gran empresa:</p>
  <ul>
    <li>Aparato = departamentos de la empresa (digestivo, respiratorio, locomotor, etc.)</li>
    <li>Sistema = equipos dentro de los departamentos que hacen tareas específicas (sistema nervioso, endocrino, inmunológico)</li>
    <li>Órganos = trabajadores clave que realizan funciones concretas para que todo funcione (corazón, pulmones, estómago, cerebro)</li>
  </ul>

  <p><b>Ejemplo paso a paso:</b> Cuando comes una manzana: 
  <ul>
    <li>El aparato digestivo (estómago, intestinos) procesa los nutrientes.</li>
    <li>El aparato circulatorio transporta esos nutrientes y oxígeno a las células.</li>
    <li>El sistema nervioso coordina el movimiento de la mandíbula y la digestión.</li>
    <li>Cada órgano cumple su función para que el cuerpo obtenga energía y funcione correctamente.</li>
  </ul>
  </p>

</section>
`}
],

comprension: [
// dia 1
{tema:"Recursos textuales",
exp:`
<section>

  <h2> Vocabulario y relaciones semánticas </h2>
  <p>El vocabulario y las relaciones semánticas nos ayudan a entender cómo se conectan las palabras dentro de un texto. Esto no solo mejora la comprensión, sino que también permite responder preguntas de sinónimos, antónimos y categorías más complejas en exámenes.</p>

  <div>
    <h3>🔹 Sinónimos</h3>
    <p>Palabras que significan lo mismo o algo muy parecido. Son útiles para evitar repeticiones y matizar el texto.</p>
    <ul>
      <li>Ejemplo fácil: <b>feliz</b> → <b>contento</b>, <b>alegre</b></li>
      <li>Ejemplo avanzado: <b>alebrije</b> → <b>figura fantástica</b>, <b>artesanía fantástica</b>  
        <small>(un alebrije es una criatura imaginaria típica del arte popular mexicano, así que el sinónimo no es literal sino por su función o significado cultural)</small>
      </li>
      <li>Ejemplo en frase: “El artista talló un <b>alebrije</b> colorido.” → “El artista talló una <b>figura fantástica</b> colorida.”</li>
    </ul>
  </div>

  <div>
    <h3>🔹 Antónimos</h3>
    <p>Palabras con significados opuestos. Ayudan a identificar contrastes y matices en un texto.</p>
    <ul>
      <li>Ejemplo fácil: <b>alto</b> → <b>bajo</b>, <b>grande</b> → <b>pequeño</b></li>
      <li>Ejemplo avanzado: <b>efímero</b> → <b>permanente</b>  
        <small>(efímero significa algo que dura poco; su antónimo es algo duradero o estable)</small></li>
      <li>Ejemplo en frase: “El fuego fue <b>efímero</b> pero el recuerdo permanece <b>permanente</b>.”</li>
    </ul>
  </div>

  <div>
    <h3>🔹 Hiponimia</h3>
    <p>Palabras específicas dentro de una categoría general. La palabra específica se llama hipónimo.</p>
    <ul>
      <li>Ejemplo fácil: <b>manzana</b> es hipónimo de <b>fruta</b></li>
      <li>Ejemplo avanzado: <b>tigrillo</b> es hipónimo de <b>felino</b>  
        <small>(el tigrillo es un felino pequeño, similar al jaguarundi; el hiperónimo “felino” abarca gatos grandes y pequeños)</small></li>
      <li>Frase ejemplo: “El <b>tigrillo</b> corre ágil por la selva” → entendemos que es un tipo de <b>felino</b>.</li>
    </ul>
  </div>

  <div>
    <h3>🔹 Hiperonimia</h3>
    <p>Palabra general que abarca otras más específicas. La palabra general se llama hiperónimo.</p>
    <ul>
      <li>Ejemplo fácil: <b>animal</b> es hiperónimo de <b>perro</b>, <b>gato</b></li>
      <li>Ejemplo avanzado: <b>arte popular</b> es hiperónimo de <b>alebrije</b>, <b>papel picado</b>, <b>rebozo</b></li>
      <li>Frase ejemplo: “El museo tiene varias piezas de <b>arte popular</b> mexicano, como <b>alebrijes</b> y <b>papel picado</b>.”</li>
    </ul>
  </div>

  <div>
    <h3>🔹 Aplicación práctica</h3>
    <p>Usar estas relaciones semánticas permite:</p>
    <ul>
      <li>Evitar repeticiones usando sinónimos.</li>
      <li>Analizar contrastes usando antónimos.</li>
      <li>Comprender jerarquías de palabras usando hipónimos e hiperónimos.</li>
      <li>Resolver preguntas de vocabulario complejo en exámenes, incluso palabras culturales o técnicas.</li>
    </ul>
    <p><b>Ejemplo completo:</b></p>
    <p>“Me gusta el <b>arte popular</b> (hiperónimo), especialmente los <b>alebrijes</b> y los <b>papeles picados</b> (hipónimos). El alebrije es <b>fantástico</b> (sinónimo: imaginario) y su elaboración es <b>difícil</b> (antónimo: sencillo).”</p>
  </div>

</section>
`},
// dia 2
{tema:"Recursos textuales",
exp:`
<section>

  <h2> Recursos retóricos</h2>
  <p>Los recursos retóricos son figuras literarias que se usan para darle fuerza, belleza o claridad a los textos. Conocerlos te ayuda a interpretar y analizar textos en exámenes y a mejorar tu propia escritura.</p>

  <div>
    <h3>🔹 Metáfora</h3>
    <p>Consiste en comparar dos elementos sin usar palabras como “como” o “igual que”, transfiriendo cualidades de uno a otro.</p>
    <ul>
      <li>Ejemplo fácil: “Tus ojos son el mar.” → se compara la profundidad o color de los ojos con el mar.</li>
      <li>Ejemplo avanzado: “La vida es un laberinto sin salida.” → se representa la complejidad y confusión de la vida.</li>
    </ul>
  </div>

  <div>
    <h3>🔹 Comparación o símil</h3>
    <p>Se compara dos elementos usando conectores como “como”, “igual que”, “cual”.</p>
    <ul>
      <li>Ejemplo fácil: “Valiente como un león.”</li>
      <li>Ejemplo avanzado: “Sus ideas brillaban <b>como</b> estrellas en la oscuridad del debate.”</li>
    </ul>
  </div>

  <div>
    <h3>🔹 Antítesis</h3>
    <p>Contrasta dos ideas opuestas para resaltar su diferencia.</p>
    <ul>
      <li>Ejemplo fácil: “Blanco y negro.”</li>
      <li>Ejemplo avanzado: “Amar y odiar, vivir y morir, todo en un mismo instante.”</li>
    </ul>
  </div>

  <div>
    <h3>🔹 Epíteto</h3>
    <p>Adjetivo que resalta una cualidad inherente del sustantivo.</p>
    <ul>
      <li>Ejemplo fácil: “La blanca nieve.”</li>
      <li>Ejemplo avanzado: “El oscuro abismo de la mente.”</li>
    </ul>
  </div>

  <div>
    <h3>🔹 Paradoja</h3>
    <p>Contradicción aparente que invita a reflexionar y pensar más allá de lo literal.</p>
    <ul>
      <li>Ejemplo fácil: “Menos es más.”</li>
      <li>Ejemplo avanzado: “Vivo sin vivir en mí.” → la idea de vivir y no vivir al mismo tiempo.</li>
    </ul>
  </div>

  <div>
    <h3>🔹 Hipérbole</h3>
    <p>Exageración de la realidad para enfatizar o dramatizar algo.</p>
    <ul>
      <li>Ejemplo fácil: “Te lo he dicho mil veces.”</li>
      <li>Ejemplo avanzado: “Lloró un océano de lágrimas.”</li>
    </ul>
  </div>

  <div>
    <h3>🔹 Prosopopeya o personificación</h3>
    <p>Atribuye cualidades humanas a animales, objetos o ideas.</p>
    <ul>
      <li>Ejemplo fácil: “El viento susurraba entre los árboles.”</li>
      <li>Ejemplo avanzado: “La justicia cerró los ojos mientras la corrupción caminaba libre.”</li>
    </ul>
  </div>

  <div>
    <h3>🔹 Aplicación práctica</h3>
    <p>Estos recursos permiten:</p>
    <ul>
      <li>Hacer los textos más expresivos y atractivos.</li>
      <li>Analizar mejor textos literarios y responder preguntas de interpretación.</li>
      <li>Destacar ideas importantes o sentimientos de manera creativa.</li>
    </ul>
    <p><b>Ejemplo completo:</b></p>
    <p>“En la <b>oscura</b> noche (epíteto), el corazón del héroe ardía como fuego (comparación), aunque sabía que la muerte lo seguía (antítesis). Cada paso lo llevaba más cerca del peligro y de la gloria (paradoja), y sus lágrimas parecían ríos (hipérbole). La luna lo observaba silenciosa (prosopopeya) mientras soñaba con un mundo mejor (metáfora).”</p>
  </div>

</section>
`},
// dia 3
{tema:"Recursos textuales",
exp:`
<section>

  <h2>  Prólogo</h2>
  <p>El prólogo es una sección introductoria que aparece al inicio de un libro o texto. Su objetivo principal es preparar al lector para lo que va a leer, proporcionando contexto, explicando la intención del autor o compartiendo información relevante sobre el contenido.</p>

  <div>
    <h3>🔹 Características del prólogo</h3>
    <ul>
      <li>Generalmente escrito por el autor o un experto invitado.</li>
      <li>Se encuentra al inicio del texto, antes del primer capítulo.</li>
      <li>Puede incluir la motivación de la obra, contexto histórico, inspiración o agradecimientos.</li>
      <li>No forma parte de la narrativa principal del libro, pero ayuda a entenderla mejor.</li>
    </ul>
    <p><b>Ejemplo:</b> “Este libro nació de mi fascinación por las aves tropicales. Espero que al leerlo, el lector descubra la riqueza de su hábitat y la importancia de protegerlo.”</p>
  </div>

  <div>
    <h3>🔹 Funciones del prólogo</h3>
    <ul>
      <li>Presentar el tema o enfoque del texto.</li>
      <li>Explicar la intención del autor o los objetivos de la obra.</li>
      <li>Dar contexto histórico, cultural o científico necesario para la comprensión.</li>
      <li>Motivar al lector a continuar leyendo.</li>
    </ul>
    <p><b>Ejemplo en un libro de historia:</b> “En este prólogo, presento los eventos clave de la Revolución Industrial, destacando su impacto social y económico para que el lector comprenda los capítulos siguientes con mayor claridad.”</p>
  </div>

  <div>
    <h3>🔹 Diferencia con la introducción</h3>
    <p>El prólogo y la introducción pueden parecer similares, pero tienen diferencias:</p>
    <ul>
      <li>El <b>prólogo</b> suele hablar desde el autor o un tercero sobre la obra, su contexto o motivación.</li>
      <li>La <b>introducción</b> presenta directamente los contenidos, estructura o temas del libro.</li>
    </ul>
    <p><b>Ejemplo comparativo:</b></p>
    <ul>
      <li>Prólogo: “Escribí este libro porque siempre me fascinó la astronomía y quiero compartir mi pasión con el lector.”</li>
      <li>Introducción: “Este libro está dividido en tres capítulos: el primero sobre el sistema solar, el segundo sobre galaxias y el tercero sobre fenómenos cósmicos.”</li>
    </ul>
  </div>

  <div>
    <h3>🔹 Aplicación práctica</h3>
    <p>Comprender el prólogo permite:</p>
    <ul>
      <li>Anticipar de qué tratará la obra.</li>
      <li>Entender la perspectiva o intención del autor.</li>
      <li>Resumir y responder preguntas sobre la función del prólogo en exámenes.</li>
    </ul>
    <p><b>Ejemplo en examen:</b> “El prólogo de un libro explica la motivación del autor y el contexto de la obra. No forma parte de la narrativa principal.”</p>
  </div>

</section>
`},
// dia 4
{tema:"Recursos textuales",
exp:`
<section>
  <h2> Ensayo</h2>
  <p>El ensayo es un texto escrito en prosa que analiza, interpreta o argumenta sobre un tema específico. Su objetivo es presentar ideas, reflexiones o juicios personales de manera estructurada, con base en evidencias y razonamiento.</p>

  <div>
    <h3>🔹 Características del ensayo</h3>
    <ul>
      <li>Es subjetivo: refleja la opinión o interpretación del autor.</li>
      <li>No necesariamente sigue una estructura rígida, pero suele tener introducción, desarrollo y conclusión.</li>
      <li>Se basa en argumentos claros y fundamentados.</li>
      <li>Puede abordar cualquier tema: literario, científico, social, filosófico, etc.</li>
    </ul>
    <p><b>Ejemplo:</b> “Este ensayo analiza cómo la tecnología influye en la creatividad de los jóvenes, argumentando que el acceso digital puede potenciar tanto la imaginación como la dependencia de dispositivos.”</p>
  </div>

  <div>
    <h3>🔹 Estructura del ensayo</h3>
    <ul>
      <li><b>Introducción:</b> presenta el tema y la tesis principal.</li>
      <li><b>Desarrollo:</b> expone argumentos, ejemplos, evidencia y explicaciones.</li>
      <li><b>Conclusión:</b> sintetiza las ideas y reafirma la tesis, invitando a la reflexión.</li>
    </ul>
    <p><b>Ejemplo:</b></p>
    <ul>
      <li>Introducción: “La lectura digital ha transformado la manera en que aprendemos. Este ensayo examina sus ventajas y riesgos.”</li>
      <li>Desarrollo: “Por un lado, facilita el acceso a información global; por otro, puede afectar la concentración y memoria a largo plazo.”</li>
      <li>Conclusión: “En conclusión, la lectura digital es una herramienta poderosa, pero requiere hábitos conscientes para aprovechar sus beneficios sin perder la atención y comprensión.”</li>
    </ul>
  </div>

  <div>
    <h3>🔹 Tipos de ensayo</h3>
    <ul>
      <li><b>Ensayo argumentativo:</b> defiende una idea con evidencia y razonamiento.</li>
      <li><b>Ensayo expositivo:</b> explica un tema de manera clara y objetiva.</li>
      <li><b>Ensayo crítico:</b> analiza y evalúa una obra, teoría o fenómeno.</li>
      <li><b>Ensayo literario o creativo:</b> combina reflexión con estilo personal y lenguaje figurado.</li>
    </ul>
    <p><b>Ejemplo:</b> “Un ensayo literario sobre la naturaleza puede incluir metáforas, descripciones poéticas y reflexiones personales, mientras que uno argumentativo sobre cambio climático usaría estadísticas y citas de expertos.”</p>
  </div>

  <div>
    <h3>🔹 Aplicación práctica</h3>
    <p>Comprender el ensayo permite:</p>
    <ul>
      <li>Identificar la tesis y los argumentos en textos académicos o literarios.</li>
      <li>Redactar textos propios siguiendo estructura y coherencia.</li>
      <li>Responder preguntas de examen sobre tipo de texto, función y elementos.</li>
    </ul>
    <p><b>Ejemplo en examen:</b> “Un ensayo presenta la opinión del autor sobre un tema, desarrolla argumentos con evidencia y concluye reafirmando la tesis. Puede ser argumentativo, expositivo o literario.”</p>
  </div>

</section>
`},
// dia 5
{tema:"Recursos textuales",
exp:`
<section>
  <h2> Reseña</h2>
  <p>La reseña es un texto que describe, analiza y evalúa una obra, ya sea literaria, artística, científica o audiovisual. Su propósito es informar al lector sobre el contenido y ofrecer una opinión fundamentada que permita decidir si vale la pena leer, ver o estudiar la obra.</p>

  <div>
    <h3>🔹 Características de la reseña</h3>
    <ul>
      <li>Breve y concisa, destacando lo más relevante de la obra.</li>
      <li>Incluye descripción objetiva del contenido y valoración subjetiva del autor de la reseña.</li>
      <li>Puede incluir referencias a otras obras para comparación.</li>
      <li>Lenguaje claro, crítico y organizado.</li>
    </ul>
    <p><b>Ejemplo:</b> “La película ‘El viaje de Chihiro’ combina animación impresionante y narrativa emotiva. Aunque algunos momentos son lentos, la historia transmite valores de amistad y valentía, siendo altamente recomendable para todas las edades.”</p>
  </div>

  <div>
    <h3>🔹 Estructura de la reseña</h3>
    <ul>
      <li><b>Introducción:</b> presenta la obra, su autor o creador y contexto básico.</li>
      <li><b>Resumen del contenido:</b> describe los puntos principales, sin revelar spoilers críticos si es narrativa.</li>
      <li><b>Evaluación crítica:</b> analiza fortalezas y debilidades, ofrece opiniones y justifica los juicios.</li>
      <li><b>Conclusión:</b> resume la valoración final y recomienda o no la obra al lector.</li>
    </ul>
    <p><b>Ejemplo:</b></p>
    <ul>
      <li>Introducción: “El libro ‘Cien años de soledad’ de Gabriel García Márquez es una obra fundamental de la literatura latinoamericana.”</li>
      <li>Resumen: “La novela narra la historia de la familia Buendía a lo largo de varias generaciones, explorando temas como el amor, la soledad y el destino.”</li>
      <li>Evaluación: “El lenguaje es rico y poético, pero la estructura compleja puede resultar confusa para algunos lectores.”</li>
      <li>Conclusión: “Es una obra imprescindible, recomendada para quienes disfrutan de la literatura profunda y simbólica.”</li>
    </ul>
  </div>

  <div>
    <h3>🔹 Tipos de reseña</h3>
    <ul>
      <li><b>Reseña literaria:</b> sobre libros, cuentos, novelas o poesía.</li>
      <li><b>Reseña artística:</b> sobre películas, obras de teatro, exposiciones o música.</li>
      <li><b>Reseña científica:</b> sobre artículos, investigaciones o descubrimientos.</li>
      <li><b>Reseña crítica:</b> enfatiza la opinión del reseñista sobre la obra, destacando fortalezas y debilidades.</li>
    </ul>
    <p><b>Ejemplo:</b> “Una reseña crítica de la película ‘Inception’ analizaría su compleja narrativa y efectos visuales, mientras que una reseña científica podría evaluar un documental sobre física cuántica explicando precisión y claridad.”p>
  </div>

  <div>
    <h3>🔹 Aplicación práctica</h3>
    <p>Comprender la reseña permite:</p>
    <ul>
      <li>Identificar la opinión y la descripción objetiva en textos evaluativos.</li>
      <li>Redactar reseñas propias siguiendo estructura clara.</li>
      <li>Responder preguntas de examen sobre la función de la reseña y sus elementos.</li>
    </ul>
    <p><b>Ejemplo en examen:</b> “Una reseña informa sobre el contenido de una obra y evalúa sus cualidades, permitiendo al lector decidir si le interesa o no. Incluye introducción, resumen, evaluación crítica y conclusión.”</p>
  </div>

</section>
`},
// dia 6
{tema:"Discurso científico",
exp:`
<section>

  <h2> Discurso científico</h2>
  <p>El discurso científico es la forma de comunicación utilizada en textos académicos y de investigación. Su objetivo es transmitir información de manera clara, precisa y objetiva, basada en evidencias y datos verificables.</p>

  <div>
    <h3>🔹 Características del discurso científico</h3>
    <ul>
      <li>Objetivo: busca informar o explicar, no persuadir emocionalmente.</li>
      <li>Preciso y claro: evita ambigüedades y lenguaje figurado.</li>
      <li>Basado en evidencias: utiliza datos, experimentos, citas y referencias confiables.</li>
      <li>Uso de terminología especializada según la disciplina.</li>
    </ul>
    <p><b>Ejemplo:</b> “La fotosíntesis es el proceso mediante el cual las plantas convierten la energía solar en energía química almacenada en glucosa, utilizando dióxido de carbono y agua como reactivos principales.”</p>
  </div>

  <div>
    <h3>🔹 Función del discurso científico</h3>
    <ul>
      <li>Comunicar resultados de investigaciones de forma clara y verificable.</li>
      <li>Permitir que otros científicos reproduzcan experimentos o estudios.</li>
      <li>Difundir conocimiento especializado a la comunidad académica y pública.</li>
    </ul>
    <p><b>Ejemplo práctico:</b> Un artículo científico sobre cambio climático presenta datos de temperatura global, gráficos, análisis estadístico y conclusiones respaldadas por evidencias.</p>
  </div>

  <h2> Diseño de la investigación documental</h2>
  <p>El diseño de investigación documental se centra en la recopilación, análisis y síntesis de información existente sobre un tema, sin realizar experimentos directos. Es fundamental en ciencias sociales, humanidades y estudios preliminares de investigación.</p>

  <div>
    <h3>🔹 Características del diseño documental</h3>
    <ul>
      <li>Basado en fuentes secundarias: libros, artículos, revistas científicas, informes, documentos oficiales.</li>
      <li>Organizado: requiere planificar cómo se recopilará y analizará la información.</li>
      <li>Objetivo: busca comprender, interpretar y sintetizar el conocimiento existente.</li>
    </ul>
    <p><b>Ejemplo:</b> “Para un ensayo sobre la biodiversidad en México, el investigador recopila artículos científicos, libros de ecología y reportes de conservación para analizar las especies en peligro.”</p>
  </div>

  <div>
    <h3>🔹 Etapas del diseño de investigación documental</h3>
    <ul>
      <li>Selección del tema y formulación del problema de investigación.</li>
      <li>Búsqueda y selección de fuentes confiables.</li>
      <li>Lectura crítica y análisis de la información recopilada.</li>
      <li>Organización de los datos y síntesis de los hallazgos.</li>
      <li>Presentación de resultados y conclusiones.</li>
    </ul>
    <p><b>Ejemplo práctico:</b> “Se investigan causas del cambio climático mediante artículos científicos. Se resumen patrones climáticos, se comparan resultados y se concluye sobre los factores más influyentes.”</p>
  </div>

  <div>
    <h3>🔹 Aplicación práctica</h3>
    <p>Comprender el discurso científico y la investigación documental permite:</p>
    <ul>
      <li>Leer y analizar textos académicos con rigor.</li>
      <li>Redactar informes, artículos o ensayos basados en evidencia.</li>
      <li>Resumir y presentar información de manera clara y estructurada en exámenes o trabajos.</li>
    </ul>
    <p><b>Ejemplo en examen:</b> “Un discurso científico debe ser claro, objetivo y basado en evidencia; una investigación documental recopila información de fuentes confiables para analizar un tema sin hacer experimentos directos.”</p>
  </div>

</section>
`},
],

lengua: [
// dia 1
{tema:"Organización textual",
exp:`
<section>
  <p>Hoy nos enfocamos en cómo se organiza un texto y cómo jerarquizar ideas para que tenga sentido. Esto es la base para leer, comprender y escribir correctamente.</p>

  <div>
    <h3>🔹 Estructura textual</h3>
    <p>La estructura textual indica cómo se ordenan las partes de un texto para que sea claro y fácil de entender. Todos los textos bien escritos tienen tres partes principales:</p>
    <ul>
      <li><b>Introducción:</b> Presenta el tema, explica de qué se va a hablar y prepara al lector para la información que seguirá.</li>
      <li><b>Desarrollo:</b> Contiene la información principal y secundaria. Aquí se explican ideas, se dan ejemplos y se clarifican conceptos.</li>
      <li><b>Conclusión:</b> Resume las ideas principales, cierra el tema y puede ofrecer reflexiones, recomendaciones o soluciones.</li>
    </ul>
    <p><b>Ejemplo:</b> Ensayo sobre hábitos de estudio:</p>
    <ul>
      <li>Introducción: Explica por qué es importante estudiar todos los días.</li>
      <li>Desarrollo: Describe métodos como resúmenes, subrayados, ejercicios prácticos.</li>
      <li>Conclusión: Recomienda establecer una rutina diaria de estudio y reflexiona sobre sus beneficios.</li>
    </ul>
  </div>

  <div>
    <h3>🔹 Jerarquización de ideas</h3>
    <p>Jerarquizar ideas significa organizar la información según su importancia. Esto ayuda a que el lector entienda cuáles son los conceptos más importantes y cuáles son ejemplos o detalles secundarios.</p>
    <ul>
      <li><b>Idea principal:</b> Es el mensaje central que el autor quiere comunicar.</li>
      <li><b>Ideas secundarias:</b> Son detalles, ejemplos o explicaciones que apoyan la idea principal.</li>
      <li><b>Conectores:</b> Palabras que unen las ideas y muestran la relación entre ellas: porque, además, por lo tanto, sin embargo.</li>
    </ul>
    <p><b>Ejemplo:</b> Texto sobre alimentación saludable:</p>
    <ul>
      <li>Idea principal: Comer frutas y verduras diariamente mejora la salud.</li>
      <li>Idea secundaria: Las frutas aportan vitaminas y minerales.</li>
      <li>Idea secundaria: Las verduras contienen fibra que ayuda a la digestión.</li>
      <li>Conector: Además, una buena alimentación previene enfermedades.</li>
    </ul>
  </div>

</section>
`},
// dia 2
{tema:"Organización textual",
exp:`
<section>
  <p>Hoy profundizamos en los tipos de textos y cómo analizarlos para identificar ideas principales y secundarias. Esto es esencial para tu examen.</p>

  <div>
    <h3>🔹 Tipología textual</h3>
    <p>La tipología textual clasifica los textos según su propósito y estructura. Saber identificar el tipo de texto te ayuda a comprenderlo mejor y responder preguntas de examen.</p>
    <ul>
      <li><b>Texto narrativo:</b> Cuenta hechos o historias, incluye personajes, tiempo y lugar. Ej: cuentos, novelas.</li>
      <li><b>Texto descriptivo:</b> Explica cómo es algo, detallando características. Ej: descripciones de lugares, personas o objetos.</li>
      <li><b>Texto expositivo:</b> Expone información de forma objetiva y clara. Ej: artículos científicos, enciclopedias.</li>
      <li><b>Texto argumentativo:</b> Defiende una opinión usando razones y ejemplos. Ej: ensayos, editoriales.</li>
      <li><b>Texto instructivo:</b> Explica cómo hacer algo paso a paso. Ej: recetas, manuales, instrucciones.</li>
    </ul>
  </div>

  <div>
    <h3>🔹 Análisis práctico de un texto</h3>
    <p>Veamos cómo identificar ideas principales y secundarias:</p>
    <p>Texto: “Para mejorar la salud, es importante hacer ejercicio diario. Caminar, correr o nadar ayuda al corazón y los pulmones. Además, reduce el estrés.”</p>
    <ul>
      <li>Tipo de texto: Expositivo-argumentativo</li>
      <li>Idea principal: Hacer ejercicio diario mejora la salud.</li>
      <li>Ideas secundarias: Caminar, correr y nadar benefician al corazón y los pulmones; reduce el estrés.</li>
      <li>Conectores: Además (indica información adicional que refuerza la idea principal)</li>
    </ul>
    <p>Este tipo de análisis te ayuda a resumir y comprender cualquier texto rápidamente.</p>
  </div>

</section>
`},
// dia 3
{tema:"Contenido discursivo",
exp:`
<section>
  <p>Hoy nos enfocamos en interpretar las ideas dentro de un texto. Esto significa comprender qué quiere decir el autor más allá de las palabras literales.</p>

  <div>
    <h3>🔹 Interpretación de ideas</h3>
    <p>Interpretar un texto es entender el mensaje que comunica, identificar ideas principales y secundarias, y relacionarlas entre sí.</p>
    <ul>
      <li>Identificar la idea principal: el mensaje central del texto.</li>
      <li>Identificar ideas secundarias: explicaciones, ejemplos o detalles que apoyan la idea principal.</li>
      <li>Relacionar las ideas: ver cómo se conectan y construyen un sentido global.</li>
      <li>Contextualizar: usar el contexto del texto para entender palabras o frases ambiguas.</li>
    </ul>
    <p><b>Ejemplo:</b> Texto: “Beber agua regularmente mantiene la piel saludable y ayuda a los riñones a filtrar toxinas. Además, favorece la digestión y previene la deshidratación.”</p>
    <ul>
      <li>Idea principal: Beber agua regularmente mejora la salud.</li>
      <li>Ideas secundarias: Mantiene la piel, ayuda a los riñones, favorece la digestión y previene la deshidratación.</li>
      <li>Conector: Además (añade información secundaria que refuerza la idea principal)</li>
    </ul>
    <p>Interpretar correctamente permite resumir y comprender cualquier texto de manera rápida y precisa.</p>
  </div>

</section>
`},
// dia 4
{tema:"Contenido discursivo",
exp:`
<section>
  <p>Hoy profundizamos en cómo hacer inferencias y entender la intención comunicativa del autor, dos habilidades que son clave en los exámenes de lectura y comprensión.</p>

  <div>
    <h3>🔹 Inferencias de ideas</h3>
    <p>Hacer inferencias significa deducir información que no está explícita en el texto. Se basa en pistas, contexto y conocimientos previos.</p>
    <ul>
      <li>Buscar pistas en el texto: palabras, frases o hechos que sugieran algo.</li>
      <li>Relacionar ideas: conectar información explícita con tus conocimientos.</li>
      <li>No asumir información que no tenga respaldo en el texto.</li>
    </ul>
    <p><b>Ejemplo:</b> Texto: “Juan llegó empapado y con botas llenas de barro. Sus pantalones también estaban mojados.”</p>
    <ul>
      <li>Inferencia: Probablemente estaba lloviendo o caminó por un lugar húmedo.</li>
      <li>No se dice explícitamente “llovía”, pero podemos deducirlo a partir de la descripción.</li>
    </ul>
  </div>

  <div>
    <h3>🔹 Intención comunicativa</h3>
    <p>La intención comunicativa es el propósito que tiene el autor al escribir un texto. Conocerla ayuda a entender por qué se elige cierta información o estilo.</p>
    <ul>
      <li>Informar: presentar datos u opiniones objetivas. Ej: artículos de divulgación científica.</li>
      <li>Persuadir: convencer al lector de algo. Ej: anuncios, editoriales, campañas.</li>
      <li>Entretener: generar diversión o interés. Ej: cuentos, novelas, blogs.</li>
      <li>Instruir: enseñar o guiar sobre un procedimiento. Ej: manuales, recetas, tutoriales.</li>
    </ul>
    <p><b>Ejemplo:</b> Texto: “Recuerda lavarte las manos antes de comer para evitar enfermedades. El lavado correcto reduce bacterias y virus.”</p>
    <ul>
      <li>Intención comunicativa: Instruir, enseñar un hábito de higiene.</li>
    </ul>
  </div>

</section>
`},
// dia 5
{tema:"Corrección ortográfica y gramatical",
exp:`
<section>
  <h2>Ortografía</h2>
  <p>La ortografía es el conjunto de reglas que nos indican cómo escribir correctamente las palabras. Es fundamental para que tu texto sea claro y profesional, y también es muy evaluado en los exámenes.</p>

  <div>
    <h3>🔹 Reglas básicas de ortografía</h3>
    <p>Al escribir debemos prestar atención a varios aspectos:</p>
    <ul>
      <li><b>Uso correcto de letras:</b> diferenciar b/v, c/s/z, g/j según las reglas.</li>
      <li><b>Uso de tildes:</b> identificar palabras agudas, graves y esdrújulas para colocar la tilde correctamente.
        <ul>
          <li>Agudas: se acentúan si terminan en n, s o vocal. Ej: canción, sofá.</li>
          <li>Graves: se acentúan si NO terminan en n, s o vocal. Ej: árbol, difícil.</li>
          <li>Esdrújulas: siempre llevan tilde. Ej: pájaro, música.</li>
        </ul>
      </li>
      <li><b>Uso de mayúsculas:</b> al inicio de oración, nombres propios, títulos y siglas.</li>
      <li><b>Separación de palabras:</b> evitar errores de juntarlas o separarlas incorrectamente. Ej: “a veces” no es “aveces”.</li>
      <li><b>Puntuación:</b> uso de comas, puntos, puntos y comas, signos de interrogación y exclamación.</li>
    </ul>
    <p><b>Ejemplo práctico:</b></p>
    <p>Texto con errores: “el pajaro cayo del arbol y no sabia volar”</p>
    <ul>
      <li>Corrección: “El pájaro cayó del árbol y no sabía volar.”</li>
      <li>Errores corregidos: mayúscula inicial, tilde en pájaro, cayó y sabía, tilde en árbol.</li>
    </ul>
  </div>

  <div>
    <h3>🔹 Estrategias para mejorar la ortografía</h3>
    <ul>
      <li>Leer con atención y lentamente para identificar errores.</li>
      <li>Usar correctores ortográficos, pero no depender completamente de ellos.</li>
      <li>Aprender reglas básicas y excepciones más comunes.</li>
      <li>Practicar escribiendo y revisando tus textos varias veces.</li>
    </ul>
    <p><b>Ejemplo de aplicación:</b> Escribe un párrafo sobre tu día y luego revisa:</p>
    <ul>
      <li>Busca tildes que falten.</li>
      <li>Revisa palabras que se escriben con b o v, c, s o z.</li>
      <li>Corrige mayúsculas y puntuación.</li>
    </ul>
  </div>

</section>
`},
// dia 6
{tema:"Corrección ortográfica y gramatical",
exp:`
<section>

  <h2> Corrección gramatical </h2>
  <p>La corrección gramatical se refiere a escribir frases y oraciones respetando las reglas del idioma. Esto asegura que tus textos sean claros, coherentes y correctos. No basta con que las palabras estén bien escritas; la estructura de la oración también debe ser correcta.</p>

  <div>
    <h3>🔹 Concordancia</h3>
    <p>La concordancia es la relación correcta entre los elementos de una oración:</p>
    <ul>
      <li><b>Concordancia de género:</b> Los adjetivos y pronombres deben coincidir con el sustantivo. Ej: “La <b>casa grande</b>”, no “La casa <b>grandeo</b>”.</li>
      <li><b>Concordancia de número:</b> Singular con singular, plural con plural. Ej: “Los <b>perros negros</b> corren rápido”, no “Los perros negro corre rápido”.</li>
      <li><b>Concordancia verbal:</b> El verbo debe coincidir con el sujeto en persona y número. Ej: “Él <b>come</b> manzanas”, no “Él comen manzanas”.</li>
    </ul>
  </div>

  <div>
    <h3>🔹 Uso correcto de tiempos verbales</h3>
    <p>Los tiempos verbales indican cuándo ocurre la acción (pasado, presente, futuro) y deben mantenerse consistentes en la oración o párrafo:</p>
    <ul>
      <li>Presente: “Hoy <b>estudio</b> matemáticas”.</li>
      <li>Pasado: “Ayer <b>estudié</b> matemáticas”.</li>
      <li>Futuro: “Mañana <b>estudiaré</b> matemáticas”.</li>
      <li><b>Evitar cambios innecesarios de tiempo:</b> Incorrecto: “Ayer <b>estudié</b> y hoy <b>estudio</b> mañana”.</li>
    </ul>
  </div>

  <div>
    <h3>🔹 Estructura correcta de la oración</h3>
    <p>Una oración correcta debe tener sujeto, verbo y, cuando sea necesario, complemento. Además, debe respetar el orden lógico para que tenga sentido:</p>
    <ul>
      <li>Oración simple: “María <b>lee</b> un libro.”</li>
      <li>Oración compuesta: “María <b>lee</b> un libro y <b>escribe</b> sus notas.”</li>
      <li>Evitar frases incompletas o desordenadas: Incorrecto: “Un libro María lee.”</li>
    </ul>
  </div>

  <div>
    <h3>🔹 Uso de pronombres y preposiciones</h3>
    <p>Los pronombres y preposiciones deben usarse correctamente para que la oración tenga sentido:</p>
    <ul>
      <li>Pronombres: “Ella dijo que <b>ella</b> vendría.” Correcto. Evitar: “Ella dijo que <b>ella</b> vendríamos.”</li>
      <li>Preposiciones: “Voy <b>a</b> la tienda.” Correcto. Evitar: “Voy <b>en</b> la tienda.”</li>
    </ul>
  </div>

  <div>
    <h3>🔹 Ejemplo práctico de corrección gramatical</h3>
    <p>Texto con errores: “Los niño corre rápido y no saben donde está su pelota”</p>
    <ul>
      <li>Corrección: “Los <b>niños</b> <b>corren</b> rápido y no saben <b>dónde</b> está su pelota.”</li>
      <li>Errores corregidos: plural en “niños” y “corren”, tilde en “dónde”.</li>
    </ul>
    <p>Aplicando estas reglas, tus textos serán claros, coherentes y evaluables positivamente.</p>
  </div>

</section>
`},
// dia 7
{tema:"Cohesión y coherencia",
exp:`
<section>
  <h2>Identificación y ordenación de ideas</h2>
  <p>La cohesión y la coherencia son esenciales para que un texto tenga sentido y sea fácil de entender.  
  - <b>Cohesión:</b> cómo se conectan las ideas dentro del texto usando palabras, frases o signos.  
  - <b>Coherencia:</b> que las ideas estén organizadas de manera lógica y sigan un orden que tenga sentido.</p>

  <div>
    <h3>🔹 Identificación de ideas</h3>
    <p>Antes de ordenar un texto, debemos identificar correctamente sus ideas principales y secundarias:</p>
    <ul>
      <li><b>Idea principal:</b> el mensaje central del texto, lo que el autor quiere comunicar.</li>
      <li><b>Ideas secundarias:</b> detalles, ejemplos o explicaciones que apoyan la idea principal.</li>
      <li><b>Pistas textuales:</b> palabras clave, conectores y repeticiones que nos indican la importancia de una idea.</li>
    </ul>
    <p><b>Ejemplo:</b> Texto: “El reciclaje ayuda a reducir la contaminación. Separar plástico, papel y vidrio permite un mejor manejo de los residuos. Además, reciclar ahorra energía y protege la naturaleza.”</p>
    <ul>
      <li>Idea principal: El reciclaje ayuda a reducir la contaminación.</li>
      <li>Ideas secundarias: Separar residuos, ahorrar energía, proteger la naturaleza.</li>
    </ul>
  </div>

  <div>
    <h3>🔹 Ordenación de ideas</h3>
    <p>Una vez identificadas las ideas, debemos ordenarlas para que el texto sea lógico y coherente:</p>
    <ul>
      <li>Comenzar con la idea principal.</li>
      <li>Seguir con ideas secundarias que expliquen o ejemplifiquen la principal.</li>
      <li>Usar conectores para unir las ideas y mostrar relaciones (además, por lo tanto, en consecuencia, sin embargo).</li>
      <li>Cerrar con una conclusión o síntesis que refuerce la idea central.</li>
    </ul>
    <p><b>Ejemplo de ordenación:</b></p>
    <p>Texto original desordenado: “Ahorrar energía protege la naturaleza. Separar plástico, papel y vidrio permite un mejor manejo de los residuos. El reciclaje ayuda a reducir la contaminación.”</p>
    <p>Texto corregido y coherente: “El reciclaje ayuda a reducir la contaminación. Separar plástico, papel y vidrio permite un mejor manejo de los residuos. Además, reciclar ahorra energía y protege la naturaleza.”</p>
  </div>

  <div>
    <h3>🔹 Conectores y cohesión</h3>
    <p>Los conectores ayudan a que las ideas se unan de manera natural y fluida:</p>
    <ul>
      <li>Para añadir información: además, asimismo, también.</li>
      <li>Para causa o consecuencia: porque, por lo tanto, en consecuencia.</li>
      <li>Para contraste: pero, sin embargo, aunque.</li>
      <li>Para ejemplificar: por ejemplo, como muestra, tal como.</li>
    </ul>
    <p><b>Ejemplo:</b> “El reciclaje reduce la contaminación. <b>Además</b>, separar los residuos ahorra energía. <b>Por lo tanto</b>, ayuda a proteger el planeta.”</p>
  </div>

</section>
`},
// dia 8
{tema:"Cohesión y coherencia",
exp:`
<section>

  <h2> Conectores discursivos</h2>
  <p>Los conectores discursivos son palabras o frases que unen ideas dentro de un texto y muestran la relación entre ellas. Usarlos correctamente garantiza que el texto sea fluido, coherente y fácil de entender.</p>

  <div>
    <h3>🔹 Tipos de conectores</h3>
    <p>Existen varios tipos según la relación que establecen entre las ideas:</p>
    <ul>
      <li><b>Adición:</b> agregan información. Ej: además, asimismo, también, incluso.</li>
      <li><b>Causa o motivo:</b> explican por qué sucede algo. Ej: porque, debido a, ya que, puesto que.</li>
      <li><b>Consecuencia o efecto:</b> muestran resultados. Ej: por lo tanto, en consecuencia, así que, de modo que.</li>
      <li><b>Contraste u oposición:</b> muestran ideas contrarias o excepciones. Ej: pero, sin embargo, aunque, no obstante.</li>
      <li><b>Tiempo o secuencia:</b> indican orden temporal o pasos. Ej: antes, después, luego, finalmente.</li>
      <li><b>Ejemplificación:</b> dan ejemplos para aclarar o reforzar una idea. Ej: por ejemplo, tal como, como muestra, específicamente.</li>
      <li><b>Resumen o conclusión:</b> sintetizan o cierran ideas. Ej: en resumen, en conclusión, para concluir, por último.</li>
    </ul>
  </div>

  <div>
    <h3>🔹 Cómo usar conectores discursivos</h3>
    <ul>
      <li>Antes de elegir un conector, identifica la relación que quieres mostrar entre las ideas.</li>
      <li>No abuses de un mismo conector; varía para que el texto sea más fluido.</li>
      <li>Usa los conectores al inicio de la oración o frase para que la relación sea clara.</li>
      <li>Combínalos con signos de puntuación cuando sea necesario, especialmente comas o puntos y comas.</li>
    </ul>
    <p><b>Ejemplo:</b> “El reciclaje ayuda a reducir la contaminación. <b>Además</b>, separar los residuos ahorra energía. <b>Por lo tanto</b>, protege el planeta. <b>Sin embargo</b>, muchas personas aún no reciclan.”</p>
  </div>

  <div>
    <h3>🔹 Beneficios de usar conectores correctamente</h3>
    <ul>
      <li>El texto es más fácil de leer y comprender.</li>
      <li>Las ideas se perciben relacionadas y coherentes.</li>
      <li>Mejora la calidad de tus escritos en exámenes y trabajos.</li>
    </ul>
  </div>

</section>
`},
]

};