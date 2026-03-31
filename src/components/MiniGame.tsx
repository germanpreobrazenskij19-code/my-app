import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Coffee, Play, RotateCcw, Trophy } from "lucide-react";

type GameState = "idle" | "playing" | "finished";

interface Bean {
  x: number;
  y: number;
  speed: number;
  radius: number;
  rotation: number;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  color: string;
  size: number;
}

const GAME_DURATION = 30;
const CUP_WIDTH = 70;
const CUP_HEIGHT = 45;
const BEAN_RADIUS = 10;
const SPAWN_INTERVAL = 550;

function getMotivation(score: number): string {
  if (score < 10) return "Попробуйте ещё!";
  if (score <= 20) return "Неплохо!";
  return "Мастер кофе!";
}

function ConfettiPiece({ index }: { index: number }) {
  const colors = ["#FF8F00", "#FFB300", "#FFD54F", "#8D6E63", "#6D4C41"];
  const color = colors[index % colors.length];
  const left = Math.random() * 100;
  const delay = Math.random() * 0.5;
  const duration = 1.5 + Math.random() * 1.5;

  return (
    <motion.div
      initial={{ y: -10, x: 0, opacity: 1, rotate: 0 }}
      animate={{ y: 400, x: (Math.random() - 0.5) * 100, opacity: 0, rotate: 720 }}
      transition={{ duration, delay, ease: "easeIn" }}
      className="absolute w-2.5 h-2.5 rounded-sm"
      style={{ left: `${left}%`, backgroundColor: color }}
    />
  );
}

export default function MiniGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const beansRef = useRef<Bean[]>([]);
  const particlesRef = useRef<Particle[]>([]);
  const cupXRef = useRef(0);
  const scoreRef = useRef(0);
  const comboRef = useRef(0);
  const lastSpawnRef = useRef(0);
  const startTimeRef = useRef(0);
  const missedRef = useRef(false);
  const shakeTimeRef = useRef(0);

  const [gameState, setGameState] = useState<GameState>("idle");
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [timeLeft, setTimeLeft] = useState(GAME_DURATION);
  const [shake, setShake] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const getCanvasSize = useCallback(() => {
    const container = containerRef.current;
    if (!container) return { w: 400, h: 400 };
    const w = Math.min(container.clientWidth, 600);
    const h = Math.round(w * 0.75);
    return { w, h };
  }, []);

  const spawnParticles = useCallback((x: number, y: number, count: number) => {
    const colors = ["#FF8F00", "#FFB300", "#FFD54F", "#6D4C41"];
    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count + Math.random() * 0.5;
      particlesRef.current.push({
        x,
        y,
        vx: Math.cos(angle) * (2 + Math.random() * 3),
        vy: Math.sin(angle) * (2 + Math.random() * 3) - 2,
        life: 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: 2 + Math.random() * 3,
      });
    }
  }, []);

  const drawCup = useCallback((ctx: CanvasRenderingContext2D, x: number, h: number) => {
    const y = h - 10;

    ctx.save();
    ctx.globalAlpha = 0.3;
    for (let i = 0; i < 3; i++) {
      const waveOffset = Math.sin(Date.now() / 400 + i * 1.2) * 3;
      ctx.beginPath();
      ctx.moveTo(x - 12 + i * 8, y - CUP_HEIGHT - 8 - i * 6 + waveOffset);
      ctx.quadraticCurveTo(
        x - 8 + i * 8,
        y - CUP_HEIGHT - 18 - i * 6 + waveOffset,
        x - 4 + i * 8,
        y - CUP_HEIGHT - 8 - i * 6 + waveOffset
      );
      ctx.strokeStyle = "#D7CCC8";
      ctx.lineWidth = 1.5;
      ctx.stroke();
    }
    ctx.restore();

    ctx.fillStyle = "#FF8F00";
    ctx.beginPath();
    ctx.moveTo(x - CUP_WIDTH / 2, y - CUP_HEIGHT);
    ctx.lineTo(x - CUP_WIDTH / 2 + 8, y);
    ctx.lineTo(x + CUP_WIDTH / 2 - 8, y);
    ctx.lineTo(x + CUP_WIDTH / 2, y - CUP_HEIGHT);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = "#FFB300";
    ctx.beginPath();
    ctx.ellipse(x, y - CUP_HEIGHT, CUP_WIDTH / 2, 8, 0, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = "#5D4037";
    ctx.beginPath();
    ctx.ellipse(x, y - CUP_HEIGHT, CUP_WIDTH / 2 - 5, 5, 0, 0, Math.PI * 2);
    ctx.fill();

    ctx.strokeStyle = "#3E2723";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(x - CUP_WIDTH / 2, y - CUP_HEIGHT);
    ctx.lineTo(x - CUP_WIDTH / 2 + 8, y);
    ctx.moveTo(x + CUP_WIDTH / 2, y - CUP_HEIGHT);
    ctx.lineTo(x + CUP_WIDTH / 2 - 8, y);
    ctx.stroke();
  }, []);

  const drawBean = useCallback((ctx: CanvasRenderingContext2D, bean: Bean) => {
    ctx.save();
    ctx.translate(bean.x, bean.y);
    ctx.rotate(bean.rotation);
    ctx.scale(1, 1.4);

    ctx.shadowColor = "rgba(62, 39, 35, 0.3)";
    ctx.shadowBlur = 6;
    ctx.shadowOffsetY = 3;

    ctx.beginPath();
    ctx.arc(0, 0, bean.radius, 0, Math.PI * 2);
    ctx.fillStyle = "#6D4C41";
    ctx.fill();
    ctx.strokeStyle = "#3E2723";
    ctx.lineWidth = 1.5;
    ctx.stroke();

    ctx.shadowColor = "transparent";

    ctx.restore();

    ctx.save();
    ctx.translate(bean.x, bean.y);
    ctx.rotate(bean.rotation);
    ctx.strokeStyle = "#3E2723";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, -bean.radius * 1.2);
    ctx.lineTo(0, bean.radius * 1.2);
    ctx.stroke();
    ctx.restore();
  }, []);

  const gameLoop = useCallback((timestamp: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const { w, h } = getCanvasSize();
    canvas.width = w;
    canvas.height = h;

    const elapsed = (timestamp - startTimeRef.current) / 1000;
    const remaining = Math.max(0, GAME_DURATION - elapsed);
    setTimeLeft(Math.ceil(remaining));

    if (remaining <= 0) {
      setScore(scoreRef.current);
      setCombo(comboRef.current);
      setGameState("finished");
      if (scoreRef.current > 20) setShowConfetti(true);
      return;
    }

    if (timestamp - lastSpawnRef.current > SPAWN_INTERVAL) {
      beansRef.current.push({
        x: Math.random() * (w - 40) + 20,
        y: -20,
        speed: 2 + Math.random() * 3,
        radius: BEAN_RADIUS,
        rotation: Math.random() * Math.PI * 2,
      });
      lastSpawnRef.current = timestamp;
    }

    if (shakeTimeRef.current > 0) {
      shakeTimeRef.current -= 16;
      const shakeX = (Math.random() - 0.5) * 4;
      const shakeY = (Math.random() - 0.5) * 4;
      ctx.setTransform(1, 0, 0, 1, shakeX, shakeY);
    }

    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = "#F5E6C8";
    ctx.fillRect(0, 0, w, h);

    const cupY = h - 10;
    const nextBeans: Bean[] = [];
    for (const bean of beansRef.current) {
      bean.y += bean.speed;
      bean.rotation += 0.02;

      const inCupX =
        bean.x > cupXRef.current - CUP_WIDTH / 2 &&
        bean.x < cupXRef.current + CUP_WIDTH / 2;
      const inCupY =
        bean.y + bean.radius * 1.4 >= cupY - CUP_HEIGHT &&
        bean.y + bean.radius * 1.4 <= cupY;

      if (inCupX && inCupY) {
        comboRef.current += 1;
        const comboBonus = comboRef.current >= 3 ? 2 : 1;
        scoreRef.current += comboBonus;
        setScore(scoreRef.current);
        setCombo(comboRef.current);
        spawnParticles(bean.x, bean.y, 8 + comboRef.current * 2);
        continue;
      }

      if (bean.y - bean.radius * 1.4 > h) {
        comboRef.current = 0;
        setCombo(0);
        shakeTimeRef.current = 200;
        continue;
      }

      nextBeans.push(bean);
    }
    beansRef.current = nextBeans;

    const nextParticles: Particle[] = [];
    for (const p of particlesRef.current) {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.1;
      p.life -= 0.025;
      if (p.life > 0) {
        ctx.globalAlpha = p.life;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        nextParticles.push(p);
      }
    }
    ctx.globalAlpha = 1;
    particlesRef.current = nextParticles;

    for (const bean of beansRef.current) {
      drawBean(ctx, bean);
    }

    drawCup(ctx, cupXRef.current, h);

    const progressW = w - 40;
    const progressFrac = remaining / GAME_DURATION;
    ctx.fillStyle = "rgba(62, 39, 35, 0.2)";
    ctx.beginPath();
    ctx.roundRect(20, 10, progressW, 8, 4);
    ctx.fill();

    const barColor = progressFrac > 0.3 ? "#FF8F00" : "#ef4444";
    ctx.fillStyle = barColor;
    ctx.beginPath();
    ctx.roundRect(20, 10, progressW * progressFrac, 8, 4);
    ctx.fill();

    if (comboRef.current >= 3) {
      ctx.save();
      ctx.font = "bold 16px Inter";
      ctx.fillStyle = "#FF8F00";
      ctx.textAlign = "center";
      ctx.fillText(`x${comboRef.current} COMBO!`, w / 2, 40);
      ctx.restore();
    }

    ctx.setTransform(1, 0, 0, 1, 0, 0);

    rafRef.current = requestAnimationFrame(gameLoop);
  }, [getCanvasSize, drawBean, drawCup, spawnParticles]);

  const startGame = useCallback(() => {
    const { w } = getCanvasSize();
    cupXRef.current = w / 2;
    scoreRef.current = 0;
    comboRef.current = 0;
    beansRef.current = [];
    particlesRef.current = [];
    lastSpawnRef.current = 0;
    shakeTimeRef.current = 0;
    setScore(0);
    setCombo(0);
    setTimeLeft(GAME_DURATION);
    setShowConfetti(false);
    setGameState("playing");
  }, [getCanvasSize]);

  useEffect(() => {
    if (gameState !== "playing") return;

    startTimeRef.current = performance.now();
    rafRef.current = requestAnimationFrame(gameLoop);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [gameState, gameLoop]);

  const handlePointerMove = useCallback(
    (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
      const canvas = canvasRef.current;
      if (!canvas || gameState !== "playing") return;
      const rect = canvas.getBoundingClientRect();
      const clientX =
        "touches" in e ? e.touches[0].clientX : e.clientX;
      cupXRef.current = ((clientX - rect.left) / rect.width) * canvas.width;
    },
    [gameState]
  );

  return (
    <section className="py-20 sm:py-28 bg-espresso relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle, #FFB300 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="text-amber-accent font-medium tracking-[0.2em] uppercase text-sm mb-3">
            Мини-игра
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-cream">
            Поймай зёрна
          </h2>
        </motion.div>

        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-[600px] mx-auto"
        >
          {gameState === "idle" && (
            <div className="bg-coffee/30 backdrop-blur-sm border border-coffee-light/20 rounded-2xl p-10 text-center hover:border-amber-accent/20 transition-colors duration-500">
              <div className="w-20 h-20 bg-amber-accent/20 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-glow">
                <Coffee className="w-10 h-10 text-amber-accent" />
              </div>
              <p className="text-cream/70 mb-2 text-lg">
                Двигайте чашку мышкой или пальцем
              </p>
              <p className="text-cream/50 mb-2 text-sm">
                Ловите падающие кофейные зёрна за 30 секунд!
              </p>
              <p className="text-amber-accent/60 mb-8 text-xs">
                Серия ловлей = COMBO множитель!
              </p>
              <button
                onClick={startGame}
                className="inline-flex items-center gap-2 bg-amber-accent hover:bg-amber-light text-espresso px-8 py-3.5 rounded-full font-semibold transition-all duration-300 text-lg hover:scale-105 hover:shadow-lg hover:shadow-amber-accent/25"
              >
                <Play className="w-5 h-5" />
                Играть
              </button>
            </div>
          )}

          {gameState === "playing" && (
            <div>
              <div className="flex items-center justify-between mb-4 px-1">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-amber-accent" />
                    <span className="text-cream font-bold text-xl">{score}</span>
                  </div>
                  {combo >= 3 && (
                    <motion.span
                      key={combo}
                      initial={{ scale: 1.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="text-amber-accent font-bold text-sm bg-amber-accent/20 px-2 py-0.5 rounded-full"
                    >
                      x{combo}
                    </motion.span>
                  )}
                </div>
                <div className="text-cream/70 font-medium text-lg">
                  {timeLeft} сек
                </div>
              </div>
              <canvas
                ref={canvasRef}
                onMouseMove={handlePointerMove}
                onTouchMove={handlePointerMove}
                className="w-full rounded-2xl cursor-none touch-none shadow-2xl"
                style={{ aspectRatio: "4/3" }}
              />
            </div>
          )}

          {gameState === "finished" && (
            <div className="bg-coffee/30 backdrop-blur-sm border border-coffee-light/20 rounded-2xl p-10 text-center relative overflow-hidden">
              {showConfetti && (
                <div className="absolute inset-0 pointer-events-none">
                  {Array.from({ length: 30 }).map((_, i) => (
                    <ConfettiPiece key={i} index={i} />
                  ))}
                </div>
              )}
              <div className="relative">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", duration: 0.8 }}
                  className="w-20 h-20 bg-amber-accent/20 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <Trophy className="w-10 h-10 text-amber-accent" />
                </motion.div>
                <motion.p
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3, type: "spring" }}
                  className="font-display text-5xl font-bold text-amber-accent mb-2"
                >
                  {score}
                </motion.p>
                <p className="text-cream/50 text-sm mb-1">зёрен поймано</p>
                <p className="text-cream text-xl font-semibold mb-8">
                  {getMotivation(score)}
                </p>
                <button
                  onClick={startGame}
                  className="inline-flex items-center gap-2 bg-amber-accent hover:bg-amber-light text-espresso px-8 py-3.5 rounded-full font-semibold transition-all duration-300 text-lg hover:scale-105 hover:shadow-lg hover:shadow-amber-accent/25"
                >
                  <RotateCcw className="w-5 h-5" />
                  Ещё раз
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}