onEvent("recipes", (event) => {
  event.custom({
    type: "ae2:inscriber",
    mode: "press",
    result: {
      item: "refinedstorage:machine_casing",
    },
    ingredients: {
      middle: {
        item: "rftoolsbase:machine_frame",
      },
      top: {
        item: "kubejs:printed_rs",
      },
      bottom: {
        item: "refinedstorage:quartz_enriched_iron_block",
      },
    },
  });

  event.custom({
    type: "ae2:inscriber",
    mode: "press",
    result: {
      item: "mekanism:steel_casing",
    },
    ingredients: {
      middle: {
        item: "refinedstorage:machine_casing",
      },
      top: {
        item: "kubejs:printed_mek",
      },
      bottom: {
        item: "bloodmagic:etherealslate",
      },
    },
  });

  event.custom({
    type: "ae2:inscriber",
    mode: "inscribe",
    result: {
      item: "kubejs:printed_rs",
    },
    ingredients: {
      middle: {
        item: "kubejs:mix_rs_block",
      },
      top: {
        item: "kubejs:rs_press",
      },
    },
  });

  event.custom({
    type: "ae2:inscriber",
    mode: "inscribe",
    result: {
      item: "kubejs:printed_mek",
    },
    ingredients: {
      middle: {
        item: "kubejs:mix_mek_block",
      },
      top: {
        item: "kubejs:mek_press",
      },
    },
  });

  event.shapeless("kubejs:gold_powder__dust", [
    "naturesaura:gold_powder",
    "powah:dielectric_paste",
  ]);
});
