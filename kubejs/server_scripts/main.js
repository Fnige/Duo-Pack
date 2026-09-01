ServerEvents.recipes(e => {
	[
		// Removing water veins
		{id: 'createoreexcavation:ore_vein_type/water'},
		{mod: 'createoreexcavation', output: Fluid.of('minecraft:water')},
	].forEach((recipe => {
		e.remove(recipe)
	}))
})