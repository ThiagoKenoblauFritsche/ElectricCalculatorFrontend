export const electricalService = {
  calculatePower: async (voltage: string, current: string, type: string) => {
    // URL corrigida com o link do seu Render e a sintaxe ${voltage} correta!
    const response = await fetch(
      `https://onrender.com{voltage}&current=${current}&type=${type}`
    );
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'An error occurred during calculation');
    }
    
    return response.json(); 
  }
};
