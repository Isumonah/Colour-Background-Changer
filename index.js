const colors = ['#FFFFFF', '#89B6A5', '#423E3B', '#E67F0D','#227A4A', '#17BEBB', '#726E60', '#B6E86B', '#AF1B3F', '#04AB3D', '#FCFF78', '#340068', '#A54657', '#ABE188', '#6184D8', '#CBE896', '#767800', '#EA526F', '#0A1045', '#DBCBD8', '#E1CE7A', '#FF8811', '#DD7373', '#E9190F']

const colorOptions = document.getElementById("color-options")

    colors.map(color => {
   
        colorOptions.innerHTML += `
            <button
                class='my-color-option'
                style='background: ${color}';
                'color: ${color}'
                >
            </button>
        `
    })

    
    function changeColor(event){
        const background = event.target.style.background
        console.log(background)
    
        // changeBackgroundColor is each div class whose background will be changed in the sample page
    
       let changeBackgroundColor = document.getElementsByClassName("change-background-color")
       for(divClass of changeBackgroundColor){

        divClass.style.background = background
       
        background === "rgb(66, 62, 59)" || 
        background === "rgb(34, 122, 74)" ||
        background === "rgb(114, 110, 96)" ||
        background === "rgb(175, 27, 63)" ||
        background === "rgb(52, 0, 104)" ||
        background === "rgb(165, 70, 87)" ||
        background === "rgb(118, 120, 0)" ||
        background === "rgb(10, 16, 69)" ||
        background === "rgb(233, 25, 15)"
        
        ? divClass.style.color = "white" : divClass.style.color = "black"
    
       }
    
    //  textColor is the colour of text in the sample page
       let textColor = document.getElementById("change-text-color")
    
       background === "rgb(255, 255, 255)" ?  textColor.style.color = "black" : textColor.style.color = background
       
    }
    

    function addEventListener() {
       const buttonCollection = document.getElementsByClassName("my-color-option")
       for (button of buttonCollection){
        button.addEventListener("click", changeColor)
       }
       
    }
    addEventListener()
    




