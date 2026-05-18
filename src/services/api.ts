export const electricalService = {
  calculatePower: async (voltage: string, current: string, type: string) => {
    
    // Separando o seu link em partes para evitar falhas de formatação
    const domain = "https://electric-calculator-backend";
    const extension = ".onrender.com";
    const route = "/calculate-power?voltage=";

    // Montando a URL completa com segurança
    const url = domain + extension + route
      + encodeURIComponent(voltage) 
      + "&current=" + encodeURIComponent(current) 
      + "&type=" + encodeURIComponent(type);

    const response = await fetch(url);
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'An error occurred during calculation');
    }
    
    return response.json(); 
  }
};
