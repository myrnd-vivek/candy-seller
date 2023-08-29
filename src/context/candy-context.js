import { createContext, useContext, useState } from "react";

const CandyContext = createContext({
	candies: [],
	addCandy: () => {},
});

const CandyProvider = ({ children }) => {

  const [candies,setCandies] = useState([]);

  const addCandy = (candy) => {
    const newCandy = {...candy,id: Math.floor(Math.random() * 100)}
    setCandies([...candies,newCandy])
  }

  const candyContext = {
    candies,
    addCandy
  }
	return <CandyContext.Provider value={candyContext}>{children}</CandyContext.Provider>;
};

export const useCandyContext = () => {
  return useContext(CandyContext);
}

export default CandyProvider;
