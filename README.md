# Description of issue

Data flow through solidstart's file-based routing doesn't work the way it (appears to be) documented.

# Details

Following the instructions <a href="https://start.solidjs.com/api/useRouteData">here</a> and
<a href="https://start.solidjs.com/core-concepts/data-loading">here</a>, and spending several hours trying
different permutations, I've been unable to get lower routes to access data defined in higher routes.

# Expected behaviour:

As we move from stem to leaf down the route, useRouteData() should provide lower routes
with access to data defined at higher routes.

# Observed behaviour:

Lower routes do not have access to data from higher routes. In addition, inside a lower route's
routeData(&#123;data&#125;: RouteDataArgs)&#123; &#125;, the destructured value of data is undefined, suggesting that lower routes are indeed not
able to access data from higher routes.</p>

# To reproduce the behaviour:

Clone this minimal reproducible example and run it in development mode:

```
npm i
npm run dev
```

Navigate from the pages trunk to stem to leaf, and observe logs in the developer console and output on the pages that shows that each route only has access to variables defined with itself. Lower branches have no visibility into variables defined at higher branches.
