import React from 'react';
import { useParams } from 'react-router-dom';
import Tooth from '../Components/tooth';
import Medicine from '../Components/medicine';

const Services = () => {
  const { service } = useParams();

  // Define an array of services with their titles and content
  const servicesData = [
    {
      name: 'Dental',
      title: 'Dental Services',
      content: 'Information about dental services...',
      image: <Tooth />,
    },
    {
      name: 'Pharmacy',
      title: 'Pharmacy Services',
      content: 'Information about pharmacy services...',
      image: <Medicine />,
    },
  ];

  // Find the selected service in the array
  const selectedService = servicesData.find((s) => 
  s.name === service);

  // If the selected service is not found, use default values
  const pageTitle = selectedService ? selectedService.title : null;
  const pageContent = selectedService ? selectedService.content : '';
  const pageImage = selectedService ? selectedService.image : null;

  

  return (
    <div className="d-flex flex-column min-vh-100 mt-4 mb-5 ms-5">
      {pageTitle ? (
        <>
          <h2>{pageTitle}</h2>
          <p>{pageContent}</p>
          {pageImage && <div>{pageImage}</div>}
        </>
      ) : (
        <>
          <h2>All Services</h2>
          {servicesData.map((service) => (
            <div key={service.name}>
              <h3>{service.title}</h3>
              <p>{service.content}</p>
              {service.image && <div>{service.image}</div>}
            </div>
          ))}
        </>
      )}
      <div className="flex-grow-1"></div>
    </div>
  );
};

export default Services;
