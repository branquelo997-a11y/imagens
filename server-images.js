// server-images.js — API de imagens dos Brainrots
// npm i express
const express = require("express");
const app = express();
app.use(express.json({ limit: "1mb" }));

// Armazenamento em memória
const brainrotImages = {
  "1x1x1x1": "https://static.wikia.nocookie.net/stealabr/images/3/39/1x1x1x1t.png/revision/latest/smart/width/40/height/30?cb=20251102022532",
  "La Casa Boo": "https://static.wikia.nocookie.net/stealabr/images/d/de/Casa_Booo.png/revision/latest/smart/width/40/height/30?cb=20251024155352",
  "La Cucaracha": "https://static.wikia.nocookie.net/stealabr/images/4/46/La_Cucaracha.png/revision/latest/smart/width/40/height/30?cb=20250920195538",
  "67": "https://static.wikia.nocookie.net/stealabr/images/8/83/BOIIIIIII_SIX_SEVEN_%F0%9F%98%82%F0%9F%98%82%F0%9F%98%82%F0%9F%98%82%F0%9F%98%82%F0%9F%98%82%F0%9F%98%82%F0%9F%98%82%F0%9F%98%82%F0%9F%98%82.png/revision/latest/smart/width/40/height/30?cb=20251104182304",
  "La Extinct Grande": "https://static.wikia.nocookie.net/stealabr/images/c/cd/La_Extinct_Grande.png/revision/latest/smart/width/40/height/30?cb=20250914041757",
  "La Grande Combinasion": "https://static.wikia.nocookie.net/stealabr/images/d/d8/Carti.png/revision/latest/smart/width/40/height/30?cb=20250909171004",
  "Agarrini La Palini": "https://static.wikia.nocookie.net/stealabr/images/d/de/Agarrini_la_Palini.png/revision/latest/smart/width/40/height/30?cb=20250915181151",
  "La Sahur Combinasion": "https://static.wikia.nocookie.net/stealabr/images/e/eb/Sahuria.png/revision/latest/smart/width/40/height/30?cb=20250920025821",
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
  "Torrtuginni Dragonfrutini": "https://static.wikia.nocookie.net/stealabr/images/8/8c/Crack.png/revision/latest?cb=20250919134500"
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
