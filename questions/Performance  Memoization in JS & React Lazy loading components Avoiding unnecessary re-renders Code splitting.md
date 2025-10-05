Performance deep-dive with 10/10 difficulty questions + answers covering:
• Memoization (JS & React)
• Lazy loading components
• Avoiding unnecessary re-renders
• Code splitting

⸻

🔥 React & JS Performance: Hardest Questions with Answers

⸻

1. Memoization (JS & React)

Q1:

What’s the difference between memoization in plain JavaScript (\_.memoize or custom) and React’s useMemo?

Answer:
• JS Memoization (e.g., Lodash memoize):
• Caches function results for given inputs.
• Global or closure-based cache, independent of React lifecycle.
• Example:

```javascript
function memoize(fn) {
  const cache = new Map();
  return function (x) {
    console.log(cache);
    if (cache.has(x)) return cache.get(x);
    const res = fn(x);
    cache.set(x, res);
    return res;
  };
}
```

    •	React useMemo:
    •	Caches values inside a component across renders.
    •	Invalidated when dependency array changes.
    •	Example:

const expensive = useMemo(() => compute(data), [data]);

⚡ Key difference: JS memoization persists outside React, while useMemo is scoped to a component’s lifecycle.

⸻

Q2:

Why might useMemo sometimes worsen performance instead of helping?

Answer:
• useMemo itself runs the memoization check (deps comparison) on every render.
• If the function is cheap, the overhead of memoization is more expensive than recomputing.
• Best practice: Use useMemo only for expensive calculations (loops, sorting, parsing).

⸻

Q3:

What subtle bug exists in this code?

const App = ({ user }) => {
const profile = useMemo(() => ({ name: user.name }), []);
return <Child profile={profile} />;
};

Answer:
• profile never updates because dependency array is [].
• Even if user changes, React will reuse the first object.
• Fix:

const profile = useMemo(() => ({ name: user.name }), [user.name]);

⸻

2. Lazy Loading Components

Q4:

How does React.lazy work under the hood, and why must it be used with Suspense?

Answer:
• React.lazy dynamically imports a component (import() returns a Promise).
• Until the Promise resolves, React doesn’t have a valid component → throws a “suspension.”
• Suspense catches that suspension and renders a fallback UI until resolution.
• Example:

const Chart = React.lazy(() => import('./Chart'));

<Suspense fallback={<Spinner />}>
<Chart />
</Suspense>

⸻

Q5:

What happens if you try to lazy-load a component without Suspense?

Answer:

React throws an error:

Error: A component suspended while rendering, but no fallback UI was specified.

Because lazy loading suspends, and React requires a fallback boundary to handle it.

⸻

Q6:

Why is lazy-loading routes usually more effective than lazy-loading individual buttons or widgets?

Answer:
• Route-level code is larger and less frequently needed (non-landing pages).
• Lazy-loading tiny components introduces unnecessary async overhead + multiple network requests.
• Best practice: Lazy-load large, infrequent chunks (routes, dashboards), not micro-components.

⸻

3. Avoiding Unnecessary Re-renders

Q7:

Why might React.memo not prevent re-renders even when props seem unchanged?

Answer:
• React.memo does shallow comparison of props.
• If a new object/array/function reference is passed each render → re-render happens.
• Example:

<Child data={{ name: "John" }} />

→ Always re-renders, since { name: "John" } creates a new object every time.
• Fix: Memoize props (useMemo, useCallback).

⸻

Q8:

What’s the difference between React.memo and useCallback for preventing re-renders?

Answer:
• React.memo: Prevents child re-render if props are shallowly equal.
• useCallback: Ensures function props have stable identity, so they don’t trigger re-renders in memoized children.
• They’re complementary:

const handleClick = useCallback(() => setCount(c => c+1), []);
<Child onClick={handleClick} /> // works well with React.memo(Child)

⸻

Q9:

How can context providers cause unnecessary re-renders, and how do you avoid it?

Answer:
• Every time a context value changes, all consumers re-render, even if they don’t use that part of the value.
• Example:

<ThemeContext.Provider value={{ color, size }}>

If only color changes, components that only use size still re-render.
• Fixes:
• Split contexts (ColorContext, SizeContext).
• Use memoized values (useMemo for provider value).
• Libraries like use-context-selector to avoid blanket re-renders.

⸻

4. Code Splitting

Q10:

What’s the difference between dynamic import-based code splitting and webpack bundle splitting?

Answer:
• Dynamic imports (import()):
• Explicitly load code at runtime.
• Creates a separate chunk (vendors~Chart.js).
• Useful for on-demand loading.
• Webpack splitting (via SplitChunksPlugin or optimization.splitChunks):
• Splits common dependencies (like react, lodash) into shared bundles.
• Improves caching (vendor code reused across pages).

⚡ Best practice: Combine both — use dynamic imports for route-based splitting and let Webpack handle vendor splitting automatically.

⸻

✅ That’s 10 advanced performance questions + answers.

Would you like me to also prepare real-world debugging challenges (e.g., “This component re-renders too much — find the cause & fix it”) so you can practice performance troubleshooting?
