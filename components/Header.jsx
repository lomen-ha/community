import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [inputValue, setInputValue] = useState('');

  const handleInput = (e) => {
    e.preventDefault();
    fetchData();
  };
  const onChange = (e) => {
    setInputValue(e.target.value);
  };
  const onClick = () => {
    fetchData();
  };
  const fetchData = async () => {
    console.log(inputValue);
    try {
      const res = await axios.post('/api/best/123', {
        data: {
          foo: inputValue,
        },
      });
      const data = res.data;
      setInputValue('');
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex items-center justify-between">
      <Link href="/">
        <a>
          <Image alt="logo" src="/logo.png" width={70} height={70} />
        </a>
      </Link>
      <h1 className="text-3xl font-bold">Illunism Community</h1>
      <div className="relative flex items-center">
        <form onSubmit={handleInput}>
          <input
            type="text"
            name="input"
            className="h-10 rounded-lg border border-black pl-1 focus:border-2 focus:border-red-500 focus:outline-none"
            onChange={onChange}
            value={inputValue}
          />
        </form>

        <div
          onClick={onClick}
          className="absolute inset-y-0 right-1 flex cursor-pointer items-center hover:text-red-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
