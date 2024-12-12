'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const SmokeBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Prevent mobile viewport scaling issues
    const meta = document.createElement('meta');
    meta.name = 'viewport';
    meta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';
    document.getElementsByTagName('head')[0].appendChild(meta);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
      stencil: false,
      depth: false
    });
    
    renderer.setPixelRatio(1);
    renderer.domElement.style.position = 'fixed';
    renderer.domElement.style.top = '0';
    renderer.domElement.style.left = '0';
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';

    container.appendChild(renderer.domElement);

    // Smoke material setup
    const smokeTexture = new THREE.TextureLoader().load('/smoke.png');
    const smokeMaterial = new THREE.MeshLambertMaterial({
      map: smokeTexture,
      transparent: true,
      opacity: 0.3,
      emissive: new THREE.Color(0x00ffff),
      emissiveIntensity: 0.2,
      color: new THREE.Color(0x00a2ff),
    });

    // Create particles
    const smokeParticles: THREE.Mesh[] = [];
    for (let p = 0; p < 150; p++) {
      const particle = new THREE.Mesh(
        new THREE.PlaneGeometry(150, 150),
        smokeMaterial
      );
      particle.position.set(
        Math.random() * 500 - 250,
        Math.random() * 500 - 250,
        Math.random() * 1000 - 100
      );
      particle.rotation.z = Math.random() * Math.PI * 2;
      scene.add(particle);
      smokeParticles.push(particle);
    }

    // Lights
    const ambientLight = new THREE.AmbientLight(0x00ffff, 0.6);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x00a2ff, 1, 1000);
    pointLight.position.set(0, 0, 100);
    scene.add(pointLight);

    const directionalLight = new THREE.DirectionalLight(0x00ffff, 0.8);
    directionalLight.position.set(0, 0, 200);
    scene.add(directionalLight);

    camera.position.z = 500;

    // Optimize animation
    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      smokeParticles.forEach((particle) => {
        particle.rotation.z += 0.001;
      });

      pointLight.position.x = Math.sin(Date.now() * 0.0005) * 150;
      pointLight.position.y = Math.cos(Date.now() * 0.0005) * 150;

      renderer.render(scene, camera);
    };

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setPixelRatio(1);
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      container.removeChild(renderer.domElement);
      scene.clear();
      meta.remove();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 -z-10 overflow-hidden" 
      style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        perspective: '1000px',
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden',
        transformStyle: 'preserve-3d'
      }} 
    />
  );
};

export default SmokeBackground;
