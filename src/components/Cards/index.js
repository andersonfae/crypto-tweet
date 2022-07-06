import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export function Cards(props) {
  const state = { date: new Date() };
  const { _id } = useParams();
  const navigate = useNavigate();

  async function handleDelete() {
    try {
      await axios.delete(`https://ironrest.herokuapp.com/cryptotweet/${_id}`);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div class="min-w-screen min-h-screen bg-gray-200 flex items-center justify-center px-5 py-5">
      <div
        class="w-full mx-auto rounded-lg bg-white shadow p-5 text-gray-800 max-w-[400px]"
        // style="max-width: 400px"
      >
        <div class="w-full flex mb-4">
          <div class="overflow-hidden rounded-full w-12 h-12">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/bb/Anonymous.jpg"
              alt=""
            />
          </div>
          <div class="flex-grow pl-3">
            <h6 class="font-bold text-md">{props.owner}</h6>
            <p class="text-xs text-gray-600">@joe.blow</p>
          </div>
          {/* <div class="w-12 text-right">
            <button class="px-2 text-center cursor-pointer select-none h-4 pb-2 inline-flex items-center transition-colors bg-gray-100 active:text-white active:bg-blue-600 font-medium text-gray-900  hover:bg-blue-100 disabled:opacity-50"></button>
          </div> */}
        </div>
        <div class="w-full mb-4">
          <p class="text-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam
            obcaecati laudantium recusandae, debitis eum voluptatem ad, illo
            voluptatibus temporibus odio provident. Laboriosam accusamus
            necessitatibus tenetur praesentium ullam voluptates nulla
            reprehenderit? ?
          </p>
        </div>
        <div class="w-full">
          <p class="text-xs text-gray-500 text-right">Oct 15th 8:33pm</p>
        </div>
      </div>
    </div>
  );
}
