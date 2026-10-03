import Link from "next/link";

export default function NotFound() {
  return (
    <main style={{
      minHeight: "100vh",
      display: "grid",
      placeItems: "center",
      padding: "40px",
      textAlign: "center"
    }}>
      <div>
        <p style={{fontFamily:"monospace", letterSpacing:"0.15em"}}>404</p>
        <h1>Page not found</h1>
        <p>The page you are looking for does not exist.</p>
        <Link href="/">Back to portfolio</Link>
      </div>
    </main>
  );
}
