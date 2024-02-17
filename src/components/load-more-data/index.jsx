import { useEffect } from 'react';
import './styles.css';
import { useState } from 'react';

export default function LoadMoreData() {
  const [loading,setLoading]=useState(false);
  const[products,setProducts]=useState([]);
  const[count,setCount]=useState(0);
  return (
    <div className='loadMoreData'>LoadMoreData</div>
  )
}
