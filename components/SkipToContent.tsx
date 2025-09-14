export default function SkipToContent() {
  return (
    <a
      href="#content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 bg-navy text-white px-4 py-2 rounded-xl"
    >
      Aller au contenu
    </a>
  );
}
