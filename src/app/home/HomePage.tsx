import React, { useState } from 'react';
import LogoHeader from './LogoHeader';
import SubHeader from './SubHeader';

const HomePage: React.FC = () => {

    return (
      <div>
        <div className="p-2 text-center opacity-70">
          We're the world's largest secondary marketplace for tickets to live
          events. Prices are set by sellers and may be below or above face
          value.
        </div>
        <LogoHeader />
        <div className="content-end">
          <div className="m-4 rounded-4xl border-1 shadow-2xl p-4">
            <input
              className="w-full"
              type="text"
              placeholder="Search events, artists,teams and more..."
            />
          </div>

          <div className="flex justify-center">
            <SubHeader />
          </div>

          <div className="rounded-2xl bg-green-900 h-95 mx-4 my-2">
            dotted screens
          </div>
          <div>
            <div className="inline-flex ">
              <div className="inline-flex bg-amber-100">
                <div className="bg-green-100 rounded-2xl mx-2 border-1 border-green-500 p-1">
                  {/* <label htmlFor ='Location1' >Location</label> */}
                  <select name="location" id="Location1">
                    <option value="">Please choose an option</option>
                    <option value="dog">Dog</option>
                    <option value="cat">Cat</option>
                    <option value="hamster">Hamster</option>
                    <option value="parrot">Parrot</option>
                    <option value="spider">Spider</option>
                    <option value="goldfish">Goldfish</option>
                  </select>
                </div>
                <div className="border-1 rounded-2xl mx-2 p-1 bg-white">
                  <input type="date" placeholder="All Dates" />
                </div>
              </div>
              <div className="inline-flex content-end gap-3 mx-2">
                <div className="border-1 rounded-xl border-green-300 p-2 bg-green-500">
                  All Types
                </div>
                <div className="border-1 rounded-xl border-green-300 p-2 bg-green-500">
                  Sports
                </div>
                <div className="border-1 rounded-xl border-green-300 p-2 bg-green-500">
                  Concerts
                </div>
                <div className="border-1 rounded-xl border-green-300 p- bg-green-500">
                  Theater & Comedy
                </div>
              </div>
            </div>
          </div>

          <div className="m-4">
            <h5 className="text-2xl font-bold">
              Trending Events near Bangalore
            </h5>
            <div className="grid grid-rows-1 grid-flow-col gap-5">
              <div className="relative max-w-xl mx-auto my-5">
                <img
                  className="h-50 w-full object-cover rounded-md"
                  src="https://images.unsplash.com/photo-1680725779155-456faadefa26"
                  alt="Random image"
                ></img>
                <div className="absolute inset-0 bg-gray-700 opacity-60 rounded-md"></div>
                <div className="absolute inset-0 flex items-end justify-start m-2">
                  <h2 className="text-white text-xl font-bold">Pop</h2>
                </div>
              </div>
              <div className="relative max-w-xl mx-auto my-5">
                <img
                  className="h-50 w-full object-cover rounded-md"
                  src="https://images.unsplash.com/photo-1680725779155-456faadefa26"
                  alt="Random image"
                ></img>
                <div className="absolute inset-0 bg-gray-700 opacity-60 rounded-md"></div>
                <div className="absolute inset-0 flex items-end justify-start m-2">
                  <h2 className="text-white text-xl font-bold">Pop</h2>
                </div>
              </div>
              <div className="relative max-w-xl mx-auto my-5">
                <img
                  className="h-50 w-full object-cover rounded-md"
                  src="https://images.unsplash.com/photo-1680725779155-456faadefa26"
                  alt="Random image"
                ></img>
                <div className="absolute inset-0 bg-gray-700 opacity-60 rounded-md"></div>
                <div className="absolute inset-0 flex items-end justify-start m-2">
                  <h2 className="text-white text-xl font-bold">Pop</h2>
                </div>
              </div>
            </div>
          </div>

          <div className="m-4">
            <h5 className="text-2xl font-bold">Popular Categories</h5>
            <div className="card grid grid-rows-1 grid-flow-col gap-5">
              <div className="relative max-w-xl mx-auto my-5">
                <img
                  className="h-50 w-full object-cover rounded-md"
                  src="https://images.unsplash.com/photo-1680725779155-456faadefa26"
                  alt="Random image"
                ></img>
                <div className="absolute inset-0 bg-gray-700 opacity-60 rounded-md"></div>
                <div className="absolute inset-0 flex items-end justify-start m-2">
                  <h2 className="text-white text-xl font-bold">Pop</h2>
                </div>
              </div>
              <div className="relative max-w-xl mx-auto my-5">
                <img
                  className="h-50 w-full object-cover rounded-md"
                  src="https://images.unsplash.com/photo-1680725779155-456faadefa26"
                  alt="Random image"
                ></img>
                <div className="absolute inset-0 bg-gray-700 opacity-60 rounded-md"></div>
                <div className="absolute inset-0 flex items-end justify-start m-2">
                  <h2 className="text-white text-xl font-bold">Pop</h2>
                </div>
              </div>
              <div className="relative max-w-xl mx-auto my-5">
                <img
                  className="h-50 w-full object-cover rounded-md"
                  src="https://images.unsplash.com/photo-1680725779155-456faadefa26"
                  alt="Random image"
                ></img>
                <div className="absolute inset-0 bg-gray-700 opacity-60 rounded-md"></div>
                <div className="absolute inset-0 flex items-end justify-start m-2">
                  <h2 className="text-white text-xl font-bold">Pop</h2>
                </div>
              </div>
            </div>
          </div>

          <div className="m-4">
            <h5 className="text-2xl font-bold">Concerts</h5>
            <div className="card grid grid-rows-1 grid-flow-col gap-5">
              <div className="relative max-w-xl mx-auto my-5">
                <img
                  className="h-50 w-full object-cover rounded-md"
                  src="https://images.unsplash.com/photo-1680725779155-456faadefa26"
                  alt="Random image"
                ></img>
                <div className="absolute inset-0 bg-gray-700 opacity-60 rounded-md"></div>
                <div className="absolute inset-0 flex items-end justify-start m-2">
                  <h2 className="text-white text-xl font-bold">Pop</h2>
                </div>
              </div>
              <div className="relative max-w-xl mx-auto my-5">
                <img
                  className="h-50 w-full object-cover rounded-md"
                  src="https://images.unsplash.com/photo-1680725779155-456faadefa26"
                  alt="Random image"
                ></img>
                <div className="absolute inset-0 bg-gray-700 opacity-60 rounded-md"></div>
                <div className="absolute inset-0 flex items-end justify-start m-2">
                  <h2 className="text-white text-xl font-bold">Pop</h2>
                </div>
              </div>
              <div className="relative max-w-xl mx-auto my-5">
                <img
                  className="h-50 w-full object-cover rounded-md"
                  src="https://images.unsplash.com/photo-1680725779155-456faadefa26"
                  alt="Random image"
                ></img>
                <div className="absolute inset-0 bg-gray-700 opacity-60 rounded-md"></div>
                <div className="absolute inset-0 flex items-end justify-start m-2">
                  <h2 className="text-white text-xl font-bold">Pop</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default HomePage;