type ButtonProps = {
  text: string;
  variant: "primary" | "secondary";
};

export default function Button({ text, variant }: ButtonProps) {
  const baseStyle =
    "rounded-lg px-6 py-3 text-lg transition";

  const primaryStyle =
    "bg-blue-600 text-white hover:bg-blue-700";

  const secondaryStyle =
    "border border-slate-600 text-white hover:bg-slate-800";

  return (
    <button
      className={`${baseStyle} ${
        variant === "primary"
          ? primaryStyle
          : secondaryStyle
      }`}
    >
      {text}
    </button>
  );
}