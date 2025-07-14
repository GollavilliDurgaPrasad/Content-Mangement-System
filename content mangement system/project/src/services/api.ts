const API_BASE_URL = 'https://jsonplaceholder.typicode.com'; // Mock API for development
const STORAGE_KEY = 'abc_company_heading';

// Default heading
const DEFAULT_HEADING = 'Hyper boost your Revenue Management, Marketing and Commercial Functions with Business Ready AI';

// Simulate API delay for realistic experience
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const getHeading = async (): Promise<string> => {
  await delay(500); // Simulate network delay
  
  try {
    // For demo purposes, we'll use localStorage
    // In production, this would be a real API call
    const storedHeading = localStorage.getItem(STORAGE_KEY);
    return storedHeading || DEFAULT_HEADING;
  } catch (error) {
    console.error('Error fetching heading:', error);
    return DEFAULT_HEADING;
  }
};

export const updateHeading = async (heading: string): Promise<void> => {
  await delay(800); // Simulate network delay
  
  try {
    // For demo purposes, we'll use localStorage
    // In production, this would be a real API call
    localStorage.setItem(STORAGE_KEY, heading);
    
    // Simulate potential API errors (uncomment to test error handling)
    // if (Math.random() > 0.8) {
    //   throw new Error('Network error');
    // }
  } catch (error) {
    console.error('Error updating heading:', error);
    throw error;
  }
};

// Example of how real API calls would look:
/*
export const getHeading = async (): Promise<string> => {
  const response = await fetch(`${API_BASE_URL}/api/content/heading`);
  if (!response.ok) {
    throw new Error('Failed to fetch heading');
  }
  const data = await response.json();
  return data.heading;
};

export const updateHeading = async (heading: string): Promise<void> => {
  const response = await fetch(`${API_BASE_URL}/api/content/heading`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ heading }),
  });
  
  if (!response.ok) {
    throw new Error('Failed to update heading');
  }
};
*/