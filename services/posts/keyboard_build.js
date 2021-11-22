export const keyboardPostText = `#### Inspiration

Sometime last year I came across this [talk](https://www.youtube.com/watch?v=uk3A41U0iO4) given by Matt Adereth about using Clojure to generate firmware for custom built keyboards. 

Although the talk is given at a Clojure conference, I think it’s worth a listen for anyone who programs or is technically inclined. 

In the talk Matt explains why the keyboards we most commonly use today (QWERTY) look the way they do. For example,  he mentions that the arrangement of keys on a QWERTY keyboard is such that the keys closest together on the keyboard are less likely to be next to each other in common English words.  He also mentions that keys are staggered in modern keyboards, based on the staggered format in type writers. This is because staggered keys cause less collisions in between the rods that extend from the base of the keys in type writers.

He then goes on to talk about building custom keyboards that make more sense in today’s world rather than key boards not based on 1800's technology.  

After listening to this talk, and endlessly scrolling [r/olkb](https://www.reddit.com/r/olkb), I decided that building my own keyboard was a worthwhile pursuit for the following reasons:

1. Optimization. As a software developer, I use my keyboard a lot. Given that this is a tool I use everyday, even small gains in efficiency could speed up my work and reduce the time on feedback cycles between thinking and writing code.  

2. Improved ergonomics. I was already looking for an ergonomic keyboard since repetitive strain injuries are fairly common for software developers. The few commercially available models were quite expensive (e.g. the kineses for around $300). I figured if I could build my own keyboard, I could create something with really good ergonomics. 

3.  The dream of dream for anyone with a 3D printer is to make something of value. Something functional and useful. The classic joke about 3D printers is that once you get one, you spend all of your time printing enhancements for the 3D printer while never making anything else of use. 

With the decision to build a custom keyboard made, I though more about what features I wanted in a keyboard:

1. The keyboard must be ortho-linear (keys are placed in straight lines, rather than staggered rows). Our fingers move in straight lines when we stretch and contract them so it makes more sense to have a keyboard with straight columns and rows.  Try contracting and extending your fingers, you’ll see what I mean. 

2. The keyboard must be split. Split keyboards allow you to adjust your wrist and arm angles to whatever position is comfortable for your body.  Normal keyboards force you to apply stress throughout your arm to properly fit the keys. 

3. The keyboard must have thumb clusters. Thumbs are far stronger and more flexible than the non-thumb fingers because of the joint at the base of the thumb (the first carpometacarpal joint). Thumb clusters allow you to shift some buttons away from your non-thumb fingers over to your thumbs. This increases ergonomics and is also far more efficient than standard keyboards. (Post build, I can report that I have been able to use my thumbs for the following keys:  Shift, Tab,  [ , ] , { , } , | , \ ,\`, ~,  Return, Delete and more. No more pinky strain for me!)

4. (Optional) The keyboard should follow the curvature of the hand. Flat keyboards make zero sense if you look at how your hands are actually shaped. Curved keyboards that contour to the shape of the hand are much more comfortable. 


After searching for while, I decided to build  the Dactyl-Manuform 5X7:

![Dactyl-Manuform](https://i.imgur.com/bX7kp57.png)

#### Build Process:

I'll save the gritty build log for another post and keep the build description somewhat short here. There are roughly four main parts of a keyboard build:

1. Fabricating the housing. I already had some experience with 3D printing so I decided to print my keyboard frames. Most builds that i've seen are 3D printed. 

2. Assembling the switches (keys) & keycaps into the housing. Mechanical key switches can be found in abundance online and most keyboard frames are designed to accept a standardized fitting. I ended up using [these](https://www.amazon.com/Mechanical-Keyboard-Switches-Water-Proof-Compatible/dp/B0924LY9Z6/ref=sr_1_2?dchild=1&keywords=jade+switch&qid=1632714098&s=electronics&sr=1-2) key switches. They came highly recommended as a switch with a nice tactile feel that isn't too noisy. 

3. Soldering. This is probably the most difficult part of the build because it's quite easy to get your wires crossed (sorry, not sorry). When building the keyboard, you're basically creating a grid of wires that each switch connects to. The switches have two prongs, one prong connects directly to a wire, while the other prong connects via a diode (think one-way valve for electricity). The grid is then connected to a microcontroller ([tiny computer](https://www.adafruit.com/product/1086)) that uses software to figure out which buttons are being pressed based on how electricity flows through the grid. 

4. Flashing the firmware. In this step, you install the software onto the microcontroller. Most people use [QMK](https://qmk.fm/) for this step. 


#### Challenges:

1. Printing the keyboard takes a while (over 24 hours). Any mistake in the print process can waste a lot of time and filament. When building my second model, I wanted to use a translucent filament. This filament ended up being far more brittle than what I was used to. When pulling the first completed frame of the print bed, I cracked the frame in half. That was one of a few printing mistakes that I made. 

2. Soldering is hard when you suck at it like I do. I burnt my self a lot, I also melted the 3D printed housing in more than a few places. It’s really hard to get into some of the corners of the housing. 

3. Sometimes the switches don’t fit quite right in the holes so you have to spend a lot of time filing the switch holes down to get the fit just right. 

4. If you try to save money and buy cheap micro controllers like I did, sometimes the power input snaps right off of the controller when pressed slightly too hard. 

5. Randomly over the course of a few months you might have a wire or soldering connection come loose in the middle of the work day. Instead of doing your day job, you'll find yourself debugging the wiring on your keyboard. 

6. The wiring can be tricky to get right the first time. (The first time I soldered my keyboard, I soldered my diodes in parallel, not in series).



#### Results:

In the end, I am incredibly happy with this project. So happy that I actually built two keyboards, one for work and one for home. The project ended up ticking all of the boxes. I feel like I can program faster when I use the thumb clusters and It feels much more comfortable to use than a normal keyboard. Since I’ve been using it for well over a few months now, I would also say that it qualifies as a functional and useful 3D print. 


Interestingly, there have been some positive social effects from having the keyboard on my desk. It serves as an interesting conversation piece and people love to check it out. I frequently open up a text editor so they can take it for a spin. I also get way more geek credit than I deserve, which helps when I’m BS’ing my way through some technical jargon on the job. People seem to think that because I built a keyboard, I somehow know what I’m talking about when it comes to whatever code I’m trying to hammer together. 

I would definitely recommend this project to anyone who uses a keyboard!  

> ### If you enjoyed this post, please follow me on [Twitter](https://twitter.com/hiTrevorHere)🙏   


#### Build Guides I Followed:

- [Nick Green's Dactyl Manuform Build Log](https://nickgreen.info/dactyl-manuform-build-log/) (esp the wiring diagrams)
- [Kevin Eckert's Keyboard Build Stream - Dactyl Manuform](https://www.youtube.com/watch?v=dWC_8BOArzc)


### Parts List  (Recomend:✅  Dont Recomend: ❌)
##### Microcontrollers:
- [❌ AITRIP ProMicro ATmega 32U4](https://www.amazon.com/gp/product/B08BJNV1J3/ref=ppx_yo_dt_b_asin_title_o00_s00?ie=UTF8&psc=1) (USB port snapped off on multiple chips)
- [✅ ACEIRMC 32U4 Pro Mico](https://www.amazon.com/gp/product/B08DD2G9D8/ref=ppx_yo_dt_b_asin_title_o03_s00?ie=UTF8&psc=1)

##### 3D Printing Filaments:
- [✅ Superfila 1.75mm PLA Black Filament](https://www.amazon.com/gp/product/B07G9HCH4W/ref=ppx_yo_dt_b_asin_title_o07_s00?ie=UTF8&psc=1)  
- [❌ Geeetech 1.75mm PLA Transparent Filament](https://www.amazon.com/gp/product/B07C7WWX8Z/ref=ppx_yo_dt_b_asin_title_o04_s00?ie=UTF8&psc=1) (Very brittle filament)

##### Cables/Wiring:
- [✅ 3.5mm Female TRS (Aux) Cable - 4ct](https://www.amazon.com/gp/product/B0772PCC7N/ref=ppx_yo_dt_b_asin_title_o05_s00?ie=UTF8&psc=1)
- [✅ Micro USB 6 inch extention](https://www.amazon.com/gp/product/B00B5HSC20/ref=ppx_yo_dt_b_asin_title_o06_s02?ie=UTF8&psc=1)
- [✅ 200mA Diodes](https://www.amazon.com/gp/product/B07BVSLX7G/ref=ppx_yo_dt_b_asin_title_o00_s00?ie=UTF8&psc=1)
- [✅ CableCreation 3.5mm Aux Cable](https://www.amazon.com/gp/product/B01N5EKQA2/ref=ppx_yo_dt_b_asin_title_o01_s00?ie=UTF8&psc=1)
- [❌ Copper Foil Tape](https://www.amazon.com/gp/product/B01MR5DSCM/ref=ppx_yo_dt_b_asin_title_o09_s00?ie=UTF8&psc=1) (Just use wire instead)

##### Nuts & Bolts:
- [✅ Assorted Hex Bolts & Nuts Set](https://www.amazon.com/gp/product/B0772PCC7N/ref=ppx_yo_dt_b_asin_title_o05_s00?ie=UTF8&psc=1)
- [✅ Assorted Brass Threaded Inserts Set](https://www.amazon.com/gp/product/B0784VYCYY/ref=ppx_yo_dt_b_asin_title_o06_s01?ie=UTF8&psc=1)

##### Switches & Keycaps:
- [✅ Generic Keycaps](https://www.amazon.com/gp/product/B07SGF9DTY/ref=ppx_yo_dt_b_asin_title_o01_s00?ie=UTF8&psc=1)
- [✅ Kailh Jade Green Switches](https://www.amazon.com/gp/product/B0841H1BZF/ref=ppx_yo_dt_b_asin_title_o03_s00?ie=UTF8&psc=1)
- [✅ Susuwatari Custom Keycap set](https://www.amazon.com/gp/product/B08TV3VSRD/ref=ppx_yo_dt_b_asin_title_o02_s00?ie=UTF8&psc=1)



![Dactyl-Manuform Bottom](https://i.imgur.com/X6v1Kw4.png)



STLs:

[Wrist rest STLs](https://www.thingiverse.com/thing:2964741)

[Keyboard STLs](https://github.com/tshort/dactyl-keyboard/tree/master/things)`