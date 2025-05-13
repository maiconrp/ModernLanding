import React from 'react';

interface GlassIconProps {
  icon: React.ReactNode;
  color?: string;
}

export default function GlassIcon({ icon, color = '#1E2B4F' }: GlassIconProps) {
  return (
    <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: color }}>
      <span className="text-2xl text-[#C5A167]">{icon}</span>
    </div>
  );
}
