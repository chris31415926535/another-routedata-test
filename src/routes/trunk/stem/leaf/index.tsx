import { RouteDataArgs, createRouteData, useRouteData } from "solid-start"
import { createServerData$ } from "solid-start/server";

export function routeData({ data }: RouteDataArgs) {

    console.log("Inside /leaf/index.tsx's routeData()")
    console.log("Value of {data} : RouteDataArgs :")
    console.log(data)

    const leafData = createServerData$(async () => {
        return "leaf"
    })
    return { leafData };
}

const Root = () => {
    const data = useRouteData();

    console.log("leaf/index.tsx : value of data = useRouteData();")
    console.log(data)

    return (
        <>
            <h2>leaf/index.tsx</h2>
            <p>Object.keys(data) = {Object.keys(data)}</p>
            <p>Only leafData is included here. This is <em>not</em> expected. The expected behaviour is for it to also include trunkData <em>and</em> stemData from higher up the route.</p>
            <p>In addition, console and server logs show that inside the routeData() function, the destructed value &#123; data &#125; is undefined. This is <em>not</em> expeced.</p>
        </>)
}

export default Root;