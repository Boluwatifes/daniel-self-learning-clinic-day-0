'use strict'

module.exports = {

	//function to determine if a sequence is arithmetic or geometry

	aritGeo : function(nums){
		let arithmetic = false;
		  let geometric = false;
		  if(!Array.isArray(nums))
		  {
		    return "Invalid inputs";
		  }
		  else if(nums.length == 0)
		  {
		    return 0;
		  }
		  else if(nums.length < 3)
		  {
		    return "Array length must not be less than 3";
		  }
		  for(var i = 0; i < nums.length - 2; i++ )
		  {
		    if((nums[i] - nums[i + 1]) == (nums[i + 1] - nums[i + 2]))
		    {
		      arithmetic = true;
		    }
		    else if((nums[i] / nums[i + 1]) == (nums[i + 1] / nums[i + 2]))
		    {
		      geometric = true;
		    }
		    else
		    {
		      arithmetic = false;
		      geometric = false;
		    }
		    
		  }
		  if(geometric)
		  {
		    return "Geometric";
		  }
		  else if(arithmetic)
		  {
		    return "Arithmetic";
		  }
		  else
		  {
		    return -1;
		  }
	}
}