import { useState } from 'react';
import { useRouter } from 'next/router';

const AddPlanForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // プランの追加ロジック
    router.push('/plans');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      <button type="submit">Add Plan</button>
    </form>
  );
};

export default AddPlanForm;
