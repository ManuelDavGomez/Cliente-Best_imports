import { useState } from "react";

export default function QuantitySelector({
  productName,
  productPrice,
  whatsappNumber,
}) {
  const [quantity, setQuantity] = useState(1);

  const handleWhatsAppLink = () => {
    // Calcular el precio total
    const totalPrice = productPrice * quantity;

    // Crear el mensaje
    const message = `Hola, estoy interesado en comprar el siguiente producto:\n\n- Nombre: ${productName}\n- Cantidad: ${quantity}\n- Precio unitario: $${productPrice.toLocaleString()}\n- Total: $${totalPrice.toLocaleString()}\n\nPor favor, contáctame para saber mas detalles de mi compra`;

    // Codificar el mensaje correctamente
    const encodedMessage = encodeURIComponent(message);

    // Crear el enlace de WhatsApp
    const whatsappLink = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMessage}`;

    // Imprimir el enlace en consola para depuración
    console.log("Enlace de WhatsApp generado:", whatsappLink);

    // Verificar si el enlace es correcto
    window.open(whatsappLink, "_blank");
  };

  return (
    <div>
      <div className="quantity-selector" style={{ marginTop: "20px" }}>
        <label htmlFor="quantity" style={{ fontWeight: "bold" }}>
          Cantidad:
        </label>
        <input
          id="quantity"
          type="number"
          value={quantity}
          min="1"
          onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
          style={{
            width: "100px",
            marginLeft: "10px",
            textAlign: "center",
            border: "1px solid #ccc",
          }}
        />
      </div>

      <button
        onClick={handleWhatsAppLink}
        style={{
          display: "inline-block",
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#25D366",
          color: "white",
          textDecoration: "none",
          fontWeight: "bold",
          borderRadius: "5px",
          textAlign: "center",
        }}
      >
        Comprar por WhatsApp
      </button>
    </div>
  );
}
