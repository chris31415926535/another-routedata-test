
export default function Home() {

  console.log("index.tsx")

  return (
    <main>
      <h1>WHAT IS HAPPENING?</h1>

      <h3>Data flow through solidstart's file-based routing doesn't work the way it (appears to be) documented.</h3>

      <p>Following the instructions <a href="https://start.solidjs.com/api/useRouteData">here</a> and
        <a href="https://start.solidjs.com/core-concepts/data-loading">here</a>, and spending several hours trying
        different permutations, I've been unable to get it to work.</p>

      <p><em>Expected behaviour:</em> As we move from stem to leaf down the route, useRouteData() should provide lower routes
        with access to data defined at higher routes.</p>

      <p><em>Observed behaviour:</em> Lower routes do not have access to data from higher routes. In addition, inside a lower route's
        routeData(&#123;data&#125;: RouteDataArgs)&#123; &#125;, the destructured value of data is undefined, suggesting that lower routes are indeed not
        able to access data from higher routes.</p>
    </main>
  );
}
