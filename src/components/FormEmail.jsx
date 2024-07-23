import { useState } from "react";

const FormEmail = () => {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState(
    "Lago Ladoga 275, Col. Modelo Pensil, Del. Miguel Hidalgo, C.P. 11450, CDMX, México."
  );
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("+52 (55) 5510.0040 ext. 114");
  const [phone2, setPhone2] = useState("+52 (55) 4355.4661");
  const [webSite, setWebSite] = useState("www.cimepowersystems.com.mx");

  const handleCopy = async () => {
    const htmlContent = document.getElementById("signature").innerHTML;

    try {
      // Usa el API de Clipboard para copiar HTML
      await navigator.clipboard.write([
        new ClipboardItem({
          "text/html": new Blob([htmlContent], { type: "text/html" }),
        }),
      ]);

      alert("¡Contenido copiado al portapapeles!");
    } catch (err) {
      console.error("Error al copiar el contenido: ", err);
    }
  };

  const handleDownload = () => {
    const htmlContent = document.getElementById("signature").innerHTML;

    // Crea un Blob con el contenido HTML
    const blob = new Blob([htmlContent], { type: "text/html" });

    // Crea una URL para el Blob
    const url = URL.createObjectURL(blob);

    // Crea un enlace para descargar el archivo
    const a = document.createElement("a");
    a.href = url;
    a.download = "contenido.html"; // Nombre del archivo a descargar

    // Simula un clic en el enlace para iniciar la descarga
    a.click();

    // Revoca la URL del Blob para liberar memoria
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-16">
      <form className="flex flex-col gap-8 mb-12">
        <label>
          Nombre:
          <input
            className="w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Título:
          <input
            className="w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          Dirección:
          <select
            className="w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          >
            <option>
              Lago Ladoga 275, Col. Modelo Pensil, Del. Miguel Hidalgo, C.P.
              11450, CDMX, México.
            </option>
            <option>
              Victoria 72, Col. Centro, Del. Cuauhtémoc, C.P. 06050, CDMX.
            </option>
            <option>
              Calle Monte Líbano, Manzana 61, Lote 61, Bodega 14 A, Colonia
              Super Manzana 301, C.P. 77560, Benito, Juárez Quintana Roo
            </option>
            <option>
              Calz. Jesús González Gallo 3077, Col. El Álamo, C.P.45593, San
              Pedro Tlaquepaque, Jalisco.
            </option>
            <option>
              Camino Santa Lucía No. 344, Col. Plenitud, Del. Azcapotzalco, CP.
              02780
            </option>
          </select>
        </label>
        <label>
          Correo electrónico:
          <input
            className="w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Teléfono O:
          <input
            className="w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </label>
        <label>
          Teléfono M:
          <input
            className="w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            type="tel"
            value={phone2}
            onChange={(e) => setPhone2(e.target.value)}
          />
        </label>
        <label>
          Web:
          <select
            className="w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            type=""
            value={webSite}
            onChange={(e) => setWebSite(e.target.value)}
          >
            <option>www.cimepowersystems.com.mx</option>
            <option>www.cimerent.com.mx</option>
          </select>
        </label>
      </form>

      <section>
        <div className="container max-w-3xl mb-8">
          <main id="signature">
            <table
              style={{
                borderCollapse: "collapse",
                height: "480px",
                maxWidth: "48rem",
              }}
            >
              <tbody>
                <tr>
                  <td
                    style={{
                      borderRight: "3px solid #ccc",
                      verticalAlign: "top",
                      padding: "2rem",
                      width: "200px",
                    }}
                  >
                    <img
                      style={{ width: "180px" }}
                      src={
                        "https://res.cloudinary.com/dpxxweszs/image/upload/v1721769760/marca_sghtnr.png"
                      }
                      alt="marca"
                    />
                  </td>
                  <td
                    style={{
                      paddingLeft: "0.5rem",
                      verticalAlign: "top",
                      padding: "1rem",
                    }}
                    colSpan="2"
                  >
                    <h1 style={{ fontSize: "1.5rem", color: "#222525" }}>
                      <strong>{name}</strong>
                    </h1>
                    <p style={{ marginBottom: "0.5rem", color: "#4c5251" }}>
                      {title}
                    </p>
                    <p style={{ marginBottom: "1rem", color: "#4c5251" }}>
                      {address}
                    </p>
                    <p>
                      O:{" "}
                      <a
                        style={{
                          color: "#1c77b0",
                          textDecoration: "underline",
                        }}
                        href={`tel:${phone}`}
                      >
                        {phone}
                      </a>
                    </p>
                    <p>
                      M:{" "}
                      <a
                        style={{
                          color: "#1c77b0",
                          textDecoration: "underline",
                        }}
                        href={`tel:${phone2}`}
                      >
                        {phone2}
                      </a>
                    </p>
                    <p>
                      <a
                        style={{
                          color: "#1c77b0",
                          textDecoration: "underline",
                        }}
                        href={`mailto:${email}`}
                      >
                        {email}
                      </a>
                    </p>
                    <p>
                      <a
                        style={{
                          color: "#1c77b0",
                          textDecoration: "underline",
                        }}
                        href={"https://" + webSite}
                      >
                        {webSite}
                      </a>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td colSpan="3" style={{ paddingTop: "1rem" }}>
                    <img
                      style={{ width: "100%" }}
                      src={
                        "https://res.cloudinary.com/dpxxweszs/image/upload/v1721769760/banner_leirxa.jpg"
                      }
                      alt="banner"
                    />
                    <p style={{ fontSize: "0.7rem", marginTop: "1rem" }}>
                      AVISO DE PRIVACIDAD: Este correo electrónico es
                      estrictamente confidencial y está dirigido exclusivamente
                      a su destinatario. Puede contener información la cual está
                      protegida legal y profesionalmente, o con otros
                      privilegios. Si usted no es el destinatario no deberá
                      revelar su contenido, copiar o tomar cualquier acción de
                      esta transmisión electrónica. Si usted ha recibido este
                      correo por error, por favor notifíquenos inmediatamente y
                      elimine este correo electrónico con toda la información
                      recibida tan pronto como sea posible. Gracias
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </main>
        </div>

        <button
          onClick={handleCopy}
          type="button"
          class="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        >
          Copiar Firma
        </button>

        <button
          onClick={handleDownload}
          type="button"
          class="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        >
          Descargar Firma
        </button>
      </section>
    </div>
  );
};

export default FormEmail;
