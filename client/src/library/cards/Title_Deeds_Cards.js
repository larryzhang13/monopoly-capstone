import AtlanticAvenue from  '../assets/cards/Atlantic Avenue.png'
import BandORailroad from  '../assets/cards/B and O Railroad.png'
import BalticAvenue from  '../assets/cards/Baltic Avenue.png'
import Boardwalk from  '../assets/cards/Boardwalk.png'
import ConnecticutAvenue from  '../assets/cards/Connecticut Avenue.png'
import ElectricCompany from  '../assets/cards/Electric Company.png'
import IllinoisAvenue from  '../assets/cards/Illinois Avenue.png'
import IndianaAvenue from  '../assets/cards/Indiana Avenue.png'
import KentuckyAvenue from  '../assets/cards/Kentucky Avenue.png'
import MarvinGardens from  '../assets/cards/Marvin Gardens.png'
import MediterraneanAvenue from  '../assets/cards/Mediterranean Avenue.png'
import NewYorkAvenue from  '../assets/cards/New York Avenue.png'
import NorthCarolinaAvenue from  '../assets/cards/North Carolina Avenue.png'
import OrientalAvenue from  '../assets/cards/Oriental Avenue.png'
import PacficAvenue from  '../assets/cards/Pacfic Avenue.png'
import ParkPlace from  '../assets/cards/Park Place.png'
import PennsylvaniaAvenue from  '../assets/cards/Pennsylvania Avenue.png'
import PennsylvaniaRailroad from  '../assets/cards/Pennsylvania Railroad.png'
import ReadingRailroad from  '../assets/cards/Reading Railroad.png'
import ShortLineRailroad from  '../assets/cards/Short Line Railroad.png'
import StCharlesPlace from  '../assets/cards/St Charles Place.png'
import StJamesPlace from  '../assets/cards/St James Place.png'
import StatesAvenue from  '../assets/cards/States Avenue.png'
import TennesseeAvenue from  '../assets/cards/Tennessee Avenue.png'
import VentnorAvenue from  '../assets/cards/Ventnor Avenue.png'
import VermontAvenue from  '../assets/cards/Vermont Avenue.png'
import VirginiaAvenue from  '../assets/cards/Virginia Avenue.png'
import WaterWorks from  '../assets/cards/Water Works.png'

export default [
//28 Title Deed cards
    //4 Railroads
    {
        name: "Reading Railroad",
        type: "Railroad",
        price: 200,
        rentNormal: 25,
        rentRR2: 50,
        rentRR3: 100,
        rentRR4: 200,
        owner: "Bank",
        mortgaged: false,
        image: ReadingRailroad
    },
    {
        name: "Pennsylvania Railroad",
        type: "Railroad",
        price: 200,
        rentNormal: 25,
        rentRR2: 50,
        rentRR3: 100,
        rentRR4: 200,
        owner: "Bank",
        mortgaged: false,
        image: PennsylvaniaRailroad
    },
    {
        name: "B. & O. Railroad",
        type: "Railroad",
        price: 200,
        rentNormal: 25,
        rentRR2: 50,
        rentRR3: 100,
        rentRR4: 200,
        owner: "Bank",
        mortgaged: false,
        image: BandORailroad
    },
    {
        name: "Short Line",
        type: "Railroad",
        price: 200,
        rentNormal: 25,
        rentRR2: 50,
        rentRR3: 100,
        rentRR4: 200,
        owner: "Bank",
        mortgaged: false,
        image: ShortLineRailroad
    },
    //2 Utilities
    {
        name: "Electric Company",
        type: "Utilities",
        price: 150,
        rentNormal: 4,
        rentBoth: 10,
        owner: "Bank",
        mortgaged: false,
        image: ElectricCompany
    },
    {
        name: "Water Works",
        type: "Utilities",
        price: 150,
        rentNormal: 4,
        rentBoth: 10,
        owner: "Bank",
        mortgaged: false,
        image: WaterWorks
    },
    //22 Properties
    {
        name: "Mediterranean Avenue",
        color: "Brown",
        type: "Property",
        price: 60,
        rentNormal: 2,
        rentHouse1: 10,
        rentHouse2: 30,
        rentHouse3: 90,
        rentHouse4: 160,
        rentHotel: 250,
        owner: "Bank",
        buildingCosts: 50,
        mortgaged: false,
        image: MediterraneanAvenue
    },
    {
        name: "Baltic Avenue",
        color: "Brown",
        type: "Property",
        price: 60,
        rentNormal: 4,
        rentHouse1: 20,
        rentHouse2: 60,
        rentHouse3: 180,
        rentHouse4: 320,
        rentHotel: 450,
        owner: "Banl",
        buildingCosts: 50,
        mortgaged: false,
        image: BalticAvenue
    },
    {
        name: "Oriental Avenue",
        color: "Light Blue",
        type: "Property",
        price: 100,
        rentNormal: 6,
        rentHouse1: 30,
        rentHouse2: 90,
        rentHouse3: 270,
        rentHouse4: 400,
        rentHotel: 550,
        owner: "Bank",
        buildingCosts: 50,
        mortgaged: false,
        image: OrientalAvenue
    },
    {
        name: "Vermont Avenue",
        color: "Light Blue",
        type: "Property",
        price: 100,
        rentNormal: 6,
        rentHouse1: 30,
        rentHouse2: 90,
        rentHouse3: 270,
        rentHouse4: 400,
        rentHotel: 550,
        owner: "Bank",
        buildingCosts: 50,
        mortgaged: false,
        image: VermontAvenue
    },
    {
        name: "Connecticut Avenue",
        color: "Light Blue",
        type: "Property",
        price: 120,
        rentNormal: 8,
        rentHouse1: 40,
        rentHouse2: 100,
        rentHouse3: 300,
        rentHouse4: 450,
        rentHotel: 600,
        owner: "Bank",
        buildingCosts: 50,
        mortgaged: false,
        image: ConnecticutAvenue
    },
    {
        name: "St. Charles Place",
        color: "Pink",
        type: "Property",
        price: 140,
        rentNormal: 10,
        rentHouse1: 50,
        rentHouse2: 150,
        rentHouse3: 450,
        rentHouse4: 625,
        rentHotel: 750,
        owner: "Bank",
        buildingCosts: 100,
        mortgaged: false,
        image: StCharlesPlace
    },
    {
        name: "States Avenue",
        color: "Pink",
        type: "Property",
        price: 140,
        rentNormal: 10,
        rentHouse1: 50,
        rentHouse2: 150,
        rentHouse3: 450,
        rentHouse4: 625,
        rentHotel: 750,
        owner: "Bank",
        buildingCosts: 100,
        mortgaged: false,
        image: StatesAvenue
    },
    {
        name: "Virginia Avenue",
        color: "Pink",
        type: "Property",
        price: 160,
        rentNormal: 12,
        rentHouse1: 60,
        rentHouse2: 180,
        rentHouse3: 500,
        rentHouse4: 700,
        rentHotel: 900,
        owner: "Bank",
        buildingCosts: 100,
        mortgaged: false,
        image: VirginiaAvenue
    },
    {
        name: "St. James Place",
        color: "Orange",
        type: "Property",
        price: 180,
        rentNormal: 14,
        rentHouse1: 70,
        rentHouse2: 200,
        rentHouse3: 550,
        rentHouse4: 750,
        rentHotel: 950,
        owner: "Bank",
        buildingCosts: 100,
        mortgaged: false,
        image: StJamesPlace
    },
    {
        name: "Tennessee Avenue",
        color: "Orange",
        type: "Property",
        price: 180,
        rentNormal: 14,
        rentHouse1: 70,
        rentHouse2: 200,
        rentHouse3: 550,
        rentHouse4: 750,
        rentHotel: 950,
        owner: "Bank",
        buildingCosts: 100,
        mortgaged: false,
        image: TennesseeAvenue
    },
    {
        name: "New York Avenue",
        color: "Orange",
        type: "Property",
        price: 200,
        rentNormal: 16,
        rentHouse1: 80,
        rentHouse2: 220,
        rentHouse3: 600,
        rentHouse4: 800,
        rentHotel: 1000,
        owner: "Bank",
        buildingCosts: 100,
        mortgaged: false,
        image: NewYorkAvenue
    },
    {
        name: "Kentucky Avenue",
        color: "Red",
        type: "Property",
        price: 220,
        rentNormal: 18,
        rentHouse1: 90,
        rentHouse2: 250,
        rentHouse3: 700,
        rentHouse4: 875,
        rentHotel: 1050,
        owner: "Bank",
        buildingCosts: 150,
        mortgaged: false,
        image: KentuckyAvenue
    },
    {
        name: "Indiana Avenue",
        color: "Red",
        type: "Property",
        price: 220,
        rentNormal: 18,
        rentHouse1: 90,
        rentHouse2: 250,
        rentHouse3: 700,
        rentHouse4: 875,
        rentHotel: 1050,
        owner: "Bank",
        buildingCosts: 150,
        mortgaged: false,
        image: IndianaAvenue
    },
    {
        name: "Illinois Avenue",
        color: "Red",
        type: "Property",
        price: 240,
        rentNormal: 20,
        rentHouse1: 100,
        rentHouse2: 300,
        rentHouse3: 750,
        rentHouse4: 925,
        rentHotel: 1100,
        owner: "Bank",
        buildingCosts: 150,
        mortgaged: false,
        image: IllinoisAvenue
    },
    {
        name: "Atlantic Avenue",
        color: "Yellow",
        type: "Property",
        price: 260,
        rentNormal: 22,
        rentHouse1: 110,
        rentHouse2: 330,
        rentHouse3: 800,
        rentHouse4: 975,
        rentHotel: 1150,
        owner: "Bank",
        buildingCosts: 150,
        mortgaged: false,
        image: AtlanticAvenue
    },
    {
        name: "Ventor Avenue",
        color: "Yellow",
        type: "Property",
        price: 260,
        rentNormal: 22,
        rentHouse1: 110,
        rentHouse2: 330,
        rentHouse3: 800,
        rentHouse4: 975,
        rentHotel: 1150,
        owner: "Bank",
        buildingCosts: 150,
        mortgaged: false,
        image: VentnorAvenue
    },
    {
        name: "Marvin Gardens",
        color: "Yellow",
        type: "Property",
        price: 280,
        rentNormal: 24,
        rentHouse1: 120,
        rentHouse2: 360,
        rentHouse3: 850,
        rentHouse4: 1025,
        rentHotel: 1200,
        owner: "Bank",
        buildingCosts: 150,
        mortgaged: false,
        image: MarvinGardens
    },
    {
        name: "Pacific Avenue",
        color: "Green",
        type: "Property",
        price: 300,
        rentNormal: 26,
        rentHouse1: 130,
        rentHouse2: 390,
        rentHouse3: 900,
        rentHouse4: 110,
        rentHotel: 1275,
        owner: "Bank",
        buildingCosts: 200,
        mortgaged: false,
        image: PacficAvenue
    },
    {
        name: "North Carolina Avenue",
        color: "Green",
        type: "Property",
        price: 300,
        rentNormal: 26,
        rentHouse1: 130,
        rentHouse2: 390,
        rentHouse3: 900,
        rentHouse4: 110,
        rentHotel: 1275,
        owner: "Bank",
        buildingCosts: 200,
        mortgaged: false,
        image: NorthCarolinaAvenue
    },
    {
        name: "Pennsylvania Avenue",
        color: "Green",
        type: "Property",
        price: 320,
        rentNormal: 28,
        rentHouse1: 150,
        rentHouse2: 450,
        rentHouse3: 1000,
        rentHouse4: 1200,
        rentHotel: 1400,
        owner: "Bank",
        buildingCosts: 200,
        mortgaged: false,
        image: PennsylvaniaAvenue
    },
    {
        name: "Park Place",
        color: "Dark Blue",
        type: "Property",
        price: 350,
        rentNormal: 35,
        rentHouse1: 175,
        rentHouse2: 500,
        rentHouse3: 1100,
        rentHouse4: 1300,
        rentHotel: 1500,
        owner: "Bank",
        buildingCosts: 200,
        mortgaged: false,
        image: ParkPlace
    },
    {
        name: "Boardwalk",
        color: "Dark Blue",
        type: "Property",
        price: 400,
        rentNormal: 50,
        rentHouse1: 200,
        rentHouse2: 600,
        rentHouse3: 1400,
        rentHouse4: 1700,
        rentHotel: 2000,
        owner: "Bank",
        buildingCosts: 200,
        mortgaged: false,
        image: Boardwalk
    }
];