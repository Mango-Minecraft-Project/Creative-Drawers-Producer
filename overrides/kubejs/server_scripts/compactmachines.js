onEvent('recipes', event => {
    event.custom({ 
        "type": "compactcrafting:miniaturization",
        "recipeSize": 3,
        "layers":[
        {"type": "compactcrafting:mixed","pattern": [
        ["A", "A", "A"],["A", "A", "A"],["A", "A", "A"]]},
        {"type": "compactcrafting:mixed","pattern": [
        ["A", "A", "A"],["A", "B", "A"],["A", "A", "A"]]},
        {"type": "compactcrafting:mixed","pattern": [
        ["A", "A", "A"],["A", "A", "A"],["A", "A", "A"]]}],
        "catalyst": {"id": 'kubejs:mix_block',"Count": 1},
        "components": {
            "A": {"type": "compactcrafting:block","block": 'immersiveengineering:storage_steel'},
            "B": {"type": "compactcrafting:block","block": 'refinedstorage:machine_casing'}
    },
        "outputs": [{"id": 'mekanism:steel_casing',"Count":1 }]})
        event.remove({output:'mekanism:steel_casing'})

        event.custom({ 
            "type": "compactcrafting:miniaturization",
            "recipeSize": 3,
            "layers":[
            {"type": "compactcrafting:mixed","pattern": [
            ["A", "A", "A"],["A", "A", "A"],["A", "A", "A"]]},
            {"type": "compactcrafting:mixed","pattern": [
            ["A", "A", "A"],["A", "B", "A"],["A", "A", "A"]]},
            {"type": "compactcrafting:mixed","pattern": [
            ["A", "A", "A"],["A", "A", "A"],["A", "A", "A"]]}],
            "catalyst": {"id": 'kubejs:mix_block',"Count": 1},
            "components": {
                "A": {"type": "compactcrafting:block","block": 'thermal:machine_frame'},
                "B": {"type": "compactcrafting:block","block": 'minecraft:redstone_block'}
        },
            "outputs": [{"id": 'compactmachines:wall',"Count":64 }]})
            event.remove({output:'compactmachines:wall'})




            event.custom({ 
                "type": "compactcrafting:miniaturization",
                "recipeSize": 9,
                "layers":[
                {"type": "compactcrafting:mixed","pattern": [
                ["A", "A", "A", "A", "A", "A", "A", "A", "A"],//1.1
                ["A", "B", "B", "B", "B", "B", "B", "B", "A"],//2
                ["A", "B", "B", "B", "B", "B", "B", "B", "A"],//3
                ["A", "B", "B", "B", "B", "B", "B", "B", "A"],//4
                ["A", "B", "B", "B", "C", "B", "B", "B", "A"],//5
                ["A", "B", "B", "B", "B", "B", "B", "B", "A"],//6
                ["A", "B", "B", "B", "B", "B", "B", "B", "A"],//7
                ["A", "B", "B", "B", "B", "B", "B", "B", "A"],//8
                ["A", "A", "A", "A", "A", "A", "A", "A", "A"]]},//9
                {"type": "compactcrafting:mixed","pattern": [
                    ["A", "B", "B", "B", "B", "B", "B", "B", "A"],//1.2
                    ["B", "D", "D", "D", "D", "D", "D", "D", "B"],//2
                    ["B", "D", "D", "D", "D", "D", "D", "D", "B"],//3
                    ["B", "D", "D", "D", "D", "D", "D", "D", "B"],//4
                    ["B", "D", "D", "D", "D", "D", "D", "D", "B"],//5
                    ["B", "D", "D", "D", "D", "D", "D", "D", "B"],//6
                    ["B", "D", "D", "D", "D", "D", "D", "D", "B"],//7
                    ["B", "D", "D", "D", "D", "D", "D", "D", "B"],//8
                    ["A", "B", "B", "B", "B", "B", "B", "B", "A"]]},//9
                    {"type": "compactcrafting:mixed","pattern": [
                        ["A", "B", "B", "F", "F", "F", "B", "B", "A"],//1.3
                        ["B", "E", "E", "E", "E", "E", "E", "E", "B"],//2
                        ["B", "E", "E", "E", "E", "E", "E", "E", "B"],//3
                        ["B", "E", "E", "E", "E", "E", "E", "E", "B"],//4
                        ["B", "E", "E", "E", "E", "E", "E", "E", "B"],//5
                        ["B", "E", "E", "E", "E", "E", "E", "E", "B"],//6
                        ["B", "E", "E", "E", "E", "E", "E", "E", "B"],//7
                        ["B", "E", "E", "E", "E", "E", "E", "E", "B"],//8
                        ["A", "B", "C", "C", "B", "C", "C", "B", "A"]]},//9
                        {"type": "compactcrafting:mixed","pattern": [
                            ["A", "B", "F", "B", "B", "B", "F", "B", "A"],//1.4
                            ["B", " ", " ", " ", " ", " ", " ", " ", "B"],//2
                            ["B", " ", " ", " ", " ", " ", " ", " ", "B"],//3
                            ["B", " ", " ", "C", "C", "C", " ", " ", "B"],//4
                            ["B", " ", " ", "C", "C", "C", " ", " ", "B"],//5
                            ["B", " ", " ", "C", "C", "C", " ", " ", "B"],//6
                            ["B", " ", " ", " ", " ", " ", " ", " ", "B"],//7
                            ["B", " ", " ", " ", " ", " ", " ", " ", "B"],//8
                            ["A", "B", "C", "B", "B", "B", "C", "B", "A"]]},//9
                            {"type": "compactcrafting:mixed","pattern": [
                                ["A", "B", "F", "B", "C", "B", "F", "B", "A"],//1.5
                                ["B", " ", " ", " ", " ", " ", " ", " ", "B"],//2
                                ["B", " ", " ", " ", " ", " ", " ", " ", "B"],//3
                                ["B", " ", " ", "C", "C", "C", " ", " ", "B"],//4
                                ["C", " ", " ", "C", "G", "C", " ", " ", "C"],//5
                                ["B", " ", " ", "C", "C", "C", " ", " ", "B"],//6
                                ["B", " ", " ", " ", " ", " ", " ", " ", "B"],//7
                                ["B", " ", " ", " ", " ", " ", " ", " ", "B"],//8
                                ["A", "B", "B", "B", "C", "B", "B", "B", "A"]]},//9
                                {"type": "compactcrafting:mixed","pattern": [
                                    ["A", "B", "F", "B", "B", "B", "F", "B", "A"],//1.6
                                    ["B", " ", " ", " ", " ", " ", " ", " ", "B"],//2
                                    ["B", " ", " ", " ", " ", " ", " ", " ", "B"],//3
                                    ["B", " ", " ", "C", "C", "C", " ", " ", "B"],//4
                                    ["B", " ", " ", "C", "C", "C", " ", " ", "B"],//5
                                    ["B", " ", " ", "C", "C", "C", " ", " ", "B"],//6
                                    ["B", " ", " ", " ", " ", " ", " ", " ", "B"],//7
                                    ["B", " ", " ", " ", " ", " ", " ", " ", "B"],//8
                                    ["A", "B", "C", "B", "B", "B", "C", "B", "A"]]},//9
                                    {"type": "compactcrafting:mixed","pattern": [
                                        ["A", "B", "B", "F", "F", "F", "B", "B", "A"],//1.7
                                        ["B", "E", "E", "E", "E", "E", "E", "E", "B"],//2
                                        ["B", "E", "E", "E", "E", "E", "E", "E", "B"],//3
                                        ["B", "E", "E", "E", "E", "E", "E", "E", "B"],//4
                                        ["B", "E", "E", "E", "E", "E", "E", "E", "B"],//5
                                        ["B", "E", "E", "E", "E", "E", "E", "E", "B"],//6
                                        ["B", "E", "E", "E", "E", "E", "E", "E", "B"],//7
                                        ["B", "E", "E", "E", "E", "E", "E", "E", "B"],//8
                                        ["A", "B", "C", "C", "B", "C", "C", "B", "A"]]},//9
                                        {"type": "compactcrafting:mixed","pattern": [
                                            ["A", "B", "B", "B", "B", "B", "B", "B", "A"],//1.8
                                            ["B", "D", "D", "D", "D", "D", "D", "D", "B"],//2
                                            ["B", "D", "D", "D", "D", "D", "D", "D", "B"],//3
                                            ["B", "D", "D", "D", "D", "D", "D", "D", "B"],//4
                                            ["B", "D", "D", "D", "D", "D", "D", "D", "B"],//5
                                            ["B", "D", "D", "D", "D", "D", "D", "D", "B"],//6
                                            ["B", "D", "D", "D", "D", "D", "D", "D", "B"],//7
                                            ["B", "D", "D", "D", "D", "D", "D", "D", "B"],//8
                                            ["A", "B", "B", "B", "B", "B", "B", "B", "A"]]},//9
                                            {"type": "compactcrafting:mixed","pattern": [
                                                ["A", "A", "A", "A", "A", "A", "A", "A", "A"],//1.9
                                                ["A", "B", "B", "B", "B", "B", "B", "B", "A"],//2
                                                ["A", "B", "B", "B", "B", "B", "B", "B", "A"],//3
                                                ["A", "B", "B", "B", "B", "B", "B", "B", "A"],//4
                                                ["A", "B", "B", "B", "C", "B", "B", "B", "A"],//5
                                                ["A", "B", "B", "B", "B", "B", "B", "B", "A"],//6
                                                ["A", "B", "B", "B", "B", "B", "B", "B", "A"],//7
                                                ["A", "B", "B", "B", "B", "B", "B", "B", "A"],//8
                                                ["A", "A", "A", "A", "A", "A", "A", "A", "A"]]},],//9
                "catalyst": {"id": 'kubejs:mix_block',"Count": 1},
                "components": {
                    "A": {"type": "compactcrafting:block","block": 'minecraft:netherite_block'},
                    "B": {"type": "compactcrafting:block","block": 'minecraft:smooth_quartz'},
                    "C": {"type": "compactcrafting:block","block": 'compactmachines:wall'},
                    "D": {"type": "compactcrafting:block","block": 'thermal:machine_frame'},
                    "E": {"type": "compactcrafting:block","block": 'fluxnetworks:flux_block'},
                    "F": {"type": "compactcrafting:block","block": 'minecraft:redstone_block'},
                    "G": {"type": "compactcrafting:block","block": 'mekanism:steel_casing'},
            },
                "outputs": [{"id": 'modularrouters:modular_router',"Count":2 }]})
                event.remove({output:'modularrouters:modular_router'})



                event.custom({ 
                    "type": "compactcrafting:miniaturization",
                    "recipeSize": 7,
                    "layers":[
                        {"type": "compactcrafting:mixed","pattern": [
                            ["F", "A", "A", "A", "A", "A", "F"],//1.1
                            ["A", "C", "D", "C", "C", "C", "A"],//2
                            ["A", "C", "D", "C", "D", "D", "A"],//3
                            ["A", "C", "C", "C", "C", "C", "A"],//4
                            ["A", "D", "D", "C", "D", "C", "A"],//5
                            ["A", "C", "C", "C", "D", "C", "A"],//6
                            ["F", "A", "A", "A", "A", "A", "F"]]},//7
                    {"type": "compactcrafting:mixed","pattern": [
                        ["A", "C", "D", "C", "C", "C", "A"],//1.2
                        ["C", "B", "B", "B", "B", "B", "C"],//2
                        ["C", "B", "B", "B", "B", "B", "D"],//3
                        ["C", "B", "B", "B", "B", "B", "C"],//4
                        ["D", "B", "B", "B", "B", "B", "C"],//5
                        ["C", "B", "B", "B", "B", "B", "C"],//6
                        ["A", "C", "C", "C", "D", "C", "A"]]},//7
                        {"type": "compactcrafting:mixed","pattern": [
                            ["A", "C", "D", "C", "D", "D", "A"],//1.3
                            ["D", "B", "B", "B", "B", "B", "C"],//2
                            ["D", "B", "B", "B", "B", "B", "D"],//3
                            ["C", "B", "B", "B", "B", "B", "C"],//4
                            ["D", "B", "B", "B", "B", "B", "D"],//5
                            ["C", "B", "B", "B", "B", "B", "D"],//6
                            ["A", "D", "D", "C", "D", "C", "A"]]},//7
                            {"type": "compactcrafting:mixed","pattern": [
                                ["A", "C", "C", "C", "C", "C", "A"],//1.4
                                ["C", "B", "B", "B", "B", "B", "C"],//2
                                ["C", "B", "B", "B", "B", "B", "C"],//3
                                ["C", "B", "B", "E", "B", "B", "C"],//4
                                ["C", "B", "B", "B", "B", "B", "C"],//5
                                ["C", "B", "B", "B", "B", "B", "C"],//6
                                ["A", "C", "C", "C", "C", "C", "A"]]},//7
                                {"type": "compactcrafting:mixed","pattern": [
                                    ["A", "D", "D", "C", "D", "C", "A"],//1.5
                                    ["C", "B", "B", "B", "B", "B", "D"],//2
                                    ["D", "B", "B", "B", "B", "B", "D"],//3
                                    ["C", "B", "B", "B", "B", "B", "C"],//4
                                    ["D", "B", "B", "B", "B", "B", "D"],//5
                                    ["D", "B", "B", "B", "B", "B", "C"],//6
                                    ["A", "C", "D", "C", "D", "D", "A"]]},//7
                                    {"type": "compactcrafting:mixed","pattern": [
                                        ["A", "C", "C", "C", "D", "C", "A"],//1.6
                                        ["C", "B", "B", "B", "B", "B", "C"],//2
                                        ["D", "B", "B", "B", "B", "B", "C"],//3
                                        ["C", "B", "B", "B", "B", "B", "C"],//4
                                        ["C", "B", "B", "B", "B", "B", "D"],//5
                                        ["C", "B", "B", "B", "B", "B", "C"],//6
                                        ["A", "C", "D", "C", "C", "C", "A"]]},//7
                                        {"type": "compactcrafting:mixed","pattern": [
                                            ["F", "A", "A", "A", "A", "A", "F"],//1.7
                                            ["A", "C", "D", "C", "C", "C", "A"],//2
                                            ["A", "C", "D", "C", "D", "D", "A"],//3
                                            ["A", "C", "C", "C", "C", "C", "A"],//4
                                            ["A", "D", "D", "C", "D", "C", "A"],//5
                                            ["A", "C", "C", "C", "D", "C", "A"],//6
                                            ["F", "A", "A", "A", "A", "A", "F"]]}],//7
                    "catalyst": {"id":'modularrouters:distributor_module',"Count": 1},
                    "components": {
                        "A": {"type": "compactcrafting:block","block": 'refinedstorage:quartz_enriched_iron_block'},
                        "B": {"type": "compactcrafting:block","block": 'thermal:machine_frame'},
                        "C": {"type": "compactcrafting:block","block": 'minecraft:black_concrete'},
                        "D": {"type": "compactcrafting:block","block": 'minecraft:red_wool'},
                        "E": {"type": "compactcrafting:block","block": 'custom:modular_master'},
                        "F": {"type": "compactcrafting:block","block": 'refinedstorage:machine_casing'},
                        
                },
                    "outputs": [{"id": 'refinedproxy:refined_proxy',"Count":1 }]})
                    event.remove({output:'refinedproxy:refined_proxy'})
})