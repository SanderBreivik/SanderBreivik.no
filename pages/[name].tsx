import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from './styles/Simen.module.scss';

export default function DynamicNamePage() {
  const router = useRouter();
  const { name } = router.query;
  const [isBlinking, setIsBlinking] = useState(true);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (isBlinking) {
      const interval = setInterval(() => {
        setVisible(prev => !prev);
      }, 500);
      
      return () => clearInterval(interval);
    }
  }, [isBlinking]);
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.messageContainer} style={{ opacity: visible ? 1 : 0 }}>
          <div className={styles.fuckYou}>🖕🏼</div>
          <h1 className={styles.message}>Fuck you, {name || 'Friend'}!</h1>
        </div>
        
        <button 
          className={styles.blinkToggle}
          onClick={() => setIsBlinking(!isBlinking)}
        >
          {isBlinking ? 'Stop Blinking' : 'Start Blinking'}
        </button>
      </main>
    </div>
  );
}
