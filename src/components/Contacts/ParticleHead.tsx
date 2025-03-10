/* eslint-disable react/no-unknown-property */

'use client';

import { OrbitControls, Stars } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';

// No need for a custom TargetGeometry interface; use THREE.BufferGeometry directly
// interface ParticleSystemProps {
//   mouse: [number, number];
// }

function ParticleSystem() {
  const particlesRef = useRef<THREE.Points | null>(null);
  const [bufferGeometry, setBufferGeometry] = useState<THREE.BufferGeometry | null>(null);
  // const [headPosition, setHeadPosition] = useState<THREE.Vector3 | null>(null);
  // const { camera } = useThree();

  useEffect(() => {
    const loader = new OBJLoader();
    loader.load(
      'https://s3-us-west-2.amazonaws.com/s.cdpn.io/40480/head.obj',
      (object) => {
        const scale = 8;
        object.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            const geometry = child.geometry.clone() as THREE.BufferGeometry;
            geometry.scale(scale, scale, scale);

            const particleGeometry = new THREE.BufferGeometry();
            particleGeometry.setAttribute(
              'position',
              geometry.attributes.position,
            );
            setBufferGeometry(particleGeometry);

            // const bbox = new THREE.Box3().setFromObject(object);
            // const center = bbox.getCenter(new THREE.Vector3());
            // setHeadPosition(center);
          }
        });
      },
      undefined,
      (error) => {
        // eslint-disable-next-line no-console
        console.error('OBJ Load Error:', error);
      },
    );
  }, []);

  // Make sure to return the JSX
  return bufferGeometry ? (
    <points ref={particlesRef}>
      <primitive object={bufferGeometry} attach='geometry' />
      <pointsMaterial
        attach='material'
        color={0xffffff}
        size={1.5}
        sizeAttenuation
      />
    </points>
  ) : null;
}

export default function ParticleHead() {
  const mouse = useRef<[number, number]>([0, 0]);

  useEffect(() => {
    const onMouseMove = (event: MouseEvent) => {
      mouse.current = [
        (event.clientX / window.innerWidth) * 2 - 1,
        -(event.clientY / window.innerHeight) * 2 + 1,
      ];
    };

    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  return (
    <div className='particlehead w-full h-full'>
      <Canvas
        camera={{ position: [0, 0, 300], fov: 35 }}
        className='w-full h-full'
      >
        <Stars />
        <ParticleSystem />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}
