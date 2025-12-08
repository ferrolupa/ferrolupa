"use client";

import { useState } from "react";

export default function ContactoForm() {
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      setSuccess(true);
      e.target.reset();
      setTimeout(() => setSuccess(false), 4000);
    }
  };

  return (
    <div>
      <h4 className="font-semibold mb-4 text-base tracking-wide">
        Envíanos tu mensaje
      </h4>

{success && (
  <div className="mb-4 p-3 rounded-md bg-ferroverde/15 border border-ferroverde text-white text-sm transition-opacity animate-fadeIn">
    ¡Mensaje enviado! Gracias por contactarte 🚂💚
  </div>
)}


      <form onSubmit={handleSubmit} className="space-y-2 text-sm">
        <input
          type="hidden"
          name="access_key"
          value="9103451d-862d-4782-9a2f-91490d36c6b5"
        />

        <input type="hidden" name="subject" value="Nuevo mensaje desde Ferrolupa" />

        <input
          name="nombre"
          type="text"
          placeholder="Tu nombre"
          className="p-2 rounded w-full text-black text-sm focus:outline-none focus:ring-2 focus:ring-ferroverde/50"
          required
        />

        <input
          name="email"
          type="email"
          placeholder="Tu correo electrónico"
          className="p-2 rounded w-full text-black text-sm focus:outline-none focus:ring-2 focus:ring-ferroverde/50"
          required
        />

        <textarea
          name="mensaje"
          placeholder="Tu mensaje"
          className="p-2 rounded w-full h-20 resize-none text-black text-sm focus:outline-none focus:ring-2 focus:ring-ferroverde/50"
          required
        />

        <button
          type="submit"
          className="bg-ferroverde hover:bg-ferroverde/90 text-white w-full py-2 text-sm rounded transition"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}
