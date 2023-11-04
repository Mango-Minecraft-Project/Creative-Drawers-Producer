onEvent('recipes', event => {
    //cobblestone_machine
        event.recipes.custommachinery.custom_machine("custom:cobblestone_machine", 20)
        .requireItem(Item.of("minecraft:cobblestone", 1))
        .produceItem(Item.of("minecraft:gravel", 1))
        .requireStructure([
        [
            "a",
            "m"
        ],
        [
            " ",
            " "
        ],
        [
            "b",
            "c"
        ]
    ], {"a": 'create:depot',"b":'create:deployer',"c":'extrautilitiesrebirth:quadruple_compressed_cobblestone'})



    event.recipes.custommachinery.custom_machine("custom:cobblestone_machine", 20)
    .requireItem(Item.of("extrautilitiesrebirth:compressed_cobblestone", 1))
    .produceItem(Item.of("extrautilitiesrebirth:compressed_gravel", 1))
    .requireStructure([
    [
        "a",
        "m"
    ],
    [
        " ",
        " "
    ],
    [
        "b",
        "c"
    ]
], {"a": 'create:depot',"b":'create:deployer',"c":'extrautilitiesrebirth:quadruple_compressed_cobblestone'})
      
    //gravel_machie
    event.recipes.custommachinery.custom_machine("custom:gravel_machine", 20)
    .requireItem(Item.of('extrautilitiesrebirth:compressed_gravel', 1))
    .produceItem(Item.of('extrautilitiesrebirth:compressed_dirt', 1))
    .requireStructure([
    [
        "a",
        "m"
    ],
    [
        " ",
        " "
    ],
    [
        "b",
        "c"
    ]
], {"a": 'create:depot',"b":'create:deployer',"c":'extrautilitiesrebirth:double_compressed_dirt'})


event.recipes.custommachinery.custom_machine("custom:gravel_machine", 20)
.requireItem(Item.of("minecraft:gravel", 1))
.produceItem(Item.of("minecraft:dirt", 1))
.requireStructure([
[
    "a",
    "m"
],
[
    " ",
    " "
],
[
    "b",
    "c"
]
], {"a": 'create:depot',"b":'create:deployer',"c":'extrautilitiesrebirth:double_compressed_dirt'})


event.recipes.custommachinery.custom_machine("custom:gravel_machine", 20)
.requireItem(Item.of("extrautilitiesrebirth:double_compressed_gravel", 1))
.produceItem(Item.of("extrautilitiesrebirth:double_compressed_dirt", 1))
.requireStructure([
[
    "a",
    "m"
],
[
    " ",
    " "
],
[
    "b",
    "c"
]
], {"a": 'create:depot',"b":'create:deployer',"c":'extrautilitiesrebirth:double_compressed_dirt'})

    
    //dirt_machine
    event.recipes.custommachinery.custom_machine("custom:dirt_machine", 20)
    .requireItem(Item.of("minecraft:dirt", 1))
    .produceItem(Item.of("minecraft:sand", 1))
    .requireStructure([
    [
        "a",
        "m"
    ],
    [
        " ",
        "c"
    ],
    [
        "b",
        "c"
    ]
], {"a": 'create:depot',"b":'create:deployer',"c":'extrautilitiesrebirth:double_compressed_sand'})



event.recipes.custommachinery.custom_machine("custom:dirt_machine", 20)
.requireItem(Item.of("extrautilitiesrebirth:compressed_dirt", 1))
.produceItem(Item.of("extrautilitiesrebirth:compressed_sand", 1))
.requireStructure([
[
    "a",
    "m"
],
[
    " ",
    "c"
],
[
    "b",
    "c"
]
], {"a": 'create:depot',"b":'create:deployer',"c":'extrautilitiesrebirth:double_compressed_sand'})



event.recipes.custommachinery.custom_machine("custom:dirt_machine", 20)
.requireItem(Item.of("extrautilitiesrebirth:double_compressed_dirt", 1))
.produceItem(Item.of("extrautilitiesrebirth:double_compressed_sand", 1))
.requireStructure([
[
    "a",
    "m"
],
[
    " ",
    "c"
],
[
    "b",
    "c"
]
], {"a": 'create:depot',"b":'create:deployer',"c":'extrautilitiesrebirth:double_compressed_sand'})


    //sand_machine
    event.recipes.custommachinery.custom_machine("custom:sand_machine", 20)
    .requireItem(Item.of("minecraft:sand", 1))
    .produceItem(Item.of("minecraft:clay", 1))
    .requireStructure([
    [
        "a",
        "m"
    ],
    [
        " ",
        " "
    ],
    [
        "b",
        "c"
    ]
], {"a": 'create:depot',"b":'create:spout',"c":'cookingforblockheads:sink'})


   //netherrack_machine
   event.recipes.custommachinery.custom_machine("custom:netherrack_machine", 80)
   .requireItem(Item.of("minecraft:cobblestone", 1))
   .requireItem(Item.of("kubejs:nether_dye", 1))
   .produceItem(Item.of("minecraft:netherrack", 1))
   .dimensionWhitelist("minecraft:the_nether")
   .requireStructure([
   [
       "aaa",
       "aaa",
       "aaa"
   ],
   [
       "aaa",
       "aba",
       "ama"
   ],
   [
       "aaa",
       "aaa",
       "aaa"
   ]
], {"a": 'minecraft:netherrack',"b":'minecraft:redstone_block'})


   //endstone_machine
   event.recipes.custommachinery.custom_machine("custom:endstone_machine", 80)
   .requireItem(Item.of("minecraft:netherrack", 1))
   .requireItem(Item.of("kubejs:end_dye", 1))
   .produceItem(Item.of("minecraft:end_stone", 1))
   .dimensionWhitelist("minecraft:the_end")
   .requireStructure([
   [
       "aaa",
       "aaa",
       "aaa"
   ],
   [
       "aaa",
       "aba",
       "ama"
   ],
   [
       "aaa",
       "aaa",
       "aaa"
   ]
], {"a": 'minecraft:end_stone',"b":'minecraft:redstone_block'})


   //snow_machine
   event.recipes.custommachinery.custom_machine("custom:snow_machine", 100)
   .requireFluid(Fluid.of("minecraft:water", 1000))
   .produceItem(Item.of("minecraft:snowball", 1))


      //modular_master
      event.recipes.custommachinery.custom_machine("custom:modular_master", 200)
      .requireItem(Item.of('refinedstorage:machine_casing', 1))
      .requireEnergyPerTick(500)
      .produceItem(Item.of('modularrouters:modular_router', 1))
      .requireStructure([
      [
          "aaa",
          "aaa",
          "ama"
      ],
      [
          "aaa",
          "aba",
          "aaa"
      ],
      [
          "aaa",
          "aaa",
          "aaa"
      ]
   ], {"a": 'refinedstorage:quartz_enriched_iron_block',"b":'modularrouters:modular_router'})

   event.recipes.custommachinery.custom_machine("custom:modular_master", 200)
   .requireItem(Item.of('refinedstorage:quartz_enriched_iron_block', 1))
   .requireEnergyPerTick(400)
   .produceItem(Item.of('modularrouters:blank_module', 1))
   .requireStructure([
   [
       "aaa",
       "aaa",
       "ama"
   ],
   [
       "aaa",
       "aba",
       "aaa"
   ],
   [
       "aaa",
       "aaa",
       "aaa"
   ]
], {"a": 'refinedstorage:quartz_enriched_iron_block',"b":'modularrouters:modular_router'})


event.recipes.custommachinery.custom_machine("custom:modular_master", 200)
.requireItem(Item.of('refinedstorage:quartz_enriched_iron', 1))
.requireEnergyPerTick(200)
.produceItem(Item.of('modularrouters:blank_upgrade', 1))
.requireStructure([
[
    "aaa",
    "aaa",
    "ama"
],
[
    "aaa",
    "aba",
    "aaa"
],
[
    "aaa",
    "aaa",
    "aaa"
]
], {"a": 'refinedstorage:quartz_enriched_iron_block',"b":'modularrouters:modular_router'})

event.remove({output:'modularrouters:blank_module'})
event.remove({output:'modularrouters:blank_upgrade'})


    //void_oil_machine
    event.recipes.custommachinery.custom_machine("custom:void_oil_machine", 300)
    .requireFluid(Fluid.of("minecraft:water", 1000))
    .requireEnergy(1000)
    .produceFluid(Fluid.of("thermal:crude_oil", 1000))
    .requireStructure([
    [
        "a"
    ],
    [
        "m"
    ]
], {"a": 'create:mechanical_drill'})


//pcb_master
event.recipes.custommachinery.custom_machine("custom:pcb_master", 300)
.requireItem(Item.of('pneumaticcraft:plastic', 1))
.requireItem(Item.of('minecraft:gold_nugget', 2))
.requireItem(Item.of('minecraft:slime_ball', 1))
.requireEnergyPerTick(200)
.produceItem(Item.of('pneumaticcraft:capacitor', 1))
.requireStructure([
[
    "aaa",
    "aaa",
    "aaa"
],
[
    "aba",
    "bcb",
    "aba"
],
[
    "aba",
    "bmb",
    "aba"
],
[
    "aaa",
    "aaa",
    "aaa"
]
], {"a": 'compactmachines:wall',"b":'integratedterminals:chorus_glass',"c":'pneumaticcraft:etching_tank'})

event.recipes.custommachinery.custom_machine("custom:pcb_master", 300)
.requireItem(Item.of('pneumaticcraft:plastic', 1))
.requireItem(Item.of('minecraft:gold_nugget', 3))
.requireItem(Item.of('minecraft:redstone', 1))
.requireEnergyPerTick(200)
.produceItem(Item.of('pneumaticcraft:transistor', 1))
.requireStructure([
[
    "aaa",
    "aaa",
    "aaa"
],
[
    "aba",
    "bcb",
    "aba"
],
[
    "aba",
    "bmb",
    "aba"
],
[
    "aaa",
    "aaa",
    "aaa"
]
], {"a": 'compactmachines:wall',"b":'integratedterminals:chorus_glass',"c":'pneumaticcraft:etching_tank'})

event.recipes.custommachinery.custom_machine("custom:pcb_master", 300)
.requireItem(Item.of('pneumaticcraft:empty_pcb', 1))
.requireItem(Item.of('pneumaticcraft:transistor', 1))
.requireItem(Item.of('pneumaticcraft:capacitor', 1))
.requireEnergyPerTick(200)
.produceItem(Item.of('pneumaticcraft:printed_circuit_board', 1))
.requireStructure([
[
    "aaa",
    "aaa",
    "aaa"
],
[
    "aba",
    "bcb",
    "aba"
],
[
    "aba",
    "bmb",
    "aba"
],
[
    "aaa",
    "aaa",
    "aaa"
]
], {"a": 'compactmachines:wall',"b":'integratedterminals:chorus_glass',"c":'pneumaticcraft:etching_tank'})


//oil_refine_machine
event.recipes.custommachinery.custom_machine("custom:oil_refine_machine", 300)
.requireFluid(Fluid.of("thermal:crude_oil", 500))
.requireEnergyPerTick(100)
.produceFluid(Fluid.of('pneumaticcraft:plastic', 250))
.requireStructure([
[
    "aaa",
    "aaa",
    "aaa"
],
[
    "aba",
    "bcb",
    "aba"
],
[
    "aba",
    "bmb",
    "aba"
],
[
    "aaa",
    "aaa",
    "aaa"
]
], {"a": 'mekanism:dynamic_tank',"b":'create:framed_glass',"c":'create:fluid_tank'})


//plastic_machine
event.recipes.custommachinery.custom_machine("custom:plastic_machine", 300)
.requireFluid(Fluid.of('pneumaticcraft:plastic', 1000))
.produceItem(Item.of('pneumaticcraft:smooth_plastic_brick_white', 1))
.requireStructure([
[
    "aaa",
    "aaa",
    "aaa"
],
[
    "aba",
    "bcb",
    "aba"
],
[
    "aba",
    "bmb",
    "aba"
],
[
    "aaa",
    "aaa",
    "aaa"
]
], {"a": 'mekanism:dynamic_tank',"b":'create:framed_glass',"c":'create:fluid_tank'})


//life_machine
event.recipes.custommachinery.custom_machine("custom:life_machine", 300)
.requireItem(Item.of('minecraft:stone'))
.produceItem(Item.of('bloodmagic:largebloodstonebrick', 2))
.requireStructure([
[
    " aaaaaaa ",//1
    "abbbcbbba",//2
    "abbbcbbba",//3
    "abbbbbbba",//4
    "accbbbcca",//5
    "abbbbbbba",//6
    "abbbcbbba",//7
    "abbbcbbba",//8
    " aaamaaa "//9
],
[
    "         ",//1
    "         ",//2
    "  g d g  ",//3
    "   efe   ",//4
    "  dfefd  ",//5
    "   efe   ",//6
    "  g d g  ",//7
    "         ",//8
    "         "//9
],
[
    "         ",//1
    "         ",//2
    "         ",//3
    "         ",//4
    "    h    ",//5
    "         ",//6
    "         ",//7
    "         ",//8
    "         ",//9
]
], {"a": 'pneumaticcraft:reinforced_brick_slab',"b":'minecraft:netherite_block',"c":'integrateddynamics:crystalized_chorus_block',
    "d":'integrateddynamics:crystalized_chorus_block_stairs',"e":'bloodmagic:blankrune',"f":'bloodmagic:bettercapacityrune',
    "g":'minecraft:beacon',"h":'bloodmagic:altar'
})


//blood_generate
event.recipes.custommachinery.custom_machine("custom:blood_generate", 300)
.requireItem(Item.of('bloodmagic:largebloodstonebrick'))
.produceItem(Item.of("kubejs:coagulated_blood"))
.requireStructure([
[
    "bbabb",//1
    "beceb",//2
    "acdca",//3
    "beceb",//4
    "bbmbb"//5
],
[
    "     ",//1
    "     ",//2
    "  f  ",//3
    "     ",//4
    "     "//5
]
], {"a": 'pneumaticcraft:reinforced_brick_slab',"b":'extrautilitiesrebirth:octuple_compressed_cobblestone',"c":'integrateddynamics:crystalized_chorus_block',
    "d":'minecraft:netherite_block',"e":'bloodmagic:accelerationrune',"f":'bloodmagic:altar'
})


//pllet_machine
event.recipes.custommachinery.custom_machine("custom:pllet_machine", 60)
.requireGas('mekanism:fissile_fuel 2500')
.requireEnergyPerTick(500000)
.produceGasPerTick('mekanism:antimatter 10')
.requireStructure([
[
    "aaaaaaaaaaaaaaaa",//1.1
    "aaaaaaaaaaaaaaaa",//2
    "aaaaaaaaaaaaaaaa",//3
    "aaaaaaaaaaaaaaaa",//4
    "aaaaaaaaaaaaaaaa",//5
    "aaaaaaaaaaaaaaaa",//6
    "aaaaaaaaaaaaaaaa",//7
    "aaaaaaaaaaaaaaaa",//8
    "aaaaaaaaaaaaaaaa",//9
    "aaaaaaaaaaaaaaaa",//10
    "aaaaaaaaaaaaaaaa",//11
    "aaaaaaaaaaaaaaaa",//12
    "aaaaaaaaaaaaaaaa",//13
    "aaaaaaaaaaaaaaaa",//14
    "aaaaaaaaaaaaaaaa",//15
    "aaaaaaaaaaaaaaaa",//16
],
[
    "abbbbbbbbbbbbbba",//1.2
    "b c c c c c c cb",//2
    "bc c c c c c c b",//3
    "b c c c c c c cb",//4
    "bc c c c c c c b",//5
    "b c c c c c c cb",//6
    "bc c c c c c c b",//7
    "b c c c c c c cb",//8
    "bc c c c c c c b",//9
    "b c c c c c c cb",//10
    "bc c c c c c c b",//11
    "b c c c c c c cb",//12
    "bc c c c c c c b",//13
    "b c c c c c c cb",//14
    "bc c c c c c c b",//15
    "abbbbbbbbbbbbbbm",//16
],
[
    "abbbbbbbbbbbbbba",//1.3
    "b c c c c c c cb",//2
    "bc c c c c c c b",//3
    "b c c c c c c cb",//4
    "bc c c c c c c b",//5
    "b c c c c c c cb",//6
    "bc c c c c c c b",//7
    "b c c c c c c cb",//8
    "bc c c c c c c b",//9
    "b c c c c c c cb",//10
    "bc c c c c c c b",//11
    "b c c c c c c cb",//12
    "bc c c c c c c b",//13
    "b c c c c c c cb",//14
    "bc c c c c c c b",//15
    "abbbbbbbbbbbbbba",//16
],
[
    "abbbbbbbbbbbbbba",//1.4
    "b c c c c c c cb",//2
    "bc c c c c c c b",//3
    "b c c c c c c cb",//4
    "bc c c c c c c b",//5
    "b c c c c c c cb",//6
    "bc c c c c c c b",//7
    "b c c c c c c cb",//8
    "bc c c c c c c b",//9
    "b c c c c c c cb",//10
    "bc c c c c c c b",//11
    "b c c c c c c cb",//12
    "bc c c c c c c b",//13
    "b c c c c c c cb",//14
    "bc c c c c c c b",//15
    "abbbbbbbbbbbbbba",//16
],
[
    "abbbbbbbbbbbbbba",//1.5
    "b c c c c c c cb",//2
    "bc c c c c c c b",//3
    "b c c c c c c cb",//4
    "bc c c c c c c b",//5
    "b c c c c c c cb",//6
    "bc c c c c c c b",//7
    "b c c c c c c cb",//8
    "bc c c c c c c b",//9
    "b c c c c c c cb",//10
    "bc c c c c c c b",//11
    "b c c c c c c cb",//12
    "bc c c c c c c b",//13
    "b c c c c c c cb",//14
    "bc c c c c c c b",//15
    "abbbbbbbbbbbbbba",//16
],
[
    "abbbbbbbbbbbbbba",//1.6
    "b c c c c c c cb",//2
    "bc c c c c c c b",//3
    "b c c c c c c cb",//4
    "bc c c c c c c b",//5
    "b c c c c c c cb",//6
    "bc c c c c c c b",//7
    "b c c c c c c cb",//8
    "bc c c c c c c b",//9
    "b c c c c c c cb",//10
    "bc c c c c c c b",//11
    "b c c c c c c cb",//12
    "bc c c c c c c b",//13
    "b c c c c c c cb",//14
    "bc c c c c c c b",//15
    "abbbbbbbbbbbbbba",//16
],
[
    "abbbbbbbbbbbbbba",//1.7
    "b c c c c c c cb",//2
    "bc c c c c c c b",//3
    "b c c c c c c cb",//4
    "bc c c c c c c b",//5
    "b c c c c c c cb",//6
    "bc c c c c c c b",//7
    "b c c c c c c cb",//8
    "bc c c c c c c b",//9
    "b c c c c c c cb",//10
    "bc c c c c c c b",//11
    "b c c c c c c cb",//12
    "bc c c c c c c b",//13
    "b c c c c c c cb",//14
    "bc c c c c c c b",//15
    "abbbbbbbbbbbbbba",//16
],
[
    "abbbbbbbbbbbbbba",//1.8
    "b c c c c c c cb",//2
    "bc c c c c c c b",//3
    "b c c c c c c cb",//4
    "bc c c c c c c b",//5
    "b c c c c c c cb",//6
    "bc c c c c c c b",//7
    "b c c c c c c cb",//8
    "bc c c c c c c b",//9
    "b c c c c c c cb",//10
    "bc c c c c c c b",//11
    "b c c c c c c cb",//12
    "bc c c c c c c b",//13
    "b c c c c c c cb",//14
    "bc c c c c c c b",//15
    "abbbbbbbbbbbbbba",//16
],
[
    "abbbbbbbbbbbbbba",//1.9
    "b c c c c c c cb",//2
    "bc c c c c c c b",//3
    "b c c c c c c cb",//4
    "bc c c c c c c b",//5
    "b c c c c c c cb",//6
    "bc c c c c c c b",//7
    "b c c c c c c cb",//8
    "bc c c c c c c b",//9
    "b c c c c c c cb",//10
    "bc c c c c c c b",//11
    "b c c c c c c cb",//12
    "bc c c c c c c b",//13
    "b c c c c c c cb",//14
    "bc c c c c c c b",//15
    "abbbbbbbbbbbbbba",//16
],
[
    "abbbbbbbbbbbbbba",//1.10
    "b c c c c c c cb",//2
    "bc c c c c c c b",//3
    "b c c c c c c cb",//4
    "bc c c c c c c b",//5
    "b c c c c c c cb",//6
    "bc c c c c c c b",//7
    "b c c c c c c cb",//8
    "bc c c c c c c b",//9
    "b c c c c c c cb",//10
    "bc c c c c c c b",//11
    "b c c c c c c cb",//12
    "bc c c c c c c b",//13
    "b c c c c c c cb",//14
    "bc c c c c c c b",//15
    "abbbbbbbbbbbbbba",//16
],
[
    "abbbbbbbbbbbbbba",//1.11
    "b c c c c c c cb",//2
    "bc c c c c c c b",//3
    "b c c c c c c cb",//4
    "bc c c c c c c b",//5
    "b c c c c c c cb",//6
    "bc c c c c c c b",//7
    "b c c c c c c cb",//8
    "bc c c c c c c b",//9
    "b c c c c c c cb",//10
    "bc c c c c c c b",//11
    "b c c c c c c cb",//12
    "bc c c c c c c b",//13
    "b c c c c c c cb",//14
    "bc c c c c c c b",//15
    "abbbbbbbbbbbbbba",//16
],
[
    "abbbbbbbbbbbbbba",//1.12
    "b c c c c c c cb",//2
    "bc c c c c c c b",//3
    "b c c c c c c cb",//4
    "bc c c c c c c b",//5
    "b c c c c c c cb",//6
    "bc c c c c c c b",//7
    "b c c c c c c cb",//8
    "bc c c c c c c b",//9
    "b c c c c c c cb",//10
    "bc c c c c c c b",//11
    "b c c c c c c cb",//12
    "bc c c c c c c b",//13
    "b c c c c c c cb",//14
    "bc c c c c c c b",//15
    "abbbbbbbbbbbbbba",//16
],
[
    "abbbbbbbbbbbbbba",//1.13
    "b c c c c c c cb",//2
    "bc c c c c c c b",//3
    "b c c c c c c cb",//4
    "bc c c c c c c b",//5
    "b c c c c c c cb",//6
    "bc c c c c c c b",//7
    "b c c c c c c cb",//8
    "bc c c c c c c b",//9
    "b c c c c c c cb",//10
    "bc c c c c c c b",//11
    "b c c c c c c cb",//12
    "bc c c c c c c b",//13
    "b c c c c c c cb",//14
    "bc c c c c c c b",//15
    "abbbbbbbbbbbbbba",//16
],
[
    "abbbbbbbbbbbbbba",//1.14
    "b c c c c c c cb",//2
    "bc c c c c c c b",//3
    "b c c c c c c cb",//4
    "bc c c c c c c b",//5
    "b c c c c c c cb",//6
    "bc c c c c c c b",//7
    "b c c c c c c cb",//8
    "bc c c c c c c b",//9
    "b c c c c c c cb",//10
    "bc c c c c c c b",//11
    "b c c c c c c cb",//12
    "bc c c c c c c b",//13
    "b c c c c c c cb",//14
    "bc c c c c c c b",//15
    "abbbbbbbbbbbbbba",//16
],
[
    "abbbbbbbbbbbbbba",//1.15
    "b d d d d d d db",//2
    "bd d d d d d d b",//3
    "b d d d d d d db",//4
    "bd d d d d d d b",//5
    "b d d d d d d db",//6
    "bd d d d d d d b",//7
    "b d d d d d d db",//8
    "bd d d d d d d b",//9
    "b d d d d d d db",//10
    "bd d d d d d d b",//11
    "b d d d d d d db",//12
    "bd d d d d d d b",//13
    "b d d d d d d db",//14
    "bd d d d d d d b",//15
    "abbbbbbbbbbbbbba",//16
],
[
    "aaaaaaaaaaaaaaaa",//1.16
    "aaaaaaaaaaaaaaaa",//2
    "aaaaaaaaaaaaaaaa",//3
    "aaaaaaaaaaaaaaaa",//4
    "aaaaaaaaaaaaaaaa",//5
    "aaaaaaaaaaaaaaaa",//6
    "aaaaaaaaaaaaaaaa",//7
    "aaaaaaaaaaaaaaaa",//8
    "aaaaaaaaaaaaaaaa",//9
    "aaaaaaaaaaaaaaaa",//10
    "aaaaaaaaaaaaaaaa",//11
    "aaaaaaaaaaaaaaaa",//12
    "aaaaaaaaaaaaaaaa",//13
    "aaaaaaaaaaaaaaaa",//14
    "aaaaaaaaaaaaaaaa",//15
    "aaaaaaaaaaaaaaaa",//16
]
], {"a":'mekanismgenerators:fission_reactor_casing',"b":'mekanismgenerators:reactor_glass',"c":'mekanismgenerators:fission_fuel_assembly',
    "d":'mekanismgenerators:control_rod_assembly'
})



//ultimate_controller
event.recipes.custommachinery.custom_machine("custom:ultimate_controller", 600)
.requireItem(Item.of('mekanism:pellet_antimatter'))
.produceEnergyPerTick(1000000000)
.requireStructure([
[
    "  A  ",
    " AAA ",
    "AAAAA",
    " AAA ",
    "  A  "
],
[
    " AAA ",
    "ABBBA",
    "ABBBA",
    "ABBBA",
    " AAA "
],
[
    "AAAAA",
    "A   A",
    "A D A",
    "A   A",
    "AACAA"
],
[
    " AAA ",
    "ABBBA",
    "ABBBA",
    "ABBBA",
    " AAA "
],
[
    "  A  ",
    " AAA ",
    "AAmAA",
    " AAA ",
    "  A  "
],
], {"A": 'mekanismgenerators:fusion_reactor_frame',"B":'bigreactors:ludicrite_block',"C":'mekanismgenerators:laser_focus_matrix',
    "D":'kubejs:ultimate_pllet_cell'
})



   //creative_machine
   event.recipes.custommachinery.custom_machine("custom:creative_machine", 2000)
   .requireItem(Item.of("extendedcrafting:ultimate_singularity", 1))
   .requireEnergyPerTick(100000000)
   .produceItem(Item.of("kubejs:creative_core", 1))
   .requireStructure([
   [
       "aaa",
       "aaa",
       "aaa"
   ],
   [
       "aaa",
       "ama",
       "aaa"
   ],
   [
       "aaa",
       "aaa",
       "aaa"
   ]
], {"a": 'minecraft:bedrock'})





//fissile_machine
event.recipes.custommachinery.custom_machine("custom:fissile_machine", 100)
.requireItem(Item.of('mekanism:pellet_antimatter'))
.requireEnergyPerTick(1000000)
.produceGasPerTick('mekanism:fissile_fuel 50000')
.requireStructure([
[
          "  AAA  ",
          " ABBBA ",
          "ABBBBBA",
          "ABBBBBA",
          "ABBBBBA",
          " ABBBA ",
          "  AAA  "
],
[
          " ABBBA ",
          "A     A",
          "B     B",
          "B     B",
          "B     B",
          "A     A",
          " ABBBA "
],
[
          "ABBBBBA",
          "B     B",
          "B     B",
          "B     B",
          "B     B",
          "B     B",
          "ABBBBBA"
],
[
    "ABBBBBA",
    "B     B",
    "B     B",
    "B     B",
    "B     B",
    "B     B",
    "ABBBBBA"
],
[
    "ABBBBBA",
    "B     B",
    "B     B",
    "B     B",
    "B     B",
    "B     B",
    "ABBBBBA"
],
[
    " ABBBA ",
    "A     A",
    "B     B",
    "B     B",
    "B     B",
    "A     A",
    " ABBBA "
],
[
    "  AAA  ",
    " ABBBA ",
    "ABBBBBA",
    "ABBmBBA",
    "ABBBBBA",
    " ABBBA ",
    "  AAA  "
]
], {"A": 'mekanism:sps_casing',"B":'mekanism:structural_glass'
})
})