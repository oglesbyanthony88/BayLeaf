# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
	

Recipe.create([{title: "Roasted Broccoli Pasta with Lemon and Feta"},
							{title: "Spinach and Artichoke Wonderpot"},
							{title: "Mushroom and Spinach Pasta with Ricotta"}])

										# Roasted Broccoli Pasta with Lemon and Feta
Ingredient.create([{item: "Broccoli", amount: "1 lb", recipe_id:1},
									{item: "Olive Oil", amount: "1 Tbsp", recipe_id: 1},
									{item: "Steak Seasoning", amount: "1 tsp", recipe_id: 1},
									{item: "Lemon", amount: "1", recipe_id: 1},
									{item: "Penne Pasta", amount: "8 oz", recipe_id: 1},
									{item: "Butter", amount: "2 Tbsp", recipe_id: 1},
									{item: "Crumbled Feta", amount: "1 oz", recipe_id: 1},
										# Spinach and Artichoke Wonderpot
									{item: "Mushrooms", amount: "8 oz", recipe_id: 2},
									{item: "Artichoke Hearts", amount: "13 oz can", recipe_id: 2},
									{item: "Garlic", amount: "4 cloves", recipe_id: 2},
									{item: "Yellow Onion", amount: "1", recipe_id: 2},
									{item: "Vegetable Broth", amount: "5 cups", recipe_id: 2},
									{item: "Olive Oil", amount: "2 Tbsp", recipe_id: 2},
									{item: "Fettuccine", amount: "12 oz", recipe_id: 2},
									{item: "Dried Oregeno", amount: "1 tsp", recipe_id: 2},
									{item: "Dried Thyme", amount: "1/2 tsp", recipe_id: 2},
									{item: "Black Pepper", amount: "pinch", recipe_id: 2},
									{item: "Spinach", amount: "4 oz", recipe_id: 2},
									{item: "Crushed Red Pepper", amount: "pinch", recipe_id: 2},
									{item: "Feta", amount: "3 oz", recipe_id: 2},
									 # Mushroom and Spinach Pasta with Ricotta
									{item: "Bowtie Pasta", amount: "8 oz", recipe_id: 3},
									{item: "Mushrooms", amount: "16 oz", recipe_id: 3},
									{item: "Olive Oil", amount: "2 Tbsp", recipe_id: 3},
									{item: "Butter", amount: "2 Tbsp", recipe_id: 3},
									{item: "Garlic", amount: "2 cloves", recipe_id: 3},
									{item: "Spinach", amount: "2 cups", recipe_id: 3},
									{item: "Salt + Pepper", amount: "to taste", recipe_id: 3},
									{item: "Ricotta", amount: "1/2 cup", recipe_id: 3},
									{item: "Crushed Red Pepper", amount: "pinch", recipe_id: 3}])

										# Roasted Broccoli Pasta with Lemon and Feta
Instruction.create([{step_num: 1, content: "Preheat the oven to 400ºF. Cut the broccoli into small florets. Line a baking sheet with parchment paper, then spread the florets out over the baking sheet. Drizzle the broccoli with olive oil and sprinkle the steak seasoning over top. Toss the broccoli until it is well coated in oil and seasoning.", recipe_id: 1},
									 {step_num: 2, content: "Roast the broccoli for 20-25 minutes, or until it is brown and crispy on the edges.", recipe_id: 1},
									 {step_num: 3, content: "While the broccoli is roasting, prepare the rest of the dish. Bring a pot of water to boil for the penne. Once boiling, add the pasta, and continue to boil until the pasta is tender (8-10 minutes). Reserve about ½ cup of the starchy pasta water, then drain the pasta in a colander.", recipe_id: 1},
									 {step_num: 4, content: "While the pasta is boiling, zest a lemon, then cut it into wedges.", recipe_id: 1},
									 {step_num: 5, content: "Return the drained pasta to the pot (heat turned off). Add the roasted broccoli florets, the butter, about 1 tsp lemon zest, and the juice from two of the lemon wedges. Stir the ingredients together, letting the residual heat from the pasta melt the butter. If the pasta seems too dry, add a splash or two of the reserved pasta water.", recipe_id: 1},
									 {step_num: 6, content: "Top the pasta with crumbled feta and a pinch or two more steak seasoning, if desired. Serve with extra lemon wedges.", recipe_id: 1},
									 	# Mushroom and Spinach Pasta with Ricotta
									 {step_num: 1, content: "Bring a large pot of water to a boil for the pasta. Once boiling, add the bowtie pasta and continue to boil until tender (about 7 minutes). Reserve 1/2 cup of the starchy pasta water before draining in a colander", recipe_id: 3},
									 {step_num: 2, content: "While the pasta is cooking, prepare the rest of the dish. Wash and slice the mushrooms, then add them to a large skillet along with the olive oil. Sauté over medium heat until the mushrooms have released all their water, the water has evaporated, and the mushrooms begin to brown (about 7 minutes).", recipe_id: 3},
									 {step_num: 3, content: "While the mushrooms are cooking, mince the garlic. Add the garlic and butter to the browned mushrooms and continue to cook over medium for 1-2 minutes more, or just until the garlic softens a bit.", recipe_id: 3},
									 {step_num: 4, content: "By this time the pasta should be finished cooking. Add about 1/4 cup of the reserved pasta water to the skillet and stir to dissolve any browned bits off the bottom of the skillet. The starchy pasta water and butter will make a slurry that will act as a light sauce that helps the salt and pepper adhere to the surface of the pasta.", recipe_id: 3},
									 {step_num: 5, content: "Add the fresh spinach to the skillet and stir just until wilted (1 minute). Add the drained pasta to the skillet and stir until everything is evenly combined. Turn the heat off and season liberally with salt and pepper. If the pasta is dry, you can add an additional splash of the reserved pasta water.", recipe_id: 3},
									 {step_num: 6, content: "Finally, spoon the ricotta on top of the pasta in one-tablespoon dollops. Add a pinch of red pepper on top, if desired, and serve warm.", recipe_id: 3},
									 	# Spinach and Artichoke Wonderpot
									 {step_num: 1, content: "Rinse the mushrooms to remove any dirt or debris, then slice them thinly. Drain the can of artichoke hearts and roughly chop them into bite-sized pieces. Thinly slice the onion and garlic (you can mince the garlic and dice the onion if you don't like large pieces).", recipe_id: 2},
									 {step_num: 2, content: "Place the vegetable broth, olive oil, mushrooms, artichoke hearts, onions, and garlic in a large pot. Break the fettuccine in half and add it to the pot along with the oregano, thyme, and some freshly cracked pepper (10-15 cranks of a pepper mill). Push the ingredients down under the broth as much as possible. Place a lid on the pot and bring it up to a rolling boil over high heat.", recipe_id: 2},
									 {step_num: 3, content: "As soon as it reaches a boil, stir the pot to evenly distribute the ingredients and prevent the pasta from sticking. Turn the heat down to low so that the pot is simmering. Allow the pot to simmer, with the lid on, stirring every couple of minutes, for 10-15 minutes, or until the pasta is tender and most of the liquid has been absorbed. Make sure the broth is simmering the entire time, turning the heat up slightly, if needed, to maintain a simmer.", recipe_id: 2},
									 {step_num: 4, content: "Once the pasta is cooked through, add the spinach and stir it into the pasta, allowing the heat to wilt the spinach (if using frozen, stir until the heat has thawed the spinach).", recipe_id: 2},
									 {step_num: 5, content: "Serve the pasta hot with a pinch of crushed red pepper and some crumbled feta on top, if desired).", recipe_id: 2}])