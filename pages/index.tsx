import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";



const Home: NextPage = () => {
  return (
    <div className="bg-slate-400 xl:place-content-center py-20 px-20 grid gap-10 lg:grid-cols-2 xl:grid-cols-6 min-h-screen">
      <h1 className="text[100px]">원하는 글자 사이즈</h1>
      <div className="bg-white dark:bg-black flex flex-col justify-between p-6 rounded-3xl shadow-xl">
        <span className="font-semibold dark:text-white text-3xl">Select Item</span>
        <ul>
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex justify-between my-2">
              <span className="text-gray-500 dark:text-gray-200">Grey Chair</span>
              <span className="font-semibold dark:text-white">$19</span>
            </div>
          ))}
        </ul>
        <ul>
          {["a", "b", "c", ""].map((c, i) => (
            <li className="bg-red-500 py-2 empty:hidden" key={i}>
              {c}
            </li>
          ))}
        </ul>

        <div className="flex justify-between mt-2 pt-2 border-t-2 border-dasherd">
          <span>Total</span>
          <span className="font-semibold">$39</span>
        </div>

        <button
          className="mt-5 bg-blue-500 text-white p-3
          text-center rounded-xl w-3/4 mx-auto 
          dark:hover:bg-white dark:hover:text-black
          hover:bg-teal-500 hover:text-black
          active:bg-yellow-500 focus:bg-red-500
          block dark:bg-black dark:border-white dark:border
         "
        >
          CheckOut
        </button>
      </div>

      <div className="bg-white overflow-hidden rounded-3xl shadow-xl group">
        <div className="portrait:bg-blue-500 landscape:bg-teal-500 p-6 pb-14 xl:pb-56">
          <span className="text-white text-2xl">Profile</span>
        </div>
        <div className="rounded-3xl p-6 bg-white relative -top-5">
          <div className="flex relative -top-16 items-end justify-between">
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Orders</span>
              <span className="font-medium">340</span>
            </div>
            <div className="h-24 w-24 bg-gray-400 rounded-full group-hover:bg-red-300 transition-colors" />
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Spent</span>
              <span className="font-medium">$350</span>
            </div>
          </div>
          <div className="relative flex flex-col items-center -mt-10 -mb-5">
            <span className="text-lg font-medium">Tester</span>
            <span className="text-sm text-gray-500">대한민국</span>
          </div>
        </div>
      </div>

      <div className="bg-white p-10 rounded-2xl shadow-xl">
        <div className="flex mb-5 justify-between items-center">
          <span>🔙</span>
          <div className="space-x-3">
            <span>⭐️ 4.9</span>
            <span className="shadow-xl p-2 rounded-md">👍</span>
          </div>
        </div>
        <div className="bg-zinc-400 h-72 mb-5" />
        <div className="flex flex-col">
          <span className="font-medium text-xl">Swoon Lounge</span>
          <span className="text-xs text-gray-500">Chair</span>
          <div className="mt-3 mb-5 flex justify-between items-center">
            <div className="space-x-2">
              <button className="w-5 h-5 rounded-full bg-yellow-500 focus:ring-2 ring-offset-2 ring-yellow-500 ease-in duration-1000" />
              <button className="w-5 h-5 rounded-full bg-indigo-500 focus:ring-2 ring-offset-2 ring-indigo-500 transition duration-1000" />
              <button className="w-5 h-5 rounded-full bg-teal-500 focus:ring-2 ring-offset-2 ring-teal-500 transition" />
            </div>
            <div className="flex items-center space-x-5">
              <button className=" rounded-lg bg-blue-200 flex justify-center items-center aspect-square w-8 text-xl text-gray-500">
                -
              </button>
              <span>1</span>
              <button className=" rounded-lg bg-blue-200 flex justify-center items-center aspect-square w-8 text-xl text-gray-500">
                +
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-medium text-2xl">$450</span>
            <button className="bg-blue-500 py-2 px-8 text-center text-xs text-white rounded-lg">
              Add to cart
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white p-10 overflow-hidden rounded-2xl shadow-xl">
        <form className="flex flex-col space-y-2 bg-blue-500 p-5 focus-within:bg-blue-100">
          <input
            type="text"
            // disabled : 이 속성을 사용하면 클릭을 할 수 없다.
            required
            placeholder="Username"
            className="required:border-2 border-yellow-400 placeholder:text-red-500"
          />
          <input
            type="passowrd"
            required
            placeholder="Password"
            className="invalid:bg-black"
          />
          <input type="submit" value="Login" className="bg-white" />
        </form>
      </div>

      <div className="bg-white p-10 overflow-hidden rounded-2xl shadow-xl">
        <form className="flex flex-col space-y-2 p-5">
          <input
            type="text"
            required
            placeholder="Username"
            className="border p-1 peer border-gray-400 rounded"
          />
          <span className="hidden peer-invalid:block text-red-500">
            This Input is invalid
          </span>
          <span className="hidden peer-valid:block text-teal-500">
            Awesome Username
          </span>
          <span className="hidden peer-hover:block peer-hover: text-amber-500">
            Peer Hover
          </span>
          <input type="submit" value="Login" />
        </form>
      </div>

      <div className="bg-white p-10 overflow-hidden rounded-2xl shadow-xl xl:col-span-1">
        <div className="flex flex-col space-y-2 p-5">
          <details>
            <summary className="cursor-pointer">What is my fav?</summary>
            <span className="selection:bg-indigo-500 selection:text-white">
              운동
            </span>
          </details>
          <details className="select-none open:text-white open:bg-indigo-400">
            <summary className="cursor-pointer">What kind of?</summary>
            <span>헬스</span>
          </details>
          <ul className="list-decimal marker:text-teal-500">
            <li>hi</li>
            <li>hi</li>
            <li>hi</li>
          </ul>
          <input
            type="file"
            className="file:cursor-pointer file:hover:text-purple-400 file:hover:bg-white file:hover:border-purple-500 file:hover:border file:transition file:border-0 file:rounded-xl file:px-5 file:text-white file:bg-purple-400"
          />

          <p className="first-letter:text-3xl first-letter:hover:text-purple-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut hic
            reprehenderit do lores molestias, similique quaerat velit soluta
            perspiciatis amet commodi tenetur i tam quod quisquam sed
            praesentium ipsum necessitatibus quibusdam modi eum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
