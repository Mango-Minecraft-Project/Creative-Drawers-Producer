onEvent("recipes", (event) => {
  event.shaped("create:crushing_wheel", ["SSS", "SWS", "SSS"], {
    S: "create:andesite_alloy",
    W: "create:shaft",
  });
});
