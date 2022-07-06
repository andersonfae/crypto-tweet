import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { Cards } from "../../components/Cards";
import Modal from "../../components/ModalCreate/Modal";

export function Homepage() {
  const [tweet, setTweet] = useState([]);

  const [showModal, setShowModal] = useState(false);

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
      <div className="bg-black text-white">
        <div>
          <h1>CryptoTweet</h1>
          <h3>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </h3>
        </div>
        <div className="">
          <p className="text-purple-600">1</p>
          <p>Get to know the mood of the world about crypto.</p>
          <p className="text-purple-600">2</p>
          <p>Spread your moment with cryptocurrencies in 140 characters.</p>
          <p className="text-purple-600">3</p>
          <p>Use CryptoTweet's thermometer to guide your next trade.</p>
        </div>

        <div className="App h-screen flex flex-col items-center justify-center">
          <Modal />
        </div>

        <h2>Community Tweet</h2>

        {tweet.map((currentMovie) => {
          return <Cards owner={currentMovie.owner} id={currentMovie._id} />;
        })}
      </div>
    </>
  );
}
