import React from 'react';

interface CustomHeadingProps {
  title: string;
}

const CustomHeading: React.FC<CustomHeadingProps> = ({ title }) => {
  return (
    <h1 className="text-center p-2 fs-5 text-info fw-bolder h1-custom mt-2 mx-2 mx-md-4 rounded-3">
      {title}
    </h1>
  );
};

export default CustomHeading;
