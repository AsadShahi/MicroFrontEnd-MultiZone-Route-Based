'use client'; 

import { useState } from 'react';
import { Button } from 'packages-shared-ui'; 

export default function SearchPage() {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [results, setResults] = useState<any[]>([]); 
  const handleSearch = async () => {

    console.log(`Searching from ${from} to ${to}`);

    const flights = [
      { id: 1, flightNumber: 'AI-101', price: '$200' },
      { id: 2, flightNumber: 'BA-202', price: '$350' },
    ];
    setResults(flights);
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Search Flights</h1>
      
      <div className="flex flex-col gap-4 max-w-sm mb-6">
        <input 
          className="border p-2 rounded"
          value={from} 
          onChange={(e) => setFrom(e.target.value)} 
          placeholder="From" 
        />
        <input 
          className="border p-2 rounded"
          value={to} 
          onChange={(e) => setTo(e.target.value)} 
          placeholder="To" 
        />
        
        {/* Using your shared Button component */}
        <Button onClick={handleSearch} label="Search Flights" />
      </div>

      <ul className="space-y-2">
        {results.map((f) => (
          <li key={f.id} className="p-3 bg-gray-100 rounded border">
            {f.flightNumber} — <span className="font-semibold text-green-600">{f.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
