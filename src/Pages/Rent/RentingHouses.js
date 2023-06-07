import {collection,  getDocs, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore';
//importing image from first house
import firstHouse1 from '../../assets/images/Rent/rent1/img1.webp';
import firstHouse2 from '../../assets/images/Rent/rent1/img2.webp';
import firstHouse3 from '../../assets/images/Rent/rent1/img3.webp';
import firstHouse4 from '../../assets/images/Rent/rent1/img4.webp';
import firstHouse5 from '../../assets/images/Rent/rent1/img5.webp';
import firstHouse6 from '../../assets/images/Rent/rent1/img6.webp';

//importing image from second house
import secondHouse1 from '../../assets/images/Rent/rent2/img1.webp';
import secondHouse2 from '../../assets/images/Rent/rent2/img2.webp';
import secondHouse3 from '../../assets/images/Rent/rent2/img3.webp';
import secondHouse4 from '../../assets/images/Rent/rent2/img4.webp';
import secondHouse5 from '../../assets/images/Rent/rent2/img5.webp';
import secondHouse6 from '../../assets/images/Rent/rent2/img6.webp';


//importing image from third house
import thirdHouse1 from '../../assets/images/Rent/rent3/img1.webp';
import thirdHouse2 from '../../assets/images/Rent/rent3/img2.webp';
import thirdHouse3 from '../../assets/images/Rent/rent3/img3.webp';
import thirdHouse4 from '../../assets/images/Rent/rent3/img4.webp';
import thirdHouse5 from '../../assets/images/Rent/rent3/img5.webp';
import thirdHouse6 from '../../assets/images/Rent/rent3/img6.webp';


//importing image from fourt house
import fourtHouse1 from '../../assets/images/Rent/rent4/img1.webp';
import fourtHouse2 from '../../assets/images/Rent/rent4/img2.webp';
import fourtHouse5 from '../../assets/images/Rent/rent4/img3.webp';
import fourtHouse6 from '../../assets/images/Rent/rent4/img4.webp';
import fourtHouse7 from '../../assets/images/Rent/rent4/img5.webp';
import fourtHouse8 from '../../assets/images/Rent/rent4/img6.webp';

//importing image from fift house
import fiftHouse1 from '../../assets/images/Rent/rent5/img1.webp';
import fiftHouse4 from '../../assets/images/Rent/rent5/img2.webp';
import fiftHouse5 from '../../assets/images/Rent/rent5/img3.webp';
import fiftHouse6 from '../../assets/images/Rent/rent5/img4.webp';
import fiftHouse7 from '../../assets/images/Rent/rent5/img5.webp';
import fiftHouse8 from '../../assets/images/Rent/rent5/img6.webp';


//importing image from sixt house
import sixtHouse6 from '../../assets/images/Rent/rent6/img1.webp';
import sixtHouse7 from '../../assets/images/Rent/rent6/img2.webp';
import sixtHouse8 from '../../assets/images/Rent/rent6/img3.webp';
import sixtHouse9 from '../../assets/images/Rent/rent6/img4.webp';
import sixtHouse10 from '../../assets/images/Rent/rent6/img5.webp';
import sixtHouse1 from '../../assets/images/Rent/rent6/img6.webp';


//importing image from sevent house
import seventHouse6 from '../../assets/images/Rent/rent7/img1.webp';
import seventHouse7 from '../../assets/images/Rent/rent7/img2.webp';
import seventHouse8 from '../../assets/images/Rent/rent7/img3.webp';
import seventHouse9 from '../../assets/images/Rent/rent7/img4.webp';
import seventHouse10 from '../../assets/images/Rent/rent7/img5.webp';
import seventHouse1 from '../../assets/images/Rent/rent7/img6.webp';


//importing image from eight house
import eightHouse6 from '../../assets/images/Rent/rent8/img1.webp';
import eightHouse7 from '../../assets/images/Rent/rent8/img2.webp';
import eightHouse8 from '../../assets/images/Rent/rent8/img3.webp';
import eightHouse9 from '../../assets/images/Rent/rent8/img4.webp';
import eightHouse10 from '../../assets/images/Rent/rent8/img5.webp';
import eightHouse5 from '../../assets/images/Rent/rent8/img6.webp';


//importing image from nine house
import nineHouse1 from '../../assets/images/Rent/rent9/img1.webp';
import nineHouse2 from '../../assets/images/Rent/rent9/img2.webp';
import nineHouse3 from '../../assets/images/Rent/rent9/img3.webp';
import nineHouse4 from '../../assets/images/Rent/rent9/img4.webp';
import nineHouse5 from '../../assets/images/Rent/rent9/img5.webp';
import nineHouse6 from '../../assets/images/Rent/rent9/img6.webp';


//importing image from ten house
import tenHouse6 from '../../assets/images/Rent/rent10/img1.webp';
import tenHouse7 from '../../assets/images/Rent/rent10/img2.webp';
import tenHouse8 from '../../assets/images/Rent/rent10/img3.webp';
import tenHouse9 from '../../assets/images/Rent/rent10/img4.webp';
import tenHouse10 from '../../assets/images/Rent/rent10/img5.webp';
import tenHouse5 from '../../assets/images/Rent/rent10/img6.webp';


//importing image from eleven house
import elevenHouse6 from '../../assets/images/Rent/rent11/img1.webp';
import elevenHouse7 from '../../assets/images/Rent/rent11/img2.webp';
import elevenHouse8 from '../../assets/images/Rent/rent11/img3.webp';
import elevenHouse9 from '../../assets/images/Rent/rent11/img4.webp';
import elevenHouse10 from '../../assets/images/Rent/rent11/img5.webp';
import elevenHouse5 from '../../assets/images/Rent/rent10/img6.webp';


//importing image from twelve house
import twelveHouse6 from '../../assets/images/Rent/rent12/img1.webp';
import twelveHouse7 from '../../assets/images/Rent/rent12/img2.webp';
import twelveHouse8 from '../../assets/images/Rent/rent12/img3.webp';
import twelveHouse9 from '../../assets/images/Rent/rent12/img4.webp';
import twelveHouse10 from '../../assets/images/Rent/rent12/img5.webp';
import twelveHouse5 from '../../assets/images/Rent/rent12/img6.webp';


//importing image from thirteen house
import thirteenHouse1 from '../../assets/images/Rent/rent13/img1.webp';
import thirteenHouse2 from '../../assets/images/Rent/rent13/img2.webp';
import thirteenHouse3 from '../../assets/images/Rent/rent13/img3.webp';;
import thirteenHouse10 from '../../assets/images/Rent/rent13/img4.webp';
import thirteenHouse11 from '../../assets/images/Rent/rent13/img5.webp';
import thirteenHouse12 from '../../assets/images/Rent/rent13/img6.webp';


//importing image from fourteen house
import fourteenHouse1 from '../../assets/images/Rent/rent14/img14.webp';
import fourteenHouse2 from '../../assets/images/Rent/rent14/img2.webp';
import fourteenHouse3 from '../../assets/images/Rent/rent14/img3.webp';
import fourteenHouse4 from '../../assets/images/Rent/rent14/img4.webp';
import fourteenHouse6 from '../../assets/images/Rent/rent14/img5.webp';
import fourteenHouse7 from '../../assets/images/Rent/rent14/img6.webp';


//importing image from fifteen house
import fifteenHouse6 from '../../assets/images/Rent/rent15/img1.webp';
import fifteenHouse7 from '../../assets/images/Rent/rent15/img2.webp';
import fifteenHouse8 from '../../assets/images/Rent/rent15/img3.webp';
import fifteenHouse9 from '../../assets/images/Rent/rent15/img4.webp';
import fifteenHouse10 from '../../assets/images/Rent/rent15/img5.webp';
import fifteenHouse1 from '../../assets/images/Rent/rent15/img6.webp';


//importing image from sixteen house
import sixteenHouse6 from '../../assets/images/Rent/rent16/img1.webp';
import sixteenHouse7 from '../../assets/images/Rent/rent16/img2.webp';
import sixteenHouse8 from '../../assets/images/Rent/rent16/img3.webp';
import sixteenHouse9 from '../../assets/images/Rent/rent16/img4.webp';
import sixteenHouse10 from '../../assets/images/Rent/rent16/img5.webp';
import sixteenHouse1 from '../../assets/images/Rent/rent16/img6.webp';


//importing image from seventeen house
import seventeenHouse6 from '../../assets/images/Rent/rent17/img1.webp';
import seventeenHouse7 from '../../assets/images/Rent/rent17/img2.webp';
import seventeenHouse8 from '../../assets/images/Rent/rent17/img3.webp';
import seventeenHouse9 from '../../assets/images/Rent/rent17/img4.webp';
import seventeenHouse10 from '../../assets/images/Rent/rent17/img5.webp';
import seventeenHouse1 from '../../assets/images/Rent/rent17/img6.webp';


export const diffRent = [
    
    {
        location: 'Paris Home',
        amount: '$700,000',
        bed: '4 Bed',
        bath: '6 Bath',
        park: '4 Park',
        kitchen: '2 Kitchen',
        frontPic: firstHouse1,
        fullDescr: '',
        pictures: [firstHouse1, firstHouse2,firstHouse3,firstHouse4,firstHouse5,firstHouse6,],

    }, {
        location: 'Golf Estate',
        amount: '$330,000',
        bed: '3 Bed',
        bath: '3 Bath',
        park: '2 Park',
        kitchen: '1 Kitchen',
        frontPic: secondHouse1,
        fullDescr: '',
        pictures: [secondHouse1, secondHouse2,secondHouse3,secondHouse4,secondHouse5,secondHouse6],

    }, {
        location: 'Porthacourt Nigeria',
        amount: '$300,000',
        bed: '3 Bed',
        bath: '3 Bath',
        park: '3 Park',
        kitchen: '2 Kitchen',
        frontPic: thirdHouse1,
        fullDescr: '',
        pictures: [thirdHouse1, thirdHouse2,thirdHouse3,thirdHouse4,thirdHouse5,thirdHouse6],


    }, {
        location: 'Uk Lodon',
        amount: '$500,000',
        bed: '6 Bed',
        bath: '6 Bath',
        park: '3 Park',
        kitchen: '2 Kitchen',
        frontPic: fourtHouse1,
        fullDescr: '',
        pictures: [fourtHouse1, fourtHouse2,fourtHouse5,fourtHouse6,fourtHouse7,fourtHouse8],


    }, {
        location: '82 Division',
        amount: '$250',
        bath: '5 Bath',
        park: '5 Park',
        kitchen: '2 Kitchen',
        frontPic: fiftHouse1,
        fullDescr: '',
        pictures: [fiftHouse1,fiftHouse4,fiftHouse5,fiftHouse6,fiftHouse7,fiftHouse8],


    }, {
        location: 'New layout',
        amount: '$450,000',
        bed: '5 Bed',
        bath: '6 Bath',
        park: '5 Park',
        kitchen: '3 Kitchen',
        frontPic: sixtHouse1,
        fullDescr: '',
        pictures: [sixtHouse1, sixtHouse6,sixtHouse7,sixtHouse8,sixtHouse9,sixtHouse10,],


    }, {
        location: ' New GRA ',
        amount: '$750,000',
        bed: '6 Bed',
        bath: '5 Bath',
        park: '4 Park',
        kitchen: '3 Kitchen',
        frontPic: seventHouse1,
        fullDescr: '',
        pictures: [seventHouse1,seventHouse6,seventHouse7,seventHouse8,seventHouse9,seventHouse10,],


    }, {
        location: 'Garden Avenue',
        amount: '$370,000',
        bed: '6 Bed',
        bath: '3 Bath',
        park: '3 Park',
        kitchen: '2 Kitchen',
        frontPic: eightHouse5,
        fullDescr: '',
        pictures: [eightHouse5,eightHouse6,eightHouse7,eightHouse8,eightHouse9,eightHouse10,],


    }, {
        location: 'Ekulu west',
        amount: '$700,000',
        bed: '5 Bed',
        bath: '4 Bath',
        park: '3 Park',
        kitchen: '2 Kitchen',
        frontPic: nineHouse1,
        fullDescr: '',
        pictures: [nineHouse1, nineHouse2,nineHouse3, nineHouse4, nineHouse5, nineHouse6],


    }, {
        location: 'Abuja Nigeria',
        amount: '$600,000',
        bed: '4 Bed',
        bath: '4 Bath',
        park: '6 Park',
        kitchen: '1 Kitchen',
        frontPic: tenHouse5,
        fullDescr: '',
        pictures: [tenHouse5,tenHouse6,tenHouse7,tenHouse8,tenHouse9,tenHouse10,],


    }, {
        location: 'Texas US.',
        amount: '$750,000',
        bed: '6 Bed',
        bath: '6 Bath',
        park: '3 Park',
        kitchen: '4 Kitchen',
        frontPic: elevenHouse5,
        fullDescr: '',
        pictures: [elevenHouse5,elevenHouse6,elevenHouse7,elevenHouse8,elevenHouse9,elevenHouse10,],


    }, {
        location: 'Surulare',
        amount: '$150,000',
        bed: '3 Bed',
        bath: '2 Bath',
        park: '3 Park',
        kitchen: '1 Kitchen',
        frontPic: twelveHouse5,
        fullDescr: '',
        pictures: [twelveHouse5,twelveHouse6,twelveHouse7,twelveHouse8,twelveHouse9,twelveHouse10,],


    }, {
        location: 'Lekki phase 2',
        amount: '$250,000',
        bed: '3 Bed',
        bath: '4 Bath',
        park: '3 Park',
        kitchen: '1 Kitchen',
        frontPic: thirteenHouse1,
        fullDescr: '',
        pictures: [thirteenHouse1, thirteenHouse2,thirteenHouse3, thirteenHouse10, thirteenHouse11,thirteenHouse12,],


    }, {
        location: 'Agbani Enugu',
        amount: '$300,000',
        bed: '4 Bed',
        bath: '3 Bath',
        park: '3 Park',
        kitchen: '1Kitchen',
        frontPic: fourteenHouse1,
        fullDescr: '',
        pictures: [fourteenHouse1, fourteenHouse2,fourteenHouse3,fourteenHouse4,fourteenHouse6,fourteenHouse7],


    }, {
        location: 'Enugu state',
        amount: '$200,000',
        bed: '5 Bed',
        bath: '3 Bath',
        park: '2 Park',
        kitchen: '1 Kitchen',
        frontPic: fifteenHouse1,
        fullDescr: '',
        pictures: [fifteenHouse1,fifteenHouse6,fifteenHouse7,fifteenHouse8,fifteenHouse9,fifteenHouse10,],

    }, {
        location: 'Dallas',
        amount: '$750,000',
        bed: '7 Bed',
        bath: '5 Bath',
        park: '5 Park',
        kitchen: '3 Kitchen',
        frontPic: sixteenHouse1,
        fullDescr: '',
        pictures: [sixteenHouse1,sixteenHouse6,sixteenHouse7,sixteenHouse8,sixteenHouse9,sixteenHouse10,],


    }, {
        location: 'Enugu Nigeria',
        amount: '$200,000',
        bed: '3 Bed',
        bath: '3 Bath',
        park: '1 Park',
        kitchen: '1 Kitchen',
        frontPic: seventeenHouse1,
        fullDescr: '',
        pictures: [seventeenHouse1,seventeenHouse6,seventeenHouse7,seventeenHouse8,seventeenHouse9,seventeenHouse10,],


    },
]
