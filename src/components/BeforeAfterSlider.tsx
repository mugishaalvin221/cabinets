import React, { useState } from "react";
import { motion } from "motion/react";

export function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = "touches" in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    const position = ((x - rect.left) / rect.width) * 100;
    setSliderPosition(Math.min(Math.max(position, 0), 100));
  };

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">
              Transformation
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              See the <span className="text-primary italic">Difference</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Drag the slider to see how we transform dated spaces into modern masterpieces.
            </p>
          </motion.div>
        </div>

        <div 
          className="relative max-w-5xl mx-auto aspect-video rounded-3xl overflow-hidden shadow-2xl cursor-ew-resize select-none"
          onMouseMove={handleMove}
          onTouchMove={handleMove}
        >
          {/* After Image */}
          <img
            src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=1200"
            alt="After"
            className="absolute inset-0 w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          
          {/* Before Image (Clipped) */}
          <div 
            className="absolute inset-0 w-full h-full overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <img
              src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1200"
              alt="Before"
              className="absolute inset-0 w-full h-full object-cover grayscale brightness-75"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Slider Line */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-10"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center">
              <div className="flex gap-1">
                <div className="w-1 h-4 bg-primary rounded-full" />
                <div className="w-1 h-4 bg-primary rounded-full" />
              </div>
            </div>
          </div>

          {/* Labels */}
          <div className="absolute bottom-6 left-6 z-20 bg-black/50 backdrop-blur-md px-4 py-2 rounded-lg text-white font-bold text-sm uppercase tracking-widest">
            Before
          </div>
          <div className="absolute bottom-6 right-6 z-20 bg-accent backdrop-blur-md px-4 py-2 rounded-lg text-accent-foreground font-bold text-sm uppercase tracking-widest">
            After
          </div>
        </div>
      </div>
    </section>
  );
}
