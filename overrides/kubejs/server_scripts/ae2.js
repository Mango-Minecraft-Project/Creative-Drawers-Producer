onEvent("recipes", (event) => {
  const { kubejs } = event.recipes;

  event.custom({
    type: "ae2:inscriber",
    mode: "press",
    ingredients: {
      middle: { item: "rftoolsbase:machine_frame" },
      top: { item: "kubejs:printed_refined_storage" },
      bottom: { item: "refinedstorage:quartz_enriched_iron_block" },
    },
    result: { item: "refinedstorage:machine_casing" },
  });

  event.custom({
    type: "ae2:inscriber",
    mode: "press",
    ingredients: {
      middle: { item: "refinedstorage:machine_casing" },
      top: { item: "kubejs:printed_mekanism" },
      bottom: { item: "bloodmagic:etherealslate" },
    },
    result: { item: "mekanism:steel_casing" },
  });

  event.custom({
    type: "ae2:inscriber",
    mode: "inscribe",
    ingredients: {
      middle: { item: "kubejs:mixed_refined_storage_block" },
      top: { item: "kubejs:refined_storage_press" },
    },
    result: { item: "kubejs:printed_refined_storage" },
  });

  event.custom({
    type: "ae2:inscriber",
    mode: "inscribe",
    ingredients: {
      middle: { item: "kubejs:mixed_mekanism_block" },
      top: { item: "kubejs:mekanism_press" },
    },
    result: { item: "kubejs:printed_mekanism" },
  });

  kubejs.shapeless("kubejs:gold_powder_dust", [
    "naturesaura:gold_powder",
    "powah:dielectric_paste",
  ]);
});
