import React from 'react';
import '../assets/css/components/slider.css';

export const Slider = ({technologies, borderColor = '#7c05d8', borderWeight = 1, isPaused = false, isPausedHover = false, durationMs = 30000 }) => {
  const amountTechnologies = technologies.length;
  const durationSeconds = `${durationMs / 1000}s`;

  return (
    <div 
      className={`wrapper ${ isPausedHover ? 'wrapper-paused-hover' : ''} ${ isPaused ? 'wrapper-paused' : ''}`}
      style={{
        '--amount-technologies': amountTechnologies,
        '--transition-slider-duration': durationSeconds,
        borderTop: `${borderWeight}px solid ${borderColor}`,
        borderBottom: `${borderWeight}px solid ${borderColor}`,
      }}
    >
        {technologies.map((technology, index) => (
            <div 
                key={technology.id}
                className={`item ${'item' + technology.id}`}
                style={{ '--item': index + 1 }}
            >
                <img 
                  src={technology.img} 
                  alt={`${technology.name}-icon`} 
                  className={`technology-slider itemImg ${'itemImg' + technology.id}`} 
                  width="50" 
                  height="50" 
                  loading='lazy'/>
            </div>
        ))}
    </div>
  )
}