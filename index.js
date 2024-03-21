function addFields() {
    var availableFieldsSelect = document.getElementById("availableFields");
    var selectedOptions = availableFieldsSelect.selectedOptions;
    var displayedFieldsSelect = document.getElementById("displayedFields");

    for (var i = 0; i < selectedOptions.length; i++) {
        var option = selectedOptions[i];
        displayedFieldsSelect.appendChild(option);
    }
}

function removeFields() {
    var displayedFieldsSelect = document.getElementById("displayedFields");
    var selectedOptions = displayedFieldsSelect.selectedOptions;
    var availableFieldsSelect = document.getElementById("availableFields");

    for (var i = 0; i < selectedOptions.length; i++) {
        var option = selectedOptions[i];
        availableFieldsSelect.appendChild(option);
    }
}
 function read(){
    var file = document.getElementById("filetoupload").files[0];
    return new Promise((resolve,reject) => {
        if (file) {
            var reader = new FileReader();
            reader.readAsText(file, "UTF-8");
            reader.onload = function (evt) {
                resolve(JSON.parse(evt.target.result));
            }
            
        }else 
            reject('error');
    })
}
function myRead() {
    read().then(data => {
        console.log(data);
        console.log(data.products)
    })
}
