function randomSentencePerMinute(){
    let nouns = ["bird", "clock", "boy", "plastic", "duck", "teacher", "old lady", "professor", "hamster", "dog"];
    let verbs = ["kicked", "ran", "flew", "dodged", "sliced", "rolled", "died", "breathed", "slept", "killed"];
    let adjectives = ["beautiful", "lazy", "professional", "lovely", "dumb", "rough", "soft", "hot", "vibrating", "slimy"];

    let noun, verb, adjective, sentence;
    setInterval(()=>{
        noun = nouns[Math.floor(Math.random() * nouns.length)];
        verb = verbs[Math.floor(Math.random() * verbs.length)];
        adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
        sentence = `The ${adjective} ${noun} ${verb}`;
        console.log(sentence);
    }, 1000*60);
}

randomSentencePerMinute();
