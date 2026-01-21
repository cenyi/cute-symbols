/**
 * Dribbble 风格交互效果
 * 2026年最新微交互设计
 * 移动端优化 + 性能优化
 */

/**
 * 粒子爆炸效果
 * 复制成功时触发
 */
export function createParticleExplosion(x: number, y: number) {
  const particleCount = 12;
  const colors = ['#ff6b9d', '#ffa07a', '#ffb347', '#ff6b6b', '#ffd700'];

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    const angle = (i / particleCount) * Math.PI * 2;
    const velocity = 80 + Math.random() * 60;
    const size = 6 + Math.random() * 6;

    particle.style.cssText = `
      position: fixed;
      left: ${x}px;
      top: ${y}px;
      width: ${size}px;
      height: ${size}px;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      border-radius: 50%;
      pointer-events: none;
      z-index: 9999;
      transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    `;

    document.body.appendChild(particle);

    requestAnimationFrame(() => {
      particle.style.transform = `translate(
        ${Math.cos(angle) * velocity}px,
        ${Math.sin(angle) * velocity}px
      ) scale(0)`;
      particle.style.opacity = '0';
    });

    setTimeout(() => particle.remove(), 600);
  }
}

/**
 * 3D 卡片倾斜效果
 * 跟随鼠标/触摸移动
 */
export function initTiltEffect() {
  const cards = document.querySelectorAll('.tilt-card');

  cards.forEach((card) => {
    const htmlCard = card as HTMLElement;

    // 桌面端：鼠标移动
    htmlCard.addEventListener('mousemove', (e: Event) => {
      const mouseEvent = e as MouseEvent;
      const rect = htmlCard.getBoundingClientRect();
      const x = mouseEvent.clientX - rect.left;
      const y = mouseEvent.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (y - centerY) / 15;
      const rotateY = (centerX - x) / 15;

      htmlCard.style.transform = `
        perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        scale3d(1.05, 1.05, 1.05)
      `;
    });

    htmlCard.addEventListener('mouseleave', () => {
      htmlCard.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    });

    // 移动端：触摸移动
    htmlCard.addEventListener('touchmove', (e: Event) => {
      const touchEvent = e as TouchEvent;
      const touch = touchEvent.touches[0];
      const rect = htmlCard.getBoundingClientRect();
      const x = touch.clientX - rect.left;
      const y = touch.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;

      htmlCard.style.transform = `
        perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        scale3d(1.02, 1.02, 1.02)
      `;
    }, { passive: true });

    htmlCard.addEventListener('touchend', () => {
      htmlCard.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    });
  });
}

/**
 * 符号浮动动画
 * 给符号元素添加随机延迟的浮动效果
 */
export function initFloatingAnimation() {
  const symbols = document.querySelectorAll('.floating-symbol');

  symbols.forEach((symbol, index) => {
    const delay = (index * 0.15) % 3; // 0-3秒的随机延迟
    (symbol as HTMLElement).style.animationDelay = `${delay}s`;
  });
}

/**
 * 磁性按钮效果
 * 按钮被鼠标"吸引"
 */
export function initMagneticButtons() {
  const buttons = document.querySelectorAll('.magnetic-btn');

  buttons.forEach((btn) => {
    const htmlBtn = btn as HTMLElement;

    htmlBtn.addEventListener('mousemove', (e: Event) => {
      const mouseEvent = e as MouseEvent;
      const rect = htmlBtn.getBoundingClientRect();
      const x = mouseEvent.clientX - rect.left - rect.width / 2;
      const y = mouseEvent.clientY - rect.top - rect.height / 2;

      htmlBtn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
    });

    htmlBtn.addEventListener('mouseleave', () => {
      htmlBtn.style.transform = 'translate(0, 0)';
    });
  });
}

/**
 * 波浪背景效果
 * 为页面添加动态波浪渐变
 */
export function initWaveBackground() {
  const existing = document.querySelector('.wave-bg');
  if (existing) return;

  const wave = document.createElement('div');
  wave.className = 'wave-bg';
  wave.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: -1;
    background: radial-gradient(
      circle at 50% 50%,
      rgba(255, 107, 157, 0.03) 0%,
      transparent 50%
    );
    animation: wavePulse 8s ease-in-out infinite;
  `;

  document.body.prepend(wave);

  // 添加动画样式
  const style = document.createElement('style');
  style.textContent = `
    @keyframes wavePulse {
      0%, 100% {
        transform: translate(0, 0) scale(1);
        opacity: 0.5;
      }
      25% {
        transform: translate(5%, 5%) scale(1.1);
        opacity: 0.7;
      }
      50% {
        transform: translate(-5%, 10%) scale(0.9);
        opacity: 0.3;
      }
      75% {
        transform: translate(10%, -5%) scale(1.05);
        opacity: 0.6;
      }
    }
  `;
  document.head.appendChild(style);
}

/**
 * 霓虹发光效果
 * 悬停时符号发光
 */
export function initNeonGlow() {
  const elements = document.querySelectorAll('.neon-glow');

  elements.forEach(el => {
    el.addEventListener('mouseenter', () => {
      (el as HTMLElement).style.textShadow = `
        0 0 7px rgba(255, 107, 157, 0.8),
        0 0 10px rgba(255, 107, 157, 0.6),
        0 0 21px rgba(255, 107, 157, 0.6),
        0 0 42px rgba(255, 107, 157, 0.6),
        0 0 82px rgba(255, 107, 157, 0.5)
      `;
    });

    el.addEventListener('mouseleave', () => {
      (el as HTMLElement).style.textShadow = 'none';
    });
  });
}

/**
 * 触觉反馈（如果设备支持）
 * @param intensity - 强度 (weak, medium)
 */
export function triggerHapticFeedback(intensity: 'weak' | 'medium' = 'medium') {
  if ('vibrate' in navigator) {
    const duration = intensity === 'weak' ? 10 : 20;
    navigator.vibrate(duration);
  }
}

/**
 * 复制成功反馈
 * 组合效果：粒子 + 触觉 + 音效（可选）
 */
export function showCopySuccessFeedback(x: number, y: number) {
  // 粒子爆炸
  createParticleExplosion(x, y);

  // 触觉反馈
  triggerHapticFeedback('medium');

  // 可选：播放清脆的音效
  // playCopySound();
}

/**
 * 初始化所有效果
 */
export function initAllEffects() {
  // 检测是否为移动设备
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  // 初始化倾斜效果（仅桌面）
  if (!isMobile) {
    initTiltEffect();
  }

  // 初始化其他效果
  initFloatingAnimation();
  initMagneticButtons();
  initWaveBackground();
  initNeonGlow();

  // 添加性能优化
  if ('IntersectionObserver' in window) {
    // 懒加载动画
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });
  }
}

/**
 * 平滑滚动到元素
 */
export function smoothScrollTo(elementId: string) {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

/**
 * 防抖函数
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: number | null = null;

  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null;
      func(...args);
    };

    if (timeout) clearTimeout(timeout);
    timeout = window.setTimeout(later, wait);
  };
}
