import Link from 'next/link';
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode } from 'react';

const PlanList = ({ plans }: { plans: { id: Key | null | undefined; title: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; description: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; }[] }) => {
  return (
    <div>
      {plans.map((plan) => (
        <Link key={plan.id} href={`/plans/${plan.id}`}>
          <a>
            <h2>{plan.title}</h2>
            <p>{plan.description}</p>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default PlanList;
