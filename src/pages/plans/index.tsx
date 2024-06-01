// src/pages/plans/index.tsx
import React, { useEffect, useState } from 'react';

const PlansPage = () => {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const response = await fetch('/api/plans');
        const data = await response.json();
        setPlans(data);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch plans:', error);
      }
    };

    fetchPlans();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Plans</h1>
      <ul>
        {plans.map((plan) => (
          <li key={plan.id}>{plan.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PlansPage;
