import React from 'react';
import Button from '@/components/Button'; // ✅ default import

const Landing = () => {
  return (
    <div className="min-h-screen p-8 space-y-6 bg-gray-50">
      <h1 className="text-2xl font-semibold">Landing Page - Button Variants</h1>

      <div className="space-y-4">
        <h2 className="text-xl">Small Buttons</h2>
        <div className="flex gap-4">
          <Button title="Small - sm" size="sm" shape="sm" />
          <Button title="Small - md" size="sm" shape="md" />
          <Button title="Small - full" size="sm" shape="full" />
        </div>

        <h2 className="text-xl">Medium Buttons</h2>
        <div className="flex gap-4">
          <Button title="Medium - sm" size="md" shape="sm" />
          <Button title="Medium - md" size="md" shape="md" />
          <Button title="Medium - full" size="md" shape="full" />
        </div>

        <h2 className="text-xl">Large Buttons</h2>
        <div className="flex gap-4">
          <Button title="Large - sm" size="lg" shape="sm" />
          <Button title="Large - md" size="lg" shape="md" />
          <Button title="Large - full" size="lg" shape="full" />
        </div>
      </div>
    </div>
  );
};

export default Landing;
