/*
Problem Statement: It is finals for Programming Fundamentals and now you have to design a program of your own that reflects your knowledge.
What will you pick? You have decided to make a text adventure game. The plot of your game is that you are in a asylum. You need to make a game that will lead
the user to their death. You will take the users input from your prompts. Asking them a question with two options. Display their next scenario prompting them again.
Take their inputs and output the next step of the text adventure game using cases. Display the outcome of that chosen case.

Nouns
  user
  plot
Verbs
  prompt
  input
  display
  output
  
Defining Diagram

Inputs
  case "aid the damsel":
  case "beg":
  case "doctor studies":
  case "fight":
  case "head":
  case "ignore them":
  case "leg":
  case "locate the library":
  case "main hall":
  case "My Name Is by Eminem":
  case "reason":
  case "listen":
  case "run":
  case "find the door":
  case "Singing in the Rain by Gene Kelly":
  case "talk your way out of this":
  case "try to make your escape leaving them in the dust":
  case "turn on the light":
  case "unlock cafeteria doors and main hall doors":
Processing
  case "aid the damsel":
  case "beg":
  case "doctor studies":
  case "fight":
  case "head":
  case "ignore them":
  case "leg":
  case "locate the library":
  case "main hall":
  case "My Name Is by Eminem":
  case "reason":
  case "listen":
  case "run":
  case "find the door":
  case "Singing in the Rain by Gene Kelly":
  case "talk your way out of this":
  case "try to make your escape leaving them in the dust":
  case "turn on the light":
  case "unlock cafeteria doors and main hall doors":
  output
OUTPUT
  scenarios
  outcomeOfCase
  endOfStory

PSEUDOCODE
EscapeGame
  declare cases
  declare variables
  alert user of story
  prompt user for scenarios
  strictly use only these cases 
  case "aid the damsel":
  case "beg":
  case "doctor studies":
  case "fight":
  case "head":
  case "ignore them":
  case "leg":
  case "locate the library":
  case "main hall":
  case "My Name Is by Eminem":
  case "reason":
  case "listen":
  case "run":
  case "find the door":
  case "Singing in the Rain by Gene Kelly":
  case "talk your way out of this":
  case "try to make your escape leaving them in the dust":
  case "turn on the light":
  case "unlock cafeteria doors and main hall doors":
  display the outcome of the cases 
  display end of story(update this game over winterbreak)
END





*/
/*The two first variables declared here are to provide a little bit of a story. A lot to be added to it.*/

articleOrFolder = alert("Stanley Fredrick Holland: Diagnosis, Stanley was found with very aggressive hallucinations, creating scenarios that relate to people working against him. Arrival date was 04/17/1960 expected departure date is to be determined. His progress is not there. Sooner or later we will have to start the shock treatments. More to be documented after that.");
alert("Theres a photo in the folder, you're Stanley!");
articleOrFolder = alert("Review of Reedman Asylum");
alert("With close observations, it is truly amazing that Reedman Asylum has been open as long as it has been. Why such a harsh statement to things off? Well trust me there is enough for you to read and make you agree with me after reading this review.");
alert("The supposed 'staff' here is almost non existent; with three doctors/psychiatrists, 8 nurses, 1 cook, 2 janitors and 10 security guards... It came to me as a total shock seeing that they havent been overwhelmed by such a high number of patients compared to staff. 25 staff members to care for 150 patients, all of which are mainly there for the same kind of 'condition'. They all seem to have a 'cult' following related to the crimes in of a Ed Gein from Wisconsin (that place is hell in ice form).");
alert("Most patients are medicated 24/7 and are rarely treated through their time spent here. The short staffing creates neglect to patients that have been there for some time. Newer patients get the most attention, until families stop coming to visit them. Then they too lay in their beds medicated and chained up. Some left to just rot, forgotten about for the rest of their lives. Basic needs are barely met, it seems that the staff gets the special treatment at a five star hotel. And the patients get a thin bed on concrete with a blanket as thin as a towel.");
alert("If the sight of these patients being treated so poorly wasn't enough for some to have the urge to leave, the staff will make you running out of there as fast as possible.");
alert("Doctor Oswalt");
alert("This man should be a patient not a doctor! During my visit he constantly followed my humming, whistling and singing the same eery tune. Regardless of what his credentials say, I swear that man only wants to study other peoples' minds and brains because he simply has lost his. For the time I was there its easy to recall that he asked me a total of 25 times to step into his studies and he will give me a free diagnosis after examinations. HA! Not a snow balls chance in hell.");
alert("David Ketchum The Cook");
alert("This guy certainly fits the description for psychopath. And in all honesty I could have sworn I saw a police sketch that looks like him. When I went through the cafeteria and into the kitchen I had a chance to talk with him. Well talk TO him I should say, there was never a response from David. When asking about what kind of meat is in their ' chili ' (if thats what you want to call it) was, I got a emotionless stare from David. So with the thought that maybe a joke would make him even smirk and give me an answer I said ' What do you have in the chili? The meat off old patients? '. Safe to say David didn't take that as a joke or even words because I still had the awkward stonecold stare from him as he stirred chili. Pretty sure I lived off the vending machine for the day, Twinkies and Doritos sounded way more appetizing than his mystery chili.");
alert("Attention all patients, this is Doctor Marlow! Do not let Doctor Oswalt or David catch you, I have barricaded myself in the main office. If anyone can hear me I will need you to stay away from Doctor Oswalt and David no matter what they say!! * Door breaks open * ' Oh god, David. Please! No! Don't!! * Screams * ' Hello Stanley, I know you're listening. We are coming to get you.");
var aIntro = alert("Waking up in a asylum is always confusing. Especially when you don't understand how you ended up in a patients bed and uniform.");

//This is just provide the direction of how I would want this to truly go for a videogame. This is just giving you that 
//subtle bit of information on your character.
var direction;
var direction = alert("* cell doors unlocked * The loud speaker has gone quiet, assuming that David has now killed Doctor Marlow, someone unlocked the doors holding all of the patients including yours. But there seems to be a lot of commotion outside of your cell... Lets go through the vents.");
var reading;
var storyIntro;
var storyIntro = alert("You slowly gain enough strength to lift yourself out of the strangely stained bed. You examine the room...");
var intelPrompt;
intelPrompt = alert("Upon examining the room you find a news article with the date 04/17/1959 titled 'Reedman Asylum! Lowest Rating and Worst Review of any Psych Ward'. It seems hard not to think that there isn't a good Psych Ward back in those days. To the left of the news article is a folder with the name 'Stanley Fredrick Holland'. Suddenly a food tray is slid under the metal door with a note attached saying 'Do not worry, things will be okay soon enough. I will be unlocking all cell doors at 12:45AM when guard personel is at its lowest. Read a couple things while you wait.)");
var vents;
var vents = prompt("After climbing through the dusty old vent you stop to look through a hole to try and see where you are but the room you are above is dark. The vents collapsed and find yourself in a dark room. 1. Do you ' turn on the light '? Or 2. try to ' find the door '?");

/*This switch "vents" is just for new directions to be added to the story. All of these cases are needed 
//and need to be used precisely otherwise it won't work.*/
switch (vents) {
  case "aid the damsel":
  case "beg":
  case "doctor studies":
  case "fight":
  case "head":
  case "ignore them":
  case "leg":
  case "locate the library":
  case "main hall":
  case "My Name Is by Eminem":
  case "reason":
  case "listen":
  case "run":
  case "find the door":
  case "Singing in the Rain by Gene Kelly":
  case "talk your way out of this":
  case "try to make your escape leaving them in the dust":
  case "turn on the light":
  case "unlock cafeteria doors and main hall doors":
//the variables declared here hold different prompts and alerts of the story*/
    var cafeteriaDoorsOrLibrary;
    var computerScreenPrompt;
    var doctorStudiesOrMainHall;
    var helpDamsel;
    var libraryControlRoom;
    var listenOrRun;
    var begHim;
    var reasonWith;
    var takingTheSwing;
    var windowOrLibrary;
//this if statement provides you the option of turning on the light or finding the door*/

    if (vents === "turn on the light") {
      alert("You have discovered a room full of bodies and you let out a very loud scream of terror. Someone heard you and they are banging on the door!");
      alert("Its Doctor Oswalt!");
      alert("Doctor Oswalt: Well, well, well... Look at what we have here! You know I told David me and him were a team on this but I can't seem to help myself from playing a little game with you...");
      var reasonWith = prompt("Do you 1. try to 'reason' with him and ask why he is doing this? Or 2. ' beg ' for him to let you go?");

    } else if (vents === "find the door") {
      alert("You have to be careful with what you do through here, the only motive you know is yours. GET OUT. Is anyone on your side or willing to be grateful for your help? I don't for see that being possible..");
      var helpDamsel = prompt("You hear a cry for help, do you go 1. ' aid the damsel ' in distress? Or 2. ' ignore them '?");
    }
//helping the damsel in distress or ignoring them*/
    if (helpDamsel === "aid the damsel") {
      alert("You ran into the Doctor! He was trying to lure you into his trap!");
      var helpDamsel = alert("Doctor Oswalt: Well, well, well... Look at what we have here! You know I told David me and him were a team on this but I can't seem to help myself from playing a little game with you...");
      var helpDamsel = prompt("Do you 1. try to 'reason' with him and ask why he is doing this? Or 2. ' beg ' for him to let you go?");
    } else if (helpDamsel === "ignore them") {
      alert("Good choice, you have now avoided confrontation with others, you are now heading towards an elevator. Now that you have avoided a potential trap where should we go next?");
      var doctorStudiesOrMainHall = prompt("Do you want to go up to the 1. ' doctor studies '? Or 2. down to the ' main hall '?");
    }
//Going to the doctor studies or the main hall to continue with story*/
    if (doctorStudiesOrMainHall === "doctor studies") {
      alert("As witty as it may have sounded to go to the room where the Doctor will be bringing you yourself, it was the wrong choice. The hope that you could hide from the Doctors grasp and maybe even find a way of escape in his office has now led you to something far more worse than what you hoped for...");
      alert("His fellow nurse's were in his office! They have now swarmed you and forced you onto the operating bed...");
      alert("With all of your might you have tried to fight them off but all efforts have failed and you are now strapped down and awaiting for his arrival");
      alert('A nurse has whispered in your ear saying "I am greatly sorry, but if it means anything we are going to put you under so the pain someone normally would endure will not even phase you, please just make this easy for us. We dislike this as much as you do... but sometimes you just have to accept things for what they are... Should never have wrote that review so negatively and you could be back home with your family..."');
      alert("Well sadly you have made the wrong choice! And I am sure you can expect what you are about to be told... GAME OVER time to restart ;)");

    } else if (doctorStudiesOrMainHall === "main hall") {
      alert("Wise decision! You have now made it to the main hall, you try to open the front door but sadly its locked. You go to the cafeteria doors and they are locked as well, with who knows what behind the door... Wait! There is a computer that you should probably access...");
      prompt("The computer is providing you various options... Such as accessing emails, contact listings, patient listings, and the most intriguing one out of the group EMERGENCY OVERRIDE. Type in 'access EMERGENCY OVERRIDE'");
      var cafeteriaDoorsOrLibrary = prompt("Do you wish to 'unlock cafeteria doors and main hall doors? Beware alarm may go off.' or would you like to 'locate the library' where there is a emergency exit?");
    }
//This is a if function that relates to turning on the lights or helping the damsel*/
//You will run into the doctor and have to play along with his trivia game*/
    if (reasonWith === "reason") {
      reasonWith = alert("Doctor: Because its what I do for a living! Why must I go through this every single time a patient is sent to me?! Don't you want to be better?!? Ugh why do I even work here, do you see the stress you put me through?? No of course not! Because Doctor Oswalt is just the worst man on the planet!");
      reasonWith = prompt("Do you sit and 'listen to him' rant? Or quickly 'run for it' while he is pacing around?");
    } else if (reasonWith === "beg") {
      alert("Doctor: Let you go? HA! Just casually turn my back and let you go? No, I could lose my job doing that! Oh wait! I already am losing my job thanks to you! You and that blasted review! How do you think we feel about that?! We aren't cavemen that would never hear about your terrible review of our hard committed work here! Now lets get this over with... 'Im singing in the rain, just singing in the rain. What a glorious feeling! Im happy again, Im laughing at clouds! So dark up above, the suns in my heart and Im ready for love!' Name that tune!");
      var begHim = prompt("Doctor: Clearly I am quoting a song, what song is it? 1. 'Singing in the Rain by Gene Kelly'? or 2.'My Name Is by Eminem'? If you guess it right you can give me one swing to the head!");
    } else if (helpDamsel === "reason") {
      alert("Doctor: Because its what I do for a living! Why must I go through this every single time a patient is sent to me?! Don't you want to be better?!? Ugh why do I even work here, do you see the stress you put me through?? No of course not! Because Doctor Oswalt is just the worst man on the planet!");
      var listenOrRun = prompt("Oswalt do you 'listen to him' rant? Or quickly 'run' while he is pacing around?");
    } else if (helpDamsel === "beg") {
      alert("Doctor: Let you go? HA! Just casually turn my back and let you go? No, I could lose my job doing that! Oh wait! I already am losing my job thanks to you! You and that blasted review! How do you think we feel about that?! We aren't cavemen that would never hear about your terrible review of our hard committed work here! Now lets get this over with... 'Im singing in the rain, just singing in the rain. What a glorious feeling! Im happy again, Im laughing at clouds! So dark up above, the suns in my heart and Im ready for love!' Name that tune!");
      var begHim = prompt("Doctor: Clearly I am quoting a song, what song is it? 1. 'Singing in the Rain by Gene Kelly'? or 2.'My Name Is by Eminem'? If you guess it right you can give me one swing to the head!");
    }

//trivia game question*/
    if (begHim === "Singing in the Rain by Gene Kelly") {
      alert("Doctor: Good god man! You got it correct! Congratulations my good sir! You now have earned yourself a free swing at my cranium, uhmmm here! Take this crowbar!");
      var takingTheSwing = prompt("The Doctor seems to have a strange grin on his face, do you wined back and swing very hard at his 'head'? Or go for a 'leg'?");
    } else if (begHim === "My Name Is by Eminem") {
      alert("Doctor: Congrats! You have now successfully given me no hope in humanity, how could you possibly think that those were Eminem lyrics?! -grabs your neck and vigorously starts to shake your head and slam it into the floor- LETS JUST BASH YOUR HEAD OPEN NOW! THAT WAY WE CAN SEE JUST HOW SMALL YOUR BRAIN MUST BE AFTER ANSWERING A QUESTION SO EASY AND YET BE SO WRONG! AGH!");
      alert("Well, way to go... You didn't even make it to the Doctors office for your examination. Instead you failed the trivia based on his favorite song and he decided to kill you slowly and painfully. Maybe you should study up on that song? Refresh the page and start again ;)");
    }
//when you get the question right you are to then hit him in the leg or the head*/
    if (takingTheSwing === "head") {
      alert("The doctor expected you to take the swing like that! Doctor: HA! Nice try knocking me out! No more the reason to see what goes on in that head of yours!");
      alert("The Doctor has knocked you out and now you awake upside down in his office, how could you put yourself in this situation? Brain examination is now in progress!");
    } else if (takingTheSwing === "leg") {
      alert("Wow! Way to catch him off guard! He expected you to go for his head and wasn't ready for that mighty swing to the leg!");
      var windowOrLibrary = prompt("Time to make a run for it! Do you run to the 'library' or do you jump out the 'window'?");
    }
//if you hit him in the leg you will then have the option to run to the library or jump out the window */
//the window option will lead to you having a exact ending of another if statement*/
    if (windowOrLibrary === "library") {
      windowOrLibrary = alert("There has not been any luck yet with your escape, but with great patience I know you will be pleased to know you have now made it to the library, where you find a lever to pull.");
      var libraryLever = prompt("You are in the library now! The first thing you notice is a lever, do you pull it? ' yes ' or ' no '");
      if (libraryLever === "yes") {
        libraryLever = alert("I don't know how you made it, but you made it to this by yourself, you have now managed to make it to the exit of Reedman Asylum.. You live another day!!!");
      } else if (libraryLever === "no") {
        libraryLever = prompt("If there is any choice you could regret it would be not pulling this lever. Are you sure you don't want to pull this lever? ' yes ' I don't want to or ' no ' pull it");
        if (libraryLever === "no") {
          libraryLever = alert("Thank you for pulling the lever! The nightmare is over! You have made it out of Reedman Asylum!");
        } else if (libraryLever === "yes") {
          libraryLever = alert("You have made it to the end... Almost. Sadly though David was able to find you while you stood there staring at the lever. He has taken your life.");
        } else alert("That was not a valid option, I chose for you. And I am sorry to say it wasn't generous. You have to restart <3");
      }
    } else if (windowOrLibrary === "window") {
      windowOrLibrary = alert("You jumped out the window successfully! That first gasp of fresh air hits your face... You can't even explain how amazing it feels until...");
      windowOrLibrary = alert("BANG! You were shot in the leg by a security guard!");
      windowOrLibrary = alert("Doctor Oswalt comes running outside, 'Thank you for putting him down! ITS A MASSACRE IN THERE! We can't control these patients! Put him down for good he killed Doctor Marlow!");
      windowOrLibrary = alert("BANG! Another bullet travels through you. Piercing your skull.. Makes you wonder, was he framing you for everything? Or was that diagnosis on you true?");
    }


//locating the library brings you to a lever which will end the game or not if you decide to not pull the lever*/
    if (cafeteriaDoorsOrLibrary === "locate the library") {
      alert("There has not been any luck yet with your escape, but with great patience I know you will be pleased to know you have now made it to the library, where you find a lever to pull.");
      var libraryLever = prompt("You are in the library now! The first thing you notice is a lever, do you pull it? ' yes ' or ' no '");
      if (libraryLever === "yes") {
        libraryLever = alert("I don't know how you made it, but you made it to this by yourself, you have now managed to make it to the exit of Reedman Asylum.. You live another day!!!");
      } else if (libraryLever === "no") {
        libraryLever = prompt("If there is any choice you could regret it would be not pulling this lever. Are you sure you don't want to pull this lever? ' yes ' I don't want to or ' no ' pull it");
        if (libraryLever === "no") {
          libraryLever = alert("Thank you for pulling the lever! The nightmare is over! You have made it out of Reedman Asylum!");
        } else if (libraryLever === "yes") {
          libraryLever = alert("You have made it to the end... Almost. Sadly though David was able to find you while you stood there staring at the lever. He has taken your life.");
        } else alert("That was not a valid option, I chose for you. And I am sorry to say it wasn't generous. You have to restart <3");
        if (cafeteriaDoorsOrLibrary === "unlock cafeteria doors and main hall doors") {
          alert("The doors are now unlocked to the cafeteria and the main hall door is unlocked leading outside!");
          var talkingOrRunning = prompt("Go through the ' cafeteria '? Or go through that now largely open door leading ' outside ' ?");
        }
//cafeteria or outside, no matter what there is a promised death */
        if (cafeteriaOrOutside == "cafeteria") {
          var cafeteriaOrOutside = alert("You know its funny, even though the front door would have been a quicker more logical route some how you managed to make it out...");
          cafeteriaOrOutside = alert("JUST KIDDING! David and Doctor Oswalt snagged you last second.. The needs of David and Oswalt are met with you donating your flesh to David and your brain to Oswalt.");
          cafeteriaOrOutside = alert("Oh god... They are holding you down and taking turns stabbing you with eating utensils... You fool! You have not made it out alive... I am sorry.");
        } else if (cafeteriaOrOutside == "outside") {
          cafeteriaOrOutside = alert("That first gasp of fresh air hits your face... You can't even explain how amazing it feels until...");
          cafeteriaOrOutside = alert("BANG! You were shot in the leg by a security guard!");
          cafeteriaOrOutside = alert("Doctor Oswalt comes running outside, 'Thank you for putting him down! ITS A MASSACRE IN THERE! We can't control these patients! Put him down for good he killed Doctor Marlow!");
          cafeteriaOrOutside = alert("BANG! Another bullet travels through you. Piercing your skull.. Makes you wonder, was he framing you for everything? Or was that diagnosis on you true?");



        }
      }
    }
}
