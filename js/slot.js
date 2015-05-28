function slotPath(cx,cy,bit_diameter,x,y,dogbone) {
	var radius = bit_diameter/2;
	if(x <= bit_diameter && y <= bit_diameter) {
		path = [0,0];
	}
	else if(x <= bit_diameter) {
		path = [
			[0,radius],
			[0,y-radius]
		];
		translate(path, -bit_diameter/2.0, -y/2.0);
	} 
	else if (y <= bit_diameter) {
		path = [
			[radius,0],
			[x-radius,0],
		];
		translate(path, -x/2.0, -bit_diameter/2.0);
	} else {
		if(dogbone) {
			db = Math.sqrt(2*radius*radius) - radius;
			db = radius-Math.sqrt(db*db/2.0);
			console.log(db)
			path = [
				[db,db], // dogbone
				[radius,radius],
				[radius,y-radius],
				[db,y-db],
				[radius,y-radius],
				[x-radius,y-radius],
				[x-db,y-db],
				[x-radius,y-radius],
				[x-radius,radius],
				[x-db,db],
				[x-radius,radius],
				[radius,radius]
			];
		} else {
			path = [
				[radius,radius],
				[radius,y-radius],
				[x-radius,y-radius],
				[x-radius,radius],
				[radius,radius]
			];
		}
		translate(path, -x/2.0, -y/2.0);

	}
	translate(path, -cx,-cy);
	return path
}

function translate(path, x, y) {
	for(var i=0; i<path.length; i++) {
		path[i][0] += x;
		path[i][1] += y;
	}
}
