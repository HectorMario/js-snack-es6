const byke = [
    {
        nome: "GW",
        peso: 50
    },
    {
        nome: "specialite",
        peso: 40
    },
    {
        nome: "santropel",
        peso: 35
    },
    {
        nome: "vespa",
        peso: 55
    }
];

const holi = [];
let zo = 0;

    byke.forEach(({nome,peso}) => {
        mino = peso;
        holi.push(mino)
        console.log(holi);
        zo = Math.min.apply(0, holi)
        console.log(zo);
    })



    const teams = [
        {
            nome: "barcelona",
            punti: 0,
            falli: 0,
        },
        {
            nome: "madrid",
            punti: 0,
            falli: 0,
        },
        {
            nome: "cali",
            punti: 0,
            falli: 0,
        },
        {
            nome: "roma",
            punti: 0,
            falli: 0,
        },
        {
            nome: "paris",
            punti: 0,
            falli: 0,
        },
        {
            nome: "bogota",
            punti: 0,
            falli: 0,
        },
        {
            nome: "america",
            punti: 0,
            falli: 0,
        },
    ]

    teams.forEach((team) => {
        team.falli = hola(0 , 30);
        team.punti = hola(0, 50)
    })
    console.log(teams);
    function hola (a, b){
      return  Math.ceil(Math.random()* (b - a + 1) + a)
    }


    