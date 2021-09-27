export const keyboardPostText = `#### Inspiration

Sometime last year I came across this [talk](https://www.youtube.com/watch?v=uk3A41U0iO4) given by Matt Adereth about using Clojure to generate firmware for custom built keyboards. 

Even if you don't care about clojure the talk is worth a listen. In fact, I think anyone who programs should listen to it. 

In the talk Matt explains why the keyboards we most commonly use today (QWERTY) look the way they do. (Spoiler alert: type-writers).

He then goes on to talk about building custom keyboards that make more sense, key boards not based on 1800's technology.  

After listening to this talk, and endlessy scrolling [r/olkb](https://www.reddit.com/r/olkb), I decided that building my own keyboard was a worthwhile pursuit for the following reasons:

1. Optimization. As a software developer, I use my keyboard a lot. Given that this is a tool I use everyday, even small gains in efficiency could speed up my work and reduce the time on feedback cycles between thinking and writing code.  

2. Improved ergonomics. I was already looking for an ergonomic keyboard since repetitive strain injuries are fairly common for software developers. 

Althought Matt's talk is centered around using software to custom generate keyboard models, there's already tons of really good designs online. I wanted my build to have these attributes:

1. The keyboard must be ortholinear. Our fingers move in straight (linear) lines when we stretch and contract them. This design is far more egonmic than the standard staggered keyboards that most people use today. 

2. The keyboard must be split. Split keyboards allow you to adjust your wrist and arm angles. This is also far more ergonmic than most standard keyboards. 

3. The keyboard must have thumb clusters. Thumbs are far stronger and more flexible than the non-thumb fingers because of the joint at the base of the thumb (the first carpometacarpal joint). Thumb clusters allow you to shift some buttons away from your non-thumb fingers over to your thumbs. This increases ergonomics and is also far more efficient than standard keyboards.

4. (Optional) The keyboard should follow the curvature of the hand. Flat keyboards make zero sense if you look at how your hands are actually shaped. Curved keyboards that contour to the shape of the hand are far more ergonmic. 


After searching for while, I decided to build  the Dactyl-Manuform 5X6:

![Dactyl-Manuform](https://i.imgur.com/bX7kp57.png)

#### Build Process:

I'll save the gritty build log for another post and keep the build description somewhat short here. There are roughly four main parts of a keyboard build:

1. Fabricating the housing. I already had some experience with 3D printing so I decided to print my keyboard frames. Most builds that i've seen are 3D printed. 

2. Assembling the switches (keys) & keycaps into the housing. Mechanical key switches can be found in abundance online and most keyboard frames are designed to accept a standarized fitting. I ended up using [these](https://www.amazon.com/Mechanical-Keyboard-Switches-Water-Proof-Compatible/dp/B0924LY9Z6/ref=sr_1_2?dchild=1&keywords=jade+switch&qid=1632714098&s=electronics&sr=1-2) key switches. They came highly recommended as a switch with a nice tactile feel that isn't too noisy. 

3. Soldering. This is probably the most difficult part of the build because it's quite easy to get your wires crossed (sorry, not sorry). When building the keyboard, you're besically creating a grid of wires that each switch connects to. The switches have two prongs, one prong connects directly to a wire, while the other prong connects via a diode (think one-way valve for electricity). The grid is then connected to a microcontroller ([tiny computer](https://www.adafruit.com/product/1086)) that uses software to figure out which buttons are being pressed based on how electricity flows through the grid. 

4. Flashing the firmware. In this step, you install the software onto the mictrocontroller. Most people use [QMK](https://qmk.fm/) for this step. 


#### Challenges:

1. Printing the keyboard takes a while (over 24 hours). Any mistake in the print process can waste a lot of time and filament. When building my second model, I wanted to use a translucent filament. This filament ended up being far more britle than what I was used to. When pulling the first completed frame off the print bed, I cracked the frame in half. That was one of a few printing mistakes that I made. 

2. Soldering is hard when you suck at it like I do. I burnt my self a lot, I also melted the 3D printed housing in more than a few places. Its really hard to get into some of the corners of the housing. 

3. Sometimes the switches dont fit quite right in the holes so you have to spend a lot of time filing the switch holes down to get the fit just right. 

4. If you try to save money and buy cheap micro controllers like I did, sometimes the power input snaps right off of the controller when pressed slightly too hard. 

5. Randomly over the course of a few months you might have a wire or soldering connection come loose in the middle of the work day. Instead of doing your day job, you'll find yourself debugging the wiring on your keyboard. 

6. The wiring can be tricky to get right the first time. (I soldered my diodes in parallell, not in series, the first time).



#### Results:

In the end, I am incredibly happy with this project. So happy that I actually built two keyboards, one for work and one for home. The project ended up ticking all of the boxes. It's way more ergonmic than a normal keyboard and I feel like I am able to program much faster. 

Interestling, there have been intersting social effects from having the keyboard on my desk. It serves as an interesting conversation piece and people love to  check it out. I frequently open up a text editor so they can take it for a spin. I also get way more geek credit than I deserve. 

I would definitely recommend this project to anyone who uses a keyboard!








![Dactyl-Manuform Bottom](https://i.imgur.com/X6v1Kw4.png)



STLs:

[Wrist rest STLs](https://www.thingiverse.com/thing:2964741)

[Keyboard STLs](https://github.com/tshort/dactyl-keyboard/tree/master/things)`
