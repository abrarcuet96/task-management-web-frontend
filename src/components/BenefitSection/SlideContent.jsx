const SlideContent = ({ slideHeader, slideTitle, slideDescription }) => {
    return (
        <div>
            <div className="title" data-swiper-parallax="-300">
                {slideHeader}
            </div>
            <div className="subtitle" data-swiper-parallax="-200">
                {slideTitle}
            </div>
            <div className="text" data-swiper-parallax="-100">
                <p>
                    {slideDescription}
                </p>
            </div>
        </div>
    );
};

export default SlideContent;