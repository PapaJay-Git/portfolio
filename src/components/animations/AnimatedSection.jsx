import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AnimatedSection = ({ children, animationSettings }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={animationSettings.initial}
      animate={inView ? animationSettings.animate : animationSettings.initial}
      transition={animationSettings.transition}
      style={animationSettings.style}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
