import { Star } from "lucide-react";
import React from "react";

function Testimonials() {
  return (
    <>
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-emerald-900"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fillRule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fillOpacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>

        <div className="relative container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center mb-8">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-8 h-8 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <span className="ml-4 text-2xl font-bold text-white">4.9/5</span>
            </div>

            <h3 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
              Trusted by
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                {" "}
                10,000+
              </span>{" "}
              users
            </h3>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto mb-16 font-medium">
              Join thousands of students and professionals who rely on our PDF
              tools daily to boost their productivity.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  text: "This tool saved me hours of work. The PDF to Word conversion is incredibly accurate and preserves formatting perfectly!",
                  name: "Sarah Chen",
                  role: "Graduate Student",
                  gradient: "from-emerald-500 to-cyan-500",
                },
                {
                  text: "Perfect for our office workflow. The merge and split features are exactly what we needed. Fast and reliable every time.",
                  name: "Michael Rodriguez",
                  role: "Project Manager",
                  gradient: "from-orange-500 to-pink-500",
                },
                {
                  text: "Fast, reliable, and secure. I use it daily for converting documents for my clients. The quality is outstanding.",
                  name: "Emily Johnson",
                  role: "Freelance Designer",
                  gradient: "from-purple-500 to-indigo-500",
                },
              ].map((testimonial, index) => (
                <div key={index} className="group">
                  <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                    <p className="text-white mb-6 italic text-lg leading-relaxed">
                      "{testimonial.text}"
                    </p>
                    <div className="flex items-center">
                      <div
                        className={`w-12 h-12 bg-gradient-to-r ${testimonial.gradient} rounded-2xl flex items-center justify-center mr-4`}
                      >
                        <span className="text-white font-bold text-lg">
                          {testimonial.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                      </div>
                      <div>
                        <div className="font-bold text-white text-lg">
                          {testimonial.name}
                        </div>
                        <div className="text-emerald-200 text-sm">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonials;
