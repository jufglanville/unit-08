// API call
const api = 'https://randomuser.me/api/?results=12&nat=gb,ie&exc=login,registered,cell,id';
const gridContainer = document.getElementById('grid-container');
let userFormattedData = [];

function retrieveData() {
    fetch(api)
        .then(response => {
            if(response.status !== 200) {
                console.log('Looks like there was a problem. Status code: ' + response.status);
                return;
            }
            response.json()
            .then(data => {
                userData = data.results;
                
                for (let i = 0; i <userData.length; i++){
                    // Add Variables
                    let apiId = i;
                    let apiDataPic = userData[i].picture.large;
                    let apiDataFirst = userData[i].name.first;
                    let apiDataLast = userData[i].name.last;
                    let apiDataEmail = userData[i].email;
                    let apiDataCounty = userData[i].location.state;
                    let apiDataPhone = userData[i].phone; //
                    let apiDataStreet = userData[i].location.street;
                    let apiDataCity = userData[i].location.city;
                    let apiDataPostcode = userData[i].location.postcode;
                    let apiDataDOB = userData[i].dob.date;
                    
                    // Functions to format raw data
                    apiDataName = userNameConcat(apiDataFirst, apiDataLast);
                    apiDataAddress = userAddressConcat(apiDataStreet, apiDataCity, apiDataPostcode);
                    apiDataDOB = userDOBFormat(apiDataDOB);

                    // Create User Data Object 
                    let userFormattedDataTemp = [
                        {
                          userId: apiId,
                          userPic: apiDataPic,
                          userName: apiDataName,
                          userEmail: apiDataEmail,
                          userCounty: apiDataCounty,
                          userPhone: apiDataPhone,
                          userAddress: apiDataAddress,
                          userDOB: apiDataDOB
                        }
                    ];

                    userFormattedData.push(userFormattedDataTemp);

                    // Add Card Containers
                    generateCard('DIV', 'card', gridContainer, 'user-' + apiId);

                    let userCard = document.getElementById('user-' + [i]);

                    // Add Card Image
                    addContent('IMG', apiDataPic, userCard,'avatar');
 
                    // Add card content div
                    generateCard('DIV', 'card-info', userCard);

                    let userCardInfo = document.getElementsByClassName('card-info');
                    userCardInfo = userCardInfo[i];
                    
                    // Add Content to cards
                    addContent('H2', apiDataName, userCardInfo);
                    addContent('P', apiDataEmail, userCardInfo);
                    addContent('P', apiDataCounty, userCardInfo);

                    // Modals

                    let modalBtn = document.getElementsByClassName('card');

                    createModal(modalBtn);
                    closeModal();



                }
            })

        })
};



                        // // Create new modal Avatar Image
                        // modalImg = document.createElement('IMG');
                        // modalImg.className = 'modal-avatar';
                        // modalImg.setAttribute('alt', 'profile');
                        // modalImg.setAttribute('src', apiDataPic); // array [i] image
                        // modalTop.appendChild(modalImg);

                        // // Create h2 element in Modal
                        // modalName = document.createElement('H2');
                        // modalName.innerHTML = apiDataName; // array [i] name
                        // modalTop.appendChild(modalName);

                        // // Create email in Modal
                        // modalEmail = document.createElement('P');
                        // modalEmail.innerHTML = apiDataEmail; //array [i] email
                        // modalTop.appendChild(modalEmail);    

                        // // Create City in Modal
                        // modalCity = document.createElement('P');
                        // modalCity.innerHTML = apiDataCounty; // array [i] city
                        // modalTop.appendChild(modalCity);  

                        // // Create div to contain bottom info
                        // modalBottom = document.createElement('DIV');
                        // modalBottom.className = 'modal-bottom';
                        // modalContent.appendChild(modalBottom);

                        // // Create Phone in Modal
                        // modalPhone = document.createElement('P');
                        // modalPhone.innerHTML = apiDataPhone; // array [i] phone
                        // modalBottom.appendChild(modalPhone);  

                        // // Create Address in Modal
                        // modalAddress = document.createElement('P');
                        // modalAddress.innerHTML = apiDataAddress; // array [i] address
                        // modalBottom.appendChild(modalAddress);  

                        // // Create Birthday in Modal
                        // modalBday = document.createElement('P');
                        // modalBday.innerHTML = apiDataDOB; // array [i] bday
                        // modalBottom.appendChild(modalBday);  

                        // // Create nav div
                        // modalNav = document.createElement('DIV');
                        // modalNav.className = 'modal-nav';
                        // modalContent.appendChild(modalNav);

                        // // Create left button
                        // left = document.createElement('SPAN');
                        // left.className = 'left-btn';
                        // left.innerHTML = '&lt;';
                        // modalNav.appendChild(left);  

                        // // Create right button
                        // right = document.createElement('SPAN');
                        // right.className = 'right-btn';
                        // right.innerHTML = '&gt;';
                        // modalNav.appendChild(right);  


// --------------------------------------------------------- //
// ---------------------- Functions ------------------------ //
// --------------------------------------------------------- //

// Generate Cards
function generateCard(element, className, parent, id) {
    newCard = document.createElement(element);
    newCard.className = className;

    if (typeof id !== "undefined"){
        newCard.setAttribute('id', id);
    }
    parent.appendChild(newCard);    
};

// Add Content
function addContent(element, string, parent, className) {
    newContent = document.createElement(element);
    
    if (element === 'IMG') {
        newContent.className = className;
        newContent.setAttribute('alt', 'profile avatar');
        newContent.setAttribute('src', string);
    } else if (typeof className !== "undefined") {
        newContent.className = className;
        newContent.innerHTML = string;
    } else {
        newContent.innerHTML = string;
    }
    parent.appendChild(newContent);

};

// Create Modals

function createModal(modalBtn){
    for (let i = 0; i < modalBtn.length; i++) {
        modalBtn[i].onclick = function() {
            // Create modal when clicked
            generateCard('DIV', 'modal', gridContainer, 'modal-' + [i]);
            let newModal = document.getElementById('modal-' + [i]);
            generateCard('DIV', 'modal-content', newModal);
            let modalInfo = document.getElementsByClassName('modal-content');
            modalInfo = modalInfo[i];
           
            // Add content to modal
            addContent('SPAN', '&times;', modalInfo, 'close');
            generateCard('DIV', 'modal-top', modalInfo);
            generateCard('DIV', 'modal-bottom', modalInfo);
            generateCard('DIV', 'modal-nav', modalInfo);
            
            let modalTop = document.getElementsByClassName('modal-top');
            modalTop = modalTop[0];


            // Add Data
            // addContent('IMG', userFormattedData[0], modalTop, 'modal-avatar')

            // Display Modal
            newModal.style.display = 'block';
        }
    }

}

// Close Modals

function closeModal() {
    const spans = document.getElementsByClassName("close");

    for (let i = 0; i < spans.length; i++) {
        spans[i].onclick = function() {
            let closeButton = spans[i].parentNode;
            closeButton = closeButton.parentNode;
            closeButton.style.display = 'none';
        }
    };
}

// --------------------------------------------------------- //
// ------------------ Helper Functions --------------------- //
// --------------------------------------------------------- //

// Concat first and last name
function userNameConcat(first, last){
    let fullName = first + " " + last;
    return fullName;
}

// Concat address items to make full address
function userAddressConcat(street, city, postcode){
    let fullAddress = street + ", " + city + ", " + postcode;
    return fullAddress;
}

// Correctly format DOB
function userDOBFormat(DOB){
    let rawDate = new Date(DOB);
    let date = ("0" + rawDate.getDate()).slice(-2);
    let month = ("0" + rawDate.getMonth()).slice(-2);
    let year = ("0" + rawDate.getYear()).slice(-2);
    let DOBFormat = "DOB: " + date + "/" + month + "/" + year;
    return DOBFormat;
}


// Run JavaScript Function



retrieveData();
closeModal();
