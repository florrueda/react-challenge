# Alkemy React Challenge

React Challenge of the Alkemy Skill Up. A Single Page Application in which the users 
can view all the movies available, consuming an external API, and showing the movie details 
if the user want to know more.
https://alkemy-reactchallenge-movies.netlify.app/listado

## Instalation
cd react-challenge

git clone https://github.com/florrueda/react-challenge.git

npm install

npm start

##Objetivos 📋
Utilizando la API The Movies DB, deberás:

● Crear una APP de React con el paquete create-react-app
● Manejar componentes stateless y stateful (FC) poniendo el foco en
○ JSX
○ Estados
○ Event handlers
○ Props / Keys
○ Renderizado condicional
● Realizar peticiones asincrónicas a distintas API
● Lograr la persistencia de información (token, favoritos, etc) en almacenamiento
local
● Utilizar hooks de estado, efecto y otros para manejo de componentes
● Implementar la librería de ruteo React Router Dom
● Implementar una librería de CSS (Bootstrap, Tailwind o similar).


##Requerimientos funcionales 🔧
La aplicación de React tendrá:

● Login - Usará el mismo endpoint de Alkemy para obtener el token
● Listado de películas - traerá las películas más recientes en cartelera con toda su
información
● Detalle de película - mostrará la información particular de cada película
mostrada en el listado, aquí se podrá ampliar más en detalle cada película
● Buscador - permitirá buscar películas por una palabra clave y mostrará los
resultados que coincidan
● Favoritos - cada película tendrá la opción de ser agregada a esta sección. Solo
las películas elegidas por el usuario como "Favorita" podrán estar aquí. Se deberá
validar que haya por lo menos una película de categoría "FAMILIA". También que
se puedan quitar / eliminar películas de las sección Favoritos.
● Barra de navegación - Debe existir un indicador de la cantidad de películas en
favoritos. Y en el detalle, se especificará si esa película ya está en Favoritos y
deberá haber un acumulado de Rating de las películas en "Favoritos".
