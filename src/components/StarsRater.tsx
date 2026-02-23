import React from 'react'
import { HStack } from '@chakra-ui/react';
import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa';
interface Props {
    totalStars?: number
    rate: number,
    topRate?: number
}

const StarsRater: React.FC<Props> = ({rate, totalStars=5, topRate=5}) => {
     const { filledStars, halfFilledStar} = getStarsDistribution((totalStars * rate) / topRate);
 return <HStack>
    {getStars(filledStars,true)}
    {halfFilledStar && <FaStarHalfAlt></FaStarHalfAlt>}
    {getStars(totalStars - filledStars - (+halfFilledStar), false)}
  </HStack>;
}

function getStars(stars: number, isFilled: boolean): React.ReactNode {
    return Array.from({length: stars}).map((__, i) => isFilled ? <FaStar key={i}/> :
     <FaRegStar key={i}/>)
}



 
  function getStarsDistribution(rate: number): {
    filledStars: number;
    halfFilledStar: boolean;
  } {
    let filledStars = Math.trunc(rate);
    let halfFilledStar = false;
    const fractionalPart = rate - filledStars;
  
    if (fractionalPart > 0.75) {
     filledStars++;
    
    } else  {
      halfFilledStar = fractionalPart > 0.25;
    }
    return { filledStars, halfFilledStar };
  }

export default StarsRater