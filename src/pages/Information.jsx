import { motion } from "framer-motion";
import { Brain, Target, Heart, Users } from "lucide-react";
import Img1 from "../images/img1.jpg";
import Img2 from "../images/img2.jpg";
import Img3 from "../images/img3.jpg";
import Img4 from "../images/img4.jpg";

export default function Information() {
  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <div className="container mx-auto px-5 py-16">
        <h1 className="text-4xl font-bold text-center mb-16 text-gray-800">
          Comprendiendo el TDAH
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-8 ">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 * 0.1 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <div className="flex items-center mb-4 ">
              <Brain className="h-8 w-8 text-purple-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-800">
                ¿Qué es el TDAH?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 pl-10">
              <p className="text-gray-600 leading-relaxed text-justify">
                El TDAH (Trastorno por Déficit de Hiperactividad) es un
                trastorno neurológico que se caracteriza por síntomas de
                desatención, hiperactividad y comportamiento impulsivo, es una
                afección crónica que afecta a millones de niños y a menudo
                continúa en la edad adulta. Los niños con TDAH también pueden
                tener dificultades con la baja autoestima, las relaciones
                problemáticas y el bajo rendimiento escolar. <br />
                Los síntomas a veces disminuyen con la edad. Sin embargo,
                algunas personas nunca superan por completo sus síntomas de
                TDAH. Pero pueden aprender estrategias para tener éxito.Aunque
                el tratamiento no cura el TDAH, puede ayudar mucho con los
                síntomas. El tratamiento comúnmente involucra medicamentos e
                intervenciones conductuales. El diagnóstico y tratamiento
                tempranos pueden hacer una gran diferencia en el resultado.
              </p>
              <div className="cont-img">
                <img src={Img1} alt="alumno con tdah" className="dim-image " />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 8 * 0.1 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <div className="flex items-center mb-4 ">
              <Target className="h-8 w-8 text-purple-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-800">Causas</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 pl-10">
              <p className="text-gray-600 leading-relaxed text-justify">
                Numerosos estudios confirman que <b>no hay una causa exacta </b>
                relacionada con el TDAH y sus síntomas son varios los factores
                que pueden influir en la existencia del TDAH en la persona.{" "}
                <br /> Los factores a los que nos referimos son dos: factores
                genéticos (un 80% de los casos de TDAH se hereda de un
                progenitor) y/o factores cerebrales. Por lo que se desmiente que
                la influencia de la familia o la escuela sean causantes de este
                trastorno. Esto no quiere decir que no interfieran en su vida
                positiva o negativamente, solo confirma que el entorno de cada
                uno no provoca TDAH.Respecto a los factores cerebrales se han
                detectado alteraciones en cinco áreas del cerebro <br /> Si un
                niño tiene TDAH probablemente el 76% se explique a causa
                genética (Soutullo y Díez, 2007) El TDAH no es un trastorno
                social, no se relaciona únicamente con el entorno del niño o
                adulto. Por otro lado, las alteraciones que sufre en el cerebro
                una persona con este trastorno son estructuras neurológicas
                profundas que tienen múltiples funciones. Por ello el TDAH es
                “un trastorno tan complejo que afecta a distintos aspectos del
                comportamiento”, afirma Òscar Vilarroya, investigador de la
                Fundación IMIM y de la Universidad Autónoma Pero los estudiosos
                no han conseguidor encontrar el motivo por el que las personas
                con TDAH sufren estas alteraciones neurológicas. Algunos autores
                afirman que es un retraso en la maduración del retraso, pero aun
                así el motivo de ese retraso también se desconoce.
              </p>
              <div className="cont-img">
                <img src={Img2} alt="alumno con tdah" className="dim-image " />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 12 * 0.1 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <div className="flex items-center mb-4 ">
              <Heart className="h-8 w-8 text-purple-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-800">
                Características que pueden tener los niños con TDAH
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 pl-10">
              <p className="text-gray-600 leading-relaxed text-justify">
                el Trastorno por Déficit de Atención e Hiperactividad cuenta con
                muchas características que se pueden dar o no. Por tanto, el
                listado de características es orientativo y siempre hay que
                contar con un profesional que te asesore.
                <ul>
                  <br /> <b>1.</b> Los profesores dicen que es muy distraído,
                  que se le olvidan las cosas a menudo.
                  <br /> <b>2.</b> Las personas del entorno dicen que no les
                  presta atención, especialmente si hay algo muy atractivo cerca
                  como la televisión o la tablet. <br /> <b>3.</b> Admite que
                  administra mal el tiempo.
                  <br />
                  <b>4.</b> No tiene interés en concentrarse durante un periodo
                  de tiempo y fijarse en los detalles de las cosas. <br />{" "}
                  <b>5.</b> Deje las cosas que está haciendo sin terminar.
                  <br /> <b>6.</b> No controla su impulsividad, aún sabiendo que
                  puede tener consecuencias importantes.
                  <br /> <b>7.</b> No sabe organizarse para cumplir con los
                  deberes, con las entregas de los trabajos… <br /> <b>8.</b> Es
                  muy nervioso/a, muy inquieto/a. <br /> <b>9.</b> No puede
                  controlar sus emociones y tiene dificultades para manejar las
                  emociones incómodas. Ante cualquiera de estas características
                  puedes consultar a un profesional para que él te explique y
                  valore la situación.
                </ul>
              </p>
              <div className="cont-img">
                <img src={Img3} alt="alumno con tdah" className="dim-image " />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 24 * 0.1 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <div className="flex items-center mb-4 ">
              <Users className="h-8 w-8 text-purple-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-800">Cómo Ayudar</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 pl-10">
              <p className="text-gray-600 leading-relaxed text-justify">
                <b>1. Reducir las distracciones:</b> Los niños con TDAH se
                distraen con facilidad con sonidos o con la actividad a su
                alrededor. Busque un lugar tranquilo y tiempo para que lean en
                la casa. En el aula siéntelos lejos de ventanas o puertas para
                que no escuchen ruidos del exterior. <br />{" "}
                <b>2. Fijar un limite de tiempo:</b> Los niños con TDAH también
                suelen tener dificultad para administrar su tiempo. Dejarlos que
                determinen cuánto tiempo necesitan para leer puede reducir el
                estrés y facilitar que permanezcan concentrados.
                <br /> <b>3. Incluir descansos:</b> Interrumpir la lectura
                durante algunos minutos para moverse o hacer ejercicios de
                respiración puede parecer una mala idea en niños con problemas
                de atención. No obstante, los llamados “descansos mentales”
                pueden ayudar a algunos niños con TDAH a recuperar la
                concentración y continuar con la lectura.
                <br /> <b>4. Involucrar varios sentidos:</b> El uso de varios
                sentidos para aprender a leer puede facilitar que los niños con
                TDAH pongan atención. Existen muchas maneras de lograrlo. Por
                ejemplo, pueden dar una palmada cada vez que pronuncien una
                sílaba en voz alta.
                <br />
                <b> 5. Ser flexible: </b> Algunos niños con TDAH se concentran
                mejor cuando escuchan música. Otros necesitan pararse o moverse
                cuando están leyendo o cuando usted les lee. Déjelos que lo
                hagan de la manera que les funcione mejor.
              </p>
              <div className="cont-img">
                <img src={Img4} alt="alumno con tdah" className="dim-image " />
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Estrategias de Apoyo
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 border rounded-lg">
              <h3 className="font-bold text-lg mb-2">En el Hogar</h3>
              <ul className="list-disc list-inside text-gray-600">
                <li>Establecer rutinas claras</li>
                <li>Crear espacios organizados</li>
                <li>Usar recordatorios visuales</li>
                <li>Mantener un ambiente tranquilo</li>
              </ul>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-bold text-lg mb-2">En el Trabajo/Estudio</h3>
              <ul className="list-disc list-inside text-gray-600">
                <li>Dividir tareas grandes en pequeñas</li>
                <li>Usar herramientas de organización</li>
                <li>Tomar descansos regulares</li>
                <li>Minimizar distracciones</li>
              </ul>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-bold text-lg mb-2">En las Relaciones</h3>
              <ul className="list-disc list-inside text-gray-600">
                <li>Practicar la escucha activa</li>
                <li>Ser paciente y comprensivo</li>
                <li>Celebrar los logros</li>
                <li>Ofrecer apoyo constructivo</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
