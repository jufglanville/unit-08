// API call
const api = 'https://randomuser.me/api/?results=12&nat=gb,ie&exc=login,registered,cell,id';
//let userData = {};

// The Grid Container
const gridContainer = document.getElementById('grid-container');
// Card 
const btn = document.getElementById('btn');


// function retrieveData() {
//     fetch(api)
//         .then(response => {
//             if(response.status !== 200) {
//                 console.log('Looks like there was a problem. Status code: ' + response.status);
//                 return;
//             }
//             response.json()
//             .then(data => {
//                 userData = data.results;
                
//                 for (let i = 0; i <userData.length; i++){
//                     // Add Variables
//                     let apiId = i;
//                     let apiDataPic = userData[i].picture.large;
//                     let apiDataFirst = userData[i].name.first;
//                     let apiDataLast = userData[i].name.last;
//                     let apiDataEmail = userData[i].email;
//                     let apiDataCounty = userData[i].location.state;
//                     let apiDataPhone = userData[i].phone;
//                     let apiDataStreet = userData[i].location.street;
//                     let apiDataCity = userData[i].location.city;
//                     let apiDataPostcode = userData[i].location.postcode;
//                     let apiDataDOB = userData[i].dob.date;
//                     // Functions to format raw data
//                     apiDataName = userNameConcat(apiDataFirst, apiDataLast);
//                     apiDataAddress = userAddressConcat(apiDataStreet, apiDataCity, apiDataPostcode);
//                     apiDataDOB = userDOBFormat(apiDataDOB);

//                     // Send data from userInfo

//                     // Add Card Containers
//                     generateCard('card', apiId);

//                     // Add Card Content
//                     addContent()
//                 }

//             })
//         })
// };

// //                         // Create new Avatar Image
// //                         newImg = document.createElement('IMG');
// //                         newImg.className = 'avatar';
// //                         newImg.setAttribute('alt', 'profile avatar');
// //                         newImg.setAttribute('src', apiDataPic);
// //                         newCard.appendChild(newImg);

// //                         // Create Card Info Div
// //                         cardInfo = document.createElement('DIV');
// //                         cardInfo.className = 'card-info';
// //                         newCard.appendChild(cardInfo);


// // Helper Function

// // Generate Cards
// function generateCard(className, id) {
//     newCard = document.createElement('DIV');
//     newCard.className = className;
//     newCard.setAttribute('id', 'user-' + id);
//     gridContainer.appendChild(newCard);    
// };

// // Add content to cards
// function addContent(tag, className, string, parent) {
//     //   populalate the card
//     let element = document.createElement(tag); // create the element tag
//     if (tag == "img") {
//       element.setAttribute("src", string); // set the source for the image
//     } else {
//       element.innerHTML = string; // set the text
//     }
//     element.setAttribute("class", className); // assign class name
//     parent.appendChild(element); // append the element
//   }

// // Concat first and last name
// function userNameConcat(first, last){
//     let fullName = first + " " + last;
//     return fullName;
// }

// // Concat address items to make full address
// function userAddressConcat(street, city, postcode){
//     let fullAddress = street + ", " + city + ", " + postcode;
//     return fullAddress;
// }

// // Correctly format DOB
// function userDOBFormat(DOB){
//     let rawDate = new Date(DOB);
//     let date = ("0" + rawDate.getDate()).slice(-2);
//     let month = ("0" + rawDate.getMonth()).slice(-2);
//     let year = ("0" + rawDate.getYear()).slice(-2);
//     let DOBFormat = "DOB: " + date + "/" + month + "/" + year;
//     return DOBFormat;
// }


// // Add data to Cards
// // function addData(el, data, parent) {

// // }

// // function populateCard(tag, className, string, parent) {
// //     //   populalate the card
// //     let element = document.createElement(tag); // create the element tag
// //     if (tag == "img") {
// //       element.setAttribute("src", string); // set the source for the image
// //     } else {
// //       element.innerHTML = string; // set the text
// //     }
// //     element.setAttribute("class", className); // assign class name
// //     par


//                         // newImg = document.createElement('IMG');
// //                         newImg.className = 'avatar';
// //                         newImg.setAttribute('alt', 'profile avatar');
// //                         newImg.setAttribute('src', apiDataPic);
// //                         newCard.appendChild(newImg);


// // Run JavaScript Function

// retrieveData();


// function retrieveData() {
//     fetch(api)
//         .then(response => {
//                 if (response.status !== 200) {
//                     console.log('Looks like there was a problem. Status code: ' + response.status);
//                     return;
//                 }
//                 response.json().then(function(data){
//                     userData = data.results;
//                     console.log(userData);

//                 })
//             }
//         )
//         .catch(err => {
//             console.log('Fetch Error :-S', err);
//         });
// }

// function createCards() {

// }

// function dobFormat(dob) {
//     let fix = new Date(dob);
//     let date = fix.getDate();
//     let month = fix.getMonth();
//     if (month == 0) {
//       month++;
//     }
//     let year = fix.getYear();
//     let fixed_birthday = date + "/" + month + "/" + year;
//     return fixed_birthday;
//   }

// let employeeData = [
//     {
//       image: employee_image,
//       name: employee_name,
//       email: employee_email,
//       city: employee_city,
//       cell: employee_cell,
//       address: employee_address,
//       birthday: employee_birthday,
//       index: employee_index
//     }
//   ];

// function myFunction() {
//     let apiDataPic = userData.picture.large;
//     let apiDataName = userData.name.first + ' ' + userData[i].name.last;
//     let apiDataEmail = userData.email;
//     let apiDataCounty = userData.location.state;
//     let apiDataPhone = userData.phone;
//     let apiDataAddress = userData.location.street + ', ' + userData[i].location.city + ', ' + userData[i].location.postcode;
//     let apiDataDOB = 'DOB: ' + userData.dob.date.substring(0,10);

//     console.log(apiDataPic);
// }


// Below Works

function retrieveData() {
fetch(api)
    .then(
        function(response) {
            if (response.status !== 200) {
                console.log('Looks like there was a problem. Status code: ' + response.status);
                return;
            }

            response.json().then(function(data) {
                userData = data.results;
                console.log(userData);
                    // Make into Function
                    // use a forEach for the array list created from downloaded API content
                    for (let i = 0; i < userData.length; i += 1){ 

                        // Store Data variables
                        let apiDataPic = userData[i].picture.large;
                        let apiDataName = userData[i].name.first + ' ' + userData[i].name.last;
                        let apiDataEmail = userData[i].email;
                        let apiDataCounty = userData[i].location.state;
                        let apiDataPhone = userData[i].phone;
                        let apiDataAddress = userData[i].location.street + ', ' + userData[i].location.city + ', ' + userData[i].location.postcode;
                        let apiDataDOB = 'DOB: ' + userData[i].dob.date.substring(0,10);

                        // Create new Card Container
                        newCard = document.createElement('DIV');
                        newCard.className = 'card';
                        newCard.setAttribute('id', 'user-'+[i]);
                        gridContainer.appendChild(newCard);
                        
                        // Create new Avatar Image
                        newImg = document.createElement('IMG');
                        newImg.className = 'avatar';
                        newImg.setAttribute('alt', 'profile avatar');
                        newImg.setAttribute('src', apiDataPic);
                        newCard.appendChild(newImg);

                        // Create Card Info Div
                        cardInfo = document.createElement('DIV');
                        cardInfo.className = 'card-info';
                        newCard.appendChild(cardInfo);

                        // Create h2 element in Card Info
                        userName = document.createElement('H2');
                        userName.innerHTML = apiDataName; // array [i] name
                        cardInfo.appendChild(userName);

                        // Create email in Card Info
                        email = document.createElement('P');
                        email.innerHTML = apiDataEmail; //array [i] email
                        cardInfo.appendChild(email);    

                        // Create City in Card Info
                        city = document.createElement('P');
                        city.innerHTML = apiDataCounty; // array [i] city
                        cardInfo.appendChild(city);   

                        // Create Modal

                        // Create new modal div
                        newModal = document.createElement('DIV');
                        newModal.className = 'modal';
                        newModal.setAttribute('id', 'modal-'+[i]);
                        gridContainer.appendChild(newModal);

                        // Create new modal content div
                        modalContent = document.createElement('DIV');
                        modalContent.className = 'modal-content';
                        newModal.appendChild(modalContent);

                        // Create close button
                        close = document.createElement('SPAN');
                        close.className = 'close';
                        close.innerHTML = '&times;';
                        modalContent.appendChild(close);  


                        // Duplicates!!!!!!

                        // Create div to contain top info
                        modalTop = document.createElement('DIV');
                        modalTop.className = 'modal-top';
                        modalContent.appendChild(modalTop);

                        // Create new modal Avatar Image
                        modalImg = document.createElement('IMG');
                        modalImg.className = 'modal-avatar';
                        modalImg.setAttribute('alt', 'profile');
                        modalImg.setAttribute('src', apiDataPic); // array [i] image
                        modalTop.appendChild(modalImg);

                        // Create h2 element in Modal
                        modalName = document.createElement('H2');
                        modalName.innerHTML = apiDataName; // array [i] name
                        modalTop.appendChild(modalName);

                        // Create email in Modal
                        modalEmail = document.createElement('P');
                        modalEmail.innerHTML = apiDataEmail; //array [i] email
                        modalTop.appendChild(modalEmail);    

                        // Create City in Modal
                        modalCity = document.createElement('P');
                        modalCity.innerHTML = apiDataCounty; // array [i] city
                        modalTop.appendChild(modalCity);  

                        // Create div to contain bottom info
                        modalBottom = document.createElement('DIV');
                        modalBottom.className = 'modal-bottom';
                        modalContent.appendChild(modalBottom);

                        // Create Phone in Modal
                        modalPhone = document.createElement('P');
                        modalPhone.innerHTML = apiDataPhone; // array [i] phone
                        modalBottom.appendChild(modalPhone);  

                        // Create Address in Modal
                        modalAddress = document.createElement('P');
                        modalAddress.innerHTML = apiDataAddress; // array [i] address
                        modalBottom.appendChild(modalAddress);  

                        // Create Birthday in Modal
                        modalBday = document.createElement('P');
                        modalBday.innerHTML = apiDataDOB; // array [i] bday
                        modalBottom.appendChild(modalBday);  

                        // Create nav div
                        modalNav = document.createElement('DIV');
                        modalNav.className = 'modal-nav';
                        modalContent.appendChild(modalNav);

                        // Create left button
                        left = document.createElement('SPAN');
                        left.className = 'left-btn';
                        left.innerHTML = '&lt;';
                        modalNav.appendChild(left);  

                        // Create right button
                        right = document.createElement('SPAN');
                        right.className = 'right-btn';
                        right.innerHTML = '&gt;';
                        modalNav.appendChild(right);  
                    }
                

                    // Variables for once elements are created

                    let modalBtn = document.querySelectorAll('div.card');
                    const modals = document.querySelectorAll('.modal');
                    const spans = document.getElementsByClassName("close");
                    const rightBtn = document.getElementsByClassName("right-btn");
                    const leftBtn = document.getElementsByClassName("left-btn");



                    // Interacting with modals

                    // Open Different Modals
                    for (let i = 0; i < modalBtn.length; i++) {
                        modalBtn[i].onclick = function() {
                        let modalOpen = document.getElementById('modal-'+[i]);
                        modalOpen.className += ' open';
                        modalOpen.style.display = 'block';
                        }
                    }

                    // Close the modal
                    for (let i = 0; i < spans.length; i++) {
                        spans[i].onclick = function() {
                            let closeButton = spans[i].parentNode;
                            closeButton = closeButton.parentNode;
                            closeButton.classList.remove('open');
                            closeButton.style.display = 'none';
                        }
                    }

                    // Close Modal clicking outside modal
                    window.onclick = function(event) {
                        let selectedModal = document.getElementsByClassName('open');
                        if (event.target == selectedModal[0]) {
                            selectedModal = selectedModal[0] 
                            selectedModal.classList.remove('open');
                            selectedModal.style.display = "none";
                        }
                    } 

                    // right Button

                    let openModal = document.getElementsByClassName('open');
                    openModel = openModal.id;


            })
        }
    )
    .catch(function(err) {
        console.log('Fetch Error :-S', err);
    });
}

retrieveData();





                    // for (let i = 0; i < userData.length; i ++){
                    //     let apiDataPic = userData[i].picture.large;
                    //     let apiDataName = userData[i].name.first + ' ' + userData[i].name.last;
                    //     let apiDataEmail = userData[i].email;
                    //     let apiDataCounty = userData[i].location.state;
                    //     let apiDataPhone = userData[i].phone;
                    //     let apiDataAddress = userData[i].location.street + ', ' + userData[i].location.city + ', ' + userData[i].location.postcode;
                    //     let apiDataDOB = userData[i].dob.date;
                    //     apiDataDOB = 'DOB: ' + dobFormat(apiDataDOB);

                    //     let userDataObject = [
                    //         {
                    //             avatar: apiDataPic,
                    //             name: apiDataName,
                    //             email: apiDataEmail,
                    //             county: apiDataCounty,
                    //             phone: apiDataPhone,
                    //             address: apiDataAddress,
                    //             dob: apiDataDOB
                    //         }
                    //     ];

                    //     userDataObjectArray.push(userDataObject);
                    // }