class InstructionsAdapter{
	constructor(baseURL){
		this.baseURL = baseURL
	}

	fetchInstructions(){
		fetch(this.baseURL)
		.then(res => res.json())
		.then(console.log)
	}

}