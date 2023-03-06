import { useEffect, useState } from 'react';
import Card from "../components/Card";
import Data from '../lib/sample-data/card-data.json';

export interface CardObject {
  username: string;
  projectTitle: string;
  projectType: string;
  projectDescription: string;
  techstack: string[];
  dateCreated: Date;
}

export default function Results() {
  const [card, setCard] = useState<CardObject>();

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
      <p>Where is my card?</p>
      {
        Data.map(object => {
          return(
            <div key={object.id}>
              { object.projectTitle}
            </div>
          )
        })
      }
      {/* <Card></Card> */}
    </>
  );
}
