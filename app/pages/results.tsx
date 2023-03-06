import { useEffect, useState } from 'react';
import Card from "../components/Card";
import Data from '../lib/sample-data/card-data.json';

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
      <p>Where is my card?</p>
      {
        Data.map((card) => {
          return(
              <Card key={card.id} id={card.id} projectDescription={card.projectDescription} projectTitle={card.projectTitle} username={card.username} projectType={card.projectType} techstack={card.techstack} dateCreated={card.dateCreated}></Card>
          )
        })
      }
      {/* <Card></Card> */}
    </>
  );
}
