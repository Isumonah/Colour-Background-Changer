const colours = ['#FFFFFF', '#89B6A5', '#423E3B', '#E67F0D','#227A4A', '#17BEBB', '#726E60', '#B6E86B', '#AF1B3F', '#04AB3D', '#FCFF78', '#340068', '#A54657', '#ABE188', '#6184D8', '#CBE896', '#767800', '#EA526F', '#0A1045', '#DBCBD8', '#E1CE7A', '#FF8811', '#DD7373', '#E9190F']

function changeColour(){
    console.log("anna")

}

    const colorOptions = document.getElementById("color-options")

    colours.map(color => {
   
        colorOptions.innerHTML += `
            <button
                class='my-color-option'
                id='colour-option'
                style='background: ${color}';
                'color: ${color}'
                > Colour ${color}
            </button>
        `
    })

    function addListenerToButton(){
        const button = document.querySelectorAll("colour-option")
        console.log(button) 
        
    }
    





addListenerToButton()