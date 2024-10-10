import { JobFilter } from "./components/JobFilter";
import JobPosting from "./components/JobPosting";

function App() {
  return (
    <div className="min-h-dvh job-filter bg-light-grayish-cyan-bg">
      <header
        className="bg-header bg-desaturated-dark-cyan"
        aria-hidden
      ></header>
      <main>
        <JobFilter />
        <JobPosting />
      </main>
    </div>
  );
}

export default App;
