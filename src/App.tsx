export function App() {
  return (
    <>
      <header>
        <h1>Hello, world</h1>
        <p>Welcome to my website!</p>
      </header>

      <main>
        <p>This is my personal blog / development website, hosted on GitHub</p>
      </main>

      <footer>
        <footer>
          <p>
            &copy; Joe Grinstead {Math.min(new Date().getFullYear(), 2024)}
            <br />
            Style modified from <a href="https://simplecss.org/">Simple.css</a>
          </p>
        </footer>
      </footer>
    </>
  );
}
