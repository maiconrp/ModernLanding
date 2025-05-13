import React from 'react';

interface SectionHeaderProps {
  children: React.ReactNode;
}

export default function SectionHeader({ children }: SectionHeaderProps) {
  return (
    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-['Montserrat'] text-center mb-16">
      {children}
    </h2>
  );
}
