'use client';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          fontFamily: 'system-ui, sans-serif',
          padding: '20px',
          textAlign: 'center'
        }}>
          <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Something went wrong!</h1>
          <p style={{ color: '#666', marginBottom: '1.5rem' }}>An unexpected error occurred.</p>
          <button
            onClick={() => reset()}
            style={{
              padding: '10px 20px',
              fontSize: '1rem',
              cursor: 'pointer',
              backgroundColor: '#0070f3',
              color: 'white',
              border: 'none',
              borderRadius: '5px'
            }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
