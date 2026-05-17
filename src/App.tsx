import { useState } from 'react';
import { electricalService } from './services/api';

function App() {
  const [voltage, setVoltage] = useState<string>('');
  const [current, setCurrent] = useState<string>('');
  const [type, setType] = useState<string>('singlephase'); // Default state
  const [result, setResult] = useState<number | null>(null);
  const [returnedType, setReturnedType] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const handleCalculate = async () => {
    setError(null);
    setResult(null);
    
    try {
      // Pass the selected UI values to our English API service
      const data = await electricalService.calculatePower(voltage, current, type);
      setResult(data.powerWatts);
      setReturnedType(data.circuitType);
    } catch (err: any) {
      setError(err.message || 'Could not calculate. Please try again.');
    }
  };

  return (
    <main className="container">
      <h2>Professional Electrical Power Calculator</h2>
      
      {/* Circuit type selection */}
      <div className="form-group">
        <label htmlFor="type">System Type:</label>
        <select id="type" value={type} onChange={(e) => setType(e.target.value)}>
          <option value="singlephase">Single-phase (1F + N)</option>
          <option value="threephase">Three-phase (3F)</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="voltage">Voltage (Volts - V):</label>
        <input 
          id="voltage"
          type="number" 
          value={voltage} 
          onChange={(e) => setVoltage(e.target.value)}
          placeholder="e.g., 127, 220, 380"
        />
      </div>

      <div className="form-group">
        <label htmlFor="current">Current (Amperes - A):</label>
        <input 
          id="current"
          type="number" 
          value={current} 
          onChange={(e) => setCurrent(e.target.value)}
          placeholder="e.g., 10, 32"
        />
      </div>

      <button onClick={handleCalculate} disabled={!voltage || !current}>
        Calculate Power
      </button>

      {error && <div className="alert alert-danger">{error}</div>}

      {result !== null && (
        <div className="result-box">
          <strong>Result ({returnedType}):</strong>
          <p>Active Power: <strong>{result.toFixed(2)} W</strong></p>
          <p>Power in kW: <strong>{(result / 1000).toFixed(2)} kW</strong></p>
        </div>
      )}
    </main>
  );
}

export default App;
