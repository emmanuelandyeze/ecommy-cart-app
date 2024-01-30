import { getCategories } from "@/pages/api/category";
import CarouselList from "@/components/Carousel";
import { UserContext } from '../context/UserContext';
import { useContext } from 'react';
import { useRouter } from 'next/router';

export default function Home({ categories }) {
	const { user, token, loginUser, logoutUser } =
		useContext(UserContext);
	
	const router = useRouter();
	const fishSlideImages = ['https://res.cloudinary.com/dkhoomk9a/image/upload/v1706621835/yh1xvqz6xkposljzhvea.jpg', 
	'https://res.cloudinary.com/dkhoomk9a/image/upload/v1706621837/hlzk7wly3n2p2uq1gzst.jpg']
	const golfSlideImages = ['https://res.cloudinary.com/dkhoomk9a/image/upload/v1706621867/gfbeexajzzpzm125pdoh.jpg',
'https://res.cloudinary.com/dkhoomk9a/image/upload/v1706621867/artvldqedv3wx1gpclcx.jpg'
]

	return (
		<div className="bg-[#fff]">
			<div className="px-5 md:px-10">
				<CarouselList cards={fishSlideImages}/>
				{/* <Category category={categories[0]} key={categories[0].id} /> */}
				<div className="py-10 px-5 md:px-10 flex flex-col items-center gap-3 lg:gap-5">
				<div className="flex flex-col gap-3 bg-[#fff] p-4 md:p-8 rounded-md shadow-md text-center mb-6">
					<img
						src="/landing.png"
						alt=""
						className="h-auto w-auto .max-w-full"
					/>
					</div>
				</div>
				<CarouselList cards={golfSlideImages}/>
				{/* <Category category={categories[1]} key={categories[1].id} /> */}
				<div className="landing-text">
					<h1 className="text-3xl w-full font-bold text-center mx-3 lg:mx-0 lg:text-3xl lg:leading-snug">
						Finally, a greeting card you don’t throw away!
					</h1>
				</div>
			</div>
		</div>
	);
}
