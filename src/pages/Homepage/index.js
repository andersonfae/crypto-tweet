import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { Cards } from "../../components/Cards";
import Modal from "../../components/ModalCreate/Modal";
import { Footer } from "../../components/Footer";

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
      <div className="bg-black text-white w-full">
        <div className="border-b border-solid border-gray-300 rounded-t">
          <h1>CryptoTweet</h1>
          <h3>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </h3>
        </div>
        <div className="border-b border-solid border-gray-300 rounded-t flex my-3.5">
          <div className="flex">
            <p className="text-purple-600">1</p>
            <p>Get to know the mood of the world about crypto.</p>
          </div>
          <div className="flex">
            <p className="text-purple-600">2</p>
            <p>Spread your moment with cryptocurrencies in 140 characters.</p>
          </div>
          <div className="flex">
            <p className="text-purple-600">3</p>
            <p>Use CryptoTweet's thermometer to guide your next trade.</p>
          </div>
        </div>

        <div className="fixed bottom-14 right-14 App flex items-center ">
          <Modal />
        </div>
        <div className="flex justify-between">
          <h2>{tweet.length} Crypto Stories</h2>
          <p>The latest sharing about profits and losses in crypto.</p>
        </div>
        <div className="flex">
          {tweet.map((currentTweet) => {
            return (
              <div className="flex-row" rows="4" cols="50">
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
      <Footer />
    </>
  );
}
