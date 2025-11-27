// server-images.js — API de imagens dos Brainrots
// npm i express
const express = require("express");
const app = express();
app.use(express.json({ limit: "1mb" }));

// Armazenamento em memória
const brainrotImages = {
  "1x1x1x1": "https://static.wikia.nocookie.net/stealabr/images/3/39/1x1x1x1t.png/revision/latest?cb=20251102022532",
  "La Casa Boo": "https://static.wikia.nocookie.net/stealabr/images/d/de/Casa_Booo.png/revision/latest?cb=20251024155352",
  "La Cucaracha": "https://static.wikia.nocookie.net/stealabr/images/4/46/La_Cucaracha.png/revision/latest?cb=20250920195538",
  "67": "https://static.wikia.nocookie.net/stealabr/images/8/83/BOIIIIIII_SIX_SEVEN_%F0%9F%98%82%F0%9F%98%82%F0%9F%98%82%F0%9F%98%82%F0%9F%98%82%F0%9F%98%82%F0%9F%98%82%F0%9F%98%82%F0%9F%98%82%F0%9F%98%82.png/revision/latest?cb=20251104182304",
  "La Extinct Grande": "https://static.wikia.nocookie.net/stealabr/images/c/cd/La_Extinct_Grande.png/revision/latest?cb=20250914041757",
  "La Grande Combinasion": "https://static.wikia.nocookie.net/stealabr/images/d/d8/Carti.png/revision/latest?cb=20250909171004",
  "Agarrini La Palini": "https://static.wikia.nocookie.net/stealabr/images/d/de/Agarrini_la_Palini.png/revision/latest?cb=20250915181151",
  "La Sahur Combinasion": "https://static.wikia.nocookie.net/stealabr/images/e/eb/Sahuria.png/revision/latest?cb=20250920025821",
  "La Secret Combinasion": "https://static.wikia.nocookie.net/stealabr/images/f/f2/Lasecretcombinasion.png/revision/latest?cb=20251006044448",
  "La Spooky Grande": "https://static.wikia.nocookie.net/stealabr/images/5/51/Spooky_Grande.png/revision/latest?cb=20251012022949",
  "La Supreme Combinasion": "https://static.wikia.nocookie.net/stealabr/images/5/52/SupremeCombinasion.png/revision/latest?cb=20250825130920",
  "La Taco Combinasion": "https://static.wikia.nocookie.net/stealabr/images/8/84/Latacocombi.png/revision/latest?cb=20251030015001",
  "La Vacca Saturno Saturnita": "https://static.wikia.nocookie.net/stealabr/images/d/d6/La_Vaccca_Saturno_Saturnita.png/revision/latest?cb=20250920024118",
  "Burguro and Fryuro": "https://static.wikia.nocookie.net/stealabr/images/6/65/Burguro-And-Fryuro.png/revision/latest?cb=20251007133840",
  "Burrito Bandito": "https://static.wikia.nocookie.net/stealabr/images/e/e6/PoTaTo.png/revision/latest?cb=20251022160548",
  "Bisonte Giuppitere": "https://static.wikia.nocookie.net/stealabr/images/1/1d/Bisonte_Giuppitere_normal.png/revision/latest?cb=20250920023344",
  "Blackhole Goat": "https://static.wikia.nocookie.net/stealabr/images/7/77/Blackhole_goat.png/revision/latest?cb=20250824023245",
  "Las Sis": "https://static.wikia.nocookie.net/stealabr/images/e/e8/Las_Sis.png/revision/latest?cb=20250914042020",
  "Las Tralaleritas": "https://static.wikia.nocookie.net/stealabr/images/f/f4/LasTralaleritas.png/revision/latest?cb=20250817183119",
  "Las Vaquitas Saturnitas": "https://static.wikia.nocookie.net/stealabr/images/e/e9/Chick_fil_a.png/revision/latest?cb=20250902172807",
  "Capitano Moby": "https://static.wikia.nocookie.net/stealabr/images/e/ef/Moby.png/revision/latest?cb=20251101185416",
  "Los 67": "https://static.wikia.nocookie.net/stealabr/images/d/db/Los-67.png/revision/latest?cb=20251103171526",
  "Los Bros": "https://static.wikia.nocookie.net/stealabr/images/5/53/BROOOOOOOO.png/revision/latest?cb=20250909152032",
  "Los Chicleteiras": "https://static.wikia.nocookie.net/stealabr/images/4/4d/Los_ditos.png/revision/latest?cb=20250928224101",
  "Chillin Chili": "https://static.wikia.nocookie.net/stealabr/images/e/e0/Chilin.png/revision/latest?cb=20251006204612",
  "Chipso and Queso": "https://static.wikia.nocookie.net/stealabr/images/f/f8/Chipsoqueso.png/revision/latest?cb=20251030022105",
  "Los Combinasionas": "https://static.wikia.nocookie.net/stealabr/images/3/38/Los_Combinasion.webp/revision/latest?cb=20251010171018",
  "Los Nooo My Hotspotsitos": "https://static.wikia.nocookie.net/stealabr/images/c/cb/LosNooMyHotspotsitos.png/revision/latest?cb=20250903124000",
  "Los Primos": "https://static.wikia.nocookie.net/stealabr/images/9/96/LosPrimos.png/revision/latest?cb=20251006044831",
  "Dragon Cannelloni": "https://static.wikia.nocookie.net/stealabr/images/0/02/Dragoncanneloni.png/revision/latest?cb=20251006140921",
  "Los Spooky Combinasionas": "https://static.wikia.nocookie.net/stealabr/images/8/8a/Lospookycombi.png/revision/latest?cb=20251030015823",
  "Los Tralaleritos": "https://static.wikia.nocookie.net/stealabr/images/0/0f/Los_Tralaleritos.png/revision/latest?cb=20250816183135",
  "Los Tortus": "https://static.wikia.nocookie.net/stealabr/images/c/cb/LosTortuss.png/revision/latest?cb=20251006205613",
  "Los Tacoritas": "https://static.wikia.nocookie.net/stealabr/images/4/40/My_kids_will_also_rob_you.png/revision/latest?cb=20250921171602",
  "Esok Sekolah": "https://static.wikia.nocookie.net/stealabr/images/2/2a/EsokSekolah2.png/revision/latest?cb=20250819001020",
  "Eviledon": "https://static.wikia.nocookie.net/stealabr/images/7/78/Eviledonn.png/revision/latest?cb=20251012023919",
  "Mariachi Corazoni": "https://static.wikia.nocookie.net/stealabr/images/5/5a/MariachiCora.png/revision/latest?cb=20251006211910",
  "Mieteteira Bicicleteira": "https://static.wikia.nocookie.net/stealabr/images/6/6d/24_sin_t%C3%ADtulo_20251023155436.png/revision/latest/scale-to-width-down/1000?cb=20251023215549",
  "Money Money Puggy": "https://static.wikia.nocookie.net/stealabr/images/0/09/Money_money_puggy.png/revision/latest?cb=20250928011934",
  "Fragrama and Chocrama": "https://static.wikia.nocookie.net/stealabr/images/5/56/Fragrama.png/revision/latest?cb=20251109011733",
  "Garama and Madundung": "https://static.wikia.nocookie.net/stealabr/images/e/ee/Garamadundung.png/revision/latest?cb=20250816022557",
  "Graipuss Medussi": "https://static.wikia.nocookie.net/stealabr/images/b/b8/Graipuss.png/revision/latest?cb=20250816173622",
  "Pot Hotspot": "https://static.wikia.nocookie.net/stealabr/images/4/4b/Pot_Hotspot.png/revision/latest?cb=20250915194349",
  "Quesadilla Crocodila": "https://static.wikia.nocookie.net/stealabr/images/3/3f/QuesadillaCrocodilla.png/revision/latest?cb=20251006143118",
  "Quesadillo Vampiro": "https://static.wikia.nocookie.net/stealabr/images/6/6b/Quesa_vampiro.png/revision/latest?cb=20251021233500",
  "Spooky and Pumpky": "https://static.wikia.nocookie.net/stealabr/images/d/d6/Spookypumpky.png/revision/latest?cb=20251012023638",
  "Spaghetti Tualetti": "https://static.wikia.nocookie.net/stealabr/images/b/b8/Spaghettitualetti.png/revision/latest?cb=20250928162127",
  "Ketupat Kepat": "https://static.wikia.nocookie.net/stealabr/images/a/ac/KetupatKepat.png/revision/latest?cb=20251103172238",
  "Tang Tang Keletang": "https://static.wikia.nocookie.net/stealabr/images/8/8f/TangTang.png/revision/latest?cb=20251014024653",
  "Tictac Sahur": "https://static.wikia.nocookie.net/stealabr/images/6/6f/Time_moving_slow.png/revision/latest?cb=20251103171934",
  "Torrtuginni Dragonfrutini": "https://static.wikia.nocookie.net/stealabr/images/8/8c/Crack.png/revision/latest?cb=20250919134500",
  "Los Mobilis": "https://static.wikia.nocookie.net/stealabr/images/2/27/Losmobil.png/revision/latest?cb=20251012023251",
  "Los Karkeritos": "https://static.wikia.nocookie.net/stealabr/images/a/a8/Loskarkeritos.png/revision/latest?cb=20251006210532",
  "Dul Dul Dul": "https://static.wikia.nocookie.net/stealabr/images/8/82/Dul_Dul_Dul.png/revision/latest?cb=20250909224519",
  "Chimpanzini Spiderini": "https://static.wikia.nocookie.net/stealabr/images/4/49/Chimpanzini_Spiderini_Secret.webp/revision/latest?cb=20251108141108",
  "Nuclearo Dinossauro": "https://static.wikia.nocookie.net/stealabr/images/9/99/THERE_ARE_BUGS_UNDER_YOUR_SKIN.png/revision/latest?cb=20250902180735",
  "Noo my Candy": "https://static.wikia.nocookie.net/stealabr/images/1/12/Noo_my_candy_transparent.png/revision/latest?cb=20251105045041",
  "Jackorilla": "https://static.wikia.nocookie.net/stealabr/images/3/32/Jackorilla.png/revision/latest?cb=20251025232823",
  "Job Job Job Sahur": "https://static.wikia.nocookie.net/stealabr/images/0/03/Job.webp/revision/latest?cb=20250817162104",
  "Rang Ring Bus": "https://static.wikia.nocookie.net/stealabr/images/2/2b/RingRangBus2.png/revision/latest?cb=20251018134839",
  "Sammyni Spyderini": "https://static.wikia.nocookie.net/stealabr/images/9/98/Sammy_blud.png/revision/latest/scale-to-width-down/1000?cb=20250920142855",
  "Tralaledon": "https://static.wikia.nocookie.net/stealabr/images/7/79/Brr_Brr_Patapem.png/revision/latest?cb=20250909171639",
  "Tacorita Bicicleta": "https://static.wikia.nocookie.net/stealabr/images/0/0f/Gonna_rob_you_twin.png/revision/latest?cb=20251006133721",
  "To to to Sahur": "https://static.wikia.nocookie.net/stealabr/images/5/58/Africa_by_toto_%28to_sahur%29.png/revision/latest?cb=20250924041210",
  "Trickolino": "https://static.wikia.nocookie.net/stealabr/images/5/54/Trickortreat.png/revision/latest?cb=20251030020824",
  "Yess my examine": "https://static.wikia.nocookie.net/stealabr/images/8/8f/Yessmyexamine.png/revision/latest?cb=20251006200210",
  "Vulturino Skeletono": "https://static.wikia.nocookie.net/stealabr/images/e/e0/Vulturino.png/revision/latest?cb=20251012030529",
  "Karkerkar Kurkur": "https://static.wikia.nocookie.net/stealabr/images/d/d9/Karkerkar_kurkur.png/revision/latest?cb=20250819015531",
  "Headless Horseman": "https://static.wikia.nocookie.net/stealabr/images/f/ff/Headlesshorseman.png/revision/latest?cb=20251030020338",
  "Horegini Boom": "https://static.wikia.nocookie.net/stealabr/images/5/51/Hboom.png/revision/latest?cb=20251018135659",
  "Chicleteira Bicicleteira": "https://static.wikia.nocookie.net/stealabr/images/5/5a/Chicleteira.png/revision/latest?cb=20250921012655",
  "Chicleteirina Bicicleteirina": "https://static.wikia.nocookie.net/stealabr/images/8/83/Chicleteirina_Bicicleteirina.png/revision/latest?cb=20251012024219",
  "Celularcini Viciosini": "https://static.wikia.nocookie.net/stealabr/images/3/38/DO_NOT_GRAB_MY_PHONE%21%21%21.png/revision/latest?cb=20250914173250",
  "Perrito Burrito": "https://static.wikia.nocookie.net/stealabr/images/6/6d/Yummytacodog.png/revision/latest?cb=20251003131610",
  "Meowl": "https://static.wikia.nocookie.net/stealabr/images/b/b8/Clear_background_clear_meowl_image.png/revision/latest?cb=20251022133154",
  "Strawberry Elephant": "https://static.wikia.nocookie.net/stealabr/images/5/58/Strawberryelephant.png/revision/latest?cb=20250830235735",
  "Guerriro Digitale": "https://static.wikia.nocookie.net/stealabr/images/9/98/Guerrirodigitale.png/revision/latest?cb=20250830234708",
  "Zombie Tralala": "https://static.wikia.nocookie.net/stealabr/images/6/62/ZombieTralala.png/revision/latest?cb=20251012025915",
  "Los Jobcitos": "https://static.wikia.nocookie.net/stealabr/images/a/af/LosJobcitos.png/revision/latest?cb=20251006202121",
  "Los Karkeritos": "https://static.wikia.nocookie.net/stealabr/images/a/a8/Loskarkeritos.png/revision/latest?cb=20251006210532",
  "Los Matteos": "https://static.wikia.nocookie.net/stealabr/images/8/8a/LosMatteos.png/revision/latest?cb=20250817040306",
  "Los Spyderinis": "https://static.wikia.nocookie.net/stealabr/images/f/ff/Los_Spyderinis.png/revision/latest?cb=20250823230850",
  "Los Hotspotsitos": "https://static.wikia.nocookie.net/stealabr/images/6/69/Loshotspotsitos.png/revision/latest?cb=20250818235914",
  "Chachechi": "https://static.wikia.nocookie.net/stealabr/images/8/81/ChachechiNew.png/revision/latest?cb=20250928150109",
  "Pot Pumpkin": "https://static.wikia.nocookie.net/stealabr/images/e/e9/PotHotpumkin.png/revision/latest?cb=20251108082242",
  "Pumpkini Spyderini": "https://static.wikia.nocookie.net/stealabr/images/d/da/Sammypumpkin.png/revision/latest?cb=20251030021310",
  "Ketchuru and Musturu": "https://static.wikia.nocookie.net/stealabr/images/1/14/Ketchuru.png/revision/latest?cb=20251021163857",
  "Los Puggies": "https://static.wikia.nocookie.net/stealabr/images/c/c8/LosPuggies2.png/revision/latest?cb=20251109012744",
  "Los Spaghettis": "https://static.wikia.nocookie.net/stealabr/images/d/db/LosSpaghettis.png/revision/latest?cb=20251109012155",
  "Extinct Tralalero": "https://static.wikia.nocookie.net/stealabr/images/c/cd/Jaws.png/revision/latest?cb=20250914040916",
  "Telemorte": "https://static.wikia.nocookie.net/stealabr/images/2/20/Telemorte.png/revision/latest?cb=20251030015504",
  "Boatito Auratito": "https://static.wikia.nocookie.net/stealabr/images/6/68/Iola_.png/revision/latest?cb=20251028162905",
  "W or L": "https://static.wikia.nocookie.net/stealabr/images/2/28/Win_Or_Lose.png/revision/latest?cb=20251123084507",
  "Lavadorito Spinito": "https://static.wikia.nocookie.net/stealabr/images/f/ff/Lavadorito_Spinito.png/revision/latest?cb=20251123122422",
  "Fishino Clownino": "https://static.wikia.nocookie.net/stealabr/images/d/d6/Fishino_Clownino.png/revision/latest?cb=20251123122601",
  "Orcaledon": "https://static.wikia.nocookie.net/stealabr/images/a/a6/Orcaledon.png/revision/latest?cb=20251119170121",
  "Los Burritos": "https://static.wikia.nocookie.net/stealabr/images/9/97/LosBurritos.png/revision/latest?cb=20251123123907",
  "Los Cucarachas": "https://static.wikia.nocookie.net/stealabr/images/a/ac/Los_Cucarachas_no_effect.png/revision/latest?cb=20251125124717",
  "Swag Soda": "https://static.wikia.nocookie.net/stealabr/images/9/9f/Swag_Soda.png/revision/latest?cb=20251116003702",
  "Los Planitos": "https://static.wikia.nocookie.net/stealabr/images/8/83/Los_Planitos.png/revision/latest?cb=20251123122230",
  "Los Quesadillas": "https://static.wikia.nocookie.net/stealabr/images/9/99/LosQuesadillas.png/revision/latest?cb=20251123123650",
  "Cuadramat and Pakrahmatmamat": "https://static.wikia.nocookie.net/stealabr/images/a/a3/Cuadramat.png/revision/latest?cb=20251126164937",
  "Pirulitoita Bicicleteira": "https://static.wikia.nocookie.net/stealabr/images/d/dc/Piruleta.png/revision/latest?cb=20251109011358"
};

// CORS básico
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  if (req.method === "OPTIONS") return res.sendStatus(204);
  next();
});

// ====== ROTAS ======

// GET /list → lista todos os brainrots e suas imagens
app.get("/list", (req, res) => {
  res.json({ count: Object.keys(brainrotImages).length, data: brainrotImages });
});

// GET /image/:name → retorna apenas o link da imagem de um brainrot
app.get("/image/:name", (req, res) => {
  const name = req.params.name.trim().toLowerCase();
  const foundKey = Object.keys(brainrotImages).find(
    (k) => k.toLowerCase() === name
  );
  if (!foundKey) return res.status(404).json({ error: "Brainrot não encontrado" });
  res.json({ name: foundKey, image: brainrotImages[foundKey] });
});

// POST /add → adiciona ou atualiza imagem
app.post("/add", (req, res) => {
  const { name, image } = req.body || {};
  if (!name || !image)
    return res.status(400).json({ error: "name e image são obrigatórios" });
  brainrotImages[name] = image;
  res.json({ ok: true, message: "Brainrot salvo/atualizado", data: { name, image } });
});

// DELETE /remove/:name → remove imagem de um brainrot
app.delete("/remove/:name", (req, res) => {
  const name = req.params.name.trim().toLowerCase();
  const foundKey = Object.keys(brainrotImages).find(
    (k) => k.toLowerCase() === name
  );
  if (!foundKey) return res.status(404).json({ error: "Brainrot não encontrado" });
  delete brainrotImages[foundKey];
  res.json({ ok: true, removed: foundKey });
});

// ====== SAÚDE ======
app.get("/health", (req, res) => res.json({ ok: true, time: new Date().toISOString() }));

const PORT = Number(process.env.PORT || 4000);
app.listen(PORT, () => console.log(`[IMG-API] rodando em :${PORT}`));
