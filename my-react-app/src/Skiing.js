import './skiing.css'
import ItemPreview from './itemPreview';

const Skiing = () => {
    return (
        <div className="SKIING">
            <div className="div">
                <div className="overlap-7">
                    <div className="rectangle-3" >
                        <h1 className="h-1">SHOP SKIING</h1>
                    </div>
                </div>
                <div className="overlap-2">
                    <div className="group-3">
                        <div className="rectangle-2" />
                        <div className="group-wrapper">
                            <div className="group-4">
                                <div className="text-wrapper-7">Large ☐</div>
                            </div>
                        </div>
                        <div className="group-5">
                            <div className="group-4">
                                <div className="text-wrapper-7">Extra Large ☑</div>
                            </div>
                        </div>
                        <div className="group-6">
                            <div className="group-7">
                                <div className="text-wrapper-8">Equipment Type</div>
                                <div className="text-wrapper-9">+</div>
                            </div>
                        </div>
                        <div className="group-8">
                            <div className="group-7">
                                <div className="text-wrapper-8">Brand</div>
                                <div className="text-wrapper-9">+</div>
                            </div>
                        </div>
                        <div className="group-6">
                            <div className="group-7">
                                <div className="text-wrapper-8">Equipment Type</div>
                                <div className="text-wrapper-9">+</div>
                            </div>
                        </div>
                        <div className="group-9">
                            <div className="group-10">
                                <div className="text-wrapper-8">Size</div>
                                <div className="text-wrapper-9">-</div>
                            </div>
                        </div>
                        <div className="group-11">
                            <div className="group-7">
                                <div className="text-wrapper-8">Price</div>
                                <div className="text-wrapper-9">+</div>
                            </div>
                        </div>
                        <div className="group-12">
                            <div className="group-4">
                                <div className="text-wrapper-7">Small ☐</div>
                            </div>
                        </div>
                        <div className="group-13">
                            <div className="group-4">
                                <div className="text-wrapper-7">Medium ☐</div>
                            </div>
                        </div>

                    </div>
                    <div className="item-preview-list">
                        <ItemPreview />
                        <ItemPreview />
                        <ItemPreview />
                        <ItemPreview />
                        <ItemPreview />
                        <ItemPreview />
                        <ItemPreview />
                        <ItemPreview />
                        <ItemPreview />
                        <ItemPreview />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skiing;