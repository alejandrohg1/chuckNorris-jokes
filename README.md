# chuckNorris-jokes
 Prueba tecnica para compañia polpo
 
Para implementar una solucion a la prueba tecnica no utilice un react-boilerplate debido a que en si no era tan grande el tamaño de la aplicacion , asi que lo cree desde 0 usando react. Dentro de la solucion no hago uso de redux ni de otra libreria que maneje estado debido a que como mencione anteriormente no lo veia necesario. Para las animaciones hice uso de la libreria framer motion y para librerias de estilos css use tailwind 
 
Para hacer fetch de los datos lo hago con ayuda de un custom hook que cree, el cual agarra los chistes del API y los mapea a un nuevo objeto el cual tienen id,title,value,color,categories.Posteriormente los mando a una lista de chiste los cuales posteriormente van a ser visualizados en un slider

Para las categorias hice un sidebar el cual al seleccionar la categoria que deseas conocer el siguiente chiste sera especificamente de la categoria seleccionada

use vite que es una herramienta de compilación que tiene como objetivo proporcionar una experiencia de desarrollo más rápida y ágil para proyectos web modernos.

para instalar la apliacion usar el comando

npm i 

y para correr la aplicacion

npm run dev

