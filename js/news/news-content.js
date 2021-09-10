const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
// console.log(queryString)
const titleUrl = urlParams.get("id");
// console.log(titleUrl);
if (titleUrl === "theory bigbang") {
  const news = `
        <div class="content-title">
            <h2>What is BigBang Theory?</h2>
        </div>
        <div class="answer-box">
            <div class="short-answer">
             <span>The Short Answer:</span>
            </div>
            <span>The big bang is how astronomers explain the way the universe began. It is the idea that the universe began as just a single point, then expanded and stretched to grow as large as it is right now—and it is still stretching!</span>
        </div>
        <div class="article-img justify-content-center">
            <img src="https://cdn.mos.cms.futurecdn.net/MjcT2kKGEWbcDFHvSZrLsM-970-80.jpg.webp">
        </div>
        <small class="text-muted">A 2013 map of the background radiation left over from the Big Bang, taken by the ESA's Planck spacecraft, captured the oldest light in the universe. This information helps astronomers determine the age of the universe. (Image credit: ESA and the Planck Collaboration.)</small>

        <div class="content-theory">
            <span>The Big Bang Theory is the leading explanation about how the universe began. At its simplest, it says the universe as we know it started with an infinitely hot, infinitely dense singularity, then inflated — first at unimaginable speed, and then at a more measurable rate — over the next 13.8 billion years to the cosmos that we know today.<br /><br />Because current instruments don't allow astronomers to literally peer back at the universe's birth, much of what we understand about the Big Bang Theory comes from mathematical formulas and models. Astronomers can, however, see the \"echo\" of the expansion through a phenomenon known as the cosmic microwave background.<br /><br />While the majority of the astronomical community accepts the theory, there are some theorists who have alternative explanations besides the Big Bang — such as eternal inflation or an oscillating universe.<br /><br />The phrase \"Big Bang Theory\" has been popular among astrophysicists for decades, but it hit the mainstream in 2007 when a comedy show with the same name premiered on CBS. The show followed the home and academic life of several researchers, including physicists, an astrophysicist and an engineer, and ended in 2019. <br /><br /><b class="strong-content">THE FIRST SECOND, AND THE BIRTH OF LIGHT</b><br /><br />Around 13.7 billion years ago, everything we know of was an infinitesimally small singularity, a point of infinite denseness and infinite heat. Then, explosive expansion began, ballooning our universe outwards faster than the speed of light. This was a period of cosmic inflation that lasted mere fractions of a second — about 10^-32 of a second, according to physicist Alan Guth’s 1980 theory that changed the way we think about the Big Bang forever. <br /><br />When cosmic inflation came to a sudden and still-mysterious end, the more classic descriptions of the Big Bang took hold. A flood of matter and radiation, known as “reheating,” began the process of populating our universe with the stuff we know today -- particles, atoms, stars, galaxies and so on.<br /><br />This was all still within the first second after the universe began, when the temperature of everything was about 10 billion degrees Fahrenheit (5.5 billion Celsius), according to NASA. The cosmos now contained a vast array of fundamental particles such as neutrons, electrons and protons -- the eventual building blocks or raw material for everything we see today.<br /><br />This early soup would have been impossible to look at, because light could not carry inside of it. \"The free electrons would have caused light (photons) to scatter the way sunlight scatters from the water droplets in clouds,\" NASA stated. Over time, however, the free electrons met up with nuclei and created neutral atoms. This allowed light to shine through about 380,000 years after the Big Bang.<br /><br />Sometimes called the \"afterglow\" of the Big Bang, this light is more properly known as the cosmic microwave background (CMB). It was first predicted by Ralph Alpher and other scientists in 1948, but was found only by accident almost 20 years later.<br /><br />Arno Penzias and Robert Wilson, both of Bell Telephone Laboratories in Murray Hill, New Jersey, were building a radio receiver in 1965 and picking up higher-than-expected temperatures, according to NASA. At first, they thought the anomaly was due to pigeons and their dung, but even after they cleaned up the mess and killed the pigeons that tried to roost inside the antenna, the anomaly persisted.<br /><br />Simultaneously, a Princeton University team (led by Robert Dicke) was trying to find evidence of the CMB, and realized that Penzias and Wilson had stumbled upon it. The two groups each published papers in the Astrophysical Journal in 1965.<br /><br /><b class="strong-content">RECONSTRUCTING THE UNIVERSE'S BABY PICTURES</b><br /><br />In one case, cosmologists are pressing rewind to reach the first instant after the Big Bang by simulating 4,000 versions of the current universe on a massive supercomputer. <br /><br />\"We are trying to do something like guessing a baby photo of our universe from the latest picture,\" study leader Masato Shirasaki, a cosmologist at the National Astronomical Observatory of Japan (NAOJ), wrote in an email to Live Science. <br /><br />With information about the universe as we know it today, the researchers on this 2021 study worked to compare their understanding of how gravitational forces interacted in the primordial universe with their thousands of computer-modeled universes. If they could successfully predict the starting conditions of their virtual universes, they could have more trust in their ability to predict what our own universe looked like back at the beginning. <br /><br />Other researchers choose a different path to interrogate our universe's beginnings, investigating the split between matter and antimatter. One 2020 study, not yet peer-reviewed, proposed that the imbalance in amount of matter and antimatter is related to the universe's vast quantities of dark matter, an unknown substance that exerts influence over gravity and yet doesn't interact with light. Crucial moments after the Big Bang may have \"kicked\" the universe into making more matter than its inverse, antimatter, which then could have led to the formation of dark matter.<br /><br /><b class="strong-content">THE AGE OF THE UNIVERSE</b><div class="article-img justify-content-center article-img-margin"><img src="https://cdn.mos.cms.futurecdn.net/c2P4QVUagTgnzUQ6L3YPRM-970-80.jpg"></div><br /><br /><small class="text-muted">Artist's impression of the European Space Agency's Planck spacecraft. Planck's main goal is to study the Cosmic Microwave Background — the relic radiation left over from the Big Bang.  (Image credit: ESA/C. Carreau)</small><br /><br />The cosmic microwave background has been observed on many missions. One of the most famous space-faring missions was NASA's Cosmic Background Explorer (COBE) satellite, which mapped the sky in the 1990s.<br /><br />Several other missions have followed in COBE's footsteps, such as the BOOMERanG experiment (Balloon Observations of Millimetric Extragalactic Radiation and Geophysics), NASA's Wilkinson Microwave Anisotropy Probe (WMAP) and the European Space Agency's Planck satellite.<br /><br />Planck's observations, first released in 2013, mapped the background in unprecedented detail and revealed that the universe was older than previously thought: 13.82 billion years old, rather than 13.7 billion years old. The research observatory's mission is ongoing and new maps of the CMB are released periodically.<br /><br />The maps give rise to new mysteries, however, such as why the Southern Hemisphere appears slightly redder (warmer) than the Northern Hemisphere. The Big Bang Theory says that the CMB would be mostly the same, no matter where you look.<br /><br />Examining the CMB also gives astronomers clues as to the composition of the universe. Researchers think most of the cosmos is made up of matter and energy that cannot be \"sensed\" with our conventional instruments, leading to the names \"dark matter\" and \"dark energy.\" Only 5% of the universe is made up of matter such as planets, stars and galaxies.<br /><br /><b class=strong-content>FAINT SIGNALS OF THE UNIVERSE'S INFLATION</b><br /><br />While astronomers could see the universe's beginnings, they've also been seeking out proof of its rapid inflation using gravitational waves, tiny perturbations in space-time that ripple outwards from great disturbances like, for instance, two black holes colliding, or the birth of the universe.<br /><br />Theory says that in the first second after the universe was born, our cosmos ballooned faster than the speed of light. (That, by the way, does not violate Albert Einstein's speed limit. He once said that light speed is the fastest anything can travel within the universe — but that statement did not apply to the inflation of the universe itself.)<br /><br />As the universe expanded, it created the CMB and a similar \"background noise\" made up of gravitational waves that, like the CMB, should be a sort of static detectable from all parts of the sky. Those gravitational waves, according to the LIGO Scientific Collaboration, produced a theorized barely-detectable polarization, one type of which is called \"B-modes.\"<br /><br />In 2014, astronomers said they had found evidence of B-modes using an Antarctic telescope called \"Background Imaging of Cosmic Extragalactic Polarization,\" or BICEP2.<br /><br />\"We're very confident that the signal that we're seeing is real, and it's on the sky,\" lead researcher John Kovac, of the Harvard-Smithsonian Center for Astrophysics, told Space.com in March 2014.<br /><br />But by June, the same team said that their findings could have been altered by galactic dust getting in the way of their field of view. That hypothesis was supported by new results from the Planck satellite.<br /><br />By January 2015, researchers from both teams working together \"confirmed that the Bicep signal was mostly, if not all, stardust,\" the New York Times said.<br /><br /><div class="article-img justify-content-center"><img src="https://cdn.mos.cms.futurecdn.net/9Aphz9GQFpxmRrzHUVe3jS-970-80.jpg"></div><small class="text-muted">This graphic shows a timeline of the universe based on the Big Bang theory and inflation models. (Image credit: NASA/WMAP)</small><br /><br />Gravitational waves have now been confirmed to exist, however. These waves, which are not B-modes from the birth of the universe but rather from more recent collisions of black holes, have been detected multiple times by the Laser Interferometer Gravitational-Wave Observatory (LIGO) since 2016. As LIGO becomes more sensitive, it is anticipated that discovering black hole-related gravitational waves will be a fairly frequent event.<br /><br /><b class="strong-content">FASTER INFLATION, MULTIVERSES AND CHARTING THE START</b><br /><br />The universe is not only expanding, but expanding faster. This means that with time, nobody will be able to spot other galaxies from Earth, or any other vantage point within our galaxy.<br />
            <br />\"We will see distant galaxies moving away from us, but their speed is increasing with time,\" Harvard University astronomer Avi Loeb said in a March 2014 Space.com article.<br /><br />\"So, if you wait long enough, eventually, a distant galaxy will reach the speed of light. What that means is that even light won't be able to bridge the gap that's being opened between that galaxy and us. There's no way for extraterrestrials on that galaxy to communicate with us, to send any signals that will reach us, once their galaxy is moving faster than light relative to us.\"<br /><br />Some physicists also suggest that the universe we experience is just one of many. In the \"multiverse\" model, different universes would coexist with each other like bubbles lying side by side. The theory suggests that in that first big push of inflation, different parts of space-time grew at different rates. This could have carved off different sections — different universes — with potentially different laws of physics.<br /><br />\"It's hard to build models of inflation that don't lead to a multiverse,\" Alan Guth, a theoretical physicist at the Massachusetts Institute of Technology, said during a news conference in March 2014 concerning the gravitational waves discovery. (Guth is not affiliated with that study.)<br /><br />\"It's not impossible, so I think there's still certainly research that needs to be done. But most models of inflation do lead to a multiverse, and evidence for inflation will be pushing us in the direction of taking [the idea of a] multiverse seriously.\"<br /><br />While we can understand how the universe we see came to be, it's possible that the Big Bang was not the first inflationary period the universe experienced. Some scientists believe we live in a cosmos that goes through regular cycles of inflation and deflation, and that we just happen to be living in one of these phases.<br /><br /><b class="strong-content">THE BIG BANG THEORY: MAKING SCIENTIFIC THEORY A HOUSEHOLD PHRASE</b><br /><br /><div class="article-img article-img-border justify-content-center"><img src="https://cdn.mos.cms.futurecdn.net/dKXASbzDEqiQ99XxgtcntM-970-80.jpg.webp"></div><small class="text-muted">From left, characters Howard, Leonard, Penny, Sheldon and Raj from the CBS show \"The Big Bang Theory.\" (Image credit: CBS)</small><br /><br />Running for 279 episodes over 12 seasons, the CBS show \"The Big Bang Theory\" followed a group of scientists — originally, all physicists, astrophysicists and aerospace engineers. The show explores the group's nerdy friendships, romances and squabbles in Pasadena, California. Its first season premiered on Sept. 24, 2007 and the show officially ended on May 16, 2019.<br /><br />Although the show itself didn't delve into much of the physics behind the big bang theory itself, the showrunners did hire UCLA astrophysicist David Saltzberg as a science consultant for the entire run of the show, according to Science magazine. That meant that science jargon, frequently tossed around in the show's opening scenes and sprinkled through the characters' lives, was reviewed by an actual scientist. Because the characters are immersed in academia, Saltzberg told Science, that added to the realistic portrayal of their lives.<br /><br />In addition, thanks to Saltzberg, the whiteboards in the background of labs, offices and apartments throughout the show were filled with a variety of cutting-edge and sometimes newsworthy equations and information. Over the course of the show, Saltzberg said, those whiteboards became coveted space as researchers sent him new work that they hoped might be featured there. In one episode, Saltzberg recalled, new evidence of gravitational waves was scrawled across a whiteboard that ostensibly belonged to famed physicist Steven Hawking, who also approved the text.<br /><br /><div class="article-img article-img-border justify-content-center"><img src="https://cdn.mos.cms.futurecdn.net/YqxKgs4xMDUDBn74cHHTUg-970-80.jpg.webp"></div><small class="text-muted">Veteran NASA astronaut Mike Massimino (right) poses for a photo with Big Bang Theory actor Simon Helberg and another actor during a break from filming the season finale of CBS' Big Bang Theory. (Image credit: Mike Massimino (via Twitter as @Astro_Mike))</small><br /><br />The show took some liberties with making up some new scientific concepts, and with the politics of Nobel prizes and academia, according to Fermilab physicist Don Lincoln. But in the end, Lincoln said, the thing that rang least true to him was the scene where characters were given plane tickets to visit another lab not in coach seats, where many real-life scientists scrunch up their legs, but in Economy Plus.<br /><br />Notably, several characters in the series take trips. One episode sees main characters Leonard, Sheldon, Raj and Howard set out on a research expedition to the Arctic — many physics experiments are best performed at or near the extreme environments of the poles. Another put aerospace engineer Howard on a Russian Soyuz spacecraft and, later, a model of the the International Space Station along with real-life astronaut Mike Massimino.</span>
        </div>

    `;
  document.querySelector("#article-content").innerHTML = news;
}
// topMainNews
const main = new Request("./js/news/json/newsContent.json");
fetch(main)
  .then((respond) => respond.json())
  .then((data) => {
    var x = data.find((x) => x.title === titleUrl);
    // console.log(x)
    const news = `
                <div>
                    <h2>${x.title}</h2>
                </div>
                <small class="text-muted">${x.time}</small>

                <div>
                    <span>${x.summary}</span>
                </div>
                <div class="article-img justify-content-center">
                    <img src="${x.img}">
                </div>
                <div class="text-justify">
                <p >${x.summary}</p>
                <br><p>${x.summary} ${x.summary}</p>
                <br><p>${x.summary} </p>
                </div>
            `;
    document.querySelector("#article-content").innerHTML = news;
  });
// SpaceFlight
fetch("./js/news/json/space-flight.json")
  .then((response) => response.json())
  .then((data) => {
    var x = data.find((x) => x.title.toString() === titleUrl);

    const news = `
                    <div>
                    <h2>${x.title}</h2>
                </div>
                <small class="text-muted">${x.time}</small>
                
                <div>
                    <span>${x.summary}</span>
                </div>
                <div class="article-img justify-content-center">
                    <img src="${x.img}">
                </div>
                <div class="text-justify">
                <p >${x.summary}</p>
                <br><p>${x.summary} ${x.summary}</p>
                <br><p>${x.summary} </p>
                </div>
            `;
    document.querySelector("#article-content").innerHTML = news;
  });

// solarSystem
fetch("./js/news/json/solar-system.json")
  .then((respond) => respond.json())
  .then((data) => {
    var x = data.find((x) => x.title.toString() === titleUrl);
    // console.log(x)
    const news = `
                <div>
                    <h2>${x.title}</h2>
                </div>
                <small class="text-muted">${x.time}</small>
                
                <div>
                    <span>${x.summary}</span>
                </div>
                <div class="article-img justify-content-center">
                    <img src="${x.img}">
                </div>
                <div class="text-justify">
                <p >${x.summary}</p>
                <br><p>${x.summary} ${x.summary}</p>
                <br><p>${x.summary} </p>
                </div>
            `;
    document.querySelector("#article-content").innerHTML = news;
  });
// Galaxies
fetch("./js/news/json/galaxies.json")
  .then((respond) => respond.json())
  .then((data) => {
    var x = data.find((x) => x.title.toString() === titleUrl);
    // console.log(x)
    const news = `
                <div>
                    <h2>${x.title}</h2>
                </div>
                <small class="text-muted">${x.time}</small>
                
                <div>
                    <span>${x.summary}</span>
                </div>
                <div class="article-img justify-content-center">
                    <img src="${x.img}">
                </div>
                <div class="text-justify">
                <p >${x.summary}</p>
                <br><p>${x.summary} ${x.summary}</p>
                <br><p>${x.summary} </p>
                </div>
            `;
    document.querySelector("#article-content").innerHTML = news;
  });
// bigBang
fetch("./js/news/json/bigbang.json")
  .then((respond) => respond.json())
  .then((data) => {
    var x = data.find((x) => x.title.toString() === titleUrl);
    // console.log(x)
    const news = `
                <div>
                    <h2>${x.title}</h2>
                </div>
                <small class="text-muted">${x.time}</small>
                
                <div>
                    <span>${x.summary}</span>
                </div>
                <div class="article-img justify-content-center">
                    <img src="${x.img}">
                </div>
                <div class="text-justify">
                <p >${x.summary}</p>
                <br><p>${x.summary} ${x.summary}</p>
                <br><p>${x.summary} </p>
                </div>
            `;
    document.querySelector("#article-content").innerHTML = news;
  });
// blackHole
fetch("./js/news/json/black-hole.json")
  .then((respond) => respond.json())
  .then((data) => {
    var x = data.find((x) => x.title.toString() === titleUrl);
    // console.log(x)
    const news = `
                <div>
                    <h2>${x.title}</h2>
                </div>
                <small class="text-muted">${x.time}</small>
                
                <div>
                    <span>${x.summary}</span>
                </div>
                <div class="article-img justify-content-center">
                    <img src="${x.img}">
                </div>
                <div class="text-justify">
                <p >${x.summary}</p>
                <br><p>${x.summary} ${x.summary}</p>
                <br><p>${x.summary} </p>
                </div>
            `;
    document.querySelector("#article-content").innerHTML = news;
  });
// exoplanets
fetch("./js/news/json/exoplanet.json")
  .then((respond) => respond.json())
  .then((data) => {
    var x = data.find((x) => x.title.toString() === titleUrl);
    // console.log(x)
    x.summary.replace("\u00A0", "1");
    const news = `
                <div>
                    <h2>${x.title}</h2>
                </div>
                <small class="text-muted">${x.time}</small>
                
                <div class="summary-content">
                    <span>${x.summary}</span>
                </div>
                <div class="article-img justify-content-center">
                    <img src="${x.img}">
                </div>
                <div class="text-justify">
                <span>${x.content}</span>
                </div>
            `;
    console.log(news);
    document.querySelector("#article-content").innerHTML = news;
  });
// Carousel
fetch("./js/news/json/carousel.json")
  .then((respond) => respond.json())
  .then((data) => {
    var x = data.find((x) => x.title.toString() === titleUrl);
    // console.log(x)
    const news = `
                    <div>
                        <h2>${x.title}</h2>
                    </div>
                    <div>
                        <span>${x.summary}</span>
                    </div>
                    <div class="article-img justify-content-center">
                        <img src="${x.img}">
                    </div>
                    <div class="text-justify">
                    <p >${x.summary}</p>
                    <br><p>${x.summary} ${x.summary}</p>
                    <br><p>${x.summary} </p>
                    </div>
                `;
    document.querySelector("#article-content").innerHTML = news;
  });
