import './Snowboard.css'
import FacitedCheckboxes from './facitedCheckboxes';

const SNOWBOARDING = () => {
    const items = [
        {
            id: 1,
            name: "SNOWBOARD FREESTYLE",
            brand: "Burton",
            price: "400",
            rating: 88,
            description: "The Burton Freestyle snowboard is perfect for riders seeking a versatile and playful experience. Its twin shape and soft flex make it ideal for freestyle tricks and jumps in the park. The board's Flying V profile provides a balanced combination of control and float in various snow conditions.",
            image: "https://www.tactics.com/a/alwd/e/1819burtoncustom.jpg"
        },
        {
            id: 2,
            name: "SNOWBOARD ALL-MOUNTAIN",
            brand: "GNU",
            price: "350",
            rating: 90,
            description: "The GNU All-Mountain snowboard is designed for riders who enjoy exploring the entire mountain. Its directional shape and medium flex offer stability and versatility on groomers, powder, and off-piste terrain. The Magne-Traction edges provide excellent edge hold even on icy slopes.",
            image: "https://s3.amazonaws.com/images.gearjunkie.com/uploads/2022/11/jones-flagship-snowboard.jpg"
        },
        {
            id: 3,
            name: "SNOWBOARD WOMEN'S FREERIDE",
            brand: "Jones",
            price: "500",
            rating: 96,
            description: "The Jones Women's Freeride snowboard is engineered for female riders who love powder and backcountry adventures. Its directional shape, progressive sidecut, and hybrid camber profile deliver powerful turns and effortless float in deep snow. The board's eco-friendly construction reflects Jones' commitment to sustainability.",
            image: "https://m.media-amazon.com/images/I/71NRmNvSEEL._AC_UF894,1000_QL80_.jpg"
        },
        {
            id: 4,
            name: "SNOWBOARD BINDINGS",
            brand: "Union",
            price: "200",
            rating: 94,
            description: "Upgrade your snowboarding setup with Union bindings. Known for their durability and performance, these bindings offer a secure fit and optimal power transmission. The high-quality materials ensure reliable performance in all conditions.",
            image: "https://www.burton.com/static/product/W22/10563105016_1.png"
        },
        {
            id: 5,
            name: "SNOWBOARD BOOTS ALL-MOUNTAIN",
            brand: "Ride",
            price: "250",
            rating: 86,
            description: "Ride All-Mountain snowboard boots provide comfort and performance for riders of all levels. The heat-moldable liners offer a custom fit, while the BOA closure system allows for quick adjustments on the fly. These boots are suitable for exploring the mountain and hitting the park.",
            image: "https://images.evo.com/imgp/zoom/240090/1021045/rome-bodega-boa-snowboard-boots-2024-.jpg"
        },
        {
            id: 6,
            name: "SNOWBOARD GOGGLES",
            brand: "Oakley",
            price: "150",
            rating: 92,
            description: "Enhance your vision on the slopes with Oakley snowboard goggles. These high-performance goggles offer exceptional clarity and protection. The anti-fog technology and interchangeable lenses ensure clear vision in changing weather conditions.",
            image: "https://d3e54emdgoy1fq.cloudfront.net/uploads/product/image/426071/large_5b4c4-PHAT-PT2-HB-198A-WH-Winter-Sports-Ski-Snowboard-Goggles-for-Men-Women-White-Elastic-Band-PHAT-.jpg"
        },
    ];

    const brands = ["Burton", "GNU", "Jones", "Union", "Ride", "Oakley"];

    return (
        <div className="SNOWBOARDING">
            <div className="div">
                <div className="overlap-7">
                    <div className="rectangle-3" >
                        <h1 className="h-1">SHOP <br />
                            SNOWBOARDING</h1>
                    </div>
                </div>
                <div className="overlap-2">
                    <FacitedCheckboxes items={items} brands={brands} />
                </div>
            </div>
        </div>
    );
}

export default SNOWBOARDING;