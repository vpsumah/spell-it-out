/*==================================================
  CATALOGUE DES LIVRES
  Pour ajouter un livre, copier simplement un objet
  et modifier ses informations.
==================================================*/

const books = [

  {
    id: "sword",

    title: "SWORD",

    author: "VP Sumah",

    genre: "Fantasy / Merveilleux",

    cover: "assets/images/books/sword.png",

    /* Langue affichée par défaut */
    defaultLanguage: "en",

    /* Les deux éditions du même livre */
    languages: {

      en: {
        label: "English",

        pages: "570",

        publication: "2025",

        isbn: "9781738810734",

        summary: `
          At Reality District, magic is shaped with bare hands, and quests never quite go as planned.

Sam arrives alone, with little experience but plenty of nerve to hold her own against just about anyone. Between an enemy who seems to know far more than he should about the rules of this place, alliances forged through trial after trial, and a found family she never set out to find, she learns to navigate a world where nothing is ever quite what it seems.

A novel about friendship, courage you didn't know you had, and what you're willing to become for the people who matter.
        `,

        excerpt: `
          I felt a sharp pain in my back, followed by what could only be de
scribed as an elbow jabbing directly into my spine. Before I could
process what had just happened, I stumbled forward and smacked my
cheek against someone else’s side. They immediately shoved me away,
and I flailed helplessly, trying to grab onto anything, or anyone, within
reach. No luck. A second later, I was on the ground, sprawled out in the
most undignified way possible. My back, my cheek, and my butt all
throbbed in protest.
I blinked up at my surroundings, trying to focus despite the ache. A
dense crowd surged around me, a blur of bodies moving in all direc
tions. Not one person stopped or even glanced my way. Forget lending
a hand; no one even noticed I was there. The bystander effect. It’s this
lovely little social theory that says the more people are around, the less
likely any one person is to help you. I could personally confirm this the
ory right now. Someone get me a Nobel Prize.
It’s not like I expected much from humanity, anyway. I’d lost faith
in the collective "goodness" of people a long time ago. Don’t get me
wrong... I get the whole “look out for yourself” thing. It’s important.
But that doesn’t mean everyone else is just an NPC in your personal
story. People have lives, dreams, fears, and little sparks of brilliance that
are all their own. We just forget to see it sometimes. The world, though?
It’s been on a downward spiral. Over the past decade, people have be
come more isolated, pulling away from the idea of community like it’s
some outdated relic. The connection to their own humanity? Practi
cally non-existent. Still, as much as I despised what society had become,

I couldn’t help loving people as individuals. Call me idealistic, but I
thought they were worth saving. That’s why I accepted the job. That’s
why I was here. And that’s why I was sprawled out on my back in the
middle of... well, wherever this was.
I sighed loudly and hauled myself to my feet, brushing the dirt and
dust off my brand-new robe. It was the prettiest one available for the
trip—deep purple with dark blue edges that reached just below my
calves. The hood was massive and dramatic, perfect for hiding in or
looking mysterious. My boots, made of light brown leather, featured
an embossed design of a deer ensnared by vines. I didn’t know if it
meant anything important here, but it looked cool. It was either these or
combat boots, and while I had nothing against combat boots, they just
didn’t vibe with the robe. Yes, I think fashion matters. Sue me.
Once I’d straightened myself out, I maneuvered through the crowd,
weaving in a zigzag pattern to avoid another faceplant. After what felt
like an eternity, I reached a wooden deck next to a building made of
stone and dark wood. Leaning my back against the wall, I let out a
breath and surveyed the chaos around me.
The plaza was enormous and teeming with life. It formed a loose circle,
bordered by high stone walls to my left and buildings of various sizes to
my right. Directly in front of me stood the city’s entrance gate—mas
sive, ornate, and clearly built to intimidate anyone thinking of starting
trouble.
The crowd was a dizzying blur of activity. People of all kinds darted
around in every direction, wearing everything from simple tunics to full
suits of armor that clinked loudly as they walked. The air buzzed with
overlapping conversations, occasional bursts of laughter, and the occa
sional shout or scream. Everyone seemed to be talking over everyone
else. It was honestly a miracle I hadn’t been trampled earlier. Beyond
the crowd, colorful banners bearing different sigils fluttered from the
buildings that surrounded the plaza. It looked like some kind of gather
ing or festival was taking place, which explained the sheer mass of peo

ple swarming the area. Carefully stepping off the deck, I avoided getting
swept up in the chaos again. The structure where I’d taken sanctuary
caught my attention. Above the front door, a wooden sign hung, de
picting two frothy beer mugs clinking together. Pretty self-explanatory.
A tavern
        `,

        buyLink: "https://www.amazon.ca/-/fr/S-W-R-D-V-P-Sumah/dp/1738810739/"
      },


      fr: {
        label: "Français",

        pages: "608",

        publication: "2025",

        isbn: "9782981897435",

        summary: `
          À Reality District, la magie se sculpte à mains nues et les quêtes ne se terminent jamais tout à fait comme prévu.

Sam y arrive seule, sans grande expérience, mais avec assez de culot pour tenir tête à peu près à tout le monde. Entre un ennemi qui semble en savoir bien plus qu'il ne devrait sur les règles de cet endroit, des alliances qui se forgent au fil des épreuves, et une famille de cœur qu'elle n'a jamais cherché à trouver, elle apprend à naviguer un monde où rien n'est jamais tout à fait ce qu'il semble être.

Un roman sur l'amitié, le courage qu'on ne savait pas avoir, et ce qu'on est prêt à devenir pour les gens qui comptent.
        `,

        excerpt: `
          J’ai ressenti une douleur vive dans le dos, suivie immédiatement par
ce qui semblait être un coude s’enfonçant directement dans ma
colonne vertébrale. Pas le temps de réfléchir à ce qui venait de se passer :
j’ai vacillé vers l’avant, et ma joue est allée heurter le flanc de quelqu’un.
La réaction fut instantanée : cette personne m’a repoussé sans la moin
dre hésitation. J’ai agité les bras dans tous les sens, tentant désespéré
mentd’attraper quelque chose (ou quelqu’un) qui aurait pu m’éviter de
tomber. Mais non. Une seconde plus tard, j’étais au sol, aplati comme
une crêpe dans une position aussi absurde qu’humiliante. Mon dos, ma
joue et mes fesses protestaient d’une même voix.
De toute façon, ce n’est pas comme si j’attendais grand-chose de
l’humanité. J’avais perdu foi en la “bonté” collective des gens il y a
longtemps. Ne vous méprenez pas... je comprends l’idée du “chacun
pour soi”. C’est important. Mais ça ne veut pas dire que tous les autres
sont juste des PNJ dans l’histoire personnelle que vous vous racontez.
Les gens ont desvies, des rêves, des peurs, et ces petites étincelles de génie
qui leur appartiennent entièrement. On oublie juste de les voir, parfois.
Le monde, lui ? Il est en chute libre. Depuis les dernières décennie,
les gens se sont repliés sur eux-mêmes, se détachant peu à peu de l’idée
de communauté, comme si c’était une relique poussiéreuse d’un passé
révolu. Leur connexion à leur propre humanité ? Pratiquement inexis
tante. Et pourtant, aussi désabusé que j’étais par ce qu’était devenue la
société, je ne pouvais pas m’empêcher d’aimer les gens en tant qu’indi
vidus. Appelez ça de l’idéalisme, mais je pensais qu’ils valaient la peine
d’être sauvés.
C’est pour ça que j’ai accepté le boulot. C’est pour ça que j’étais là. Et
c’est pour ça que je me retrouvais étalé sur le dos, au milieu de… eh bien,
peu importe où j’étais.
Je soupirai bruyamment avant de me hisser sur mes pieds, épousse
tant la terre et la poussière de ma robe toute neuve. C’était la plus jolie
que j’avais trouvée pour le voyage : un violet profond avec des bordures
bleu sombre qui tombaient juste en dessous de mes mollets. La capuche
était massive et dramatique, parfaite pour se cacher ou cultiver un air
mystérieux. Mes bottes, en cuir brun clair, étaient ornées d’un motif en
relief représentant un cerf pris dans des lianes. Je n’avais aucune idée si
ça avait une quelconque signification ici, mais ça en jetait. C’était ça ou
des bottes de combat, et mêmesije n’ai rien contre les bottes de combat,
elles n’allaient pas du tout avec la robe. Oui, je pense que la mode a son
importance—vous pouvez me juger si ça vous amuse.
Unefois que je m’étais remis d’aplomb, je me frayai un chemin à tra
vers la foule, zigzaguant habilement pour éviter une nouvelle collision
frontale avec le sol. Après ce qui m’avait semblé une éternité, j’arrivai en
fin sur uneplateforme en bois,adosséeàunbâtimentenpierreetenbois
sombre. Je laissai échapper un soupir, appuyai mon dos contre le mur,
et observai le chaos qui m’entourait.
La place était gigantesque et débordante de vie. Elle formait une
sorte de cercle irrégulier, bordé à ma gauche par de hautes murailles de
pierre et à ma droite par des bâtiments de tailles diverses. Juste en face,
se dressait la porte d’entrée de la ville : massive, ornée, et manifestement
conçue pour intimider quiconque aurait eu l’idée saugrenue de semer la
zizanie ici.
La foule, elle, était un véritable tourbillon d’activité. Des gens de
toutes sortes se précipitaient dans toutes les directions, vêtus de tenues
allant de simples tuniques à des armures complètes qui tintaient
bruyamment à chaque pas. L’air vibrait d’un bourdonnement incessant
: des conversations qui se superposaient, des éclats de rire occasionnels,
et parfois un cri ou un hurlement. Tout le monde semblait parler plus

fort que son voisin.Honnêtement,c’étaitunmiraclequejen’aiepasdéjà
été piétiné.
Au-delà de la foule, des bannières colorées, ornées de différents bla
sons, flottaient depuis les bâtiments qui encerclaient la place. Cela
ressemblait à un rassemblement, ou peut-être une fête, ce qui expliquait
cette marée humaine envahissant l’endroit. Avecprécaution, je descendis
de la plateforme, prenant soin de ne pas me faire à nouveau happer par
la cohue.
La structure où j’avais trouvé refuge attira soudain mon attention.
Au-dessus de la porte d’entrée, une enseigne en bois pendait, représen
tant deux chopes de bière mousseuses qui s’entrechoquaient. Le mes
sage était clair.
Une taverne
        `,

        buyLink: "https://www.amazon.ca/-/fr/V-P-Sumah-ebook/dp/B0G7CN9GLY/"
      }

    }

  }

];