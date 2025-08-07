import { useEffect } from 'react';

const LotharHS = () => {
  useEffect(() => {
    // Redirect immediately when component mounts
    window.location.href = 'https://kick.com/lotharhs';
  }, []);

  // Return null since we're redirecting immediately
  return null;
};

export default LotharHS;