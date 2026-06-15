'use client';

import { useEffect, useRef } from 'react';

export default function BackgroundFX() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const progressRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const DPR = Math.min(window.devicePixelRatio || 1, 2);
        let w = 0, h = 0;
        let nodes: { x: number; y: number; vx: number; vy: number; r: number }[] = [];
        const mouse = { x: -9999, y: -9999 };
        let raf = 0;

        const build = () => {
            w = canvas.clientWidth;
            h = canvas.clientHeight;
            canvas.width = w * DPR;
            canvas.height = h * DPR;
            ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
            const N = Math.max(28, Math.min(64, Math.floor((w * h) / 22000)));
            nodes = Array.from({ length: N }, () => ({
                x: Math.random() * w,
                y: Math.random() * h,
                vx: (Math.random() - 0.5) * 0.22,
                vy: (Math.random() - 0.5) * 0.22,
                r: Math.random() * 1.5 + 0.7,
            }));
        };

        const onResize = () => build();
        const onMouse = (e: MouseEvent) => {
            const rc = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rc.left;
            mouse.y = e.clientY - rc.top;
        };

        window.addEventListener('resize', onResize);
        window.addEventListener('mousemove', onMouse, { passive: true });
        build();

        const draw = () => {
            const acc = document.documentElement.classList.contains('dark') ? '168,196,139' : '110,126,92';
            ctx.clearRect(0, 0, w, h);
            for (const n of nodes) {
                n.x += n.vx;
                n.y += n.vy;
                if (n.x < 0 || n.x > w) n.vx *= -1;
                if (n.y < 0 || n.y > h) n.vy *= -1;
                const dx = n.x - mouse.x, dy = n.y - mouse.y;
                const md = Math.sqrt(dx * dx + dy * dy);
                if (md < 130) { n.x += (dx / md) * 0.6; n.y += (dy / md) * 0.6; }
            }
            for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                    const a = nodes[i], b = nodes[j];
                    const dx = a.x - b.x, dy = a.y - b.y;
                    const d = Math.sqrt(dx * dx + dy * dy);
                    if (d < 138) {
                        ctx.strokeStyle = 'rgba(' + acc + ',' + (0.14 * (1 - d / 138)).toFixed(3) + ')';
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(a.x, a.y);
                        ctx.lineTo(b.x, b.y);
                        ctx.stroke();
                    }
                }
            }
            for (const n of nodes) {
                ctx.fillStyle = 'rgba(' + acc + ',0.55)';
                ctx.beginPath();
                ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
                ctx.fill();
            }
            raf = requestAnimationFrame(draw);
        };
        draw();

        const onScroll = () => {
            const st = window.scrollY || 0;
            const dh = document.documentElement.scrollHeight - window.innerHeight;
            if (progressRef.current) {
                progressRef.current.style.width = (dh > 0 ? (st / dh) * 100 : 0) + '%';
            }
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();

        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener('resize', onResize);
            window.removeEventListener('mousemove', onMouse);
            window.removeEventListener('scroll', onScroll);
        };
    }, []);

    return (
        <>
            <canvas
                ref={canvasRef}
                aria-hidden="true"
                className="fixed inset-0 w-full h-full z-0 pointer-events-none opacity-60"
            />
            <div
                ref={progressRef}
                className="fixed top-0 left-0 h-0.5 w-0 z-[120]"
                style={{
                    background: 'linear-gradient(90deg, var(--accent-2), var(--accent))',
                    boxShadow: '0 0 14px var(--glow)',
                }}
            />
        </>
    );
}
