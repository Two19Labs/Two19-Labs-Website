import { useReveal } from '../hooks/useReveal'

// Scroll-reveal wrapper: fades + slides up once in view (transform/opacity only).
export default function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const [ref, shown] = useReveal()
  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? 'none' : 'translateY(40px)',
        transition:
          'opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1)',
        transitionDelay: `${delay}ms`,
      }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
