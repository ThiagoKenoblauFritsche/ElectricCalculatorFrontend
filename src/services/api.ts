export const electricalService = {
  calculatePower: async (voltage: string, current: string, type: string) => {
    // Sends parameters using the new English names to the C# API
    const response = await fetch(
      `http://localhost:5006/calculate-power?voltage=${voltage}&current=${current}&type=${type}`
    );
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'An error occurred during calculation');
    }
    
    return response.json(); // Returns the object containing { powerWatts, circuitType, ... }
  }
};
