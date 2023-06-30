export var formDataArray = [];

export function handleSubmit(event) {
    event.preventDefault();

    var formData = new FormData(event.target);
    var formObject = {};

    formData.forEach(function(value, key) {
        formObject[Key] = value;
    });

    formDataArray.push(formObject);

    console.log(formDataArray);

    event.target.reset();
}