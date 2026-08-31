import useReveal from "../hooks/useReveal.js";

export default function Reveal({ as: Tag = "div", className = "", children, threshold = 0.2 }) {
  const [ref, visible] = useReveal(threshold);
  return (
    <Tag ref={ref} className={`reveal ${visible ? "in" : ""} ${className}`}>
      {children}
    </Tag>
  );
}
