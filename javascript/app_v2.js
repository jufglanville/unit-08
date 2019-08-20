// API call
const api = 'https://randomuser.me/api/?results=12&nat=gb,ie&exc=login,registered,cell,id';
const gridContainer = document.getElementById('grid-container');
let cardId;
let cardInfoId;
let modalInfo;
let modalDisplay;
let userObjectArray = [];
let modalBtn;
let rightBtn;
let leftBtn;
let modalTop;
let modalBottom;

// --------------------------------------------------------- //
// -------------------- API Functions ---------------------- //
// --------------------------------------------------------- //

function retrieveData() {
    fetch(api)
        .then(response => {
            if(response.status !== 200) {
                console.log('Looks like there was a problem. Status code: ' + response.status);
                return;
            }
            response.json()
            .then(data => {
                let userData = data.results;
                
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
                    let userFormattedData = [
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
                    
                    userObjectArray.push(userFormattedData);
                    createPage(userFormattedData);
                    cardId = document.getElementsByClassName('card');
                    
                }
                modal();
            });

        });
}

// --------------------------------------------------------- //
// -------------- Card Generator Functions ----------------- //
// --------------------------------------------------------- //

// Add Card Containers
function createPage(userFormattedData){
    let userId = userFormattedData[0].userId;
    let userName = userFormattedData[0].userName;
    let userEmail = userFormattedData[0].userEmail;
    let userCounty = userFormattedData[0].userCounty;

    generateCard('DIV', 'card', gridContainer, 'user-' + userId); 
    cardId = document.getElementById('user-' + userId);

    addContent('IMG', userFormattedData[0].userPic, cardId, 'avatar');
    generateCard('DIV', 'card-info', cardId);
    cardInfoId = document.getElementsByClassName('card-info');
    cardInfoId = cardInfoId[userId];

    addContent('H2', userName, cardInfoId);
    addContent('P', userEmail, cardInfoId, 'email-address');
    addContent('P', userCounty, cardInfoId);
}

// Generate Cards
function generateCard(element, className, parent, id) {
    newCard = document.createElement(element);
    newCard.className = className;

    if (typeof id !== "undefined"){
        newCard.setAttribute('id', id);
    }
    parent.appendChild(newCard);    
}

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

}


// --------------------------------------------------------- //
// ------------------- Modal Functions --------------------- //
// --------------------------------------------------------- //

function modal(){
    createModal();
    openModal(cardId);
}

// Create Modals
function createModal(){
    // Create modal when clicked
    let modal = 'modal';
    generateCard('DIV', 'modal', gridContainer, modal);
    let newModal = document.getElementById('modal');
    generateCard('DIV', 'modal-content', newModal);
    modalInfo = newModal.children[0];
    
    // Add main template content to modal
    addContent('SPAN', '&times;', modalInfo, 'close');
    generateCard('DIV', 'modal-top', modalInfo);
    generateCard('DIV', 'modal-bottom', modalInfo);
    generateCard('DIV', 'modal-nav', modalInfo);

    modalTop = modalInfo.children[1];
    modalBottom = modalInfo.children[2];
    let modalNav = modalInfo.children[3];

    // Add nav buttons
    addContent('SPAN', '&lt;', modalNav, 'left-btn');
    addContent('SPAN', '&gt;', modalNav, 'right-btn');

    modalDisplay = document.getElementById('modal');
    modalBtn = document.getElementsByClassName('close')[0];

    // Close Modal
    modalBtn.onclick = function(){
        modalDisplay.style.display = 'none';
    };

    // Right Button
    rightBtn = document.getElementsByClassName('right-btn')[0];
    rightBtn.onclick = function() {
        navBtnScroll('right');
    };

    // Left Button
    leftBtn = document.getElementsByClassName('left-btn')[0];
    leftBtn.onclick = function() {
        navBtnScroll('left');
    };
}

// Clear Modal Content Function
function clearModal(el){
    while (el.firstChild) {
        el.removeChild(el.firstChild);
    }
}

// open Modal
function openModal(cardId){
    for (let i = 0; i < cardId.length; i++) {
        cardId[i].onclick = function() {
            // Add correct user data object from array list to variable
            let newModal = document.getElementById('modal');
            modalInfo = newModal.children[0];

            // Add div sections to variable names
            modalUser = userObjectArray[i];
            modalUser = modalUser[0];

            // Clear Function
            clearModal(modalTop);
            clearModal(modalBottom);

            // Add User info to modal
            populateModal(modalUser);

            // Display Modal
            newModal.style.display = 'block';
        };
    }
}

// Populate Modal

function populateModal(modalUser) {
    addContent('IMG', modalUser.userPic, modalTop, 'modal-avatar');
    addContent('H2', modalUser.userName, modalTop);
    addContent('P', modalUser.userEmail, modalTop);
    addContent('P', modalUser.userCounty, modalTop);
    addContent('P', modalUser.userPhone, modalBottom);
    addContent('P', modalUser.userAddress, modalBottom);
    addContent('P', modalUser.userDOB, modalBottom);
}



// Nav Button Scroll

function navBtnScroll(direction) {
    // Clear Data
    clearModal(modalTop);
    clearModal(modalBottom);

    // Retrieve next User data set
    let newModalData = (modalUser.userId);        
    if (direction == 'right') {
        if (newModalData === 11) {
            newModalData = 0;
        } else {
            newModalData = (modalUser.userId + 1);
        }
    } else if (direction == 'left') {
        if (newModalData === 0) {
            newModalData = 11;
        } else {
            newModalData = (modalUser.userId - 1);
        }  
    }

    // Add new data
    modalUser = userObjectArray[newModalData];
    modalUser = modalUser[0];
    populateModal(modalUser);

}

// --------------------------------------------------------- //
// ------------------- Search Function --------------------- //
// --------------------------------------------------------- //

function searchFunction() {
    // Declare variables
    let input = document.getElementById('search').value.toUpperCase();
    let card;
    let txtValue;

    // Loop through all 
    for (let i = 0; i < cardId.length; i ++) {
        card = cardId[i].getElementsByClassName('card-info')[0];
        card = card.getElementsByTagName('h2')[0];
        txtValue = card.textContent || card.innerText;
        if (txtValue.toUpperCase().indexOf(input) > -1) {
            cardId[i].style.display = '';
        } else {
            cardId[i].style.display = 'none';
        }
    }
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
    let date = twoIntegars(rawDate.getDate());
    let month = twoIntegars(rawDate.getMonth());
    let year = twoIntegars(rawDate.getYear());
    let DOBFormat = "DOB: " + date + "/" + month + "/" + year;
    return DOBFormat;
}

// Format to two integars
function twoIntegars(int) {
    if(int === 0) {
        return ("01");
    } else {
        return ("0" + int).slice(-2);
    }
}


// Run Program

retrieveData();
