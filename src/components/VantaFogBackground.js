import React, {useRef, useEffect} from 'react';
import * as THREE from "three"; 
import FOG from "vanta/dist/vanta.fog.min";

export const VantaFogBackground = () => {
  console.log('VantaFogBackground component rendered!');
    const myRef = useRef(null);
    const vantaRef = useRef(null); 
  
    useEffect(() => {
      if (!vantaRef.current) { 
        vantaRef.current = FOG({
          THREE,
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          highlightColor: 0x8500bd,
          midtoneColor: 0x6c00c1, 
          lowlightColor: 0xffffff, 
          baseColor: 0x242424,
          blurFactor: 0.65,
          speed: 0.3,
          zoom: 0.5,
        });
      }
  
      return () => {
        if (vantaRef.current) {
          vantaRef.current.destroy();
          vantaRef.current = null;
        }
      };
    }, []);
  
    return (
      <div 
        ref={myRef} 
        style={{ 
          width: "100vw", 
          height: "100vh", 
          position: "absolute", 
          top: 0, 
          left: 0,
        }}>
      </div>
    );
}
