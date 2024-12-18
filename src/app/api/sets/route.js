// import { NextResponse } from "next/server";
// import fs from "fs";

// const SETS_URL = "https://api.pokemontcg.io/v2/sets/";

// // const SETS_URL = "https://api.pokemontcg.io/v2/sets/sv4pt5"

// // export async function GET() {
// //     // const { params } = context;
// //     const res = await fetch(SETS_URL)
// //     // res.filter((set) => params.id === set.id.toString());
// //     const sets = await res.json()

// //     return NextResponse.json(sets)
// // }
// export async function POST() {
//     try {
//       // Fetch data from the Pokémon TCG API
//       const res = await fetch(SETS_URL);
//       const data = await res.json();
//       const tempSets = data["data"];
//       const jsonData = JSON.stringify(tempSets);
  
//       // Save the fetched data to a local file
//       fs.writeFileSync("sets.json", jsonData);
//       console.log("sets.json written correctly");
  
//       return NextResponse.json({ message: "Sets regenerated successfully" });
//     } catch (error) {
//       console.error("Error writing sets.json:", error);
//       return NextResponse.json(
//         { error: "Failed to regenerate sets" },
//         { status: 500 }
//       );
//     }
//   }
