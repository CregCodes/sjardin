import { useEffect, useState } from "react";
import Card from "../components/Card";
import Data from "../lib/sample-data/card-data.json";
import Navbar from "components/Navbar/navbar";
import SearchBar from "components/SearchBar/searchbar";
import FilterBar from "components/FilterBar/filterbar";
import CreatePost from "components/CreatePost/createpost";

export interface CardObject {
  id: number;
  username: string;
  projectTitle: string;
  projectType: string;
  projectDescription: string;
  techstack: string[];
  dateCreated: string;
}

export default function Results() {
  // previous attempt to import json data - can be discarded
  /* useEffect(() => {
    async function getCards() {
      const response = await fetch('../lib/sample-data/card-data.json', 
      {
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
       }
      });
      const data = await response.json();
      console.log('data', data)
    }
    getCards();
  }, []) */

  return (
    <>
      <Navbar />
      <div className="flex flex-row justify-between items-center">
        <div className="w-1/4 bg-white">
          <CreatePost />
        </div>
        <div className="w-3/4 bg-black">
          <SearchBar />
        </div>
      </div>
      <div className="flex flex-row justify-between items-center">
        <div className="w-1/4 bg-white">
          <FilterBar />
        </div>
        <div className="w-3/4 bg-white">
          {Data.map((card) => {
            return (
              <Card
                key={card.id}
                id={card.id}
                projectDescription={card.projectDescription}
                projectTitle={card.projectTitle}
                username={card.username}
                projectType={card.projectType}
                techstack={card.techstack}
                dateCreated={card.dateCreated}
              ></Card>
            );
          })}
        </div>
      </div>
    </>
  );
}
