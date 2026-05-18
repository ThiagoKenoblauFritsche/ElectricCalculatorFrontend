export const electricalService = {
  calculatePower: async (voltage: string, current: string, type: string) => {
    // URL Corrigida com o seu subdomínio e interpolação de string padrão do JavaScript ($)
    const response = await fetch(
      `https://onrender.com{encodeURIComponent(voltage)}&current=${encodeURIComponent(current)}&type=${encodeURIComponent(type)}`
    );
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'An error occurred during calculation');
    }
    
    return response.json(); 
  }
};
