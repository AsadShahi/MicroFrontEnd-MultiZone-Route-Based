export default function HomePage() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Main Shell (Host)</h1>
      <p>The host is running. Use the links below to access Micro Frontends:</p>
      <ul>
        <li><a className="bg-red" href="/auth/login">Login (Auth MFE)</a></li>
        <li><a href="/search">Search (Search MFE)</a></li>
      </ul>
    </div>
  );
}
