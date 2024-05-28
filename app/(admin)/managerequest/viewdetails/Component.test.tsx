import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Details from './page';

// Mock data to be used in tests
const mockData = {
  user: {
    id: '12345',
    role: 'Admin',
    firstName: 'John',
    middleInitial: 'A',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    contactNumber: '+1 (555) 555-5555'
  },
  event: {
    name: 'Annual Conference',
    description: 'The annual conference for our organization, bringing together industry leaders and experts.',
    startTimestamp: '2023-06-01 09:00:00',
    endTimestamp: '2023-06-03 17:00:00',
    organization: 'Acme Inc.'
  },
  request: {
    id: '54321',
    facilityId: '67890',
    requestorId: '98765',
    activityDesignId: '43210',
    riskAnalysisId: '12345',
    status: 'Approved'
  },
  riskAnalysis: [
    {
      tin: '987654321',
      effect: 'Moderate',
      likelihood: 'Unlikely',
      impact: 'Moderate',
      mitigatingAction: 'Implement additional security measures',
      escalationPoint: 'Security Manager',
      riskId: '12345',
      requestId: '54321'
    }
  ]
};

// Mock fetch to return mock data
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(mockData)
  })
) as jest.Mock;

describe('Details', () => {
it('renders loading state initially', () => {
    render(<Details apiEndpoint="https://api.example.com/data" />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
});

  it('renders user profile data after fetching', async () => {
    render(<Details apiEndpoint="https://api.example.com/data" />);

    await waitFor(() => expect(screen.getByText('User Profile')).toBeInTheDocument());

    expect(screen.getByText('User ID')).toBeInTheDocument();
    expect(screen.getByText('12345')).toBeInTheDocument();
    expect(screen.getByText('Role')).toBeInTheDocument();
    expect(screen.getByText('Admin')).toBeInTheDocument();
    expect(screen.getByText('First Name')).toBeInTheDocument();
    expect(screen.getByText('John')).toBeInTheDocument();
    expect(screen.getByText('Middle Initial')).toBeInTheDocument();
    expect(screen.getByText('A')).toBeInTheDocument();
    expect(screen.getByText('Last Name')).toBeInTheDocument();
    expect(screen.getByText('Doe')).toBeInTheDocument();
    expect(screen.getByText('Email')).toBeInTheDocument();
    expect(screen.getByText('john.doe@example.com')).toBeInTheDocument();
    expect(screen.getByText('Contact Number')).toBeInTheDocument();
    expect(screen.getByText('+1 (555) 555-5555')).toBeInTheDocument();
  });

  it('renders event details after fetching', async () => {
    render(<Details apiEndpoint="https://api.example.com/data" />);

    await waitFor(() => expect(screen.getByText('Event Details')).toBeInTheDocument());

    expect(screen.getByText('Event Name')).toBeInTheDocument();
    expect(screen.getByText('Annual Conference')).toBeInTheDocument();
    expect(screen.getByText('Event Description')).toBeInTheDocument();
    expect(screen.getByText('The annual conference for our organization, bringing together industry leaders and experts.')).toBeInTheDocument();
    expect(screen.getByText('Start Timestamp')).toBeInTheDocument();
    expect(screen.getByText('2023-06-01 09:00:00')).toBeInTheDocument();
    expect(screen.getByText('End Timestamp')).toBeInTheDocument();
    expect(screen.getByText('2023-06-03 17:00:00')).toBeInTheDocument();
    expect(screen.getByText('Organization')).toBeInTheDocument();
    expect(screen.getByText('Acme Inc.')).toBeInTheDocument();
  });

  it('renders request details after fetching', async () => {
    render(<Details apiEndpoint="https://api.example.com/data" />);

    await waitFor(() => expect(screen.getByText('Request Details')).toBeInTheDocument());

    expect(screen.getByText('Request ID')).toBeInTheDocument();
    expect(screen.getByText('54321')).toBeInTheDocument();
    expect(screen.getByText('Facility ID')).toBeInTheDocument();
    expect(screen.getByText('67890')).toBeInTheDocument();
    expect(screen.getByText('Requestor ID')).toBeInTheDocument();
    expect(screen.getByText('98765')).toBeInTheDocument();
    expect(screen.getByText('Activity Design ID')).toBeInTheDocument();
    expect(screen.getByText('43210')).toBeInTheDocument();
    expect(screen.getByText('Risk Analysis ID')).toBeInTheDocument();
    expect(screen.getByText('12345')).toBeInTheDocument();
    expect(screen.getByText('Status')).toBeInTheDocument();
    expect(screen.getByText('Approved')).toBeInTheDocument();
  });

  it('renders risk analysis table after fetching', async () => {
    render(<Details apiEndpoint="https://api.example.com/data" />);

    await waitFor(() => expect(screen.getByText('Risk Analysis')).toBeInTheDocument());

    expect(screen.getByText('TIN')).toBeInTheDocument();
    expect(screen.getByText('Effect')).toBeInTheDocument();
    expect(screen.getByText('Likelihood')).toBeInTheDocument();
    expect(screen.getByText('Impact')).toBeInTheDocument();
    expect(screen.getByText('Mitigating Action')).toBeInTheDocument();
    expect(screen.getByText('Escalation Point')).toBeInTheDocument();
    expect(screen.getByText('Risk ID')).toBeInTheDocument();
    expect(screen.getByText('Request ID')).toBeInTheDocument();

    expect(screen.getByText('987654321')).toBeInTheDocument();
    expect(screen.getByText('Moderate')).toBeInTheDocument();
    expect(screen.getByText('Unlikely')).toBeInTheDocument();
    expect(screen.getByText('Implement additional security measures')).toBeInTheDocument();
    expect(screen.getByText('Security Manager')).toBeInTheDocument();
  });
});
