const cardList = [
    {
        title: "FORTUNER",
        image: "images/FORTUNER.jpeg",
        link: "About FORTUNER",
        desciption: "Demo desciption about kitten 2"
    },
    {
        title: " XUV700",
        image: "images/XUV700.jpeg",
        link: "About XUV700",
        desciption: "Demo desciption about SRH"
    }
]
const clickMe = () => {
    alert("Thanks for clicking me. Hope you have a nice day!")
}
 
const submitForm = () => {
    let formData = {};
    formData.first_name = $('#first_name').val();
    formData.last_name = $('#last_name').val();
    formData.password = $('#password').val();
    formData.email = $('#email').val();
    console.log("Form Data Submitted: ", formData);
    fetch('/home')
        .then (response => response.json())
        .then(data => {
            console.log('Data from backend:', data);
        })
        .catch(err => console.error('Error:', err))

}
 
const addCards = (items) => {
    items.forEach(item => {
        let itemToAppend = '<div class="col s4 center-align">'+
    '<div class="card medium"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="'+item.image+'">'+
    '</div><div class="card-content">'+
    '<span class="card-title activator grey-text text-darken-4">'+item.title+'<i class="material-icons right">more_vert</i></span><p><a href="#">'+item.link+'</a></p></div>'+
    '<div class="card-reveal">'+
        '<span class="card-title grey-text text-darken-4">'+item.title+'<i class="material-icons right">close</i></span>'+
        '<p class="card-text grey-text text-darken-4">'+item.desciption+'</p>'+
      '</div></div></div>';
      $("#card-section").append(itemToAppend)
    });
}
 
 
 
$(document).ready(function(){
    $('.materialboxed').materialbox();
    $('#formSubmit').click(()=>{
        submitForm();
    })
    //addCards(cardList);
    $('.modal').modal();
  });