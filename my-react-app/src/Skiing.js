import './skiing.css'
import ItemPreview from './itemPreview';
import FacitedCheckboxes from './facitedCheckboxes';




const Skiing = () => {
  const items = [
    {
      id: 1,
      name: "SKIS MAVERICK 95 TI",
      brand: "Atomic",
      price: "50",
      rating: 85,
      description: "The SKIS MAVERICK 95 TI from Atomic offers excellent performance and stability on the slopes. With its titanium construction, these skis are built to tackle various terrains and provide a smooth ride. Suitable for intermediate to advanced skiers.",
      image: "https://th.bing.com/th/id/OIP.BPN4PSZKv40LzfKxFkkmTwHaHa?pid=ImgDet&rs=1" // Image path left blank
    },
    {
      id: 2,
      name: "SKIS K2 RUSTLER 10",
      brand: "K2",
      price: "50",
      rating: 90,
      description: "The SKIS K2 RUSTLER 10 is a versatile option for adventurous skiers. Its lightweight design allows for easy maneuverability, while the sturdy construction ensures durability and responsiveness. Ideal for all-mountain exploration.",
      image: "https://th.bing.com/th/id/R.240627e07aac69b5665594043a46771f?rik=n71N0QO0zPOrfg&pid=ImgRaw&r=0", // Image path left blank
    },
    {
      id: 3,
      name: "SKIS K2 MIND BENDER",
      brand: "K2",
      price: "100",
      rating: 95,
      description: "Unleash your potential with the SKIS K2 MIND BENDER. These high-performance skis offer exceptional edge control and precision, making them perfect for aggressive skiers. The mind-bending technology provides a smooth and dynamic ride.",
      image: "https://th.bing.com/th/id/OIP.8Oz_41kYqaTrpFhIBf7rEQHaHa?pid=ImgDet&rs=1", // Image path left blank
    },
    {
      id: 4,
      name: "SKIS VOLKL MANTRA",
      brand: "Volkl",
      price: "25",
      rating: 80,
      description: "The SKIS VOLKL MANTRA is a reliable choice for powder enthusiasts. With its rockered tip and tail, it excels in soft snow conditions. The ski's full sidewall construction ensures stability and responsiveness at high speeds.",
      image: "https://images.evo.com/imgp/zoom/47704/262551/volkl-mantra-skis-2012-.jpg"
    },
    {
      id: 5,
      name: "SKIS ROSSIGNOL EXPERIENCE",
      brand: "Rossignol",
      price: "25",
      rating: 70,
      description: "The SKIS ROSSIGNOL EXPERIENCE is perfect for skiers seeking all-around performance. With its versatile design, it handles well on groomed trails and offers good stability. A great choice for intermediate skiers.",
      image: "https://th.bing.com/th/id/OIP.bVtP9Hx2lgNLR7e6Zh2RDwHaL3?w=129&h=207&c=7&r=0&o=5&dpr=1.3&pid=1.7"    },
    {
      id: 6,
      name: "SKIS SALOMON QST",
      brand: "Salomon",
      price: "25",
      rating: 88,
      description: "The SKIS SALOMON QST delivers an outstanding freeride experience. Its lightweight construction and strong edge grip allow for effortless turns and better control. Suitable for skiers looking to explore off-piste terrains.",
      image: "https://cdn.shoplightspeed.com/shops/659992/files/44594345/1500x4000x3/salomon-salomon-qst-98-skis-2023.jpg"
    },
  ];


  const brands = ["Atomic", "K2", "Salomon", "Volkl", "Rossignol"];


  return (
    <div className="SKIING">
      <div className="div">
        <div className="overlap-7">
          <div className="rectangle-3" >
            <h1 className="h-1">SHOP SKIING</h1>
          </div>
        </div>
        <div className="overlap-2">
          <FacitedCheckboxes items={items} brands={brands} />
        </div>
      </div>
    </div>
  );
}

export default Skiing;