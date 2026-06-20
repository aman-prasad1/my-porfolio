'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function AnimatedBackground() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Dimensions
    let width = window.innerWidth;
    let height = window.innerHeight;

    // Scene
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0b0a09, 0.008);

    // Camera
    const camera = new THREE.PerspectiveCamera(60, width / height, 1, 1000);
    camera.position.set(0, 50, 120);
    camera.lookAt(0, 0, 0);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // Generate circular soft glow texture dynamically
    const createParticleTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 32;
      canvas.height = 32;
      const ctx = canvas.getContext('2d');
      const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
      gradient.addColorStop(0.3, 'rgba(255, 255, 255, 0.8)');
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 32, 32);
      return new THREE.CanvasTexture(canvas);
    };

    const particleTexture = createParticleTexture();

    // Sand Dune Wave particles
    const numParticlesX = 110;
    const numParticlesY = 110;
    const count = numParticlesX * numParticlesY;

    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    // Color definitions
    const colorGold = new THREE.Color(0xd4b48d); // #d4b48d
    const colorTeal = new THREE.Color(0x7faea6); // #7faea6
    const colorBg = new THREE.Color(0x13110f); // dark shadow tones

    // Initialize positions and grid coordinates
    let index = 0;
    for (let x = 0; x < numParticlesX; x++) {
      for (let y = 0; y < numParticlesY; y++) {
        // Center the grid around origin
        const px = (x - numParticlesX / 2) * 2.8;
        const py = 0; // Starts flat, will wave in animation
        const pz = (y - numParticlesY / 2) * 2.8;

        positions[index * 3] = px;
        positions[index * 3 + 1] = py;
        positions[index * 3 + 2] = pz;

        // Mix colors based on spatial distribution (diagonal blend)
        const ratio = (x / numParticlesX + y / numParticlesY) / 2;
        const mixedColor = new THREE.Color().copy(colorGold).lerp(colorTeal, ratio);

        colors[index * 3] = mixedColor.r;
        colors[index * 3 + 1] = mixedColor.g;
        colors[index * 3 + 2] = mixedColor.b;

        index++;
      }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Particle material
    const material = new THREE.PointsMaterial({
      size: 1.4,
      vertexColors: true,
      map: particleTexture,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    // Ambient Lighting (very soft)
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.05);
    scene.add(ambientLight);

    // Mouse interaction parameters
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (event) => {
      mouseX = (event.clientX - width / 2) * 0.04;
      mouseY = (event.clientY - height / 2) * 0.04;
    };

    window.addEventListener('mousemove', onMouseMove);

    // Resize handler
    const onWindowResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      renderer.setSize(width, height);
    };

    window.addEventListener('resize', onWindowResize);

    // Animation Loop
    let clock = new THREE.Clock();
    let frameId;

    const animate = () => {
      frameId = requestAnimationFrame(animate);

      const time = clock.getElapsedTime() * 0.4;
      const posAttr = points.geometry.attributes.position;

      // Update particle heights based on mathematical wave functions (Sand Dunes)
      let idx = 0;
      for (let x = 0; x < numParticlesX; x++) {
        for (let y = 0; y < numParticlesY; y++) {
          const px = posAttr.getX(idx);
          const pz = posAttr.getZ(idx);

          // Combination of sine and cosine waves at different frequencies to simulate natural sand ripples
          const wave1 = Math.sin(px * 0.04 + time) * Math.cos(pz * 0.04 + time) * 6.5;
          const wave2 = Math.sin(px * 0.08 - time * 0.5) * 2.2;
          const wave3 = Math.cos(pz * 0.12 + time * 0.8) * 1.5;

          const height = wave1 + wave2 + wave3;
          posAttr.setY(idx, height);

          idx++;
        }
      }
      posAttr.needsUpdate = true;

      // Smooth mouse follow parallax
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      points.rotation.y = targetX * 0.08;
      points.rotation.x = 0.1 + targetY * 0.05;

      // Rotate camera gently
      camera.position.x = Math.sin(time * 0.08) * 20;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    animate();

    // Clean up
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onWindowResize);
      
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }

      geometry.dispose();
      material.dispose();
      particleTexture.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} className="webgl-container" aria-hidden="true" />;
}
