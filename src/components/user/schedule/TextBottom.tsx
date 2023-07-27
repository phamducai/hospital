
import React from 'react';
import clsx from 'clsx';

interface CustomHeadingProps {
  title: string;
  status: string
}

const CustomBottom: React.FC<CustomHeadingProps> = ({ title, status }) => {
  // text-center p-2 fs-5 fw-border mt-2 mx-2 mx-md-4 rounded-3
  return (
    <h1 className={clsx("text-center p-2 fs-5 fw-border mt-2 mx-2 mx-md-4 rounded-3", {
      'h1-custom-success': status === 'success',
      'h1-custom-danger': status === 'danger'
    })}>
      {title}
    </h1>
  );
};

export default CustomBottom;
