
import { useEffect, useRef } from 'react';

const MatrixRain = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const columns = Math.floor(canvas.width / 20);
    const drops: number[] = new Array(columns).fill(0);

    // Custom text array with numbers and relevant words
    const characters = '0123456789';
    const words = ['ATUL', 'KUMAR', 'AI', 'ML', 'NLP'];

    // Colors array for variation
    const colors = ['#0EA5E9', '#ea384c']; // Blue and Red

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = '15px Fira Code';

      for (let i = 0; i < drops.length; i++) {
        // Randomly select color for each column
        ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
        
        // Randomly decide whether to show a number or a word
        const shouldShowWord = Math.random() < 0.05; // 5% chance to show a word
        let text;
        
        if (shouldShowWord) {
          text = words[Math.floor(Math.random() * words.length)];
        } else {
          text = characters[Math.floor(Math.random() * characters.length)];
        }

        ctx.fillText(text, i * 20, drops[i] * 20);

        if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    };

    const interval = setInterval(draw, 33);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 -z-10 opacity-50" />;
};

export default MatrixRain;
