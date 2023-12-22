import { Link } from "react-router-dom";
import SectionContainer from "../SectionContainer/SectionContainer";
import Button from "../Button/Button";

const Banner = () => {
    return (
        <SectionContainer>
            <div className="hero min-h-[80vh]" style={{ backgroundImage: 'url(https://i.ibb.co/BGqc680/banner.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-2xl">
                        <h1 className="mb-5 text-6xl font-bold bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 text-transparent bg-clip-text">Master Your Priorities</h1>
                        <p className="mb-5 font-semibold text-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 text-transparent bg-clip-text">Focus on what matters, leave the rest behind.</p>
                        <Link to="/login">
                            <Button buttonName="Let's Explore"></Button>
                        </Link>
                    </div>
                </div>
            </div>
        </SectionContainer>
    );
};

export default Banner;