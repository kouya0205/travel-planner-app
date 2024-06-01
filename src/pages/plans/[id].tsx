import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import PlanDetail from '../../components/TravelPlan/PlanDetail';

const PlanDetailPage = () => {
  const [plan, setPlan] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      const fetchPlan = async () => {
        const res = await fetch(`/api/plans/${id}`);
        const data = await res.json();
        setPlan(data);
      };
      fetchPlan();
    }
  }, [id]);

  if (!plan) {
    return <p>Loading...</p>;
  }

  return <PlanDetail plan={plan} />;
};

export default PlanDetailPage;
