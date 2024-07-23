import { useState } from "react";
import FirmaTemplate from "./FirmaTemplate";
import imgLogo from "../assets/marca.png";
import imgBanner from "../assets/banner.jpg";

const FormEmail = () => {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [phone2, setPhone2] = useState("");
  const [webSite, setWebSite] = useState("");

  return (
    <div>
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
          <input
            className="w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
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
          Teléfono:
          <input
            className="w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </label>
        <label>
          Teléfono:
          <input
            className="w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            type="tel"
            value={phone2}
            onChange={(e) => setPhone2(e.target.value)}
          />
        </label>
        <label>
          Web:
          <input
            className="w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            type="url"
            value={webSite}
            onChange={(e) => setWebSite(e.target.value)}
          />
        </label>
      </form>

      <div className="container max-w-3xl">
        <main
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            rowGap: "1rem",
          }}
        >
          <div style={{ borderRight: "3px solid #ccc" }}>
            <img style={{ padding: "2rem" }} src={imgLogo.src} alt="marca" />
          </div>

          <div
            style={{
              paddingLeft: "0.5rem",
              gridColumn: "span 2",
            }}
          >
            <h1 style={{ fontSize: "1.5rem", color: "#222525" }}>
              <strong>{name}</strong>
            </h1>
            <p style={{ marginBottom: "0.5rem", color: "##4c5251" }}>{title}</p>

            <p style={{ marginBottom: "1rem", color: "##4c5251" }}>{address}</p>

            <p>
              O:{" "}
              <a
                style={{ color: "#1c77b0", textDecoration: "underline" }}
                href={`tel:${phone}`}
              >
                {phone}
              </a>
            </p>
            <p>
              M:{" "}
              <a
                style={{ color: "#1c77b0", textDecoration: "underline" }}
                href={`tel:${phone}`}
              >
                {phone2}
              </a>
            </p>
            <p>
              <a
                style={{ color: "#1c77b0", textDecoration: "underline" }}
                href={`mailto:${email}`}
              >
                {email}
              </a>
            </p>
            <p>
              <a
                style={{ color: "#1c77b0", textDecoration: "underline" }}
                href={webSite}
              >
                {webSite}
              </a>
            </p>
          </div>

          <footer
            style={{
              gridColumn: "span 3",
            }}
          >
            <img style={{ width: "100%" }} src={imgBanner.src} alt="banner" />
            <p style={{fontSize: "0.7rem"}}>
              AVISO DE PRIVACIDAD: Este correo electrónico es estrictamente
              confidencial y está dirigido exclusivamente a su destinatario.
              Puede contener información la cual está protegida legal y
              profesionalmente, o con otros privilegios. Si usted no es el
              destinatario no deberá revelar su contenido, copiar o tomar
              cualquier acción de esta transmisión electrónica. Si usted ha
              recibido este correo por error, por favor notifíquenos
              inmediatamente y elimine este correo electrónico con toda la
              información recibida tan pronto como sea posible. Gracias
            </p>
          </footer>
        </main>
      </div>

      
    </div>
  );
};

export default FormEmail;
