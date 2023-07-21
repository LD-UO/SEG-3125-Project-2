import './Hockey.css'
import FacitedCheckboxes from './facitedCheckboxes';

const HOCKEY = () => {
    const items = [
        {
            id: 1,
            name: "HOCKEY STICK VAPOR X2.7",
            brand: "Bauer",
            price: "150",
            rating: 85,
            description: "The Bauer Vapor X2.7 hockey stick is engineered for quick releases and accurate shots. Its low kick-point design enhances shot speed and allows for better control of the puck. Ideal for players seeking a lightweight and responsive stick.",
            image: "https://cdn.shoplightspeed.com/shops/640847/files/34109751/1652x2313x2/bauer-hockey-bauer-s19-vapor-x27-sr-stick.jpg"
        },
        {
            id: 2,
            name: "HOCKEY SKATES SUPREME 3S",
            brand: "CCM",
            price: "300",
            rating: 96,
            description: "Experience top-tier performance with CCM's Supreme 3S hockey skates. The 3D-lasted boot offers an anatomical fit, maximizing power and speed. The composite quarter package ensures excellent support and responsiveness on the ice.",
            image: "https://apim.sportchek.ca/v1/product/api/v1/product/image/69507994f?baseStoreId=SC&lang=en_CA&subscription-key=c01ef3612328420c9f5cd9277e815a0e&imwidth=1244"
        },
        {
            id: 3,
            name: "HOCKEY HELMET RE-AKT 150",
            brand: "Bauer",
            price: "200",
            rating: 92,
            description: "The Bauer RE-AKT 150 hockey helmet combines advanced protection and comfort. It features Multi-Density Impact Management System (MIPS) technology for rotational impact protection. The helmet's adjustable fit system ensures a secure and personalized fit.",
            image: "https://www.bauer.com/cdn/shop/products/646042__black_1.png?v=1661533119"
        },
        {
            id: 4,
            name: "HOCKEY GLOVES PRO STOCK",
            brand: "Warrior",
            price: "120",
            rating: 88,
            description: "The Warrior Pro Stock hockey gloves are designed for professional-level performance. With a mix of premium materials and advanced technologies, they offer outstanding protection and superior feel. Perfect for players seeking top-of-the-line gloves.",
            image: "https://images.squarespace-cdn.com/content/v1/5a6df59112abd97a0576f1d0/1643047553512-EJ7BE1O18ZXMDHQ0N3QO/CCMHG-QL_15_Ceci_USED.jpg?format=1000w"
        },
        {
            id: 5,
            name: "HOCKEY SHOULDER PADS JETSPEED FT1",
            brand: "CCM",
            price: "180",
            rating: 94,
            description: "The CCM Jetspeed FT1 hockey shoulder pads provide a lightweight and mobile fit. They offer elite-level protection with the use of D3O smart material, which absorbs impact energy. The segmented design ensures unrestricted movement on the ice.",
            image: "https://www.canadiensport.com/wp-content/uploads/2021/01/ft1-sp.jpg"
        },
        {
            id: 6,
            name: "HOCKEY PUCKS PACK",
            brand: "A&R",
            price: "20",
            rating: 99,
            description: "Stock up with this A&R hockey pucks pack. Made from durable rubber, these pucks are built to withstand intense gameplay. They are the perfect addition to your hockey training and game essentials.",
            image: "https://m.media-amazon.com/images/I/61AgddkcUFL._AC_UF894,1000_QL80_.jpg"
        },
    ];

    const brands = Array.from(new Set(items.map((item) => item.brand)));

    return (
        <div className="HOCKEY">
            <div className="div">
                <div className="overlap-7">
                    <div className="rectangle-3" >
                        <h1 className="h-1">SHOP HOCKEY</h1>
                    </div>
                </div>
                <div className="overlap-2">
                    <FacitedCheckboxes items={items} brands={brands} />
                </div>
            </div>
        </div>
    );
}

export default HOCKEY;