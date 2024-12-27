// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SerchOrder() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="w-[115px] rounded-full bg-yellow-100 px-3 py-2 text-sm placeholder:text-stone-400 sm:w-[150px] sm:text-base md:w-[400px] lg:w-[500px] xl:w-[600px]"
        placeholder="serch order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      ></input>
    </form>
  );
}

export default SerchOrder;
