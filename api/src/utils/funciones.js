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

module.exports = {
  cleanApi,
};
