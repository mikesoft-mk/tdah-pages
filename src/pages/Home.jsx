import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Img4 from "../images/img4.jpg";
import Img5 from "../images/img5.jpg";
import Img6 from "../images/img6.jpg";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div
        className="h-screen bg-cover bg-center relative"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1551847677-dc82d764e1eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Entendiendo el TDAH
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Juntos podemos crear un mundo más comprensivo y solidario para las
              personas con TDAH
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link
                to="/informacion"
                className="inline-flex items-center bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition-colors"
              >
                Aprende más
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mensaje de reflexión */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">
              Una Nueva Perspectiva
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              El TDAH no es una limitación, es una forma diferente de percibir y
              experimentar el mundo. Cada persona con TDAH tiene talentos únicos
              y perspectivas valiosas que enriquecen nuestra sociedad. Es
              momento de cambiar la narrativa y celebrar la neurodiversidad.
            </p>
          </div>
        </div>
      </section>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 3 * 0.1 }}
          className="bg-white rounded-lg shadow-lg p-8"
        >
          <div>
            <div className="cont-img">
              <img src={Img4} alt="alumno con tdah" className="dim-image " />
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 3 * 0.1 }}
          className="bg-white rounded-lg shadow-lg p-8"
        >
          <div>
            <div className="cont-img">
              <img src={Img5} alt="alumno con tdah" className="dim-image " />
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 3 * 0.1 }}
          className="bg-white rounded-lg shadow-lg p-8"
        >
          <div>
            <div className="cont-img">
              <img src={Img6} alt="alumno con tdah" className="dim-image " />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
