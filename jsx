import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Html, OrbitControls } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function RoomScene() {
  // Load optimized GLTF model with baked textures
  const { scene } = useGLTF('/models/gallery.glb');

  return (
    <group>
      <primitive object={scene} />
      
      {/* Interactive 3D Hotspot in World Space */}
      <mesh position={[2, 1.5, -3]}>
        <Html distanceFactor={10} center>
          <div className="bg-white/80 backdrop-blur-md p-3 rounded-lg shadow-lg">
            <h4 className="font-bold text-sm">Custom Cabinetry</h4>
            <button className="text-xs text-blue-600 underline">View Details</button>
          </div>
        </Html>
      </mesh>
    </group>
  );
}

export default function App() {
  return (
    <div className="w-screen h-screen">
      <Canvas
        camera={{ position: [0, 1.6, 5], fov: 50 }}
        gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping }}
      >
        <RoomScene />
        {/* Smooth camera drag / panning */}
        <OrbitControls 
          enableZoom={false} 
          enablePan={true} 
          maxPolarAngle={Math.PI / 2} // Keep camera above floor
          minPolarAngle={Math.PI / 3}
          dampingFactor={0.05}
        />
      </Canvas>
    </div>
  );
             }
