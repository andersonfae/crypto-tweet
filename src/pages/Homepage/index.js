import axios from "axios";
import { useEffect, useState } from "react";
import { Cards } from "../../components/Cards";
import Modal from "../../components/ModalCreate/Modal";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

export function Homepage() {
  const [tweet, setTweet] = useState([]);

  useEffect(() => {
    async function fetchTweet() {
      try {
        const response = await axios.get(
          "https://ironrest.herokuapp.com/cryptotweet"
        );
        setTweet([...response.data]);
      } catch (error) {
        console.log(error);
      }
    }
    fetchTweet();
  }, []);

  return (
    <>
      <div className="min-h-screen bg-black">
        <div className="bg-black text-white w-full">
          <Header />

          <div className="fixed bottom-14 right-14 App flex items-center ml-16 z-10">
            <Modal />
          </div>
          <div className="flex justify-between pt-14">
            <h2 className="text-6xl pl-14 pb-14">
              <strong className="font-sans">{tweet.length}</strong>{" "}
              <span className="font-serif">Crypto Stories</span>
            </h2>
            <p className="pr-14 font-sans">
              The latest sharing about profits and losses in crypto.
            </p>
          </div>
          <div className="grid pl-14 grid-cols-4 gap-10 pr-14">
            {tweet.map((currentTweet) => {
              return (
                <div className="flex flex-wrap basis-1/5">
                  <Cards
                    owner={currentTweet.owner}
                    description={currentTweet.description}
                    id={currentTweet._id}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
