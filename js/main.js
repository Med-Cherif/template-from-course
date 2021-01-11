setInterval(() => {
    // setInterval because it users can open half height of browser so we need to update full height every user changes the height of width
    document.querySelector('.header').style.height = window.innerHeight + 'px'; 
}, 0)

// changing the first word in Title
let i = 0;
let myFirstList = ['Design' ,'Develop', 'Create'];
let firstWord = document.querySelector('.title-move-1');
let changeFirstWord = () => {
    firstWord.textContent = myFirstList[i];
    if (i < myFirstList.length - 1) {
        i++;
    } else {
        i = 0;
    }  
    setTimeout('changeFirstWord()', 8000);
}
changeFirstWord()

// changing the second word in Title
let y = 0;
let mySecondList = ['Web Application', 'Mobile Application', 'Desktop Application', 'Everything'];
let secondWord = document.querySelector('.title-move-2');
let changeSecondWord = () => {
    secondWord.textContent = mySecondList[y];
    if (y < mySecondList.length - 1) {
        y++;
    } else {
        y = 0;
    }
    setTimeout('changeSecondWord()', 2000);
}
changeSecondWord()

// Scroll Button 
let feature = document.querySelector('.features');
let downBtn = document.querySelector('.down');
downBtn.onclick = () => {
    feature.scrollIntoView();
}

// hiding placeholder when we focus on any input
let myTextInput = document.querySelectorAll('input');
for (let i = 0; i < myTextInput.length; i++) {
    myTextInput[i].onfocus = () => {
        myTextInput[i].setAttribute('data-placeHolder', myTextInput[i].getAttribute('placeholder'));
        myTextInput[i].setAttribute('placeholder', '');
    }
    myTextInput[i].onblur = () => {
        myTextInput[i].setAttribute('placeHolder', myTextInput[i].getAttribute('data-placeholder'));
        myTextInput[i].setAttribute('data-placeholder', '');
    }
}

// Show And Hide Our Works When we click Show Or Hide
let myShowHideBtn = document.querySelector('.show-hide');
let myAllWorksItems = document.querySelectorAll('.work-item-image');
let myNeddedWorksItems = [];
for (let i = myAllWorksItems.length / 2; i < myAllWorksItems.length; i++) {
    myNeddedWorksItems.push(myAllWorksItems[i])
}

// let's handle the height and margin and button from javascript
// myShowHideBtn.textContent = 'show more'
myNeddedWorksItems.forEach(elem => {
    elem.style.height = 0 + 'px'
    elem.style.marginBottom = 0 + 'px'
    elem.style.opacity = 0
    elem.style.visibility = 'hidden'
})

myShowHideBtn.onclick = () => {
    myNeddedWorksItems.forEach(elem => {
        if (elem.style.height == 0 + 'px' && elem.style.marginBottom == 0 + 'px') {
            elem.style.height = 350 + 'px'
            elem.style.marginBottom = 40 + 'px'
            elem.style.opacity = 1
            elem.style.visibility = 'visible'
            myShowHideBtn.textContent = 'hide more'
        } else {
            elem.style.height = 0 + 'px'
            elem.style.marginBottom = 0 + 'px'
            elem.style.opacity = 0
            elem.style.visibility = 'hidden'
            myShowHideBtn.textContent = 'show more'
        }
    })
}
// slider of testimonial
let myClientItems = Array.from(document.querySelectorAll('.client'))
let myRightBtn = document.querySelector('.right-icon')
let myLeftBtn = document.querySelector('.left-icon')

myClientItems[0].style.left = -45 + '%'
myClientItems[1].style.left = 50 + '%'
myClientItems[2].style.left = 145+ '%'

myRightBtn.onclick = () => {
    myClientItems[0].style.left = parseInt(myClientItems[0].style.left.slice(0, -1)) + 95 + '%'
    myClientItems[1].style.left = parseInt(myClientItems[1].style.left.slice(0, -1)) + 95 + '%'
    myClientItems[2].style.left = parseInt(myClientItems[2].style.left.slice(0, -1)) + 95 + '%'
    myClientItems[0].style.left == `50%` ? myRightBtn.classList.toggle('done') : myRightBtn.classList.remove('done')
    myLeftBtn.classList.remove('done')
}
myLeftBtn.onclick = () => {
    myClientItems[0].style.left = parseInt(myClientItems[0].style.left.slice(0, -1)) - 95 + '%'
    myClientItems[1].style.left = parseInt(myClientItems[1].style.left.slice(0, -1)) - 95 + '%'
    myClientItems[2].style.left = parseInt(myClientItems[2].style.left.slice(0, -1)) - 95 + '%'
    myClientItems[2].style.left == `50%` ? myLeftBtn.classList.add('done') : myLeftBtn.classList.remove('done')
    myRightBtn.classList.remove('done')
}
// our team section
let myTeam = document.querySelectorAll('.our-team-item')
let myDots = document.querySelectorAll('.team-dots span')
myTeam.forEach((elem, i) => {
    elem.onmouseenter = () => {
        elem.classList.add('active')
        myDots[i].classList.add('active')
    }
    elem.onmouseleave = () => {
        elem.classList.remove('active')
        myDots[i].classList.remove('active')
    }
})
myDots.forEach((elem, i) => {
    elem.onmouseenter = () => {
        elem.classList.add('active')
        myTeam[i].classList.add('active')
    }
    elem.onmouseleave = () => {
        elem.classList.remove('active')
        myTeam[i].classList.remove('active')
    }
})