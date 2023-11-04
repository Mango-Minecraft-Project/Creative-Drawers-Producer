onEvent('recipes', event => {
    //remove
    event.remove({output:'mekanism:alloy_infused'})
    event.remove({output:'mekanism:alloy_reinforced'})
    event.remove({output:'mekanism:alloy_atomic'})

    event.remove({output:'mekanism:basic_control_circuit'})
    event.remove({output:'mekanism:advanced_control_circuit'})
    event.remove({output:'mekanism:elite_control_circuit'})
    event.remove({output:'mekanism:ultimate_control_circuit'})


    //ex crafting table add

    event.custom({
        "type": "extendedcrafting:shaped_table",
        "tier": 4,
        "pattern": [
          "         ",
          "         ",
          "         ",
          "   ABA   ",
          "   CDC   ",
          "   ABA   ",
          "         ",
          "         ",
          "         "
        ],
        "key": {
          "A": {
            "type": "forge:nbt",
            "item": "extendedcrafting:singularity",
            "count": 1,
            "nbt": "{Id:\"extendedcrafting:pllet\"}"
          },
          "B": {
            "item": "extendedcrafting:the_ultimate_block"
          },
          "C": {
            "item": "extendedcrafting:the_ultimate_catalyst"
          },
          "D": {
            "item": "mekanism:ultimate_induction_cell"
          }
        },
        "result": {
          "item": "kubejs:ultimate_pllet_cell"
        }
      })



      event.custom({
        "type": "extendedcrafting:shaped_table",
        "tier": 4,
        "pattern": [
          "ABBBCBBBA",
          "BDDDDDDDB",
          "BDEEEEEDB",
          "BDEFGFEDB",
          "BDEGHGEDB",
          "BDEFGFEDB",
          "BDEEEEEDB",
          "BDDDDDDDB",
          "ABBBCBBBA"
        ],
        "key": {
          "A": {
            "item": "extendedcrafting:the_ultimate_catalyst"
          },
          "B": {
            "item": "mekanismgenerators:fusion_reactor_frame"
          },
          "C": {
            "type": "forge:nbt",
            "item": "extendedcrafting:singularity",
            "count": 1,
            "nbt": "{Id:\"extendedcrafting:pllet\"}"
          },
          "D": {
            "item": "bigreactors:ludicrite_block"
          },
          "E": {
            "item": "mekanismgenerators:laser_focus_matrix"
          },
          "F": {
            "item": "mekanism:sps_casing"
          },
          "G": {
            "item": "mekanismgenerators:fusion_reactor_port"
          },
          "H": {
            "item": "mekanismgenerators:fusion_reactor_controller"
          }
        },
        "result": {
          "item": "custom:ultimate_controller"
        }
      })

    //mekanism:pigment_extracting add

        //purple
    event.custom({
        "type":"mekanism:pigment_extracting","input":{"ingredient":{"item":'mekanism:dust_refined_obsidian'}},"output":{"pigment":"mekanism:purple","amount":100}
     })

     event.custom({
        "type":"mekanism:pigment_extracting","input":{"ingredient":{"item":'mekanism:enriched_refined_obsidian'}},"output":{"pigment":"mekanism:purple","amount":800}
     })

        //blue
    event.custom({
        "type":"mekanism:pigment_extracting","input":{"ingredient":{"item":'thermal:diamond_dust'}},"output":{"pigment":"mekanism:blue","amount":100}
     })

     event.custom({
        "type":"mekanism:pigment_extracting","input":{"ingredient":{"item":'mekanism:enriched_diamond'}},"output":{"pigment":"mekanism:blue","amount":800}
     })

        //red
    event.custom({
        "type":"mekanism:pigment_extracting","input":{"ingredient":{"item":'minecraft:redstone'}},"output":{"pigment":"mekanism:red","amount":100}
     })

     event.custom({
        "type":"mekanism:pigment_extracting","input":{"ingredient":{"item":'mekanism:enriched_redstone'}},"output":{"pigment":"mekanism:red","amount":800}
     })


        //green
    event.custom({
        "type":"mekanism:pigment_extracting","input":{"ingredient":{"item":'immersiveengineering:ingot_uranium'}},"output":{"pigment":"mekanism:green","amount":100}
     })

     event.custom({
        "type":"mekanism:pigment_extracting","input":{"ingredient":{"item":'kubejs:enriched_uranium'}},"output":{"pigment":"mekanism:green","amount":800}
     })



     //mekanism:metallurgic_infusing  add
    event.custom({
        "type":"mekanism:metallurgic_infusing","itemInput":{"ingredient":{"tag":"forge:ingots/iron"}},"chemicalInput":{"amount":10,"tag":"mekanism:tin"},"output":{"item":'kubejs:uncolored_alloy_infused'}
    })

    event.custom({
        "type":"mekanism:metallurgic_infusing","itemInput":{"ingredient":{"item":'mekanism:ingot_osmium'}},"chemicalInput":{"amount":20,"tag":"mekanism:tin"},"output":{"item":'kubejs:uncolored_control_circuit'}
    })


    //mekanism:painting  add
        //alloy
    event.custom({
        "type":"mekanism:painting","itemInput":{"ingredient":{"type":"forge:difference","base":{"item":'kubejs:uncolored_alloy_infused'},"subtracted":{"item":'mekanism:alloy_infused'}}},"chemicalInput":{"amount":100,"pigment":"mekanism:red"},"output":{"item":'mekanism:alloy_infused'}
    })

    event.custom({
        "type":"mekanism:painting","itemInput":{"ingredient":{"type":"forge:difference","base":{"item":'kubejs:uncolored_alloy_infused'},"subtracted":{"item":'mekanism:alloy_reinforced'}}},"chemicalInput":{"amount":200,"pigment":"mekanism:blue"},"output":{"item":'mekanism:alloy_reinforced'}
    })

    event.custom({
        "type":"mekanism:painting","itemInput":{"ingredient":{"type":"forge:difference","base":{"item":'kubejs:uncolored_alloy_infused'},"subtracted":{"item":'mekanism:alloy_atomic'}}},"chemicalInput":{"amount":400,"pigment":"mekanism:purple"},"output":{"item":'mekanism:alloy_atomic'}
    })


       //circuit
    event.custom({
        "type":"mekanism:painting","itemInput":{"ingredient":{"type":"forge:difference","base":{"item":'kubejs:uncolored_control_circuit'},"subtracted":{"item":'mekanism:basic_control_circuit'}}},"chemicalInput":{"amount":200,"pigment":"mekanism:green"},"output":{"item":'mekanism:basic_control_circuit'}
    })

    event.custom({
        "type":"mekanism:painting","itemInput":{"ingredient":{"type":"forge:difference","base":{"item":'kubejs:uncolored_control_circuit'},"subtracted":{"item":'mekanism:advanced_control_circuit'}}},"chemicalInput":{"amount":400,"pigment":"mekanism:red"},"output":{"item":'mekanism:advanced_control_circuit'}
    })

    event.custom({
        "type":"mekanism:painting","itemInput":{"ingredient":{"type":"forge:difference","base":{"item":'kubejs:uncolored_control_circuit'},"subtracted":{"item":'mekanism:elite_control_circuit'}}},"chemicalInput":{"amount":600,"pigment":"mekanism:blue"},"output":{"item":'mekanism:elite_control_circuit'}
    })

    event.custom({
        "type":"mekanism:painting","itemInput":{"ingredient":{"type":"forge:difference","base":{"item":'kubejs:uncolored_control_circuit'},"subtracted":{"item":'mekanism:ultimate_control_circuit'}}},"chemicalInput":{"amount":800,"pigment":"mekanism:purple"},"output":{"item":'mekanism:ultimate_control_circuit'}
    })


    //mekanism:enriching add
    event.custom({
        "type":"mekanism:enriching","input":{"ingredient":{"item":'immersiveengineering:ingot_uranium'}},"output":{"item":"kubejs:enriched_uranium"}
    })


    event.custom({
      "type":"mekanism:enriching","input":{"ingredient":{"item":'powah:uraninite'}},"output":{"item":'mekanism:yellow_cake_uranium',"amount":4}
  })


    //mekanism:reaction  add
    event.custom({
    "type":"mekanism:reaction","itemInput":{"amount":1,"ingredient":{"item":'mekanism:sps_port'}},"fluidInput":{"amount":1000,"tag":"minecraft:water"},"gasInput":{"amount":1000,"gas":"mekanism:polonium"},"duration":1000,"itemOutput":{"item":"custom:pllet_machine"},"gasOutput":{"gas":"mekanism:spent_nuclear_waste","amount":100}
    })
})