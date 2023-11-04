onEvent("recipes", (event) => {
  event.remove({
    id: "pneumaticcraft:explosion_crafting/compressed_iron_ingot",
  });
  event.remove({
    id: "pneumaticcraft:explosion_crafting/compressed_iron_block",
  });

  event.custom({
    type: "pneumaticcraft:pressure_chamber",
    inputs: [
      { item: "kubejs:mixed_block" },
      { item: "kubejs:mixed_ingot" },
      { item: "rftoolsbase:machine_frame" },
    ],
    pressure: 2.0,
    results: [{ item: "bloodmagic:altar" }],
  });
  event.remove({ id: "bloodmagic:blood_altar" });
});
