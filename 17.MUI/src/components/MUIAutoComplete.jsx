import React from 'react'
import { Autocomplete, TextField } from '@mui/material'

function MUIAutoComplete() {
    const top100Films = [
        { title: 'The Shawshank Redemption', year: 1994 },
        { title: 'The Godfather', year: 1972 },
        { title: 'The Godfather: Part II', year: 1974 },
        { title: 'The Dark Knight', year: 2008 },
        { title: '12 Angry Men', year: 1957 },
        { title: 'Schindler\'s List', year: 1993 },
        { title: 'The Lord of the Rings: The Return of the King', year: 2003 },
        { title: 'Pulp Fiction', year: 1994 },
        { title: 'The Good, the Bad and the Ugly', year: 1966 },
        { title: 'Fight Club', year: 1999 },
        { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },
        { title: 'Forrest Gump', year: 1994 },
        { title: 'Inception', year: 2010 },
        { title: 'The Lord of the Rings: The Two Towers', year: 2002 },
        { title: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980 },
        { title: 'The Matrix', year: 1999 },
        { title: 'Goodfellas', year: 1990 },
        { title: 'One Flew Over the Cuckoo\'s Nest', year: 1975 },
        { title: 'Seven Samurai', year: 1954 },
        { title: 'Interstellar', year: 2014 },
        { title: 'The Silence of the Lambs', year: 1991 },
        { title: 'City of God', year: 2002 },
        { title: 'Saving Private Ryan', year: 1998 },
        { title: 'Life Is Beautiful', year: 1997 },
        { title: 'The Green Mile', year: 1999 },
        { title: 'Star Wars: Episode IV - A New Hope', year: 1977 },
        { title: 'Terminator 2: Judgment Day', year: 1991 },
        { title: 'Back to the Future', year: 1985 },
        { title: 'The Lion King', year: 1994 },
        { title: 'Spirited Away', year: 2001 },
        { title: 'The Usual Suspects', year: 1995 },
        { title: 'Léon: The Professional', year: 1994 },
        { title: 'Harakiri', year: 1962 },
        { title: 'The Departed', year: 2006 },
        { title: 'The Dark Knight Rises', year: 2012 },
        { title: 'Gladiator', year: 2000 },
        { title: 'The Prestige', year: 2006 },
        { title: 'The Pianist', year: 2002 },
        { title: 'Parasite', year: 2019 },
        { title: 'Joker', year: 2019 },
        { title: 'Avengers: Endgame', year: 2019 },
        { title: 'Spider-Man: Into the Spider-Verse', year: 2018 },
        { title: 'Black Panther', year: 2018 },
        { title: 'Wonder Woman', year: 2017 },
        { title: 'La La Land', year: 2016 },
        { title: 'Mad Max: Fury Road', year: 2015 },
        { title: 'The Grand Budapest Hotel', year: 2014 },
        { title: 'Gravity', year: 2013 },
        { title: 'Django Unchained', year: 2012 },
        { title: 'The Avengers', year: 2012 },
        { title: 'The Artist', year: 2011 },
        { title: 'The King\'s Speech', year: 2010 },
        { title: 'Avatar', year: 2009 },
        { title: 'Slumdog Millionaire', year: 2008 },
        { title: 'No Country for Old Men', year: 2007 },
        { title: 'The Lives of Others', year: 2006 },
        { title: 'Crash', year: 2004 },
        { title: 'Million Dollar Baby', year: 2004 },
        { title: 'The Lord of the Rings: The Return of the King', year: 2003 },
        { title: 'Chicago', year: 2002 },
        { title: 'A Beautiful Mind', year: 2001 },
        { title: 'Gladiator', year: 2000 },
        { title: 'American Beauty', year: 1999 },
        { title: 'Shakespeare in Love', year: 1998 },
        { title: 'Titanic', year: 1997 },
        { title: 'The English Patient', year: 1996 },
        { title: 'Braveheart', year: 1995 },
        { title: 'Forrest Gump', year: 1994 },
        { title: 'Schindler\'s List', year: 1993 },
        { title: 'Unforgiven', year: 1992 },
        { title: 'The Silence of the Lambs', year: 1991 },
        { title: 'Dances with Wolves', year: 1990 },
        { title: 'Driving Miss Daisy', year: 1989 },
        { title: 'Rain Man', year: 1988 },
        { title: 'The Last Emperor', year: 1987 },
        { title: 'Platoon', year: 1986 },
        { title: 'Out of Africa', year: 1985 },
        { title: 'Amadeus', year: 1984 },
        { title: 'Terms of Endearment', year: 1983 },
        { title: 'Gandhi', year: 1982 },
        { title: 'Chariots of Fire', year: 1981 },
        { title: 'Ordinary People', year: 1980 },
        { title: 'Kramer vs. Kramer', year: 1979 },
        { title: 'The Deer Hunter', year: 1978 },
        { title: 'Annie Hall', year: 1977 },
        { title: 'Rocky', year: 1976 },
        { title: 'One Flew Over the Cuckoo\'s Nest', year: 1975 },
        { title: 'The Godfather Part II', year: 1974 },
        { title: 'The Sting', year: 1973 },
        { title: 'The Godfather', year: 1972 },
        { title: 'The French Connection', year: 1971 },
        { title: 'Patton', year: 1970 },
        { title: 'Midnight Cowboy', year: 1969 },
        { title: 'Oliver!', year: 1968 },
        { title: 'In the Heat of the Night', year: 1967 },
        { title: 'A Man for All Seasons', year: 1966 },
        { title: 'The Sound of Music', year: 1965 },
        { title: 'My Fair Lady', year: 1964 },
        { title: 'Tom Jones', year: 1963 },
        { title: 'Lawrence of Arabia', year: 1962 },
        { title: 'West Side Story', year: 1961 },
        { title: 'The Apartment', year: 1960 },
        { title: 'Ben-Hur', year: 1959 },
        { title: 'Gigi', year: 1958 },
        { title: 'The Bridge on the River Kwai', year: 1957 },
        { title: 'Around the World in 80 Days', year: 1956 },
        { title: 'Marty', year: 1955 },
        { title: 'On the Waterfront', year: 1954 },
        { title: 'From Here to Eternity', year: 1953 },
        { title: 'The Greatest Show on Earth', year: 1952 },
        { title: 'An American in Paris', year: 1951 },
        { title: 'All About Eve', year: 1950 },
        { title: 'All the King\'s Men', year: 1949 },
        { title: 'Hamlet', year: 1948 },
        { title: 'Gentleman\'s Agreement', year: 1947 },
        { title: 'The Best Years of Our Lives', year: 1946 },
        { title: 'The Lost Weekend', year: 1945 },
        { title: 'Going My Way', year: 1944 },
        { title: 'Casablanca', year: 1942 },
        { title: 'Mrs. Miniver', year: 1942 },
        { title: 'How Green Was My Valley', year: 1941 },
        { title: 'Rebecca', year: 1940 },
        { title: 'Gone with the Wind', year: 1939 }
    ]
  return (
    <div>
        <Autocomplete 
            sx={{width: 300}} 
            options={top100Films} 
            getOptionLabel={(option) => option.title}
            renderInput={(params) => <TextField {...params} label="Film" />} 
            size='small' 
        />
    </div>
  )
}   

export default MUIAutoComplete