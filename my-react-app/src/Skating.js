import './Skating.css'
import FacitedCheckboxes from './facitedCheckboxes';


const SKATING = () => {
    const items = [
        {
            id: 1,
            name: "ICE SKATES ECLIPSE AURA",
            brand: "Jackson Ultima",
            price: "250",
            rating: 85,
            description: "The Jackson Ultima Eclipse Aura ice skates are designed for advanced figure skaters. These high-performance skates feature a full-grain leather upper for exceptional durability and support. The Aspire XP blade provides superior edge control and stability for precise jumps and spins.",
            image: "https://th.bing.com/th/id/OIP.okaVP86FFeHsd7WzLmwSfwHaKF?w=138&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7"
        },
        {
            id: 2,
            name: "ICE SKATES RECREATIONAL",
            brand: "Riedell",
            price: "100",
            rating: 75,
            description: "The Riedell Recreational ice skates are perfect for beginners and casual ice skaters. With a soft-padded lining and stainless steel blades, they offer comfort and smooth gliding. The supportive design ensures stability and easy learning for new skaters.",
            image: "https://th.bing.com/th/id/OIP.YBSjohpqCizQUU8hQaVz1QHaJs?w=149&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7"
        },
        {
            id: 3,
            name: "ICE SKATES COMPETITOR XP",
            brand: "Edea",
            price: "350",
            rating: 95,
            description: "The Edea Competitor XP ice skates are engineered for competitive figure skaters. Featuring a microfiber upper and anatomic design, they offer excellent fit and responsiveness. The lightweight construction allows for enhanced jumps and intricate footwork.",
            image: "https://th.bing.com/th/id/OIP.vioOdLefSO1mZtBSAdD_TAHaHa?w=178&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
        },
        {
            id: 4,
            name: "ICE SKATES ADRENALINE",
            brand: "Bauer",
            price: "150",
            rating: 88,
            description: "The Bauer Adrenaline ice skates are built for recreational and hockey players. They offer a comfortable fit and durable construction, suitable for both leisure skating and casual games. The stainless steel blade provides good control on the ice.",
            image: "https://cdn.shopify.com/s/files/1/0549/4138/4880/products/bauer-s22-supreme-mach-ice-hockey-skates-senior_320x320@2x.jpg?v=1656351099"
        },
        {
            id: 5,
            name: "ICE SKATES ELITE PRO",
            brand: "Jackson Ultima",
            price: "400",
            rating: 96,
            description: "The Jackson Ultima Elite Pro ice skates are crafted for elite figure skaters seeking unmatched performance. The heat-moldable technology ensures a personalized fit, while the Matrix Legacy blade offers superior strength and stability for advanced jumps and spins.",
            image: "https://figure8.ca/shop/image/cache/catalog/product/Elite20Skate20Guards20on20skate-500x500.jpg"
        },
        {
            id: 6,
            name: "ICE SKATING BLADES COMPETITION",
            brand: "John Wilson",
            price: "300",
            rating: 90,
            description: "Upgrade your ice skating experience with John Wilson Competition blades. These high-quality blades are precision-machined for exceptional performance and speed. Suitable for advanced skaters and competitive athletes.",
            image: "https://www.ice.riedellskates.com/UserFiles/Ice/Category%20Images/Category_BootandBlade_439x468.jpg"
        },
    ];

    const brands = Array.from(new Set(items.map((item) => item.brand)));

    return (
        <div className="SKATING">
            <div className="div">
                <div className="overlap-7">
                    <div className="rectangle-3" >
                        <h1 className="h-1">SHOP SKATING</h1>
                    </div>
                </div>
                <div className="overlap-2">
                    <FacitedCheckboxes items={items} brands={brands} />
                </div>
            </div>
        </div>
    );
}

export default SKATING;