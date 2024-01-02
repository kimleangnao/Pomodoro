import {createRoot} from "react-dom/client";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Theme from "./Theme";
import Profile from "./Profile"
import History from "./History";
import Statistic from "./Statistic";
import Login from "./Login";
import CreateAccount from "./CreateAccount";
import WhatTimeIsIt from "./components/WhatTimeIsIt";


import { useState } from "react";

//sound resources
import chimeSound from "../resources/sounds/chimesound.mp3";
import melodybox from "../resources/sounds/melodybox.mp3";
import politewarningtone from "../resources/sounds/politewarningtone.wav";
import spooky from "../resources/sounds/spooky.wav";


const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
        cacheTime: Infinity,
      },
    },
  });
  

const App = () =>{
    const [theme, setTheme] = useState(
        [
            [
                { 
                    id: "bg-1",
                    name: "background-1.jpg",
                    imageSource: "https://i.imgur.com/mE1oKAw.jpg",
                    alt: "the ever standing gateway",
                    selected: true,
                    credits: "https://pixabay.com/photos/torii-lake-twilight-dawn-sunrise-5889982/"
                },
                { 
                    id: "bg-2",
                    name: "background-2.jpg",
                    imageSource: "https://i.imgur.com/4Q8Ohg9.jpg",
                    alt: "morning light illuminate the field",
                    selected: false,
                    credits: "https://pixabay.com/photos/barley-field-wheat-agriculture-plow-1684052/"
                },
                { 
                    id: "bg-3",
                    name: "background-3.jpg",
                    imageSource: "https://i.imgur.com/cyXocbk.jpg",
                    alt: "sunset dashing through the river",
                    selected: false,
                    credits: "https://pixabay.com/photos/sea-sunset-boat-dusk-ocean-water-164989/"
                },
                { 
                    id: "bg-4",
                    name: "ackground-4.jpg",
                    imageSource: "https://i.imgur.com/c9vMGaT.jpg",
                    alt: "still river at dawn",
                    selected: false,
                    credits: "https://pixabay.com/photos/sunrise-boat-rowing-boat-nobody-1014712/"
                }
            ],
            [
                {
                    id: "f-1",
                    fontName : "Arial",
                    selected: false,
                    credits: "default"
                },
                {
                    id: "f-2",
                    fontName : "Time New Roman",
                    selected: false,
                    credits: "default"
                },
                {
                    id: "f-3",
                    fontName : "Odibee Sans",
                    selected: false,
                    credits: "https://fonts.google.com/specimen/Odibee+Sans?query=Odibee+Sans"
                  
                },
                {
                    id: "f-4",
                    fontName : "San Serif",
                    selected: false,
                    credits: "default"
                },
                {
                    id: "f-5",
                    fontName : "Graduate",
                    selected: true,
                    credits: "https://fonts.google.com/specimen/Graduate?query=Graduate"
                }
            ],
            [
                {
                    id: "s-1",
                    soundName: "Music Box Melody",
                    soundSource: new Audio(melodybox),
                    credits: "https://freesound.org/people/DRFX/sounds/338986/",
                    selected: false,
                },
                {
                    id: "s-2",
                    soundName: "Polite Warning Tone",
                    soundSource: new Audio(politewarningtone) ,
                    credits: "https://freesound.org/people/nlux/sounds/622773/",
                    selected: false,
                },
                {
                    id: "s-3",
                    soundName: "Spooky",
                    soundSource: new Audio(spooky),
                    credits: "https://freesound.org/people/gunnmanMaria/sounds/432954/#comments",
                    selected: false,
                },
                {
                    id: "s-4",
                    soundName: "Chime Ring Tone",
                    soundSource: new Audio(chimeSound),
                    credits: "https://freesound.org/people/craigscottuk/sounds/644953/",
                    selected: true,
                }
            ]
        ]
    );

    const saveThisInformationToTheServer = (e) => {
        e.preventDefault();
        //does nothing right now
    }

    const playSound = () =>{
        let findSound = theme[2].find((v) => v.selected === true)
        findSound.soundSource.play();
    }

    return(
        <div className="home" style={{backgroundImage: `url("${theme[0].find((v) => (v.selected == true)).imageSource}}")`, backgroundPosition: "center", overflow: "hidden", fontFamily: `${theme[1].find((v) => (v.selected === true)).fontName}`}}>
            <div className="home-maskedColor">
            </div>
            <div className="home-maskedTime">
                <WhatTimeIsIt />
            </div>
         
            <BrowserRouter>
                <QueryClientProvider client={queryClient}>
                    <Navbar />
                    <Routes>
                        <Route path="/createaccount" element={<CreateAccount />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/history" element={<History />} />
                        <Route path="/statistic" element={<Statistic />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/theme" element={<Theme theme={theme} setTheme={setTheme} />} />
                        <Route path="/" element={<Home playSound={playSound} />} />
                    
                    </Routes>   
                </QueryClientProvider>
            </BrowserRouter>
        </div>
    )
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />)