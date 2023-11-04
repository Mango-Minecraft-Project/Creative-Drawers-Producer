onEvent("recipes", (event) => {
  event.custom({
    type: "occultism:spirit_fire",
    ingredient: { item: "thermal:quartz_dust" },
    result: { item: "occultism:otherworld_ashes" },
  });
  event.remove({ output: "occultism:otherworld_ashes" });

  event.custom({
    type: "occultism:spirit_fire",
    ingredient: { item: "thermal:machine_frame" },
    result: { item: "occultism:otherstone" },
  });
  event.remove({ output: "occultism:otherstone" });

  event.custom({
    type: "occultism:spirit_fire",
    ingredient: { item: "kubejs:gold_powder_dust" },
    result: { item: "ae2:sky_dust" },
  });
});
