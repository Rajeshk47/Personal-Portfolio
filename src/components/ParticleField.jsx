import { useEffect, useRef } from 'react'

export default function ParticleField() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animId
    let W = canvas.width = window.innerWidth
    let H = canvas.height = window.innerHeight

    const particles = Array.from({ length: 80 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      r: Math.random() * 1.5 + 0.3,
      alpha: Math.random() * 0.4 + 0.05,
    }))

    const mouse = { x: W / 2, y: H / 2 }
    const onMouse = (e) => { mouse.x = e.clientX; mouse.y = e.clientY }
    window.addEventListener('mousemove', onMouse)

    const onResize = () => {
      W = canvas.width = window.innerWidth
      H = canvas.height = window.innerHeight
    }
    window.addEventListener('resize', onResize)

    function draw() {
      ctx.clearRect(0, 0, W, H)

      // connect nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d < 120) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(79,142,247,${0.08 * (1 - d / 120)})`
            ctx.lineWidth = 0.5
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }

      particles.forEach(p => {
        // subtle mouse attraction
        const dx = mouse.x - p.x
        const dy = mouse.y - p.y
        const d = Math.sqrt(dx * dx + dy * dy)
        if (d < 200) {
          p.vx += dx / d * 0.008
          p.vy += dy / d * 0.008
        }
        // speed limit
        const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy)
        if (speed > 0.8) { p.vx *= 0.8 / speed; p.vy *= 0.8 / speed }

        p.x += p.vx; p.y += p.vy
        if (p.x < 0) p.x = W; if (p.x > W) p.x = 0
        if (p.y < 0) p.y = H; if (p.y > H) p.y = 0

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(79,142,247,${p.alpha})`
        ctx.fill()
      })

      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('mousemove', onMouse)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute', inset: 0,
        pointerEvents: 'none', opacity: 0.6, zIndex: 0,
      }}
    />
  )
}
