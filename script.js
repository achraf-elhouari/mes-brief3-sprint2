const config = {
  ateliers: [
    { id: 1, titre: "Créer une affiche avec Figma", places: 8 },
    { id: 2, titre: "Découvrir les raccourcis VS Code", places: 0 },
    { id: 3, titre: "Construire un quiz en JavaScript", places: 5 },
    { id: 4, titre: "Créer une page responsive avec Tailwind CSS", places: 12 },
    { id: 6, titre: "Animer une interface avec CSS", places: 0 },
  ],
  modes: {
    presentiel: "En présentiel",
    distance: "À distance",
  },
  campus: ["Youssoufia", "Asfi", "Nador"],
};

const selectedConfig = {
  atelierId: null,
  mode: "",
  campus: "",
  email: "",
};

const listAtelier = document.querySelector("#liste-ateliers");
const listMode = document.querySelector("#liste-modes");
const listPlaces = document.querySelector("#liste-campus");
const formInscription = document.querySelector('#inscription-form');


function createAtelier(atelier){
  const label = document.createElement('label');
  label.className = 'carte-choix';
  const input = document.createElement('input');
  input.type = 'radio';
  input.name = 'atelier';
  input.value = atelier.id;
  input.setAttribute('aria-describedby', `erreur-atelier`);
  const spanParent = document.createElement('span');
  const strongChild = document.createElement('strong');
  strongChild.className = `atelier-titre`;
  strongChild.textContent = atelier.titre;
  console.log(atelier.titre);
  
  const spanChild = document.createElement('span');
  spanChild.className = `atelier-places detail`;
  spanChild.textContent = atelier.places;
  console.log(atelier.places);
  spanParent.append(strongChild);
  spanParent.append(spanChild);
  label.append(input, spanParent);
  return label;
}

for (const atelier of config.ateliers){
  listAtelier.textContent = 'Achraf'
  if (atelier.places > 0){
    listAtelier.appendChild(createAtelier(atelier));
    console.log(listPlaces);
  }
}