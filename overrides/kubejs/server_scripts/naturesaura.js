onEvent('recipes', event => {
    //altar
       //overworld
   event.custom({
    "type": "naturesaura:altar",
    "input": {
        "item": "kubejs:nether_end"
    },
    "output": {
        "item": "kubejs:machine_core"
    },
    "aura_type": "naturesaura:overworld",
    "aura": 13500,
    "time": 700
})


event.custom({
    "type": "naturesaura:altar",
    "input": {
        "item": 'minecraft:water_bucket'
    },
    "output": {
        "item": 'minecraft:ice'
    },
    "aura_type": "naturesaura:overworld",
    "aura": 1350,
    "time": 7
})


event.custom({
    "type": "naturesaura:altar",
    "input": {
        "item": "kubejs:nether_end"
    },
    "output": {
        "item": "kubejs:machine_core"
    },
    "aura_type": "naturesaura:overworld",
    "aura": 13500,
    "time": 700
})


event.custom({
    "type": "naturesaura:altar",
    "input": {
        "item": "minecraft:cobblestone"
    },
    "output": {
        "item": "minecraft:netherrack"
    },
    "aura_type": "naturesaura:overworld",
    "aura": 13500,
    "time": 80
})

      //nether
event.custom({
    "type": "naturesaura:altar",
    "input": {
        "item": "minecraft:netherrack"
    },
    "output": {
        "item": "minecraft:end_stone"
    },
    "aura_type": "naturesaura:nether",
    "aura": 13500,
    "time": 80
})



   //tree_ritual
   event.custom({
    "type": "naturesaura:tree_ritual",
    "ingredients": [
        {
            "item": 'rainshield:rain_shield'
        },
        {
            "item": 'rainshield:rain_shield'
        },
        {
            "item": 'spirit:soul_steel_block'
        },
        {
            "item": "naturesaura:gold_leaf"
        }, 
        {
            "item": 'minecraft:netherrack'
        },
        {
            "item": 'minecraft:netherrack'
        },
        {
            "item": 'kubejs:machine_core'
        },
        {
            "item": 'kubejs:machine_core'
        }
        
    ],
    "sapling": {
        "item": "minecraft:oak_sapling"
    },
    "output": {
        "item": "custom:netherrack_machine"
    },
    "time": 250
   })


   event.custom({
    "type": "naturesaura:tree_ritual",
    "ingredients": [
        {
            "item": 'minecraft:end_rod'
        },
        {
            "item": 'minecraft:end_rod'
        },
        {
            "item": 'spirit:soul_steel_block'
        },
        {
            "item": "naturesaura:gold_leaf"
        }, 
        {
            "item": 'minecraft:end_stone'
        },
        {
            "item": 'minecraft:end_stone'
        },
        {
            "item": 'kubejs:machine_core'
        },
        {
            "item": 'kubejs:machine_core'
        }
        
    ],
    "sapling": {
        "item": "minecraft:oak_sapling"
    },
    "output": {
        "item": "custom:endstone_machine"
    },
    "time": 250
   })


   event.custom({
    "type": "naturesaura:tree_ritual",
    "ingredients": [
        {
            "item": 'minecraft:gold_block'
        },
        {
            "item": 'minecraft:gold_block'
        },
        {
            "item": 'minecraft:gold_block'
        },
        {
            "item": 'minecraft:gold_block'
        }, 
        {
            "item": 'minecraft:gold_block'
        },
        {
            "item": 'minecraft:gold_block'
        },
        {
            "item": 'minecraft:gold_block'
        },
        {
            "item": 'minecraft:gold_block'
        }
        
    ],
    "sapling": {
        "item": "minecraft:oak_sapling"
    },
    "output": {
        "item": 'mob_grinding_utils:golden_egg'
    },
    "time": 250
   })


   event.custom({
    "type": "naturesaura:tree_ritual",
    "ingredients": [
        {
            "item": 'minecraft:ice'
        },
        {
            "item": 'minecraft:ice'
        },
        {
            "item": 'minecraft:ice'
        },
        {
            "item": 'minecraft:ice'
        }, 
        {
            "item": 'minecraft:ice'
        },
        {
            "item": 'minecraft:ice'
        },
        {
            "item": 'minecraft:ice'
        },
        {
            "item": 'minecraft:ice'
        }
        
    ],
    "sapling": {
        "item": "minecraft:oak_sapling"
    },
    "output": {
        "item": 'custom:snow_machine'
    },
    "time": 250
   })
})