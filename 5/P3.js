function name(firstname,lastname,gender)
{
	var output;

	if (gender==='male')
	{
     output='Mr.'+firstname+'-'+lastname;
     return output;
	}
	elseif (gender==='female')
	{
     output='Mrs.'+firstname+'-'+lastname;
     return output;
	}

}

var result=name('MD','MOHSIN','male');

console.log(result);