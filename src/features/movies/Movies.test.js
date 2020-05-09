import React from 'react';
import { Provider } from 'react-redux';
import store from '../../app/store'
import { shallow, mount   } from 'enzyme';
import { MovieItem, Movies } from './Movies';

describe('should render Movies', () => {
    test('render Movies', () => {
        const component = shallow(<Provider store={store}> 
                                    <Movies/>
                                  </Provider>);
        expect(component.find(<Movies/>)).toBeDefined();
    });
});

describe('should render Movies', () => {
    const component = mount(<Provider store={store}> 
                                <Movies/>
                            </Provider>);
    
    test('render input', () => {    
        expect(component.find('imput#searchMovie')).toBeDefined();
    });

    test('render button', () => {
        expect(component.find('imput#searchButton')).toBeDefined();
    });
})

describe('should render MovieItem', () => {
   
    test('render MovieItem', () => {  

     const props = {
        "Title": "Fast & Furious 6",
        "Year": "2013",
        "Rated": "PG-13",
        "Released": "24 May 2013",
        "Runtime": "130 min",
        "Genre": "Action, Adventure, Crime, Thriller",
        "Director": "Justin Lin",
        "Writer": "Chris Morgan, Gary Scott Thompson (characters)",
        "Actors": "Vin Diesel, Paul Walker, Dwayne Johnson, Jordana Brewster",
        "Plot": "Hobbs has Dominic and Brian reassemble their crew to take down a team of mercenaries: Dominic unexpectedly gets sidetracked with facing his presumed deceased girlfriend, Letty.",
        "Language": "English, Spanish, Russian, Japanese, Cantonese, Dutch",
        "Country": "USA, Japan, Spain, UK",
        "Awards": "10 wins & 22 nominations.",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTM3NTg2NDQzOF5BMl5BanBnXkFtZTcwNjc2NzQzOQ@@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "7.1/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "70%"
            },
            {
                "Source": "Metacritic",
                "Value": "61/100"
            }
        ],
        "Metascore": "61",
        "imdbRating": "7.1",
        "imdbVotes": "358,271",
        "imdbID": "tt1905041",
        "Type": "movie",
        "DVD": "10 Dec 2013",
        "BoxOffice": "$238,700,000",
        "Production": "Universal Pictures",
        "Website": "N/A",
        "Response": "True"
    };
    const component = shallow(<Provider store={store}> 
                                <MovieItem movie={props}/>
                            </Provider>);
      
    expect(component.find(<MovieItem/>)).toBeDefined();
    component.unmount();
    });

  
})