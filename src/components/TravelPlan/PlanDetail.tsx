import React from "react";

type Plan = {
  title: string;
  description: string;
};

const PlanDetail: React.FC<{plan: Plan}> = ({plan}) => {
  return (
    <div>
      <h1>{plan.title}</h1>
      <p>{plan.description}</p>
      {/* 追加の詳細情報 */}
    </div>
  );
};

export default PlanDetail;
