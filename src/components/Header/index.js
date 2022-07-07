import Holder from "../../images/holder.svg";

export function Header() {
  return (
    <>
      <div className="bg-black text-white w-full">
        <div className="border-b border-solid border-gray-300 rounded-t flex">
          <div className="">
            <div className="ml-16 pt-14 flex pb-14 pr-16 w-6/12 border-r border-solid border-gray-300">
              <h1 className="text-4xl font-serif">CryptoTweet</h1>
              <h3 className="ml-24 text-3xl font-sans">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </h3>
            </div>
          </div>
        </div>
        <div className="border-b border-solid border-gray-300 rounded-t flex justify-between align-middle items-center pt-14 pb-14 pl-16">
          <div className="flex w-6/12 justify-between gap-14">
            <div className="flex">
              <p className="text-purple-600 mr-3 text-3xl font-serif">01</p>
              <p className="text-2xl font-sans">
                👀 Get to know the mood of the world about crypto.
              </p>
            </div>
            <div className="flex">
              <p className="text-purple-600 mr-3 text-3xl font-serif">02</p>
              <p className="text-2xl font-sans">
                🤡 Spread your moment with cryptocurrencies in 140 characters.
              </p>
            </div>
            <div className="flex">
              <p className="text-purple-600 mr-3 text-3xl font-serif">03</p>
              <p className="text-2xl font-sans">
                ✨ Use CryptoTweet's thermometer to guide your next trade.
              </p>
            </div>
          </div>
          <div className="flex pr-52">
            <img src={Holder} alt="holder" className="h-48 animate-spin" />
          </div>
        </div>
      </div>
    </>
  );
}
