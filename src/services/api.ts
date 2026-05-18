export const electricalService = {
  calculatePower: async (voltage: string, current: string, type: string) => {
    // LINK CORRETO + PROTEÇÃO COMPLETA DOS PARÂMETROS
    const response = await fetch(
      `https://onrender.com?voltage=${encodeURIComponent(voltage)}&current=${encodeURIComponent(current)}&type=${encodeURIComponent(type)}`
    );
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'An error occurred during calculation');
    }
    
    return response.json(); 
  }
};
