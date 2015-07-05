var messages = [
    '@ashkyd: Hey-oh BrisJS!',
    '@ashkyd: BrisJS is my favourite meetup',
    '@ashkyd: Come to BrisJS drinks later this month!',
    '@FSVO: Hell is other people, as a service',
    '@stilgherrian: “Visual Basic”. HAHAHAHAHAHAHA.',
    '@mrgan: Gillette Announces Three-Factor Authentication',
    '@michaelmeloni: God I wish there was an app for getting a haircut',
];

var colour = [
    'red',
    'orange',
    'yellow',
    'limegreen',
    'lightblue',
    'violet'
];

function randomA(a){
    return a[Math.round(Math.random()*(a.length-1))];
}

console.log('%c'+randomA(messages), 'display:block;font-size:1.5em;background:black;color:'+randomA(colour)+';');
