
import React from 'react';
import { AIButton } from '../packages/core/ai-components/AIButton';
import { Text } from '../packages/core/components';
import { Table, Column, Row } from '../packages/core/components';

const App: React.FC = () => {
  // Sample customer data for the table
  const customerData = [
    { name: 'Mayo Clinic', location: 'Rochester, MN', size: 'Large' },
    { name: 'Cleveland Clinic', location: 'Cleveland, OH', size: 'Large' },
    { name: 'Johns Hopkins Hospital', location: 'Baltimore, MD', size: 'Large' },
    { name: 'Massachusetts General', location: 'Boston, MA', size: 'Large' },
    { name: 'UCSF Medical Center', location: 'San Francisco, CA', size: 'Medium' },
    { name: 'Northwestern Memorial', location: 'Chicago, IL', size: 'Medium' },
    { name: 'NYU Langone', location: 'New York, NY', size: 'Medium' },
    { name: 'Stanford Health Care', location: 'Palo Alto, CA', size: 'Medium' },
    { name: 'Cedar Sinai Medical Center', location: 'Los Angeles, CA', size: 'Medium' },
    { name: 'Mount Sinai Hospital', location: 'New York, NY', size: 'Large' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="p-8 text-center">
        <Text appearance="default" size="xxxl" weight="bold">
          Bring back the joy of care
        </Text>
        
        {/* Action Buttons */}
        <div className="mt-6 mb-10 flex justify-center gap-4">
          <AIButton appearance="primary">Login</AIButton>
          <AIButton>Signup</AIButton>
        </div>
      </div>
      
      {/* Table Section */}
      <div className="px-8">
        <Table 
          data={customerData}
          schema={[
            {
              name: 'name',
              displayName: 'Customer Name',
              width: '40%',
              resizable: true,
              sortable: true,
              cell: ({ row }) => <Text>{row.name}</Text>
            },
            {
              name: 'location',
              displayName: 'Location',
              width: '40%',
              resizable: true,
              sortable: true,
              cell: ({ row }) => <Text>{row.location}</Text>
            },
            {
              name: 'size',
              displayName: 'Size',
              width: '20%',
              resizable: true,
              sortable: true,
              cell: ({ row }) => <Text>{row.size}</Text>
            }
          ]}
        />
      </div>
    </div>
  );
};

export default App;
