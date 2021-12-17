import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import Spinner from "../components/Spinner"
import SchoolCard from "./SchoolCard"
import ActivityCard from "./ActivityCard"
import CountryCard from "./CountryCard"
import Image from 'next/image'
import chevronLeft from '/public/images/icons/chevron_left.svg'
import chevronRight from '/public/images/icons/chevron_right.svg'
import { useRouter } from 'next/router'
import i18n from '../util/i18n.json'

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

export default function MyCarousel(props) {

  const router = useRouter();
  const { locale } = router;
  const text = i18n[locale];
  
  // const CustomLeftArrow = ({ onClick, ...rest }) => {
  //   const { onMove, carouselState: { currentSlide, deviceType } } = rest;
  //   return (
  //     <button className="bg-blue-500" onClick={() => onClick()} >
  //       <Image src={chevronLeft} width={50} height={50} alt="chevron-left" />
  //     </button>
  //   );
  // };

  // const CustomRightArrow = ({ onClick, ...rest }) => {
  //   const { onMove, carouselState: { currentSlide, deviceType } } = rest;
  //   return (
  //     <button className="bg-blue-500" onClick={() => onClick()} >
  //       <Image src={chevronRight} width={50} height={50} alt="chevron-right" />
  //     </button>
  //   );
  // };

  return (
    <div className="container mx-auto">
      {props.data
        ? props.data.length > 0
          ? (
            <Carousel
              // customLeftArrow={<CustomLeftArrow />}
              // customRightArrow={<CustomRightArrow />}
              swipeable={true}
              draggable={true}
              showDots={false}
              responsive={responsive}
              ssr={true} // means to render carousel on server-side.
              infinite={true}
              autoPlay={props.deviceType !== "mobile" ? true : false}
              autoPlaySpeed={3000}
              keyBoardControl={true}
              customTransition="all .5"
              transitionDuration={500}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["tablet", "mobile"]}
              deviceType={props.deviceType}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
            >
              {props.data.map(el => {
                if (props.type === 'school') {
                  return <SchoolCard key={el.guid.rendered} el={el} />
                } else if (props.type === 'activity') {
                  return <ActivityCard key={el.guid.rendered} el={el} />
                } else {
                  return <CountryCard key={el.name} pais={el} />
                }
              })}
            </Carousel>
          // ) : <div className="bg-black"><Image src={chevronLeft} width={50} height={50} alt="chevron-left" /></div>
          ) : <p className="text-center capitalize">{text.globActEmpt}</p>
        : <Spinner />
      }
    </div>
  );
}