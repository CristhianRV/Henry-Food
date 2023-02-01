const cleanApi = (api) => {
  const array = api.map((element) => {
    return {
      id: element.id,
      name: element.title,
      description: element.summary,
      healthScore: element.healthScore,
      preparation: element.analyzedInstructions[0]?.steps
        .map((step) => step.step)
        .join(" "),
      diets: element.diets,
      image: element.image,
    };
  });
  return array;
};

// const cleanBDD = (bdd) => {
//   const newBDD = [...JSON.stringify(bdd)];
//   const resultado = [];

// newBDD.forEach((element) => console.log(element));
// for (let index of newBDD) {
// console.log(index);
// index.Diets?.forEach((element) => {
//   console.log(element);
// resultado.push(element.name);
// });
// index.diets = resultado;
// delete index.Diets;
// resultado = [];
// }
//   console.log(newBDD);
// };

module.exports = {
  cleanApi,
  // cleanBDD,
};
