import Link from "next/link";

export default function NextFooter() {
  return (
    <footer className="next-footer-component-container">
      <Link href="/Page8">
        <button type="button" className="next-footer-text-bubble">
          Next
        </button>
      </Link>
    </footer>
  );
}
