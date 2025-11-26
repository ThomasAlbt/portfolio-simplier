import { Canvas, useFrame } from '@react-three/fiber';
import { Float, PerspectiveCamera } from '@react-three/drei';
import { useRef, useState, useEffect } from 'react';

const GeometricShape = ({ shape }) => {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  const getGeometry = () => {
    switch (shape) {
      case 'torus':
        return <torusGeometry args={[1, 0.4, 16, 100]} />;
      case 'cube':
        return <boxGeometry args={[1.5, 1.5, 1.5, 5, 5, 5]} />;
      case 'icosahedron':
        return <icosahedronGeometry args={[1, 1]} />;
      default:
        return <icosahedronGeometry args={[1, 1]} />;
    }
  };

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} scale={1.5}>
        {getGeometry()}
        <meshBasicMaterial color="#10b981" wireframe transparent opacity={0.3} />
      </mesh>
    </Float>
  );
};

const Hero3D = ({ shape = 'icosahedron' }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches || 'ontouchstart' in window);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (isMobile) return null;

  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <ambientLight intensity={0.5} />
        <GeometricShape shape={shape} />
      </Canvas>
    </div>
  );
};

export default Hero3D;
