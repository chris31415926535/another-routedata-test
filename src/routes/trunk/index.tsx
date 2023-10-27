import { useRouteData } from "solid-start"
import { createServerData$ } from "solid-start/server";

export function routeData() {
    console.log("Inside /trunk/index.tsx's routeData()")

    const trunkData = createServerData$(async () => {
        return "trunk"
    })
    return { trunkData };
}

const Trunk = () => {
    const data = useRouteData<typeof routeData>();

    console.log("root/index.tsx : value of data = useRouteData();")
    console.log(data)

    return (
        <>
            <h2>Trunk/index.tsx</h2>
            <p>Object.keys(data) = {Object.keys(data)}</p>
            <p>Explanation: Only trunkData is included here, as expected.</p>
        </>
    )
}

export default Trunk;