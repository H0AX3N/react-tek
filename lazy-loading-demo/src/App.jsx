import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';

const About = React.lazy(() => import('./About'));

function App() {
  return (
    <BrowserRouter>
      <nav style={{ padding: '1rem', background: '#eee' }}>
        <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
        <Link to="/about">About</Link>
      </nav>

      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;


/*

* What is Lazy Loading in React?

Lazy loading in React renders the component or webpage only when the user needs it. This can reduce the web page loading time, as the entire webpage will not be loaded when initial rendering takes place; instead, only the necessary components will be loaded.

*/

/*

* Why Lazy load in React?

In large React apps, all the code is usually bundled into one big JavaScript file. This means when a user opens your site, the browser has to download everything—even the parts the user might never visit.

This makes the initial load time slow.

Lazy loading helps solve this by using code splitting. Instead of loading everything at once, it breaks your app into smaller chunks. Only the code needed for the current page is loaded first.

The rest is loaded later, only when the user actually visits those parts.

Benefits of Lazy Loading:
1. Faster load times
2. Smaller initial bundle size
3. Improved performance

*/ 

/*

* How does lazy loading work in React?

- React.lazy()
---------------
This function tells React:

“Don't load this component right away. Wait until it’s actually needed.”

It’s used for lazy loading components (e.g., a page or a section that isn’t immediately visible).
e.g. -
const About = React.lazy(() => import('./About'));

- Suspense
-----------
Since lazy loading is asynchronous (it takes time), React needs to know what to show while waiting.

So we wrap your lazy component inside Suspense, and provide a fallback (like a loading spinner or message).
e.g.- 
<Suspense fallback={<div>Loading...</div>}>
  <About />
</Suspense>

-import()
---------
import()
Under the hood, React.lazy() uses JavaScript's built-in import() function.

e.g.- 
import About from './About';]

*/ 

/*



*/