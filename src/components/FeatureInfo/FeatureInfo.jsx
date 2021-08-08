import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import './FeatureInfo.css'
const FeaturedInfo = () => {
    return ( 
        <div className="featured">
            <div className="featureditem">
                <div className="featuredtitle">Revenue</div>
                    <div className="featuredmoneycontainer">
                        <span className="featuredmoney">$2,415</span>
                        <span className="featuredmoneyrate">-11.4
                        <ArrowDownward className="featuredicon negative"/> </span>
                    </div>
                    <span className="featuredsub">
                        Compared to last month
                    </span>
            </div>
            <div className="featureditem">
                <div className="featuredtitle">Sales</div>
                    <div className="featuredmoneycontainer">
                        <span className="featuredmoney">$2,415</span>
                        <span className="featuredmoneyrate">-1.4
                        <ArrowDownward className="featuredicon negative"/> </span>
                    </div>
                    <span className="featuredsub">
                        Compared to last month
                    </span>
            </div>
            <div className="featureditem">
                <div className="featuredtitle">Cost</div>
                    <div className="featuredmoneycontainer">
                        <span className="featuredmoney">$2,415</span>
                        <span className="featuredmoneyrate">+11.4
                        <ArrowUpward className="featuredicon"/> </span>
                    </div>
                    <span className="featuredsub">
                        Compared to last month
                    </span>
            </div>
        </div>
     );
}
 
export default FeaturedInfo;