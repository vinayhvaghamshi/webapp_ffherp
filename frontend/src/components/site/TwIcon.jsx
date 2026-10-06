import * as Icons from "lucide-react";

// Lucide icon by name for the Tailwind layouts — keeps them free of the
// react-bootstrap dependency that ./Trusted carries.
export default function TwIcon({ name, ...props }) {
  const C = Icons[name] || Icons.Circle;
  return <C {...props} />;
}
