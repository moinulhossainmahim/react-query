import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";

const fetchColors = (page) => {
  return axios.get(`http://localhost:4000/colors?_limit=2&_page=${page}`);
}

const PaginatedQueriesPage = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError, error } = useQuery(['colors', page], () => fetchColors(page), {
    keepPreviousData: true,
  });

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  if(isError) {
    return <h2>{error.message}</h2>
  }

  return (
    <div>
      <h2>Paginated Queries Page</h2>
      {data?.data.map((color) => (
        <h4 key={color.id} style={{ padding: '10px' }}>{color.label}</h4>
      ))}
      <button onClick={() => setPage((prev) => prev - 1)} disabled={page === 1}>Prev</button>
      <button onClick={() => setPage((prev) => prev + 1)} disabled={page === 4}>Next</button>
    </div>
  )
}

export default PaginatedQueriesPage;
