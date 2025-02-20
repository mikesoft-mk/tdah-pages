import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "María González",
    role: "Madre de un niño con TDAH",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    content:
      "Esta página ha sido una fuente invaluable de información y apoyo. Los recursos y consejos me han ayudado a entender mejor a mi hijo y a crear un ambiente más propicio para su desarrollo.",
  },
  {
    name: "Carlos Rodríguez",
    role: "Adulto con TDAH",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    content:
      "Por fin encontré un lugar donde me siento comprendido. La información presentada es clara y práctica, y me ha ayudado a implementar estrategias efectivas en mi vida diaria.",
  },
  {
    name: "Ana Martínez",
    role: "Profesora",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    content:
      "Como educadora, esta página me ha proporcionado herramientas valiosas para apoyar mejor a mis estudiantes con TDAH. La información es actual y los consejos son muy aplicables en el aula.",
  },
];

export default function Reviews() {
  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-16 text-gray-800">
          Lo que dicen nuestros usuarios
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <div className="flex items-center mb-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-bold text-lg text-gray-800">
                    {review.name}
                  </h3>
                  <p className="text-gray-600">{review.role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-600 leading-relaxed">{review.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
