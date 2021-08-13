// HTML ELEMENTS
const statusDiv = document.querySelector('.status');
const resetDiv = document.querySelector('.reset');
const cellDivs = document.querySelectorAll('.game-cell');

//game variables
let gameIsLive = true;
let xIsNext = true;



//event Handlers
const handleReset = (e) => {
	console.log(e);
};
 
const handleCellCick = (e) => {
	const.classList = e.target.classList;
	const location = classList[1];'x'
	if (classList[2]=)



	if (xIsNext) {
		classList.add('x');
		xIsNext=!xIsNext


	} else{
		classList.add('o');
		xIsnext = !xIsnext;
	}
};

// event listener
resetDiv.addEventListener('click',handleReset);
for(const cellDiv){
	cellDiv.addEventListener('click', handleCellCick)
}
