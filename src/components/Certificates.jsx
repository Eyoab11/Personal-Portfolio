import React from "react";
import networking from "../assets/Networking_Essentials_certificate_eyoabamare3-gmail-com_b7dab851-698e-4397-bd33-2788232151b8_page-0001.jpg";
import packet from "../assets/Introduction_to_Packet_Tracer_certificate_eyoabamare3-gmail-com_6b146a22-1178-49e6-a790-1d9d825ed9dd_page-0001.jpg";
import vmware from "../assets/Certificate_of_Completion_DCV_CTS_Data_Center_Virtualization_Core_Technical_Skills_Amare_page-0001.jpg";

const Certificates = () => {
  const certificates = [
    {
      image: networking,
      name: "Cisco: Networking Essentials",
    },
    {
      image: packet,
      name: "Cisco: Introduction to Packet Tracer",
    },
    {
      image: vmware,
      name: "VMware IT Academy: Data Center Virtualization: Core Technical Skills",
    },
  ];

  return (
    <section className="px-4 py-10 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-black mb-6 text-center">
          Certificates
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <CertificateCard key={index} {...cert} />
          ))}
        </div>
      </div>
    </section>
  );
};

const CertificateCard = ({ image, name }) => (
  <div className="bg-white rounded-xl shadow-md overflow-hidden hover:-translate-y-2 hover:shadow-lg transition-transform">
    <div className="w-full h-48 overflow-hidden">
      <img
        src={image}
        alt={name}
        className="w-full h-full object-contain"
      />
    </div>
    <div className="p-4">
      <p className="text-center text-gray-800 font-semibold">{name}</p>
    </div>
  </div>
);

export default Certificates;
