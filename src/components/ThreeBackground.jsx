// src/components/ThreeBackground.jsx
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ThreeBackground = ({ isActive = true }) => {
  const mountRef = useRef(null);
  // We use refs to store Three.js objects so they persist across re-renders
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const sceneRef = useRef(null);
  const particlesMeshRef = useRef(null);
  const animationFrameId = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const clock = useRef(new THREE.Clock());

  useEffect(() => {
    const currentMount = mountRef.current;

    // --- Scene, Camera, Renderer Setup (only runs once) ---
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(75, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000);
    camera.position.z = 5;
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    rendererRef.current = renderer;
    currentMount.appendChild(renderer.domElement);

    // --- Particles Setup (only runs once) ---
    const particlesGeometry = new THREE.BufferGeometry();
    const posArray = new Float32Array(500 * 3);
    for (let i = 0; i < 500 * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 20;
    }
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particleMaterial = new THREE.PointsMaterial({
      size: 0.05,
      color: 0x57564F,
      transparent: true,
      opacity: 0.7,
    });
    const particlesMesh = new THREE.Points(particlesGeometry, particleMaterial);
    particlesMeshRef.current = particlesMesh;
    scene.add(particlesMesh);

    // --- Event Listeners ---
    const handleMouseMove = (event) => {
      mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    const handleResize = () => {
      camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    };
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    // --- Cleanup ---
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (currentMount && renderer.domElement.parentNode === currentMount) {
        currentMount.removeChild(renderer.domElement);
      }
      // Also cancel the animation frame on cleanup
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []); // Empty dependency array ensures this setup code runs ONLY ONCE.

  // --- Animation Loop Effect ---
  useEffect(() => {
    const animate = () => {
      // Check the prop on every frame. If not active, do nothing.
      if (isActive && particlesMeshRef.current) {
        const elapsedTime = clock.current.getElapsedTime();
        
        // Parallax effect
        cameraRef.current.position.x += (mouse.current.x * 0.5 - cameraRef.current.position.x) * 0.05;
        cameraRef.current.position.y += (mouse.current.y * 0.5 - cameraRef.current.position.y) * 0.05;

        // Animate particles
        particlesMeshRef.current.rotation.y = elapsedTime * 0.05;
        
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
      
      // Keep the loop running
      animationFrameId.current = window.requestAnimationFrame(animate);
    };

    // Start the animation loop
    animate();

    // Cleanup function for this effect
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [isActive]); // This effect re-runs if `isActive` changes, but the loop is continuous.

  return <div ref={mountRef} className="fixed inset-0 z-0 pointer-events-none" />;
};

export default ThreeBackground;