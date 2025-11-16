import { useContext } from "react";
import MovieContext from "../context/movie-context";

export function useMovie() {
    const context = useContext(MovieContext);
    
    return context;
}