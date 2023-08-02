import { createContext, useContext } from "react";
import Youtube from "../api/youtube";
import YoutubeClient from "../api/youtubeClient";

export const YoutubeApiContext = createContext();

const client = new YoutubeClient();
const youtube = new Youtube(client); 

export function YoutubeApiProvider({ children }) {
  return (
    <YoutubeApiProvider value={{ youtube }}>
      {children}
    </YoutubeApiProvider>
  );
}

export function useYoutubeApi() {
  return useContext(YoutubeApiContext); 
} // Provider 안에 있는 모든 자식 컴포넌트가 value에 접근할 수 있도록 함수 생성 
