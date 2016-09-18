var searchIndex = {};
searchIndex['bbt'] = {"items":[[3,"Rater","bbt","Rater is used to calculate rating updates given the β-parameter.",null,null],[3,"Rating","","Rating represents the skill of a player.",null,null],[4,"Outcome","","Outcome represents the outcome of a head-to-head duel between two players.",null,null],[13,"Win","","The first player won the game",0,null],[13,"Loss","","The first player lost the game",0,null],[13,"Draw","","Neither player won",0,null],[11,"new","","This method instantiates a new rater with the given β-parameter.",1,{"inputs":[{"name":"rater"},{"name":"f64"}],"output":{"name":"rater"}}],[11,"default","","This method instantiates a new rater the default β-parameter of 25.0/6.0\nused in the paper.",1,{"inputs":[{"name":"rater"}],"output":{"name":"rater"}}],[11,"update_ratings","","This method takes a vector of teams, with each team being a vector of\nplayer ratings, and a vector ranks of the same size that specifies the\norder in which the team finished a game. It returns either\n`Err(error_message)` if the input is incorrect or\n`Ok(Vec<Vec<Rating>>)`. The returned vector is an updated version of\nthe `teams` vector that was passed into the function.",1,{"inputs":[{"name":"rater"},{"name":"vec"},{"name":"vec"}],"output":{"name":"result"}}],[11,"duel","","This method calculates the new ratings for two players after a\nhead-to-head duel. The outcome is from the first player `p1`'s\nperspective, i.e. `Win` if the first player won, `Loss` if the second\nplayer won and `Draw` if neither player won.",1,null],[11,"clone","","",2,{"inputs":[{"name":"rating"}],"output":{"name":"rating"}}],[11,"eq","","",2,{"inputs":[{"name":"rating"},{"name":"rating"}],"output":{"name":"bool"}}],[11,"ne","","",2,{"inputs":[{"name":"rating"},{"name":"rating"}],"output":{"name":"bool"}}],[11,"default","","Instantiates a Rating with the default values of mu=25.0 and sigma=25.0/3.0",2,{"inputs":[{"name":"rating"}],"output":{"name":"rating"}}],[11,"partial_cmp","","",2,{"inputs":[{"name":"rating"},{"name":"rating"}],"output":{"name":"option"}}],[11,"fmt","","",2,{"inputs":[{"name":"rating"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",2,{"inputs":[{"name":"rating"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"new","","",2,{"inputs":[{"name":"rating"},{"name":"f64"},{"name":"f64"}],"output":{"name":"rating"}}],[11,"mu","","Returns the estimated skill of the player.",2,{"inputs":[{"name":"rating"}],"output":{"name":"f64"}}],[11,"sigma","","Returns the variance on the estimate of the player's skill.",2,{"inputs":[{"name":"rating"}],"output":{"name":"f64"}}]],"paths":[[4,"Outcome"],[3,"Rater"],[3,"Rating"]]};
initSearch(searchIndex);