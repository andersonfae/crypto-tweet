// import axios from "axios";
// import { useEffect, useState } from "react";
// import { TrendingCoins } from "../config/api";

// export function Navbar() {

//   const [trending, setTrending] = useState([])

//   useEffect(() => {
//     async function fetchTrendingCoins() {
//       try {
//         const response = await axios.get(
//           TrendingCoins()
//         );
//         setTweet([...response.data]);
//       } catch (error) {
//         console.log(error);
//       }
//     }
//     fetchTrendingCoins();
//   }, []);

//   return (
//   <>
//   <div className="2xl:container 2xl:mx-auto 2xl:px-0 py-3 px-10">

//   </div>
//   </>
//   )
// }
