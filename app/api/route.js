import { nameList } from "./List";

export async function GET({ params }) {
    console.log("ok");
    return Response.json(nameList);
}
