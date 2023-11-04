onEvent("recipes", (event) => {
  const { kubejs } = event.recipes;

  kubejs.shaped("create:crushing_wheel", ["SSS", "SWS", "SSS"], {
    S: "create:andesite_alloy",
    W: "create:shaft",
  });
});
