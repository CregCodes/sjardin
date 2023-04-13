import { useEffect, useState } from "react";
import Card from "../components/Card/card";
import Data from "../lib/sample-data/card-data.json";
import Navbar from "components/Navbar/navbar";
import SearchBar from "components/SearchBar/searchbar";
import FilterBar from "../components/FilterBar/filterbar";
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

  const [cardData, setCardData] = useState<CardObject[]>(Data);
  // this state stores the initial data for the reset button - it is a temporary work around until we have the tag functionality working
  const [initialCardData, setInitialCardData] = useState<CardObject[]>(Data);
  const [searchInput, setSearchInput] = useState("");  

  function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchInput(e.target.value);
    console.log(e.target.value)
  }

  function handleSearchSubmit() {
    console.log("You sumbitted the search bar");
    const newCardData = cardData.filter((card) => {
      return card.projectTitle.includes(searchInput) || card.projectDescription.includes(searchInput);
    });
    setCardData(newCardData);
  }

  function handleClearSearch() {
    setCardData(initialCardData);
  }

  return (
    <>
      <Navbar />
      <div className="flex flex-row justify-between items-center border-solid border-4 border-light-blue-500 h-20">
        <div className="w-1/4 bg-white border-solid border-4 border-light-blue-500 ">
          <CreatePost />
        </div>
        <div className="w-3/4 bg-green border-solid border-4 border-black ">
          <SearchBar handleSearchSubmit={handleSearchSubmit} handleSearchChange={handleSearchChange} handleClearSearch={handleClearSearch}/>
        </div>
      </div>
      <div className="flex flex-row justify-between items-center border-solid border-4 border-light-blue-500 ">
        <div className="w-1/4 bg-white border-solid border-4 border-light-blue-500 ">
          <FilterBar />
        </div>
        <div className="w-3/4 bg-white border-solid border-4 border-light-blue-500 flex flex-wrap justify-around m-0 p-0">
          {cardData.map((card) => {
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
