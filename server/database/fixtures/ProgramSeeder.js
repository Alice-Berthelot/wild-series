const AbstractSeeder = require("./AbstractSeeder");
const CategorySeeder = require("./CategorySeeder");

class ProgramSeeder extends AbstractSeeder {
  constructor() {
    // Call the constructor of the parent class (AbstractSeeder) with appropriate options
    super({ table: "program", truncate: true, dependencies: [CategorySeeder] });
  }

  run() {
    const programs = [
      {
        title: "The Good Place",
        synopsis:
          "À sa mort, Eleanor Shellstrop est envoyée au Bon Endroit, un paradis fantaisiste réservé aux individus exceptionnellement bienveillants. Or Eleanor n'est pas exactement une « bonne personne » et comprend vite qu'il y a eu erreur sur la personne. Avec l'aide de Chidi, sa prétendue âme sœur dans l'au-delà, la jeune femme est bien décidée à se redécouvrir.",
        poster:
          "https://img.betaseries.com/JwRqyGD3f9KvO_OlfIXHZUA3Ypw=/600x900/smart/https%3A%2F%2Fpictures.betaseries.com%2Ffonds%2Fposter%2F94857341d71c795c69b9e5b23c4bf3e7.jpg",
        country: "USA",
        year: 2016,
        category_id: this.getRef("category_Comédie").insertId,
      },
      {
        title: "Dark",
        synopsis:
          "Quatre familles affolées par la disparition d'un enfant cherchent des réponses et tombent sur un mystère impliquant trois générations qui finit de les déstabiliser.",
        poster:
          "https://img.betaseries.com/zDxfeFudy3HWjxa6J8QIED9iaVw=/600x900/smart/https%3A%2F%2Fpictures.betaseries.com%2Ffonds%2Fposter%2Fc47135385da176a87d0dd9177c5f6a41.jpg",
        country: "Allemagne",
        year: 2017,
        category_id: this.getRef("category_Science-Fiction").insertId,
      },
      {
        title: "La Chronique des Bridgerton",
        synopsis:
          "Dans la ville de Londres, durant l'époque de la Régence, Daphne Bridgerton, la fille la plus âgée d'une influente famille, est supposée chercher un époux, cependant la compétition est intense et ses désirs se situent en d'autres lieux...",
        poster:
          "https://img.betaseries.com/A-N9Cv2isESvENHQFFEnAZ-aG5E=/600x900/smart/https%3A%2F%2Fpictures.betaseries.com%2Ffonds%2Fposter%2F4ae72657a60c537027e4bcf772713615.jpg",
        country: "USA",
        year: 2020,
        category_id: this.getRef("category_Romance").insertId,
      },
      {
        title: "Sense8",
        synopsis:
          "Huit individus éparpillés aux quatre coins du monde sont connectés par une soudaine et violente vision. Désormais liés, ils se retrouvent capables du jour au lendemain de se voir, de se sentir, de s'entendre et de se parler comme s'ils étaient au même endroit, et ainsi accéder aux plus sombres secrets des uns et des autres. Les huit doivent dès lors s'adapter à ce nouveau don, mais aussi comprendre le pourquoi du comment. Fuyant une organisation qui veut les capturer, les tuer ou faire d'eux des cobayes, ils cherchent quelles conséquences ce bouleversement pourrait avoir sur l'humanité.",
        poster:
          "https://img.betaseries.com/mEFbUwlT02i1XuF2_bzmnFFaPJc=/600x900/smart/https%3A%2F%2Fpictures.betaseries.com%2Ffonds%2Fposter%2F7e07bd37d21f0708c3a79f9b9b0ffabb.jpg",
        country: "USA",
        year: 2015,
        category_id: this.getRef("category_Science-Fiction").insertId,
      },
      {
        title: "Game of Thrones",
        synopsis:
          "Adaptée de la série de romans écrits par George R. R. Martin, Game of Thrones est une grande saga d’héroic fantasy.",
        poster:
          "https://img.betaseries.com/ehxvwkVLO2NcKcpevl3lfk_5c-M=/600x900/smart/https%3A%2F%2Fpictures.betaseries.com%2Ffonds%2Fposter%2F4d09984be7bf0c385b21e2974bc12e8b.jpg",
        country: "USA",
        year: 2011,
        category_id: this.getRef("category_Aventure").insertId,
      },
    ];

    programs.forEach((program) => {
      this.insert(program); // insert into program(title, synopsis, poster, country, year, category_id) values (?, ?, ?, ?, ?, ?)
    });
  }
}

// Export the ProgramSeeder class
module.exports = ProgramSeeder;