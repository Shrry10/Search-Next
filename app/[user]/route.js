// "use client"
// import { useState } from "react";

// export default function handler(req, res) {
//   const user = req.body;

//   const [totalMatch, setTotalMatch] = useState(0);
//   const [result, setResult] = useState([]);
//   const check = (name) => {
//     let newResult = [];
//     let newTotalMatch = 0;
//     NameList.map((n) => {
//       if (n.toLowerCase().includes(name.toLowerCase())) {
//         newTotalMatch++;
//         newResult.push(n);
//       }
//     });
//     setResult(newResult);
//     setTotalMatch(newTotalMatch);
//   };

//   check(user);
//   if (req.method === "PUT") {
//     res.status(200).json({ message: "Fetching users" , count: totalMatch, body: result});
//   } else {
//     res.status(405).json({ message: "Method not allowed" });
//   }
// }

// import { nameList } from "./List";

// export async function GET({ params }) {
//     console.log("ok");
//     return Response.json(nameList);
// }


import { nameList } from "../List";

export async function GET(req) {
    console.log("ok");
    let entry = req.url.split('/').pop();
    const name = [];
    nameList.map((n) => {
        if(n.username.toLowerCase().includes(entry.toLowerCase())) {
            name.push(n);
        }
    })
    return Response.json(name);
}

// import { nameList } from "../List";

// export async function GET({params}) {
//     console.log("ok");
//     const name = [];
//     nameList.map((n) => {
//         if(n.username.toLowerCase().includes(params.user.toLowerCase())) {
//             name.push(n);
//         }
//     })
//     return Response.json(name);
// }
