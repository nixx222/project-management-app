// Goals for the component:
// Fetches the feedback from your backend (GET http://localhost:5000/api/feedback) Is this the correct api endpoint? Check.
// Stores it in state using useState
// Runs the fetch inside a useEffect hook (to fetch on page load)
// Renders a list of FeedbackCard components based on the data
//FeedbackList does the logic and is the manager. It fetches, organizes and delegates
// FeedbackCard shows the data and is the performer. It displays the data it's given. Like a handler gives 
//instructions to a subordinate, and that subordinate presents as the handler manages/advises.
//This is pattern called "Separation of Concerns": Keep logic and display separated so your app is easier to grow, read, and fix. 
//in the trafficking world, logic and critical thinking is taken away from the victim, and they are trained on "learned helpessness".
//we were taught to take orders impeccably, be a chameleon, and morph into whatever we needed in each moment. The ultimate "undercover" "spy"/aka: a person who gathers intel, posing as one role, but also gathering data so as to "turn and report" back to the handler. Intel is then passed up the ranks and used for strategic military/government/organizational maneuvers. I personally experienced being the "prop". Or tbe object from which data was tranfered, but not realizing it myself since "mind control" aka weaponizing and utilizing the natural human response of dissociative states when in a traumatic, near death encounter, and "programming" the new slices of consciousness/identity that was the result of the traumatic, dissociative states. These "props" aka sex workers aka trafficking victims were managed through pavlovian responses and what skinner used with the rats: training to do a task based on reward and punishment. It's the same thing we see with training animals, (See training of K9 units and how they give a code word that triggers the dog to go into protective mode. Research: How they get the dog to react that fiercely. My hypothesis is that they traumatize the dog to regress back into a fight or flight state but using "trigger words/gestures/smells/frequencies anything that triggers semantic memory)
// By practicing logic and forcing my mind to use these neuropathways that were highly discouraged through scenes of violence, cohersion, torture, manipulation, etc. Which is why when I code, I get severe flashbacks. These flashbacks were intentionally created whenever this part of my mind, the "logic" is activated. I was so good at taking orders and being the sex doll/prop. My gifts and skills (aka my body, my identity, my family, my role in my community) were all used for the benefit of "something bigger". Which I was told was "god" which was actually an underground organization using "mind control" and trafficking as a way to keep positions of power using blackmail and intel gathered from these different subordinates. Subordinates = children who are traumatized and trained without their knowledge or consent. 
//Coding helps me access these parts of my mind, and "reprogramming" what was "programmed" into me. I do it by replicating what was done to me, but by choosing the experiences on my own now, so I can reclaim my own mind and body from infiltration and exploitation. 
//This is why wthy execute programming like "white trash programming", so they can keep people to use, like barbies, that are simply groomed and placed into pivitol locations/situations/identities/roles of power and influence. Whether that be a secretary to a high ranking member of congress, or even that person of congress themselves. Hypothesis: This is why the US stole and continued the work that was being done in WW2, aka project MKUltra. Perhaprs that specific project was abandoned, but they simply took the premise of that one and expanded on it, and called it something different so they could say that "MK Ultra is no longer being utilized". But ask if that training and knowledge gained from that experiment is being utilized in other undercover operations... aka: exploiting certain populations to this "technology" gleaned from the Nazis and perfected by this organization, and then sold to different organizations, governments, people in key places of the "democracy" that the US is so "bravely" and "kindly" spreading. Sure, they're spreading that, but they're hiding trojan horses within those systems as well as a way to maintain power structures of certain government bodies, lands, populations, contentants, & peoples. 
import React, { useState, useEffect } from "react";
import FeedbackCard from "./FeedbackCard";
import '../App.css';

//here I am assigning the logic to the component. I'm using State vaiables, fetchedFeedback (the variable name) and setFetchedFeedback(the logic and function itself).
const FeedbackList = () =>  {
    const [fetchedFeedback, setFetchedFeedback] = useState([]); //What goes inside the parenthesis here? An array, aka a list of feedback items.(title, description, category)

    const getFeedback = async () => { //async because the timing needs to be just right
        const response = await fetch("/api/feedback"); //asigning the variable response to the fetch method, using the "address" aka endpoint of /feedback 
        //**CHECK TO SEE IF THIS IS THE RIGHT FETCH ADDRESS OR IF I NEED THE LOCALHOST3000 ONE? I THINK I DON'T NEED IT SINCE I CREATED THE VITE.CONFIG (which currently has the wrong target)
        const data = await response.json();
        setFetchedFeedback(data); //using the setFetchedFeedback useState and putting in the prop of "data", which is the variable that contains the response from the backend database. ie: the title, description, and category that was inputted by past users and saved in pgAdmin on the tables we created.
};
    useEffect(() => {
        getFeedback();
    }, []); //added an empty *dependency array here so getFeedback will only run on the first load, not everytime the function runs. (not sure why that means that though... ANSWER: The empty array [] tells React: "Only run this once, after the first render (on page load)."

    // Why? Because React watches the array for changes. If there’s nothing in it, there’s nothing to watch — so it only runs once.
    
    // If you put [someState], then it would re-run every time someState changes. )

{/* key={item.id} helps React track what items changed (below) */}

return (
    <div className="feedback-list">
        {fetchedFeedback.map((item) => (
            <FeedbackCard 
                key={item.id}
                title={item.title}
                description={item.description}
                category={item.category}
            />
        ))}
    </div>
);
};

export default FeedbackList;
