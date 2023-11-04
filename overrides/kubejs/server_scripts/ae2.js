onEvent("recipes", (event) => {
  const { kubejs } = event.recipes;

  event.custom({
    type: "ae2:inscriber",
    mode: "press",
    ingredients: {
      middle: { item: "rftoolsbase:machine_frame" },
      top: { item: "kubejs:printed_rs" },
      bottom: { item: "refinedstorage:quartz_enriched_iron_block" },
    },
    result: { item: "refinedstorage:machine_casing" },
  });

  event.custom({
    type: "ae2:inscriber",
    mode: "press",
    ingredients: {
      middle: { item: "refinedstorage:machine_casing" },
      top: { item: "kubejs:printed_mek" },
      bottom: { item: "bloodmagic:etherealslate" },
    },
    result: { item: "mekanism:steel_casing" },
  });

  event.custom({
    type: "ae2:inscriber",
    mode: "inscribe",
    ingredients: {
      middle: { item: "kubejs:mix_rs_block" },
      top: { item: "kubejs:refined_storage_press" },
    },
    result: { item: "kubejs:printed_rs" },
  });

  event.custom({
    type: "ae2:inscriber",
    mode: "inscribe",
    ingredients: {
      middle: { item: "kubejs:mix_mek_block" },
      top: { item: "kubejs:mekanism_press" },
    },
    result: { item: "kubejs:printed_mek" },
  });

  kubejs.shapeless("kubejs:gold_powder__dust", [
    "naturesaura:gold_powder",
    "powah:dielectric_paste",
  ]);
});
