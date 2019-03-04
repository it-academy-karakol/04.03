import React, { useState, useEffect } from 'react';

// Create and update hooks
function FunctionalStateExample(props) {
  
  console.log('[FunctionalStateExample.js] render');

  const [count, setCount] = useState(15);

  // Create hook
  useEffect(() => {
    console.log('[FunctionalStateExample.js] useEffect on Create');
  }, []);

  // Update hook
  useEffect(() => {
    console.log('[FunctionalStateExample.js] useEffect on Update');
  }, [count]);

  return (
    <div className='FunctionalStateExample'>
      <button onClick={() => setCount(count + 5)}>Update + 5</button>
      <button onClick={() => setCount(count)}>Just update</button>
      {count}
    </div>
  );
}

// shouldComponentUpdate alternative
export default React.memo(FunctionalStateExample);